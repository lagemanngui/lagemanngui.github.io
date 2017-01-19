var app = angular.module('myResume', []);

app.controller("resumeController", function($scope)
{
  //Cover Information
  $scope.profileImage = "profile.jpg"
  $scope.name = "Nathalia";
  $scope.course = "Ciência da Computação";
  $scope.college = "Universidade Federal de Pelotas"

  //Local Information, etc.
  $scope.city = "Pelotas";
  $scope.country = "Brasil";
  $scope.site = "lagemanngui.github.io";

  //Contact Information
  $scope.phone = "+55 (53) 9999 12915";
  $scope.mail = "guilherme.dlagemann@gmail.com"

  //Set to "null" if you dont want to show the social button
  //$scope.linkedin = "null";
  $scope.linkedin = "guilhermedlagemann";
  $scope.github = "lagemanngui";
  $scope.facebook = "guilherme.lagemann";
  $scope.twitter = "lagemanngui";




});
