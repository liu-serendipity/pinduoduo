import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        -webkit-tap-highlight-color: transparent;
        border: 0;
        margin: 0;
        outline: 0;
        padding: 0;
    }
    html {
        font-size: calc(20vw / 3.75);
        text-size-adjust: 100%;
    }
    body, html {
        font-family: PingFangSC-Regular,Helvetica,STHeiti STXihei,Microsoft YaHei,Microsoft JhengHei,Arial;
        height: 100%;
        width: 100%;
    }
    body {
        margin: 0;
        -webkit-user-select: none;
        -o-user-select: none;
        user-select: none;
        background: #f4f4f4;
        color: #666;
        font-size: 12px;
        line-height: 1.5;
    }
    blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, li, ol, p, pre, td, textarea, th, ul, a {
        border: 0;
        list-style: none outside none;
        vertical-align: baseline;
        text-decoration: none;
    }
    *, :after, :before{
        box-sizing: border-box;
    }
    button, input, optgroup, select, textarea {
        color: inherit;
        font: inherit;
        margin: 0;
        resize: none;
    }
    input {
        line-height: normal
    }
    input[type=search] {
        -webkit-appearance: textfield;
        box-sizing: content-box;
    }
    ol, ul {
        list-style: none;
    }
    em, i {
        font-style: normal;
    }
    img {
        border: 0;
        max-width: 100%;
        width: auto;
        height: auto;
        vertical-align: top;
    }
`;



