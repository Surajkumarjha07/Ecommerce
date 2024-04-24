export default addToCart = (product) => {
    const storedCart = localStorage.getItem('cart');
    let updatedCart = [];
  
    if (storedCart) {
      updatedCart = JSON.parse(storedCart);
    }
  
    updatedCart.push(product);
  
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };