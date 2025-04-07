import { Outlet, useLocation } from "react-router-dom";
import LandingExtra from "./LandingExtra";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

export default function Layout(){


    const location = useLocation()

      useEffect(() => {
            window.scrollTo(0, 0);
            localStorage.removeItem('oobCode')
        }, [location.pathname]);
    
    return <>
    <div className="">
        <Navbar>
        <LandingExtra />
        </Navbar>

        <div className="mt-[70px] px-[2.5%]">
            <Outlet></Outlet>
        </div>

        <Footer></Footer>
    </div>
    </>
}