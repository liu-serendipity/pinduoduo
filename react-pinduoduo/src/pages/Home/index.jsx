import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { getTabList } from './store/actionCreators'
import { 
    Top, 
    HomeWrapper 
} from './style'
import { 
    Tabs, 
    Swiper 
} from 'antd-mobile'
import Mask from '@/components/common/mask'
import TopSearchBar from '@/components/common/top-searchBar'
import Recommend from './Recommend'
import TabDetail from './TabDetail'

export const tabItems =  [
    {
        "opt_name": "推荐",
        "key": "tuijian"
    },
    {
        "opt_name": "女装",
        "key": "nvzhuan"
    },
    {
        "opt_name": "鞋包",
        "key": "xiebao"
    },
    {
        "opt_name": "手机",
        "key": "shouji"
    },
    {
        "opt_name": "食品",
        "key": "shipin"
    },
    {
        "opt_name": "母婴",
        "key": "muyin"
    },
    {
        "opt_name": "男装",
        "key": "nanzhuan"
    },
    {
        "opt_name": "百货",
        "key": "baihuo"
    },
    {
        "opt_name": "内衣",
        "key": "neiyi"
    },
    {
        "opt_name": "电器",
        "key": "dianqi"
    },
    {
        "opt_name": "家纺",
        "key": "jiafan"
    },
    {
        "opt_name": "水果",
        "key": "shuiguo"
    },
    {
        "opt_name": "家具",
        "key": "jiaju"
    },
    {
        "opt_name": "美妆",
        "key": "meizhuang"
    },
    {
        "opt_name": "家装",
        "key": "jiazhuan"
    },
        {
        "opt_name": "运动",
        "key": "yundong"
    },
    {
        "opt_name": "车品",
        "key": "chepin"
    },
    {
        "opt_name": "医药",
        "key": "yiyao"
    },
    {
        "opt_name": "电脑",
        "key": "diannao"
    },
    {
        "opt_name": "海淘",
        "key": "haitao"
    },
    {
        "opt_name": "饰品",
        "key": "shipin2"
    },
    {
        "opt_name": "玩乐",
        "key": "wangle"
    }
]

const Home = (props) => {
    const { tabList } = props
    const { getTabListDispatch } = props

    const [isVisible, setIsVisible] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const swiperRef = useRef()

    useEffect(() => {
        if (!tabList.length) {
            getTabListDispatch()
        }
    }, [])

    const renderTabList = () => {
        return (
            <>
                <div className="header">
                    <Top>
                        <TopSearchBar openMask={openMask}/>
                    </Top>
                    <Tabs
                    activeKey={tabItems[activeIndex].key}
                    onChange={key => {
                        const index = tabItems.findIndex(item => item.key === key)
                        setActiveIndex(index)
                        swiperRef.current?.swipeTo(index)
                    }}
                    >
                    {tabItems.map(item => (
                        <Tabs.Tab 
                            title={item.opt_name} 
                            key={item.key} 
                        />
                    ))}
                    </Tabs>
                </div>
                <Swiper
                    direction='horizontal'
                    loop
                    indicator={() => null}
                    ref={swiperRef}
                    defaultIndex={activeIndex}
                    onIndexChange={index => {
                        setActiveIndex(index)
                    }}
                >
                {
                    tabItems.map(index => {
                        if(index.key === "tuijian") 
                            return (
                                <Swiper.Item key={index.key}>
                                    <Recommend/>
                                </Swiper.Item>
                            )
                        else 
                            return (
                                <Swiper.Item key={index.key}>
                                    <TabDetail/>
                                </Swiper.Item>
                            )
                    })
                }
                </Swiper>
            </>
        )
    }

    const openMask = () => {
        setIsVisible(true)
    }

    const closeMask = () => {
        setIsVisible(false)
    }

    return (
        <HomeWrapper>
            {renderTabList()}
            <Mask isVisible={isVisible} onClose={closeMask} order="设置">
                <p>无法获取相机权限，请前往设置打开</p>
            </Mask>
        </HomeWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        tabList: state.home.tabList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTabListDispatch() {
            dispatch(getTabList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)