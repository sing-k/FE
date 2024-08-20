import styled from "styled-components";
import color from "../../../styles/color";

type Props = {
  contents: string;
};

const PostContentsPreview = ({ contents }: Props) => {
  return (
    <Container
      className="post-contents-preview"
      dangerouslySetInnerHTML={{
        __html: contents,
      }}
    />
  );
};

export default PostContentsPreview;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  * {
    color: ${color.COLOR_GRAY_TEXT} !important;
    font-weight: normal !important;
    font-size: 0.8rem !important;
  }
`;
