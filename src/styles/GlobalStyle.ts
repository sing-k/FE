import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import color from "./color";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(
            to bottom,
            ${color.COLOR_MAIN_PURPLE},
            ${color.COLOR_MAIN_MIDDLE},
            ${color.COLOR_MAIN_SKYBLUE}
        )
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
