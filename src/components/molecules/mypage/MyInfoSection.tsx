import styled from "styled-components";
import { UserDataType } from "../../../types/authTypes";
import color from "../../../styles/color";
import GenreTag from "../../atoms/navbar/NavbarTag";
import { MyInfoButton } from "../../atoms";

const MyInfoSection = ({ data }: { data: UserDataType }) => {
  return (
    <Container>
      <div>
        <NickName>{data?.nickname}</NickName>
        <MyInfoButton />
      </div>
      <div>
        <SmallText>{data?.name}</SmallText>
        <SmallText>{data?.email}</SmallText>
      </div>
      <div>
        <GenreTag />
      </div>
    </Container>
  );
};

export default MyInfoSection;

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  > div {
    display: flex;
    gap: 0.7rem;
    align-items: center;
  }
`;
const NickName = styled.span`
  font-size: 1.2rem;
  color: black;
  font-weight: 700;
  white-space: nowrap;
`;
const SmallText = styled.span`
  font-size: 0.7rem;
  color: ${color.COLOR_DARKGRAY_TEXT};
  white-space: nowrap;
`;
