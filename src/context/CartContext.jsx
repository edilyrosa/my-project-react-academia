// import { createContext, useState, useContext } from "react";

// const CartContext = createContext(); // Creamos el contexto

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (id) => {
//     setCart(cart.filter(item => item.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, setCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // ✅ Asegúrate de que esta línea esté presente
// export const useCart = () => useContext(CartContext);












// import { createContext, useState, useContext } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart(prevCart => {
//       const existingItem = prevCart.find(item => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map(item =>
//           item.id === product.id 
//             ? { ...item, quantity: (item.quantity || 1) + 1 }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== id));
//   };

//   const updateQuantity = (id, quantity) => {
//     setCart(prevCart => prevCart.map(item =>
//       item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
//     ));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const getCartTotal = () => {
//     return cart.reduce((total, item) => total + (item.precio * (item.quantity || 1)), 0);
//   };

//   return (
//     <CartContext.Provider value={{ 
//       cart, 
//       addToCart, 
//       removeFromCart, 
//       clearCart, 
//       setCart,
//       updateQuantity,
//       getCartTotal
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);




import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
    setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === product.id);
        if (existingItem) {
            return prevCart.map(item =>
            item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
            );
            }
        return [...prevCart, { ...product, quantity: 1 }];
    });
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        ));
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.precio * (item.quantity || 1)), 0);
    };

    return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        setCart,
        updateQuantity,
        getCartTotal
    }}>
    {children}
    </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext); 