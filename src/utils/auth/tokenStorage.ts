export const saveTokensToLocalStorage = (
  accessToken: string,
  refreshToken: string,
) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};
export const saveLoginState = () => {
  localStorage.setItem("loginState", "true");
};

export const getToken = (tokenName: string): string | null => {
  return localStorage.getItem(tokenName);
};

// export const getRefreshToken = (): string | null => {
//   return localStorage.getItem("refreshToken");
// };

export const clearTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("loginState");
};
