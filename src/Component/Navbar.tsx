import { Link } from "react-router-dom"
import darkMode from '../assets/light.png'
import Images from "./Images";
import { navProps } from "./utils";


export default function Navbar({children}: navProps) {
    return <>
        <nav className="fixed top-0 w-[100%] z-[500] bg-white h-[90px] border-b-2 border-gray-200">
            <div className="h-[90px] w-[95%] m-auto flex justify-between items-center">
                <div>
                <h1 className="text-[27px] max-sm:text-[25px]">JayJobs</h1>

                </div>
              
                <div className="flex gap-10 items-center justify-between max-sm:gap-3">
                   
                    {children}
                    
                    <Link to={''}>
                        <Images 
                        images={darkMode} 
                        alt='image of darkmode' />
                    </Link>
                </div>

                

            </div>
        </nav>
    </>
}