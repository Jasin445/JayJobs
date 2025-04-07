import { useSearchParams } from "react-router-dom"
import { VerifyPage } from "../Component/EmailContent"
import SignupLayout from "../Component/hooks/SignupLayout";
import pics from '../assets/JobSearch.webp'

export default function EmailVerification() {
    const [searchParam] = useSearchParams();
    const password = searchParam.get('mode') === 'waiting to verify'
   return <>
   <SignupLayout signupPics={pics}>
   <VerifyPage 
    header={password ? 'Reset Password' : 'Please verify your Email'} />

   </SignupLayout>
   </>
}
