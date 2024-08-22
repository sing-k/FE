import { UseFormRegister } from "react-hook-form";

import styled from "styled-components";

import { WriteRecommendValues } from "../../../types/writePostType";

import LinkInput from "./LinkInput";
import RecommendYoutube from "../../atoms/recommendBoard/RecommendYoutube";

type Props = {
  register: UseFormRegister<WriteRecommendValues>;
  youtubeLink?: string;
};

const SelectYoutubeForm = ({ register, youtubeLink }: Props) => {
  return (
    <Container>
      <LinkInput
        register={register}
        name="youtubeLink"
        placeholder="추천할 유튜브 동영상 링크를 입력해 주세요!"
      />

      <RecommendYoutube
        youtubeLink={youtubeLink}
        style={{
          width: "50%",
          minWidth: "200px",
          marginTop: "1rem",
        }}
      />
    </Container>
  );
};

export default SelectYoutubeForm;

const Container = styled.div`
  width: 100%;
`;
