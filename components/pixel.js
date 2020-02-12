import "../styles/pixel.css"
import { useState, useEffect } from "react"

export default function Pixel(props) {
    let [size, setSize] = useState(50)
    let [color, setColor] = useState('lightgrey')

    let mouseDown = false;

    function injectStyles() {
        return {
            backgroundColor: color,
            width: size,
            height: size
        }
    }

    function handleClick() {
        setColor(props.color)
    }

    function handleMouseDown() {
        mouseDown = true
    }

    function handleMouseUp() {
        mouseDown = false
    }

    function handleMouseOver() {
        if (!mouseDown) return
        handleClick()
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)

        return () => {
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    })

    return (
        <span className='Pixel' onMouseDown={handleClick} onMouseOver={handleMouseOver} style={injectStyles()} />
    )
}