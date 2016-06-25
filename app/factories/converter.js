app.factory('MarkdownConverter', function($http) {
	return {
		convertMarkdown: function(markdownInput) {
			return $http({
				method: 'POST',
				url: API_URL + 'convert',
				data: {
					markdown: markdownInput
				}
			}).then(function successCallback(result) {
				return result.data.html;
			}, function errorCallback(result) {
				return result.status;
			});
		}
	}
});
