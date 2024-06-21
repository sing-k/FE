import React, { useRef, useState } from "react";

import styled from "styled-components";

import color from "../../../styles/color";

import { FaPlus } from "react-icons/fa";

const SelectImageForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (file) {
    // file 선언 후 사용하지 않았다는 에러 제거 위함 나중에 제거해주세요
    console.log(file);
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <ImageDiv onClick={() => fileInputRef?.current?.click()}>
        <FaPlus size={"20px"} />
        썸네일 이미지
        {imageSrc && <Image src={imageSrc as string} />}
      </ImageDiv>
    </>
  );
};

export default SelectImageForm;

const ImageDiv = styled.div`
  width: 150px;
  border-radius: 5px;
  aspect-ratio: 1 / 1;
  background-color: ${color.COLOR_LIGHTGRAY_BACKGROUND};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid ${color.COLOR_LIGHTGRAY_BORDER};
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;
