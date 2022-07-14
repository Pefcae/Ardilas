


const tbody = document.querySelector('.tbody')
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//const getLocalStorage = (key) => {const response = localStorage.getItem(key)
//        null undefind "0" "[]"  "" "" 
//        return response || "no item"
//    }

// console.log (0 ?? "Nullish") //0
// console.log (40 ?? "Nullish") //40
// console.log (null ?? "Nullish") //nullish
// console.log (undefined ?? "Nullish") //Nullinh
// console.log (NaN ?? "Nullish") //NaN
// console.log (true ?? "Nullish") //true
// console.log (false ?? "Nullish") //false



const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const totalCarrito = JSON.parse(localStorage.getItem("Totalcarrito"));
const cantidad = JSON.parse(localStorage.getItem('CantidadProductos'));



function realizarCompra()
         {
                let texto
                texto='¡Muchas gracias por confiar en nosotros! Por favor comuníquese al 11-1234-1234 para acordar el pago y envío de la mercadería. Su número de pedido es: ' + Math.round(Math.random()*1000000)

               Swal.fire({  title: texto
           })


     
                    guardarLocal("listaProductos", JSON.stringify([]));
                    guardarLocal("Totalcarrito", JSON.stringify(0));
                    guardarLocal("CantidadProductos", JSON.stringify(0));


                      tbody.innerHTML = ''
                     
                  let cantidad2 = JSON.parse(localStorage.getItem('CantidadProductos'));
                    if (cantidad2 == null) cantidad2= 0

                    var x = document.getElementById("ContadorCarrito");
                    x.innerHTML = parseInt(cantidad2);



        }



function Mensajes()
{
        Swal.fire({
          title: 'Aún no has recibido mensajes',
          text: 'Le avisaremos en cuanto tenga algún mensaje.  Muchas gracias.',
          imageUrl: 'https://cdn2.iconfinder.com/data/icons/communication-459/200/NO-EMAIL-3--NO-EMAIL-MAIL-MESSAGE-EMPTY-INBOX-OPEN-ENVELOPE-DISAPPOINTED-SAD-MAN-COMMUNICATION-512.png',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
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
          eliminar()

}



function armarPagina(){

        const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
        const totalCarrito = JSON.parse(localStorage.getItem("Totalcarrito"));
        let cantidad = JSON.parse(localStorage.getItem('CantidadProductos'));


        for (const objeto of almacenados)
              {
                renderCarrito()
              }


        if (cantidad == null) cantidad= 0


        var x = document.getElementById("ContadorCarrito");
        
        x.innerHTML = parseInt(cantidad);


        const contenedor = document.getElementById('Totales')
        const totales = document.createElement('h3')

        totales.textContent = ` El total de la compra es $ ${totalCarrito} `

        contenedor.appendChild(totales)


        const EfectuarCompra = document.getElementById('EfectuarCompra')
        const Confir = document.createElement('button')
        const Content = `
                            <button class="btn btn-outline-dark" type=button >
                                <i class="bi-cart-fill me-1"></i>Confirmar Compra
                            </button>

                         `

//                                                 <a href="..\\index.html">
  //                                              </a> 

         Confir.innerHTML = Content;
         totales.textContent = ``


        Confir.addEventListener("click", () => {     realizarCompra()        })  

        EfectuarCompra.appendChild(Confir)
        //EfectuarCompra.appendChild(totales)



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

                    Swal.fire({
                                  title: '¿Estás seguro de borrar la comprar?',
                                  icon: 'warning',
                                  showCancelButton: true,
                                  confirmButtonColor: '#3085d6',
                                  cancelButtonColor: '#d33',
                                  confirmButtonText: 'Si, hoy no voy a comprar!'
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    Swal.fire(
                                      'Compra eliminada!',
                                      'Vuelva pronto',
                                      'success'
                                    )

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
                                })

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

                console.log("entre")
           
                armarPagina()
                location.reload()

            })   
}


}


function registrarse()
{

        Swal.fire({


        title: 'Registrate para poder comprar',
        html:
        '<input id="login" class="swal2-input" placeholder ="ingrese su usuario">' +
        '<input id="password" type="password" class="swal2-input" placeholder ="ingrese su contraseña">',
        focusConfirm: false,

         preConfirm: () => {
                const login = Swal.getPopup().querySelector('#login').value
                const password = Swal.getPopup().querySelector('#password').value
                if (!login || !password) {
                  Swal.showValidationMessage(`Please enter login and password`)
                }
//                return { login: login, password: password }
            //cliente.setName(login);
            guardarLocal("usuario", cliente.name);
            }

        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Gracias por registrarte, Bienvenido  ', '', 'success')
            
        }
        })


        


}


function Login()
{

        Swal.fire({
          title: 'Login Form',
          html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
          <input type="password" id="password" class="swal2-input" placeholder="Password">`,
          confirmButtonText: 'Sign in',
          showCancelButton: true,
          showDenyButton: true,
          cancelButtonText: "cancel",
          confirmButtonText: 'Save',
          denyButtonText: `Registrarse`,

          focusConfirm: false,
          preConfirm: () => {
            const login = Swal.getPopup().querySelector('#login').value
            const password = Swal.getPopup().querySelector('#password').value
            if (!login || !password) {
              Swal.showValidationMessage(`Please enter login and password`)
            }
            //cliente.setName(login);
            return { login: login, password: password }
          }




        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Bienvenido', '', 'success')
            guardarLocal("usuario", cliente.name);
       
        } else if (result.isDenied) {
              registrarse()
          }
        })


            //Login: ${result.value.login}
            
            //Password: ${result.value.password}

       
                
    // let Usuario = prompt("Por favor Ingrese su Usuario  --- esto se va a reemplazar con SweetAlert y un lindo Popup");

    // while (Usuario =="" || Usuario ==null || Usuario.length <8) {
    //     Usuario = prompt("Por favor Ingrese su nombre, recuerde que debe tener longitud mínima de 8 caracteres")
    //     }
    // cliente.setName(Usuario);

    // let clave = prompt("Por favor Ingrese su clave");

    // while (clave =="" || clave ==null || clave.length <8) {
    //     clave = prompt("Por favor Ingrese su clave, recuerde que debe tener longitud mínima de 8 caracteres")
    //     }

    // cliente.setName(Usuario);


    // alert ("Hola " + cliente.name + ", Gracias por iniciar Sesion :)  -- esto se va a reemplazar con SweetAlert y un lindo Popup");
    
}

armarPagina()
