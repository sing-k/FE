import styled from "styled-components";

type Props = {
  name: string;
};

const ArtistName = ({ name }: Props) => {
  return <Name>{name}</Name>;
};

export default ArtistName;

const Name = styled.p`
  font-size: 0.7rem;
`;
