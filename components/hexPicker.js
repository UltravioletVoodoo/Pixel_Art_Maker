import "../styles/hexPicker.css";
import { useRef } from "react";
import Help from "./help";

export default function HexPicker(props) {
    const inputRef = useRef(false)
    const helpStyle = {
        height: 12,
        width: 12
    }
    const helpText = "Help text for the hex color picker"

    function verifyCode(code) {
        return true
    }

    function handleSubmit() {
        const code = inputRef.current.value
        if (verifyCode(code)) props.setColor(code)
    }



    return (
        <div className='hexPicker'>
            <input ref={inputRef} placeholder='hex color code'></input>
            <span className='submit' onClick={handleSubmit}>Submit</span>
            <div className='help'>
                <Help helpText={helpText} injectedStyle={helpStyle} />
            </div>
        </div>
    )
}