import styled from "styled-components";

type Props = {
  title: string;
};

const PostTitle = ({ title }: Props) => {
  return <Title>{title}</Title>;
};

export default PostTitle;

const Title = styled.p`
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5rem;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
