import React from "react"
import { GoodsCardWrapper } from './style'
// import { RightOutline } from 'antd-mobile-icons'
import { NavLink } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import replace from '@/pages/Home/replace.png'

const GoodsCard = (props) => {
    const { item } = props

    return (
        <GoodsCardWrapper>
            <NavLink to={`/goodsDetail/${item.goods_id}`}>
                <div className="goods_card1">
                    <div className="goods_card_item">
                        <div className="card_item_img">
                            <div>
                                <LazyLoad placeholder={<img 
                                    width="100%" 
                                    height="100%" 
                                    src={replace}/>
                                }>
                                    <img 
                                        src={item.thumb_url} 
                                        width="100%" 
                                        height="100%" 
                                        alt="" 
                                    />
                                </LazyLoad>
                            </div>
                        </div>
                        <div className="card_item_content">
                            <div className="goods_name">
                            {
                                item.icon_list.map((i, index) => {
                                    return (
                                        <img 
                                            src={i.url} 
                                            alt="" 
                                            key={index}
                                        />
                                    )
                                })
                            }
                                <span>{item.short_name}</span>
                            </div>
                            <div className="goods_tags">
                            {
                                item.tag_list.map((i, index) => {
                                    return (
                                        <div className="goods_tag" key={index}>
                                            <span style={{color:`${i.text_color}`}}>{i.text}</span>
                                        </div>
                                    )
                                })
                            }
                            </div>
                            <div className="goods_sell">
                                {/* <div className="after_coupon"></div> */}
                                <div className="goods_price">{`${item.group.price / 100}`}</div>
                                <div className="have_put">
                                    <div>
                                        <span>{item.sales_tip}</span>
                                    </div>
                                </div>
                                <div className="near_group">
                                {
                                    item.near_group && item.near_group.list &&
                                    item.near_group.list.map((i, index) => {
                                        return (
                                            <div 
                                                className="img" 
                                                key={index} 
                                                style={{
                                                    zIndex:`${-index}`, 
                                                    width:18, 
                                                    height:18, 
                                                    marginLeft:-7.2*`${index}`}}
                                            >
                                                <img src={i.avatar} alt="" />
                                                <div></div>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="goods_item_ranking">
                        <div className="item_ranking_detail">
                            <span></span>
                            <RightOutline />
                        </div>
                    </div> */}
                </div>
            </NavLink>


            {/* <div className="goods_card2">
                <img src="" alt="" />
                <div className="card_item_content">
                    <div className="item_name">
                        <div className="name_tag"></div>
                        <span></span>
                    </div>
                    <div className="goods_tags">
                        <div className="goods_tag">
                            <span></span>
                        </div>
                    </div>
                    <div className="on_shopping">
                        <div></div>
                        <RightOutline />
                    </div>
                </div>
            </div> */}

            
            {/* <div className="goods_card3">
                <img src="" alt="" />
                <div className="card_item_content">
                    <div className="content_main">
                        <img src="" alt="" />
                        <div className="content_part">
                            <div className="title"></div>
                            <div className="have_shopping"></div>
                        </div>
                    </div>
                    <div className="content_tags">
                        <div className="content_tag"></div>
                    </div>
                </div>
            </div> */}
        </GoodsCardWrapper>
    )
}

export default GoodsCard