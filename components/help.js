import { useState } from "react"

export default function Help(props) {
    const [opened, setOpened] = useState(false)
    const helpClick = () => setOpened(!opened)
    
    return (
        <>
            <span style={props.injectedStyle} onClick={helpClick}>?</span>
            {opened && (
                <div>
                    {props.helpText}
                </div>
            )}
        </>
    )
}