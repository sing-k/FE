import MyIconRating from "./MyIconRating";
import color from "../../../styles/color";
import { AiFillDislike } from "react-icons/ai";
const MyUnlikeRating = () => {
  return (
    <MyIconRating
      icon={<AiFillDislike size={"1rem"} color={color.COLOR_GRAY_ICON} />}
      count={10}
    />
  );
};

export default MyUnlikeRating;
