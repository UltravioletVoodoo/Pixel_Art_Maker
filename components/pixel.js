import "../styles/pixel.css"
import { useState, useEffect } from "react"

export default function Pixel(props) {
    let [active, setActive] = useState(false)
    let [size, setSize] = useState(50)
    let [color, setColor] = useState('lightgrey')

    function injectStyles() {
        return {
            backgroundColor: color,
            width: size,
            height: size
        }
    }

    function handleClick() {
        setActive(!active)
        setColor(props.color)
    }

    return (
        <span className='Pixel' onClick={handleClick} style={injectStyles()} />
    )
}