import styled from "styled-components";

import color from "../../../styles/color";

import { useMemberInfoQuery } from "../../../hooks/queries/user";

import LogoImage from "../../common/LogoImage";
import UserInfo from "../../common/UserInfo";

type Props = {
  headerText: string;
};

const WritePostHeader = ({ headerText }: Props) => {
  const { data } = useMemberInfoQuery();

  if (!data) return <>useMemberInfoQuery 값 없음</>;

  return (
    <Container>
      <Header>
        <Wrapper>
          <LogoImage height="4rem" />
          <VerticalLine />
          <HeaderText>{headerText}</HeaderText>
        </Wrapper>

        <UserInfo
          nickname={data.nickname}
          profileImage={data.imageUrl}
          size="M"
        />
      </Header>

      <Border />
    </Container>
  );
};

export default WritePostHeader;

const Container = styled.div`
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Header = styled.div`
  width: 90%;
  background-color: white;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const VerticalLine = styled.div`
  width: 3px;
  height: 1.3rem;
  background-color: ${color.COLOR_GRAY_BACKGROUND};
  margin-right: 1rem;
`;

const HeaderText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;

const Border = styled.div`
  width: 100%;
  height: 2.5px;
  background: linear-gradient(to right, #6d56ff, #ffa1f6);
`;
