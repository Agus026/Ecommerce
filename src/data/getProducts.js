
const product = [
    {
        id: " hajklashdioue ",
        nombre: " Surfskate ",
        descripcion: " Patineta simuladora de tabla de surf ",
        categoría: " Skate ",

    },
    {
        id: " vr6s5asefr ",
        nombre: " Casco ",
        descripcion: " Casco de skate negro con rojo ",
        categoría: " Indumentaria ",

    },
    {
        id: " nuy94bncd65fvb4 ",
        nombre: " Championes ",
        descripcion: " Championes Vans perfectos para andar en skate ",
        categoría: " Indumentaria ",

    },
    {
        id: " c1w65ef1ryj ",
        nombre: " Rampa de jardín ",
        descripcion: " Rampa de sencillo armado perfecto para practicar en casa ",
        categoría: " indumentaria ",

    },
    {
        id: " 564hrapndf ",
        nombre: " Diseños de tablas ",
        descripcion: " Elegí el diseño que mas te guste para armar tu propio skate ",
        categoría: " Skate ",

    },
    {
        id: " v41jrys5hr4ujut ",
        nombre: " Trucks ",
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