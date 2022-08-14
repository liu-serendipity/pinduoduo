import styled from "styled-components";
import style from '@/assets/global-style'

export const SortWrapper = styled.div`
    .top {
        background: ${style["theme-color"]};
        position: sticky;
        border-bottom: 1px solid ${style["border-color"]};
    }
    .adm-nav-bar {
        height: 2rem;
    }
`

export const SideTabWrapper = styled.div`
    .container {
        height: 85vh;
        background-color: #ffffff;
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        [data-prefers-color='dark'] & {
            background-color: unset;
        }
    }

    .side {
        flex: none;
    }

    .main {
        flex: auto;
    }

    .content {
        height: 100%;
        display: none;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        color: #cccccc;
        &.active {
            display: flex;
        }
    }
    .adm-side-bar-item-active {
        color: ${style["font-color"]}
    }
    .adm-side-bar-item-highlight {
        background: ${style["font-color"]};
        width: 0.2rem;
        top: -0.1rem;
        height: 1.3rem;
    }
    .adm-badge-wrapper {
        padding-left: 0.8rem;
        font-size: ${style["font-size-m"]};
    }
`