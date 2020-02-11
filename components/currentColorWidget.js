import "../styles/currentColorWidget.css"

export default function CurrentColorWidget(props) {

    function injectedStyles() {
        return {
            backgroundColor: props.color
        }
    }

    return (
        <div className='currentColorWidget'>
            <span className='widgetLabel'>Color</span>
            <div className="widgetContent" style={injectedStyles()}></div>
        </div>
    )
}