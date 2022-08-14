import React, { useEffect, useState } from "react"
import { MaskWrapper } from './style'
import { CloseCircleFill } from "antd-mobile-icons"

const Mask = (props) => {
    const { 
        isVisible:show, 
        children, 
        order 
    } = props
    const { 
        onClose, 
        onConfirm 
    } = props
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(show)
    }, [show])

    const closeMask = () => {
        setIsVisible(false)
        onClose && onClose()
    }

    const confirmMask = () => {
        setIsVisible(false)
        onConfirm && onConfirm()
    }

    return (
        isVisible && <MaskWrapper>
            <div className="close_icon">
                <CloseCircleFill 
                    fontSize={22} 
                    className="close_icon" 
                    onClick={() => closeMask()}
                />
            </div>
            <div className="container">
                <div className="content">
                    <div className="title">
                        <span>{children}</span>
                    </div>
                    <div className="choose">
                        <span 
                            className="clear" 
                            onClick={() => closeMask()}
                        >
                            取消
                        </span>
                        <span 
                            className="confirm" 
                            onClick={() => confirmMask()}
                        >
                            {order}
                        </span>
                    </div>
                </div>
            </div>
        </MaskWrapper>
    )
}

export default Mask