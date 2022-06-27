const productos = [
    {
      nombre: "abrigo1",
      precio: 10490,
    },
    {
      nombre: "abrigo2",
      precio: 10590,
    },
    {
      nombre: "abrigo3",
      precio: 12490,
    },
    {
      nombre: "abrigo4",
      precio: 12590,
    },
    {
      nombre: "abrigo5",
      precio: 11490,
    },
    {
      nombre: "abrigo6",
      precio: 9990,
    },
    {
      nombre: "abrigo7",
      precio: 10490,
    },
    {
      nombre: "abrigo8",
      precio: 12390,
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
      "8 : " + productos[7].nombre + " - $" + productos[7].precio + "\n" 
      );
  
      return Number(compra);
  }
  
  const OPCIONES_CORRECTAS = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  
  // let compra = compraDelUsuario();
  
  /* while(!OPCIONES_CORRECTAS.includes(compra)){
      alert("Opcion incorrecta!!! \n" + 
      "Ingrese un numero de producto valido");
      compra = compraDelUsuario();
  }
  if (compra === 0){
      alert("Gracias por su visita")
  }else{
      alert("El producto seleccionado " + productos[compra-1].nombre + " con el valor de $" + productos[compra-1].precio + "\n" +
  "fue comprado con exito. \n \n" + 
  "Gracias por su compra."
  )
  } */
  
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
  console.log(buttonbuy)