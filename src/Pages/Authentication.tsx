import { Link, useActionData, useLocation, useNavigation, useSearchParams } from 'react-router-dom'
import Form from '../Component/Form'
import signupPics from '../assets/plouzane-1758197_1280.jpg'
import { useEffect } from 'react'
import SignupLayout from '../Component/SignupLayout'

export default function Authentication() {
    const [searchParams] = useSearchParams()
    const mode = searchParams.get('mode') === 'signup'
    const location = useLocation();
    const actionData = useActionData()
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
    const message = searchParams.get('message')


    useEffect(() => {
        window.scrollTo(0, 0);
        localStorage.removeItem('oobCode')
    }, [location.pathname]);


    return <>
        <SignupLayout signupPics={signupPics}>
            <Form message={message} isSubmitting={isSubmitting} error={actionData} mode={mode} />
            {!mode &&
                <p
                    className='text-blue-900 text-center w-full mt-7'>
                    <Link
                        className='text-center'
                        to='/auth/passwordAuth?mode=passwordverify'>
                        Forgotten Password?
                    </Link>
                </p>}
            <p
                className="text-blue-900 text-center mt-8">{mode ? "Already Signed up?" : "Don't have an account?"}
                <Link to={mode ? '/authentication?mode=login' : '/authentication?mode=signup'}>
                    {mode ? "Login" : "Signup"}
                </Link></p>
        </SignupLayout>
    </>

}