import MyIconRating from "./MyIconRating";
import color from "../../../styles/color";
import { AiFillDislike } from "react-icons/ai";

interface MyUnLikeRatingProps {
  unLikeCount: number;
}

const MyUnlikeRating = ({ unLikeCount }: MyUnLikeRatingProps) => {
  return (
    <MyIconRating
      icon={<AiFillDislike size={"1rem"} color={color.COLOR_GRAY_ICON} />}
      count={unLikeCount}
    />
  );
};

export default MyUnlikeRating;
