import dayjs from "dayjs";
import "dayjs/locale/ko";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.locale("ko");
dayjs.extend(utc);
dayjs.extend(timezone);

export const dateFormat = (date: string) => {
  return dayjs.utc(date).tz("Asia/Seoul").format("YYYY.MM.DD");
};

export const dateTimeFormat = (date: string) => {
  return dayjs.utc(date).tz("Asia/Seoul").format("YYYY.MM.DD HH:mm");
};

export const getDefaultDates = () => {
  const endDate = dayjs();
  const startDate = endDate.subtract(7, "day");

  return {
    startDate: startDate.format("YYYY-MM-DD"),
    endDate: endDate.format("YYYY-MM-DD"),
  };
};
