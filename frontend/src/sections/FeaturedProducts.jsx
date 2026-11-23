import { ProductCard } from "../components/ProductCard";
export const FeaturedProducts = () => {
  const products = [
    {
      name: "iPhone 16",
      price: 999,
      rating: 4.8,
      image: "/image/image2.jpg",
    },
    {
      name: "Samsung S25",
      price: 899,
      rating: 4.7,
      image: "/image/image2.jpg",
    },
    {
      name: "Galaxy",
      price: 899,
      rating: 4.7,
      image: "/image/image2.jpg",
    },
    {
      name: "Verto",
      price: 899,
      rating: 4.7,
      image: "/image/image2.jpg",
    },
  ];
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>

      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};
