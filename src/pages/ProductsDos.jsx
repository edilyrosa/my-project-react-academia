import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { useCart } from "../context/CartContext";
import MediaCard from "../components/MediaCard";

const ProductsDos = () => {
  const [productos, setProductos] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProductos(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 pt-40">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-500">Nuestros Productos</h1>
      <div id="pro-contenedor" 
            className='p-4 flex flex-col lg:flex-row gap-[2%] justify-center items-center flex-wrap
            '>
        {productos.map((producto) => (
          <MediaCard 
            key={producto.id} 
            producto={producto}
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsDos;
