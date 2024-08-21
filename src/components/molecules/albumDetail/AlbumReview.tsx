import React from "react";

import styled from "styled-components";

import { glassEffectStyle } from "../../../styles/style";
import color from "../../../styles/color";

import { FaUser, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

import { AlbumReviewType } from "../../../types/albumReviewType";

import { dateTimeFormat } from "../../../utils/date";

import StarRating from "../../atoms/albumDetail/StarRating";
import OptionsMenu from "../../common/OptionsMenu";
import { useDeleteAlbumReviewMutation } from "../../../hooks/queries/albumDetail";

type Props = {
  data: AlbumReviewType;
  albumId: string;
};

const AlbumReview = ({ data, albumId }: Props) => {
  const deleteAlbumReviewMutation = useDeleteAlbumReviewMutation(albumId);

  const handleDelete = async () => {
    if (!window.confirm("앨범 감상평을 삭제하시겠습니까?")) return;

    await deleteAlbumReviewMutation.mutateAsync({
      reviewId: data.id,
      albumId,
    });
  };

  return (
    <Container>
      <Wrapper>
        <SmallWrapper>
          <StarRating rating={data.score} />
          {data.score}
        </SmallWrapper>

        <SmallWrapper>
          {dateTimeFormat(data.createdAt)}

          <OptionsMenu
            writerId={data.reviewer.id as string}
            handleDelete={handleDelete}
          />
        </SmallWrapper>
      </Wrapper>

      <ReviewText>{data.content}</ReviewText>

      <Wrapper>
        <WriterDiv>
          <WriterImgDiv>
            <FaUser color={"white"} />
          </WriterImgDiv>
          {data.reviewer.nickname ? data.reviewer.nickname : "닉네임없음"}
        </WriterDiv>

        <SmallWrapper>
          <Btn>
            <FaRegThumbsUp />
            {data.pros}
          </Btn>
          <Btn>
            <FaRegThumbsDown />
            {data.cons}
          </Btn>
        </SmallWrapper>
      </Wrapper>
    </Container>
  );
};

export default React.memo(AlbumReview);

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  padding: 1rem;
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

const SmallWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.8rem;
`;

const ReviewText = styled.p`
  line-height: 1.5rem;
  font-size: 1rem;
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
