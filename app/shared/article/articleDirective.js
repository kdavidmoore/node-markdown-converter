app.directive('article', function() {
	return {
		restrict: 'E',
		link: function(scope, element, attrs) {
            scope.title = attrs.title;
            scope.content = attrs.content;
        },
		templateUrl: "app/shared/article/articleTemplate.html"
	}
});