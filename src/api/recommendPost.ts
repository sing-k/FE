import client from "../config/axios";

import { QueryFunctionContext } from "@tanstack/react-query";
import {
  RecommendPostType,
  RECOMMEND_POST_LIMIT,
  RecommendPostPageParam,
  RecommendPostRequestType,
} from "../types/recommendPostType";
import { checkAPIResponseValidation } from ".";

export const getRecommendPostList = async ({
  pageParam,
}: QueryFunctionContext): Promise<RecommendPostType[]> => {
  try {
    let url = `/api/posts/recommend?limit=${RECOMMEND_POST_LIMIT}`;

    if (pageParam) {
      const { offset, sort, filter, keyword } =
        pageParam as RecommendPostPageParam;

      url += `&offset=${offset}&sort=${sort ? sort : "LATEST"}`;

      if (filter && keyword) {
        url += `&filter=${filter}&keyword=${keyword}`;
      }
    }

    const res = await client.get(url);

    if (!String(res.data.statusCode).startsWith("2")) {
      throw new Error(res.data.message || "Recommend Post List Error");
    }

    return res.data.data.items as RecommendPostType[];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getRecommendPost = async ({
  queryKey,
}: QueryFunctionContext): Promise<RecommendPostType | undefined> => {
  try {
    const id = queryKey[1];

    const res = await client.get(`/api/posts/recommend/${id}`);

    if (!String(res.data.statusCode).startsWith("2")) {
      throw new Error(res.data.message || "Recommend Post Error");
    }

    return res.data.data as RecommendPostType;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const postRecommendPost = async ({
  title,
  content,
  type,
  genre,
  link,
  file,
}: RecommendPostRequestType): Promise<boolean> => {
  try {
    if (type === "ALBUM" && !link) {
      alert("앨범 링크 주소를 확인해주세요!");
      return false;
    } else if (type === "YOUTUBE" && !link) {
      alert("유튜브 링크 주소를 확인해주세요!");
      return false;
    } else if (type === "IMAGE" && !file) {
      alert("이미지를 선택해주세요!");
      return false;
    }

    const formData = new FormData();

    const body: RecommendPostRequestType = {
      title,
      content,
      type,
      genre,
    };

    if (type === "IMAGE" && file) {
      formData.append("image", file);
    } else {
      body.link = link;
    }

    formData.append(
      "post",
      new Blob([JSON.stringify(body)], {
        type: "application/json",
      })
    );

    const res = await client.post("/api/posts/recommend", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

type UpdateRecommendContext = {
  postId: string;
  title: string;
  content: string;
};

export const updateRecommendPost = async ({
  postId,
  title,
  content,
}: UpdateRecommendContext): Promise<boolean> => {
  try {
    const res = await client.put(`/api/posts/recommend/${postId}`, {
      title,
      content,
    });

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
