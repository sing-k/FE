import React from "react";

import {
  Controller,
  Control,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";

import SelectBtnForm from "../../molecules/board/SelectBtnForm";

type Props = {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
  value: any;
  name: string;
};

const SelectMusicInfoForm = ({ register, control, value, name }: Props) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue="이미지"
        render={({ field }) => (
          <SelectBtnForm
            name={name}
            label={"추천 정보"}
            items={["이미지", "앨범", "유튜브"]}
            field={field}
            register={register}
          />
        )}
      />

      {value === "이미지" ? (
        <>이미지</>
      ) : value === "앨범" ? (
        <>앨범</>
      ) : value === "유튜브" ? (
        <>유튜브</>
      ) : null}
    </>
  );
};

export default SelectMusicInfoForm;
