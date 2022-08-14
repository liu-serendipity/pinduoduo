import styled from 'styled-components'
import style from '@/assets/global-style'

export const FooterWrapper = styled.div`
    background: #fdfdfd;
    border-top: 0.025rem solid ${style["border-color"]};
    bottom: -0.05rem;
    padding: 0 0.45rem;
    position: fixed;
    width: 100%;
    z-index: 10;
`

export const Tab = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 2.8rem;
    justify-content: space-around;
    position: relative;
    z-index: 10;
    a {
        &.active {
            span, div {
                color: red
            }
        }
    }
`

export const TabItem = styled.div`
    flex: 1;
    width: 3rem;
    text-align: center;
    line-height: 0.5rem;
    font-size: ${style["font-size-s"]};
    color: ${style["font-color-heavy"]};
    span {
        display: inline-block;
        height: 1.3rem;
        width: 1.3rem;
    }
    div {
        position: relative;
    }
`