import { useDispatch, useSelector } from "react-redux";
import FormContent from "../Component/FormContent";
import { Input } from "../Component/utils";
import { useActionData, useNavigation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { errorAction } from "../Component/store";
import SignupLayout from "../Component/SignupLayout";
import pics from '../assets/plouzane-1758197_1280.jpg'


export default function PasswordReset() {

    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
    const actionData = useActionData()
    const error = useSelector((state: any) => state.error.error)
    const dispatch = useDispatch()
    const timeoutRef = useRef<any>(null)

    useEffect(() => {
        if (actionData) {
            dispatch(errorAction.setError(actionData.error))
        }
    }, [dispatch, actionData])

    useEffect(() => {
        if (error) {
            timeoutRef.current = setTimeout(() => {
                dispatch(errorAction.setError(null))

            }, 4000)
        }

        return () => clearTimeout(timeoutRef.current)

    }, [error, timeoutRef, dispatch])

    function handleOnChange() {
        dispatch(errorAction.setError(null))
    }


    return (
        <SignupLayout signupPics={pics}>
            <FormContent method={"post"}
                prop={"h-[100vh] flex flex-col justify-center"}
                link={"/authentication?mode=login"} content={'Back to login'}
                onSubmit={undefined}>
                <>
                    <h1 className="mb-16 text-3xl"> Reset Password</h1>

                    {(error && !error?.includes('you must')) && <p
                        className="text-red-700 mb-6 text-xl">{error}</p>}
                    <Input
                        text={"New Password"}
                        name={"newPassword"} error={error?.includes('you must') ? error : ''}
                        onChange={handleOnChange} error2={""} pass={true}></Input>
                    <Input
                        text={"Confirm Password"}
                        name={"confirmPassword"}
                        error={error?.includes('you must') ? error : ''}
                        onChange={handleOnChange}
                        error2={""} pass={true}></Input>
                    <button
                        className={`text-[15px] text-black bg-gray-200 px-2 py-2 self-end rounded cursor-pointer`}
                        type="submit">{isSubmitting ? 'Resetting...' : 'Reset'}
                    </button>
                </>

            </FormContent>
        </SignupLayout>
    )
}

