import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ProductDetails } from "./pages/ProductDetails";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetails/>}/>
      </Route>
    </Routes>
  );
}

export default App;





