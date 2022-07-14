const timeout =()=> {
	setTimeout(()=>{
	 	alert('SetTimeout')

	},2000	);
}
//ejecuta dps de cierto tiempo (2000)
timeout();


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
			console.log(result)
			renderContactSection(result.contact)
			renderTitle(result.titleSection)
	}).catch((err)=>{

		console.error(err)
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