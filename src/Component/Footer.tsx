import { LandingButton } from "./utils";
import instagram from '../assets/instagram1.jpeg'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.jpeg'
import Images from "./Images";
import { Link } from "react-router-dom";

export default function Footer() {
    const date = new Date();

    return <div className="mt-[100px] bg-slate-500 w-full pt-16 px-[9%]">
        <h1 className="s mb-16 text-4xl">JayJobs</h1>
        <div className="grid gridNow mb-14">
            <div>

                <p className="mr-16 text-[19px]">Get Jobs according to your line of work, and your level of expertise.</p>
            </div>
            <div>
                <p className="mb-4 mr-12 text-[19px]">Get messages about available Jobs associated with your Niche </p>
                <div className="flex items-center m gap-3">
                    <input
                        className="px-2 h-10"
                        type="text"
                        placeholder="Your Email" />
                    <LandingButton
                        content={"Suscribe"}
                        prop={"h-10 rounded-none flex items-center"} 
                        link={"/"} />
                </div>
            </div>
            <div className="ml-16 v text-[19px]">
                <h1>Follow Us</h1>
                <div className="flex gap-2 mt-2 m">
                    <Link
                        to={"/"}>
                        <Images
                            images={instagram}

                            className="rounded-[50%]"
                            alt="" />
                    </Link>
                    <Link
                        to={"/"}>
                        <Images
                            images={facebook} className="rounded-[50%]" alt="" /></Link>
                    <Link
                        to={"/"}>
                        <Images
                            images={twitter}
                            className="rounded-[50%]"
                            alt="" />
                    </Link>
                </div>
            </div>
            <div className="text-[19px]">
                <h1>Call Us</h1>
                <h1>09013642811</h1>
            </div>
        </div>

        <div className="mt-[100px] border-b-2 border-white w-full mb-5"></div>
        <div className="flex flex-wrap gap-11 pb-8">
            <p className="mr-32 text-xl d s"

            >@{date.getFullYear()} JayJobs. Empowering the Skilled Agency, Abuja Nigeria. All Right Reserved</p>
            <p className="q">PRIVACY POLICY</p>
            <p className="q">TERMS AND CONDITIONS</p>
        </div>
    </div>
}