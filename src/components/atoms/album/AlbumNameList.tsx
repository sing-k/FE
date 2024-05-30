import styled from "styled-components";

const AlbumNameList = ({ data }: any) => {
  return <StyledName>{data.name}</StyledName>;
};

export default AlbumNameList;

const StyledName = styled.p`
  font-weight: 700;
  font-size: 0.8rem;
`;
