import React from "react"
import { useNavigate } from 'react-router-dom'
import { 
    SearchOutline, 
    CameraOutline 
} from 'antd-mobile-icons'

const TopSearchBar = (props) => {
    const { openMask } = props
    const navigate = useNavigate()
    
    return (
        <>
            <div className="search">
                <div className="search_bar" onClick={() => navigate("/search")}>
                    <SearchOutline fontSize={18}/>
                    <span className="search_bar_placeholder">美的榨汁机</span>
                </div>
                <div className="camera_icon" onClick={() => openMask()}>
                    <CameraOutline fontSize={20} />
                </div>
            </div>
        </>
    )
}

export default TopSearchBar