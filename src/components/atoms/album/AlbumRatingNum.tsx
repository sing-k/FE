import styled from "styled-components";

import { IoPersonSharp } from "react-icons/io5";

import color from "../../../styles/color";

const AlbumRatingNum = () => {
  return (
    <Container>
      <IoPersonSharp />
      12
    </Container>
  );
};

export default AlbumRatingNum;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 0.7rem;
  color: ${color.COLOR_GRAY_TEXT};
`;
