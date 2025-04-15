import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, redirect } from "react-router-dom"
import hidePassword from '../assets/showPass.png'
import showPassword from '../assets/hidePass.png'


export interface navProps{
    children: React.ReactNode
}

interface buttonProps{
    content: string,
    prop: string,
    link: string
}

export function LandingButton({content, prop, link}: buttonProps){
    return <Link to={link} className={`text-[15px] text-blue-300 bg-gray-200 px-2 py-1 rounded ${prop}`}> {content}</Link>
}

export const accordionDetails = [
    {
        question: 'How does the world work?',
        answer: "who told you to ask how the world works. take time before i kpai persin o. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias aspernatur nulla nisi, beatae tempore hic qui, mollitia ea itaque accusamus distinctio excepturi minima iusto debitis nemo assumenda vero magnam esse! Cumque accusantium sed ullam culpa repellendus saepe eaque magni"
     },
    {
        question: 'How does the heart work?',
        answer: "who told you to ask how the world works. take time before i kpai persin o. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias aspernatur nulla nisi, beatae tempore hic qui, mollitia ea itaque accusamus distinctio excepturi minima iusto debitis nemo assumenda vero magnam esse! Cumque accusantium sed ullam culpa repellendus saepe eaque magni"
     },
    {
        question: 'How does the head work?',
        answer: "who told you to ask how the world works. take time before i kpai persin o. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias aspernatur nulla nisi, beatae tempore hic qui, mollitia ea itaque accusamus distinctio excepturi minima iusto debitis nemo assumenda vero magnam esse! Cumque accusantium sed ullam culpa repellendus saepe eaque magni"
     },
    {
        question: 'How does the body work?',
        answer: "who told you to ask how the world works. take time before i kpai persin o. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias aspernatur nulla nisi, beatae tempore hic qui, mollitia ea itaque accusamus distinctio excepturi minima iusto debitis nemo assumenda vero magnam esse! Cumque accusantium sed ullam culpa repellendus saepe eaque magni"
     },
    {
        question: 'How does the legs work?',
        answer: "who told you to ask how the world works. take time before i kpai persin o. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias aspernatur nulla nisi, beatae tempore hic qui, mollitia ea itaque accusamus distinctio excepturi minima iusto debitis nemo assumenda vero magnam esse! Cumque accusantium sed ullam culpa repellendus saepe eaque magni"
     },
]

export function LinkButton({text, link}: any){
    return  <Link className="flex justify-center bg-slate-300 w-[170px] m-auto md text-center py-3 text-[18px] rounded-[400px] mb-9 max-sm:py-2" to={link}>{text}</Link>
}


interface InputProps{
    text: string,
    name: string,
    error: string,
    onChange: any,
    error2: string,
    pass: boolean
}

export function Input({text, name, error, error2, pass, onChange = null} : InputProps){
  const [isClicked, setIsClicked] = useState<boolean>(false)

  function toggle(){
    setIsClicked(prev => !prev)
  }
    return  <div className="mb-7 max-sm:mb-2 relative">
    <p className="text-red-700 text-2xl mb-3">{error2}</p>
    <label className="block mb-2" htmlFor={name}>{text}</label>
    { pass ? <input className="border-[2px] w-full rounded-[10px] py-3 max-sm:py-2 mm px-2" type={(isClicked && pass === true) ? "text" : "password" } name={name} onChange={onChange} placeholder={name}/> : 
        <input className="border-[2px] w-full rounded-[10px] py-3 max-sm:py-2 mm px-2" type={"text"} name={name} onChange={onChange} placeholder={name}/>

}    <p className="text-red-800 max-sm:w-[85%]">{error}</p>
    {pass && <img className={`absolute cursor-pointer  ${!isClicked ? "w-10 top-[59%] right-2 " : "w-10 top-[58%] right-2" }`} onClick={toggle} src={isClicked ? hidePassword : showPassword} alt="" />}

    </div>
}

export function validateEmail(email: string){
    const isValid = email.includes('@') && email.includes(".")
    return isValid
}

export function validatePassword(password: any){
    const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)
    return isValid;
}

export function validatePhone(password: any){
    const isValid = /^\d{11}$/.test(password)
    return isValid;
}

export function validate(email:string, password:any, phoneNumber: any, test: any, test2: any){
  
    let newError: any = {}

    const emailValid = validateEmail(email)
    const passwordValid = validatePassword(password)
    const phoneNumberValid = validatePhone(phoneNumber)

    if(!emailValid){
        newError.email = "Enter a Valid Email!"
    }

    if(!test2){
        if(!passwordValid){
            newError.password = "Password must be six characters or more, contains atleast one uppercase and one digit!"
        }

    }

    if(test){
        if(!phoneNumberValid){
             newError.phoneNumber =  "Enter a Valid Phone Number!"
        }

    }

    

    return {newError}

}

export function getAuthToken(){
    const token = localStorage.getItem('token');
    return token;
}


export function loader(){
    const token = getAuthToken();

    if(!token){
        return redirect("/authentication?mode=login&message=You must login first!")
    }

    return null;
}


export function useCountdownTimer(milliseconds: number) {
  const [timeRemaining, setTimeRemaining] = useState(milliseconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1000) {
          clearInterval(interval); // Clear the interval when time reaches 0
          return milliseconds;
        }

        
        return prev - 1000; // Decrease by 1 second
      });
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval when component unmounts
  }, [milliseconds]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return { timeRemaining, formattedTime: formatTime(timeRemaining) };
}



export function getExpTime(){
    const exp = new Date().getTime() + (1 * 60 * 1000)
    return exp
}

const endpoint = import.meta.env.VITE_APP_DOMAIN


export const requestOTP = async (email: any, action: any) => {
    const response = await fetch(`${endpoint}/api/send-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, action }), // 'verify' or 'reset'
    });


    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      
    return response.json();
  };

export const verifyOTP = async (email: any, otp: any, newPassword = null) => {
    const response = await fetch(`${endpoint}/api/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp, newPassword }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    return response.json();
};

export function reduxError(){
    const error = useSelector((state: any) => state.error.error)
    return error
}

interface Application {
    id: number;
    jobTitle: string;
    company: string;
    status: string;
    date: string; // Or Date if you are using actual date objects.
  }
  
  const applications: Application[] = [
    {
      id: 1,
      jobTitle: 'Software Engineer',
      company: 'TechCorp',
      status: 'Applied',
      date: '2023-10-26',
    },
    {
      id: 2,
      jobTitle: 'Frontend Developer',
      company: 'WebSolutions',
      status: 'Interviewing',
      date: '2023-10-27',
    },
      {
      id: 3,
      jobTitle: 'Backend Developer',
      company: 'Cloud Innovators',
      status: 'Rejected',
      date: '2023-10-28',
    },
    // ... more applications
  ];

  export default applications
  

