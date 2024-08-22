import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { useMemberInfoQuery } from "../../../hooks/queries/user";

import { PostType, GeneralPostType } from "../../../types/postType";
import {
  WritePostValues,
  WriteRecommendValues,
} from "../../../types/writePostType";

import Modal from "../../common/Modal";
import PostContents from "./PostContents";
import { getLinkFromRecommendValues } from "../../../utils/writePost";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: PostType;
  values: WritePostValues | WriteRecommendValues;
};

const PreviewPostModal = ({ isOpen, setIsOpen, type, values }: Props) => {
  const { data } = useMemberInfoQuery();

  if (!data) {
    window.location.replace("/");
    return;
  }

  const [post, setPost] = useState<GeneralPostType>({
    id: "",
    like: { count: 0, like: false },
    comments: 0,
    writer: {
      id: data.id,
      nickname: data.nickname,
      imageUrl: data.imageUrl,
    },
    createdAt: "",
    modifiedAt: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    if (values) {
      const now = String(new Date());
      let {
        title,
        content,
        type: recommend,
        genre,
        link,
      } = values as WriteRecommendValues;

      if (!title) title = "";
      if (!content) content = "";

      if (type === "recommend") {
        link = link
          ? link
          : getLinkFromRecommendValues(values as WriteRecommendValues);
      }

      setPost({
        ...post,
        title,
        content,
        recommend,
        genre,
        link,
        createdAt: now,
        modifiedAt: now,
      });
    }
  }, [values]);

  return (
    <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} width="90%">
      <Container>
        <DisableClickDiv onClick={(e) => e.stopPropagation()} />

        <PostContents type={type} post={post} />
      </Container>
    </Modal>
  );
};

export default PreviewPostModal;

const Container = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
`;

const DisableClickDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
`;
