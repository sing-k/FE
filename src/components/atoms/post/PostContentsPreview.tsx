import styled from "styled-components";
import color from "../../../styles/color";

type Props = {
  contents: string;
};

const PostContentsPreview = ({ contents }: Props) => {
  return (
    <Container
      dangerouslySetInnerHTML={{
        __html: contents,
      }}
    />
  );
};

export default PostContentsPreview;

const Container = styled.div`
  width: 100%;
  color: ${color.COLOR_GRAY_TEXT};
  font-size: 0.8rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
