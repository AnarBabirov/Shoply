import { useOutletContext } from "react-router-dom";
export const ProductCard = ({ product }) => {
  const { cart, setCart } = useOutletContext();
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="product-rating">⭐{product.rating}</p>
      <p className="product-price">{product.price}</p>
      <button onClick={() => setCart([...cart, product])}>Add to Cart</button>
    </div>
  );
};
