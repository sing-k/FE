import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { useMemberInfoQuery } from "../../../hooks/queries/user";

import { PostType, GeneralPostType } from "../../../types/postType";
import { PreviewPostType } from "../../../types/writePostType";

import Modal from "../../common/Modal";
import PostContents from "./PostContents";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: PostType;
  previewPost: PreviewPostType;
};

const PreviewPostModal = ({ isOpen, setIsOpen, type, previewPost }: Props) => {
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
    if (previewPost) {
      const now = String(new Date());
      const { title, content, genre, recommend, link } = previewPost;

      setPost({
        ...post,
        title: title ? title : "",
        content: content ? content : "",
        genre,
        recommend,
        link,
        createdAt: now,
        modifiedAt: now,
      });
    }
  }, [previewPost]);

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
