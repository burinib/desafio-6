const productos = [
  {
    nombre: "pantalon1",
    precio: 7590,
    src: "/pantalon/pantalon1.jpg",
    id: "40",
  },
  {
    nombre: "pantalon2",
    precio: 6990,
    src: "/pantalon/pantalon2.webp",
    id: "41",
  },
  {
    nombre: "pantalon3",
    precio: 5990,
    src: "/pantalon/pantalon3.jpg",
    id: "42",
  },
  {
    nombre: "pantalon4",
    precio: 5890,
    src: "/pantalon/pantalon4.jpg",
    id: "43",
  },
  {
    nombre: "pantalon5",
    precio: 5900,
    src: "/pantalon/pantalon5.jpg",
    id: "44",
  },
  {
    nombre: "pantalon6",
    precio: 8940,
    src: "/pantalon/pantalon6.jpg",
    id: "45",
  },
  {
    nombre: "pantalon7",
    precio: 7590,
    src: "/pantalon/pantalon7.webp",
    id: "46",
  },
  {
    nombre: "pantalon8",
    precio: 6990,
    src: "/pantalon/pantalon8.jpg",
    id: "47",
  },
  {
    nombre: "pantalon9",
    precio: 5990,
    src: "/pantalon/pantalon9.jpg",
    id: "48",
  },
  {
    nombre: "pantalon10",
    precio: 6990,
    src: "/pantalon/pantalon10.jpg",
    id: "49",
  },
  {
    nombre: "pantalon11",
    precio: 8940,
    src: "/pantalon/pantalon11.jpg",
    id: "50",
  },
  {
    nombre: "pantalon12",
    precio: 7590,
    src: "/pantalon/pantalon12.jpg",
    id: "51",
  },
  {
    nombre: "pantalon13",
    precio: 6990,
    src: "/pantalon/pantalon13.jpg",
    id: "52",
  },
  {
    nombre: "pantalon14",
    precio: 5990,
    src: "/pantalon/pantalon14.jpg",
    id: "53",
  },
  {
    nombre: "pantalon15",
    precio: 6990,
    src: "/pantalon/pantalon15.jpg",
    id: "54",
  },
  {
    nombre: "pantalon16",
    precio: 8490,
    src: "/pantalon/pantalon16.jpg",
    id: "55",
  },
  {
    nombre: "pantalon17",
    precio: 7590,
    src: "/pantalon/pantalon17.jpg",
    id: "56",
  },
  {
    nombre: "pantalon18",
    precio: 6990,
    src: "/pantalon/pantalon18.jpg",
    id: "57",
  },
  {
    nombre: "pantalon19",
    precio: 5990,
    src: "/pantalon/pantalon19.jpg",
    id: "58",
  },
  {
    nombre: "pantalon20",
    precio: 16990,
    src: "/pantalon/pantalon20.jpg",
    id: "59",
  },
];

const compraDelUsuario = () => {
  let compra = prompt(
    "Seleccione un producto de la lista: \n" +
      "1 : " +
      productos[0].nombre +
      " - $" +
      productos[0].precio +
      "\n" +
      "2 : " +
      productos[1].nombre +
      " - $" +
      productos[1].precio +
      "\n" +
      "3 : " +
      productos[2].nombre +
      " - $" +
      productos[2].precio +
      "\n" +
      "4 : " +
      productos[3].nombre +
      " - $" +
      productos[3].precio +
      "\n" +
      "5 : " +
      productos[4].nombre +
      " - $" +
      productos[4].precio +
      "\n" +
      "6 : " +
      productos[5].nombre +
      " - $" +
      productos[5].precio +
      "\n" +
      "7 : " +
      productos[6].nombre +
      " - $" +
      productos[6].precio +
      "\n" +
      "8 : " +
      productos[6].nombre +
      " - $" +
      productos[7].precio +
      "\n" +
      "9 : " +
      productos[6].nombre +
      " - $" +
      productos[8].precio +
      "\n" +
      "10 : " +
      productos[6].nombre +
      " - $" +
      productos[9].precio +
      "\n" +
      "11 : " +
      productos[6].nombre +
      " - $" +
      productos[10].precio +
      "\n" +
      "12 : " +
      productos[6].nombre +
      " - $" +
      productos[11].precio +
      "\n" +
      "13 : " +
      productos[6].nombre +
      " - $" +
      productos[12].precio +
      "\n" +
      "14 : " +
      productos[6].nombre +
      " - $" +
      productos[13].precio +
      "\n" +
      "15 : " +
      productos[6].nombre +
      " - $" +
      productos[14].precio +
      "\n" +
      "16 : " +
      productos[6].nombre +
      " - $" +
      productos[15].precio +
      "\n" +
      "17 : " +
      productos[6].nombre +
      " - $" +
      productos[16].precio +
      "\n" +
      "18 : " +
      productos[6].nombre +
      " - $" +
      productos[17].precio +
      "\n" +
      "19 : " +
      productos[6].nombre +
      " - $" +
      productos[18].precio +
      "\n" +
      "20 : " +
      productos[7].nombre +
      " - $" +
      productos[19].precio +
      "\n"
  );

  return Number(compra);
};

const OPCIONES_CORRECTAS = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let buttonBuy = document.getElementsByClassName("buttonbuy");
let buttonBuys = Array.from(buttonBuy);

buttonBuys.forEach((botonCompra) => {
  botonCompra.addEventListener("click", () => buttonBuyAlert(botonCompra));
});

function buttonBuyAlert(boton) {
  // PRIMER PASO
  // Buscamos el localStorage, si tiene algo se lo asignamos a "carrito", sino lo iniciamos como objeto vacio.
  let carrito = localStorage.getItem("carrito")
    ? JSON.parse(localStorage.getItem("carrito"))
    : {};

  // if(localStorage.getItem("carrito"){
  //   carrito = JSON.parse(localStorage.getItem("carrito"))
  // } else {
  //   carrito = {}
  // }

  // SEGUNDO PASO
  // Analizamos el objeto "carrito" que apunta al localStorage, para ver si en ese ID ya hay algo, sino lo iniciamos con un 1.
  carrito[boton.id] ? carrito[boton.id]++ : (carrito[boton.id] = 1);

  // if (carrito[boton.id]) {
  //   carrito[boton.id]++;
  // } else {
  //   carrito[boton.id] = 1;
  // }

  // TERCER PASO
  // Volvemos a guardar el localStorage con el carrito actualizado con esta compra.
  localStorage.setItem("carrito", JSON.stringify(carrito));
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Agregado con exito al carrito",
    showConfirmButton: false,
    timer: 1000,
  })
}
