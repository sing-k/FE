import styled from "styled-components";
import { AlbumCard, AlbumList } from "../../molecules";
import { useMediaQueries } from "../../../hooks";
import { glassEffectStyle } from "../../../styles/style";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const AlbumSearchList = ({ data, query }: any) => {
  if (!data) return <p>Loading...</p>;
  const { isPc, isTablet, isMobile } = useMediaQueries();
  const numToShow = isPc ? 5 : isTablet ? 3 : 2;

  const topItems = data.slice(0, numToShow);
  const rest = data.slice(numToShow);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/album");
  };
  return (
    <Container>
      <SearchTitle>
        <FaArrowLeft onClick={handleClick} /> '{query}'에 대한 검색 결과
      </SearchTitle>
      <CardWrapper>
        {topItems.map((data: any) => (
          <AlbumCard
            key={data.id}
            data={data}
            width={isPc ? "19%" : isTablet ? "30%" : isMobile ? "40%" : "100%"}
          ></AlbumCard>
        ))}
      </CardWrapper>
      <ListWrapper>
        {rest.map((data: any) => (
          <AlbumList key={data.id} data={data}></AlbumList>
        ))}
      </ListWrapper>
    </Container>
  );
};

export default AlbumSearchList;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  border-radius: 10px;
`;

const SearchTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 900;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  gap: 1rem;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
