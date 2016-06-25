app.config(function($stateProvider, $urlRouterProvider) {
	// for any unmatched url, redirect to /home
	$urlRouterProvider.otherwise("/converter");
	// now set up the states
	$stateProvider
	.state('converter', {
		url: "/converter",
		templateUrl: "app/components/converter/converterView.html"
	});
});