export const getDateStringFrom = (datetime: Date = new Date()): string => {
  const year = datetime.getFullYear();
  const month = datetime.getMonth() + 1;
  const day = datetime.getDate();

  const validMonth = month < 10 ? `0${month}` : String(month);
  const validDay = day < 10 ? `0${day}` : String(day);

  return `${year}-${validMonth}-${validDay}`;
};
