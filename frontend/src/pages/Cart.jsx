import { useState, useEffect } from "react";
import { getMyCart, updateCartProduct, deleteCartProduct, getSumPrice } from "../api/api";

export const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sum, setSum] = useState(0);
  const handleSum = async () => {
    const sumPrice = await getSumPrice();
    setSum(sumPrice)

  }
  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        setError("");
        const carts = await getMyCart();
        await handleSum()
        setCart(carts);





      }
      catch (error) {
        setError(error.message)
      }
      finally {
        setLoading(false);
      }
    }


    fetchCart();

  }, []);
  const handleQuantityChange = async (productid, quantity) => {
    try {
      setError("");
      const cartNum = await updateCartProduct(productid, quantity);
      setCart(cartNum.update);
      await handleSum()


    }
    catch (error) {
      setError(error.message)
    }





  }
  const handleRemoveProduct = async (productid) => {
    try {
      setError("");
      await deleteCartProduct(productid);
      const deleteProductFromCart = cart.products.filter((item) => (item.product._id !== productid));
      setCart({
        ...cart,
        products: deleteProductFromCart
      });
      await handleSum()
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div>
      {loading && (<h2>Loading...</h2>)}
      {error && (<h2>{error}</h2>)}
      {cart && cart.products.length === 0 && (
        <h2>Your cart is empty!</h2>
      )}

      {cart && cart.products.map((item) => (
        <div key={item.product._id}>

          <h2>{item.product.name}</h2>
          <p>{item.product.description}</p>
          <img src={item.product.img} alt={item.product.name} />
          <p>{item.product.price}</p>
          <p>{item.product.category}</p>
          <p>{item.product.rating}</p>
          <p>{item.quantity}</p>
          <button onClick={() => handleQuantityChange(
            item.product._id,
            item.quantity + 1
          )}>
            +
          </button>
          <button
            disabled={item.quantity === 1}
            onClick={() => handleQuantityChange(
              item.product._id,
              item.quantity - 1
            )}
          >
            -
          </button>
          <button onClick={() => handleRemoveProduct(item.product._id)}>
            Remove

          </button>



        </div>



      ))}

      <p>${sum}</p>
    </div>

  );
};
