export const validationRules = {
  name: {
    required: "이름은 필수 입력입니다.",
  },
  email: {
    required: "이메일은 필수 입력입니다.",
    pattern: {
      value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
      message: "이메일이 형식이 올바르지 않습니다",
    },
  },
  emailcode: {
    required: "인증번호 확인은 필수입니다",
    pattern: {
      value: /^\d{6}$/,
      message: "인증번호가 일치하지 않습니다",
    },
  },
  password: {
    required: "비밀번호는 필수 입력입니다.",
    minLength: {
      value: 8,
      message: "비밀번호는 최소 8자 이상이어야 합니다.",
    },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message: "비밀번호는 대소문자, 숫자, 특수문자를 포함하여야 합니다.",
    },
  },
  //   passwordconfirm: {  watch 는 form안에서 선언해서 사용해야하므로 따로 제외
  //     required: true,
  //     validate: value =>
  //       watch().password !== value ? "비밀번호가 일치하지 않습니다" : true,
  //   },
  nickname: {
    required: "닉네임은 필수 입력입니다",
    pattern: {
      value: /^[가-힣a-zA-Z0-9]{1,12}$/,
      message: "닉네임은 1자 이상 12자 이하여야 합니다",
    },
  },
};
