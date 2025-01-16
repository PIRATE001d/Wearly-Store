import { atom } from 'jotai';

//atom to store cart

export const cartItemAtom = atom([]);

export const subtotalAtom = atom((get) => {
  const cartItems = get(cartItemAtom);
  return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

export const AddTocart = (cartItems, setCartItems, product, quantity) => {
  console.log(`Adding ${product.title} to cart`);

  const existingProductIndex = cartItems.findIndex(
    (item) => item.id === product.id
  );

  if (existingProductIndex >= 0) {
    const updatedCartItems = [...cartItems];
    updatedCartItems[existingProductIndex].quantity += 1;
    setCartItems(updatedCartItems);
  } else {
    setCartItems([...cartItems, { ...product, quantity }]);
  }
};
