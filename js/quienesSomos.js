
let cantidad = JSON.parse(localStorage.getItem('CantidadProductos'));
//alert(cantidad)
cantidad = cantidad == null && 0
var x = document.getElementById("ContadorCarrito");
x.innerHTML = parseInt(cantidad);
