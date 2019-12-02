import Base from "../components/base"
import PixelGrid from "../components/pixelGrid"

export default function Index() {
    return (
        <div>
            <Base></Base>
            <div className="col-10 col-mx-auto centered">
                <h1>PixelArt Maker</h1>
                <PixelGrid></PixelGrid>
            </div>
        </div>
    );
}