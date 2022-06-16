let Pedido ='';
const Listproducts =[];
class talle {
    constructor(size,cantidad)
    {this.size = size;
        this.cantidad = cantidad;
    }
}

class Product {
 constructor(code,name, estrellas, price_orig,price_final,categoria) {
        this.code = code;
        this.name = name;
        this.estrellas=estrellas;
        this.price_orig = price_orig;
        this.price_final = price_final;
        this.talles = [];
        this.categoria=categoria;
    }
    addTalle(talle) {
        this.talles.push(talle)
    }
}

class CarritoDeCompras {
    constructor() {
        this.productos = []
        this.name = ''
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
            cont++;
            this.total = this.total + A.price_orig
            Pedido=Pedido + cont + " - " + A.name +" $"+ A.price_orig   + "\n"
            }
        
        alert ( "Hola " + this.name + " su pedido es: \n" + Pedido + "\n Total: " + this.total);
         
        }


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


function pedirNUMERO(texto) {
    let valor = prompt(texto);
    while (isNaN(parseInt(valor)) ) {
        valor = prompt(texto);
    }
    return valor;
}


 function realizarPedido(array)
 {

     let eleccion=0;
     let menu='';
     let i=0;

    for (i=0;i < array.length ;i++ )
        {
            menu= menu +"" + (i+1) +" - "  + array[i].name + " $" + array[i].price_orig +"\n";
        }

    menu = menu +"\n"+"-1 - deshacer (elimina último)"

    menu = menu +"\n"+"0 - para finalizar"
     

    eleccion = pedirNUMERO("Por favor seleccione una opción del menú\n" + menu );

   
    while (eleccion<-1 || eleccion> array.length)
           { 
                eleccion = pedirNUMERO("opción incorrecta, Por favor seleccione una opción del menú\n" + menu );
            }


     while (eleccion!="0")

              {  
                 
                if (eleccion==-1 && cliente.productos.length>0) {
                    cliente.eliminarUltProducto();

                } 
                else    
                 {   
                    cliente.addProduct(array[eleccion-1]) ;  
                  }

                eleccion = pedirNUMERO("Por favor seleccione una opción del menú\n" + menu );

                while (eleccion<-1 || eleccion>array.length)
                    { 
                        eleccion = pedirNUMERO("opción incorrecta, Por favor seleccione una opción del menú\n" + menu );
                    }
             }
    

}

