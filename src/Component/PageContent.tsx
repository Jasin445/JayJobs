import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Images from "./Images";
import profile from '../assets/user profile.png'
import notification from '../assets/1827422.png'
import { useEffect, useRef } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { emailAction, toggleAction } from "./store";

export default function PageContent() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation()
    const toggle = useSelector((state: any) => state.toggle.isToggled)
    const svgRef: any = useRef(null)


    const toggleMenu = () => {
        dispatch(toggleAction.toggle())
    };

        
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(toggleAction.toggleFalse())
        localStorage.removeItem('oobCode')
    }, [location.pathname, dispatch]);

    useEffect(() => {
        // Listen for authentication state changes
        const unsubscribe: any = auth?.onAuthStateChanged((user: any) => {
                dispatch(emailAction.setEmail(user?.email))
            if (!user) {
                localStorage.removeItem('token');
                navigate('/authentication?mode=login&message=User no longer exists!');
            }
        });

        // Function to periodically check if the user is deleted
        const checkUserDeletion = async () => {
            const user = auth?.currentUser;
            if (user) {
                try {
                    await user.reload();
                    if (!auth?.currentUser) {
                        throw new Error("User no longer exists");
                    }
                } catch (error) {
                    navigate('/authentication?mode=login&message=User no longer exists!');
                }
            }
        };

        // Run the deletion check every 10 seconds
        const interval = setInterval(checkUserDeletion, 10000);

        return () => {
            clearInterval(interval);
            unsubscribe();
        };
    }, [navigate]);


    return <>



        <SideBar svgRef={svgRef} />

        <Navbar>
            <Link to='#'>
                <Images
                    images={profile}
                    alt='image of profile' />
            </Link>
            <Link
                to={''}>
                <Images
                    images={notification}
                    alt='image of notification' />
            </Link>
        </Navbar>

        <div className={`relative pl-[300px] mt-[90px] ${toggle ? "max-mm:pl-[250px]" : "max-mm:pl-0 overscroll-behavior-hidden"} bg-gray-100 pt-3`}>
        <div className={toggle ? `max-mm:absolute max-mm:top-0 max-mm:left-[250px] max-mm:w-full max-mm:bg-black max-mm:h-[100vh] max-mm:z-50 opacity-35`: undefined}></div>

        <div className={`hidden max-mm:block mb-0 ${toggle ? 'max-mm:hidden' : undefined}`}>
              <button ref={svgRef} onClick={toggleMenu} className="text-gray-600 ml-[2%] pt-3">
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                   
                  />
                </svg>
              </button>
            </div>

            <Outlet />
        </div>




    </>
} 