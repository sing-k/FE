import styled from "styled-components";
import { UserDataType } from "../../../types/authTypes";
import color from "../../../styles/color";
import { MyInfoButton } from "../../atoms";
import { useMediaQueries } from "../../../hooks";
interface MyInfoProps {
  data: UserDataType;
  openModal: () => void;
}
const MyInfoSection = ({ data, openModal }: MyInfoProps) => {
  const { isMobile } = useMediaQueries();
  return (
    <Container $isMobile={isMobile}>
      <div>
        <NickName>{data?.nickname}</NickName>
        <MyInfoButton openModal={openModal} />
      </div>
      <div>
        <SmallText>{data?.name}</SmallText>
        <SmallText>{data?.email}</SmallText>
      </div>
      <div>{/* <GenreTag /> */}</div>
    </Container>
  );
};

export default MyInfoSection;

const Container = styled.div<{ $isMobile: boolean }>`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  justify-content: ${({ $isMobile }) =>
    $isMobile ? "center" : "space-evenly"};
  align-items: ${({ $isMobile }) => ($isMobile ? "center" : "inherit")};
  > div {
    display: flex;
    gap: 0.7rem;
    align-items: center;
    flex-basis: auto;
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
