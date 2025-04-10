interface LayoutProp{
    children: React.ReactNode,
    signupPics: string
}

export default function SignupLayout({children, signupPics }: LayoutProp){
    return <>
    <div className="flex w-full justify-between items-center cent smallest:mt-[50px]">

        <div className="basis-[100%] w-[100%]">
           {children}
        </div>

        <div className="h-[100vh] min-w-[400px] w-[80%] basis-[100%] hide">
            <img className="w-[100%] h-[100%]" src={signupPics} alt="" />
        </div>

    </div>
</>
}