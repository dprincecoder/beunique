const getTotal = (bag) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  bag.forEach((item) => {
    totalQuantity += item.qty;
    totalPrice += item.price * item.qty;
  });
  return { totalPrice, totalQuantity };
};

export default getTotal;

export const getSubTotal = (item) => {
  let totalPrice = 0;
  totalPrice += item.price * item.qty;

  return totalPrice;
};
