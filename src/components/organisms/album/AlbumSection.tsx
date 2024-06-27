import { useEffect, useState } from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

import AlbumCarousel from "./AlbumCarousel";

import { glassEffectStyle } from "../../../styles/style";
import color from "../../../styles/color";

import { AlbumType } from "../../../types/albumType";

type AlbumSectionType = {
  title: string;
  link: string;
  fetchData: () => any;
};

const AlbumSection = ({ title, link, fetchData }: AlbumSectionType) => {
  const [items, setItems] = useState<AlbumType[]>();

  useEffect(() => {
    fetchData().then((res: any) => {
      // console.log(res.data.items);
      setItems(res.data.items as AlbumType[]);
    });
  }, [fetchData]);

  if (!items) return;

  return (
    <Container>
      <Header>
        <AlbumCategory>{title}</AlbumCategory>
        <MoreBtn to={link}>더보기</MoreBtn>
      </Header>

      <AlbumCarousel items={items} />
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
