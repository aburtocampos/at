if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./serviceworker.js')
	.then(reg => console.log('Registro de SW Exitoso'))
	.catch(err => console.warn('Error en registro de SW',err))
}


