import {AiOutlineHome, AiOutlineSetting, AiOutlineHistory} from 'react-icons/ai'

export const footerLink = [
    {
        name: 'Settings',
        link: '/settings',
        key: 'settings',
        icon : <AiOutlineSetting/>
    },
    {
        name: 'Home',
        link: '/',
        key: 'home',
        icon : <AiOutlineHome/>
    },
    {
        name: 'History',
        link: '/history',
        key: 'history',
        icon : <AiOutlineHistory/>
    },
]