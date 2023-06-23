import { useSelector } from "react-redux";

export default  function getNavButtonsLinks(currentRoom) {
  const { roomsTitle, roomsSlug, isStylePageExist } = useSelector((state) => state.generalStates);

  let nextLink, prevLink;


	if (currentRoom === 'type') {
		nextLink = {link: `/${roomsSlug[0].toLowerCase()}`, title: roomsTitle[0], icon: 'nextRoom'};
		prevLink = '/';
	} else {
		for (let i = 0; i < roomsSlug.length; i++) {   
			if (roomsSlug[i].toLowerCase() === currentRoom) {
				nextLink = roomsTitle[i+1] 
					?  {link: `/${roomsSlug[i+1].toLowerCase()}`, title: roomsTitle[i+1], icon: 'nextRoom'}
					:  {link: '/summary', title: 'Abschliessen', icon: 'checkIcon'};

				prevLink = roomsSlug[i-1] ? roomsSlug[i-1].toLowerCase() : roomsSlug[i].toLowerCase() == 'kuche' ? '/type' : '/';
			}
		}
	}

  return {
    nextLink,
    prevLink
  }
}