
//!Importaciones de los componentes de librerias a usar en este archivo
import { Link } from "react-router-dom";

//!Los React Components son funciones.
const Home = () => {
  //?Aca podras declarar constantes, hacer peticiones HTTP... Necesario para el renderizado de este componente
  
  //?Los React Components retonan XJS a renderizar
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 pt-[18vh]">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Bienvenido a nuestra tienda 🛒
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Explora nuestra selección de productos de alta calidad.
      </p>

      {/* Botones de navegación */}
      <div className="flex space-x-4 mb-6">
        <Link to="/productos">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Ver Productos
          </button>
        </Link>
        <Link to="/carrito">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
            Ir al Carrito
          </button>
        </Link>
      </div>

      {/* Imagen principal */}
      <img
        src="https://madrid.place/wp-content/uploads/2024/02/Mejores-tiendas-de-tecnologia-en-Madrid.jpg"
        alt="Banner de tienda"
        className="w-full max-w-4xl rounded-lg shadow-lg h-[50vh]"
      />
    </div>
  );
};

export default Home;
