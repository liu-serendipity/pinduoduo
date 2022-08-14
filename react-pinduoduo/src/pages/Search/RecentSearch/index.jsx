import React, { useState } from "react";
import { RecentSearchWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { ClockCircleOutline, DeleteOutline, DownFill } from 'antd-mobile-icons'
import Mask from '@/components/common/mask'
import classnames from 'classnames'

const RecentSearch = (props) => {

    const { collectQuery } = props
    const [isVisible, setIsVisible] = useState(false)
    const [style, setStyle] = useState(false)

    let recentKey = []
    if (localStorage.getItem("historyItems")) {
        recentKey = (localStorage.getItem("historyItems")).split('|')
    }

    const clearHistory = () => {
        setIsVisible(true)
    }

    const onModelClose = () => {
        setIsVisible(false)
    }

    const onModelConfirm = () => {
        localStorage.removeItem('historyItems')
        setIsVisible(false)
    }

    if (recentKey.length > 0) {
        return (
            <>
            <RecentSearchWrapper>
                <div className="title">
                    <ClockCircleOutline />
                    最近搜索
                    <div className="delete" onClick={() => clearHistory()} >
                        <DeleteOutline />
                    </div>
                </div>
                <div className={classnames("recentKey", {recentKeyStyle: !style})}>
                    <div className="key">
                    {
                        recentKey.map((item, index) => (
                            <NavLink
                                key={index}
                                to={{
                                    pathname: '/goodsSearch',
                                    search: `name=${item}`
                                }}
                                onClick={() => collectQuery(`${item}`)}
                            >
                                <span>
                                    <span>{item}</span>
                                </span>
                            </NavLink>
                        ))
                    }
                    </div>
                    {
                        recentKey.length >= 8 &&
                        <div className={classnames("more", {moreStyle: style})} onClick={() => setStyle(true)}>
                            <div>
                                更多
                                <DownFill />
                            </div>
                        </div>
                    }
                </div>
            </RecentSearchWrapper>
            <Mask isVisible={isVisible} onClose={onModelClose} onConfirm={onModelConfirm} order="确认">
                <p>确认删除最近搜索记录吗？</p>
            </Mask>
            </>
        )
    }
}

export default RecentSearch