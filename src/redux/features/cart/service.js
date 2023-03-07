const existingItem = (prevCart, newCart) =>
  prevCart.find((c) => c.id === newCart.id);

const updateCart = (cart, item, action) => {
  switch (action) {
    case "add":
      const itemExits = existingItem(cart, item);
      if (itemExits) {
        // If the item is already in the cart, increment the quantity
        itemExits.qty++;
      } else {
        // Otherwise, add a new item to the cart with a random ID
        const newItem = {
          // id: nanoid(),
          ...item,
        };
        cart.push(newItem);
      }
      break;
    case "remove":
      if (itemExits) {
        cart.filter((c) => c.id !== item.id);
      }
      break;
    case "clear":
      cart = [];
      break;
    case "increment":
      if (itemExits) {
        itemExits.qty++;
      }
      break;
    case "decrement":
      if (itemExits) {
        itemExits.qty--;
      }
      break;
    default:
      break;
  }
  return cart;
};

export default updateCart;
