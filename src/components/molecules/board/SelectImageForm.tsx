import React, { useRef, useState, useEffect } from "react";
import { FieldValues, Controller, Control } from "react-hook-form";

import styled from "styled-components";

import color from "../../../styles/color";

import { FaPlus } from "react-icons/fa";

type Props = {
  selectedFile: File | null;
  control: Control<FieldValues>;
};

const SelectImageForm = ({ selectedFile, control }: Props) => {
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedFile) {
      const src = URL.createObjectURL(selectedFile);
      setImageSrc(src);
    }
  }, [selectedFile]);

  return (
    <>
      <Controller
        name="selectedFile"
        control={control}
        render={({ field }) => {
          const { onChange } = field;

          const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files[0]) {
              const file = e.target.files[0];
              onChange(file);
            }
          };

          return (
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          );
        }}
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
