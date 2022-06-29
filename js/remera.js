const productos = [
    {
      nombre: "remera1",
      precio: 1990,
      src="/remera/remera1.jpg" 
      id: "0",
    },
    {
      nombre: "remera2",
      precio: 2190,
      src="/remera/remera2.jpg" 
      id: "1",
    },
    {
      nombre: "remera3",
      precio: 1890,
      src="/remera/remera3.jpg" 
      id: "2",
    },
    {
      nombre: "remera4",
      precio: 2490,
      src="/remera/remera4.jpg" 
      id: "3",
    },
    {
      nombre: "remera5",
      precio: 1890,
      src="/remera/remera5.jpg" 
      id: "4",
    },
    {
      nombre: "remera6",
      precio: 2190,
      src="/remera/remera6.jpg" 
      id: "5",
    },
    {
      nombre: "remera7",
      precio: 1990,
      src="/remera/remera7.jpg" 
      id: "6",
    },
    {
      nombre: "remera8",
      precio: 2890,
      src="/remera/remera8.jpg" 
      id: "7",
    },
    {
      nombre: "remera9",
      precio: 2790,
      src="/remera/remera9.jpg" 
      id: "8",
    },
    {
      nombre: "remera10",
      precio: 2590,
      src="/remera/remera10.jpg"
      id: "9",
    },
    {
      nombre: "remera11",
      precio: 2190,
      src="/remera/remera11.jpg"
      id: "10",
    },
    {
      nombre: "remera12",
      precio: 1990,
      src="/remera/remera12.jpg"
      id: "11",
    },
    {
      nombre: "remera13",
      precio: 2890,
      src="/remera/remera13.webp"
      id: "12",
    },
    {
      nombre: "remera14",
      precio: 2790,
      src="/remera/remera14.jpg"
      id: "13",
    },
    {
      nombre: "remera15",
      precio: 2590,
      src="/remera/remera15.jpg"
      id: "14",
    },
    {
      nombre: "remera16",
      precio: 2190,
      src="/remera/remera16.jpg"
      id: "15",
    },
    {
      nombre: "remera17",
      precio: 1990,
      src="/remera/remera17.webp"
      id: "16",
    },
    {
      nombre: "remera18",
      precio: 2890,
      src="/remera/remera18.jpg"
      id: "17",
    },
    {
      nombre: "remera19",
      precio: 2790,
      src="/remera/remera19.jpg"
      id: "18",
    },
    {
      nombre: "remera20",
      precio: 2590,
      src="/remera/remera20.jpg"
      id: "19",
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
  