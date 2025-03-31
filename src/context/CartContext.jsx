import { createContext, useState, useContext } from "react";
//Creamos el contexto en una var. Exportada
const CartContext = createContext();

//Este React component sera la tag envoltoria de la la App, envolvera en el src/main.jsx. Exportada
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); //Los productos hay en el carrito.

    const addToCart = (product) => {
    setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === product.id);
        if (existingItem) {
            return prevCart.map(item =>
            item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
            );
        }
        return [...prevCart, { ...product, quantity: 1 }];
    });
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    
    const clearCart = () => {
        setCart([]);
    };

    const updateQuantity = (id, quantity) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        ));
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.precio * item.quantity), 0);
    };

    return (
    <CartContext.Provider 
        value={{cart, addToCart, removeFromCart, clearCart, updateQuantity, getCartTotal}}>
        {children}
    </CartContext.Provider>
    );
};

//Al contexto lo pasamos como parametro, del hook useContext y lo exportamos en una var
export const useCart = () => useContext(CartContext); 