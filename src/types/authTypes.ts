// 텍스트 타입 정의
export interface TextType {
  text: string;
}

// 인증 입력 필드 타입 정의
export interface AuthInputType {
  value?: string | number;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// 버튼 타입 정의
export interface ButtonType {
  type?: "button" | "reset" | "submit";
  text: string;
  isActive: boolean;
  disabled?: boolean;
  onClick?: () => Promise<void> | void;
}

// 폼 데이터 타입 정의
export interface FormType {
  email: string;
  password: string;
  nickname: string;
  birthday: string;
  gender: string;
  name: string;
  emailcode?: string;
  passwordConfirm?: string;
}

// 로그인 데이터 타입 정의
export interface LoginType {
  email: string;
  password: string;
}

// 사용자 데이터 타입 정의
export interface UserDataType {
  birthday: string;
  createdAt: string;
  email: string;
  gender: string;
  id: number;
  imageUrl: string;
  modifiedAt: string;
  name: string;
  nickname: string;
  statistics: UserDataStatistics;
}

export interface UserDataStatistics {
  averageReviewScore: number;
  totalActivityScore: number;
  totalReview: number;
  totalReviewScore: number;
}
