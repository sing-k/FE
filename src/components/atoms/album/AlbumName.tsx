import styled from "styled-components";

const AlbumName = ({ data }: any) => {
  return <StyledName>{data?.name}</StyledName>;
};

export default AlbumName;

const StyledName = styled.p`
  font-weight: 700;
  font-size: 0.8rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
