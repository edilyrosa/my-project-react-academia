// import React from 'react';
// import { useCart } from "../context/CartContext";
// import { Link } from "react-router-dom";
// import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
// import Button from '@mui/material/Button';
// import { FaCreditCard } from "react-icons/fa";

// const ShoppingCart = () => {
//   const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

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
//                   <p className="text-gray-600">${item.precio.toFixed(2)} c/u</p>
//                   <div className="flex items-center mt-2">
//                     <button 
//                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       className="bg-gray-200 p-1 rounded hover:bg-gray-300"
//                     >
//                       <FaMinus />
//                     </button>
//                     <span className="mx-3">{item.quantity}</span>
//                     <button 
//                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       className="bg-gray-200 p-1 rounded hover:bg-gray-300"
//                     >
//                       <FaPlus />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="font-semibold">${(item.precio * item.quantity).toFixed(2)}</p>
//                   <button 
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-500 hover:text-red-700 mt-2"
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="bg-gray-50 px-6 py-4">
//             <div className="flex justify-between items-center mb-4">
//               <span className="text-lg font-semibold">Total:</span>
//               <span className="text-xl font-bold">${getCartTotal().toFixed(2)}</span>
//             </div>
            
//             <Link to="/checkout" className="block w-full">
//               <Button 
//                 size="small"
//                 variant='contained'
//                 color='primary'
//                 sx={{
//                   width: '50%', // Ocupa el 50% del contenedor padre
                 
//                   marginLeft:'25%', // Centrado horizontal
//                 }}
//               >
//                 <FaCreditCard className="text-blue-100 text-2xl pr-2" />
//                 Ir a Pagar
//               </Button>
//             </Link>
            
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShoppingCart;



// components/ShoppingCart.js
import React from 'react';
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { FaCreditCard } from "react-icons/fa";
import Lista from '../components/Lista';

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
          <Lista 
            items={cart} 
      
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            showActions={true} // ← Mostrar acciones
          />
          
          <div className="bg-gray-50 px-6 pb-10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold">${getCartTotal().toFixed(2)}</span>
            </div>
            
            <Link to="/checkout" className="block w-full">
              <Button size="large"variant='contained'
                sx={{
                  backgroundColor: 'rgb(50,200,50)',
                  width: '50%',
                  marginLeft: '25%',
                }}
              >
                <FaCreditCard className="text-blue-100 text-2xl pr-2" />
                Ir a Pagar
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

