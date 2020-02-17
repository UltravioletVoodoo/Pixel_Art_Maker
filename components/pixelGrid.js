import PixelRow from "./pixelRow";

import "../styles/pixelGrid.css";

export default function PixelGrid(props) {
    let pixelRows = []
    for (let x = 0; x < props.rowLen; x++) {
        pixelRows.push(<PixelRow key={x} rowLen={props.rowLen} color={props.color} />)
    }

    return (
        <div className='PixelGrid'>
            {pixelRows}
        </div>
    );
}