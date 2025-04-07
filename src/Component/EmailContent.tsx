import React, { useState, useEffect } from "react";
import { useNavigation, useNavigate, useSearchParams } from "react-router-dom";
import FormContent, { InputOtp } from "./FormContent";
import { getExpTime, reduxError, requestOTP, useCountdownTimer } from "./utils";
import tick from "../assets/tick.png";
import badTick from "../assets/badTick.png";
import { useDispatch } from "react-redux";
import { errorAction } from "./store";

interface EmailContentProp {
  children: React.ReactNode;
}

export default function EmailContent({ children }: EmailContentProp) {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="p-16 text-center leading-loose w-[570px] relative box rounded-[20px]">
        {children}
      </div>
    </div>
  );
}

export function VerifyPage({ header }: any) {
  const [expiration] = useState<number>(
    Number(localStorage.getItem("emailExpiration")) || 0
  );
//   const [error, setError] = useState<any>("");
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [searchParam] = useSearchParams();
  const password = searchParam.get("mode") === "waiting to verify";
  const emails = searchParam.get("email");
  const error = reduxError()
  const dispatch = useDispatch()
  


  const navigate = useNavigate();

  const currentTime = new Date().getTime();
  const storedDuration = Number(localStorage.getItem("otpDuration"));
  let initialDuration = storedDuration > 0 ? storedDuration : expiration - currentTime;
  const [duration, setDuration] = useState(initialDuration > 0 ? initialDuration : 0);
  const { formattedTime } = useCountdownTimer(duration > 0 ? duration : 0);
  const [otp, setOtp] = useState<any>(["", "", "", ""]);

  async function startTimer() {
    const exp = getExpTime();
    localStorage.setItem("emailExpiration", exp.toString());
    setDuration(60000);
    localStorage.setItem("otpDuration", "60000");
    try{
        await requestOTP(emails, 'verify')

    }catch(error: any){
        const message = "Something went wrong!"
        dispatch(errorAction.setError(error))
        throw message
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (duration > 0) {
        const newDuration = duration - 1000;
        setDuration(newDuration);
        localStorage.setItem("otpDuration", newDuration.toString());
      } else {
        localStorage.removeItem("otpDuration"); // Clear when zero
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  useEffect(() => {
    const newInitialDuration = Number(localStorage.getItem("emailExpiration")) - new Date().getTime();
    setDuration(newInitialDuration > 0 ? newInitialDuration : 0);
  }, []);

  function goToPassword(e: { preventDefault: () => void }) {
    e.preventDefault();
    navigate(
      `/auth/passwordReset?mode=waiting to verify&num=${otp.join("")}&email=${emails}`
    );
  }

  function refresh(){
    setDuration(0)
    navigate(0)
  }

  if (password) {
    return <>
   { !error ? <FormContent
        method={"post"}
        prop={"h-[100vh] text-center flex flex-col justify-center"}
        link={"/authentication?mode=login"}
        content={"Back to Login"}
        onSubmit={(e: { preventDefault: () => void }) => goToPassword(e)}
      >
        <p className="text-3xl mb-3 mt-[123px]">{header}</p>
        <p className="mb-6">Enter the OTP we sent to </p>
        <p className="font-bold mb-6">{emails} </p>
        <div className="flex justify-center items-center gap-3">
          {otp.map((digits: any, index: any) => {
            return (
              <InputOtp key={index} index={index} value={digits} setOtp={setOtp} otp={otp} />
            );
          })}
        </div>
        <p className="mt-9 mb-3">Click on the link in your email to access your OTP</p>
        <p>If you don't see it, you may need to check your spam folder.</p>
        <p className="mt-6 mb-0">Still can't find the email?</p>
        <p className="my-4">{duration > 0 ? formattedTime : '01:00'}</p>
        <button
          onClick={startTimer}
          type="button"
          disabled={duration > 0}
          className="disabled:bg-stone-300 rounded-[8px] w-[148px] text-stone-700 mb-4 p-2 bg-green-100 m-auto"
        >
          Resend OTP
        </button>
        <button
          type="submit"
          className="py-[4px] px-2 disabled:bg-stone-300 bg-green-600 text-white rounded-[3px]"
        >
          {isSubmitting ? "Processing..." : "Continue"}
        </button>
        <img
          className="absolute w-[90px] top-0 left-[40%] mt-[20px] m-auto"
          src={tick}
          alt=""
        />
      </FormContent> :
       <EmailContent>
       <>
       <h1 className="text-3xl text-red-600 text-center p-2 ">Error</h1>
           <h1 className="text-3xl text-center p-5 mb-8">{error}</h1>
           <button className="px-3 py-1 text-[15px] text-white bg-slate-500" onClick={refresh}>Refresh</button>

           <img className="absolute w-[90px] top-0 left-[43%] mt-[-40px]" src={badTick} alt="" />

       </>
   </EmailContent>
      }
      </>
    
  }

  return (
    <>
    {!error ? <FormContent
      method={"post"}
      prop={"h-[100vh] text-center flex flex-col justify-center"}
      link={"/authentication?mode=login"}
      content={"Back to Login"}
      onSubmit={undefined}
    >
      <p className="text-3xl mb-3 mt-[123px]">{header}</p>
      <p className="mb-6">Enter the OTP we sent to </p>
      <p className="font-bold mb-6">{emails} </p>
      <div className="flex justify-center items-center gap-3">
        {otp.map((digits: any, index: any) => {
          return (
            <InputOtp key={index} index={index} value={digits} setOtp={setOtp} otp={otp} />
          );
        })}
      </div>
      <p className="mt-9 mb-3">Click on the link in your email to access your OTP</p>
      <p>If you don't see it, you may need to check your spam folder.</p>
      <p className="mt-6 mb-0">Still can't find the email?</p>
      <p className="my-4">{duration > 0 ? formattedTime : '01:00'}</p>
      <button
        onClick={startTimer}
        type="button"
        disabled={duration > 0}
        className="disabled:bg-stone-300 rounded-[8px] w-[148px] text-stone-700 mb-4 p-2 bg-green-100 m-auto"
      >
        Resend OTP
      </button>
      <button
        className="py-[4px] px-2 disabled:bg-stone-300 bg-green-600 text-white rounded-[3px]"
      >
        {isSubmitting ? "Processing..." : "Continue"}
      </button>
      <img
        className="absolute w-[90px] top-0 left-[40%] mt-[20px] m-auto"
        src={tick}
        alt=""
      />
    </FormContent> : 
        <EmailContent>
        <>
        <h1 className="text-3xl text-red-600 text-center p-2 ">Error</h1>
        <h1 className="text-3xl text-center p-5 mb-8">{error}</h1>

            <button 
            className="px-3 py-1 text-[15px] text-white bg-slate-500" 
            onClick={refresh}
            >
                Refresh
            </button>
            <img 
            className="absolute w-[90px] top-0 left-[43%] mt-[-40px]" 
            src={badTick} alt="" />

        </>
    </EmailContent>
    }
    </>
  );
}