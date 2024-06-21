import styled from "styled-components";
import { glassEffectStyle } from "../../../styles/style";
import NavbarProfileImg from "../../atoms/navbar/NavbarProfileImg";
import { UserDataType } from "../../../types/authTypes";
import { MyInfoSection, MyAverageRating } from "../../molecules";

const MyInfo = ({ data }: { data: UserDataType }) => {
  return (
    <Container>
      <NavbarProfileImg data={data} width={"100px"} />
      <MyInfoSection data={data} />
      <MyAverageRating data={data} />
    </Container>
  );
};

export default MyInfo;

const Container = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  gap: 1rem;
`;
