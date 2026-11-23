import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
