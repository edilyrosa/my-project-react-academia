import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Error 404</h1>
      <p>Página no encontrada</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};


