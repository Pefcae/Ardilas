const Listproducts =[];
let Pedido ='';
let busqueda=[];
let equipo1 = [];
let equipo2 = [];
let equipo3 = [];
class talle {
    constructor(size,cantidad)
    {this.size = size;
        this.cantidad = cantidad;
    }
}
class Product {
 constructor(code,name, estrellas, price_orig,price_final,categoria,descripcion,imagen) {
        this.code = code;
        this.name = name;
        this.estrellas=estrellas;
        this.price_orig = price_orig;
        this.price_final = price_final;
        this.talles = [];
        this.categoria=categoria;
        this.descripcion=descripcion;
        this.imagen=imagen;
    }
    addTalle(talle) {
        this.talles.push(talle)
    }
}

class CarritoDeCompras {
    constructor() {
        this.productos = []
        this.name = ''
        this.puntaje= ''
        this.total = 0
    }
    setName(value) {
        this.name = value
    }
   
    addProduct(product) {
        this.productos.push(product)
    }

    vaciarCarrito() {
        this.productos = [];
    }

    eliminarProducto(valor) {
            this.productos.splice(valor-1, 1);
      }

    eliminarUltProducto(valor) {   
            this.productos.pop()
      }

    getTotal() 
        {
        Pedido ='';
        let cont=0;
        this.total = 0;

         for (const A of this.productos) 
            {
            this.total = this.total + A.price_final
            }
        
         return this.total
        }


}

const cliente = new CarritoDeCompras();


let cantidad = JSON.parse(localStorage.getItem('CantidadProductos'));
if (cantidad ==0 || cantidad == null )     cantidad=0 
var x = document.getElementById("ContadorCarrito");
x.innerHTML = parseInt(cantidad);


const almacenados = JSON.parse(localStorage.getItem("listaProductos"));

const CarritoNav = document.getElementById('carrito')


if (almacenados !=null && almacenados.length!=0) {
        for (const objeto of almacenados)
              {
              
                cliente.addProduct(objeto) 
                            
              }

  }
  else
  {
                    CarritoNav.disabled=true

  }
 


  const fetchLocalData = () => {
	fetch('https://pefcae.github.io/Ardilas/data.json').then((response) =>response.json())
	.then((result)=>{

		ListaDeProductos(result.productos)

	}).catch((err)=>{

		console.error(err)
	})

	}

const ListaDeProductos = (body) =>{
	body.forEach((producto) => {
        Listproducts.push (new Product(  producto.code,producto.name, producto.estrellas,producto.price_orig,producto.price_final, producto.categoria,producto.descripcion,producto.imagen)  )                
         equipo1 = Listproducts.filter((el) => el.categoria.includes('RIVER'))
         equipo2 = Listproducts.filter((el) => el.categoria.includes('BOCA'))
         equipo3 = Listproducts.filter((el) => el.categoria.includes('ARGENTINA'))
         mostrarProductos2(Listproducts)


	})


}



fetchLocalData()












for (i=0;i < Listproducts.length ;i++ )
{

    Listproducts[i].addTalle( new talle ('XS',100))
    Listproducts[i].addTalle( new talle ('S',500))
    Listproducts[i].addTalle( new talle ('M',600))
    Listproducts[i].addTalle( new talle ('L',300))
    Listproducts[i].addTalle( new talle ('XL',200))
}






const option = document.getElementById("option");


option.addEventListener("click", () => {
     switch (option.value){
            case "opt1":
                mostrarProductos2(Listproducts)
                break;
            case "opt2":
                mostrarProductos2(equipo1)
                break;
            case "opt3":
                mostrarProductos2(equipo2)
                break;
            case "opt4":
                mostrarProductos2(equipo3)
                break;
            default:
                mostrarProductos2(Listproducts)
                break;

        }

    })   









function mostrarProductos2 (array) {
let showAllProducts = document.getElementById('showAllProducts')

 showAllProducts.innerHTML = ''
        array.forEach((product) => {


                        const tr = document.createElement('div')
                        tr.classList.add('col', 'mb-5')
                       const Content = `
                            <div class="card h-100">
                                <img class="card-img-top" src=${product.imagen} alt="..." />
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h5 class="fw-bolder">${product.name}</h5>
                                        <div class="d-flex justify-content-center small text-warning mb-2">
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                            <div class="bi-star-fill"></div>
                                        </div>
                                       $ ${product.price_orig}
                                    </div>
                                </div>
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center">
                                        <button class="btn btn-outline-dark mt-auto ">Comprar
                                        </button>
                                    </div>
                                </div>
                            </div>
                          `
                          
                          tr.innerHTML = Content;

                            tr.addEventListener("click",()=>{ agregarCarrito(product) } ) 
                            
                            showAllProducts.appendChild(tr)

    })
}


const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };


function agregarCarrito(producto) {

    cliente.addProduct(producto) ;  

    const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Producto agregado al carrito'
        })



    guardarLocal("listaProductos", JSON.stringify(cliente.productos));
    guardarLocal("Totalcarrito", JSON.stringify(cliente.getTotal()));

    CarritoNav.disabled=false

    
    var x = document.getElementById("ContadorCarrito");
    x.innerHTML = parseInt(x.innerHTML)+1;
    localStorage.setItem("CantidadProductos",JSON.stringify(parseInt(x.innerHTML)))





}



function operacion(valor1, valor2, operacion) {
    switch (operacion){
            case "1":
                return valor1 + valor2;
                break;
            case "2":
                return valor1 - valor2;
                break;
            case "3":
                return valor1 * valor2;
                break;
            case "4":
                return valor1 / valor2;
                break;
            default:
            return 0;
                break;

        }
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
            cliente.setName(login);
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
            cliente.setName(login);
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


            
}


  Search.onkeydown = () => { onkeydown
                        let showAllProducts = document.getElementById('showAllProducts')
                        

                          var input, filter, ul, li, a, i, txtValue;
                          input = document.getElementById("Search")
                          filter = input.value.toUpperCase();


                             filter == '' && mostrarProductos2(Listproducts)


                          for (let i = 0; i < Listproducts.length; i++) {
                                a=Listproducts[i].name
                                txtValue=a
                             
                             txtValue.toUpperCase().indexOf(filter) > -1 && busqueda.push (Listproducts[i]) 


                             }

                             mostrarProductos2(busqueda)
            
                             busqueda=[]
                        }