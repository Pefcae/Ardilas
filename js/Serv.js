
const fetchCotizacion = () => {
	fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales').then((response) =>response.json())
	.then((result)=>{
        MostrarCotizacion(result)
	}).catch((err)=>{

		console.error(err)
	})

	}

const MostrarCotizacion = (body) =>{
    

    let cotizacion = document.getElementById('cotizacion')
    cotizacion.innerHTML = 'Cotización Dolar: ' + body[0].casa.compra
    cotizacion.classList.add('text-sm-center','text-md-center','text-lg-center' )

}


const timeout =()=> {
	setTimeout(()=>{
			Swal.fire({
				title: 'Ganaste un código de descuento: Coder2022',
				width: 600,
				padding: '3em',
				color: '#716add',
				background: '#fff',
				
			})


	},12000	);
}
//ejecuta dps de cierto tiempo (2000)


const interval = setInterval(() => {
	fetchCotizacion()
	},10000)


fetchCotizacion()
