import styled from "styled-components";
import { Link } from "react-router-dom";

import { glassEffectStyle } from "../../styles/style";
import color from "../../styles/color";
import { AlbumCard } from "../molecules/album";

import { IoArrowBack } from "react-icons/io5";

const HighestRated = () => {
  return (
    <>
      <Container>
        <Header>
          <BackBtn to="/album">
            <IoArrowBack />
          </BackBtn>
          <AlbumCategory>평점 높은 순</AlbumCategory>
        </Header>

        <CardContainer>
          {Array.from({ length: 24 }).map((_, index) => (
            <AlbumCard key={index} />
          ))}
        </CardContainer>
      </Container>
    </>
  );
};

export default HighestRated;

const Container = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0 2rem;
  padding-bottom: 1rem;
  margin-top: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* 추가: BackBtn과 AlbumCategory 사이에 간격을 추가 */
  padding-bottom: 0;
`;

const AlbumCategory = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: black;
  padding-top: 1rem;
`;

const BackBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${color.COLOR_GRAY_TEXT};
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

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
`;
