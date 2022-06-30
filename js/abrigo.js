const productos = [
    {
      nombre: "abrigo1",
      precio: 3490,
      src: "/abrigo/buzo1.jpg",
      id: "0",
    },
    {
      nombre: "abrigo2",
      precio: 3590,
      src: "/abrigo/buzo2.jpg",
      id: "1",     
    },
    {
      nombre: "abrigo3",
      precio: 3490,
      src: "/abrigo/buzo3.jpg",
      id: "2"
    },
    {
      nombre: "abrigo4",
      precio: 2590,
      src: "/abrigo/buzo4.jpg",
      id: "3"
    },
    {
      nombre: "abrigo5",
      precio: 3490,
      src: "/abrigo/buzo5.jpg",
      id: "4"
    },
    {
      nombre: "abrigo6",
      precio: 9990,
      src: "/abrigo/parca1.jpg",
      id: "5"
    },
    {
      nombre: "abrigo7",
      precio: 10490,
      src: "/abrigo/parca2.jpg",
      id: "6"
    },
    {
      nombre: "abrigo8",
      precio: 12390,
      src: "/abrigo/parca3.jpg",
      id: "7"
    },
    {
      nombre: "abrigo9",
      precio: 8990,
      src: "/abrigo/parca4.jpg",
      id: "8"
    },
    {
      nombre: "abrigo10",
      precio: 11990,
      src: "/abrigo/parca5.jpg",
      id: "9"
    },
    {
      nombre: "abrigo11",
      precio: 9990,
      src: "/abrigo/abrigo6.webp",
      id: "10"
    },
    {
      nombre: "abrigo12",
      precio: 10490,
      src: "/abrigo/abrigo7.webp",
      id: "11"
    },
    {
      nombre: "abrigo13",
      precio: 12390,
      src: "/abrigo/abrigo8.webp",
      id: "12"
    },
    {
      nombre: "abrigo14",
      precio: 8990,
      src: "/abrigo/abrigo9.jpg",
      id: "13"
    },
    {
      nombre: "abrigo15",
      precio: 11990,
      src: "/abrigo/abrigo10.jpg",
      id: "14"
    },
    {
      nombre: "abrigo16",
      precio: 9990,
      src: "/abrigo/abrigo1.jpg",
      id: "15"
    },
    {
      nombre: "abrigo17",
      precio: 10490,
      src: "/abrigo/abrigo2.jpg",
      id: "16"
    },
    {
      nombre: "abrigo18",
      precio: 12390,
      src: "/abrigo/abrigo3.jpg",
      id: "17"
    },
    {
      nombre: "abrigo19",
      precio: 8990,
      src: "/abrigo/abrigo4.jpg",
      id: "18"
    },
    {
      nombre: "abrigo20",
      precio: 11990,
      src: "/abrigo/abrigo5.jpg",
      id: "19"
    },
  ];
  
  const compraDelUsuario = () => {
      let compra = prompt("Seleccione un producto de la lista: \n" + 
      "1 : " + productos[0].nombre + " - $" + productos[0].precio + "\n" +
      "2 : " + productos[1].nombre + " - $" + productos[1].precio + "\n" +
      "3 : " + productos[2].nombre + " - $" + productos[2].precio + "\n" +
      "4 : " + productos[3].nombre + " - $" + productos[3].precio + "\n" +
      "5 : " + productos[4].nombre + " - $" + productos[4].precio + "\n" +
      "6 : " + productos[5].nombre + " - $" + productos[5].precio + "\n" +
      "7 : " + productos[6].nombre + " - $" + productos[6].precio + "\n" +
      "8 : " + productos[6].nombre + " - $" + productos[7].precio + "\n" +
      "9 : " + productos[6].nombre + " - $" + productos[8].precio + "\n" +
      "10 : " + productos[6].nombre + " - $" + productos[9].precio + "\n" +
      "11 : " + productos[6].nombre + " - $" + productos[10].precio + "\n" +
      "12 : " + productos[6].nombre + " - $" + productos[11].precio + "\n" +
      "13 : " + productos[6].nombre + " - $" + productos[12].precio + "\n" +
      "14 : " + productos[6].nombre + " - $" + productos[13].precio + "\n" +
      "15 : " + productos[6].nombre + " - $" + productos[14].precio + "\n" +
      "16 : " + productos[6].nombre + " - $" + productos[15].precio + "\n" +
      "17 : " + productos[6].nombre + " - $" + productos[16].precio + "\n" +
      "18 : " + productos[6].nombre + " - $" + productos[17].precio + "\n" +
      "19 : " + productos[6].nombre + " - $" + productos[18].precio + "\n" +
      "20 : " + productos[7].nombre + " - $" + productos[19].precio + "\n" 
      );
  
      return Number(compra);
  }
  
  const OPCIONES_CORRECTAS = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  

   
  
  
  let buttonBuy = document.getElementsByClassName("buttonBuy");
  let buttonBuys = Array.from(buttonBuy)
  
  buttonBuys.forEach(botonCompra => {
    botonCompra.addEventListener("click", () => buttonBuyAlert(botonCompra))
  });
  

  function buttonBuyAlert(boton) {
    console.log(boton)
    // PRIMER PASO
    // Buscamos el localStorage, si tiene algo se lo asignamos a "carrito", sino lo iniciamos como objeto vacio.
    let carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : {};

    // if(localStorage.getItem("carrito"){
    //   carrito = JSON.parse(localStorage.getItem("carrito"))
    // } else {
    //   carrito = {}
    // }

    // SEGUNDO PASO
    // Analizamos el objeto "carrito" que apunta al localStorage, para ver si en ese ID ya hay algo, sino lo iniciamos con un 1.
    carrito[boton.id] ? carrito[boton.id]++ : carrito[boton.id] = 1;

    // if (carrito[boton.id]) {
    //   carrito[boton.id]++;
    // } else {
    //   carrito[boton.id] = 1;
    // }

    // TERCER PASO
    // Volvemos a guardar el localStorage con el carrito actualizado con esta compra.
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  

