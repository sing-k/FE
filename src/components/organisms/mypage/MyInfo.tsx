import styled from "styled-components";
import { glassEffectStyle } from "../../../styles/style";
import NavbarProfileImg from "../../atoms/navbar/NavbarProfileImg";
import { UserDataType } from "../../../types/authTypes";
import { MyInfoSection, MyAverageRating } from "../../molecules";
import { useMediaQueries } from "../../../hooks";

interface MyInfoProps {
  data: UserDataType;
  openModal: () => void;
}

const MyInfo = ({ data, openModal }: MyInfoProps) => {
  const { isMobile } = useMediaQueries();
  return (
    <Container $isMobile={isMobile}>
      <NavbarProfileImg data={data} width={"100px"} />
      <MyInfoSection data={data} openModal={openModal} />
      <MyAverageRating />
    </Container>
  );
};

export default MyInfo;

const Container = styled.div<{ $isMobile: boolean }>`
  ${glassEffectStyle()}
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  gap: 1rem;
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
  ${({ $isMobile }) =>
    $isMobile &&
    `
    justify-content : center;
    align-items: center;

  `}
`;
