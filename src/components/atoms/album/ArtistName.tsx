import styled from "styled-components";

const ArtistName = ({ data }: any) => {
  return <Name>{data?.artists[0]?.name}</Name>;
};

export default ArtistName;

const Name = styled.p`
  font-size: 0.7rem;
`;
