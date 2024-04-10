import surfskate from "/img/surfskate.jpg"
import casco from "/img/Casco.jpg"
import championes from "/img/championes_vans.jpg"
import rampa from "/img/rampa_jardin.jpg"
import diseños from "/img/tablas_skate_diseños.jpg"
import trucks from "/img/trucks.jpg"

const product = [
    {
        id: " hajklashdioue ",
        nombre: " Surfskate ",
        imagen: surfskate ,
        descripcion: " Patineta simuladora de tabla de surf ",
        categoría: " Skate ",

    },
    {
        id: " vr6s5asefr ",
        nombre: " Casco ",
        imagen: casco,
        descripcion: " Casco de skate negro con rojo ",
        categoría: " Indumentaria ",

    },
    {
        id: " nuy94bncd65fvb4 ",
        nombre: " Championes ",
        imagen: championes ,
        descripcion: " Championes Vans perfectos para andar en skate ",
        categoría: " Ropa ",

    },
    {
        id: " c1w65ef1ryj ",
        nombre: " Rampa de jardín ",
        imagen: rampa ,
        descripcion: " Rampa de sencillo armado perfecto para practicar en casa ",
        categoría: " indumentaria ",

    },
    {
        id: " 564hrapndf ",
        nombre: " Diseños de tablas ",
        imagen: diseños ,
        descripcion: " Elegí el diseño que mas te guste para armar tu propio skate ",
        categoría: " Skate ",

    },
    {
        id: " v41jrys5hr4ujut ",
        nombre: " Trucks ",
        imagen: trucks ,
        descripcion: " Elegí el truck que mas te guste para armar tu propio skate ",
        categoría: " Skate ",

    }
]
const getProducts = new Promise((resolv, rejectd) => {
    //Simulamos retraso de red con setTimeout
    setTimeout(() => {
        resolv(product)
    }, 3000);
})
  
export default getProducts