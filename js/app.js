var app = angular.module('app', ['ngRoute']);

app.controller('homeCtrl', function ($scope, $location) {

    $scope.submit = function (event) {
        event.preventDefault();
        localStorage.setItem('homeData', JSON.stringify($scope.user));
        $location.path('/contact');
    }
    var homePage = localStorage.getItem('homeData');

    if (homePage) {
        $scope.user = JSON.parse(homePage);
    }
});
app.controller('contactCtrl', function ($scope,$location) {
    $scope.submit = function (event) {
        event.preventDefault();
        localStorage.setItem('contactData',JSON.stringify($scope.user));
        $location.path('/family');
    }
    var contactPage = localStorage.getItem('contactData');
    if(contactPage){
        $scope.user = JSON.parse(contactPage);
    }
});
app.controller('familyCtrl', function ($scope,$location) {
    $scope.submit = function (event) {
        event.preventDefault();
        localStorage.setItem('familyData',JSON.stringify($scope.user));
       // location.path('');
    }
    var familyPage = localStorage.getItem('familyData');
    if(familyPage){
        $scope.user = JSON.parse(familyPage);
    }
});
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "template/home.html"
        })
        .when('/contact', {
            templateUrl: "template/contact.html"
        })
        .when('/family', {
            templateUrl: "template/family.html"
        });
});