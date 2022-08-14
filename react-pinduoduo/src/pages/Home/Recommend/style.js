import styled from 'styled-components'
import style from '@/assets/global-style'

export const RecommendWrapper = styled.div`
    margin-top: 0;
    margin-bottom: 50px;
    .rank {
        background-color: ${style["theme-color"]};
        .rank_box {
            padding: 0.25rem 0 0.3rem;
            height: 7.75rem;
            margin: 0 0 0 0.05rem;
            ul {
                li {
                    white-space: nowrap;
                }   
                .li_first {
                    margin-top: 0.25rem;
                }
                .li_second {
                    margin-top: 0.5rem;
                }
            }
        }
    }
    .rank_item {
        display: inline-block;
        width: 3.7rem;
        .rank_item_img {
            width: 100%;
            text-align: center;
            position: relative;
            img {
                border: 0;
                max-width: 100%;
                vertical-align: top;
            }
            .img_main {
                width: 1.95rem;
                height: 1.95rem;
            }
            .img_icon {
                min-height: 1px;
                min-width: 1px;
                top: -0.25rem;
                right: 0.29375rem;
                width: .875rem;
                height: 0.8rem;
                position: absolute;
                z-index: 1;
            }
        }
        .rank_item_title {
            text-align: center;
            height: 0.8rem;
            line-height: 0.8rem;
            margin-top: 0.25rem;
            font-size: ${style["font-size-s"]};
        }
    }
    a {
        text-decoration:none;
        color: #666666;
    }
    .goods_list {
        padding: 0.35rem;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`