var app = angular.module('foodallergenslabApp', [
  'ngRoute', 'ui.bootstrap', 'pascalprecht.translate'
]);

app.config(['$translateProvider', function($translateProvider) {
  $translateProvider.translations('en', {
    TITLE: 'Welcome!',
    MESSAGE: 'This app supports your lanaguage!',
	BUTTON_LANG_EN: 'english',
    BUTTON_LANG_DE: 'greek',
	HOME:'About us',
	SERVICES:'Services',
	ACCREDITATION:'accreditation',
	CERTIFIED:'Certified Reference Material',
	RESEARCH:'',
	USEFUL:'',
	CONTACT:'Contact us',
	LAB:"Laboratory ....",
	ANAL:"Analysis with the latest ..."
  }).translations('el', {
    TITLE: 'Επιτελους!',
    MESSAGE: 'This app supports your ελληνικα!',
	BUTTON_LANG_EN: 'english',
    BUTTON_LANG_DE: 'greek',
	HOME:'Εταιρεία',
	SERVICES:'Αναλυσεις',
	ACCREDITATION:'Εξοπλισμός',
	CERTIFIED:'Σεμιναρια',
	RESEARCH:'Ερευνητικά εργα',
	USEFUL:'Δημοσιευματα',	
	CONTACT:'Επικοινωνία',
	LAB:"Εργαστηριακοί έλενχοι που ....",
	ANAL:"Αναλύσεις με τον τελευταίο εργαστηριακό εξοπλισμό"
  });

  $translateProvider.preferredLanguage('el');
}]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
	.when("/home", {templateUrl: "partials/home.html", controller: "PageCtrl"})
	.when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
	.when("/accreditation", {templateUrl: "partials/accreditation.html", controller: "PageCtrl"})	
	.when("/certified", {templateUrl: "partials/certified.html", controller: "PageCtrl"})		
	.when("/useful", {templateUrl: "partials/useful.html", controller: "PageCtrl"})	
	.when("/research", {templateUrl: "partials/research.html", controller: "PageCtrl"})		
	.when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})			
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ( $scope, $routeParams, $location, $translate/*, $http */) {
  
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
  

  $scope.myInterval = 3000;


  $scope.slides = [
    {
      image: 'pics/hunting1.jpg',
	  text: 'LAB'
    },
    {
      image: 'pics/hunting2.jpg',
	  text: 'ANAL'
    }
  ];


});