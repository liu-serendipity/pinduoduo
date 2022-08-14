import React, { useState, useCallback, useEffect } from "react"
import { useNavigate, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import LazyLoad from 'react-lazyload'
import { collectQuery } from '@/utils/index'
import SearchBox from "@/components/common/search-box"
import Mask from '@/components/common/mask'
import RecentSearch from './RecentSearch'
import replace from '../Home/replace.png'
import { 
    getHotKeyWords, 
    changeEnterLoading, 
    getSuggestList 
} from './store/actionCreators'
import { 
    Container, 
    HotKeyWrapper, 
    SuggestWrapper, 
    EnterLoading 
} from './style'
import { 
    CompassOutline, 
    EyeInvisibleOutline, 
    EyeOutline 
} from 'antd-mobile-icons'
import { SpinLoading } from 'antd-mobile'

const Search = (props) => {
    const { 
        hotList, 
        enterLoading, 
        suggestList 
    } = props
    const { 
        getHotKeyWordsDispatch, 
        changeEnterLoadingDispatch, 
        getSuggestListDispatch 
    } = props

    const [show, setShow] = useState(false)
    const [query, setQuery] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [which, setWhich] = useState(true)
    const [isEye, setIsEye] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        setShow(true)
        if (!hotList.length) {
            getHotKeyWordsDispatch()
        }
    }, [])

    const searchBack = useCallback(() => {
        setShow(false)
    }, [])

    const eyeIsShow = () => {
        setIsEye(!isEye)
    }

    const handleQuery = (q) => {
        setQuery(q)
    }

    useEffect(() => {
        if (query.trim()) {
            changeEnterLoadingDispatch(true)
            getSuggestListDispatch()
        }
    }, [query])

    const openMask = () => {
        setIsVisible(true)
    }

    const closeMask = () => {
        setIsVisible(false)
    }

    const handleMenu = (item) => {
        setWhich(item)
    }

    const renderHotKeys = () => {
        let list = hotList ? hotList : []
        return (
            <div className="search_hot_key">
            {
                list.map((item, index) => {
                    return (
                        <NavLink 
                            key={index}
                            to={{
                                pathname: '/goodsSearch',
                                search: `name=${item.q}`
                            }}
                            onClick={() => collectQuery(`${item.q}`)}
                        >
                            <span>
                                <span className="hot_title">
                                    {item.q}
                                </span>
                            {
                                item.tag_list &&
                                item.tag_list.map((item1, index) => (
                                    <span 
                                        className="hot_tag" 
                                        key={index}
                                    >
                                        <LazyLoad placeholder={<img 
                                            width="100%" 
                                            height="100%" 
                                            src={replace}/>
                                        }>
                                            <img src={item1.url} alt="" />
                                        </LazyLoad>
                                    </span>
                                ))
                            }
                            </span>
                        </NavLink>
                    )
                })
            }
            </div> 
        )
    }

    const renderSuggestList = () => {
        let list = suggestList ? suggestList : []
        let suggest = []
        list.filter(item => {
            if (item.item_data.suggestion.indexOf(query) !== -1 && query.trim()) {
                if (item.item_data.suggestion.startsWith(query)) {
                    suggest.unshift(item.item_data)
                }else {
                    suggest.push(item.item_data)
                }
            }
        })

        let result = []
        suggest.map(item => {
            if (item.suggestion.startsWith(query) && item.tag_list) {
                result.unshift(item)
            }else {
                result.push(item)
            }
        })
        if (suggest.length > 0) {
            return (
                <SuggestWrapper>
                    <ul>
                    {
                        result.map((item, index) => {
                            if (item.suggestion.startsWith(query)) {
                                var value = item.suggestion.replace(query, "")
                            } else {
                                var value = item.suggestion
                            }
                            if (index > 20) return
                            return (
                                <NavLink 
                                    key={index}
                                    to={{
                                        pathname: '/goodsSearch',
                                        search: `name=${item.suggestion}`
                                    }}
                                    onClick={() => collectQuery(`${item.suggestion}`)}
                                >
                                    <li>
                                        <div>
                                            <span>
                                            {
                                                item.suggestion.startsWith(query) &&
                                                <span style={{color: "#e02e24"}}>
                                                    {query}
                                                </span>
                                            }
                                                <span>{value}</span>
                                            </span>
                                            <div>
                                            {
                                                item.suggestion.startsWith(query) &&
                                                <div>{item.tag_list}</div>
                                            }
                                            </div>
                                        </div>
                                    </li>
                                </NavLink>
                            )
                        })
                    }
                    </ul>
                </SuggestWrapper>
            )
        }
    }

    return (
        <CSSTransition
            in={show}
            timeout={100}
            appear={true}
            classNames="fly"
            unmountOnExit
            onExit={() => { navigate(-1) }}
        >
            <Container>
                <div className="search_box_wrapper">
                    <SearchBox 
                        back={searchBack} 
                        newQuery={query} 
                        handleQuery={handleQuery} 
                        openMask={openMask} 
                        handleMenu={handleMenu} 
                    />
                </div>
            {
                !query.trim() &&
                (
                which ? 
                <>
                <RecentSearch collectQuery={collectQuery} />
                <HotKeyWrapper>
                    <div className="search_hot">
                        <div onClick={() => eyeIsShow()} className="search_eye">
                        { 
                            isEye ? 
                            <EyeOutline fontSize={16}/>: 
                            <EyeInvisibleOutline fontSize={16}/>
                        }
                        </div>
                        <div className="search_find">
                            <CompassOutline className="compass_icon" />
                            搜索发现
                        </div>
                    {
                        isEye ? 
                        renderHotKeys():
                        <div className="close">
                            当前搜索发现已隐藏
                        </div>
                    }
                    </div>
                </HotKeyWrapper>
                </>:
                <div>ShopsWrapper</div>
                )
            }
            { suggestList.length >0 && renderSuggestList() }
                <Mask isVisible={isVisible} onClose={closeMask} order="设置">
                    <p>无法获取相机权限，请前往设置打开</p>
                </Mask>
            { enterLoading && <EnterLoading><SpinLoading></SpinLoading></EnterLoading>}
            </Container>
        </CSSTransition>
    )
}

const mapStateToProps = (state) => {
    return {
        hotList: state.search.hotList,
        suggestList: state.search.suggestList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHotKeyWordsDispatch() {
            dispatch(getHotKeyWords())
        },
        changeEnterLoadingDispatch(data) {
            dispatch(changeEnterLoading(data))
        },
        getSuggestListDispatch() {
            dispatch(getSuggestList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search))