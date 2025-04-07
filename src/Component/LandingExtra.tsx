import { LandingButton } from "./utils";

export default function LandingExtra() {
    return <div className="flex gap-3 z-[15000px] ">
        <LandingButton
            content="Signup"
            prop="text-green-700 "
            link={"/authentication?mode=signup"} />
        <LandingButton
            content="Login"
            prop={''}
            link={"/authentication?mode=login"} />
    </div>
}