import styled, { css } from "styled-components";

interface IconProps {
  src: string;
  alt?: string;
  rounded?: boolean;
}
const MyIcon = ({ src, alt, rounded = false }: IconProps) => {
  return (
    <IconWrapper>
      <StyledIcon src={src} alt={alt} rounded={rounded} />
    </IconWrapper>
  );
};

export default MyIcon;

const IconWrapper = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled.img<IconProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${props =>
    props.rounded &&
    css`
      border-radius: 50%;
    `}
`;
