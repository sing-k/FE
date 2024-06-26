import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Modal, { ModalProps } from "../../common/Modal";
import { FaUser } from "react-icons/fa";
import { RiImageEditFill } from "react-icons/ri";
import color from "../../../styles/color";
import {
  useUploadProfileImageMutation,
  useDeleteProfileImageMutation,
  useUpdateNicknameMutation,
} from "../../../hooks/queries/user";
type ProfileEditModalProps = ModalProps & {
  userData?: {
    imageUrl?: string | null;
    nickname?: string;
  } | null;
};

const ProfileEditModal = ({
  isOpen,
  closeModal,
  userData,
}: ProfileEditModalProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(
    userData?.imageUrl || null,
  );
  const [nickname, setNickname] = useState<string>(userData?.nickname || "");
  const uploadProfileImageMutation = useUploadProfileImageMutation();
  const deleteProfileImageMutation = useDeleteProfileImageMutation();
  const updateNicknameMutation = useUpdateNicknameMutation();
  useEffect(() => {
    if (userData) {
      setPreviewImage(userData.imageUrl || null);
      setNickname(userData.nickname || "");
    }
  }, [userData]);
  // useEffect(() => {
  //   if (data) {
  //     setErrorMessage(data);
  //   }
  // }, [errorMessage]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleEditIconClick = () => {
    fileInputRef.current?.click();
  };
  const handleImageUpload = () => {
    if (!selectedImage) {
      alert("이미지를 먼저 선택해주세요");
      return;
    }
    const formData = new FormData();
    formData.append("image", selectedImage);

    uploadProfileImageMutation.mutate(formData);
  };

  const handleImageDelete = () => {
    deleteProfileImageMutation.mutate();
  };

  const handleNicknameChange = () => {
    updateNicknameMutation.mutate({ newNickname: nickname });
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <ModalContents>
        <Title>프로필 수정</Title>
        <InputContainer>
          <ImagePreview>
            {previewImage ? (
              <Image src={previewImage} alt="프로필사진" />
            ) : (
              <FaUser size="5rem" color="white" />
            )}
          </ImagePreview>
          <Input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <EditIcon size="1.5rem" onClick={handleEditIconClick} />
        </InputContainer>
        <Explain>
          사진 선택 후 <u>이미지 등록 </u>버튼을 눌러주세요!
        </Explain>
        <ButtonContainer>
          {selectedImage !== null ? (
            <BlueButton onClick={handleImageUpload}>이미지 등록</BlueButton>
          ) : (
            <Button onClick={handleImageUpload} disabled={true}>
              이미지 등록
            </Button>
          )}
          {userData?.imageUrl !== null ? (
            <RedButton onClick={handleImageDelete}>이미지 삭제</RedButton>
          ) : (
            <Button onClick={handleImageDelete} disabled={true}>
              이미지 삭제
            </Button>
          )}
        </ButtonContainer>
        <InputContainer>
          <Label>닉네임 변경</Label>
          <Input
            type="text"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
          />
          {/* {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>} */}
        </InputContainer>
        <BlueButton onClick={handleNicknameChange}>수정</BlueButton>
      </ModalContents>
    </Modal>
  );
};

export default ProfileEditModal;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: black;
`;
const Explain = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${color.COLOR_DARKGRAY_TEXT};
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 700;
  color: black;
`;

const Input = styled.input`
  padding: 0.3rem;
  font-size: 0.8rem;
`;

const ImagePreview = styled.label`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 0.3rem double white;
  background-color: ${color.COLOR_LIGHTGRAY_BACKGROUND};
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const EditIcon = styled(RiImageEditFill)`
  position: absolute;
  bottom: 5px;
  right: 10px;
  cursor: pointer;
  color: black;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${color.COLOR_GRAY_INACTIVE_BUTTON};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const BlueButton = styled(Button)`
  background-color: ${color.COLOR_BLUE_AUTH_BUTTON};
`;
const RedButton = styled(Button)`
  background-color: rgb(255, 123, 123);
`;
// const ErrorMessage = styled.div`
//   font-size: 0.5rem;
//   color: ${color.COLOR_RED_INVALID};
//   text-align: end;
// `;
