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
	COMPANY:'Company',	
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
	HOME:'Αρχική',
	COMPANY:'Εταιρία',
	COMPANY1:'Προφίλ',
	COMPANY2:'Ιστορία',
	COMPANY3:'Εργαστήρια',
	COMPANY4:'Αποστολή-Όραμα-Αξίες-Κοινωνική Εταιρική Ευθύνη',
	NEWS:'Νέα-Δραστηριοτητες',
	NEWS1:'Νέα',
	NEWS2:'Έρευνα',
	NEWS3:'Εκθέσεις',
	NEWS4:'Παρουσιάσεις',
	NEWS5:'Συνέδρια κ.α.',	
	SERVICES:'Υπηρεσίες',
	SERVICES1:'Εργαστηριακές Αναλύσεις',
	SERVICES2:'Εξοπλισμός Ελέγχου Ποιότητας',
	SERVICES3:'CRM & QuEChERS',	
	SERVICES4:'Υπηρεσία Ελέγχου Ετικέτας',
	SERVICES5:'Έρευνα & Ανάπτυξη',
	SERVICES6:'Εκπαίδευσεις-Σεμινάρια',		
	CERTIFICATION:'Πιστοποιήσεις',
	CERTIFICATION1:'ISO',
	CERTIFICATION2:'ΕΣΥΔ',
	CERTIFICATION3:'ΕΟΦ',
	CERTIFICATION4:'FEDIOL',
	CERTIFICATION5:'FIL-IDF',
	CERTIFICATION6:'IOOC',	
	CONTACT:'Επικοινωνία',
	CONTACT1:'Λίστα εργαστηρίων',
	CONTACT2:'Προσωπικό',
	CONTACT3:'Γενικές Πληροφορίες',
	CONTACT4:'Αποτελέσματα Αναλύσεων',
	CONTACT5:'Εμπορικό Τμήμα',
	CONTACT6:'Οικονομικό Τμήμα',	
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
	.when("/company", {templateUrl: "partials/company.html", controller: "PageCtrl"})	
	.when("/company1", {templateUrl: "partials/company1.html", controller: "PageCtrl"})	
	.when("/company2", {templateUrl: "partials/company2.html", controller: "PageCtrl"})	
	.when("/company3", {templateUrl: "partials/company3.html", controller: "PageCtrl"})	
	.when("/company4", {templateUrl: "partials/company4.html", controller: "PageCtrl"})		
	.when("/news", {templateUrl: "partials/news.html", controller: "PageCtrl"})
	.when("/news1", {templateUrl: "partials/news1.html", controller: "PageCtrl"})
	.when("/news2", {templateUrl: "partials/news2.html", controller: "PageCtrl"})
	.when("/news3", {templateUrl: "partials/news3.html", controller: "PageCtrl"})
	.when("/news4", {templateUrl: "partials/news4.html", controller: "PageCtrl"})
	.when("/news5", {templateUrl: "partials/news5.html", controller: "PageCtrl"})
	.when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
	.when("/services1", {templateUrl: "partials/services1.html", controller: "PageCtrl"})
	.when("/services2", {templateUrl: "partials/services2.html", controller: "PageCtrl"})
	.when("/services3", {templateUrl: "partials/services3.html", controller: "PageCtrl"})
	.when("/services4", {templateUrl: "partials/services4.html", controller: "PageCtrl"})
	.when("/services5", {templateUrl: "partials/services5.html", controller: "PageCtrl"})
	.when("/services6", {templateUrl: "partials/services6.html", controller: "PageCtrl"})	
	.when("/certification", {templateUrl: "partials/certification.html", controller: "PageCtrl"})	
	.when("/certification1", {templateUrl: "partials/certification1.html", controller: "PageCtrl"})
	.when("/certification2", {templateUrl: "partials/certification2.html", controller: "PageCtrl"})
	.when("/certification3", {templateUrl: "partials/certification3.html", controller: "PageCtrl"})
	.when("/certification4", {templateUrl: "partials/certification4.html", controller: "PageCtrl"})
	.when("/certification5", {templateUrl: "partials/certification5.html", controller: "PageCtrl"})
	.when("/certification6", {templateUrl: "partials/certification6.html", controller: "PageCtrl"})
	.when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})	
	.when("/contact1", {templateUrl: "partials/contact1.html", controller: "PageCtrl"})
	.when("/contact2", {templateUrl: "partials/contact2.html", controller: "PageCtrl"})
	.when("/contact3", {templateUrl: "partials/contact3.html", controller: "PageCtrl"})
	.when("/contact4", {templateUrl: "partials/contact4.html", controller: "PageCtrl"})
	.when("/contact5", {templateUrl: "partials/contact5.html", controller: "PageCtrl"})
	.when("/contact6", {templateUrl: "partials/contact6.html", controller: "PageCtrl"})	
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

