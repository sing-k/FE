// duration 단위: ms
export const timeFormat = (duration: number) => {
  const totalSeconds = Math.floor(duration / 1000);

  const hour = Math.floor(totalSeconds / 3600);
  const min = Math.floor((totalSeconds % 3600) / 60);
  const sec = totalSeconds % 60;

  let ret = "";

  if (hour > 0) ret += `${hour}시간 `;
  if (min > 0) ret += `${min}분 `;
  ret += `${sec}초`;

  return ret;
};
