import React, { useEffect } from "react"
import { connect } from 'react-redux'
import Swiper from 'swiper'
import LazyLoad from 'react-lazyload'
import { 
    getRankList, 
    getSpecialList, 
    getGoodsList } from '../store/actionCreators'
import SpecialBox from '@/components/common/special-box'
import GoodsCard from '@/components/common/goods-card'
import { RecommendWrapper } from './style'
import replace from '../replace.png'
import { PullToRefresh } from 'antd-mobile'

const Recommend = (props) => {
    const { 
        getRankListDispatch, 
        getSpecialListDispatch, 
        getGoodsListDispatch 
    } = props

    const { 
        rankList, 
        specialList, 
        goodsList 
    } = props

    const { vegetables={}, baiyi={} } = specialList

    let swiper = null;
    useEffect(() => {
        if (swiper) {
            return 
        }
        swiper= new Swiper('.swiper-container')
    }, [])  

    useEffect(() => {
        if (!rankList.length) {
            getRankListDispatch()
        }
        getSpecialListDispatch()
        getGoodsListDispatch()
    }, [])

    const renderRankList1 = () => {
        let items = rankList.slice(0, 6)
        return items.map((item) => {
            return (
                <a href={item.link} key={item.id}>
                    <div className="rank_item" >
                        <div className="rank_item_img">
                            <LazyLoad placeholder={<img 
                                width="100%" 
                                height="100%" 
                                src={replace}/>
                            }>
                                <img 
                                    src={item.image} 
                                    alt="" 
                                    width="100%" 
                                    height="100%" 
                                    className="img_main" 
                                />
                            </LazyLoad>
                        { 
                            item.style_image && 
                            <img 
                                src={item.style_image} 
                                alt="" 
                                className="img_icon" 
                            /> 
                        }
                        </div>
                        <div className="rank_item_title">
                            {item.title}
                        </div>
                    </div>
                </a>
            )
        })
    }

    const renderRankList2 = () => {
        let items = rankList.slice(6)
        return items.map((item) => {
            return (
                <a href={item.link} key={item.id}>
                    <div className="rank_item" >
                        <div className="rank_item_img">
                            <LazyLoad placeholder={<img 
                                width="100%" 
                                height="100%" 
                                src={replace}/>
                            }>
                                <img 
                                    src={item.image} 
                                    alt="" 
                                    width="100%" 
                                    height="100%" 
                                    className="img_main" 
                                />
                            </LazyLoad>
                        { 
                            item.style_image && 
                            <img 
                                src={item.style_image} 
                                alt="" 
                                className="img_icon" 
                            /> 
                        }
                        </div>
                        <div className="rank_item_title">
                            {item.title}
                        </div>
                    </div>
                </a>
            )
        })
    }

    return (
        <RecommendWrapper>
            <PullToRefresh>
                <div className="rank swiper-container">
                    <div className="rank_box swiper-wrapper">
                        <ul className="swiper-slide">
                            <li className="li_first swiper-item">
                                {renderRankList1()}
                            </li>
                            <li className="li_second swiper-item">
                                {renderRankList2()}
                            </li>
                        </ul>
                    </div>
                </div>
                <SpecialBox main={vegetables} part={vegetables.item}/>
                <SpecialBox main={baiyi} part={baiyi.item}/>
                <div className="goods_list">
                    {
                        goodsList.map((item, index) => {
                            return (
                                <GoodsCard key={index} item={item.data}/>
                            )
                        })
                    }
                </div>
            </PullToRefresh>
        </RecommendWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        rankList: state.home.rankList,
        specialList: state.home.specialList,
        goodsList: state.home.goodsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRankListDispatch() {
            dispatch(getRankList())
        },
        getSpecialListDispatch() {
            dispatch(getSpecialList())
        },
        getGoodsListDispatch() {
            dispatch(getGoodsList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)

