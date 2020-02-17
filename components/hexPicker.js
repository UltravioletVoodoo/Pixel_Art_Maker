import "../styles/hexPicker.css";
import { useRef, useState } from "react";
import Help from "./help";
import PointingModal from "./pointingModal";

export default function HexPicker(props) {
    const inputRef = useRef(false)
    const [warningOpened, setWarningOpened] = useState(false)
    const helpText = (
        <>
            More information about hexadecimal color codes can be found at
            <a href="https://www.w3schools.com/colors/colors_picker.asp" target="_blank"> this link.</a>
        </>
    )

    function verifyCode(code) {
        const regex = RegExp(/^#((0x){0,1}|#{0,1})([0-9A-Fa-f]{8}|[0-9A-Fa-f]{6})$/)
        return regex.test(code)
    }

    function handleSubmit() {
        const code = inputRef.current.value
        if (verifyCode(code)) {
            props.setColor(code)
        } else {
            setWarningOpened(true)
        }
    }

    const hexPickerErrorText = (
        <>
            You must enter a valid hex color code. Example: #FF0000 for pure red.
        </>
    )


    return (
        <div className='hexPicker'>
            <input ref={inputRef} placeholder='hex color code'></input>
            {warningOpened && (
                <PointingModal
                    modalText={hexPickerErrorText}
                    reference={inputRef}
                    closeFunc={setWarningOpened}
                    title='Invalid Hex Code'
                    quarters={3}
                    danger={true}
                />
            )}
            <span className='submit' onClick={handleSubmit}>Submit</span>
            <div className='help'>
                <Help helpText={helpText} />
            </div>
        </div>
    )
}