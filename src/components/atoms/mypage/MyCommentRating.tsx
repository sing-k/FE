import MyIconRating from "./MyIconRating";
import color from "../../../styles/color";
import { FaCommentDots } from "react-icons/fa";
interface MyCommentCountProps {
  commentCount: number;
}
const MyCommentRating = ({ commentCount }: MyCommentCountProps) => {
  return (
    <MyIconRating
      icon={<FaCommentDots size={"1rem"} color={color.COLOR_GRAY_ICON} />}
      count={commentCount}
    />
  );
};

export default MyCommentRating;
