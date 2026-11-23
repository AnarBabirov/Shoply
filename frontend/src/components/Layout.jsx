import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const Layout = () => {
    const [cart,setCart]=useState([])
  return (
    <div className="layout">
      <Navbar cart={cart} setCart={setCart} />
      <main>
        <Outlet context={{ cart, setCart }} />
      </main>
      <Footer />
    </div>
  );
};
