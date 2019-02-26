 var app = angular.module('myApp', ['ngRoute']);
  
  app.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl : 'views/home.html',
      controller  : 'homeController'
    })
     .when('/about', {
      templateUrl : 'views/about.html',
      controller  : 'aboutController'
    })
    .when('/blog', {
      templateUrl : 'views/blog.html',
      controller  : 'blogController'
    })
     .when('/blog', {
      templateUrl : 'views/detailPost.html',
      controller  : 'detblogController'
    })
     .when('/contact', {
      templateUrl : 'views/contact.html',
      controller  : 'contactController'
    })
     .when('/addpost', {
      templateUrl : 'views/addPost.html',
      controller  : 'addpostController'
    })
    // .when('/', {
    //   resolve:{
    //     "check": function($location){
    //         if(!$rootScope.loggedIn){
    //           $location.path('/');
    //         }
    //     }
    //   },

    //   templateUrl : 'view/home.html'
    
    //  // controller  : 'homeController'
    // })
    .otherwise({
      redirectTo: '/'
    });

});


// Controladores


app.controller('homeController',['$scope','$location',function($scope,$location){
    $scope.isActive = function(destination){
        return destination === $location.path();
     }

    $scope.leyendas = {
        titulo1:'Aburto Technologies',
        subtitulo1:'Calidad y pasión, por nuestro trabajo.',
        contenido1:'Agencia de Publicidad Digital',
     
        titulo2:'Diseño Web',
        subtitulo2:'Calidad y pasión, por nuestro trabajo.',
        contenido2:'Agencia de Publicidad Digital',

        titulo3:'Manejo de Redes Sociales',
        subtitulo3:'Calidad y pasión, por nuestro trabajo.',
        contenido3:'Agencia de Publicidad Digital'
      }



}]);

app.controller('aboutController', function($scope){


});

app.run(function($rootScope, $templateCache) {
   $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
   });
});













// app.controller('blogController', ['$scope', '$http', function($scope, $http) {

//   $http({
//     method: 'GET',
//     url: 'https://public-api.wordpress.com/rest/v1.1/sites/aburtotech.wordpress.com/posts/'

//   }).then(function successCallback(response) {
//       console.log(response.posts);
//       $scope.posts = response.posts;
   

//   }, function errorCallback(response) {

//     alert("malo");

//   });

// }]);

// app.controller('blogController',['$scope', '$http','$log', function($scope, $http, $log) {
// // $scope.posts = [];
//    $http({
//     method: 'GET',
//      url: 'https://public-api.wordpress.com/rest/v1.1/sites/aburtotech.wordpress.com/posts/'})

//    .then(function(data){
//        $scope.posts = data;
//        $log.info(data);
//    }, function(data){
//      $scope.error = data;
//    });

//    // .error(function(err){
//    //    console.log(err);
//    // });

// }]);



app.controller('blogController', function($scope, $http) {
// $scope.posts = [];
   $http.get('https://public-api.wordpress.com/rest/v1.1/sites/aburtotech.wordpress.com/posts/').then(
      function (response){
        $scope.arrayOfPosts = response.data.posts;
        console.log(response.data.posts);

      })

//TODO: hacer que el blog tambien se guarde en la cache


})

app.controller('detblogController', function($scope, $http) {
// $scope.posts = [];
   $http.get('https://public-api.wordpress.com/rest/v1.1/sites/aburtotech.wordpress.com/posts/').then(
      function (response){
        $scope.arrayOfPosts = response.data.posts;
        console.log(response.data.posts);

      })

//TODO: hacer que el blog tambien se guarde en la cache


})





app.controller('contactController',function($scope){
  
});