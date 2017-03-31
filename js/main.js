var app = angular.module('foodallergenslabApp', [
  'ngRoute', 'ui.bootstrap', 'pascalprecht.translate', 'angulartics', 'angulartics.google.analytics', 'ngSanitize', 'btford.markdown'
]);


app.config(['$translateProvider', function($translateProvider) {
	$translateProvider.useSanitizeValueStrategy('sanitizeParameters');
    $translateProvider.preferredLanguage('el');// is applied on first load
    $translateProvider.useStaticFilesLoader({
        prefix: 'lng/locale-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
    });

  
}]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider, $analyticsProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/el/home.html", controller: "PageCtrl"})
	.when("/:lng", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/home.html';
            },controller: "PageCtrl"})	
	.when("/:lng/home", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/home.html';
            },controller: "PageCtrl"})	
	.when("/:lng/company1", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/company1.html';
            },controller: "PageCtrl"})	
	.when("/:lng/company2", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/company2.html';
            },controller: "PageCtrl"})	
	.when("/:lng/company3", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/company3.html';
            },controller: "PageCtrl"})	
	.when("/:lng/company4", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/company4.html';
            },controller: "PageCtrl"})	
	.when("/:lng/news0", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/news0.html';
            },controller: "PageCtrl"})	
	.when("/:lng/news1", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/news1.html';
            },controller: "PageCtrl"})	
	.when("/:lng/news2", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/news2.html';
            },controller: "PageCtrl"})	
	.when("/:lng/news3", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/news3.html';
            },controller: "PageCtrl"})	
	.when("/:lng/news4", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/news4.html';
            },controller: "PageCtrl"})	
	.when("/:lng/news5", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/news5.html';
            },controller: "PageCtrl"})	
	.when("/:lng/news6", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/news6.html';
            },controller: "PageCtrl"})	
	.when("/:lng/news7", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/news7.html';
            },controller: "PageCtrl"})	
	.when("/:lng/services1", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/services1.html';
            },controller: "PageCtrl"})	
	.when("/:lng/services2", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/services2.html';
            },controller: "PageCtrl"})	
	.when("/:lng/services3", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/services3.html';
            },controller: "PageCtrl"})	
	.when("/:lng/services4", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/services4.html';
            },controller: "PageCtrl"})	
	.when("/:lng/services5", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/services5.html';
            },controller: "PageCtrl"})	
	.when("/:lng/services6", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/services6.html';
            },controller: "PageCtrl"})		
	.when("/:lng/certification1", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/certification1.html';
            },controller: "PageCtrl"})	
	.when("/:lng/certification2", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/certification2.html';
            },controller: "PageCtrl"})	
	.when("/:lng/certification3", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/certification3.html';
            },controller: "PageCtrl"})	
	.when("/:lng/certification4", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/certification4.html';
            },controller: "PageCtrl"})	
	.when("/:lng/certification5", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/certification5.html';
            },controller: "PageCtrl"})	
	.when("/:lng/certification6", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/certification6.html';
            },controller: "PageCtrl"})	
	.when("/:lng/certification7", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/certification7.html';
            },controller: "PageCtrl"})	
	.when("/:lng/certification8", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/certification8.html';
            },controller: "PageCtrl"})		
	.when("/:lng/contact1", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/contact1.html';
            },controller: "PageCtrl"})	
	.when("/:lng/contact2", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/contact2.html';
            },controller: "PageCtrl"})	
	.when("/:lng/contact3", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/contact3.html';
            },controller: "PageCtrl"})	
	.when("/:lng/newslatest1", {templateUrl: function(urlattr){
                return 'partials/' + urlattr.lng + '/newslatest1.html';
            },controller: "PageCtrl"})	

    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ( $scope, $routeParams, $location, $translate /*$routeParams, $http */) {
  $scope.lng = 'el';

  $scope.changeLanguage = function (key) {
    $translate.use(key);
	$scope.lng = key;
	var urlloc = $location.path();
	$location.path('/'+key+String(urlloc.substr(3)));
  };

  $scope.myInterval = 3000;

  $scope.slides = [
    {
      image: 'pics/hunting1.jpg',
	  text: 'CAROUSEL1'
    },
    {
      image: 'pics/hunting2.jpg',
	  text: 'CAROUSEL2'
    }
  ];
});
		
app.directive('myMap', function() {
    // directive link function
    var link = function(scope, element, attrs) {
        var map, infoWindow;
        var markers = [];
        
        // map config
        var mapOptions = {
            center: new google.maps.LatLng(45, 25),
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };
        
        // init the map
        function initMap() {
            if (map === void 0) {
                map = new google.maps.Map(element[0], mapOptions);
            }
        }    
        
        // place a marker
        function setMarker(map, position, title, content) {
            var marker;
            var markerOptions = {
                position: position,
                map: map,
                title: title,
                icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
            };

            marker = new google.maps.Marker(markerOptions);
            markers.push(marker); // add marker to array
            
            google.maps.event.addListener(marker, 'click', function () {
                // close window if not undefined
                if (infoWindow !== void 0) {
                    infoWindow.close();
                }
                // create new window
                var infoWindowOptions = {
                    content: content
                };
                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                infoWindow.open(map, marker);
            });
        }
        
        // show the map and place some markers
        initMap();
        
        setMarker(map, new google.maps.LatLng(35.3643708, 24.4820373), 'Κρήτη - Ελλάδα', 'Βιολί Χαράκι, Ρέθυμνο, ΤΚ 74100, Τηλ.: 2831024423');
        setMarker(map, new google.maps.LatLng(38.0695701, 23.7216978), 'Αθηνα - Ελλάδα', 'Βάρναλη Κ. 40, Ν. Ιωνία ,ΤΚ14231, Τηλ.: 2102712498');
        setMarker(map, new google.maps.LatLng(34.9313744, 33.5954297), 'Κύπρος', 'Καλοψίδας 38, Λιβάδια, TK 7060, Τηλ:+357 24669934');
		setMarker(map, new google.maps.LatLng(52.2547529, 20.998372), 'Poland', '17 Bonifraterska str., Warsaw, 00-203, Tel. +4822 3325904');
				
    };
    
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
});

