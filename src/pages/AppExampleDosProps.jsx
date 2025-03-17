//!EXPLICACION PROS -> componente que espera un dato de padre al ser llamado,
//! padre es quien maneja ese dato? posiblemente pq el es quien tiene acceso a la res de fetch()
export default function AppExampleDos({nom}) {
    //Aca no tengo disponible ese nombre o ese nombre depende de padre
    return(
        <>
            <h2>saludo con PROPS</h2>
            <p>Hola soy {nom}</p>
        </>
    )
    //"nom" podria ser cualquier TDD, que este componente espera para funcionar
}
//! LLAMALO EN App.jsx