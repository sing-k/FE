import styled from "styled-components";

import { Link } from "react-router-dom";

import AlbumCarousel from "./AlbumCarousel";

import { glassEffectStyle } from "../../../styles/style";
import color from "../../../styles/color";

import { GetAlbumListArgs } from "../../../api/album";

import { useAlbumListQuery } from "../../../hooks/queries/album";

import Loading from "../../common/Loading";
import ErrorMessage from "../../common/ErrorMessage";

type AlbumSectionType = {
  title: string;
  link: string;
  args: GetAlbumListArgs;
};

const AlbumSection = ({ title, link, args }: AlbumSectionType) => {
  const { data, isLoading, isError, error } = useAlbumListQuery(args);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;

  return (
    <Container>
      <Header>
        <AlbumCategory>{title}</AlbumCategory>
        <MoreBtn to={link}>더보기</MoreBtn>
      </Header>

      <AlbumCarousel items={data.data.items} />
    </Container>
  );
};

export default AlbumSection;

const Container = styled.div`
  ${glassEffectStyle()}
  margin-top: 3rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 10px;
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
`;

const MoreBtn = styled(Link)`
  ${glassEffectStyle()}
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${color.COLOR_GRAY_TEXT};
  text-decoration: none; /* 밑줄 제거 */
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: 0.4s;

  &:hover {
    background-color: ${color.COLOR_BLUE_AUTH_BUTTON};
    color: white;
  }
`;
