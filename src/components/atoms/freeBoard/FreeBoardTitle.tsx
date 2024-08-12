import styled from "styled-components";

type Props = {
  title: string;
};

const FreeBoardTitle = ({ title }: Props) => {
  return <Title>{title}</Title>;
};

export default FreeBoardTitle;

const Title = styled.p`
  font-weight: 800;
  font-size: 1.2rem;
  margin-top: 0.2rem;
`;
