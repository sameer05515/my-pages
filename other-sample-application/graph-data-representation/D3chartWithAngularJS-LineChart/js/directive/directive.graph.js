(function () {
	'use strict';

	angular.module('d3App.directives')
		.directive('d3GraphRepresentation', ['d3',
			function (d3) {
				return {
					restrict: 'A',
					scope: {
						src: '=',
						parent:'='
					},
					link: function (scope,elem, attrs) {
						console.info("enter directive controller");
						console.info("scope.parent : "+scope.parent);
						var data = {};
						var width = 300, height = 300, margin = 45;
						var div = d3.select('#'+scope.parent).style("border", "solid green")
							.style("width", "400px").style("height", "400px");
						var svg = div.append('svg:svg')
							.attr('class', 'lines-respresentation')
							.attr('width', width)
							.attr('height', height)
							.style('background-color', '#eee');
						// on window resize, re-render d3 canvas
						window.onresize = function () {
							return scope.$apply();
						};
						scope.$watch(function () {
							return angular.element(window)[0].innerWidth;
						},
							function () {
								// return scope.render(scope.data);
								return scope.render(scope.data);
							});

						// define render function
						scope.render = function (d) {
							var g = svg.append("svg:circle")
								.attr('cx', '50')
								.attr('cy', '50')
								.attr('r', '40')
								.attr('stroke', 'green')
								.attr('stroke-width', '4')
								.attr('fill', 'yellow');
						}

					}
				};
			}]);

}());
