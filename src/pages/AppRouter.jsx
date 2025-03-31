import { BrowserRouter, Routes, Route } from "react-router-dom";
import  NavBarApp  from "../components/NavBarApp";
import Home from "./Home";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";
import NotFound from "./NotFound";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <NavBarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
