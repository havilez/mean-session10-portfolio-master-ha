var portfolioApp = angular.module("portfolioSharingApp", ['ngRoute','firebase'])
.constant('FIREBASE_URL', 'https://ha-portfolio-proj.firebaseio.com');


portfolioApp.config(function($routeProvider){
	$routeProvider
	.when("/portfolios", {
		controller: "PortfolioListController",
		templateUrl: "app/partials/portfolio_list_partial.html"
	})
	.when("/portfolio/:portfolio_name", {
		controller: "PortfolioViewController",
		templateUrl: "app/partials/portfolio_viewer.html"
	})
	.when("/", { redirectTo: "/portfolios"
	})
	.otherwise({redirectTo: "/404_page"
	});
});