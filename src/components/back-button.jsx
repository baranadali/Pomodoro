import { IoReturnDownBack } from "react-icons/io5";

export default function BackButton(props) {
    return (
        <>
        <button {...props}>
            <IoReturnDownBack style={{color: '#FF334E'}} className="text-[34px] mt-12" />
        </button>
        </>
    )
}