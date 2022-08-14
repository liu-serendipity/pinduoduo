import React, { useState } from 'react';
import classNames from 'classnames'
import { tabItems } from '../Home/'
import Mask from '@/components/common/mask'
import TopSearchBar from '@/components/common/top-searchBar'
import { 
    SortWrapper, 
    SideTabWrapper 
} from './style'
import { Top } from '../Home/style'
import { 
    NavBar, 
    Popup, 
    SideBar 
} from 'antd-mobile'
import { SendOutline } from 'antd-mobile-icons'

const Sort = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [activeKey, setActiveKey] = useState('tuijian')

    const toShare = () => {
        setIsVisible(true)
    }

    const right = (
        <div onClick={() => toShare()}>
            <SendOutline fontSize={22}/>
        </div>
    )

    const openMask = () => {
        setIsShow(true)
    }

    const closeMask = () => {
        setIsShow(false)
    }

    const renderTabList = () => {
        return (
            <div className="container">
                <div className="side">
                    <SideBar 
                        activeKey={activeKey} 
                        onChange={setActiveKey}
                    >
                    {tabItems.map(item => (
                        <SideBar.Item 
                            key={item.key} 
                            title={item.opt_name} 
                        />
                    ))}
                    </SideBar>
                </div>
                <div className="main">
                    {
                        tabItems.map(item => (
                            <div
                            key={item.key}
                            className={classNames(
                                "content",
                                activeKey === `${item.key}` && "active"
                            )}
                            >
                            {item.opt_name}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <SortWrapper>
            <div className="top">
                <NavBar 
                    backArrow={false} 
                    right={right}
                >
                    分类
                </NavBar>
                <Top>
                    <TopSearchBar openMask={openMask} />
                </Top>
            </div>
            <SideTabWrapper>{renderTabList()}</SideTabWrapper>
            <Popup
                visible={isVisible}
                onMaskClick={() => {
                    setIsVisible(false)
                }}
                bodyStyle={{ height: '50vh' }}
            >
            </Popup>
            <Mask 
                isVisible={isShow} 
                onClose={closeMask} 
                order="设置"
            >
                <p>无法获取相机权限，请前往设置打开</p>
            </Mask>
        </SortWrapper>
    )
}

export default Sort