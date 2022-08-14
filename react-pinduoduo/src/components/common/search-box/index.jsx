import React, { useState, useEffect, useRef, useMemo, memo } from "react"
import { SearchTopWrapper } from './style'
import { debounce } from '@/utils/index'
import { NavLink } from 'react-router-dom'
import { collectQuery } from '@/utils/index'
import { 
    LeftOutline, 
    DownFill, 
    CameraOutline, 
    CloseCircleOutline 
} from 'antd-mobile-icons'

const SearchBox = (props) => {
    const queryRef = useRef()
    const { newQuery } = props
    const { 
        back, 
        handleQuery, 
        openMask, 
        handleMenu 
    } = props
    const [query, setQuery] = useState("")
    const [isdrop, setIsDrop] = useState(false)
    const [menu, setMenu] = useState("商品")

    let handleQueryDebounce = useMemo(() => {
        return debounce(handleQuery, 500)
    }, [handleQuery])

    useEffect(() => {
        queryRef.current.focus()
    }, [])

    useEffect(() => {
        handleQueryDebounce(query)
    }, [query])

    useEffect(() => {
        let curQuery = query
        if (newQuery !== query) {
            curQuery = newQuery 
            queryRef.current.value = newQuery 
        }
        setQuery(curQuery)
    }, [newQuery])

    const clearQuery = (v) => {
        setQuery('');
        queryRef.current.value = ""
        queryRef.current.focus()
        collectQuery(v)
    }

    const handleChange = (e) => {
        let val = e.currentTarget.value
        setQuery(val)
    }

    const dropSelect = () => {
        setIsDrop(!isdrop)
    }

    const handleClick = (val) => {
        setMenu(val)
        setIsDrop(false)
        queryRef.current.focus()
    }

    useEffect(() => {
        if (menu == "商品"){
            handleMenu(true)
        }else if (menu == "店铺"){
            handleMenu(false)
        }
    }, [menu])

    return (
        <SearchTopWrapper>
            <LeftOutline className="left_icon" onClick={() => back()} />
            <div className="box">
                <input 
                    type="search" 
                    maxLength="500" 
                    ref={queryRef} 
                    onChange={handleChange} 
                />
                <div className="box_in">
                    <div className="search_slect" onClick={() => dropSelect()} >
                        <span>{menu}</span>
                        <i><DownFill className="down_icon" /></i>
                    </div>
                {
                    isdrop &&
                    <div>
                        <div 
                            className="search_mask" 
                            onClick={() => setIsDrop(false)}
                        ></div>
                        <ul>
                            <li onClick={() => handleClick("商品")}>商品</li>
                            <li onClick={() => handleClick("店铺")}>店铺</li>
                        </ul>
                    </div>
                }
                { !query && <span>榨汁机</span> }
                </div>
                <div className="camera_icon">
                { 
                    query == "" ? 
                    <CameraOutline 
                        fontSize={20} 
                        onClick={() => openMask()} />: 
                    <CloseCircleOutline 
                        fontSize={20} 
                        onClick={() => clearQuery()}/> 
                }
                </div>
            </div>
        {
            !query ?
            <NavLink 
                to={{
                    pathname: '/goodsSearch',
                    search: "name=榨汁机" 
                }}
                onClick={() => collectQuery("榨汁机") }
            >
                <span className="confirm">搜索</span>
            </NavLink>:
            (
                newQuery.trim() ?
                <NavLink 
                    to={{
                        pathname: '/goodsSearch',
                        search: `name=${newQuery}` 
                    }}
                    onClick={() => collectQuery(`${newQuery}`) }
                >
                    <span className="confirm">搜索</span>
                </NavLink>:
                <span 
                    className="confirm" 
                    onClick={() => clearQuery(newQuery) }
                >
                    搜索
                </span>
            )
        }
        </SearchTopWrapper>
    )
}

export default memo(SearchBox)