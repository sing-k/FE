import { css } from "styled-components";
import color from "./color";

export const glassEffectStyle = (blur: string = "2px") => {
  return css`
    background-color: ${color.COLOR_TRANSPARENT_WHITE};
    backdrop-filter: blur(${blur});
    -webkit-backdrop-filter: blur(${blur});
  `;
};
