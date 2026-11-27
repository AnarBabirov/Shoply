import { Link } from "react-router-dom";
import { createCartProduct } from "../api/api";
import { useState } from "react";
export const ProductCard = ({ product }) => {
  const [add, setadd] = useState(null);
  const handleAddToCart = async () => {
    const addCart = await createCartProduct(product._id, 1);

    setadd(addCart)
  };
  return (


    <div className="product-card">
      < Link to={`/products/${product._id}`}>

        <div className="product-card-link">
          <img src={product.img} alt={product.name} />

          <h3>{product.name}</h3>

          <p>{product.description}</p>

          <p className="product-price">💰 ${product.price}</p>

          <p>🏷️ {product.category}</p>

          <p>📦 In stock: {product.stock}</p>

          <p className="product-rating">⭐ {product.rating} / 5</p>


        </div>




      </Link>
      <button onClick={handleAddToCart}>
        {add ? "✓ Added to Cart" : "🛒 Add to Cart"}
      </button>
    </div>
  )
};