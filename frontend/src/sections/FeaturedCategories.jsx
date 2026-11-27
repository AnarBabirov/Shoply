import img2 from "../image/electronics.jpg";
import image2 from "../image/image2.jpg"
import image3 from "../image/image3.jpg";
import image4 from "../image/image4.jpg";
export const FeaturedCategories = () => {
  return (
    <section className="categories">
      <div className="categories-header">
        <h1>Shop by Category</h1>
        <p>Explore our wide range of products.</p>
      </div>
      <div className="categories-boxes">
        <div className="category-card">
          <img src={img2} alt="Electronics" />
          <h3>Electronics</h3>
        </div>

        <div className="category-card-featured">
          <img src={image4} alt="Fashion" />
          <h3>Fashion</h3>
        </div>

        <div className="category-card-featured">
          <img src={image3} alt="Home & Living" />
          <h3>Home & Living</h3>
        </div>

        <div className="category-card-featured">
          <img src={image2} alt="Accessories" />
          <h3>Accessories</h3>
        </div>
      </div>
    </section>
  );
};
