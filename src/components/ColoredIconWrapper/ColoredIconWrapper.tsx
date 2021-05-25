import { StyledColoredIconWrapper } from "./ColoredIconWrapper.styled";

export interface ColoredIconWrapperProps {
  color: string;
  children: React.ReactNode;
}

const ColoredIconWrapper = ({
  color = "primary",
  children,
  ...rest
}: ColoredIconWrapperProps) => {
  return (
    <StyledColoredIconWrapper color={color} {...rest}>
      {children}
    </StyledColoredIconWrapper>
  );
};

export default ColoredIconWrapper;
