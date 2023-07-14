var app = angular.module("ymmkoGitHub", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/about_me", {
        templateUrl : "about_me.htm"
    });
});