import styled from "styled-components";

interface IconProps {
  icon: React.ReactNode;
  count: number;
}

const MyIconRating = ({ icon, count }: IconProps) => {
  return (
    <Container>
      {icon}
      <Count>{count}</Count>
    </Container>
  );
};

export default MyIconRating;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
const Count = styled.span`
  font-size: 0.8rem;
  color: #8d8d8d;
`;
