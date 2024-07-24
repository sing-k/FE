import dayjs from "dayjs";

export const dateFormat = (date: string) => {
  return dayjs(date).format("YYYY-MM-DD");
};

export const dateTimeFormat = (date: string) => {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};

export const getDefaultDates = () => {
  const endDate = dayjs();
  const startDate = endDate.subtract(7, "day");
  return {
    startDate: dateFormat(startDate.toISOString()),
    endDate: dateFormat(endDate.toISOString()),
  };
};
