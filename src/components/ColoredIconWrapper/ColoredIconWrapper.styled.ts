import styled, { css } from "styled-components";
import { color } from "./ColoredIconWrapper";

export interface StyledDoneIconProps {
  $color: color;
}

const getFillColor = css<StyledDoneIconProps>`
  fill: ${({ $color, theme }) => {
    if ($color === "default") {
      return theme.palette.grey[900];
    } else if ($color === "white") {
      return "#ffffff";
    } else if ($color === "gray") {
      return theme.palette.grey[100];
    } else {
      return theme.palette[$color].main;
    }
  }};
`;

export const StyledColoredIconWrapper = styled.span<StyledDoneIconProps>`
  ${getFillColor}
  .MuiSvgIcon-root {
    ${getFillColor};
    & * {
      ${getFillColor};
    }
  }
`;
