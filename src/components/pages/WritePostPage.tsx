import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import styled from "styled-components";

import WritePostHeader from "../molecules/board/WritePostHeader";
import WritePostFooter from "../molecules/board/WritePostFooter";
import PostForm from "../organisms/board/PostForm";

const WritePostPage = () => {
  const [type, setType] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    const type = new URLSearchParams(location.search).get("type");
    setType(type);
  }, [location]);

  return (
    <Layout>
      <WritePostHeader
        headerText={type ? "음악 추천 게시글 작성" : "자유 게시글 작성"}
      />

      <Contents>
        <PostForm type={type} />
      </Contents>

      <WritePostFooter />
    </Layout>
  );
};

export default WritePostPage;

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  position: relative;
  padding: 6rem 1rem 10rem;
`;

const Contents = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;
