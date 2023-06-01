import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeStyleVisibility} from '/redux/actions/index';

import Button from './atoms/button';

import styles from './styleChooseButtons.module.scss';

export default function StyleChooseButtons({room, styleTypeSet, activeStyle, styleId, stylesAmount}) {
  const dispatch = useDispatch();

	const [currentStyleId, setCurrentStyleId] = useState(styleId);
	const [buttonHeight, setButtonHeight] = useState('');


	const { roomsTitle, roomsSlug, rooms } = useSelector((state) => state.generalStates);
	const { apartSize } = useSelector(state => state);
	const apartStyle = useSelector((state) => state.apartStyle);
	const roomId = useSelector(state => state.apartSize.apartmentId);

	useEffect(() => {
		setCurrentStyleId(styleId)
	},[styleId])

	useEffect(() => {
		setButtonHeight(document.getElementById('hook2')?.clientHeight)
  }, [room]);
	
	let nextLink, prevLink;

	if (room === 'type') {
		nextLink = {link: '/'+rooms[0].toLowerCase(), title: rooms[0], icon: 'nextRoom'};
		prevLink = '/';
	} else {
		for (let i = 0; i < rooms.length; i++) {   
			if (rooms[i].toLowerCase() === room) {
				nextLink = rooms[i+1] 
					?  {link: '/'+rooms[i+1].toLowerCase(), title: rooms[i+1], icon: 'nextRoom'}
					:  {link: '/summary', title: 'Abschliessen', icon: 'checkIcon'};

				prevLink = rooms[i-1] ? rooms[i-1].toLowerCase() : '/type';
			}
		}
	}

	const changeStyle = () => {
		activeStyle(++currentStyleId%stylesAmount);  //Last number depends on amount of style lines
	}

  const nextStepClick = () => {
    room === 'kitchen-type' ? changeStyle() : dispatch(changeStyleVisibility(false));
  }
			
	return (
		<div className={styles.style__button}>
			{room === 'kitchen-type' 
				? <>
						<Button 
							title='Wahl bestätigen'
							href={nextLink.link}
							type="primary" 
							iconName='confirm'
							iconColor="#fff" 
							clickFn={styleTypeSet}
							style={{height: buttonHeight}}
						/>
						<div className={`${styles.btn__next}`}>
							<Button 
								title="Nächster Stil" 
								type="secondary" 
								iconName="arrow" 
								iconColor="#3C6589" 
								iconRight={true} 
								clickFn={nextStepClick}
								style={{height: buttonHeight}}
								/>
						</div>
					</>
				: <>
						<Button 
							title="Optionen" 
							type="back" 
							iconName="options" 
							iconColor="#fff" 
							clickFn={nextStepClick}
							style={{height: buttonHeight}}
							/>

						<div className={`${styles.btn__next}`} id="hook2">
							<Button title={nextLink.title} href={nextLink.link} type="primary" iconName="arrow" iconColor="#fff" iconRight={true} clickFn={styleTypeSet}/>
						</div>
					</>
			}
		</div>
  )
}
