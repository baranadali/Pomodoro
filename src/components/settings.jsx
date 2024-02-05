import { HiMiniCog6Tooth } from "react-icons/hi2";

export default function Settings(props) {
    return(
        <>
        <button className="flex items-center gap-3" {...props}>
           <HiMiniCog6Tooth style={{color: '#FF334E'}} className="text-[30px]"/>
        </button>
        </>
    )
}