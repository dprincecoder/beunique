const priceFormatter = (price) => {
  const number = Number(price);
  const formattedNumber = number
    ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ")
    : "0".replace(/\B(?=(\d{3})+(?!\d))/g, ", ");

  return `₦${formattedNumber}`;
};

export default priceFormatter;
