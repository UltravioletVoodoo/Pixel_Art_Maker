import PaletteColor from "./paletteColor"

import "../styles/palette.css"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"

export default function Palette(props) {

    const colors = [
        '#ff0000',
        '#0000ff',
        '#ffcc00',
        '#00cc00',
        '#000000',
        '#ff3399'
    ]

    const palette = colors.map((c) => <PaletteColor color={c} setColor={props.setColor} />)

    return (
        <div className='palette'>
            {palette}
        </div>
    )
}