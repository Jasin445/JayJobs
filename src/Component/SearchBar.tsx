import Images from "./Images";
import search from '../assets/search.png'

export default function SearchBar(){
    return <>
        <div className="flex gap-5 justify-center my-6 reduce">
            <div className="flex gap-3 p-3 items-center rounded bg-stone-100 w-[450px]">
                <Images images={search} alt="Search Icon Image" className="h-4 w-4"/>
                <input className="w-[100%] outline-none bg-transparent" type="text" placeholder="Name of Jobs" />
            </div>
            <button className="p-2 rounded bg-neutral-300 min-w-[90px] text-sm smaller">Search</button>
        </div>
    </>
}