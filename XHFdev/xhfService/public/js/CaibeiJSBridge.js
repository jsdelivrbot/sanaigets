(function () {
    if (window.CaibeiJSBridge) {
        return;
    }

    // defind the JSON tool
    var JSON;
    if (!JSON) {
        JSON = {};
    }
    (function() {
        'use strict';

        function f(n) {
            // Format integers to have at least two digits.
            return n < 10 ? '0' + n : n;
        }

        if (typeof Date.prototype.toJSON !== 'function') {

            Date.prototype.toJSON = function(key) {

                return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z' : null;
            };

            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
                return this.valueOf();
            };
        }

        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = { // table of character substitutions
                '\b': '\\b',
                '\t': '\\t',
                '\n': '\\n',
                '\f': '\\f',
                '\r': '\\r',
                '"': '\\"',
                '\\': '\\\\'
            },
            rep;


        function quote(string) {

            // If the string contains no control characters, no quote characters, and no
            // backslash characters, then we can safely slap some quotes around it.
            // Otherwise we must also replace the offending characters with safe escape
            // sequences.
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' : '"' + string + '"';
        }


        function str(key, holder) {

            // Produce a string from holder[key].
            var i, // The loop counter.
                k, // The member key.
                v, // The member value.
                length, mind = gap,
                partial, value = holder[key];

            // 有些网站如youku.com会重载了toJSON这个函数，然后返回了json转义的串，然后我们再转一次的时候就悲剧了。所以需要注掉下面这个逻辑。
            // Douglas Crockford一开始为什么要加这么个sb逻辑呢。 既然加了，那用了别人的方法应该直接return啊。又转一次那不是sb了吗？？？坑啊。

            // If the value has a toJSON method, call it to obtain a replacement value.
            // if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
            //     value = value.toJSON(key);
            // }

            // If we were called with a replacer function, then call the replacer to
            // obtain a replacement value.
            if (typeof rep === 'function') {
                value = rep.call(holder, key, value);
            }

            // What happens next depends on the value's type.
            switch (typeof value) {
                case 'string':
                    return quote(value);

                case 'number':

                    // JSON numbers must be finite. Encode non-finite numbers as null.
                    return isFinite(value) ? String(value) : 'null';

                case 'boolean':
                case 'null':

                    // If the value is a boolean or null, convert it to a string. Note:
                    // typeof null does not produce 'null'. The case is included here in
                    // the remote chance that this gets fixed someday.
                    return String(value);

                // If the type is 'object', we might be dealing with an object or an array or
                // null.
                case 'object':

                    // Due to a specification blunder in ECMAScript, typeof null is 'object',
                    // so watch out for that case.
                    if (!value) {
                        return 'null';
                    }

                    // Make an array to hold the partial results of stringifying this object value.
                    gap += indent;
                    partial = [];

                    // Is the value an array?
                    if (Object.prototype.toString.apply(value) === '[object Array]') {

                        // The value is an array. Stringify every element. Use null as a placeholder
                        // for non-JSON values.
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || 'null';
                        }

                        // Join all of the elements together, separated with commas, and wrap them in
                        // brackets.
                        v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                        gap = mind;
                        return v;
                    }

                    // If the replacer is an array, use it to select the members to be stringified.
                    if (rep && typeof rep === 'object') {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === 'string') {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ': ' : ':') + v);
                                }
                            }
                        }
                    } else {

                        // Otherwise, iterate through all of the keys in the object.
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ': ' : ':') + v);
                                }
                            }
                        }
                    }

                    // Join all of the member texts together, separated with commas,
                    // and wrap them in braces.
                    v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
                    gap = mind;
                    return v;
            }
        }

        // If the JSON object does not yet have a stringify method, give it one.
        if (typeof JSON.stringify !== 'function') {
            JSON.stringify = function(value, replacer, space) {

                // The stringify method takes a value and an optional replacer, and an optional
                // space parameter, and returns a JSON text. The replacer can be a function
                // that can replace values, or an array of strings that will select the keys.
                // A default replacer method can be provided. Use of the space parameter can
                // produce text that is more easily readable.
                var i;
                gap = '';
                indent = '';

                // If the space parameter is a number, make an indent string containing that
                // many spaces.
                if (typeof space === 'number') {
                    for (i = 0; i < space; i += 1) {
                        indent += ' ';
                    }

                    // If the space parameter is a string, it will be used as the indent string.
                } else if (typeof space === 'string') {
                    indent = space;
                }

                // If there is a replacer, it must be a function or an array.
                // Otherwise, throw an error.
                rep = replacer;
                if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
                    throw new Error('JSON.stringify');
                }

                // Make a fake root object containing our value under the key of ''.
                // Return the result of stringifying the value.
                return str('', {
                    '': value
                });
            };
        }


        // If the JSON object does not yet have a parse method, give it one.
        if (typeof JSON.parse !== 'function') {
            JSON.parse = function(text, reviver) {

                // The parse method takes a text and an optional reviver function, and returns
                // a JavaScript value if the text is a valid JSON text.
                var j;

                function walk(holder, key) {

                    // The walk method is used to recursively walk the resulting structure so
                    // that modifications can be made.
                    var k, v, value = holder[key];
                    if (value && typeof value === 'object') {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = walk(value, k);
                                if (v !== undefined) {
                                    value[k] = v;
                                } else {
                                    delete value[k];
                                }
                            }
                        }
                    }
                    return reviver.call(holder, key, value);
                }


                // Parsing happens in four stages. In the first stage, we replace certain
                // Unicode characters with escape sequences. JavaScript handles many characters
                // incorrectly, either silently deleting them, or treating them as line endings.
                text = String(text);
                cx.lastIndex = 0;
                if (cx.test(text)) {
                    text = text.replace(cx, function(a) {
                        return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                    });
                }

                // In the second stage, we run the text against regular expressions that look
                // for non-JSON patterns. We are especially concerned with '()' and 'new'
                // because they can cause invocation, and '=' because it can cause mutation.
                // But just to be safe, we want to reject all unexpected forms.
                // We split the second stage into 4 regexp operations in order to work around
                // crippling inefficiencies in IE's and Safari's regexp engines. First we
                // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
                // replace all simple value tokens with ']' characters. Third, we delete all
                // open brackets that follow a colon or comma or that begin the text. Finally,
                // we look to see that the remaining characters are only whitespace or ']' or
                // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.
                if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

                    // In the third stage we use the eval function to compile the text into a
                    // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
                    // in JavaScript: it can begin a block or an object literal. We wrap the text
                    // in parens to eliminate the ambiguity.
                    j = eval('(' + text + ')');

                    // In the optional fourth stage, we recursively walk the new structure, passing
                    // each name/value pair to a reviver function for possible transformation.
                    return typeof reviver === 'function' ? walk({
                        '': j
                    }, '') : j;
                }

                // If the text is not JSON parseable, then a SyntaxError is thrown.
                throw new SyntaxError('JSON.parse');
            };
        }
    }());

    // define the base64 tool
    var base64encodechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function base64encode(str) {
        if (str === undefined) {
            return str;
        }

        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += base64encodechars.charAt(c1 >> 2);
                out += base64encodechars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += base64encodechars.charAt(c1 >> 2);
                out += base64encodechars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
                out += base64encodechars.charAt((c2 & 0xf) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += base64encodechars.charAt(c1 >> 2);
            out += base64encodechars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
            out += base64encodechars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));
            out += base64encodechars.charAt(c3 & 0x3f);
        }
        return out;
    }

    // UTF8
    var UTF8 = {
        // public method for url encoding
        encode: function(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        },

        // public method for url decoding
        decode: function(utftext) {
            var string = "";
            var i = 0;
            var c = c1 = c2 = 0;
            while (i < utftext.length) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                } else if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }
            return string;
        }
    };

    // 主程序
    var _callback_count = 1000;
    var _callback_map = {};
    var _event_hook_map = {};
    // 调用app
    var _call = function(func, params, callback) {
        if (!func || typeof func !== 'string') {
            return;
        }

        if (typeof params === 'object') {
            params = JSON.stringify(params);
        } else if (typeof params !== 'string') {
            params = "";
        }

        var callbackId = (_callback_count++).toString();
        if (typeof callback === 'function') {
            _callback_map[callbackId] = callback;
        }

        __CaibeiJSBridgeIframe__.src = 'caibei://jsbridge/call/' + func + '/' + callbackId + '/' + base64encode(UTF8.encode(params));
    };
    // 注册事件
    var _on = function(event, callback) {
        if (!event || typeof event !== 'string') {
            return;
        }
        if (typeof callback !== 'function') {
            return;
        }
        _event_hook_map[event] = callback;
    };
    // 触发事件
    var _triggerEvent = function(event, params) {
        if (typeof _event_hook_map[event] !== 'function') {
            return;
        }
        _event_hook_map[event](params);
    };
    // app回调
    var _handleCallback = function(callbackId, params) {
        if (typeof callbackId === 'string' && typeof _callback_map[callbackId] === 'function') {
            _callback_map[callbackId](params);
            delete _callback_map[callbackId];
        }
    };

    // 注册默认事件
    (function _setDefaultEventHandlers() {
        // 获取页面图片算法：
        // 在页面中找到第一个最小边大于290的图片，如果1秒内找不到，则返回空（不带图分享）。
        var getShareImage = function (cb) {
            var isCalled = false;

            var callCB = function (_img) {
                if (isCalled) {
                    return;
                }
                isCalled = true;
                cb(_img);
            };

            var _allImgs = document.querySelectorAll('img');
            if (_allImgs.length == 0) {
                return callCB();
            }

            // 过滤掉重复的图片
            var _srcs = {};
            var allImgs = [];
            for (var i = 0; i < _allImgs.length; i++) {
                var _img = _allImgs[i];

                // 过滤掉不可以见的图片
                if (_img.style.display == 'none' || _img.style.visibility == 'hidden') {
                    // _log('ivisable image !! ' + _img.src);
                    continue;
                }

                if (_srcs[_img.src]) {
                    // added
                } else {
                    _srcs[_img.src] = 1; // mark added
                    allImgs.push(_img);
                }
            }

            var results = [];
            var img;
            for (var i = 0; i < allImgs.length && i < 100; i++) {
                img = allImgs[i];

                var newImg = new Image();
                newImg.onload = function () {
                    this.isLoaded = true;
                    var loadedCount = 0;
                    for (var j = 0; j < results.length; j++) {
                        var res = results[j];
                        if (!res.isLoaded) {
                            break;
                        }
                        loadedCount++;
                        if (res.width > 290 && res.height > 290) {
                            callCB(res);
                            break;
                        }
                    }
                    if (loadedCount == results.length) {
                        // 全部都已经加载完了，但还是没有找到。
                        callCB();
                    }
                };
                newImg.src = img.src;
                results.push(newImg);
            }

            setTimeout(function () {
                for (var j = 0; j < results.length; j++) {
                    var res = results[j];
                    if (!res.isLoaded) {
                        continue;
                    }
                    if (res.width > 290 && res.height > 290) {
                        callCB(res);
                        return;
                    }
                }
                callCB();
            }, 1000);
        };

        // share
        _on('menu:share', function (type) {
            getShareImage(function (_img) {
                var data = {
                    "type": type,
                    "link": document.documentURI,
                    "desc": document.documentURI,
                    "title": document.title
                };
                if (_img) {
                    data['imgUrl'] = _img.src;
                }
                _call('share', data);
            });
        });
    })();

    // 主入口
    window.CaibeiJSBridge = {
        call: _call,
        on: _on,
        _triggerEvent: _triggerEvent,
        _handleCallback: _handleCallback
    };

    var __CaibeiJSBridgeIframe__ = document.createElement('iframe');
    __CaibeiJSBridgeIframe__.id = '__CaibeiJSBridgeIframe__';
    __CaibeiJSBridgeIframe__.style.display = 'none';
    document.documentElement.appendChild(__CaibeiJSBridgeIframe__);

    // bridge ready
    var readyEvent = document.createEvent('Events');
    readyEvent.initEvent('CaibeiJSBridgeReady');
    document.dispatchEvent(readyEvent);
})();