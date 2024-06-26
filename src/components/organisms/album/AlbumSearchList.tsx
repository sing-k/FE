import styled from "styled-components";

import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { useMediaQueries } from "../../../hooks";

import { glassEffectStyle } from "../../../styles/style";
import { pathName } from "../../../App";

import { AlbumType } from "../../../types/albumType";

import AlbumCarousel from "./AlbumCarousel";
import AlbumItem from "../../molecules/album/AlbumItem";

type Props = {
  data: AlbumType[];
  query: string;
};

const AlbumSearchList = ({ data, query }: Props) => {
  if (!data) return <p>Loading...</p>;

  const { isPc, isTablet } = useMediaQueries();
  const numToShow = isPc ? 5 : isTablet ? 3 : 2;

  const topItems = data.slice(0, numToShow);
  const rest = data.slice(numToShow);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${pathName.album}`);
  };

  return (
    <Container>
      <SearchTitle>
        <FaArrowLeft onClick={handleClick} /> '{query}'에 대한 검색 결과
      </SearchTitle>

      <AlbumCarousel items={topItems} />

      <ListWrapper>
        {rest.map((data) => (
          <AlbumItem key={data.id} type="list" data={data} />
        ))}
      </ListWrapper>
    </Container>
  );
};

export default AlbumSearchList;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  padding: 1rem 1.5rem;
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

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
