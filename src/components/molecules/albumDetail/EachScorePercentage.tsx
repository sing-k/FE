import styled from "styled-components";

import color from "../../../styles/color";

import { FaStar } from "react-icons/fa";

type Props = {
  score: number;
  percentage: number;
};

const EachScorePercentage = ({ score, percentage }: Props) => {
  return (
    <Container>
      <Wrapper className="score">
        <FaStar color={color.COLOR_STAR} />
        {score}
      </Wrapper>

      <Wrapper className="percentage">
        <PercentageBar>
          <Percentage style={{ width: `${percentage}%` }} />
        </PercentageBar>

        <PercentageText>{percentage}%</PercentageText>
      </Wrapper>
    </Container>
  );
};

export default EachScorePercentage;

const Container = styled.div`
  width: 100%;
  font-size: 0.8rem;
  color: ${color.COLOR_GRAY_TEXT};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   gap: 0.5rem;

  &.score {
    width: 1.8rem;
  }

  &.percentage {
    flex-grow: 1;
    max-width: 200px;
  }
`;

const PercentageBar = styled.div`
  background-color: white;
  flex-grow: 1;
  height: 10px;
  border-radius: 10px;
  border: 1px solid ${color.COLOR_GRAY_BORDER};
  position: relative;
  overflow: hidden;
`;

const Percentage = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${color.COLOR_STAR};
  border-radius: inherit;
`;

const PercentageText = styled.p`
  //   background-color: orange;
  width: 2.2rem;
  text-align: end;
`;
