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
	fetch('./data.json').then((response) =>response.json())
	.then((result)=>{
			console.log(result)
	}).catch((err)=>{
		console.error(err)
	})

	}


	fetchLocalData()