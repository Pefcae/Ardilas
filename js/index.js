let Pedido ='';
const Listproducts =[];

class Product {
    constructor(name, price,categoria) {
        this.name = name;
        this.price = price;
        this.categoria=categoria;
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
            this.total = this.total + A.price
            Pedido=Pedido + cont + " - " + A.name +" $"+ A.price   + "\n"
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


 function realizarPedido()
 {

     let eleccion=0;
     let menu='';
     let i=0;

    for (i=0;i < Listproducts.length ;i++ )
        {
            menu= menu +"" + (i+1) +" - "  + Listproducts[i].name + " $" + Listproducts[i].price +"\n";
        }

    menu = menu +"\n"+"-1 - deshacer (elimina último)"

    menu = menu +"\n"+"0 - para finalizar"
     

    eleccion = pedirNUMERO("Por favor seleccione una opción del menú\n" + menu );

   
    while (eleccion<-1 || eleccion> Listproducts.length)
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
                    cliente.addProduct(Listproducts[eleccion-1]) ;  
                  }

                eleccion = pedirNUMERO("Por favor seleccione una opción del menú\n" + menu );

                while (eleccion<-1 || eleccion>Listproducts.length)
                    { 
                        eleccion = pedirNUMERO("opción incorrecta, Por favor seleccione una opción del menú\n" + menu );
                    }
             }
    

}


const cliente = new CarritoDeCompras();

Listproducts.push (new Product('Remera River Plate', 500,1));
Listproducts.push (new Product('Short River Plate', 400,1));
Listproducts.push (new Product('Remera Boca Juniors', 200,2));
Listproducts.push (new Product('Short Boca Juniors', 300,2));
Listproducts.push (new Product('Remera Seleccion Argentina', 100,3));
Listproducts.push (new Product('Short Seleccion Argentina', 100,3));


alert ("Primera entrega de desafio final de Pablo Federiconi (Agregando Clases y arrays)");

let Usuario = prompt("Por favor Ingrese su nombre");

cliente.setName(Usuario);

alert ("Hola " + cliente.name + ", Bienvenido a Ardilas, compre con confianza :)");

realizarPedido();

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


alert("Muchas gracias por su pedido, Vuelva Pronto");

