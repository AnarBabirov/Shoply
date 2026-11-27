import { useState, useEffect } from "react";
import { getAllProducts } from "../api/api";
import { ProductCard } from "../components/ProductCard";
export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const products = await getAllProducts();

        setProducts(products);
      }
      catch (error) {
        setError(error.message);
      }
      finally {
        setLoading(false)

      }

    }



    fetchProducts()

  }, [])
  return (
    <>
      {loading && (<h2 style={{ color: "red" }}>Loading ...</h2>)}
      {error && (<h2>{error}</h2>)}
      <div className="featured-products-list">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />

        ))}
      </div>

    </>
  )
};