function HacerPedido(param)
{




const cliente = new CarritoDeCompras();

Listproducts.push (new Product('BJ-01','CAMISETA DE ARQUERO BOCA JUNIORS 21-22',3,12000,0,'BOCA'));
Listproducts.push (new Product('BJ-02','CAMISETA TITULAR OFICIAL BOCA JUNIORS 21-22',4,12000,10800,'BOCA'));
Listproducts.push (new Product('BJ-03','CAMISETA VISITANTE OFICIAL BOCA JUNIORS 21-22 ',5,12000,0,'BOCA'));
Listproducts.push (new Product('BJ-05','CAMPERA ANTHEM TIRO BOCA JUNIORS',4.5,12000,0,'BOCA'));
Listproducts.push (new Product('BJ-06','MEDIAS ADI 21 AMARILLA',3,2000,1800,'BOCA'));
Listproducts.push (new Product('BJ-08','REMERA ICONS BOCA JUNIORS MANGA LARGA',5,12000,10800,'BOCA'));
Listproducts.push (new Product('BJ-09','SHORTS TERCERA BOCA JUNIORS 22-23',3.5,8000,0,'BOCA'));
Listproducts.push (new Product('BJ-10','TERCERA CAMISETA BOCA JUNIORS 22-23',4.5,12000,10800,'BOCA'));
Listproducts.push (new Product('RP-01','CAMISETA DE ARQUERO RIVER PLATE 21-22',3,12000,0,'RIVER'));
Listproducts.push (new Product('RP-02','CAMISETA LOCAL RIVER PLATE 21-22',4,12000,10800,'RIVER'));
Listproducts.push (new Product('RP-03','CAMISETA RIVER PLATE ICONS',5,12000,10800,'RIVER'));
Listproducts.push (new Product('RP-04','CAMISETA TERCER UNIFORME RIVER PLATE 20-21',3.5,12000,0,'RIVER'));
Listproducts.push (new Product('RP-05','CAMISETA VISITANTE RIVER PLATE 21-22',4.5,12000,10800,'RIVER'));
Listproducts.push (new Product('RP-06','CAMPERA ROMPEVIENTOS RIVER PLATE',3,12000,0,'RIVER'));
Listproducts.push (new Product('RP-07','MEDIAS ADI 21 BLANCA',4,2000,1800,'RIVER'));
Listproducts.push (new Product('RP-09','MUSCULOSA TIRO RIVER PLATE',3.5,8000,0,'RIVER'));
Listproducts.push (new Product('SA-01','CAMISETA ALTERNATIVA ARGENTINA',4.5,12000,0,'ARGENTINA'));
Listproducts.push (new Product('SA-02','CAMISETA ALTERNATIVA OFICIAL ARGENTINA',3,12000,10800,'ARGENTINA'));
Listproducts.push (new Product('SA-03','CAMISETA DE ARQUERO TITULAR ARGENTINA 21',4,12000,0,'ARGENTINA'));
Listproducts.push (new Product('SA-04','CAMISETA TITULAR SELECCIÀN ARGENTINA MESSI 10',5,12000,0,'ARGENTINA'));
Listproducts.push (new Product('SA-05','GUANTES SELECCIÓN',3.5,6000,0,'ARGENTINA'));
Listproducts.push (new Product('SA-06','MEDIAS PANTORRILLAS AFA',4.5,2000,1800,'ARGENTINA'));
Listproducts.push (new Product('SA-08','REMERA ICON ARGENTINA',4,12000,10800,'ARGENTINA'));
Listproducts.push (new Product('SA-09','SHORTS TITULAR ARGENTINA',5,8000,0,'ARGENTINA'));

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

alert ("Primera entrega de desafio final de Pablo Federiconi (Agregando Clases y arrays)");

let Usuario = prompt("Por favor Ingrese su nombre");

cliente.setName(Usuario);

alert ("Hola " + cliente.name + ", Bienvenido a Ardilas, compre con confianza :)");


let equipo='';
equipo=param;


if (equipo=='')
 {
    equipo = pedirNUMERO("Por favor seleccione el equipo que desea comprar\n 1) River Plate \n 2) Boca Juniors \n 3) Selección Argentina \n 4) Todos los equipos \n 5) Salir");
    while (equipo<0 || equipo> 5)
    { 
        equipo = pedirNUMERO("Por favor seleccione el equipo que desea comprar\n 1) River Plate \n 2) Boca Juniors \n 3) Selección Argentina \n 4) Todos los equipos \n 5) Salir");
    }
}

switch (equipo){
    case "1":
        realizarPedido(equipo1);
        break;
    case '2':
        realizarPedido(equipo2);
        break;
    case '3':
        realizarPedido(equipo3);
        break;
    case '4':
        realizarPedido(Listproducts);
        break;
    default:
        alert("pp")
        break;
}

if (cliente.productos.length>0)
{
    cliente.getTotal();

    let opcion=0;
    
    opcion = prompt("¿Confirma el pedido? \n 1) Sí \n 2) No, quiero eliminar un producto \n 3)Vaciar carrito ");
    
    while (opcion <0 || opcion>3)
           { 
                opcion = pedirNUMERO("opción incorrecta, ¿Confirma el pedido? \n 1) Sí \n 2) No, quiero eliminar un producto \n 3)Vaciar carrito");
            }

            if (opcion==1 )  alert ("Pedido Confirmado");

    while (opcion!=1 )
    {

         switch (opcion){
                    case "1":
                        alert ("Pedido Confirmado");
                        break;
                    case "2":
                        opcion = pedirNUMERO("Seleccione el número del item que desea eliminar\n" + Pedido);
                        while (opcion <0 || opcion>cliente.productos.length)
                           { 
                                opcion = pedirNUMERO("Seleccione el número del item que desea eliminar\n" + Pedido);
                            }

                        cliente.eliminarProducto(opcion);
                        cliente.getTotal();

                        break;
                    case "3":
                        alert ("Se procedió a vaciar el carrito");
                        cliente.vaciarCarrito();   
                        cliente.getTotal();
                        break;
                    default:
                        break;
                }

    opcion = prompt("¿Confirma el pedido \n 1) Sí \n 2) No, quiero eliminar un producto \n 3)Vaciar carrito ");
    
    while (opcion <0 || opcion>3)
           { 
                opcion = pedirNUMERO("opción incorrecta, ¿Confirma el pedido? \n 1) Sí \n 2) No, quiero eliminar un producto \n 3)Vaciar carrito");
            }

    }

}

alert("Muchas gracias por su pedido, Vuelva Pronto");
}