import Images from "./Images";
import search from '../assets/search.png'

export default function SearchBar(){
    return <>
        <div className="flex gap-5 justify-center my-6">
            <div className="flex gap-3 p-3 rounded bg-stone-100 w-[450px]">
                <Images images={search} alt="Search Icon Image" className="h-auto"></Images>
                <input className="w-[100%] outline-none bg-transparent" type="text" placeholder="Name of Jobs" />
            </div>
            <button className="p-2 rounded bg-neutral-300 w-[130px] text-sm">Search Jobs</button>
        </div>
    </>
}