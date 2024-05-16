import { css } from "styled-components";
import color from "./color";

type GlassOptions = {
  blur?: string;
  bgColor?: string;
};

export const glassEffectStyle = (
  options: GlassOptions = {
    blur: "2px",
    bgColor: color.COLOR_TRANSPARENT_WHITE,
  }
) => {
  return css`
    background-color: ${options.bgColor};
    backdrop-filter: blur(${options.blur});
    -webkit-backdrop-filter: blur(${options.blur});
  `;
};
