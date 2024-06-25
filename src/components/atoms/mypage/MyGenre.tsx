import styled from "styled-components";
import color from "../../../styles/color";
interface GenreProps {
  children: React.ReactNode;
}

const MyGenre = ({ children }: GenreProps) => {
  return <StyledGenre>{children}</StyledGenre>;
};

export default MyGenre;

const StyledGenre = styled.span`
  font-size: 0.8rem;
  color: ${color.COLOR_GRAY_TEXT};
`;
