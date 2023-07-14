var app = angular.module("ymmkoGitHub", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/about_me", {
        templateUrl : "about_me.htm"
    })
    .when("/resume", {
        templateUrl : "resume.htm"
    });
});