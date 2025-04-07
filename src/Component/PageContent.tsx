import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Images from "./Images";
import profile from '../assets/user profile.png'
import notification from '../assets/1827422.png'
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { emailAction } from "./store";

export default function PageContent() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(() => {
        // Listen for authentication state changes
        const unsubscribe = auth.onAuthStateChanged((user: any) => {
                dispatch(emailAction.setEmail(user?.email))
            if (!user) {
                localStorage.removeItem('token');
                navigate('/authentication?mode=login&message=User no longer exists!');
            }
        });

        // Function to periodically check if the user is deleted
        const checkUserDeletion = async () => {
            const user = auth.currentUser;
            if (user) {
                try {
                    await user.reload();
                    if (!auth.currentUser) {
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

        <SideBar />

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

        <div className=" pl-[300px] mt-[90px]">

            <Outlet />
        </div>




    </>
} 