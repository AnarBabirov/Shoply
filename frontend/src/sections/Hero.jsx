import img1 from "/public/image/img1.jpg"


export const Hero = () => {
  return (
   <main className="home">

  <div className="hero-content">
    <h1>Discover Your Next Favorite Thing.</h1>
    <p>Explore our latest collection of products. Find everything you love in one place.</p>
    <button>Shop Now</button>
  </div>
  <div className="hero-image">
    <img src={img1} alt="product"/>
  </div>

    </main>
  )
}
