let tienda = [];
const getData = async  () => {
  const data = await fetch("../js/data.json").then((res) => res.json());
  tienda = data;
};

let carrito = localStorage.getItem("carrito")
  ? JSON.parse(localStorage.getItem("carrito"))
  : {};
let buttonClear = document.getElementById("buttonClear");

if (Object.keys(carrito).length === 0) {
  buttonClear.style.display = "none";
} else {
  buttonClear.style.display = "block";
}

let productosDelCarrito = document.querySelector(".productosDelCarrito");

async function agregarElementoAlCarrito(producto) {
  await getData();
  let item = tienda[producto[0]];

  let nuevoProducto = document.createElement("div");

  let nombreProducto = document.createElement("p");
  let precioProducto = document.createElement("p");
  let cantidadProducto = document.createElement("p");
  let precioTotal = document.createElement("p");
  let imagenProducto = document.createElement("img");

  nombreProducto.innerHTML = item.nombre;
  precioProducto.innerHTML = "$" + item.precio;
  precioTotal.innerHTML = "$" + item.precio * producto[1];
  cantidadProducto.innerHTML = "Cant: " + producto[1];
  imagenProducto.src = "../assets/images" + item.src;

  nombreProducto.classList.add("product");
  precioProducto.classList.add("product");
  cantidadProducto.classList.add("product");
  precioTotal.classList.add("product");
  imagenProducto.classList.add("product");

  nuevoProducto.appendChild(imagenProducto);
  nuevoProducto.appendChild(nombreProducto);
  nuevoProducto.appendChild(precioProducto);
  nuevoProducto.appendChild(cantidadProducto);
  nuevoProducto.appendChild(precioTotal);

  nuevoProducto.classList.add("contenedorProduct");

  productosDelCarrito.appendChild(nuevoProducto);
}

for (let producto of Object.entries(carrito)) {
  agregarElementoAlCarrito(producto);
}

function vaciarCarrito() {
  localStorage.clear();
  window.location.reload();
}
let buttonVaciarCarrito = document.getElementById("buttonClear");
buttonVaciarCarrito.addEventListener("click", vaciarCarrito);
