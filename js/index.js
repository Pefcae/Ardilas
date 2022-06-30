let Pedido ='';
const Listproducts =[];
let busqueda=[]
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
            alert("Producto Eliminado");
      }

    eliminarUltProducto(valor) {   
            this.productos.pop()
            alert("Producto Eliminado");
      }

    getTotal() 
        {
        Pedido ='';
        let cont=0;
        this.total = 0;

         for (const A of this.productos) 
            {
        //    cont++;
            this.total = this.total + A.price_final
            //Pedido=Pedido + cont + " - " + A.name +" $"+ A.price_orig   + "\n"
            }
        
       // alert ( "Hola " + this.name + " su pedido es: \n" + Pedido + "\n Total: " + this.total);
         return this.total
        }


}

const cliente = new CarritoDeCompras();

  

let cantidad = JSON.parse(localStorage.getItem('CantidadProductos'));
if (cantidad ==0 || cantidad == null ) 
               cantidad=0 
var x = document.getElementById("ContadorCarrito");
x.innerHTML = parseInt(cantidad);


const almacenados = JSON.parse(localStorage.getItem("listaProductos"));

const CarritoNav = document.getElementById('carrito')

console.dir(CarritoNav)

if (almacenados !=null) {
        for (const objeto of almacenados)
              {
              
                cliente.addProduct(objeto) 
                            
              }

  }
  else
  {
                    CarritoNav.disabled=true

  }
 




Listproducts.push (new Product('SA-01','CAMISETA ALTERNATIVA ARGENTINA',4.5,12000,12000,'ARGENTINA', 'descripción producto',".\\img\\SeleccionArgentina\\CAMISETA_ALTERNATIVA_OFICIAL_ARGENTINA_FRENTE.webp" ));
Listproducts.push (new Product('SA-02','CAMISETA ALTERNATIVA OFICIAL ARGENTINA',3,12000,10800,'ARGENTINA', 'descripción producto',".\\img\\SeleccionArgentina\\CAMISETA_ALTERNATIVA_ARGENTINA_FRENTE.webp" ));
Listproducts.push (new Product('SA-03','CAMISETA DE ARQUERO TITULAR ARGENTINA 21',4,12000,12000,'ARGENTINA', 'descripción producto',".\\img\\SeleccionArgentina\\CAMISETA_DE_ARQUERO_TITULAR_ARGENTINA_21_FRENTE.webp" ));
Listproducts.push (new Product('SA-04','CAMISETA TITULAR SELECCIÀN ARGENTINA MESSI 10',5,12000,12000,'ARGENTINA', 'descripción producto',".\\img\\SeleccionArgentina\\CAMISETA_TITULAR_SELECCIÓN_ARGENTINA_MESSI_10_FRENTE.webp" ));
Listproducts.push (new Product('SA-05','GUANTES SELECCIÓN',3.5,6000,6000,'ARGENTINA', 'descripción producto',".\\img\\SeleccionArgentina\\Guantes_Selección.webp" ));
Listproducts.push (new Product('SA-06','MEDIAS PANTORRILLAS AFA',4.5,2000,1800,'ARGENTINA', 'descripción producto',".\\img\\SeleccionArgentina\\MEDIAS_PANTORRILLAS_AFA_FRENTE.webp" ));
Listproducts.push (new Product('SA-08','REMERA ICON ARGENTINA',4,12000,10800,'ARGENTINA', 'descripción producto',".\\img\\SeleccionArgentina\\REMERA_ICON_ARGENTINA_FRENTE.webp" ));
Listproducts.push (new Product('SA-09','SHORTS TITULAR ARGENTINA',5,8000,8000,'ARGENTINA', 'descripción producto',".\\img\\SeleccionArgentina\\SHORTS_TITULAR_ARGENTINA_frente.webp" ));

