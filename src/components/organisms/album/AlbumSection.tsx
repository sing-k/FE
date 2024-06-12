import styled from "styled-components";
import { Link } from "react-router-dom";
import AlbumCarousel from "./AlbumCarousel";
import { glassEffectStyle } from "../../../styles/style";
import color from "../../../styles/color";

const AlbumSection = ({ title, link }) => {
  return (
    <Container>
      <Header>
        <AlbumCategory>{title}</AlbumCategory>
        <MoreBtn to={link}>더보기</MoreBtn>
      </Header>
      <AlbumCarousel />
    </Container>
  );
};

export default AlbumSection;

const Container = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  padding: 0 2rem;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding-bottom: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AlbumCategory = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: black;
  padding-top: 2rem;
  padding-bottom: 0rem;
  margin: 0rem;
`;

const MoreBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${color.COLOR_GRAY_TEXT};
  text-decoration: none; /* 밑줄 제거 */
  ${glassEffectStyle()}
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: 0.4s;
  margin-top: 1rem;
  &:hover {
    background-color: ${color.COLOR_BLUE_AUTH_BUTTON};
    color: white;
  }
`;
