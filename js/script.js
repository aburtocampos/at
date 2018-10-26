if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./serviceworker.js',{})
	.then(reg => console.log('SW Soportado'))
	.catch(err => console.warn('SW no soportado',err))
}


