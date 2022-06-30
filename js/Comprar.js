


const tbody = document.querySelector('.tbody')
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const totalCarrito = JSON.parse(localStorage.getItem("Totalcarrito"));


function realizarCompra()
         {alert("compraExistosa -- esto se va a reemplazar con SweetAlert y un lindo Popup")
                   

                    guardarLocal("listaProductos", JSON.stringify([]));
                    guardarLocal("Totalcarrito", JSON.stringify(0));
                    guardarLocal("CantidadProductos", JSON.stringify(0));


                      tbody.innerHTML = ''
                     


                  const cantidad2 = JSON.parse(localStorage.getItem('CantidadProductos'));
                    if (cantidad2 == null ) {cantidad2=0}
                    var x = document.getElementById("ContadorCarrito");
                    x.innerHTML = parseInt(cantidad2);
                    
        }

function renderCarrito(){
  tbody.innerHTML = ''
  almacenados.map(item => {
                          const tr = document.createElement('tr')
                          tr.classList.add('ItemCarrito')
                          const Content = `
                          
                          <th scope="row"></th>
                                <td ><p>${item.code}</p></td>
                                <td ><p>${item.name}</p></td>
                                <td class="table__price"><p> $ ${item.price_final}</p></td>
                                                          
                          `
                          tr.innerHTML = Content;
                          tbody.append(tr)

                        //<button class="delete btn btn-danger">x</button>

                        //  tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
                        //  tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
                      }
                )
}

//renderCarrito()



//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.

for (const objeto of almacenados)
      {
        renderCarrito()
      }
   // alert(totalCarrito)

const cantidad = JSON.parse(localStorage.getItem('CantidadProductos'));
if (cantidad == null ) {cantidad=0}
var x = document.getElementById("ContadorCarrito");
x.innerHTML = parseInt(cantidad);




        const contenedor = document.getElementById('Totales')
        const totales = document.createElement('h3')

        totales.textContent = ` El total de la compra es $ ${totalCarrito} `

        contenedor.appendChild(totales)


        const EfectuarCompra = document.getElementById('EfectuarCompra')
        const Confir = document.createElement('button')
        const Content = `
                        <a href="..\\index.html">
                            <button class="btn btn-outline-dark" type=button >
                                <i class="bi-cart-fill me-1"></i>Confirmar Compra
                            </button>
                        </a> 
                         `
         Confir.innerHTML = Content;

        Confir.addEventListener("click", () => {
        realizarCompra()

        })  

        EfectuarCompra.appendChild(Confir)



