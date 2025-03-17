import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductsDos from "./ProductsDos";
import ProductDetail from "./ProductDetail";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";
import NotFound from "./NotFound";
import NavbarDos from "../components/NavBarDos";

function AppRouter() {
  return (
    <BrowserRouter>
      <NavbarDos />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductsDos />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;