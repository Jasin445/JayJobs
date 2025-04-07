import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./firebase";
import { getExpTime, requestOTP, validate, validatePassword, verifyOTP } from "./utils";
import { redirect } from "react-router-dom";


export async function  action({ request }: { request: Request }){
    try{

    
    const data = await request.formData();
    const authData = {
        email: data.get('email') as string,
        password: data.get('password') as string,
        phoneNumber: data.get('phoneNumber')
    }

    const URLs = new URL(request.url).searchParams.get('mode')
   
    const {email, password, phoneNumber} = authData;

    const error:any = validate(email, password, phoneNumber, URLs === 'signup', URLs === 'passwordverify')

    const {newError} = error
    
    if(Object.values(newError).length > 0){
        throw error
    }
    

    if(Object.values(newError).length === 0){
        
        if( URLs === 'signup'){
            try{
            const userCredential = await createUserWithEmailAndPassword(auth!, email, password) || 'emailexist'
            const user = userCredential.user;
            if(user){
                const exp = getExpTime()
                localStorage.setItem('emailExpiration', exp.toString())
                await requestOTP(user.email, 'verify')
                sessionStorage.setItem('phoneNumber', phoneNumber as string)
               return redirect(`/authentication/emailverify?email=${email}`)
            }
        }catch(error){
            return {error: error}
        }
        }

        if(URLs === 'login'){
            try{
            const userCredential = await signInWithEmailAndPassword(auth!, email, password);
            const user = userCredential.user;
            const token = await user.getIdToken();
            localStorage.setItem('token', token)
            if(!user.emailVerified){
                alert('email address not verified. click ok to verify')
                const exp = getExpTime()
                localStorage.setItem('emailExpiration', exp.toString())
                sessionStorage.setItem('phoneNumber', phoneNumber as string)
                await requestOTP(user.email, 'verify')
                return redirect(`/authentication/emailverify?email=${email}`)
                
            }
            if(user && user.emailVerified){
                return redirect('/jayjobs')
            }

        }catch(error){
            return {error: error}
        }
        }

        if(URLs === 'passwordverify'){
            try{
                await requestOTP(email, 'reset');
                return redirect(`/authentication/emailverify?mode=waiting to verify&email=${email}`)

            }catch(error:any){
                return error.message
            }
        }

       

    }
}catch(error: any){
    return new Response(JSON.stringify({ error: error || "couldn't fetch data"}), {
        headers: { "Content-Type": "application/json" },
        status: 400,
    });
}
}


export async function actionOTP({request}: {request: Request}){
    const url = new URL(request.url).searchParams;
    const pass = url.get('mode') === 'waiting to verify'
    const email = url.get('email');
    try{
        if(!pass){
    const data = await request.formData();
    const all =  Object.fromEntries(data.entries())
    const key = Object.keys(all);
  
    // const num = Object.values(all)

    const numbers = key.map((key): any => {
        const alled = {...all}
       const num =  (alled[key])
       if(num === ''){
        return null
       }
       return num
    })

    const otp = numbers.join('');

    if(otp.length < 4){
        return;
    }

   
      await verifyOTP(email, otp)
      return redirect('/auth/emailSuccess')
    }

    
    const data1 = await request.formData()
    const newPassword: any = data1.get('newPassword')
    const confirmPassword = data1.get('confirmPassword')
    const isValid1 = validatePassword(newPassword)
    const URLs = new URL(request.url).searchParams;
    const otp = URLs.get('num');

    
    
    
        if(isValid1){
            if(newPassword === confirmPassword){
                // await confirmPasswordReset(auth, oobCode, newPassword )
                await verifyOTP(email, otp, newPassword)
                return redirect('/auth/passwordResetSuccess')
            }
            
            if(newPassword !== confirmPassword){
                return {error: 'password do not match!!'}
            }
    
        }else{
            return {error: 'you must enter a valid Password'}
        }
    
    }catch(error: any){
        throw redirect('/auth/passwordResetFailed')
    }
    
}