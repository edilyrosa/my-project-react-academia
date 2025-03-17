// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const Checkout = () => {
//   const { cart, setCart } = useCart();
//   const navigate = useNavigate();

//   const total = cart.reduce((acc, item) => acc + item.precio, 0);

//   const handlePayment = () => {
//     alert("Compra realizada con éxito 🎉");
//     setCart([]); // Vacía el carrito después del pago
//     navigate("/"); // Redirige a la página principal
//   };

//   return (
//     <div>
//       <h1>Resumen del Pedido</h1>
//       {cart.map((item) => (
//         <div key={item.id}>
//           <h2>{item.nombre}</h2>
//           <p>Precio: ${item.precio}</p>
//         </div>
//       ))}
//       <h3>Total a pagar: ${total}</h3>
//       <button onClick={handlePayment}>Pagar</button>
//     </div>
//   );
// };

// export default Checkout;


// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";
// import { FaCreditCard, FaShoppingCart } from "react-icons/fa";

// const Checkout = () => {
//   const { cart, setCart } = useCart();
//   const navigate = useNavigate();

//   const total = cart.reduce((acc, item) => acc + item.precio, 0);

//   const handlePayment = () => {
//     alert("Compra realizada con éxito 🎉");
//     setCart([]);
//     navigate("/");
//   };

//   return (
//     <div className="container mx-auto px-4 pt-40">
//       <h1 className="text-3xl font-bold mb-6 text-center text-blue-500 ">Resumen del Pedido</h1>
//       <div className="flex flex-col md:flex-row gap-8">
//         <div className="md:w-2/3">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-4">Artículos en tu carrito</h2>
//             {cart.map((item) => (
//               <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
//                 <img src={item.imagen} alt={item.nombre} className="w-16 h-16 object-cover rounded mr-4"/>
//                 <div className="flex-grow">
//                   <h3 className="text-lg font-medium">{item.nombre}</h3>
//                   <p className="text-gray-600">${item.precio.toFixed(2)}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="md:w-1/3">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-4">Resumen de pago</h2>
//             <div className="flex justify-between mb-2">
//               <span>Subtotal</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span>Impuestos</span>
//               <span>$0.00</span>
//             </div>
//             <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-4 mt-2">
//               <span>Total a pagar</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//             <button 
//               onClick={handlePayment}
//               className="w-full bg-green-500 text-white py-2 px-4 rounded-lg mt-6 hover:bg-green-600 transition duration-200 flex items-center justify-center"
//             >
//               <FaCreditCard className="mr-2" />
//               Proceder al pago
//             </button>
//             <button 
//               onClick={() => navigate("/carrito")}
//               className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg mt-4 hover:bg-gray-300 transition duration-200 flex items-center justify-center"
//             >
//               <FaShoppingCart className="mr-2" />
//               Volver al carrito
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;





import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaShoppingCart } from "react-icons/fa";

const Checkout = () => {
  const { cart, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  const total = getCartTotal();

  const handlePayment = () => {
    alert("Compra realizada con éxito 🎉");
    clearCart();
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 pt-40">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">Resumen del Pedido</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Artículos en tu carrito</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
                <img src={item.imagen} alt={item.nombre} className="w-16 h-16 object-cover rounded mr-4"/>
                <div className="flex-grow">
                  <h3 className="text-lg font-medium">{item.nombre}</h3>
                  <p className="text-gray-600">${item.precio.toFixed(2)} x {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${(item.precio * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Resumen de pago</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Impuestos</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-4 mt-2">
              <span>Total a pagar</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button 
              onClick={handlePayment}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg mt-6 hover:bg-green-600 transition duration-200 flex items-center justify-center"
            >
              <FaCreditCard className="mr-2" />
              Proceder al pago
            </button>
            <button 
              onClick={() => navigate("/carrito")}
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg mt-4 hover:bg-gray-300 transition duration-200 flex items-center justify-center"
            >
              <FaShoppingCart className="mr-2" />
              Volver al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
