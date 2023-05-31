import Image from 'next/image';

import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import ScrollContainer from 'react-indiana-drag-scroll';

import { useDispatch, useSelector } from 'react-redux';

import InfoBox from '../components/ui/atoms/infoBox';
import ScrollIcon from '../components/ui/atoms/scrollIcon';
import LoadingSpinner from '../components/ui/atoms/loadingSpinner';
import Sidebar from '../components/ui/Sidebar/Sidebar';
import StyleChooseButtons from '../components/ui/styleChooseButtons';
import ContactBtn from '../components/ui/atoms/contactBtn';
import ContactForm from '../components/ui/contactForm';

import { kitchenTypePage } from '../gql/index';

import { resetRoomTypeState, changeKitchenStyle, changeApartPrice, changeRoomImage } from '../redux/actions/index';

import styles from './room.module.scss';

export default function KitchenType() {

    const [styleId, setStyleId] = useState(0);
    const [isScroll, setIsScroll] = useState(false);
    const [isPopup, setIsPopup] = useState(false);

    const dispatch = useDispatch();

    const { apartStyle, apartSize, generalStates, roomType } = useSelector((state) => state);
    const sidebarState = generalStates.open;

    useEffect(() => {
        // setting of initial style
        setStyleId(apartStyle.kitchenStyle);
    }, [])

    // console.log('apartStyle', apartStyle)
    // console.log('roomType111', roomType)

    const {data, error, loading} = useQuery(kitchenTypePage);
    if (loading) return <LoadingSpinner full={true}/>;
    if(error) return <p>Error, please read the console. {console.log(error)}</p>
    // console.log('data', data);

    let currentStyle = data.entry.styles[styleId];
    const styleImage = currentStyle.image[0];

    const changeStyle = (id) => {

      const price = {
        0: 0,
        1: apartSize.kitchen1Opt2Price,
        2: apartSize.kitchen1Opt3Price,
        3: apartSize.kitchen2Price,
      }

      setStyleId(id);
      currentStyle = data.entry.styles[id];
      dispatch(changeKitchenStyle(id, currentStyle.image[0], currentStyle.styleTitle));
      dispatch(changeRoomImage('küche', currentStyle.image[0]));
      dispatch(changeApartPrice('Küchendesign', price[id]));
      
      // if we have main style lines decomment this line (after selecting new style line all previous settings should be cancelled)
      // dispatch(resetRoomTypeState()); 
    }

    const setStyleTypeHandle = () => { 
        dispatch(changeKitchenStyle(styleId, styleImage, currentStyle.styleTitle));
        // dispatch(changeApartPrice('Küchendesign', price[styleId]));
        // dispatch(changeRoomImage('küche', styleImage));
    }

    const onCancel = () => {
		setIsPopup(false);
	};

    return (
        <div className={`${styles.type__wrapper}`} >   
            <ScrollContainer 
                className={`
                    ${sidebarState && styles.image__wrapperActive} 
                    ${styles.image__wrapper}
                `} 
                onStartScroll={() => setIsScroll(true)}
                onEndScroll={() => setIsScroll(false)}
                
            >
                <div  className={styles.full} style={{position:"relative", width: "100vw", height: "100vh"}}>
                    <Image 
                        priority 
                        src={styleImage.url} 
                        layout="fill" 
                        className={styles.full} 
                        placeholder="blur" 
                        blurDataURL={'/component.png'}
                        alt="Main image"
                    />
                </div>
            </ScrollContainer>

            {(sidebarState & !isScroll) ?  <ScrollIcon/> : null}

            {/* <div 	className={`${styles.btn__getContacts} ${sidebarState && styles.btn__getContacts_shift}`} 
				onClick={() => setIsPopup(true)}
			>
				<ContactBtn small={true}/>
			</div> */}

            <Sidebar 
                styleId={styleId} 
                activeStyle={(id) => changeStyle(id)} 
                apartmentPrice = {apartSize.price} 
                title="Küchendesign" 
                styleCards={data.entry.styles} 
                styleTypeSet={setStyleTypeHandle} 
                currentRoom={'kitchen-type'}
            />

            {/* <InfoBox  styleTitle={currentStyle.styleTitle} description={currentStyle.description}/> */}

            <StyleChooseButtons 
                room={'kitchen-type'} 
                styleTypeSet={setStyleTypeHandle} 
                activeStyle={(id) => changeStyle(id)} 
                styleId={styleId} 
                stylesAmount={data.entry.styles.length}
            />
            {isPopup && <ContactForm onCancel={onCancel}/>}
        </div>
    )
}
