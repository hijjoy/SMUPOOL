const today = () => {
  const date = new Date();
  const month = date.getMonth() < 9 ? "0".concat(date.getMonth() + 1) : date.getMonth() + 1;
  const formattedDate = `${date.getFullYear()}-${month}-${date.getDate()}`;

  return formattedDate;
};

export default today;
