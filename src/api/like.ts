import { checkAPIResponseValidation } from ".";
import client from "../config/axios";

export const likeFreePost = async (id: string): Promise<boolean> => {
  try {
    const res = await client.post(`/api/likes/posts/free/${id}`);

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const unlikeFreePost = async (id: string): Promise<boolean> => {
  try {
    const res = await client.delete(`/api/likes/posts/free/${id}`);

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const likeRecommendPost = async (id: string): Promise<boolean> => {
  try {
    const res = await client.post(`/api/likes/posts/recommend/${id}`);

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const unlikeRecommendPost = async (id: string): Promise<boolean> => {
  try {
    const res = await client.delete(`/api/likes/posts/recommend/${id}`);

    checkAPIResponseValidation(res);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
