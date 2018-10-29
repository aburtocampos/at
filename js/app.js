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


app.controller('homeController',['$scope','$location',function($scope,$location){
    $scope.isActive = function(destination){
    return destination === $location.path();
  }
}]);

app.controller('aboutController', function($scope){


});

// app.controller('blogController',function($scope){

// });


app.controller("blogController",['$scope','$log','$http',function($scope,$log,$http) {
 
  $http({
    method: 'GET', 
    url: 'https://public-api.wordpress.com/rest/v1.1/sites/aburtotech.wordpress.com/posts/'
  }).success(function(data, status, headers, config) {
     // $scope.seguro=data;
      console.log(data);
  }).error(function(data, status, headers, config) {
      console.log("Ha fallado la petición. Estado HTTP:"+status);
  });
     
    
}]);



app.controller('contactController',function($scope){
  
});