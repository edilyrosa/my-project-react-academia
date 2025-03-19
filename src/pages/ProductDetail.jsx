import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProductById } from "../services/api";
import MediaCard from '../components/MediaCard'
const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductById(id);
        setProducto(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="mt-[7%] mx-[40%]">
   

          <MediaCard 
            key={producto.id} 
            producto={producto}
            addToCart={addToCart} 
            maxWidthCard={500}
            heightImg={300}
            btnLookDatail={false}
          />



    </div>
  );
};

export default ProductDetail;
