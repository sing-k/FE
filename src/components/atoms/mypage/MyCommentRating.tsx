import MyIconRating from "./MyIconRating";
import color from "../../../styles/color";
import { FaCommentDots } from "react-icons/fa";
const MyCommentRating = () => {
  return (
    <MyIconRating
      icon={<FaCommentDots size={"1rem"} color={color.COLOR_GRAY_ICON} />}
      count={10}
    />
  );
};

export default MyCommentRating;
