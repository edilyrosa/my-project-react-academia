// import { useCart } from "../context/CartContext";
// import { Link } from "react-router-dom";

// const ShoppingCart = () => {
//   const { cart, removeFromCart } = useCart();

//   return (
//     <div>
//       <h1>Carrito de Compras</h1>
//       {cart.length === 0 ? (
//         <p>Tu carrito está vacío. <Link to="/productos">Ir a productos</Link></p>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div key={item.id}>
//               <h2>{item.nombre}</h2>
//               <p>Precio: ${item.precio}</p>
//               <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
//             </div>
//           ))}
//           <Link to="/checkout">
//             <button>Ir a Pagar</button>
//           </Link>
//         </>
//       )}
//     </div>
//   );
// };

// export default ShoppingCart;


// import { useCart } from "../context/CartContext";
// import { Link } from "react-router-dom";
// import { FaTrash } from "react-icons/fa";

// const ShoppingCart = () => {
//   const { cart, removeFromCart } = useCart();

//   const total = cart.reduce((sum, item) => sum + item.precio, 0);

//   return (
//     <div className="container mx-auto px-4 pt-40">
//       <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">Tu Carrito de Compras</h1>
//       {cart.length === 0 ? (
//         <div className="bg-white rounded-lg shadow-md p-6 text-center">
//           <p className="text-xl mb-4">Tu carrito está vacío.</p>
//           <Link to="/productos" className="text-blue-500 hover:underline">Ir a productos</Link>
//         </div>
//       ) : (
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <ul className="divide-y divide-gray-200">
//             {cart.map((item) => (
//               <li key={item.id} className="flex items-center py-4 px-6">
//                 <img src={item.imagen} alt={item.nombre} className="w-20 h-20 object-cover rounded mr-4"/>
//                 <div className="flex-grow">
//                   <h2 className="text-lg font-semibold">{item.nombre}</h2>
//                   <p className="text-gray-600">${item.precio.toFixed(2)}</p>
//                 </div>
//                 <button 
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <FaTrash />
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="bg-gray-50 px-6 py-4">
//             <div className="flex justify-between items-center mb-4">
//               <span className="text-lg font-semibold">Total:</span>
//               <span className="text-xl font-bold">${total.toFixed(2)}</span>
//             </div>
//             <Link to="/checkout" className="block w-full">
//               <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
//                 Ir a Pagar
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShoppingCart;







import React from 'react';
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  return (
    <div className="container mx-auto px-4 pt-40">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">Tu Carrito de Compras</h1>
      {cart.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-xl mb-4">Tu carrito está vacío.</p>
          <Link to="/productos" className="text-blue-500 hover:underline">Ir a productos</Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center py-4 px-6">
                <img src={item.imagen} alt={item.nombre} className="w-20 h-20 object-cover rounded mr-4"/>
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.nombre}</h2>
                  <p className="text-gray-600">${item.precio.toFixed(2)} c/u</p>
                  <div className="flex items-center mt-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                    >
                      <FaMinus />
                    </button>
                    <span className="mx-3">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${(item.precio * item.quantity).toFixed(2)}</p>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 mt-2"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="bg-gray-50 px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold">${getCartTotal().toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="block w-full">
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                Ir a Pagar
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
