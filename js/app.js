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


app.controller('blogController', ['$scope', '$http', function($scope, $http) {

  //Buttons Settings
  // $scope.submit = true;
  // $scope.update = false;
  // $scope.cancel = false;
  // $scope.userid = true;

  //Getting Users List
  //$http GET function
  $http({
    method: 'GET',
    url: 'https://public-api.wordpress.com/rest/v1.1/sites/aburtotech.wordpress.com/posts/'

  }).then(function successCallback(response) {
      console.log(response.data);
   // $scope.users = response.data;

  }, function errorCallback(response) {

    alert("malo");

  });

}]);

app.controller('contactController',function($scope){
  
});
