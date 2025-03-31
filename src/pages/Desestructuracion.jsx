
// export default function Desestructuracion() {

//   //!Desestrcuturacion de obj y arrays:
//   // Rermite extraer valores de arrays o propiedades de objetos y asignarlos a variables de manera más sencilla y legible.

//   let user = {
//     nameUser: "Juan",
//     ageUser: 30,
//   }

//   const frutas = ['uva', 'melon', 'fresa']
//   const [fruta1, fruta2, fruta3] = frutas
//    const { ageUser } = user;

// //!OPERADOR SPREAD (...)
// //Utilizado para "expandir" los elementos de un iterable o crear un nuevo objeto o Array basado en la copia de en quien lo llama: {...tem, +key:value} [...prevCart, +{}]

// const newFrutas = [...frutas, "naranja"] //lo que haya en el arr frutas mas este otro ele
// console.log('OPERADOR SPREAD EN ARRY', newFrutas);

// user = {...user, peso:50}
// console.log('OPERADOR SPREAD EN OBJ', user);


 
//    return(
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 pt-[18vh]">
//         <h1 className="text-red-700 text-5xl mt-12vh">hola soy el usuario {user.nameUser} y mi edad es {ageUser}</h1>
//         <h2 className="text-red-700 text-5xl mt-12vh">y me gusta la {frutas[2]} y la {fruta1}, {fruta2} y {fruta3}</h2>
//     </div>
//    )
  
// }