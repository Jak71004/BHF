var module = angular.module('BounceHouse', ['ngRoute']);

module.config(function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'home.html',
        controller: 'mainCtrl'
    }).
    when('/rentals', {
        templateUrl: 'rentals.html',
        controller: 'rentalCtrl'
    }).
    when('/rentals/:classType', {
        templateUrl: 'rentals.html',
        controller: 'rentalCtrl'
    }).
    when('/specials', {
        templateUrl: 'specials.html',
        controller: 'specialCtrl'
    }).
    when('/faq', {
        templateUrl: 'faq.html',
        controller: 'faqCtrl'
    }).
    when('/contactus', {
        templateUrl: 'contactus.html',
        controller: 'contactCtrl'
    }).
    otherwise({redirectTo:'/home'});
});

module.controller('mainCtrl', function ($scope) {
    $scope.rentalClassification = [
        { "class": "bounce", "title":"Bounce Houses" },
        { "class": "combo", "title": "Combos" },
        { "class": "slide", "title": "Slides" },
        { "class": "game", "title": "Games" },
        { "class": "concession", "title": "Concessions" },

    ];
});

module.controller('rentalCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.rentals = [
        { "id": 0, "name": "Rental Name 0", "type": "combo" },
        { "id": 1, "name": "Rental Name 1", "type": "bounce" },
        { "id": 2, "name": "Rental Name 2", "type": "slide" },
        { "id": 3, "name": "Rental Name 3", "type": "concession" },
        { "id": 4, "name": "Rental Name 4", "type": "bounce" },
    ];

    classFilter = function (rental) {
        return $scope.classType;
    };

    $scope.classType = $routeParams.classType;
    $scope.classFilter = classFilter;

}]);

module.controller('specialCtrl', ['$scope', function ($scope) {
    $scope.specials = [
        { "id": 0, "title": "Special's Title", "description": "Describe this special", "dateRang": "What dates is this special valid for?" },
        { "id": 1, "title": "Special's Title", "description": "Describe this special", "dateRang": "What dates is this special valid for?" },
        { "id": 2, "title": "Special's Title", "description": "Describe this special", "dateRang": "What dates is this special valid for?" },
    ];

    
    $scope.show = false;

    $scope.ShowDetails = function () { $scope.show = !$scope.show };
}]);

module.controller('faqCtrl', function ($scope) {
    $scope.questions = [
        { "id": 0, "questionTitle": "Question Title", "question": "Your Question", "answerTitle":"Answer Title", "answer": "Your Answer" },
        { "id": 1, "questionTitle": "Question Title", "question": "Your Question", "answerTitle": "Answer Title", "answer": "Your Answer" },
        { "id": 2, "questionTitle": "Question Title", "question": "Your Question", "answerTitle": "Answer Title", "answer": "Your Answer" },
        { "id": 3, "questionTitle": "Question Title", "question": "Your Question", "answerTitle": "Answer Title", "answer": "Your Answer" },
    ];
});

module.controller('contactCtrl', function ($scope) {
    $scope.contactDetails = [
        { "name": "Company Name", "address1": "Street Address", "address2": "", "city": "City", "state": "State", "phone": "(555) 555-5555" },
    ];
});
