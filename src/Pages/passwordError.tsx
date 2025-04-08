import EmailContent from "../Component/EmailContent";
import SignupLayout from "../Component/SignupLayout";
import badTick from '../assets/badTick.png'
import { useNavigate } from "react-router-dom";
import pics from '../assets/plouzane-1758197_1280.jpg'

export default function PasswordFailure(){

    const navigate = useNavigate();

    function backToLogin(){
        navigate('/authentication?mode=verify')
    }

    return  <>
    <SignupLayout signupPics={pics}>
     <EmailContent>
    <>
    <h1 className="text-3xl text-red-600 text-center p-2 ">Error</h1>
    <h1 className="text-3xl text-center p-5 mb-8">Invalid OTP or Network Error!!</h1>
        <button className="px-3 py-1 text-[15px] text-white bg-slate-500 rounded" onClick={backToLogin}>Back to login</button>
        <img className="absolute w-[90px] top-0 left-[43%] mt-[-40px]" src={badTick} alt="" />

    </>
</EmailContent>
</SignupLayout>
    </>
}