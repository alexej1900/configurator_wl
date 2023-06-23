import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeRoomVisibility, changeStyleVisibility } from '../../../redux/actions/index';

import Button from '../atoms/button';

import styles from './sidebar.module.scss';
import getNavButtonsLinks from '../../../pages/api/getNavButtonsLinks';

export default function SidebarButtons({ currentRoom, styleTypeSet, roomId, showArrow }) {
	const dispatch = useDispatch();

	const { roomsTitle, roomsSlug } = useSelector((state) => state.generalStates);
	const { apartStyle, apartSize } = useSelector(state => state);
	const [buttonHeight, setButtonHeight] = useState('');
	// const [secondButtonHeight, setSecondButtonHeight] = useState('');
	// console.log('rooms', roomsTitle, roomsSlug)
	useEffect(() => {
		setButtonHeight(document.getElementById('hook1')?.clientHeight);
  }, [currentRoom]);

	const { nextLink, prevLink } = getNavButtonsLinks(currentRoom);

	const showRoomClick = () => {
		dispatch(changeRoomVisibility(true))
		dispatch(changeStyleVisibility(true));
	}
			
	return (
		<div className={`${styles.sidebar__button} ${currentRoom === 'type' && styles.sidebar__typeRoomButtons}`}>
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

					<div className={`${styles.btn__primary} ${currentRoom !== 'type' && styles.btn__next}`} id="hook1">
						<Button 
							title={currentRoom === 'type' ? 'Wahl bestätigen' : nextLink.title}
							href={nextLink.link}
							type="primary" 
							iconName={currentRoom === 'type' ? 'confirm' : currentRoom === 'flur' ? 'summary' :'arrow-right'} 
							iconColor="#fff" 
							iconRight={currentRoom === 'flur' ? false : true }
							clickFn={styleTypeSet}
							// style={{height: secondButtonHeight}}
							/>
					</div>
				</>  
			</div>
		</div>
  )
}
