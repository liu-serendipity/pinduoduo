import React from "react"
import LazyLoad from 'react-lazyload'
import { SpecialBoxWrapper } from './style'
import replace from '@/pages/Home/replace.png'

const SpecialBox = ({ main={}, part=[] }) => {
    const {
        img, 
        title, 
        desc
    } = main

    return (
        <SpecialBoxWrapper>
            <div className="main_box">
                <div className="main_img">
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="main_title">{title}</div>
                <div className="main_desc">{desc}</div>
            </div>
            <div className="line">
                <img src="https://funimg.pddpic.com/recone/2020-09-10/ea56b47f-2ec2-4c95-9e8b-87d9ccc1cfc0.png?imageView2/2/w/1300/q/80/format/webp" alt="" />
            </div>
            <div className="part_box">
            {
                part.map(item => {
                    return (
                        <div key={item.id}>
                            <div className="part_img">
                                <LazyLoad placeholder={<img 
                                    width="100%" 
                                    height="100%" 
                                    src={replace} />
                                }>
                                    <img 
                                        width="100%" 
                                        height="100%" 
                                        src={item.pic} 
                                        alt="" 
                                    />
                                </LazyLoad>
                            </div>
                            <div className="part_price">
                                <i>￥</i>
                                <div className="goods_price">{item.price}</div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </SpecialBoxWrapper>
    )
}

export default SpecialBox