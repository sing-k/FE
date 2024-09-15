import styled from "styled-components";

type Props = {
  name: string;
};

const AlbumName = ({ name }: Props) => {
  return <StyledName>{name}</StyledName>;
};

export default AlbumName;

const StyledName = styled.p`
  font-weight: 700;
  font-size: 0.8rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
