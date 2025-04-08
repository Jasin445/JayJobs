import EmailContent from "../Component/EmailContent";
import SignupLayout from "../Component/SignupLayout";
import { LandingButton } from "../Component/utils";
import tick from '../assets/tick.png'
import pics from '../assets/plouzane-1758197_1280.jpg'
export default function EmailSuccess() {
    return <>
        <SignupLayout signupPics={pics}>
            <EmailContent>
                <h1 className="text-3xl text-center p-5 mb-8">Email Verification Successfull!</h1>
                <LandingButton content={"Continue to Login "} prop={"pt-[9px] pb-[9px] text-[15px] text-white bg-green-600"} link={"/authentication?mode=login"} />
                <img className="absolute w-[90px] top-0 left-[43%] mt-[-40px]" src={tick} alt="" />

            </EmailContent>
        </SignupLayout>
    </>
}



export function PasswordResetSuccess() {
    return <>
        <SignupLayout signupPics={pics}>
            <EmailContent>
                <h1 className="text-3xl text-center p-5 mb-8">Password Reset Successfull!</h1>
                <LandingButton content={"Continue to Login "} prop={"pt-[9px] pb-[9px] text-[15px] text-white bg-green-600"} link={"/authentication?mode=login"} />
                <img className="absolute w-[90px] top-0 left-[43%] mt-[-40px]" src={tick} alt="" />

            </EmailContent>
        </SignupLayout>
    </>
}