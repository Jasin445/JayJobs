import { ClipboardEvent, useRef } from "react";
import { Form, HTMLFormMethod, Link } from "react-router-dom";
import { reduxError } from "./utils";
import { useDispatch } from "react-redux";
import { errorAction } from "./store";

interface FormProps {
    children: React.ReactNode,
    method: HTMLFormMethod,
    prop: string,
    link: string,
    content: string,
    onSubmit: any
}

export default function FormContent(
    {
        children,
        method,
        prop,
        link,
        content,
        onSubmit = null
    }: FormProps


) {


    return <>
        <div className={`${prop}`}>

            <Form className={` border-double border-[10px] pb-12 pt-4 px-11 w-[540px] h-[auto] flex flex-col rounded-[20px] width mx-auto relative`}
                onSubmit={onSubmit}
                method={method}>

                {children}

            </Form>
            <p className="text-center mt-4 text-blue-950"><Link to={link}>{content}</Link></p>
        </div>

    </>
}

interface OtpProps {
    value: number,
    index: number,
    otp: any,
    setOtp: any
}

export function InputOtp({ value, index, otp, setOtp }: OtpProps) {
    const inputRef: any = useRef(null);
    const error = reduxError()
    const dispatch = useDispatch()
    function handleOnChange(index: number, val: any) {
        if (/^\d+$/.test(val) && val.length <= 1) {
            const newOtp = [...otp]
            otp[index] = val
            setOtp(newOtp)
            if (index < otp.length - 1) {
                inputRef.current.nextElementSibling.focus()

            }
            return;

        }
    }



    function onHandlePaste(e: ClipboardEvent<HTMLInputElement>) {
        e.preventDefault();
        const pastedData = (e.clipboardData.getData('text'));
        if (/^\d+$/.test(pastedData) && pastedData.length === otp.length) {
            setOtp(pastedData.split(''));
            return;
        }

        const syntaxError = { error: 'Invalid paste data. Must be 4 digits' }
        dispatch(errorAction.setError(syntaxError.error))

        return error;

    }
    return <input ref={inputRef} className="w-[60px] py-3 text-2xl border-[2px] p-5 border-stone-300 rounded-[12px]"
        value={value}
        onChange={(e) => handleOnChange(index, e.target.value)}
        name={`digit${index}`}
        onPaste={(e) => onHandlePaste(e)}
        maxLength={1}
        type='text' />
}
