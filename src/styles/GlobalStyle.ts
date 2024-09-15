import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import color from "./color";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
        /* color: #333; */
    }

    body {
        background: linear-gradient(
            to bottom,
            ${color.COLOR_MAIN_PURPLE},
            ${color.COLOR_MAIN_MIDDLE},
            ${color.COLOR_MAIN_SKYBLUE}
        )
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: bold;
    }

    h1 {
      font-size: 2rem;       /* 브라우저 기본 설정에 따라 다름 */
      font-weight: bold;    /* 기본적으로 볼드체 */
      line-height: 1.5;     /* 줄 높이 설정 */
    }

    h2 {
      font-size: 1.5rem;     /* 브라우저 기본 설정에 따라 다름 */
      font-weight: bold;    /* 기본적으로 볼드체 */
      line-height: 1.5;     /* 줄 높이 설정 */
    }

    h3 {
      font-size: 1.17rem;    /* 브라우저 기본 설정에 따라 다름 */
      font-weight: bold;    /* 기본적으로 볼드체 */
      line-height: 1.5;     /* 줄 높이 설정 */
    }

    em {
      font-style: italic;
    }

    //   desktop 규격
    @media screen and (min-width: 1024px) {
      html {
        font-size: 16px;
      }
    }

    //   tablet 규격 
    @media screen and (max-width: 1023px) {
      html {
        font-size: 14px;
      }
    }

    //   mobile 규격 
    @media screen and (max-width: 540px) {
      html {
        font-size: 12px;
      }
    }
`;

export default GlobalStyle;
