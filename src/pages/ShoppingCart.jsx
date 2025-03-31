// src/pages/ShoppingCart.jsx
import React from 'react';
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { FaCreditCard } from "react-icons/fa";
import Lista from '../components/Lista';

export default function ShoppingCart() {
  const { cart } = useCart();

  return (
    <div className="container mx-auto px-4 pt-40">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">Tu Carrito de Compras</h1>
      {cart.length === 0 
      ? 
        (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-xl mb-4">Tu carrito está vacío.</p>
            <Link to="/productos" className="text-blue-500 hover:underline">Ir a productos</Link>
          </div>
        ) 
      : 
        (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Lista 
              // showActions={true} // ← Mostrar acciones
              // bigSize={true} // ← Cambiar tamaño de imagen
            />
            
            <div className="bg-gray-50 px-6 pb-10">
              
              
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
        )
      }
    </div>
  );
};



