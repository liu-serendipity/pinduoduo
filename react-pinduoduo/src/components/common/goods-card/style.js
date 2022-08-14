import styled from 'styled-components'
import style from '@/assets/global-style'

export const GoodsCardWrapper = styled.div`
    position: relative;
    margin-bottom: 0.35rem;
    width: 8.85rem;
    .goods_card1 {
        width: 100%;
        box-shadow: 0 0 0.25rem 0 rgb(0 0 0 / 5%);
        border-radius: 0.2rem;
        background-color: ${style["theme-color"]};
        overflow: hidden;
        .goods_card_item {
            width: 8.85rem;
            background: ${style["theme-color"]};
            .card_item_img {
                width: 8.85rem;
                position: relative;
                div {
                    position: relative;
                    height: 0;
                    padding-bottom: 100%;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        object-fit: contain;
                    }
                    img:after {
                        content: "";
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background-color: rgba(0,0,0,.02);
                    }
                }
            }
            .card_item_content {
                box-sizing: border-box;
                padding: 0.3rem 0.4rem 0.5rem;
                background-clip: content-box;
                .goods_name {
                    overflow: hidden;
                    line-height: 0.9rem;
                    min-height: 0.9rem;
                    color: #151516;
                    max-height: 0.9rem;
                    max-width: 9.35rem;
                    img {
                        position: relative;
                        height: 0.7rem;
                        margin-right: 0.2rem;
                        vertical-align: middle;
                        width: 1.3125rem;
                    }
                    span {
                        font-size: ${style["font-size"]};
                        line-height: 0.9rem;
                        word-break: break-all;
                        font-family: pingfangsc-regular,stheiti stxihei,microsoft yahei,microsoft jhenghei,miui;
                        vertical-align: middle;
                    }
                }
                .goods_tags {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    overflow: hidden;
                    width: 100%;
                    margin-top: 0.25rem;
                    height: 0.7rem;
                    .goods_tag {
                        display: flex;
                        align-items: center;
                        height: 0.7rem;
                        line-height: 0.7rem;
                        font-size: ${style["font-size-s"]};
                        white-space: nowrap;
                        border-radius: 0.1rem;
                        padding: 0;
                        margin-left: 0.3rem;
                        font-family: pingfangsc-regular,stheiti stxihei,microsoft yahei,microsoft jhenghei,miui;
                    }
                    .goods_tag:first-child {
                        margin-left: 0;
                    }
                }
                .goods_sell {
                    display: flex;
                    align-items: flex-end;
                    height: 0.9rem;
                    margin-top: 0.6rem;
                    .goods_price {
                        flex: 0 0 auto;
                        display: inline-block;
                        vertical-align: bottom;
                        color: ${style["font-color"]};
                        font-weight: 700;
                        line-height: 1;
                        font-size: ${style["font-size-m"]};
                    }
                    .goods_price::before {
                        content: "￥";
                        font-size: ${style["font-size-s"]};
                        margin-right: 0.1rem;
                    }
                    .have_put {
                        flex: 1 1 auto;
                        margin-left: 0.15rem;
                        overflow: hidden;
                        margin-bottom: 0.05rem;
                        div {
                            color: ${style["font-color-light"]};
                            font-size: ${style["font-size-s"]};
                            white-space: nowrap;
                            line-height: 0.75rem;
                            transform-origin: left bottom;
                            transform: scale(1);
                            width: 84px;
                            overflow: hidden;
                            span {
                                visibility: visible;
                            }
                        }
                    }
                    .near_group {
                        flex: 0 0 auto;
                        border-left: 0.15rem solid transparent;
                        margin: -0.05rem -0.05rem auto auto;
                        position: relative;
                        z-index: 0;
                        .img {
                            display: inline-block;
                            vertical-align: top;
                            position: relative;
                            background-color: #fcfcfc;
                            border-radius: 50%;
                            box-sizing: content-box;
                            left: -2px;
                            border: 1px solid transparent;
                            img {
                                border: 0;
                                max-width: 100%;
                                display: inline-block;
                                vertical-align: top;
                                width: 100%;
                                height: 100%;
                                border-radius: 50%;
                            }
                            div {
                                position: absolute;
                                top: 0;
                                left: 0;
                                right: -100%;
                                bottom: -100%;
                                transform-origin: 0 0;
                                transform: scale(.5);
                                box-sizing: border-box;
                                border-radius: 50%;
                                border: 1px solid rgba(0,0,0,.06);
                                box-shadow: 0 0 0 2px #ffffff;
                            }
                        }
                        .img:last-child {
                            margin-right: -2px;
                        }
                        .img:first-child {
                            left: 0;
                            margin-right: 0;
                        }
                    }
                }
            }
        }
    }
`