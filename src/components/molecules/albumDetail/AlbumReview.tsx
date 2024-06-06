import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";
import color from "../../../styles/color";

import { FaUser, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

import StarRating from "../../atoms/albumDetail/StarRating";

const AlbumReview = () => {
  return (
    <Container>
      <Wrapper>
        <StarRatingDiv>
          <StarRating rating={4.5} />
          4.5
        </StarRatingDiv>
        2024-06-01
      </Wrapper>

      <ReviewText>
        이 앨범은
        킹갓제너럴엠페러마제스티골져스프레셔스뷰리풀하이클래스엘레강스럭셔리클래식지니어스원더풀러블리월드탑클래스
        입니다. 감사합니다
      </ReviewText>

      <Wrapper>
        <WriterDiv>
          <WriterImgDiv>
            <FaUser color={"white"} />
          </WriterImgDiv>
          민숭이
        </WriterDiv>

        <BtnDiv>
          <Btn>
            <FaRegThumbsUp />
            123
          </Btn>
          <Btn>
            <FaRegThumbsDown />
            43
          </Btn>
        </BtnDiv>
      </Wrapper>
    </Container>
  );
};

export default AlbumReview;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  padding: 1rem;
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StarRatingDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ReviewText = styled.p`
  line-height: 1.5rem;
  font-size: 1rem;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${color.COLOR_GRAY_TEXT};
  font-weight: 500;
`;

const WriterDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const WriterImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${color.COLOR_LIGHTGRAY_BACKGROUND};
`;

const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.8rem;
`;

const Btn = styled.div`
  ${glassEffectStyle()}
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
