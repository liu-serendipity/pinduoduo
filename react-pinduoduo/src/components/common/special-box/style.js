import styled from "styled-components";
import style from '@/assets/global-style'

export const SpecialBoxWrapper = styled.div`
    width: 18.75rem;
    height: 4.9rem;
    padding: 0 0.6rem 0 0.4rem;
    overflow: hidden;
    background-color: ${style["theme-color"]};
    margin: 0.4rem 0 0;
    display: flex;
    align-items: center;
    .main_box {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 3.2rem;
        .main_img {
            position: relative;
            width: 1.95rem;
            height: 1.95rem;
            margin-bottom: 0.2rem;
            border-radius: 50%;
            background-color: #fcfcfc;
            div{
                position: absolute;
                top: 0;
                left: 0;
                max-width: 1.95rem;
                max-height: 1.95rem;
                background-color: ${style["theme-color"]};
            }
        }
        .main_title {
            font-size: ${style["font-size"]};
            font-weight: 700;
            line-height: 0.8rem;
            color: #151516;
            margin-bottom: 0.35rem;
        }
        .main_desc {
            font-size: ${style["font-size-s"]};
            line-height: 0.6rem;
            color: #777;
        }
    }
    
    .line {
        width: 0.3rem;
        height: 4.1rem;
        margin: 0 0.15rem 0 0.1rem;
    }
    .part_box {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        .part_img {
            width: 3.2rem;
            height: 3.2rem;
            margin-bottom: 0.2rem;
            border-radius: 0.1rem;
            background-color: #fcfcfc;
        }
        .part_price {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            line-height: 0.7rem;
            color: ${style["font-color"]};
            .goods_price {
                font-size: ${style["font-size"]};
            }
        }
    }
`