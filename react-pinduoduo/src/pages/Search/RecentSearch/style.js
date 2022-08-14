import styled from 'styled-components'
import style from '@/assets/global-style'

export const RecentSearchWrapper = styled.div`
    width: 100%;
    position: relative;
    padding: 0.7rem 0.3rem 0 0.7rem;
    .title {
        position: relative;
        height: 1.05rem;
        line-height: 1.05rem;
        font-size: ${style["font-size"]};
        color: ${style["font-color-light"]};
        .delete {
            position: relative;
            height: 100%;
            float: right;
            padding-right: 0.4rem;
        }
    }
    .recentKey {
        position: relative;
        .key {
            padding-top: 0.7rem;
            max-height: 8.3rem;
            overflow: hidden;
            a {
                >span {
                position: relative;
                display: inline-block;
                margin: 0 0.4rem 0.4rem 0;
                    >span {
                        display: inline-block;
                        height: 1.6rem;
                        line-height: 1.6rem;
                        padding: 0 0.5rem;
                        border-radius: 0.8rem;
                        background: #f4f4f4;
                        color: ${style["font-color-heavy"]};
                        text-align: center;
                        vertical-align: top;
                        font-size: ${style["font-size"]};
                        cursor: pointer;
                        min-width: 2.55rem;
                        max-width: 7.5rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
        .more {
            position: absolute;
            right: 0;
            top: 2.625rem;
            height: 1.75rem;
            line-height: 1.75rem;
            font-size: ${style["font-size"]};
            padding: 0 1.2rem 0 1rem;
            color: ${style["font-color-light"]};
            background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgb(255, 255, 255) 20%, rgb(255, 255, 255));
            >div {
                position: relative;
                height: 100%;
                padding: 0 0.5rem;
            }
        }
    }
    .recentKeyStyle {
        max-height: 4.5rem;
        overflow: hidden;
    }
    .moreStyle {
        visibility: hidden;
    }
`