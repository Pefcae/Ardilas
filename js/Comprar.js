


const tbody = document.querySelector('.tbody')
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//const getLocalStorage = (key) => {const response = localStorage.getItem(key)
//        null undefind "0" "[]"  "" "" 
//        return response || "no item"
//    }

console.log (0 ?? "Nullish") //0
console.log (40 ?? "Nullish") //40
console.log (null ?? "Nullish") //nullish
console.log (undefined ?? "Nullish") //Nullinh
console.log (NaN ?? "Nullish") //NaN
console.log (true ?? "Nullish") //true
console.log (false ?? "Nullish") //false



const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const totalCarrito = JSON.parse(localStorage.getItem("Totalcarrito"));
const cantidad = JSON.parse(localStorage.getItem('CantidadProductos'));

function realizarCompra()
         {alert("compraExistosa -- esto se va a reemplazar con SweetAlert y un lindo Popup")
     
                    guardarLocal("listaProductos", JSON.stringify([]));
                    guardarLocal("Totalcarrito", JSON.stringify(0));
                    guardarLocal("CantidadProductos", JSON.stringify(0));


                      tbody.innerHTML = ''
                     
                  let cantidad2 = JSON.parse(localStorage.getItem('CantidadProductos'));
                    cantidad2 = cantidad2 == null && 0

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
                                <td class="table__price"><p> $ ${item.price_final}      </p>                                </td>

                                    <div id="divEliminar" class="text-center">
                                        <button ID = "btnEliminar" class="btnEliminar2 btn btn-outline-dark mt-auto ">X
                                        </button>
                                    </div>                          
                          `
               
                            tr.innerHTML = Content;
                            tbody.appendChild(tr)

                      }
                )
}



function armarPagina(){

        const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
        const totalCarrito = JSON.parse(localStorage.getItem("Totalcarrito"));
        let cantidad = JSON.parse(localStorage.getItem('CantidadProductos'));


        for (const objeto of almacenados)
              {
                renderCarrito()
              }


        cantidad = cantidad == null && 0

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

        Confir.addEventListener("click", () => {     realizarCompra()        })  

        EfectuarCompra.appendChild(Confir)


        const vaciarCarrito = document.createElement('button')
        const Content2 = `
                            <button class="btn btn-outline-dark" type=button >
                                <i class="bi-cart-fill me-1"></i>Vaciar Carrito
                            </button>
                         `
         vaciarCarrito.innerHTML = Content2;

        vaciarCarrito.addEventListener("click", () => {     BorrarCompra()        })  

        EfectuarCompra.appendChild(vaciarCarrito)



}

function BorrarCompra() 
{
                    tbody.innerHTML = ''
                    const contenedor = document.getElementById('Totales')
                    contenedor.innerHTML = ''
                    const EfectuarCompra = document.getElementById('EfectuarCompra')
                    EfectuarCompra.innerHTML= ''
                    guardarLocal("listaProductos", JSON.stringify([]));
                    guardarLocal("Totalcarrito", JSON.stringify(0));
                    guardarLocal("CantidadProductos", JSON.stringify(0));
                    armarPagina()

}




function eliminar() {
    const btnEliminar = document.getElementsByClassName("btnEliminar2");

    for(let i =0; i < btnEliminar.length ; i++){
            btnEliminar[i].addEventListener("click", () => {


                guardarLocal("Totalcarrito", JSON.stringify(totalCarrito-almacenados[i].price_final));
                guardarLocal("CantidadProductos", JSON.stringify(cantidad-1));
                almacenados.splice(i, 1);
                guardarLocal("listaProductos", JSON.stringify(almacenados));
                const contenedor = document.getElementById('Totales')
                contenedor.innerHTML = ''
                const EfectuarCompra = document.getElementById('EfectuarCompra')
                EfectuarCompra.innerHTML= ''
                armarPagina()
                location.reload()
                
           

            })   
}


}

armarPagina()
eliminar()