Listproducts.push (new Product('BJ-01','CAMISETA DE ARQUERO BOCA JUNIORS 21-22',3,12000,12000,'BOCA', 'descripción producto',".\\img\\BocaJuniors\\CAMISETA_DE_ARQUERO_BOCA_JUNIORS_21-22_FRENTE.webp" ));
Listproducts.push (new Product('BJ-02','CAMISETA TITULAR OFICIAL BOCA JUNIORS 21-22',4,12000,10800,'BOCA', 'descripción producto',".\\img\\BocaJuniors\\CAMISETA_TITULAR_OFICIAL_BOCA_JUNIORS_21-22_FRENTE.webp" ));
Listproducts.push (new Product('BJ-03','CAMISETA VISITANTE OFICIAL BOCA JUNIORS 21-22 ',5,12000,12000,'BOCA', 'descripción producto',".\\img\\BocaJuniors\\CAMISETA_VISITANTE_OFICIAL_BOCA_JUNIORS_21-22.webp" ));
Listproducts.push (new Product('BJ-05','CAMPERA ANTHEM TIRO BOCA JUNIORS',4.5,12000,12000,'BOCA', 'descripción producto',".\\img\\BocaJuniors\\CAMPERA_ANTHEM_TIRO_BOCA_JUNIORS_FRENTE.webp" ));
Listproducts.push (new Product('BJ-06','MEDIAS ADI 21 AMARILLA',3,2000,1800,'BOCA', 'descripción producto',".\\img\\BocaJuniors\\MEDIAS_ADI_21_AMARILLA.webp" ));
Listproducts.push (new Product('BJ-08','REMERA ICONS BOCA JUNIORS MANGA LARGA',5,12000,10800,'BOCA', 'descripción producto',".\\img\\BocaJuniors\\REMERA_ICONS_BOCA_JUNIORS_MANGA_LARGA_FRENTE.webp" ));
Listproducts.push (new Product('BJ-09','SHORTS TERCERA BOCA JUNIORS 22-23',3.5,8000,8000,'BOCA', 'descripción producto',".\\img\\BocaJuniors\\SHORTS_TERCERA_BOCA_JUNIORS_22-23_FRENTE.webp" ));
Listproducts.push (new Product('BJ-10','TERCERA CAMISETA BOCA JUNIORS 22-23',4.5,12000,10800,'BOCA', 'descripción producto',".\\img\\BocaJuniors\\TERCERA_CAMISETA_BOCA_JUNIORS_22-23_FRENTE.webp" ));

Listproducts.push (new Product('RP-01','CAMISETA DE ARQUERO RIVER PLATE 21-22',3,12000,12000,'RIVER', 'descripción producto',".\\img\\RiverPlate\\CAMISETA_DE_ARQUERO_RIVER_PLATE_21-22_FRENTE.webp"));
Listproducts.push (new Product('RP-02','CAMISETA LOCAL RIVER PLATE 21-22',4,12000,10800,'RIVER', 'descripción producto',".\\img\\RiverPlate\\CAMISETA_LOCAL_RIVER_PLATE_21-22_FRENTE.webp" ));
Listproducts.push (new Product('RP-03','CAMISETA RIVER PLATE ICONS',5,12000,10800,'RIVER', 'descripción producto',".\\img\\RiverPlate\\CAMISETA_RIVER_PLATE_ICONS_FRENTE.webp" ));
Listproducts.push (new Product('RP-04','CAMISETA TERCER UNIFORME RIVER PLATE 20-21',3.5,12000,12000,'RIVER', 'descripción producto',".\\img\\RiverPlate\\CAMISETA_TERCER_UNIFORME_RIVER_PLATE_20-21_FRENTE.webp" ));
Listproducts.push (new Product('RP-05','CAMISETA VISITANTE RIVER PLATE 21-22',4.5,12000,10800,'RIVER', 'descripción producto',".\\img\\RiverPlate\\CAMISETA_VISITANTE_RIVER_PLATE_21-22_FRENTE.jpg" ));
Listproducts.push (new Product('RP-06','CAMPERA ROMPEVIENTOS RIVER PLATE',3,12000,12000,'RIVER', 'descripción producto',".\\img\\RiverPlate\\CAMPERA_ROMPEVIENTOS_RIVER_PLATE_FRENTE.webp" ));
Listproducts.push (new Product('RP-07','MEDIAS ADI 21 BLANCA',4,2000,1800,'RIVER', 'descripción producto',".\\img\\RiverPlate\\MEDIAS_ADI_21_BLANCA.webp" ));
Listproducts.push (new Product('RP-09','MUSCULOSA TIRO RIVER PLATE',3.5,8000,8000,'RIVER', 'descripción producto',".\\img\\RiverPlate\\MUSCULOSA_TIRO_RIVER_PLATE_FRENTE.webp" ));



for (i=0;i < Listproducts.length ;i++ )
{
    Listproducts[i].addTalle( new talle ('XS',100))
    Listproducts[i].addTalle( new talle ('S',500))
    Listproducts[i].addTalle( new talle ('M',600))
    Listproducts[i].addTalle( new talle ('L',300))
    Listproducts[i].addTalle( new talle ('XL',200))
}


