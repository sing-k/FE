import styled from "styled-components";
import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

import { IoArrowBack } from "react-icons/io5";

import { Link } from "react-router-dom";

import { AlbumRequestType } from "../../../api/album";
import { pathName } from "../../../App";

import { useInfiniteAlbumListQuery } from "../../../hooks/queries/album";

import AlbumItem from "../../molecules/album/AlbumItem";
import InfiniteScrollList from "../../common/InfiniteScrollList";

type Props = {
  category: string;
  albumType: AlbumRequestType;
};

const AlbumPageTemplate = ({ category, albumType }: Props) => {
  const queryResult = useInfiniteAlbumListQuery(albumType);

  return (
    <Container>
      <Header>
        <BackBtn to={pathName.album}>
          <IoArrowBack />
        </BackBtn>
        <AlbumCategory>{category}</AlbumCategory>
      </Header>

      <InfiniteScrollList
        queryResult={queryResult}
        ItemComponent={AlbumItem}
        containerStyle={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "1rem",
          background: "none",
          backdropFilter: "none",
        }}
        emptyMessage="앨범 목록이 없습니다."
      />
    </Container>
  );
};

export default AlbumPageTemplate;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  padding: 1.5rem 1.5rem 3rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* 추가: BackBtn과 AlbumCategory 사이에 간격을 추가 */
`;

const AlbumCategory = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`;

const BackBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: ${color.COLOR_GRAY_TEXT};
  ${glassEffectStyle()}
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  transition: 0.4s;

  &:hover {
    background-color: ${color.COLOR_MAIN};
    color: white;
  }
`;
