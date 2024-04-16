import surfskate from "/img/surfskate.jpg"
import casco from "/img/Casco.jpg"
import championes from "/img/championes_vans.jpg"
import rampa from "/img/rampa_jardin.jpg"
import diseños from "/img/tablas_skate_diseños.jpg"
import trucks from "/img/trucks.jpg"

const product = [
    {
        id: "hajklashdioue",
        nombre: "Surfskate",
        imagen: surfskate ,
        descripcion: "Patineta simuladora de tabla de surf",
        stock: 15 ,
        categoría: " Skate ",
        precio: "$$$",

    },
    {
        id: "vr6s5asefr",
        nombre: "Casco",
        imagen: casco,
        descripcion: "Casco de skate negro con rojo",
        stock: 10 ,
        categoría: "Indumentaria",
        precio: "$$$",

    },
    {
        id: "nuy94bncd65fvb4",
        nombre: "Championes",
        imagen: championes ,
        descripcion: "Championes Vans perfectos para andar en skate",
        stock: 12 ,
        categoría: "Ropa",
        precio: "$$$",

    },
    {
        id: "c1w65ef1ryj" ,
        nombre: "Rampa de jardín",
        imagen: rampa ,
        descripcion: "Rampa de sencillo armado perfecto para practicar en casa",
        stock: 2 ,
        categoría: "indumentaria ",
        precio: "$$$",

    },
    {
        id: "564hrapndf",
        nombre: "Diseños de tablas",
        imagen: diseños ,
        descripcion: " Elegí el diseño que mas te guste para armar tu propio skate",
        stock: 4 ,
        categoría: "Skate",
        precio: "$$$",

    },
    {
        id: "v41jrys5hr4ujut",
        nombre: "Trucks",
        imagen: trucks ,
        descripcion: "Elegí el truck que mas te guste para armar tu propio skate",
        stock: 6 ,
        categoría: "Skate",
        precio: "$$$",

    }
]
const getProducts = new Promise((resolv) => {
    //Simulamos retraso de red con setTimeout
    setTimeout(() => {
        resolv(product)
    }, 2000);
})
  
export default getProducts