const equipo1 = Listproducts.filter((el) => el.categoria.includes('RIVER'))
const equipo2 = Listproducts.filter((el) => el.categoria.includes('BOCA'))
const equipo3 = Listproducts.filter((el) => el.categoria.includes('ARGENTINA'))



const option = document.getElementById("option");


option.addEventListener("click", () => {
    //mostrarProductos2(option.value)
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







mostrarProductos2(Listproducts)

// const formatterPeso = new Intl.NumberFormat('es-CO', {
//        style: 'currency',
//        currency: 'COP',
//        minimumFractionDigits: 0
//      })

//esta función no me anduvo. la idea era formatear a moneda 
//console.log(formatterPeso.format('15000')) // "$10,000


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
                                       $ ${product.price_final}
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
                          //tbody.append(tr)    

                            tr.addEventListener("click",()=>{ agregarCarrito(product) } ) 
                            
                            showAllProducts.appendChild(tr)

    })
}

//const tbody = document.querySelector('.tbody')

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//let carrito[]

function agregarCarrito(producto) {

    cliente.addProduct(producto) ;  

    //console.dir(producto)
    
//    sessionStorage.setItem("productosCarrito",JSON.stringify(producto))
    
    
    //alert (cliente.getTotal())

    guardarLocal("listaProductos", JSON.stringify(cliente.productos));
    guardarLocal("Totalcarrito", JSON.stringify(cliente.getTotal()));

    CarritoNav.disabled=false

    
    var x = document.getElementById("ContadorCarrito");
    x.innerHTML = parseInt(x.innerHTML)+1;
    localStorage.setItem("CantidadProductos",JSON.stringify(parseInt(x.innerHTML)))



   // if (sessionStorage.getItem("productosCarrito")){
    //    carritoProductos=JSON.parse(sessionStorage.getItem("productosCarrito"));
   // }


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


// function pedirNUMERO(texto) {
//     let valor = prompt(texto);
//     while (isNaN(parseInt(valor)) ) {
//         valor = prompt(texto);
//     }
//     return valor;
// }


//  function realizarPedido(array)
//  {

//      let eleccion=0;
//      let menu='';
//      let i=0;

//     for (i=0;i < array.length ;i++ )
//         {
//             menu= menu +"" + (i+1) +" - "  + array[i].name + " $" + array[i].price_orig +"\n";
//         }

//     menu = menu +"\n"+"-1 - deshacer (elimina último)"

//     menu = menu +"\n"+"0 - para finalizar"
     

//     eleccion = pedirNUMERO("Por favor seleccione una opción del menú\n" + menu );

   
//     while (eleccion<-1 || eleccion> array.length)
//            { 
//                 eleccion = pedirNUMERO("opción incorrecta, Por favor seleccione una opción del menú\n" + menu );
//             }


//      while (eleccion!="0")

//               {  
                 
//                 if (eleccion==-1 && cliente.productos.length>0) {
//                     cliente.eliminarUltProducto();

//                 } 
//                 else    
//                  {   
//                     cliente.addProduct(array[eleccion-1]) ;  
//                   }

//                 eleccion = pedirNUMERO("Por favor seleccione una opción del menú\n" + menu );

//                 while (eleccion<-1 || eleccion>array.length)
//                     { 
//                         eleccion = pedirNUMERO("opción incorrecta, Por favor seleccione una opción del menú\n" + menu );
//                     }
//              }
    

// }

// function HacerPedido(param)
// {

// //const cliente = new CarritoDeCompras();


// alert ("Primera entrega de desafio final de Pablo Federiconi (Agregando Clases y arrays)");


// //let Usuario = prompt("Por favor Ingrese su nombre");

// //cliente.setName(Usuario);
// if (cliente.name=='')

//     {   let Usuario = prompt("Por favor Ingrese su nombre");

//         cliente.setName(Usuario);
//     }

// alert ("Hola " + cliente.name + ", Bienvenido a Ardilas, compre con confianza :)");


// let equipo='';
// equipo=param;


// if (equipo=='')
//  {
//     equipo = pedirNUMERO("Por favor seleccione el equipo que desea comprar\n 1) River Plate \n 2) Boca Juniors \n 3) Selección Argentina \n 4) Todos los equipos \n 5) Salir");
//     while (equipo<=0 || equipo> 5)
//     { 
//         equipo = pedirNUMERO("Por favor seleccione el equipo que desea comprar\n 1) River Plate \n 2) Boca Juniors \n 3) Selección Argentina \n 4) Todos los equipos \n 5) Salir");
//     }
// }

// switch (equipo){
//     case "1":
//         realizarPedido(equipo1);
//         break;
//     case '2':
//         realizarPedido(equipo2);
//         break;
//     case '3':
//         realizarPedido(equipo3);
//         break;
//     case '4':
//         realizarPedido(Listproducts);
//         break;
//     default:
//         break;
// }

// if (cliente.productos.length>0)
// {
//     cliente.getTotal();

//     let opcion=0;
    
//     opcion = prompt("¿Confirma el pedido? \n 1) Sí \n 2) No, quiero eliminar un producto \n 3)Vaciar carrito ");
    
//     while (opcion <0 || opcion>3)
//            { 
//                 opcion = pedirNUMERO("opción incorrecta, ¿Confirma el pedido? \n 1) Sí \n 2) No, quiero eliminar un producto \n 3)Vaciar carrito");
//             }

//             if (opcion==1 )  alert ("Pedido Confirmado");

//     while (opcion!=1 )
//     {

//          switch (opcion){
//                     case "1":
//                             alert ("Pedido Confirmado");
//                             cliente.vaciarCarrito();   
//                         break;
//                     case "2":
//                         opcion = pedirNUMERO("Seleccione el número del item que desea eliminar\n" + Pedido);
//                         while (opcion <0 || opcion>cliente.productos.length)
//                            { 
//                                 opcion = pedirNUMERO("Seleccione el número del item que desea eliminar\n" + Pedido);
//                             }

//                         cliente.eliminarProducto(opcion);
//                         cliente.getTotal();

//                         break;
//                     case "3":
//                         alert ("Se procedió a vaciar el carrito");
//                         cliente.vaciarCarrito();   
//                         cliente.getTotal();
//                         break;
//                     default:
//                         break;
//                 }

//     opcion = prompt("¿Confirma el pedido \n 1) Sí \n 2) No, quiero eliminar un producto \n 3)Vaciar carrito ");
    
//     while (opcion <0 || opcion>3)
//            { 
//                 opcion = pedirNUMERO("opción incorrecta, ¿Confirma el pedido? \n 1) Sí \n 2) No, quiero eliminar un producto \n 3)Vaciar carrito");
//             }

//     }

// }

// alert("Muchas gracias, Vuelva Pronto");
// }


function Mensajes()
{
    alert("Aún no tiene mensajes -- esto se va a reemplazar con SweetAlert y un lindo Popup")
}

function Login()
{
    let Usuario = prompt("Por favor Ingrese su Usuario  --- esto se va a reemplazar con SweetAlert y un lindo Popup");

    while (Usuario =="" || Usuario ==null || Usuario.length <8) {
        Usuario = prompt("Por favor Ingrese su nombre, recuerde que debe tener longitud mínima de 8 caracteres")
        }
    cliente.setName(Usuario);

    let clave = prompt("Por favor Ingrese su clave");

    while (clave =="" || clave ==null || clave.length <8) {
        clave = prompt("Por favor Ingrese su clave, recuerde que debe tener longitud mínima de 8 caracteres")
        }

    cliente.setName(Usuario);


    alert ("Hola " + cliente.name + ", Gracias por iniciar Sesion :)  -- esto se va a reemplazar con SweetAlert y un lindo Popup");
    
}



Search.onchange = () => { 
                        //const busqueda = Listproducts.filter((el) => el.name.includes(Search.value.toUpperCase()))
                        //mostrarProductos2  (busqueda) 
                        let showAllProducts = document.getElementById('showAllProducts')

                        
                        showAllProducts.innerHTML = ''

                          var input, filter, ul, li, a, i, txtValue;
                          input = document.getElementById("Search")
                          filter = input.value.toUpperCase();
                          console.log(filter)
                          if (filter=='') { 
                                             showAllProducts.innerHTML = ''
                                            mostrarProductos2(Listproducts)}


                          for (let i = 0; i < Listproducts.length; i++) {
                                a=Listproducts[i].name
                                txtValue=a
                             
                                if (txtValue.toUpperCase().indexOf(filter) > -1) {   
                                    busqueda.push (Listproducts[i])

                                } 
                
                             }

                            showAllProducts.innerHTML = ''

                             mostrarProductos2(busqueda)
            
                             busqueda=[]



                        }




// function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }


