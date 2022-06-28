/* const productos = [
    {
      nombre: "remera1",
      precio: 1990,
    },
    {
      nombre: "remera2",
      precio: 2190,
    },
    {
      nombre: "remera3",
      precio: 1890,
    },
    {
      nombre: "remera4",
      precio: 2490,
    },
    {
      nombre: "remera5",
      precio: 1890,
    },
    {
      nombre: "remera6",
      precio: 2190,
    },
    {
      nombre: "remera7",
      precio: 1990,
    },
    {
      nombre: "remera8",
      precio: 2890,
    },
    {
      nombre: "remera9",
      precio: 2790,
    },
    {
      nombre: "remera10",
      precio: 2590,
    },
    {
      nombre: "remera11",
      precio: 2190,
    },
    {
      nombre: "remera12",
      precio: 1990,
    },
    {
      nombre: "remera13",
      precio: 2890,
    },
    {
      nombre: "remera14",
      precio: 2790,
    },
    {
      nombre: "remera15",
      precio: 2590,
    },
    {
      nombre: "remera16",
      precio: 2190,
    },
    {
      nombre: "remera17",
      precio: 1990,
    },
    {
      nombre: "remera18",
      precio: 2890,
    },
    {
      nombre: "remera19",
      precio: 2790,
    },
    {
      nombre: "remera20",
      precio: 2590,
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
  

  
  let tituloCatalogo = document.getElementById("tituloCatalogo");
  tituloCatalogo.innerHTML = "Temporada Invierno";
  
  tituloCatalogo.classList.add("textoRojo")
  tituloCatalogo.addEventListener("mouseover", () => tituloCatalogo.classList.add("textoAzul")) ;
  tituloCatalogo.addEventListener("mouseout", () => tituloCatalogo.classList.remove("textoAzul")) ;
  
  
  
  let buttonBuy = document.getElementsByClassName("buttonBuy");
  let buttonBuys = Array.from(buttonBuy)
  
  buttonBuys.forEach(botonCompra => {
    botonCompra.addEventListener("click", buttonBuyAlert)
  });
  
  function buttonBuyAlert () {
    alert("Gracias por tu compra ")
  }
  console.log(buttonbuy) */

/*   let tituloCatalogo = document.getElementsByClassName("tituloCatalogo")
  tituloCatalogo.innerHTML = "Temporada Invierno";
 */