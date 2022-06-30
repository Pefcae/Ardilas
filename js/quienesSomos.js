
const cantidad = JSON.parse(localStorage.getItem('CantidadProductos'));
//alert(cantidad)
if (cantidad == null ) {cantidad=0}
var x = document.getElementById("ContadorCarrito");
x.innerHTML = parseInt(cantidad);
