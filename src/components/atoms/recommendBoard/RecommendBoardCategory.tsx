import styled from "styled-components";
import color from "../../../styles/color";

const RecommendBoardCategory = () => {
  return (
    <Container>
      <CategoryImage />
    </Container>
  );
};

export default RecommendBoardCategory;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryImage = styled.div`
  width: 2rem; /* Increase size for better visibility */
  height: 2rem; /* Increase size for better visibility */
  border-radius: 50%;
  background-color: white;
  background-image: url("https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=740");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid ${color.COLOR_GRAY_BORDER};
  margin-right: 0;
`;
