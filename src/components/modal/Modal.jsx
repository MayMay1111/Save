import React, { useEffect, useRef } from "react";
import './modal.scss'
import { useState } from "react";

const Modal = ({ props }) => {

    const [active,setActive] = useState(false)

    useEffect(() => {
        setActive(props.active)
    },[props.active])

    return (
        <div id={props.id} className={`modal ${active?'active':''}`}>
            {props.children}
        </div>
    )
}

export const ModalContent = ({props}) => {

    const contentRef = useRef()

    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if(props.onClose){
            props.onClose()
        }
    }

    return (
        <div ref={contentRef} className='modal__content'>
            {props.children}
            <div className="modal__content__close">
                <i className="bx bx-x"></i>
            </div>
        </div>
    )
}

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string,
}

ModalContent.propTypes = {
    onClose: PropTypes.func
}

export default Modal