import { Link } from "react-router-dom";
import Images from "./Images";

interface CardProps{
    img: string,
    text: string,
    header: string,
    button: string
}

export default function Card({img, text, header, button}: CardProps){
    return <div className="flex flex-col items-center w-[100%] rounded-[20px] p-11 bg-stone-100 mb-11 cursor-pointer h-auto">
    <Images images={img} alt={'image of Profile'} className="w-[80px] mb-9"></Images>
    <h1 className="text-4xl font-medium mb-6 text-center leading-[48px]">{header}</h1>
    <p className="text-2xl leading-[40px] mb-6 text-center">{text}</p>
    <Link className="text-2xl" to={''}>{button}</Link>
</div>
}