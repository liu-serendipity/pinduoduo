import styled from "styled-components"
import style from '@/assets/global-style'

export const MaskWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
    z-index: 20001;
    .close_icon {
        position: absolute;
        left: 87%;
        top: 37%;
        color: ${style["font-color-light"]};
        z-index: 3000;
    }
    .container {
        width: 14.7rem;
        height: 7.7rem;
        border-radius: 0.4rem;
        background: ${style["theme-color"]};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        .title {
            line-height: 1.25rem;
            color: #151516;
            font-size: ${style["font-size-m"]};
            margin-top: 1.4rem;
            padding: 0 0.9rem 0 0.9rem;
        }
        .choose {
            border-top: 1px solid ${style["border-color"]};
            position: absolute;
            bottom: 0;
            height: 2.4rem;
            line-height: 2.4rem;
            width: 100%;
            overflow: hidden;
            .clear {
                color: ${style["font-color-light"]};
                border-right: 1px solid ${style["border-color"]};
                display: inline-block;
                width: 50%;
                font-size: ${style["font-size-m"]};
            }
            .confirm {
                color: ${style["font-color"]};
                display: inline-block;
                width: 50%;
                font-size: ${style["font-size-m"]};
            }
        }
    }
`