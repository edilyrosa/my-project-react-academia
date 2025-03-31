import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import MediaCard from "../components/MediaCard";
import Box from '@mui/material/Box';  //TODO: esto
import TextField from '@mui/material/TextField';  //TODO: esto


export default function Products (){
  const [productos, setProductos] = useState([]); //!ARRAY CON LOS ELE A MOSTRAR (FILTRADOS O NO)
  const [productosOriginales, setProductosOriginales] = useState([]); //TODO: ARRAY CON TODOS LOS ELE DE LA API
  const [searchTerm, setSearchTerm] = useState('')//TODO: Esto

  // let theInput = document.getElementById("fullWidth")
  // theInput.addEventListener("onChange", (e) => {
  //   console.log(e.target.value);
  // })

  function handleSerch(searchTerm) { //TODO: esto
    if(searchTerm === '') setProductos(productosOriginales)
      else{
        const productosFiltados = productosOriginales.filter(producto => 
          {
            return producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
              producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
              producto.precio.toString().includes(searchTerm)
          }
          
        )
        setProductos(productosFiltados)
    }
    
  }


  

//!Nota que getProducts() es funcion asincrona, usa async/await y try/catch. Importante el catch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts(); //Recuperar el producto clickeado y lo devuelve en formato JSON.
        setProductos(data);
        setProductosOriginales(data) //TODO: esto
      } catch (error) { 
        //Este catch(), Captura errores que puedan ocurrir al llamar a getProducts. Para manejarlo en el contexto del componente, y por ejemplo, pintarlo en pantalla.
        // Si no se maneja el error, la app se rompe y no se ve nada.
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 pt-40">

      <div className="flex gap-1 items-center justify-center mx-auto my-4">
              <Box sx={{ width: 1000, maxWidth: '100%' }}>
                  <TextField 
                    fullWidth 
                    label="Buscar Producto" 
                    id="fullWidth" 
                    //TODO: esto
                    value={searchTerm }
                    onChange={(e) => {
                      setSearchTerm(e.target.value)
                      handleSerch(e.target.value)
                      console.log('var',searchTerm);
                      console.log('event', e.target.value);
                    }}
                      
                    />
              </Box>
      </div>


      <h1 className="text-4xl font-bold mb-4 text-center text-blue-500">Nuestros Productos</h1>
      <div className='p-4 flex flex-col lg:flex-row gap-[2%] justify-center items-center flex-wrap'>
        {productos.map((producto) => (
          <MediaCard 
            key={producto.id} 
            producto={producto}
            btnLookDatail={true}
          />
        ))}
      </div>
    </div>
  );
};


