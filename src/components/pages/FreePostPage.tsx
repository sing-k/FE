import { useParams } from "react-router-dom";

import { useFreePostQuery } from "../../hooks/queries/freePost";

import PostTemplate from "../templates/board/PostTemplate";
import Loading from "../common/Loading";
import ErrorMessage from "../common/ErrorMessage";

const FreePostPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useFreePostQuery(id as string);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;
  if (!data) return <></>;

  return <PostTemplate type={"free"} post={data}></PostTemplate>;
};

export default FreePostPage;
