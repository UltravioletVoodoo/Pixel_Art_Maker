import { useState, useRef } from "react"

import "../styles/help.css"
import PointingModal from "./pointingModal"

export default function Help(props) {
    const [opened, setOpened] = useState(false)
    const helpClick = () => setOpened(!opened)
    const iconRef = useRef(false)
    
    return (
        <>
            <span ref={iconRef} className='helpIcon' onClick={helpClick}>?</span>
            {opened && (
                <PointingModal 
                    modalText={props.helpText}
                    reference={iconRef}
                    closeFunc={setOpened} 
                    title='Hex Codes'
                    quarters={1} 
                />
            )}
        </>
    )
}