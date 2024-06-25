import styled from "styled-components";

interface TextProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
  bold?: string | number;
}
const Text = ({ color, size, bold, children }: TextProps) => {
  return (
    <StyledText color={color} size={size} bold={bold}>
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.p<TextProps>`
  color: ${props => props.color || "inherit"};
  font-size: ${props => props.size || "inherit"};
  font-weight: ${props => (props.bold ? props.bold : "normal")};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
