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


app.controller('homeController',function($scope){
  
});

app.controller('aboutController',function($scope){
  
});

app.controller('blogController',function($scope){

});

app.controller('contactController',function($scope){
  
});