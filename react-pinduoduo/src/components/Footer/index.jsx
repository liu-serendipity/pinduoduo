import React from "react"
import { isPathPartlyExisted } from '@/utils'
import { 
    NavLink, 
    useLocation 
} from 'react-router-dom'
import { 
    FooterWrapper, 
    Tab, 
    TabItem 
} from "./style"

const Footer = () => {

    const { pathname } = useLocation()

    if (isPathPartlyExisted(pathname)) return

    return (
        <FooterWrapper>
            <Tab>
                <NavLink to="/home">
                    <TabItem>
                        <span className="iconfont icon-shouyefill"></span>
                        <div>首页</div>
                    </TabItem>
                </NavLink>
                <NavLink to="/version">
                    <TabItem>
                        <span className="iconfont icon-shipin"></span>
                        <div>多多视频</div>
                    </TabItem>
                </NavLink>
                <NavLink to="/sort">
                    <TabItem>
                        <span className="iconfont icon-icon_category"></span>
                        <div>分类</div>
                    </TabItem>
                </NavLink>
                <NavLink to="/chat">
                    <TabItem>
                        <span className="iconfont icon-duihua"></span>
                        <div>聊天</div>
                    </TabItem>
                </NavLink>
                <NavLink to="/person">
                    <TabItem>
                        <span className="iconfont icon-gerenzhongxin"></span>
                        <div>个人中心</div>
                    </TabItem>
                </NavLink>
            </Tab>
        </FooterWrapper>
    )
}

export default Footer