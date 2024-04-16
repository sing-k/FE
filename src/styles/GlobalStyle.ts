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
`;

export default GlobalStyle;
