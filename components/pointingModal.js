import "../styles/pointingModal.css"
import { useRef, useState, useLayoutEffect } from "react"


const defaultPosition =  {
    arrow: {
        left: 0,
        top: 0
    },
    modal: {
        left: 0,
        top: 0
    }
}

export default function PointingModal(props) {
    const modalRef = useRef(false)
    
    function getPosition() {
        if (!modalRef.current || !props.reference.current) {
            return
        }
        const refPos = props.reference.current.getBoundingClientRect()
        const modalPos = modalRef.current.getBoundingClientRect()
        const modalPadding = 10
        
        // Get the top/left for the modal
        let modalLeft = refPos.x + (refPos.width / 2) - (modalPos.width * (props.quarters/4))
        const modalTop = refPos.y - modalPos.height - 15
        if (modalLeft < modalPadding) modalLeft = modalPadding
        if (modalLeft > window.innerWidth - modalPadding - modalPos.width) modalLeft = window.innerWidth - modalPadding - modalPos.width

        // Get the top/left for the arrow
        const arrowLeft = refPos.x + (refPos.width / 2) - 15
        const arrowTop = modalTop + modalPos.height

        return {
            arrow: {
                left: arrowLeft,
                top: arrowTop
            },
            modal: {
                left: modalLeft,
                top: modalTop
            }
        }
    }

    const [position, setPosition] = useState(defaultPosition)
    const closeModal = () => props.closeFunc(false)
    const modalClasses = props.danger ? 'pointingModal modalDanger' : 'pointingModal'
    const textClasses = props.danger ? 'modalText textDanger' : 'modalText'

    useLayoutEffect(() => {
        const resizeListener = () => setPosition(getPosition())
        window.addEventListener('resize', resizeListener)
        setPosition(getPosition())

        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    }, [])
    
    return (
        <>
            <div ref={modalRef} className={modalClasses} style={position.modal}>
                <div className='modalHeader'>
                    <h4>{props.title}</h4>
                    <span className='closeBtn' onClick={closeModal}>x</span>
                </div>
                <p className={textClasses}>{props.modalText}</p>
            </div>
            <div className='modalArrow' style={position.arrow} />
        </>
    )
}