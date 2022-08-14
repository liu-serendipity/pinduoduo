import styled from 'styled-components'
import style from '@/assets/global-style'

export const SearchTopWrapper = styled.div`
    background-color: ${style["theme-color"]};
    height: 2.5rem;
    padding: 0.35rem 0 0.35rem 0.7rem;
    width: 100%;
    position: relative;
    .left_icon {
        height: 1.2rem;
        top: 0.7rem;
        width: 1.5rem;
        position: absolute;
        left: 0.28rem;
        color: ${style["font-color-light"]};
    }
    .box {
        position: absolute;
        background-color: #ededed;
        border-radius: 0.4rem;
        color: ${style["font-color-light"]};
        float: left;
        height: 1.8rem;
        top: 50%;
        z-index: 1;
        transform: translateY(-50%);
        left: 2.1rem;
        width: 13.6rem;
        input {
            background: none;
            border-radius: 0.4rem;
            color: #151516;
            float: left;
            font-size: ${style["font-size-m"]};
            height: 1.8rem;
            margin-left: 3.3rem;
            width: 8.75rem;
        }
        .box_in {
            align-items: center;
            justify-content: center;
            height: 1.9rem;
            display: flex;
            left: 0.5rem;
            top: 50%;
            transform: translateY(-50%);
            font-size: ${style["font-size-m"]};
            position: absolute;
            .search_slect {
                height: 1.8rem;
                width: 2.8rem;
                display: flex;
                font-size: ${style["font-size-m"]};
                align-items: center;
                color: ${style["font-color-heavy"]};
                .down_icon {
                    align-items: center;
                    vertical-align: middle;
                    display: inline-flex;
                    color: #ccc;
                    font-size: ${style["font-size-m"]};
                    padding-left: 0.1rem;
                    color: ${style["font-color-heavy"]};
                }
                i::after {
                    content: "";
                    display: inline-flex;
                    position: relative;
                    background: rgba(21, 21, 22, 0.1);
                    height: 0.8rem;
                    width: 0.05rem;
                }
            }
        }
        .camera_icon {
            height: 1rem;
            position: absolute;
            right: 0.5rem;
            top: 0.4rem;
            width: 1rem;
        }
    }
    .confirm {
        font-size: ${style["font-size-m"]};
        color: ${style["font-color"]};
        height: 1.8rem;
        line-height: 1.8rem;
        margin-left: 15.7rem;
        top: 0.35rem;
    }
    .search_mask {
        position: absolute;
        bottom: 0;
        height: 115vh;
        left: -100vw;
        right: -100vw;
        top: -100px;
        width: 200vw;
        z-index: 10005;
    }
    ul {
        position: absolute;
        background-color: ${style["theme-color"]};
        border-radius: 0.2rem;
        box-shadow: 0 0 0.4rem 0 rgb(0 0 0 / 20%);
        color: ${style["font-color-heavy"]};
        font-size: ${style["font-size-m"]};
        left: -1rem;
        text-align: center;
        top: 2.2rem;
        width: 4rem;
        z-index: 10006;
    }
    ul::before {
        border: 0.45rem dashed transparent;
        border-bottom: 0.45rem solid hsla(0,0%,100%,.95);
        content: "";
        display: block;
        left: 1.4rem;
        position: absolute;
        top: -0.7rem;
    }
    li {
        font-size: ${style["font-size-m"]};
        height: 2.4rem;
        line-height: 2.4rem;
        position: relative;
    }
`