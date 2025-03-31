const API_URL = "http://localhost:3000/productos"; // O usa 'https://fakestoreapi.com/products'

// Obtener todos los productos
export const getProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener productos");
    return await response.json();//responde en formato JSON
  }catch (error) {
    console.error(error.message);
    throw error; // Relanza el error para que lo maneje el llamador, por ejemplo, en el componente
    // de la vista de productos.Si no lo haces, el error se perderá.
  };
}
// Obtener un solo producto por ID
export const getProductById = async (id) => {
  //? ✅ Si http://localhost:3000/productos/123, una cosa es la API, otra cosa es
  //? la ruta de la vista -> <Route path="/producto/:id" element={<ProductDetail />} /> 
  //? de esa vista le extraemos a su URL el id para completar la peticion a la API
  try {
    const response = await fetch(`${API_URL}/${id}`); 
    if (!response.ok) throw new Error("Error al obtener el producto para mirar el detalle");
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error; 
  }
  
};

//! Crear un nuevo producto (si se quiere un panel de administración)
// export const createProduct = async (product) => {
//   const response = await fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(product),
//   });
//   if (!response.ok) throw new Error("Error al crear producto");
//   return await response.json();
// };

//! Actualizar un producto
// export const updateProduct = async (id, product) => {
//   const response = await fetch(`${API_URL}/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(product),
//   });
//   if (!response.ok) throw new Error("Error al actualizar producto");
//   return await response.json();
// };

//! Eliminar un producto
// export const deleteProduct = async (id) => {
//   const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//   if (!response.ok) throw new Error("Error al eliminar producto");
//   return true;
// };

