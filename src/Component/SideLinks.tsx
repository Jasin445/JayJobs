import { NavLink, useLocation } from "react-router-dom"
import Images from "./Images"

interface sideLinksProps{
    text: string,
    url: string
    link: any,
    onPress: any
}

export function SideLinks({text, url, link, onPress}: sideLinksProps){
    const location = useLocation()
    // const urls: URL = new URL(window.location.href)

    const isActive = link === location.pathname
    return  <NavLink onClick={onPress} to={link} className={`${isActive ? "bg-slate-300 rounded" : ''}`} end>
    <div className={ `flex gap-3 px-8 py-3 ${!isActive ? 'hover:bg-gray-300' : ''}` }>
        <Images images={url} alt={`image of ${text}`}></Images>
        <p>{text}</p>
    </div>
</NavLink>
}