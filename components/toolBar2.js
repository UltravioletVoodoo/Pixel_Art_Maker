import "../styles/baseStyle.css";
import "../styles/toolBar.css";

export default function ToolBar2(props) {
    return (
        <div className="col-3 toolBar centered">
            <p>Toolbar Name</p>
            <p className="palette">Palette Placeholder</p>
            <button>Clear</button>
        </div>
    );
}