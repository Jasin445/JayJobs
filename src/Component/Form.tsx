import { Input } from "./utils";
import signupImg from '../assets/signupLogo.jpeg'
import FormContent from "./FormContent";
import { useEffect, useRef } from "react";
import { errorAction } from "./store";
import { useDispatch, useSelector } from "react-redux";

export default function Forms({ mode, error, isSubmitting, message }: any) {
    const errors = useSelector((state: any) => state.error.error)
    const timeoutRef: any = useRef(null)

    const dispatch = useDispatch()
    useEffect(() => {
        if (error) {
            dispatch(errorAction.setError(error?.error)); // Dispatch raw actionData
        }
    }, [error, dispatch]);

    useEffect(() => {
        if (message) {
            dispatch(errorAction.setError(message)); 
        }
    }, [message, dispatch]);

    useEffect(() => {
        if (errors) {
            timeoutRef.current = setTimeout(() => {
                dispatch(errorAction.setError(null));
            }, 4000);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [errors, dispatch]);

    function handleOnChange() {
        dispatch(errorAction.setError(null));
    }


    return <>
        <FormContent
            method="post"
            prop={""}
            link={""}
            content={""}
            onSubmit={undefined}>
            {mode ?  <h1 className="text-center text-4xl text-stone-500 pt-4 pb-5 max-sm:text-[23px] smallest:py-0 smallest:pb-2">Sign up</h1>
                 :
                <h1 className="text-center text-4xl text-stone-500 pt-4 pb-6 max-sm:text-[23px]">Login Your Account</h1>}

            {((errors && !errors?.newError) &&
                <p className="text-center lowercase text-red-800"
                >{errors?.code || errors}</p>)}
            <Input text={"Email Address"}
                name={"email"}
                error={errors ? errors?.newError?.email : ''}
                onChange={handleOnChange}
                error2={""} />
            {mode && <Input text={"Phone Number"}
                name={"phoneNumber"}
                error={errors ? errors?.newError?.phoneNumber : ''}
                onChange={handleOnChange}
                error2={""} />}
            <Input text={"Password"}
                name={"password"}
                error={errors ? errors?.newError?.password : ''}
                onChange={handleOnChange}
                error2={""} />
            <button
                className={`text-[15px] text-black bg-gray-200 px-2 max-sm:mt-4 py-2 self-end rounded cursor-pointer`}
                type="submit">{mode ? isSubmitting ? "signing up..." : "Sign Up" : isSubmitting ? "logging in..." : "Log in"}

            </button>
        </FormContent>
    </>
} 