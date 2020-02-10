import "../styles/paletteColor.css"

export default function PaletteColor(props) {
    
    function getInjectedStyles() {
        return {
            backgroundColor: props.color
        }
    }
    const setColor = () => props.setColor(props.color)

    return (
        <span className='paletteColor' style={getInjectedStyles()} onClick={setColor}></span>
    )
}