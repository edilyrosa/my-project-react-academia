import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import MediaCard from '../components/MediaCard'
export default function ProductDetail () {
  const { id } = useParams(); //por la url sabe cual fue el producto clickeado
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductById(id); //Recuperar el el producto clickeado y lo devuelve en formato JSON.
        setProducto(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <>
    <h1 className="mt-[7%] text-4xl font-bold m-1 text-center text-blue-500">Detalles del Producto {producto.nombre}</h1>
    <div className="mx-[40%]">
          <MediaCard 
            key={producto.id} 
            producto={producto}
            maxWidthCard={500}
            heightImg={300}
            btnLookDatail={false}
          />
    </div>
    </>
  );
};


