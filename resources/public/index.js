var app = angular.module('recipes', []);

app.controller('RecipesController', function ($scope, $http) {

  $scope.category = null;
  $scope.recipes = [];
    
  $scope.loadRecipes = function(category) {
    $scope.category = category;
    $http({url: "/api/recipes/" + category, method:"GET"})
    .success(function(data) {
      console.log("SUCCESS", data);
      $scope.recipes = data.recipes;
    })
    .error(function(/*data, status, headers, config*/){
      console.log("ERROR");
    });
  };

  $scope.loadWeather = function(category) {
    $scope.category = category;
    $http({url: "/weather", method:"GET"})
    .success(function(data) {
      console.log("SUCCESS", data);
      $scope.recipes = data;
    })
    .error(function() {
      console.log("ERROR");
    });
  };
  
  $scope.loadRecipes("bacon");

});
