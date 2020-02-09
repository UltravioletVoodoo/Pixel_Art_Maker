import Pixel from "./pixel"

export default function PixelRow(props) {
    let pixels = []
    for (let x = 0; x < props.rowLen; x++) {
        pixels.push(<Pixel size={props.rowLen} />)
    }

    return (
        <div>
            {pixels}
        </div>
    )
}