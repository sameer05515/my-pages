app.directive('graphDataDisplay', function ($parse, $window,$log) {
    return {
        restrict: 'EA',
        template: "<svg width='850' height='400' style='border: solid green;'></svg>",
        link: function (scope, elem, attrs) {
            //var exp = $parse(attrs.chartData);

            $log.log('------------>\n'+angular.toJson(attrs));

            var graph = $parse(attrs.chartData);

            console.log('From directive: recieved graph : attrs.chartData : ' + attrs.chartData);

            // var salesDataToPlot = exp(scope);
            var graphDataToPlot = graph(scope);
            var padding = 20;
            var pathClass = "path";
            var xScale, yScale, xAxisGen, yAxisGen, lineFun;

            var d3 = $window.d3;
            var rawSvg = elem.find('svg');
            var svg = d3.select(rawSvg[0]);
            var colors = d3.scaleOrdinal(d3.schemeCategory10);

            var width = +svg.attr("width"),
                height = +svg.attr("height"),
                node,
                link;

            var simulation = d3.forceSimulation()
                    .force("link", d3.forceLink().id(function (d) { return d.id; }).distance(100).strength(1))
                    .force("charge", d3.forceManyBody())
                    .force("center", d3.forceCenter(width / 2, height / 2));

            

            // scope.$watchCollection(exp, function (newVal, oldVal) {
            //     salesDataToPlot = newVal;
            //     redrawLineChart();
            // });

            scope.$watchCollection(graph, function (newVal, oldVal) {
                graphDataToPlot = newVal;
                console.log('From directive: recieved graph : graphDataToPlot : ' + angular.toJson(graphDataToPlot));
                update(graphDataToPlot.links, graphDataToPlot.nodes);
            });


            ////////////////////////////
            function update(links, nodes) {
                link = svg.selectAll(".link")
                    .data(links)
                    .enter()
                    .append("line")
                    .attr("class", "link")
                    .attr('marker-end', 'url(#arrowhead)')

                link.append("title")
                    .text(function (d) { return d.type; });

                edgepaths = svg.selectAll(".edgepath")
                    .data(links)
                    .enter()
                    .append('path')
                    .attrs({
                        'class': 'edgepath',
                        'fill-opacity': 0,
                        'stroke-opacity': 0,
                        'id': function (d, i) { return 'edgepath' + i }
                    })
                    .style("pointer-events", "none");

                edgelabels = svg.selectAll(".edgelabel")
                    .data(links)
                    .enter()
                    .append('text')
                    .style("pointer-events", "none")
                    .attrs({
                        'class': 'edgelabel',
                        'id': function (d, i) { return 'edgelabel' + i },
                        'font-size': 10,
                        'fill': '#aaa'
                    });

                edgelabels.append('textPath')
                    .attr('xlink:href', function (d, i) { return '#edgepath' + i })
                    .style("text-anchor", "middle")
                    .style("pointer-events", "none")
                    .attr("startOffset", "50%")
                    .text(function (d) { return d.type });

                node = svg.selectAll(".node")
                    .data(nodes)
                    .enter()
                    .append("g")
                    .attr("class", "node")
                    .call(d3.drag()
                        .on("start", dragstarted)
                        .on("drag", dragged)
                        //.on("end", dragended)
                    );

                node.append("circle")
                    .attr("r", 5)
                    .style("fill", function (d, i) { return colors(i); })

                node.append("title")
                    .text(function (d) { return d.id; });

                node.append("text")
                    .attr("dy", -3)
                    .text(function (d) { return d.name + ":" + d.label; });

                simulation
                    .nodes(nodes)
                    .on("tick", ticked);

                simulation.force("link")
                    .links(links);
            }

            function ticked() {
                link
                    .attr("x1", function (d) { return d.source.x; })
                    .attr("y1", function (d) { return d.source.y; })
                    .attr("x2", function (d) { return d.target.x; })
                    .attr("y2", function (d) { return d.target.y; });

                node
                    .attr("transform", function (d) { return "translate(" + d.x + ", " + d.y + ")"; });

                edgepaths.attr('d', function (d) {
                    return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
                });

                edgelabels.attr('transform', function (d) {
                    if (d.target.x < d.source.x) {
                        var bbox = this.getBBox();

                        rx = bbox.x + bbox.width / 2;
                        ry = bbox.y + bbox.height / 2;
                        return 'rotate(180 ' + rx + ' ' + ry + ')';
                    }
                    else {
                        return 'rotate(0)';
                    }
                });
            }

            function dragstarted(d) {
                if (!d3.event.active) simulation.alphaTarget(0.3).restart()
                d.fx = d.x;
                d.fy = d.y;
            }

            function dragged(d) {
                d.fx = d3.event.x;
                d.fy = d3.event.y;
            }


            ////////////////////////////////////////

            function setChartParameters() {

                xScale = d3.scale.linear()
                    .domain([salesDataToPlot[0].hour, salesDataToPlot[salesDataToPlot.length - 1].hour])
                    .range([padding + 5, rawSvg.attr("width") - padding]);

                yScale = d3.scale.linear()
                    .domain([0, d3.max(salesDataToPlot, function (d) {
                        return d.sales;
                    })])
                    .range([rawSvg.attr("height") - padding, 0]);

                xAxisGen = d3.svg.axis()
                    .scale(xScale)
                    .orient("bottom")
                    .ticks(salesDataToPlot.length - 1);

                yAxisGen = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .ticks(5);

                lineFun = d3.svg.line()
                    .x(function (d) {
                        return xScale(d.hour);
                    })
                    .y(function (d) {
                        return yScale(d.sales);
                    })
                    .interpolate("basis");
            }

            function drawLineChart() {

                svg.append("line")
                    .attr("x1", 100)
                    .attr("y1", 100)
                    .attr("x2", 200)
                    .attr("y2", 200)
                    .style("stroke", "rgb(255,0,0)")
                    .style("stroke-width", 2);

                svg.append("path")
                    .attr("d", "M150 0 L75 200 L150 300 L175 350 L225 200 Z");


                svg.append('defs').append('marker')
                    .attrs({
                        'id': 'arrowhead',
                        'viewBox': '-0 -5 10 10',
                        'refX': 13,
                        'refY': 0,
                        'orient': 'auto',
                        'markerWidth': 13,
                        'markerHeight': 13,
                        'xoverflow': 'visible'
                    })
                    .append('svg:path')
                    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
                    .attr('fill', '#999')
                    .style('stroke', 'none');

                

                    update(graphDataToPlot.links, graphDataToPlot.nodes);
                // setChartParameters();

                // svg.append("svg:g")
                //     .attr("class", "x axis")
                //     .attr("transform", "translate(0,180)")
                //     .call(xAxisGen);

                // svg.append("svg:g")
                //     .attr("class", "y axis")
                //     .attr("transform", "translate(20,0)")
                //     .call(yAxisGen);

                // svg.append("svg:path")
                //     .attr({
                //         d: lineFun(salesDataToPlot),
                //         "stroke": "blue",
                //         "stroke-width": 2,
                //         "fill": "none",
                //         "class": pathClass
                //     });
            }

            function redrawLineChart() {

                // setChartParameters();

                // svg.selectAll("g.y.axis").call(yAxisGen);

                // svg.selectAll("g.x.axis").call(xAxisGen);

                // svg.selectAll("."+pathClass)
                //     .attr({
                //         d: lineFun(salesDataToPlot)
                //     });
            }

            drawLineChart();
        }
    };
});