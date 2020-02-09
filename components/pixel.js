import "../styles/pixel.css"
import { useState } from "react"

export default function Pixel(props) {
    let [active, setActive] = useState(false)
    let [size, setSize] = useState(50)

    function injectStyles() {
        return {
            backgroundColor: active ? 'blue':'grey',
            width: size,
            height: size
        }
    }

    function handleClick() {
        setActive(!active)
    }

    return (
        <span className='Pixel' onClick={handleClick} style={injectStyles()} />
    )
}