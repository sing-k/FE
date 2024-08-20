export const saveLoginState = () => {
  localStorage.setItem("loginState", "true");
};

export const clearTokens = () => {
  localStorage.removeItem("loginState");
};

export const getLoginState = () => {
  return localStorage.getItem("loginState");
};
