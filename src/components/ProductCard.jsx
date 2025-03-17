import { FaShoppingCart } from "react-icons/fa"; // Importar icono del carrito
import { Link } from "react-router-dom";


const ProductCard = ({ producto, addToCart }) => {
  return (
    <div className='bg-blue-100 p-4 m-4 rounded-lg shadow-lg hover:shadow-xl w-full max-w-[350px] min-w-[25%] min-h-[45vh] transition duration-300 transform hover:-translate-y-2'>
      <img
        src={producto.imagen} alt={producto.nombre}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className='m-2 text-lg font-semibold'>{producto.descripcion}</h3>
      <p className="text-sm text-gray-500"> {producto.precio}</p>
              
      <button
        onClick={() => addToCart(producto)}
        className="mt-3 bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center w-full hover:bg-blue-600 transition duration-300"
      >
        <FaShoppingCart className="mr-2" />
        Agregar al Carrito
      </button>
      <br/>
      <Link to={`/producto/${producto.id}` }> <i className="text-blue-500 hover:underline m-2 block">Ver Detalles</i></Link>
    </div>
  );
};

export default ProductCard;
