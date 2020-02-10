import "../styles/toolbar.css"
import Widget from "./widget"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"

export default function ToolBar(props) {
    return (
        <div className='toolBar'>
            <span className='widgetLabel'>Color</span>
            <Widget color={props.color}></Widget>
        </div>
    )
}