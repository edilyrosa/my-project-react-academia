import React from 'react';
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const Lista = ({ 
  items, 
  onRemove, 
  onUpdateQuantity, 
  showActions = false 
}) => {
  return (
    <div className="rounded-lg shadow-md p-6">
    
      {items.map((item) => (
        <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
          <img 
            src={item.imagen} 
            alt={item.nombre} 
            className={ 'w-16 h-16 m-4' }
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
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                >
                  <FaMinus />
                </button>
                <span className="mx-3">{item.quantity}</span>
                <button 
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
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
                onClick={() => onRemove(item.id)}
                className="text-red-500 hover:text-red-700 mt-2 ml-4"
              >
                <FaTrash />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lista;
