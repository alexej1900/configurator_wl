import { useState, useEffect, useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import Image from 'next/image';

import Sidebar from '../components/ui/Sidebar/Sidebar';
import PinsList from '../components/ui/pinsList';
import ScrollIcon from '../components/ui/atoms/scrollIcon';
import StyleChooseButtons from '../components/ui/styleChooseButtons';
import ContactForm from '../components/ui/contactForm';
import ConfirmationForm from '../components/ui/atoms/confirmationForm';
import ContactBtn from '../components/ui/atoms/contactBtn';
import LoadingSpinner from '../components/ui/atoms/loadingSpinner';
import IconComponent from '../components/ui/atoms/iconComponent';

import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { RoomData } from '../gql/index';

import { useDispatch, useSelector } from "react-redux";
import { 
	changeRoomType, 
	changeSidebarState, 
	changeActivePin, 
	changeActiveMod, 
	changeRoomVisibility, 
	changeLoadingState,
	changeApartPrice,
	changePinStatus,
} from '../redux/actions/index';

import styles from './room.module.scss';

let ROOM_TYPE;

export default function Room() {
	const router = useRouter();
	ROOM_TYPE = router.query.room;
	const path = router.asPath.slice(1);

	const [styleId, setStyleId] = useState(0);
	const [largeImage, setLargeImage] = useState(false);
	const [isScroll, setIsScroll] = useState(false);
	const [isPopup, setIsPopup] = useState(false);
	const [isFloorConfirmation, setIsFloorConfirmation] = useState(false);
	const [isConfirmation, setIsConfirmation] = useState(false);
	const [optionData, setOptionData] = useState({});

	const dispatch = useDispatch();

	const { apartSize, apartStyle, generalStates, roomType} = useSelector((state) => state);
	const sidebarState = generalStates.open;
	const isImageload = generalStates.loading;
	const roomState = roomType[ROOM_TYPE?.slice(0, -1) === 'küche' ? 'küche' : ROOM_TYPE];

	const roomsWithChangeableFloor = ['wohnzimmer', 'küche', 'schlafzimmer' , 'gang'];
	// console.log('generalStates', generalStates.pinStatus)

	const container = useRef(null);

	useEffect(() => {
		setStyleId(apartStyle.style);
	}, []);

	// animation function =======================
	const moveImageFunction = async() => {
			const goal = window.innerWidth < 1500 ? 750 : 400
	    for (let x = 0; x <= goal; x += 25) {
				const scrollableImage = container.current?.getElement();
				if (x < 400) scrollableImage?.scrollTo({left: sidebarState ? x : 0, behavior: 'smooth'}); 
				// else scrollableImage?.scrollTo({left: sidebarState ? 800 - x : 0, behavior: 'smooth'});
	    }
	}
	// end of animation function =================

	useEffect(async() => {
		dispatch(changeLoadingState(true));

		if (!isImageload) {  // adding animation
			document.querySelector(`.${styles.image__wrapper}`)?.classList.add(styles.animate);

			setTimeout(() => {
					document.querySelector(`.${styles.image__wrapper}`)?.classList.remove(styles.animate);
					moveImageFunction();
			}, 1500);

			//if we have in state image of current room, we set this image
			roomType[`${ROOM_TYPE?.toLowerCase()}`] 
				? setLargeImage(roomType[`${ROOM_TYPE.toLowerCase()}`].image) 
				: setLargeImage(false);
			}
	}, [path]);

	useEffect(async() => {
		
		setTimeout(() => {
			if (data && ROOM_TYPE === 'küche1' || ROOM_TYPE === 'küche2' || ROOM_TYPE === 'küche3') {
				const modifications = 
					data?.entry.mods[0].modificationsTypes && data?.entry.mods[0].modificationsTypes
						.filter((item) => item.modificationName !== 'Boden' && item.modificationName !== 'Decke');

				modifications && modifications.forEach(item => {
					changeType(
						0, 
						item.modificationName, 
						item.modificationItemExample[0].modificationImage[0].url, 
						item.modificationItemExample[0].modificationTitle,
						item.modificationItemExample[0].modificationStyle,
						item.modificationItemExample[0].modificationDescr,
						item.modificationItemExample[0].modsAdditionalPrice,
						)
				});
			}
			setStyleId(0);
		}, 1000);
	}, [ROOM_TYPE])

	const { data, loading, error } = useQuery(RoomData(ROOM_TYPE));
	if (loading) return <LoadingSpinner full={true}/>
	// else if (!largeImage){
	// 	document.querySelector(`.${styles.image__wrapper}`)?.classList.add(styles.animate);

	// 	setTimeout(() => {
	// 			document.querySelector(`.${styles.image__wrapper}`)?.classList.remove(styles.animate);
	// 			// moveImageFunction();
	// 	}, 2500);
	// }

	if(error) return <p>Error, please read the console. {console.log(error)}</p>
  
	// const addAnimationFunction = () => {
	// 	document.querySelector(`.${styles.image__wrapper}`)?.classList.add(styles.animate);

	// 	setTimeout(() => {
	// 			document.querySelector(`.${styles.image__wrapper}`)?.classList.remove(styles.animate);
	// 			// moveImageFunction();
	// 	}, 1000);
	// }
	
	const activeImage = roomState?.image 
		? roomState.image 
		: data.entry.roomStyles[0].roomStyleExamples[styleId].styleDefaultImage[0];

  const modifyData = data.entry.mods[0].modificationsTypes;
    
  const changeType = (index, modName,  featuredImage, styleTitle, subtitle, description, additionalPrice, modGroupTitle, mainStyle) => {
		// console.log('index, modName,  featuredImage, styleTitle, subtitle, description, modGroupTitle, mainStyle', {index, modName,  featuredImage, styleTitle, subtitle, description, additionalPrice, modGroupTitle, mainStyle})
		setOptionData({index, modName,  featuredImage, styleTitle, subtitle, description, additionalPrice, modGroupTitle, mainStyle});
		const room = (ROOM_TYPE.slice(0, -1) === 'küche') ? ROOM_TYPE.slice(0, -1) : ROOM_TYPE;
		
		if (room === 'wohnzimmer') {  // set floor type for all types of rooms
			roomsWithChangeableFloor
				.forEach((room) => dispatch(changeRoomType(room, modName, index,  featuredImage, styleTitle, subtitle, description, additionalPrice, modGroupTitle, largeImage, mainStyle)))
			dispatch(changeApartPrice(modName, additionalPrice));
		} else if (modName === 'Boden') {  // else show popup with confirmation
			setIsFloorConfirmation(true);
			return;
		} else if (modName === 'Decke') {  // else show popup with confirmation
			setIsConfirmation(true);
			return;
		} else { // for other options
			dispatch(changeRoomType(
				room, 
				modName, 
				index,  
				featuredImage, 
				styleTitle, 
				subtitle, 
				description, 
				additionalPrice, 
				modGroupTitle, 
				largeImage, 
				mainStyle
			));
			dispatch(changeApartPrice(modName, additionalPrice));
		}

    ROOM_TYPE.slice(0, -1) !== 'küche' && dispatch(changeActivePin(modName));
  }
	
	const changeFloorType = () => { // change floor type for all rooms, change price
		roomsWithChangeableFloor
			.forEach((room) => dispatch(changeRoomType(
				room, 
				'Boden', 
				optionData.index,  
				optionData.featuredImage, 
				optionData.styleTitle, 
				optionData.subtitle, 
				optionData.description, 
				optionData.additionalPrice, 
				optionData.modGroupTitle, 
				optionData.mainStyle))
			)
		dispatch(changeApartPrice('Boden', optionData.additionalPrice));
		onCancel();
	}

	const changCeilingType = () => { // change floor type for all rooms, change price
		roomsWithChangeableFloor
			.forEach((room) => dispatch(changeRoomType(
				room, 
				'Decke', 
				optionData.index,  
				optionData.featuredImage, 
				optionData.styleTitle, 
				optionData.subtitle, 
				optionData.description, 
				optionData.additionalPrice, 
				optionData.modGroupTitle, 
				optionData.mainStyle))
			)
		dispatch(changeApartPrice('Decke', optionData.additionalPrice));
		onCancel();
	}

	const openModificationsList = (modificationName) => {
		dispatch(changeActivePin(modificationName));
	}

	const pinClickHandler = (modName) => {
		dispatch(changeSidebarState(true));
		dispatch(changeRoomVisibility(false))
		openModificationsList(modName);
		dispatch(changeActiveMod(modName));
	}

	//popup function
	
	const onCancel = () => {
		setIsPopup(false);
		setIsConfirmation(false);
		setIsFloorConfirmation(false);
		dispatch(changeLoadingState(false))
	};

	// console.log('data.entry.mods', data.entry)
	return (
		<>
			<div className={`${styles.type__wrapper}`} >  
				<ScrollContainer 
					className={`${sidebarState && styles.image__wrapperActive} ${styles.image__wrapper}`} 
					onStartScroll={() => setIsScroll(true)}
					onEndScroll={() => setIsScroll(false)}
					id={'image__wrapper'}
					vertical={false}
					ref={container}
				>
					<div className={`${styles.full} ${isImageload && styles.blur}`} id='fullImage' style={{position:"relative", width: "100vw", height: "100vh"}}>
						<Image 
							src={largeImage ? largeImage.url : activeImage.url} 
							width={window.innerWidth < 1500 ? 1500 : window.innerWidth}
							height={window.innerHeight}
							layout='fixed' 
							// layout='fill' 
							// object-fit="cover" 
							// style={{objectPosition: 'center'}}
							// style={{objectFit: "contain"}}
							onLoadingComplete={() => dispatch(changeLoadingState(false))}
							priority 
							alt="Main image"
						/>
					</div>

					{generalStates.pinStatus  && <PinsList data={modifyData} roomState={roomState} pinClickHandler={pinClickHandler} />}
				</ScrollContainer>

				{(sidebarState & !isScroll) ? <ScrollIcon/> : null}

				<div 	className={`${styles.btn__getContacts} ${sidebarState && styles.btn__getContacts_shift}`} 
					onClick={() => setIsPopup(true)}
				>
					<ContactBtn small={false}/>
				</div>

				<div 	className={`${styles.btn__pinsHide} ${sidebarState && styles.btn__pinsHide_shift} center`} 
					onClick={() => dispatch(changePinStatus(!generalStates.pinStatus))}
				>
					<IconComponent name={generalStates.pinStatus ? 'pin_is_open' : 'pin_is_close'} color="#fff"/>
				</div>

				<Sidebar 
					styleId={styleId} 
					apartmentPrice = {apartSize.price} 
					modifyData={modifyData}
					setLargeImage={setLargeImage}
					activeStyle = { 
						(index, modName, featuredImage, styleTitle, subtitle, additionalPrice, modGroupTitle, mainStyle) => changeType(index, modName,  featuredImage, styleTitle, subtitle, additionalPrice, modGroupTitle, mainStyle)
					}
					currentRoom={ROOM_TYPE}
					title={data.entry.title} 
					stylesCards={true} 
					// styleTypeSet={}
				/>

				<StyleChooseButtons room={ROOM_TYPE ? ROOM_TYPE : path} styleTypeSet={() => console.log()} />
			</div>

			{isPopup && <ContactForm onCancel={onCancel}/>}
			{isConfirmation 
				&& <ConfirmationForm 
						onCancel={onCancel} 
						onConfirm={changCeilingType}
						title={'Zimmerübergreifende Option'}
						child={<>
										<div>Eine Anpassung der Option “Decke” wird auch in weiteren Räumen übernommen:</div>
											<ul>
												{roomsWithChangeableFloor.map((roomItem, index) => {
													if (roomItem !== ROOM_TYPE ? ROOM_TYPE : path) return <li key={index}>{roomItem}</li>
												})}
											</ul>
										</>
									}
						/>
				}
			{isFloorConfirmation 
				&& <ConfirmationForm 
						onCancel={onCancel} 
						onConfirm={changeFloorType}
						title={'Zimmerübergreifende Option'}
						child={<>
										<div>Eine Anpassung der Option “Boden” wird auch in weiteren Räumen übernommen:</div>
											<ul>
												{roomsWithChangeableFloor.map((roomItem, index) => {
													if (roomItem !== ROOM_TYPE ? ROOM_TYPE : path) return <li key={index}>{roomItem}</li>
												})}
											</ul>
										</>
									}
						/>
				}
		</>
	);
}
