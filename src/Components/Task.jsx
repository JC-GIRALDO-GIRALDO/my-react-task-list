import { FaBullseye } from "../../node_modules/react-icons/fa6";
import { useState } from "react"
export default function Task(){

    const [crossOutTask, setCrossOutTask ] = useState(false)

    const crossOut = () => {
        setCrossOutTask(!crossOutTask);
        }
    

    return <>
    <button onFocus={crossOut}>{crossOutTask ? "b" : "a"} {/* Mostrar "b" si crossOutTask es true, de lo contrario, mostrar "a" */}
        <FaBullseye /><FaBullseye/></button>

    </>
}