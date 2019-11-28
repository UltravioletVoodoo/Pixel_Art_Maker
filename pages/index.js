import Base from "../components/base"
import PixelGrid from "../components/pixelGrid"

export default function Index() {
    return (
        <div>
            <Base></Base>
            <div className="col-10 col-mx-auto">
                <PixelGrid></PixelGrid>
            </div>
        </div>
    );
}