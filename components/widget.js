import "../styles/widget.css"

export default function Widget(props) {
    
    function injectedStyles() {
        return {
            backgroundColor: props.color
        }
    }
    
    return (
        <div className="widget" style={injectedStyles()}></div>
    )
}