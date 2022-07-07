const abrigos = [
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

let carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : {};

let productosDelCarrito = document.querySelector(".productosDelCarrito");

function agregarElementoAlCarrito(producto){
    let abrigo = abrigos[producto[0]];

    let nuevoProducto = document.createElement("div");

    let nombreProducto = document.createElement("p");
    let precioProducto = document.createElement("p");
    let cantidadProducto = document.createElement("p");
    let precioTotal = document.createElement("p");
    let imagenProducto = document.createElement("img");

    nombreProducto.innerHTML = abrigo.nombre;
    precioProducto.innerHTML = abrigo.precio;
    precioTotal.innerHTML = abrigo.precio * producto[1];
    cantidadProducto.innerHTML = producto[1];
    imagenProducto.src = "../assets/images" + abrigo.src;

    nombreProducto.classList.add("product")
    precioProducto.classList.add("product")
    cantidadProducto.classList.add("product")
    precioTotal.classList.add("product")
    imagenProducto.classList.add("product")

    console.log("nuevo", nuevoProducto)

    nuevoProducto.appendChild(imagenProducto);
    nuevoProducto.appendChild(nombreProducto);
    nuevoProducto.appendChild(precioProducto);
    nuevoProducto.appendChild(cantidadProducto);
    nuevoProducto.appendChild(precioTotal);

    nuevoProducto.classList.add("contenedorProduct")

    productosDelCarrito.appendChild(nuevoProducto);

}

for(let producto of Object.entries(carrito)){
    agregarElementoAlCarrito(producto);
}

let buttonVaciarCarrito = document.getElementById("buttonClear")
function vaciarCarrito(){
  localStorage.clear()
  window.location.reload()
}

buttonVaciarCarrito.addEventListener("click", vaciarCarrito);
