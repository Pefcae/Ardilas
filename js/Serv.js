

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
	if (contador>=5){
		clearInterval	(interval)
		console.log('Fin')
	}
},1000)


const fetchLocalData = () => {
	//fetch('./data.json').then((response) =>response.json())
	fetch('https://pefcae.github.io/Ardilas/data.json').then((response) =>response.json())
	.then((result)=>{
		//	renderContactSection(result.contact)
		//	renderTitle(result.titleSection)
		ListaDeProductos(result.productos)

	}).catch((err)=>{

		console.error(err)
	})

	}

const ListaDeProductos = (body) =>{
	body.forEach((product) => {
                        
	Listproducts.push(product)


	})


}

const renderTitle = (body) => {
	console.log(body)
	//let container= document.getElementById('contenedor')
	//let title = document.createElement('h1')
	//title.textContent=body.title
	//title.style.color=body.styles.color
	//container.append(tittle)

}

const renderContactSection = (body) => {
	console.log(body)
}

	fetchLocalData()
	timeout();