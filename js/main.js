var app = angular.module('foodallergenslabApp', [
  'ngRoute', 'ui.bootstrap', 'pascalprecht.translate'
]);

app.config(['$translateProvider', function($translateProvider) {
  $translateProvider.translations('en', {
    TITLE: 'Welcome!',
    MESSAGE: 'This app supports your lanaguage!',
	BUTTON_LANG_EN: 'english',
    BUTTON_LANG_DE: 'greek',
	HOME:'Home',
	NEWS:'News',
	SERVICES:'Services',
	ACCREDITATION:'accreditation',
	CERTIFIED:'Certified Reference Material',
	RESEARCH:'Research',
	USEFUL:'',
	CONTACT:'Contact us',
	ABOUT:'About us',
	LAB:"Laboratory ....",
	ANAL:"Analysis with the latest ..."
  }).translations('el', {
    TITLE: 'Επιτελους!',
    MESSAGE: 'This app supports your ελληνικα!',
	BUTTON_LANG_EN: 'english',
    BUTTON_LANG_DE: 'greek',
	HOME:'Εταιρία',
	NEWS:'Νέα',
	SERVICES:'Υπηρεσίες',
	ACCREDITATION:'Εξοπλισμός',
	CERTIFIED:'Σεμιναρια',
	RESEARCH:'Έρευνα',
	USEFUL:'Δημοσιευματα',	
	CONTACT:'Επικοινωνία',
	ABOUT:'Σχετικά με εμας',
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
	.when("/news", {templateUrl: "partials/news.html", controller: "PageCtrl"})
	.when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
	.when("/accreditation", {templateUrl: "partials/accreditation.html", controller: "PageCtrl"})	
	.when("/certified", {templateUrl: "partials/certified.html", controller: "PageCtrl"})		
	.when("/useful", {templateUrl: "partials/useful.html", controller: "PageCtrl"})	
	.when("/research", {templateUrl: "partials/research.html", controller: "PageCtrl"})		
	.when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})	
	.when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})	
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

