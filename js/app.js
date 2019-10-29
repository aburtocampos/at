var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/home.html",
      controller: "homeController"
    })
    .when("/about", {
      templateUrl: "views/about.html",
      controller: "aboutController"
    })
    .when('/blog', {
        redirectTo: function() {
            window.location.href = 'https://aburtito.com';
        }
    })
    .when("/dblog", {
      templateUrl: "views/detailPost.html",
      controller: "detblogController"
    })
    .when("/contact", {
      templateUrl: "views/contact.html",
      controller: "contactController"
    })
    .when("/addpost", {
      templateUrl: "views/addPost.html",
      controller: "addpostController"
    })
    //var contenido = '<p>Lorem ipsum...</p>';

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
      redirectTo: "/"
    });
});

// Controladores

app.controller("homeController", [
  "$scope",
  "$location",
  function($scope, $location) {
    $scope.isActive = function(destination) {
      return destination === $location.path();
    };

    $scope.leyendas = {
      titulo1: "Aburto Technologies",
      subtitulo1: "Calidad y pasión, por nuestro trabajo.",
      contenido1: "Agencia Digital de Diseño y Desarrollo Web"
    };
  }
]);

app.controller("aboutController", function($scope) {});

app.run(function($rootScope, $templateCache) {
  $rootScope.$on("$viewContentLoaded", function() {
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

app.controller("blogController", function($scope, $http) {
  // $scope.posts = [];
  $http
    .get(
      "https://public-api.wordpress.com/rest/v1.1/sites/aburtotech.wordpress.com/posts/"
    )
    .then(function(response) {
      $scope.arrayOfPosts = response.data.posts;
      console.log(response.data.posts);

      //var contenido = '<p>Lorem ipsum...</p>';
      //var texto = contenido.replace(/<[^>]*>?/g, '');
    });

  //TODO: hacer que el blog tambien se guarde en la cache
});

app.controller("detblogController", function($scope, $http, idp) {
  // $scope.posts = [];
  // postService.getPosts().then(function(response){
  //      $scope.arrayOfPosts1 = response;
  // });
  $scope.idp = idp;
  $http
    .get(
      "https://public-api.wordpress.com/rest/v1.1/sites/aburtotech.wordpress.com/posts/" +
        idp
    )
    .then(function(response) {
      $scope.arrayOfPosts1 = response.data.posts;
      console.log(response.data.posts);
    });
  //TODO: hacer que el blog tambien se guarde en la cache
});

// app.factory('postService', function(){
//   return function getAllpost(){
//     $http.get('https://public-api.wordpress.com/rest/v1.1/sites/aburtotech.wordpress.com/posts/').then(
//       function (response){
//         $scope.arrayOfPosts = response.data.posts;
//         console.log(response.data.posts);

//       })
//   };
// })

app.factory("wpFactory", function($http, $q) {
  var url =
    "https://public-api.wordpress.com/rest/v1.1/sites/aburtotech.wordpress.com/posts/";
  function getPosts(number) {
    return $http.get(url + number).then(handleSuccess, handleError);
  }
  function handleSuccess(response) {
    return response.data;
  }
  function handleError(response) {
    if (!angular.isObject(response.data) || !response.data.message) {
      return $q.reject("An unknown error occurred.");
    }
    return $q.reject(response.data.message);
  }
  return {
    getPosts: getPosts
    // getMediaDataForId: getMediaDataForId
  };
});

// app.factory('postService', ['$http', function($http) {
//     var all, odds = [];
//     var getPosts = function() {
//         return $http.get("https://public-api.wordpress.com/rest/v1.1/sites/aburtotech.wordpress.com/posts/")
//         .then(function(response) {
//           all = response.records;
//           angular.forEach(all, function(c, i) {
//             if (i % 2 == 1) {
//               odds.push(c);
//             }
//           });
//           return odds
//         });
//     }
//     return {
//         getPosts: getPosts
//     };
// }]);

app.controller("contactController", function($scope) {});
