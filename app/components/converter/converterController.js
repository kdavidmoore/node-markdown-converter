app.controller('converterController', ['$scope', 'MarkdownConverter', function($scope, MarkdownConverter) {
	$scope.submitForm = function() {
		console.log($scope.formData);
		MarkdownConverter.convertMarkdown($scope.formData).then(function(data) {
			$scope.myHTML = data;
		});
	}
}]);