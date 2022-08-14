import styled from 'styled-components'
import style from '@/assets/global-style'

export const Container = styled.div`
    background-color: ${style["theme-color"]};
    bottom: 0;
    color: #666;
    font-family: pingfangsc-regular,stheiti stxihei,microsoft yahei,microsoft jhenghei,miui;
    font-size: ${style["font-size-s"]};
    height: 100%;
    line-height: 1.5;
    overflow-x: hidden;
    position: fixed;
    top: 0;
    width: 18.75rem;
    z-index: 100;
    &.fly-enter, &.fly-appear {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-apply-active {
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    .search_hot {
        position: relative;
        .search_eye {
            height: 1rem;
            position: absolute;
            right: 0.7rem;
            top: 1rem;
            width: 1rem;
        }
        .search_find {
            color: ${style["font-color-light"]};
            display: inline-block;
            font-size: ${style["font-size-m"]};
            height: 0.65rem;
            line-height: 1rem;
            margin: 0.8rem 0 1rem 0.7rem;
            position: relative;
            .compass_icon {
                height: 0.8rem;
                margin-right: 0.3rem;
                vertical-align: top;
                width: 0.8rem;
            }
        }
        .search_hot_key {
            max-height: 6rem;
            overflow: hidden;
            padding: 0 0.3rem 0 0.7rem;
            position: relative;
            width: 100%;
            a {
                >span {
                background-color: #f4f4f4;
                border-radius: 0.8rem;
                cursor: pointer;
                display: inline-block;
                font-size: ${style["font-size"]};
                height: 1.8rem;
                margin: 0 0.4rem 0.4rem 0;
                min-width: 2.55rem;
                padding: 0 0.55rem 0 0.5rem;
                text-align: center;
                vertical-align: top;
                .hot_title {
                    color: ${style["font-color-heavy"]};
                    display: inline-block;
                    line-height: 1.6rem;
                    max-width: 6rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    vertical-align: middle;
                    white-space: nowrap;
                }
                .hot_tag {
                    display: inline-block;
                    margin-left: 0.25rem;
                    vertical-align: middle;
                    background: ${style["theme-color"]};
                    width: 0.7rem;
                    height: 0.7rem;
                    img {
                        display: inline-block;
                        vertical-align: top;
                        width: 100%;
                        height: 100%;
                        min-height: 1px;
                        min-width: 1px;
                    }
                }
            }
            }
        }
    }
    .close {
        color: ${style["font-color-light"]};
        font-size: ${style["font-size"]};
        padding-top: 1.2rem;
        text-align: center;
    }
    input::-webkit-search-cancel-button {
        display: none;
    }
    a {
        text-decoration:none;
        color:#000;
    }
`

export const HotKeyWrapper = styled.div`
    .search_hot {
        position: relative;
        .search_eye {
            position: absolute;
            width: 0.8rem;
            height: 0.6rem;
            right: 0.6rem;
            top: 0.8rem;
            color: ${style["font-color-light"]};
        }
        .search_find {
            color: ${style["font-color-light"]};
            display: inline-block;
            font-size: ${style["font-size"]};
            height: 0.75rem;
            line-height: 1rem;
            margin: 0.8rem 0 1rem 0.7rem;
            position: relative;
            .compass_icon {
                height: 0.8rem;
                margin-right: 0.01rem;
                width: 0.85rem;
            }
        }
        .search_hot_key {
            max-height: 6.4rem;
            overflow: hidden;
            padding: 0 0.3rem 0 0.7rem;
            position: relative;
            width: 100%;
            >span {
                background-color: #f4f4f4;
                border-radius: 0.8rem;
                cursor: pointer;
                display: inline-block;
                font-size: ${style["font-size"]};
                height: 1.8rem;
                margin: 0 0.4rem 0.4rem 0;
                min-width: 2.55rem;
                padding: 0 0.55rem 0 0.5rem;
                text-align: center;
                vertical-align: top;
                >span {
                    color: ${style["font-color-heavy"]};
                    display: inline-block;
                    line-height: 1.6rem;
                    max-width: 6rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    vertical-align: middle;
                    white-space: nowrap;
                }
            }
        }
    }
    .close {
        color: ${style["font-color-light"]};
        font-size: ${style["font-size"]};
        padding-top: 1.2rem;
        text-align: center;
    }
`

export const SuggestWrapper = styled.div`
    ul {
        width: 100%;
        background-color: #f2f2f2;
        li {
            width: 100%;
            height: 2.3rem;
            padding-left: 0.7rem;
            background: ${style["theme-color"]};
            >div {
                width: 100%;
                height: 100%;
                border-bottom: 1px solid ${style["border-color"]};
                display: flex;
                flex-wrap: nowrap;
                >span {
                    flex-shrink: 0;
                    max-width: 100%;
                    height: 100%;
                    color: ${style["font-color-heavy"]};
                    overflow: hidden;
                    font-size: ${style["font-size"]};
                    white-space: nowrap;
                    line-height: 2.3rem;
                    padding-left: 0.1rem;
                    display: inline-block;
                    text-overflow: ellipsis;
                    color: #151516;
                }
                >div {
                    flex-shrink: 1;
                    flex-grow: 1;
                    overflow: hidden;
                    text-align: right;
                    padding-right: 0.8rem;
                    line-height: 2.3rem;
                    font-size: ${style["font-size-s"]};
                    >div {
                        display: inline-block;
                        color: ${style["font-color-light"]};
                        padding-left: 0.3rem;
                    }
                }
            }
        }
    }
`

export const EnterLoading = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: auto;
`