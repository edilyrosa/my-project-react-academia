import React from 'react';
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../context/CartContext";
export default  function Lista ({showActions=true, bigSize=true}) { //Default /carrito
  const { cart, removeFromCart, updateQuantity, getCartTotal} = useCart();

  return (
    <div className="rounded-lg shadow-md p-6">
    
      {cart.map((item) => (
        <div 
          key={item.id} 
          className={`flex items-center border-b border-gray-200 ${bigSize ? 'py-4' : 'py-1'}`}
        >
          {/*//! Imagen del producto */}
          <img 
            src={item.imagen} 
            alt={item.nombre} 
            className={bigSize ? 'w-16 h-16 m-4' : 'w-10 h-10 m-2'}
          />
          <div className="flex-grow">
            <h3 className="text-lg font-medium">{item.nombre}</h3>
            <p className="text-gray-600">
              ${item.precio.toFixed(2)} 
              {` x ${item.quantity}`}
            </p>
            
            {/* Botones de cantidad (solo si showActions=true) */}
            {showActions && (
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
            )}
          </div>
          
          <div className="text-right">
            <p className="font-semibold">
                {(item.precio * item.quantity).toFixed(2) }
            </p>
            
            {/* Botón de eliminar (solo si showActions=true) */}
            {showActions  && (
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 mt-2 ml-4"
              >
                <FaTrash />
              </button>
            )}
          </div>
          
        </div>
      ))}

      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-xl font-bold">${getCartTotal().toFixed(2)}</span>
      </div>

    </div>
  );
};


