import { FaPlay } from "react-icons/fa6";

export default function PlayButton(props) {
    return(
        <>
        <button {...props} >
            <FaPlay style={{color: '#FF334E'}} className="text-[34px]" />
        </button>
        </>
    )
}