import MyIconRating from "./MyIconRating";
import color from "../../../styles/color";
import { AiFillLike } from "react-icons/ai";
interface MyLikeRatingProps {
  likeCount: number;
}
const MyLikeRating = ({ likeCount }: MyLikeRatingProps) => {
  return (
    <MyIconRating
      icon={<AiFillLike size={"1rem"} color={color.COLOR_GRAY_ICON} />}
      count={likeCount}
    />
  );
};

export default MyLikeRating;
