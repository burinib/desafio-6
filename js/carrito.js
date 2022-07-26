// DEFINIMOS UNA VARIABLE PARA TODOS LOS PRODUCTOS DE LA TIENDA
let tienda = [];
let valorTotalDeLaTienda = 0;

// CARGAMOS TODOS LOS PRODUCTOS EN LA VARIABLE TIENDA DESDE DATA.JSON
const getData = async  () => {
  const data = await fetch("../js/data.json").then((res) => res.json());
  tienda = data;
};

// OBTENEMOS LOS DATOS DEL LOCALSTORAGE, EN CASO DE NO HABER DATOS DEFINIMOS EL CARRITO COMO UN OBJETO VACIO
let carrito = localStorage.getItem("carrito")
  ? JSON.parse(localStorage.getItem("carrito"))
  : {};

// OBTENEMOS LA REFERENCIA DEL BOTON DE VACIAR CARRITO  
let buttonClear = document.getElementById("buttonClear");

// DEFINIMOS EL BOTON DE VACIAR CARRITO COMO VISIBLE SI TIENE ELEMENTOS, O COMO OCULTO SI EL CARRITO ESTA VACIO
if (Object.keys(carrito).length === 0) {
  buttonClear.style.display = "none";
} else {
  buttonClear.style.display = "block";
}

// OBTENER EL CONTENEDOR DEL CARRITO DONDE VAMOS A PINTAR LOS PRODUCTOS
let productosDelCarrito = document.querySelector(".productosDelCarrito");


// DEFINIMOS LA FUNCION QUE PINTARA UNO POR UNO LOS PRODUCTOS AL CARRITO
async function agregarElementoAlCarrito(producto) {
  // el producto que llega como parametro es una tupla [idProducto, cantProducto]
  const idProducto = producto[0];
  const cantProducto = producto[1];

  await getData();

  // OBTENEMOS EL ITEM DESDE SEGUN SU ID DESDE LA TIENDA
  let item = tienda[idProducto];
  const valorDelItem = item.precio * cantProducto

  // CREAMOS EL CONTENEDOR EN HTML PARA EL NUEVO PRODUCTO
  let nuevoProducto = document.createElement("div");

  // CREAMOS LOS ELEMENTOS HTML PARA CADA PROPIEDAD DEL PRODUCTO
  let nombreProducto = document.createElement("p");
  let precioProducto = document.createElement("p");
  let cantidadProducto = document.createElement("p");
  let precioTotal = document.createElement("p");
  let imagenProducto = document.createElement("img");

  // LE ASIGNAMOS VALOR A CADA PROPIEDAD
  nombreProducto.innerHTML = item.nombre;
  precioProducto.innerHTML = "$" + item.precio;
  precioTotal.innerHTML = "$" + valorDelItem;
  cantidadProducto.innerHTML = "Cant: " + cantProducto;
  imagenProducto.src = "../assets/images" + item.src;

  // LE ASIGNAMOS LOS ESTILOS A CADA PROPIEDAD
  nombreProducto.classList.add("product");
  precioProducto.classList.add("product");
  cantidadProducto.classList.add("product");
  precioTotal.classList.add("product");
  imagenProducto.classList.add("product");

  // AL CONTENEDOR 'NUEVO PRODUCTO' LE METEMOS DENTRO TODOS LOS ELEMENTOS DE PROPIEDADES
  nuevoProducto.appendChild(imagenProducto);
  nuevoProducto.appendChild(nombreProducto);
  nuevoProducto.appendChild(precioProducto);
  nuevoProducto.appendChild(cantidadProducto);
  nuevoProducto.appendChild(precioTotal);

  // LE ASIGNNAMOS LOS ESTILOS AL CONTENEDOR PRINCIPAL
  nuevoProducto.classList.add("contenedorProduct");

  // PINTAMOS TODO EL CONTENIDO ADENTRO DE LA PAGINA DE CARRITO
  productosDelCarrito.appendChild(nuevoProducto);

  valorTotalDeLaTienda += valorDelItem

  let totalCarrito = document.getElementById("totalCarrito");
  totalCarrito.innerHTML = "Total: $" + valorTotalDeLaTienda;
}

// ESTE ES EL MOMENTO EN DONDE RECORREMOS LAS ENTRIES DEL CARRITO PARA PINTAR TODOS LOS PRODUCTOS CON LA FUNCION DEFINIDA ARRIBA
for (let producto of Object.entries(carrito)) {
  agregarElementoAlCarrito(producto);
}

function vaciarCarrito() {
  localStorage.clear();
  window.location.reload();
}
let buttonVaciarCarrito = document.getElementById("buttonClear");
buttonVaciarCarrito.addEventListener("click", vaciarCarrito);

