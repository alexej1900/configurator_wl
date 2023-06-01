import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeRoomVisibility, changeStyleVisibility } from '../../../redux/actions/index';

import Button from '../atoms/button';

import styles from './sidebar.module.scss';

export default function SidebarButtons({ currentRoom, styleTypeSet, roomId, showArrow }) {
	const dispatch = useDispatch();

	const { roomsTitle, roomsSlug, rooms } = useSelector((state) => state.generalStates);
	const { apartStyle, apartSize } = useSelector(state => state);
	const [buttonHeight, setButtonHeight] = useState('');
	// const [secondButtonHeight, setSecondButtonHeight] = useState('');

	useEffect(() => {
		setButtonHeight(document.getElementById('hook1')?.clientHeight);

		// if (document.getElementById('hook3')?.clientHeight > document.getElementById('hook1')?.clientHeight) {
		// 	setSecondButtonHeight(document.getElementById('hook3')?.clientHeight);
		// } 

  }, [currentRoom]);

	// console.log('buttonHeight', buttonHeight)

	let nextLink, prevLink;

	if (currentRoom === 'type') {
		nextLink = {link: `/${rooms[0].toLowerCase()}`, title: rooms[0], icon: 'nextRoom'};
		prevLink = '/';
	} else {
		for (let i = 0; i < rooms.length; i++) {   
			if (rooms[i].toLowerCase() === currentRoom) {
				nextLink = rooms[i+1] 
					?  {link: `/${rooms[i+1].toLowerCase()}`, title: rooms[i+1], icon: 'nextRoom'}
					:  {link: '/summary', title: 'Abschliessen', icon: 'checkIcon'};

				prevLink = rooms[i-1] ? rooms[i-1].toLowerCase() : isStylePageExist ? '/type' : '/';
			}
		}
	}
	
	const showRoomClick = () => {
		dispatch(changeRoomVisibility(true))
		dispatch(changeStyleVisibility(true));
	}
			
	return (
		<div className={`${styles.sidebar__button} ${currentRoom === 'kitchen-type' && styles.sidebar__typeRoomButtons}`}>
			{showArrow 
				? <div className={`${styles.button_down}`}></div>
				: null 
			} 
			<div className={styles.btn__wrapper}>
				<>
					<div className={`${styles.btn__back}`}>
						<Button 
							title="Zurück"  
							href={`${prevLink}`} 
							type="back" 
							iconName="arrow" 
							iconColor="#fff" 
							style={{height: buttonHeight}}/>
					</div>

					<div className={`${styles.btn__showRoom}`} id="hook3">
						<Button 
							title="Raum anzeigen" 
							type="back" 
							iconName="showRoom" 
							iconColor="#fff" 
							clickFn={showRoomClick}
							style={{height: buttonHeight
							}}
							/>
					</div>

					<div className={`${styles.btn__primary} ${currentRoom !== 'kitchen-type' && styles.btn__next}`} id="hook1">
						<Button 
							title={currentRoom === 'kitchen-type' ? 'Wahl bestätigen' : nextLink.title}
							href={nextLink.link}
							type="primary" 
							iconName={currentRoom === 'kitchen-type' ? 'confirm' : currentRoom === 'schlafzimmer' ? 'summary' :'arrow-right'} 
							iconColor="#fff" 
							iconRight={currentRoom === 'schlafzimmer' ? false : true }
							clickFn={styleTypeSet}
							// style={{height: secondButtonHeight}}
							/>
					</div>
				</>  
			</div>
		</div>
  )
}
