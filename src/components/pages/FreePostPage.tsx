import { useEffect } from "react";
import PostTemplate from "../templates/board/PostTemplate";
import client from "../../config/axios";
import { useParams } from "react-router-dom";

const FreePostPage = () => {
  const { id } = useParams();

  const temp = async () => {
    const res = await client.get(`/api/posts/free/${id}`);

    console.log(res);
  };

  useEffect(() => {
    temp();
  }, []);
  return <PostTemplate></PostTemplate>;
};

export default FreePostPage;
