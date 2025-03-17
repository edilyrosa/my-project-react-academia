import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [productos, setProductos] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProductos(data);
      } catch (error) {
        console.error('HA FALLADO EL FETCH DE PRODUCTOS DESDE Products.js', error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Nuestros Productos</h1>
      <div id="pro-contenedor" 
            className='p-4 flex flex-col lg:flex-row gap-[2%] justify-center items-center flex-wrap
            '>
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
