

const timeout =()=> {
	setTimeout(()=>{
//	 	alert('SetTimeout')
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



let contador=0
const interval = setInterval(() => {
	contador ++
	console.log('contador' ,contador)
	fetchCotizacion()

	/*if (contador>=5){
		clearInterval	(interval)
		console.log('Fin')
	}*/
},10000)


