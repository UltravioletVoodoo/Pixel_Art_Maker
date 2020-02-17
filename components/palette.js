import PaletteColor from "./paletteColor"

import "../styles/palette.css"
import { useState } from "react"
import HexPicker from "./hexPicker"

export default function Palette(props) {
    const [opened, setOpened] = useState(false)
    const paletteList = [
        '#ff0000',
        '#0000ff',
        '#ffcc00',
        '#00cc00',
        '#000000',
        '#d3d3d3'
    ]

    let palette = []
    for (let x in paletteList) palette.push(<PaletteColor key={x} color={paletteList[x]} setColor={props.setColor} />)
    const advancedClick = () => setOpened(!opened)

    return (
        <div className='paletteWidget'>
            <div className='palette'>
                {palette}
            </div>
            <span className='advancedBtn' onClick={advancedClick}>Advanced</span>
            {opened && (
                <HexPicker setColor={props.setColor} />
            )}
        </div>
    )
}