import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { FaShoppingCart } from "react-icons/fa"; // Importar icono del carrito
import { Link } from "react-router-dom";
export default function MediaCard({producto, addToCart }) {

  return (
    
    <Card sx={{ maxWidth: 345 }} 
      className="p-4 m-4 hover:shadow-xl w-full max-w-[350px] min-w-[25%] min-h-[50vh] transition duration-300 transform hover:-translate-y-2" >
      <CardMedia
        sx={{ height:140}}
        image={producto.imagen}
        title={producto.nombre}
         className="object-cover w-full h-full"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.nombre}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {producto.precio} $
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {producto.descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
        size="small"
        onClick={() => addToCart(producto)}
        >Comprar
         <FaShoppingCart className="text-blue-200 text-2xl" />
        </Button>
        <Button size="small">
          <Link 
            to={`/producto/${producto.id}` }> 
              <i className="text-blue-500 hover:underline m-2 block">Ver Detalles</i>
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
