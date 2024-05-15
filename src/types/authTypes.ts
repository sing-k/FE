export type TextType = {
  text: string;
};

export type AuthInputType = {
  value?: string | number;
  placeholder?: string;
  onChange?: () => void;
};

export type ButtonType = {
  type?: "button" | "reset" | "submit";
  text: string;
  isActive: boolean;
  disabled?: boolean;
  onClick?: () => Promise<void> | void;
};

export type TAuthInput = {
  label?: string;
  name: string;
  registerOptions: any;
  placeholder?: string;
  type?: string;
  errors?: any;
};

export type FormType = {
  email: string;
  password: string;
  nickname: string;
  birthday: string;
  gender: string;
  name: string;
  emailcode?: number;
  passwordConfirm?: string;
};
