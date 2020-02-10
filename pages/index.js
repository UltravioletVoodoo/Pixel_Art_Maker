import Base from "../components/base"
import PixelGrid from "../components/pixelGrid"

import "../styles/index.css"
import Palette from "../components/palette"
import { useState } from "react"
import ToolBar from "../components/toolbar"

export default function Index() {
    let [editColor, setEditColor] = useState('#000000')


    return (
        <div>
            <Base></Base>
            <div className="col-10 col-mx-auto centered">
                <h1>PixelArt Maker</h1>
                <PixelGrid rowLen={4} color={editColor}></PixelGrid>
                <Palette setColor={setEditColor}></Palette>
                <ToolBar color={editColor}></ToolBar>
            </div>
        </div>
    );
}