//asignar un ombre y version al cache

const CACHE_NAME = 'v1_cache_aburto_tech', 
urlsToCache = [
'./',
'https://fonts.googleapis.com/css?family=Poppins',
'https://fonts.googleapis.com/css?family=Righteous',
'index.html',
'./css/bootstrap.min.css',
'./font-awesome-4.7.0/css/font-awesome.min.css',
'./font-awesome-4.7.0/fonts/fontawesome-webfont.woff2',
'./font-awesome-4.7.0/fonts/fontawesome-webfont.woff',
'./css/style.css',
'./js/jquery-3.3.1.min.js',
'./js/jquery.touchSwipe.js',
'./js/angular.min.js',
'./js/angular-route.min.js',
'./js/popper.min.js',
'./js/bootstrap.min.js',
'./js/bootstrap-swipe-carousel.js',
'./js/app.js',
'./js/script.js',
'./images/logo3.png',
'./images/backg8.png',
'./images/backg7.png',
'./images/backg6.png',
'./images/team3.png',
'./images/team2.png',
'./images/team1.png',
'./images/backg5p.png',
'./images/logonuevo1.png',
'./images/social.jpg',
'./images/desk.jpg',
'./images/des.jpg',
'./images/de.jpg',
'./images/ab.jpg',
'./views/home.html',
'./views/about.html',
'./views/blog.html',
'./views/contact.html',
'./views/addPost.html',
'./manifest.json'
]



//durante la instalacion , se almacenan en cache los activos estaticos
self.addEventListener('install', e => {
  console.log('Evento: SW Instalado')
   e.waitUntil(
   		caches.open(CACHE_NAME)
   		.then(cache =>{
        console.log('Archivos en cache')
   			return cache.addAll(urlsToCache)
   			.then( ()=> self.skipWaiting())
     
   		})
   		.catch(err => console.log('Fallo registro de cache',err))
   	)
})



//una vez instalado el SW se activa y busca los recursos offline
self.addEventListener("activate", e => {
  console.log('Evento: SW Activado')
	const cacheWhitelist = [CACHE_NAME]
	e.waitUntil(
		caches.keys()
		.then(cacheNames => {
			return Promise.all(
			cacheNames.filter(cacheName=>{
				//eliminamos lo que ya no se necesita en cache
				if (cacheWhitelist.indexOf(cacheName) === -1){
       
					return caches.delete(cacheName)

				}
			})
		)
	  })
	//le indica al sw activar el cache actual

	.then(()=>{
     console.log('Cache actualizado')
     return self.clients.claim()
  })
	)
})



//recupera los recursos de internet cuando esta en linea y actualiza los datos locales en cache con los de internet
self.addEventListener('fetch', e => {
   console.log('Evento: SW Recuperando')
  //responder con el objeto en cache o buscar la url real
    e.respondWith(
  	 caches.match(e.request)
  	 .then(res => {
       console.log('Recuperando cache')
  	 	if (res){
  	 		//recuperando del cache
  	 		return res
  	 	}
  	 	//recupera de url
      console.log('Recuperando de internet')
        return fetch(e.request)

  	 })

  	)
})





// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//     .then(function(response) {
//       return response || fetchAndCache(event.request);
//     })
//   );
// });

// function fetchAndCache(url) {
//   return fetch(url)
//   .then(function(response) {
//     // Check if we received a valid response
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return caches.open(CACHE_NAME)
//     .then(function(cache) {
//       cache.put(url, response.clone());
//       return response;
//     });
//   })
//   .catch(function(error) {
//     console.log('Request failed:', error);
//     // You could return a custom offline 404 page here
//   });
// }



