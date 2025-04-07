import { Outlet } from "react-router-dom";
import LandingExtra from "./LandingExtra";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(){
    
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