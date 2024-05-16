import { useState } from "react";

import styled from "styled-components";

import { AuthGenderButton } from "../../atoms";

type GenderFormProps = {
  onGenderChange: (gender: string) => void;
};

const GenderForm = ({ onGenderChange }: GenderFormProps) => {
  const [selectedGender, setSelectedGender] = useState("NONE");

  const handleGenderClick = (gender: string) => {
    if (selectedGender !== gender) {
      setSelectedGender(gender);
      onGenderChange(gender);
    }
  };
  return (
    <Container>
      <AuthGenderButton
        type="button"
        text="남자"
        isActive={selectedGender === "MALE"}
        onClick={() => handleGenderClick("MALE")}
      />

      <AuthGenderButton
        type="button"
        text="여자"
        isActive={selectedGender === "FEMALE"}
        onClick={() => handleGenderClick("FEMALE")}
      />
    </Container>
  );
};

export default GenderForm;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  margin: 2% 0 2% 0;
`;
