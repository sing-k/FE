import styled from "styled-components";

import color from "../../../styles/color";
import { glassEffectStyle } from "../../../styles/style";

import { DataType } from "../../molecules/comment/PostComment";

import Input from "../../common/Input";
import PostComment from "../../molecules/comment/PostComment";
import { useState } from "react";

const dummy: DataType[] = [
  {
    id: "commentId1",
    writer: {
      id: "writer1",
      profileImg: undefined,
      nickname: "영벨롭",
    },
    createdAt: "2024-06-01 13:00",
    likes: 10,
    content: "댓글 내용 댓글 내용 댓글 내용",
    recomment: [],
  },
  {
    id: "commentId2",
    writer: {
      id: "writer2",
      profileImg: undefined,
      nickname: "배만춘",
    },
    createdAt: "2024-06-01 13:30",
    likes: 20,
    content: "댓글 내용 댓글 내용 댓글 내용",
    recomment: [
      {
        id: "recommentId1",
        writer: {
          id: "writer1",
          profileImg: undefined,
          nickname: "영벨롭",
        },
        createdAt: "2024-06-01 13:50",
        likes: 10,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
];

const PostComments = () => {
  const [input, setInput] = useState<string>("");

  return (
    <Container>
      <Text>
        댓글
        <Num>12</Num>
      </Text>

      <CommentWrapper>
        {dummy.map((data) => (
          <PostComment key={data.id} data={data} />
        ))}
      </CommentWrapper>

      <Input
        input={input}
        setInput={setInput}
        placeholder="댓글을 입력해주세요"
        width="100%"
        button={{ text: "등록" }}
        textarea={true}
      />
    </Container>
  );
};

export default PostComments;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Num = styled.span`
  font-size: 1rem;
  color: ${color.COLOR_GRAY_TEXT};
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;
