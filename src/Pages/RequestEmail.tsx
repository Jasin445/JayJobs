import { useEffect, useRef, useState } from "react"
import { useActionData, useNavigation } from "react-router-dom"
import FormContent from "../Component/FormContent"
import { Input } from "../Component/utils"
import { useDispatch, useSelector } from "react-redux"
import { errorAction } from "../Component/store"
import SignupLayout from "../Component/SignupLayout"
import pics from '../assets/plouzane-1758197_1280.jpg'


export default function RequestEmail() {
    const actionData = useActionData()
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
    const [, setEmail] = useState<string | null>(null)
    const error = useSelector((state: any) => state.error.error)
    const timeoutRef: any = useRef(null)
    const dispatch = useDispatch()

     useEffect(() => {
            if (actionData?.error?.newErrror) {
                dispatch(errorAction.setError(actionData?.error?.newErrror?.email))
            }
        }, [dispatch, actionData])
    
     useEffect(() => {
            if (actionData) {
                dispatch(errorAction.setError(actionData))
            }
        }, [dispatch, actionData])
    
        useEffect(() => {
            if (error) {
                timeoutRef.current = setTimeout(() => {
                    dispatch(errorAction.setError(null))
    
                }, 4000)
            }
    
            return () => clearTimeout(timeoutRef.current)
    
        }, [error, dispatch])
    

    function getEmail(e: { target: { value: any } }) {
       const email = e.target.value
        setEmail(email);
        dispatch(errorAction.setError(null))

    }

    return (
        <> 
        <SignupLayout signupPics={pics}>
            <FormContent method="post" prop="flex flex-col justify-center h-[100vh]" link="/authentication?mode=login" content="Back to Login" onSubmit={undefined}>
                <div className="mt-6">
                    <Input text="Enter your email address" onChange={(e: { target: { value: any} } ) => getEmail(e)} name="email" error={ error?.error?.newError?.email || "" } error2={!error?.error?.newError ? error: ''} />
                    <button className="text-[15px] text-black bg-gray-200 px-2 py-2 self-end rounded cursor-pointer" type="submit">
                        {isSubmitting ? 'Sending...' : 'Send Email Link'}
                    </button>
                </div>
            </FormContent> 

        </SignupLayout>
          
            
        </>
    );
}
