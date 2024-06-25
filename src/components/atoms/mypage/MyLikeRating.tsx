import MyIconRating from "./MyIconRating";
import color from "../../../styles/color";
import { AiFillLike } from "react-icons/ai";
const MyLikeRating = () => {
  return (
    <MyIconRating
      icon={<AiFillLike size={"1rem"} color={color.COLOR_GRAY_ICON} />}
      count={10}
    />
  );
};

export default MyLikeRating;
