import styled from 'styled-components'
import style from '@/assets/global-style'

export const Top = styled.div`
    position: relative;
    padding: 0.3rem 0.7rem;
    width: 18.75rem;
    background: ${style["theme-color"]};
    .search {
        text-align: center;
        border-radius: 0.4rem;
        background-color: #ededed;
        height: 1.9rem;
        color: ${style["font-color-light"]};
        font-size: ${style["font-size-m"]};
        border-style: solid;
    }
    .search_bar {
        padding: 0 1.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.9rem;
        overflow: hidden;
        width: 17.35rem;
        .search_bar_placeholder {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .camera_icon {
        position: absolute;
        right: 0.7rem;
        top: 0.7rem;
        height: 1.8rem;
        width: 1.8rem;
    }
`

export const HomeWrapper = styled.div`
    .header {
        width: 100%;
        position: sticky;
        top: 0;
        z-index: 10001;
        background: ${style["theme-color"]};
    }
    .adm-tabs-tab-active {
        color: ${style["font-color"]}
    }
    .adm-tabs-tab-line {
        background: ${style["font-color"]};
    }
    .adm-tabs-tab {
        font-weight: 500;
        height: 2.1rem;
        font-size: ${style["font-size-m"]};
    }
`