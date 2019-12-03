import "../styles/toolBar.css";

export default function ToolBar1(props) {
    return (
        <div className="col-3 toolBar">
            <p>Toolbar Name</p>
            <input type="number"></input>
            <button>Toggle Grid</button>
            <button>Export to PNG</button>
        </div>
    );
}