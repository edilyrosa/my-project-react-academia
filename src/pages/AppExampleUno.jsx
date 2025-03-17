//!EXPLICACION {} -> componente que renderiza estructuras de datos, recorriendo el JSON
export default function AppExampleUno () {
    let nameUser = 'Edily';
    let sabores = ['uva', 'pina', 'mantecado']

    //TODO: Tarea: Haga un React Componente que retorne una lista titulada "lista de productos", cuya data es el siguiente array. Acceda a las propiedades: "nombre" y "precio", y rendericelos en la lista. Recuerde llamar ese componente en src/App.jsx
    let productos = [
        { "id": 1, "nombre": "Laptop Gamer", "precio": 1500, "descripcion": "Laptop potente", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAeo-venJIrrE5Y_kMBEu3Wc3-B8CyfsfcA&s" },
        { "id": 2, "nombre": "Auriculares Bluetooth", "precio": 200, "descripcion": "Auriculares con cancelación de ruido", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBRAjBjJYY4Lbz1DYHN4WZh_xJikcKCuY1g&s" },
        { "id": 3, "nombre": "Cellphone", "precio": 1500, "descripcion": "powerfully cellphone", "imagen": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQJRmUV6igc5DrN2dGWf7pV4Lzj6yuRtyLesSuZguDQZ-F-4XVsH5mZ-0a5IHhoB0XqU9fbBY9PH6O9bXtfUARhNwujgwuaCP-VR6rY4KxEFYyaFgy3hbCd9A" },
        { "id": 4, "nombre": "cellphone", "precio": 200, "descripcion": "pretty good", "imagen": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTKA7ARGRuqvebLdFmIfiVUVzBs2dCcBB3OlPTrHcuJ7Q_dmr5ihdz6E2WyUUkj5kTXsOBRO_hAnwbQEnA4H5psziLH9EQ5YiUMSxEUF_OcwmxuQCf53IBk" },
        { "id": 5, "nombre": "Girl Watch", "precio": 1500, "descripcion": "Beautifull girly sport watch", "imagen": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR2YVoE0LsrX0j1Ht2RFPOrUz3bgEUOGY_PEPlAdUqzOY-jJqmVS59QJ0Fb2CjCOE2TG9pMCFN_r_d96CwzU8ap3_kylyrzfg" },
        { "id": 6, "nombre": "Auriculares Bluetooth", "precio": 200, "descripcion": "Auriculares con cancelación de ruido", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBRAjBjJYY4Lbz1DYHN4WZh_xJikcKCuY1g&s" }
    ]
    return(
        <>
        <h1>Hola mundo a todos</h1>
        <h2>Hola mundo por {nameUser}</h2>
        <h2 className="bg-blue-400">Hola mundo estilizado </h2>
        <h2>Hola mundo por {nameUser ? nameUser : 'usuario'}</h2>
        
        <hr/> 
        <h3 className="font-bold mt-2">Lista de sabores</h3>
        <ul> 
            {sabores.map( (e, i) => <li>{i+1}. {e}</li>) }
        </ul>
        
        <hr/>        
        <h3 className="font-bold mt-2">Lista de productos</h3>
        <ul>
            {productos.map( (e, i) => <li>{i+1}. {e.nombre} - {e.precio}</li>)}
        </ul>
        </>
    )

}
//! LLAMALO EN App.jsx
