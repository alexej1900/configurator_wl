import { useSelector } from "react-redux";

export default  function getNavButtonsLinks(currentRoom) {
  const { roomsTitle, roomsSlug, isStylePageExist } = useSelector((state) => state.generalStates);

  let nextLink, prevLink;


	if (currentRoom === 'type') {
		nextLink = {link: `/${roomsTitle[0].toLowerCase()}`, title: roomsTitle[0], icon: 'nextRoom'};
		prevLink = '/';
	} else {
		for (let i = 0; i < roomsTitle.length; i++) {   
			if (roomsTitle[i].toLowerCase() === currentRoom) {
				nextLink = roomsTitle[i+1] 
					?  {link: `/${roomsTitle[i+1].toLowerCase()}`, title: roomsTitle[i+1], icon: 'nextRoom'}
					:  {link: '/summary', title: 'Abschliessen', icon: 'checkIcon'};

				prevLink = roomsTitle[i-1] ? roomsTitle[i-1].toLowerCase() : isStylePageExist ? '/type' : '/';
			}
		}
	}

  return {
    nextLink,
    prevLink
  }
}