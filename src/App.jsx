import AppRouter from "./pages/AppRouter";
import AppExampleUno from "./pages/AppExampleUno";
import AppExampleDos from "./pages/AppExampleDosProps";

function App() {
  //Obtengo AQUI la data "auth" de API, y decido renderizar
 //let auth = true;
 //let isAuth = auth ? 'Usuario Valido' : 'Espia';
  return (
    <AppRouter/>
   // <AppExampleUno/>
   //<AppExampleDos nom={'Alice'}/>
  //  <AppExampleDos nom={isAuth}/>
  );
}
export default App;



