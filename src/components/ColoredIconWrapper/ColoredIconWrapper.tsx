import { StyledColoredIconWrapper } from "./ColoredIconWrapper.styled";

export type color =
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "warning"
  | "white"
  | "default"
  | "gray";

export interface ColoredIconWrapperProps {
  color?: color;
  children?: React.ReactNode;
}

const ColoredIconWrapper = ({
  color = "primary",
  children,
  ...rest
}: ColoredIconWrapperProps) => {
  return (
    <StyledColoredIconWrapper $color={color} {...rest}>
      {children}
    </StyledColoredIconWrapper>
  );
};

export default ColoredIconWrapper;
