import { useParams } from "react-router-dom";

import { useRecommendPostQuery } from "../../hooks/queries/recommendPost";

import PostTemplate from "../templates/board/PostTemplate";
import Loading from "../common/Loading";
import ErrorMessage from "../common/ErrorMessage";

const MusicRMPostPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useRecommendPostQuery(
    id as string
  );

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;
  if (!data) return <></>;

  return <PostTemplate type="recommend" post={data}></PostTemplate>;
};

export default MusicRMPostPage;
