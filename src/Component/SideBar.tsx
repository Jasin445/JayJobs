import dashboard from '../assets/dashboard.png'
import profile from '../assets/user profile.png'
import jobs from '../assets/jobs.png'
import applications from '../assets/application.png'
import settings from '../assets/settings.png'
import logout from '../assets/logout.png'
import { SideLinks } from "./SideLinks";
import { useDispatch, useSelector } from 'react-redux'
import { toggleAction } from './store'
import closeIcon from '../assets/vecteezy_cross-mark-icon-deny-close-wrong-mark-symbol-negative_17129683.svg'
import { useEffect, useRef } from 'react'
import Images from './Images'

interface SideBarProps{
    svgRef: any
}

export default function SideBar({svgRef}: SideBarProps) {
    const toggle = useSelector((state: any) => state.toggle.isToggled)
    const dispatch = useDispatch();
    const sideBarRef: any = useRef(null)

    const offSideBar = (event: MouseEvent) => {
        if (
            svgRef.current &&
            event.target instanceof Node && // Add this type guard
            !svgRef.current.contains(event.target) &&
            sideBarRef.current &&
            event.target instanceof Node &&// Add this type guard
            !sideBarRef.current.contains(event.target)
        ) {
           closeSideNav()
        }
    }; 
          
          const removeSideBar = () => {
              if (window.innerWidth < 940) { // Use window.innerWidth directly
                  closeSideNav()
              }
          };
        
        useEffect(() => {
            
                const debouncedRemoveSideBar = () => {
                    // Implement debouncing logic here if needed
                    removeSideBar();
                };
            
                window.addEventListener('resize', debouncedRemoveSideBar);
                window.addEventListener('click', offSideBar);
            
                return () => {
                    window.removeEventListener('resize', debouncedRemoveSideBar);
                    window.removeEventListener('click', offSideBar);
                };
            }, [dispatch, svgRef, sideBarRef]); // Add dependencies to useEffect
            

    function loggedOut(){
        localStorage.removeItem('token');
    }

    function closeSideNav(){
        dispatch(toggleAction.toggleFalse())
    }

    return <>
        <main ref={sideBarRef} className={`fixed ${toggle ? 'max-mm:fixed max-mm:w-[250px]' : 'max-mm:static max-mm:hidden'} top-[90px] left-0 flex z-40 items-start w-[300px] flex-col bg-gray-200 h-[100vh] py-[50px] hider`}>

        <Images images={closeIcon} alt={'close sidebar icon'} onClick={closeSideNav} className="hidden max-mm:block absolute top-0 right-0 w-11"/>

            <div className="flex w-full flex-col gap-5 h-[72vh]">

                <SideLinks
                    link='/jayjobs'
                    text={"Dashboard"}
                    url={dashboard} 
                    onPress={closeSideNav} />

                <SideLinks
                    link='/jayjobs/myprofile'
                    text={"Profile"}
                    url={profile} 
                    onPress={closeSideNav} />

                <SideLinks
                    link='/jayjobs/myjobs'
                    text={"Jobs"}
                    url={jobs} 
                    onPress={closeSideNav} />

                <SideLinks
                    link='/jayjobs/myapplications'
                    text={"Applications"}
                    url={applications} 
                    onPress={closeSideNav} />

            </div>

            <div className="flex flex-col w-full gap-5 absolute bottom-[130px]">

                <SideLinks
                    link='/jayjobs/settings'
                    text={"Settings"}
                    url={settings}
                    onPress={closeSideNav} />

                <SideLinks
                    link={'/authentication?mode=login&message=Login again to continue'}
                    text={"Logout"}
                    url={logout}
                    onPress={loggedOut} />

            </div>
        </main>
    </>
}