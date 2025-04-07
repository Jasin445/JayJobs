import dashboard from '../assets/dashboard.png'
import profile from '../assets/user profile.png'
import jobs from '../assets/jobs.png'
import applications from '../assets/application.png'
import settings from '../assets/settings.png'
import logout from '../assets/logout.png'
import { SideLinks } from "./SideLinks";


export default function SideBar() {

    function loggedOut(){
        localStorage.removeItem('token');
    }

    return <>
        <main className="fixed top-[90px] left-0 flex z-40 items-start w-[300px] flex-col bg-gray-200 h-[100vh] py-[50px] hider">
           

            <div className="flex w-full flex-col gap-5 h-[72vh]">

                <SideLinks
                    link='/jayjobs'
                    text={"Dashboard"}
                    url={dashboard} 
                    onPress={undefined} />

                <SideLinks
                    link='/jayjobs/myprofile'
                    text={"Profile"}
                    url={profile} 
                    onPress={undefined} />

                <SideLinks
                    link='/jayjobs/myjobs'
                    text={"Jobs"}
                    url={jobs} 
                    onPress={undefined} />

                <SideLinks
                    link='/jayjobs/myapplications'
                    text={"Applications"}
                    url={applications} 
                    onPress={undefined} />

            </div>

            <div className="flex flex-col w-full gap-5 absolute bottom-[130px]">

                <SideLinks
                    link='/jayjobs/settings'
                    text={"Settings"}
                    url={settings} 
                    onPress={undefined} />

                <SideLinks
                    link={'/authentication?mode=login&message=Login again to continue'}
                    text={"Logout"}
                    url={logout} 
                    onPress={loggedOut} />

            </div>
        </main>
    </>
}