import { FaPause } from "react-icons/fa6";

export default function PauseButton(props) {
    return(
        <>
        <button {...props}>
            <FaPause style={{color: '#FF334E'}} className="text-[34px]"/>
        </button>
        </>
    )
}