(function(){
    "use strict";
    var _$rapyd$_iterator_symbol = (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") ? Symbol.iterator : "iterator-Symbol-5d0927e5554349048cf0e3762a228256";
    var _$rapyd$_kwargs_symbol = (typeof Symbol === "function") ? Symbol("kwargs-object") : "kwargs-object-Symbol-5d0927e5554349048cf0e3762a228256";
    var _$rapyd$_cond_temp;
    function _$rapyd$_extends(child, parent) {
            child.prototype = Object.create(parent.prototype);
            child.prototype.constructor = child;
        };
    var abs = (function abs() {
            return Math.abs;
        })();
    function range(start, stop, step) {
            var length;
            if (arguments.length <= 1) {
                stop = start || 0;
                start = 0;
            }
            step = arguments[2] || 1;
            length = Math.max(Math.ceil((stop - start) / step), 0);
            return (function(){
                var _$rapyd$_d = {};
                _$rapyd$_d[_$rapyd$_iterator_symbol] = function() {
                    return this;
                };
                _$rapyd$_d["_i"] = start - step;
                _$rapyd$_d["_idx"] = -1;
                _$rapyd$_d["next"] = function() {
                    this._i += step;
                    this._idx += 1;
                    if (this._idx >= length) {
                        return {
                            "done": true
                        };
                    }
                    return {
                        "done": false,
                        "value": this._i
                    };
                };
                return _$rapyd$_d;
            })();
        };
    function _$rapyd$_Iterable(iterable) {
            var iterator, ans, result;
            if (_$rapyd$_arraylike(iterable)) {
                return iterable;
            }
            if (typeof iterable[_$rapyd$_iterator_symbol] === "function") {
                iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[_$rapyd$_iterator_symbol]();
                ans = _$rapyd$_list_decorate([]);
                result = iterator.next();
                while (!result.done) {
                    ans.push(result.value);
                    result = iterator.next();
                }
                return ans;
            }
            return Object.keys(iterable);
        };
    var Exception = Error;
function AttributeError() {
    AttributeError.prototype.__init__.apply(this, arguments);
}
_$rapyd$_extends(AttributeError, Error);
AttributeError.prototype.__init__ = function __init__(msg) {
    var self = this;
    self.message = msg;
    self.stack = new Error().stack;
};
AttributeError.prototype.name = "AttributeError";

function IndexError() {
    IndexError.prototype.__init__.apply(this, arguments);
}
_$rapyd$_extends(IndexError, Error);
IndexError.prototype.__init__ = function __init__(msg) {
    var self = this;
    self.message = msg;
    self.stack = new Error().stack;
};
IndexError.prototype.name = "IndexError";

function KeyError() {
    KeyError.prototype.__init__.apply(this, arguments);
}
_$rapyd$_extends(KeyError, Error);
KeyError.prototype.__init__ = function __init__(msg) {
    var self = this;
    self.message = msg;
    self.stack = new Error().stack;
};
KeyError.prototype.name = "KeyError";

function ValueError() {
    ValueError.prototype.__init__.apply(this, arguments);
}
_$rapyd$_extends(ValueError, Error);
ValueError.prototype.__init__ = function __init__(msg) {
    var self = this;
    self.message = msg;
    self.stack = new Error().stack;
};
ValueError.prototype.name = "ValueError";
;
    var _$rapyd$_chain_assign_temp;
function _$rapyd$_equals(a, b) {
    try {
        return a.__eq__(b);
    } catch (_$rapyd$_Exception) {
        if (_$rapyd$_Exception instanceof TypeError) {
            return a === b;
        } else {
            throw _$rapyd$_Exception;
        }
    }
}
var equals = _$rapyd$_equals;;
function _$rapyd$_list_extend(iterable) {
    var start, iterator, result;
    if (Array.isArray(iterable) || typeof iterable === "string") {
        start = this.length;
        this.length += iterable.length;
        for (var i = 0; i < iterable.length; i++) {
            this[start + i] = iterable[i];
        }
    } else {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[_$rapyd$_iterator_symbol]();
        result = iterator.next();
        while (!result.done) {
            this.push(result.value);
            result = iterator.next();
        }
    }
}
function _$rapyd$_list_index(val, start, stop) {
    var idx;
    start = start || 0;
    if (start < 0) {
        start = this.length + start;
    }
    if (start < 0) {
        throw new ValueError(val + " is not in list");
    }
    if (stop === undefined) {
        idx = this.indexOf(val, start);
        if (idx === -1) {
            throw new ValueError(val + " is not in list");
        }
        return idx;
    }
    if (stop < 0) {
        stop = this.length + stop;
    }
    for (var i = start; i < stop; i++) {
        if (this[i] === val) {
            return i;
        }
    }
    throw new ValueError(val + " is not in list");
}
function _$rapyd$_list_pop(index) {
    var ans;
    if (this.length === 0) {
        throw new IndexError("list is empty");
    }
    ans = this.splice(index, 1);
    if (!ans.length) {
        throw new IndexError("pop index out of range");
    }
    return ans[0];
}
function _$rapyd$_list_remove(value) {
    var idx;
    idx = this.indexOf(value);
    if (idx === -1) {
        throw new ValueError(value + " not in list");
    }
    this.splice(idx, 1);
}
function _$rapyd$_list_to_string() {
    return "[" + this.join(", ") + "]";
}
function _$rapyd$_list_insert(index, val) {
    if (index < 0) {
        index += this.length;
    }
    index = min(this.length, max(index, 0));
    if (index === 0) {
        this.unshift(val);
        return;
    }
    for (var i = this.length; i > index; i--) {
        this[i] = this[i - 1];
    }
    this[index] = val;
}
function _$rapyd$_list_copy() {
    return _$rapyd$_list_constructor(this);
}
function _$rapyd$_list_clear() {
    this.length = 0;
}
function _$rapyd$_list_as_array() {
    return Array.prototype.slice.call(this);
}
function _$rapyd$_list_count(value) {
    return this.reduce(function(n, val) {
        return n + (val === value);
    }, 0);
}
function _$rapyd$_list_sort_key(value) {
    var t;
    t = typeof value;
    if (t === "string" || t === "number") {
        return value;
    }
    return value.toString();
}
function _$rapyd$_list_sort_cmp(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
function _$rapyd$_list_sort() {
    var key = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [_$rapyd$_kwargs_symbol] === true)) ? (null) : arguments[0];
    var reverse = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [_$rapyd$_kwargs_symbol] === true)) ? (false) : arguments[1];
    var _$rapyd$_kwargs_obj = arguments[arguments.length-1];
    if (_$rapyd$_kwargs_obj === null || typeof _$rapyd$_kwargs_obj !== "object" || _$rapyd$_kwargs_obj [_$rapyd$_kwargs_symbol] !== true) _$rapyd$_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(_$rapyd$_kwargs_obj, "key")){
        key = _$rapyd$_kwargs_obj.key;
    }
    if (Object.prototype.hasOwnProperty.call(_$rapyd$_kwargs_obj, "reverse")){
        reverse = _$rapyd$_kwargs_obj.reverse;
    }
    var mult, keymap, k;
    key = key || _$rapyd$_list_sort_key;
    mult = (reverse) ? -1 : 1;
    keymap = dict();
    for (var i=0; i < this.length; i++) {
        k = this[i];
        keymap.set(k, key(k));
    }
    this.sort(function(a, b) {
        return mult * _$rapyd$_list_sort_cmp(keymap.get(a), keymap.get(b));
    });
}
function _$rapyd$_list_concat() {
    var ans;
    ans = Array.prototype.concat.apply(this, arguments);
    _$rapyd$_list_decorate(ans);
    return ans;
}
function _$rapyd$_list_slice() {
    var ans;
    ans = Array.prototype.slice.apply(this, arguments);
    _$rapyd$_list_decorate(ans);
    return ans;
}
function _$rapyd$_list_iterator(value) {
    var self;
    self = this;
    return {
        "_i": -1,
        "_list": self,
        "next": function() {
            this._i += 1;
            if (this._i >= this._list.length) {
                return {
                    "done": true
                };
            }
            return {
                "done": false,
                "value": this._list[this._i]
            };
        }
    };
}
function _$rapyd$_list_len() {
    return this.length;
}
function _$rapyd$_list_contains(val) {
    return this.indexOf(val) !== -1;
}
function _$rapyd$_list_eq(other) {
    if (!Array.isArray(other)) {
        return false;
    }
    if (other.length !== this.length) {
        return false;
    }
    if (other.length === 0) {
        return true;
    }
    for (var i = 0; i < other.length; i++) {
        if (!_$rapyd$_equals(this[i], other[i])) {
            return false;
        }
    }
    return true;
}
function _$rapyd$_list_decorate(ans) {
    ans.append = Array.prototype.push;
    ans.toString = _$rapyd$_list_to_string;
    ans.inspect = _$rapyd$_list_to_string;
    ans.extend = _$rapyd$_list_extend;
    ans.index = _$rapyd$_list_index;
    ans.pypop = _$rapyd$_list_pop;
    ans.remove = _$rapyd$_list_remove;
    ans.insert = _$rapyd$_list_insert;
    ans.copy = _$rapyd$_list_copy;
    ans.clear = _$rapyd$_list_clear;
    ans.count = _$rapyd$_list_count;
    ans.concat = _$rapyd$_list_concat;
    ans.pysort = _$rapyd$_list_sort;
    ans.slice = _$rapyd$_list_slice;
    ans.as_array = _$rapyd$_list_as_array;
    ans.__len__ = _$rapyd$_list_len;
    ans.__contains__ = _$rapyd$_list_contains;
    ans.__eq__ = _$rapyd$_list_eq;
    ans.constructor = _$rapyd$_list_constructor;
    if (typeof ans[_$rapyd$_iterator_symbol] !== "function") {
        ans[_$rapyd$_iterator_symbol] = _$rapyd$_list_iterator;
    }
    return ans;
}
function _$rapyd$_list_constructor(iterable) {
    var ans, iterator, result;
    if (iterable === undefined) {
        ans = [];
    } else if (_$rapyd$_arraylike(iterable)) {
        ans = new Array(iterable.length);
        for (var i = 0; i < iterable.length; i++) {
            ans[i] = iterable[i];
        }
    } else if (typeof iterable[_$rapyd$_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[_$rapyd$_iterator_symbol]();
        ans = _$rapyd$_list_decorate([]);
        result = iterator.next();
        while (!result.done) {
            ans.push(result.value);
            result = iterator.next();
        }
    } else if (typeof iterable === "number") {
        ans = new Array(iterable);
    } else {
        ans = Object.keys(iterable);
    }
    return _$rapyd$_list_decorate(ans);
}
_$rapyd$_list_constructor.__name__ = "list";
var list = _$rapyd$_list_constructor, list_wrap = _$rapyd$_list_decorate;
var _$rapyd$_global_object_id = 0, _$rapyd$_set_implementation;
function _$rapyd$_set_keyfor(x) {
    var t, ans;
    t = typeof x;
    if (t === "string" || t === "number" || t === "boolean") {
        return "_" + t[0] + x;
    }
    if (x === null) {
        return "__!@#$0";
    }
    ans = x._$rapyd$_hash_key_prop;
    if (ans === undefined) {
        ans = "_!@#$" + (++_$rapyd$_global_object_id);
        Object.defineProperty(x, "_$rapyd$_hash_key_prop", {
            "value": ans
        });
    }
    return ans;
}
function _$rapyd$_set_polyfill() {
    this._store = {};
    this.size = 0;
}
_$rapyd$_set_polyfill.prototype.add = function(x) {
    var key;
    key = _$rapyd$_set_keyfor(x);
    if (!Object.hasOwnProperty.call(this._store, key)) {
        this.size += 1;
        this._store[key] = x;
    }
    return this;
};
_$rapyd$_set_polyfill.prototype.clear = function(x) {
    this._store = {};
    this.size = 0;
};
_$rapyd$_set_polyfill.prototype.delete = function(x) {
    var key;
    key = _$rapyd$_set_keyfor(x);
    if (Object.hasOwnProperty.call(this._store, key)) {
        this.size -= 1;
        delete this._store[key];
        return true;
    }
    return false;
};
_$rapyd$_set_polyfill.prototype.has = function(x) {
    return Object.hasOwnProperty.call(this._store, _$rapyd$_set_keyfor(x));
};
_$rapyd$_set_polyfill.prototype.values = function(x) {
    var keys, s;
    keys = Object.keys(this._store);
    s = this._store;
    return (function(){
        var _$rapyd$_d = {};
        _$rapyd$_d["_keys"] = keys;
        _$rapyd$_d["_i"] = -1;
        _$rapyd$_d["_s"] = s;
        _$rapyd$_d[_$rapyd$_iterator_symbol] = function() {
            return this;
        };
        _$rapyd$_d["next"] = function() {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {
                    "done": true
                };
            }
            return {
                "done": false,
                "value": s[this._keys[this._i]]
            };
        };
        return _$rapyd$_d;
    })();
};
if (typeof Set !== "function" || typeof Set.prototype.delete !== "function") {
    _$rapyd$_set_implementation = _$rapyd$_set_polyfill;
} else {
    _$rapyd$_set_implementation = Set;
}
function _$rapyd$_set(iterable) {
    var ans, s, iterator, result, keys;
    if (this instanceof _$rapyd$_set) {
        this.jsset = new _$rapyd$_set_implementation();
        ans = this;
        if (iterable === undefined) {
            return ans;
        }
        s = ans.jsset;
        if (_$rapyd$_arraylike(iterable)) {
            for (var i = 0; i < iterable.length; i++) {
                s.add(iterable[i]);
            }
        } else if (typeof iterable[_$rapyd$_iterator_symbol] === "function") {
            iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[_$rapyd$_iterator_symbol]();
            result = iterator.next();
            while (!result.done) {
                s.add(result.value);
                result = iterator.next();
            }
        } else {
            keys = Object.keys(iterable);
            for (var i=0; i < keys.length; i++) {
                s.add(keys[i]);
            }
        }
        return ans;
    } else {
        return new _$rapyd$_set(iterable);
    }
}
_$rapyd$_set.prototype.__name__ = "set";
Object.defineProperties(_$rapyd$_set.prototype, {
    "length": {
        "get": function() {
            return this.jsset.size;
        }
    },
    "size": {
        "get": function() {
            return this.jsset.size;
        }
    }
});
_$rapyd$_set.prototype.__len__ = function() {
    return this.jsset.size;
};
_$rapyd$_chain_assign_temp = function(x) {
    return this.jsset.has(x);
};
_$rapyd$_set.prototype.has = _$rapyd$_chain_assign_temp;
_$rapyd$_set.prototype.__contains__ = _$rapyd$_chain_assign_temp;
;
_$rapyd$_set.prototype.add = function(x) {
    this.jsset.add(x);
};
_$rapyd$_set.prototype.clear = function() {
    this.jsset.clear();
};
_$rapyd$_set.prototype.copy = function() {
    return _$rapyd$_set(this);
};
_$rapyd$_set.prototype.discard = function(x) {
    this.jsset.delete(x);
};
_$rapyd$_set.prototype[_$rapyd$_iterator_symbol] = function() {
    return this.jsset.values();
};
_$rapyd$_set.prototype.difference = function() {
    var ans, s, iterator, r, x, has;
    ans = new _$rapyd$_set();
    s = ans.jsset;
    iterator = this.jsset.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        has = false;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i].has(x)) {
                has = true;
                break;
            }
        }
        if (!has) {
            s.add(x);
        }
        r = iterator.next();
    }
    return ans;
};
_$rapyd$_set.prototype.difference_update = function() {
    var s, remove, iterator, r, x;
    s = this.jsset;
    remove = [];
    iterator = s.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i].has(x)) {
                remove.push(x);
                break;
            }
        }
        r = iterator.next();
    }
    for (var i = 0; i < remove.length; i++) {
        s.delete(remove[i]);
    }
};
_$rapyd$_set.prototype.intersection = function() {
    var ans, s, iterator, r, x, has;
    ans = new _$rapyd$_set();
    s = ans.jsset;
    iterator = this.jsset.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        has = true;
        for (var i = 0; i < arguments.length; i++) {
            if (!arguments[i].has(x)) {
                has = false;
                break;
            }
        }
        if (has) {
            s.add(x);
        }
        r = iterator.next();
    }
    return ans;
};
_$rapyd$_set.prototype.intersection_update = function() {
    var s, remove, iterator, r, x;
    s = this.jsset;
    remove = [];
    iterator = s.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        for (var i = 0; i < arguments.length; i++) {
            if (!arguments[i].has(x)) {
                remove.push(x);
                break;
            }
        }
        r = iterator.next();
    }
    for (var i = 0; i < remove.length; i++) {
        s.delete(remove[i]);
    }
};
_$rapyd$_set.prototype.isdisjoint = function(other) {
    var iterator, r, x;
    iterator = this.jsset.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        if (other.has(x)) {
            return false;
        }
        r = iterator.next();
    }
    return true;
};
_$rapyd$_set.prototype.issubset = function(other) {
    var iterator, r, x;
    iterator = this.jsset.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        if (!other.has(x)) {
            return false;
        }
        r = iterator.next();
    }
    return true;
};
_$rapyd$_set.prototype.issuperset = function(other) {
    var s, iterator, r, x;
    s = this.jsset;
    iterator = other.jsset.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        if (!s.has(x)) {
            return false;
        }
        r = iterator.next();
    }
    return true;
};
_$rapyd$_set.prototype.pop = function() {
    var iterator, r;
    iterator = this.jsset.values();
    r = iterator.next();
    if (r.done) {
        throw new KeyError("pop from an empty set");
    }
    this.jsset.delete(r.value);
    return r.value;
};
_$rapyd$_set.prototype.remove = function(x) {
    if (!this.jsset.delete(x)) {
        throw new KeyError(x.toString());
    }
};
_$rapyd$_set.prototype.symmetric_difference = function(other) {
    return this.union(other).difference(this.intersection(other));
};
_$rapyd$_set.prototype.symmetric_difference_update = function(other) {
    var common;
    common = this.intersection(other);
    this.update(other);
    this.difference_update(common);
};
_$rapyd$_set.prototype.union = function() {
    var ans;
    ans = _$rapyd$_set(this);
    ans.update.apply(ans, arguments);
    return ans;
};
_$rapyd$_set.prototype.update = function() {
    var s, iterator, r;
    s = this.jsset;
    for (var i=0; i < arguments.length; i++) {
        iterator = arguments[i][_$rapyd$_iterator_symbol]();
        r = iterator.next();
        while (!r.done) {
            s.add(r.value);
            r = iterator.next();
        }
    }
};
_$rapyd$_chain_assign_temp = function() {
    return "{" + list(this).join(", ") + "}";
};
_$rapyd$_set.prototype.toString = _$rapyd$_chain_assign_temp;
_$rapyd$_set.prototype.inspect = _$rapyd$_chain_assign_temp;
;
_$rapyd$_set.prototype.__eq__ = function(other) {
    var iterator, r;
    if (!(other instanceof this.constructor)) {
        return false;
    }
    if (other.size !== this.size) {
        return false;
    }
    if (other.size === 0) {
        return true;
    }
    iterator = other[_$rapyd$_iterator_symbol]();
    r = iterator.next();
    while (!r.done) {
        if (!this.has(r.value)) {
            return false;
        }
        r = iterator.next();
    }
    return true;
};
function _$rapyd$_set_wrap(x) {
    var ans;
    ans = new _$rapyd$_set();
    ans.jsset = x;
    return ans;
}
var set = _$rapyd$_set, set_wrap = _$rapyd$_set_wrap;
var _$rapyd$_dict_implementation;
function _$rapyd$_dict_polyfill() {
    this._store = {};
    this.size = 0;
}
_$rapyd$_dict_polyfill.prototype.set = function(x, value) {
    var key;
    key = _$rapyd$_set_keyfor(x);
    if (!Object.hasOwnProperty.call(this._store, key)) {
        this.size += 1;
    }
    this._store[key] = [x, value];
    return this;
};
_$rapyd$_dict_polyfill.prototype.clear = function(x) {
    this._store = {};
    this.size = 0;
};
_$rapyd$_dict_polyfill.prototype.delete = function(x) {
    var key;
    key = _$rapyd$_set_keyfor(x);
    if (Object.hasOwnProperty.call(this._store, key)) {
        this.size -= 1;
        delete this._store[key];
        return true;
    }
    return false;
};
_$rapyd$_dict_polyfill.prototype.has = function(x) {
    return Object.hasOwnProperty.call(this._store, _$rapyd$_set_keyfor(x));
};
_$rapyd$_dict_polyfill.prototype.get = function(x) {
    try {
        return this._store[_$rapyd$_set_keyfor(x)][1];
    } catch (_$rapyd$_Exception) {
        if (_$rapyd$_Exception instanceof TypeError) {
            return undefined;
        } else {
            throw _$rapyd$_Exception;
        }
    }
};
_$rapyd$_dict_polyfill.prototype.values = function(x) {
    var keys, s;
    keys = Object.keys(this._store);
    s = this._store;
    return (function(){
        var _$rapyd$_d = {};
        _$rapyd$_d["_keys"] = keys;
        _$rapyd$_d["_i"] = -1;
        _$rapyd$_d["_s"] = s;
        _$rapyd$_d[_$rapyd$_iterator_symbol] = function() {
            return this;
        };
        _$rapyd$_d["next"] = function() {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {
                    "done": true
                };
            }
            return {
                "done": false,
                "value": s[this._keys[this._i]][1]
            };
        };
        return _$rapyd$_d;
    })();
};
_$rapyd$_dict_polyfill.prototype.keys = function(x) {
    var keys, s;
    keys = Object.keys(this._store);
    s = this._store;
    return (function(){
        var _$rapyd$_d = {};
        _$rapyd$_d["_keys"] = keys;
        _$rapyd$_d["_i"] = -1;
        _$rapyd$_d["_s"] = s;
        _$rapyd$_d[_$rapyd$_iterator_symbol] = function() {
            return this;
        };
        _$rapyd$_d["next"] = function() {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {
                    "done": true
                };
            }
            return {
                "done": false,
                "value": s[this._keys[this._i]][0]
            };
        };
        return _$rapyd$_d;
    })();
};
_$rapyd$_dict_polyfill.prototype.entries = function(x) {
    var keys, s;
    keys = Object.keys(this._store);
    s = this._store;
    return (function(){
        var _$rapyd$_d = {};
        _$rapyd$_d["_keys"] = keys;
        _$rapyd$_d["_i"] = -1;
        _$rapyd$_d["_s"] = s;
        _$rapyd$_d[_$rapyd$_iterator_symbol] = function() {
            return this;
        };
        _$rapyd$_d["next"] = function() {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {
                    "done": true
                };
            }
            return {
                "done": false,
                "value": s[this._keys[this._i]]
            };
        };
        return _$rapyd$_d;
    })();
};
if (typeof Map !== "function" || typeof Map.prototype.delete !== "function") {
    _$rapyd$_dict_implementation = _$rapyd$_dict_polyfill;
} else {
    _$rapyd$_dict_implementation = Map;
}
function _$rapyd$_dict(iterable) {
    if (this instanceof _$rapyd$_dict) {
        this.jsmap = new _$rapyd$_dict_implementation();
        if (iterable !== undefined) {
            this.update(iterable);
        }
        return this;
    } else {
        return new _$rapyd$_dict(iterable);
    }
}
_$rapyd$_dict.prototype.__name__ = "dict";
Object.defineProperties(_$rapyd$_dict.prototype, {
    "length": {
        "get": function() {
            return this.jsmap.size;
        }
    },
    "size": {
        "get": function() {
            return this.jsmap.size;
        }
    }
});
_$rapyd$_dict.prototype.__len__ = function() {
    return this.jsmap.size;
};
_$rapyd$_chain_assign_temp = function(x) {
    return this.jsmap.has(x);
};
_$rapyd$_dict.prototype.has = _$rapyd$_chain_assign_temp;
_$rapyd$_dict.prototype.__contains__ = _$rapyd$_chain_assign_temp;
;
_$rapyd$_chain_assign_temp = function(key, value) {
    this.jsmap.set(key, value);
};
_$rapyd$_dict.prototype.set = _$rapyd$_chain_assign_temp;
_$rapyd$_dict.prototype.__setitem__ = _$rapyd$_chain_assign_temp;
;
_$rapyd$_dict.prototype.clear = function() {
    this.jsmap.clear();
};
_$rapyd$_dict.prototype.copy = function() {
    return _$rapyd$_dict(this);
};
_$rapyd$_dict.prototype.keys = function() {
    return this.jsmap.keys();
};
_$rapyd$_dict.prototype.values = function() {
    return this.jsmap.values();
};
_$rapyd$_chain_assign_temp = function() {
    return this.jsmap.entries();
};
_$rapyd$_dict.prototype.items = _$rapyd$_chain_assign_temp;
_$rapyd$_dict.prototype.entries = _$rapyd$_chain_assign_temp;
;
_$rapyd$_dict.prototype[_$rapyd$_iterator_symbol] = function() {
    return this.jsmap.keys();
};
_$rapyd$_dict.prototype.__getitem__ = function(key) {
    var ans;
    ans = this.jsmap.get(key);
    if (ans === undefined && !this.jsmap.has(key)) {
        throw new KeyError(key + "");
    }
    return ans;
};
_$rapyd$_dict.prototype.get = function(key, defval) {
    var ans;
    ans = this.jsmap.get(key);
    if (ans === undefined && !this.jsmap.has(key)) {
        return (defval === undefined) ? null : defval;
    }
    return ans;
};
_$rapyd$_dict.prototype.set_default = function(key, defval) {
    var j;
    j = this.jsmap;
    if (!j.has(key)) {
        j.set(key, defval);
        return defval;
    }
    return j.get(key);
};
_$rapyd$_chain_assign_temp = function() {
    var iterable = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [_$rapyd$_kwargs_symbol] === true) ? undefined : arguments[0];
    var value = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [_$rapyd$_kwargs_symbol] === true)) ? (null) : arguments[1];
    var _$rapyd$_kwargs_obj = arguments[arguments.length-1];
    if (_$rapyd$_kwargs_obj === null || typeof _$rapyd$_kwargs_obj !== "object" || _$rapyd$_kwargs_obj [_$rapyd$_kwargs_symbol] !== true) _$rapyd$_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(_$rapyd$_kwargs_obj, "value")){
        value = _$rapyd$_kwargs_obj.value;
    }
    var ans, iterator, r;
    ans = _$rapyd$_dict();
    iterator = iter(iterable);
    r = iterator.next();
    while (!r.done) {
        ans.set(r.value, value);
        r = iterator.next();
    }
    return ans;
};
_$rapyd$_dict.fromkeys = _$rapyd$_chain_assign_temp;
_$rapyd$_dict.prototype.fromkeys = _$rapyd$_chain_assign_temp;
;
_$rapyd$_dict.prototype.pop = function(key, defval) {
    var ans;
    ans = this.jsmap.get(key);
    if (ans === undefined && !this.jsmap.has(key)) {
        if (defval === undefined) {
            throw new KeyError(key);
        }
        return defval;
    }
    this.jsmap.delete(key);
    return ans;
};
_$rapyd$_dict.prototype.popitem = function() {
    var r;
    r = this.jsmap.entries().next();
    if (r.done) {
        throw new KeyError("dict is empty");
    }
    this.jsmap.delete(r.value[0]);
    return r.value;
};
_$rapyd$_dict.prototype.update = function() {
    var m, iterable, iterator, result, keys;
    if (arguments.length === 0) {
        return;
    }
    m = this.jsmap;
    iterable = arguments[0];
    if (Array.isArray(iterable)) {
        for (var i = 0; i < iterable.length; i++) {
            m.set(iterable[i][0], iterable[i][1]);
        }
    } else if (iterable instanceof _$rapyd$_dict) {
        iterator = iterable.items();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else if (typeof Map === "function" && iterable instanceof Map) {
        iterator = iterable.entries();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else if (typeof iterable[_$rapyd$_iterator_symbol] === "function") {
        iterator = iterable[_$rapyd$_iterator_symbol]();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else {
        keys = Object.keys(iterable);
        for (var i=0; i < keys.length; i++) {
            if (keys[i] !== _$rapyd$_iterator_symbol) {
                m.set(keys[i], iterable[keys[i]]);
            }
        }
    }
    if (arguments.length > 1) {
        _$rapyd$_dict.prototype.update.call(this, arguments[1]);
    }
};
_$rapyd$_chain_assign_temp = function() {
    var entries, iterator, r;
    entries = [];
    iterator = this.jsmap.entries();
    r = iterator.next();
    while (!r.done) {
        entries.push(r.value[0] + ": " + r.value[1]);
        r = iterator.next();
    }
    return "{" + entries.join(", ") + "}";
};
_$rapyd$_dict.prototype.toString = _$rapyd$_chain_assign_temp;
_$rapyd$_dict.prototype.inspect = _$rapyd$_chain_assign_temp;
;
_$rapyd$_dict.prototype.__eq__ = function(other) {
    var iterator, r, x;
    if (!(other instanceof this.constructor)) {
        return false;
    }
    if (other.size !== this.size) {
        return false;
    }
    if (other.size === 0) {
        return true;
    }
    iterator = other.items();
    r = iterator.next();
    while (!r.done) {
        x = this.jsmap.get(r.value[0]);
        if (x === undefined && !this.jsmap.has(r.value[0]) || x !== r.value[1]) {
            return false;
        }
        r = iterator.next();
    }
    return true;
};
_$rapyd$_dict.prototype.as_object = function(other) {
    var ans, iterator, r;
    ans = {};
    iterator = this.jsmap.entries();
    r = iterator.next();
    while (!r.done) {
        ans[r.value[0]] = r.value[1];
        r = iterator.next();
    }
    return ans;
};
function _$rapyd$_dict_wrap(x) {
    var ans;
    ans = new _$rapyd$_dict();
    ans.jsmap = x;
    return ans;
}
var dict = _$rapyd$_dict, dict_wrap = _$rapyd$_dict_wrap;;
    function _$rapyd$_bool(val) {
    return !!val;
}
function _$rapyd$_bind(fn, thisArg) {
    var ret;
    if (fn.orig) {
        fn = fn.orig;
    }
    if (thisArg === false) {
        return fn;
    }
    ret = function() {
        return fn.apply(thisArg, arguments);
    };
    ret.orig = fn;
    return ret;
}
function _$rapyd$_rebind_all(thisArg, rebind) {
    if (typeof rebind === "undefined") {
        rebind = true;
    }
    for (var p in thisArg) {
        if (thisArg[p] && thisArg[p].orig) {
            if (rebind) {
                thisArg[p] = _$rapyd$_bind(thisArg[p], thisArg);
            } else {
                thisArg[p] = thisArg[p].orig;
            }
        }
    }
}
function _$rapyd$_eslice(arr, step, start, end) {
    var isString;
    arr = arr.slice(0);
    if (typeof arr === "string" || arr instanceof String) {
        isString = true;
        arr = arr.split("");
    }
    if (step < 0) {
        step = -step;
        arr.reverse();
        if (typeof start !== "undefined") {
            start = arr.length - start - 1;
        }
        if (typeof end !== "undefined") {
            end = arr.length - end - 1;
        }
    }
    if (typeof start === "undefined") {
        start = 0;
    }
    if (typeof end === "undefined") {
        end = arr.length;
    }
    arr = arr.slice(start, end).filter(function(e, i) {
        return i % step === 0;
    });
    return (isString) ? arr.join("") : arr;
}
function _$rapyd$_mixin(target, source, overwrite) {
    for (var i in source) {
        if (source.hasOwnProperty(i) && overwrite || typeof target[i] === "undefined") {
            target[i] = source[i];
        }
    }
}
function _$rapyd$_print() {
    var parts, part;
    if (typeof console === "object") {
        parts = [];
        for (var i = 0; i < arguments.length; i++) {
            part = arguments[i];
            if (typeof part === "string") {
                parts.push(part);
            } else if (part === null) {
                parts.push("None");
            } else if (typeof part === "boolean") {
                parts.push((part) ? "True" : "False");
            } else {
                try {
                    parts.push(JSON.stringify(part));
                } catch (_$rapyd$_Exception) {
                    parts.push(part.toString());
                }
            }
        }
        console.log(parts.join(" "));
    }
}
function _$rapyd$_int(val, base) {
    var ans;
    ans = parseInt(val, base || 10);
    if (isNaN(ans)) {
        throw new ValueError("Invalid literal for int with base " + (base || 10) + ": " + val);
    }
    return ans;
}
function _$rapyd$_float() {
    var ans;
    ans = parseFloat.apply(null, arguments);
    if (isNaN(ans)) {
        throw new ValueError("Could not convert string to float: " + arguments[0]);
    }
    return ans;
}
function _$rapyd$_arraylike_creator() {
    if (typeof HTMLCollection === "function") {
        return function(x) {
            if (Array.isArray(x) || typeof x === "string" || (x instanceof HTMLCollection || x instanceof NodeList || x instanceof NamedNodeMap)) {
                return true;
            }
            return false;
        };
    }
    return function(x) {
        if (Array.isArray(x) || typeof x === "string") {
            return true;
        }
        return false;
    };
}
function options_object(f) {
    return function() {
        if (typeof arguments[arguments.length - 1] === "object") {
            arguments[arguments.length - 1][_$rapyd$_kwargs_symbol] = true;
        }
        return f.apply(this, arguments);
    };
}
var bool = _$rapyd$_bool, bind = _$rapyd$_bind, rebind_all = _$rapyd$_rebind_all;
var float = _$rapyd$_float, int = _$rapyd$_int, arraylike = _$rapyd$_arraylike_creator(), _$rapyd$_arraylike = arraylike;
var mixin = _$rapyd$_mixin, print = _$rapyd$_print, eslice = _$rapyd$_eslice;;
    function _$rapyd$_str() {
    return arguments[0] + "";
}
_$rapyd$_str.format = function() {
    var template, args, kwargs, explicit, implicit, _$rapyd$_chain_assign_temp, idx, ans, pos, in_brace, markup, ch;
    template = arguments[0];
    if (template === undefined) {
        throw new TypeError("Template is required");
    }
    args = Array.prototype.slice.call(arguments, 1);
    kwargs = {};
    if (args.length && args[args.length-1][_$rapyd$_kwargs_symbol] !== undefined) {
        kwargs = args[args.length-1];
        args = args.slice(0, -1);
    }
    _$rapyd$_chain_assign_temp = false;
    explicit = _$rapyd$_chain_assign_temp;
    implicit = _$rapyd$_chain_assign_temp;
;
    idx = 0;
    if (_$rapyd$_str.format._template_resolve_pat === undefined) {
        _$rapyd$_str.format._template_resolve_pat = /[.\[]/;
    }
    function resolve(arg, object) {
        var _$rapyd$_unpack, first, key, rest, ans;
        if (!arg) {
            return object;
        }
        _$rapyd$_unpack = [arg[0], arg.slice(1)];
        first = _$rapyd$_unpack[0];
        arg = _$rapyd$_unpack[1];
        key = arg.split(_$rapyd$_str.format._template_resolve_pat, 1)[0];
        rest = arg.slice(key.length);
        ans = (first === "[") ? object[key.slice(0, -1)] : getattr(object, key);
        if (ans === undefined) {
            throw new KeyError((first === "[") ? key.slice(0, -1) : key);
        }
        return resolve(rest, ans);
    }
    function resolve_format_spec(format_spec) {
        if (_$rapyd$_str.format._template_resolve_fs_pat === undefined) {
            _$rapyd$_str.format._template_resolve_fs_pat = /[{]([a-zA-Z0-9_]+)[}]/g;
        }
        return format_spec.replace(_$rapyd$_str.format._template_resolve_fs_pat, function(match, key) {
            if (!Object.prototype.hasOwnProperty.call(kwargs, key)) {
                return "";
            }
            return "" + kwargs[key];
        });
    }
    function apply_formatting(value, format_spec) {
        var _$rapyd$_unpack, fill, align, sign, fhash, zeropad, width, comma, precision, ftype, is_numeric, is_int, lftype, code, exp, nval, is_positive, left, right;
        if (format_spec.indexOf("{") !== -1) {
            format_spec = resolve_format_spec(format_spec);
        }
        if (_$rapyd$_str.format._template_format_pat === undefined) {
            _$rapyd$_str.format._template_format_pat = /([^{}](?=[<>=^]))?([<>=^])?([-+\x20])?(\#)?(0)?(\d+)?(,)?(?:\.(\d+))?([bcdeEfFgGnosxX%])?/;
        }
        try {
            _$rapyd$_unpack = format_spec.match(_$rapyd$_str.format._template_format_pat).slice(1);
            fill = _$rapyd$_unpack[0];
            align = _$rapyd$_unpack[1];
            sign = _$rapyd$_unpack[2];
            fhash = _$rapyd$_unpack[3];
            zeropad = _$rapyd$_unpack[4];
            width = _$rapyd$_unpack[5];
            comma = _$rapyd$_unpack[6];
            precision = _$rapyd$_unpack[7];
            ftype = _$rapyd$_unpack[8];
        } catch (_$rapyd$_Exception) {
            if (_$rapyd$_Exception instanceof TypeError) {
                return value;
            } else {
                throw _$rapyd$_Exception;
            }
        }
        if (zeropad) {
            fill = fill || "0";
            align = align || "=";
        } else {
            fill = fill || " ";
            align = align || ">";
        }
        is_numeric = Number(value) === value;
        is_int = is_numeric && value % 1 === 0;
        precision = parseInt(precision, 10);
        lftype = (ftype || "").toLowerCase();
        if (ftype === "n") {
            is_numeric = true;
            if (is_int) {
                if (comma) {
                    throw new ValueError("Cannot specify ',' with 'n'");
                }
                value = parseInt(value, 10).toLocaleString();
            } else {
                value = parseFloat(value).toLocaleString();
            }
        } else if (['b', 'c', 'd', 'o', 'x'].indexOf(lftype) !== -1) {
            value = parseInt(value, 10);
            is_numeric = true;
            if (!isNaN(value)) {
                if (ftype === "b") {
                    value = (value >>> 0).toString(2);
                    if (fhash) {
                        value = "0b" + value;
                    }
                } else if (ftype === "c") {
                    if (value > 65535) {
                        code = value - 65536;
                        value = String.fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
                    } else {
                        value = String.fromCharCode(value);
                    }
                } else if (ftype === "d") {
                    if (comma) {
                        value = value.toLocaleString("en-US");
                    } else {
                        value = value.toString(10);
                    }
                } else if (ftype === "o") {
                    value = value.toString(8);
                    if (fhash) {
                        value = "0o" + value;
                    }
                } else if (lftype === "x") {
                    value = value.toString(16);
                    value = (ftype === "x") ? value.toLowerCase() : value.toUpperCase();
                    if (fhash) {
                        value = "0x" + value;
                    }
                }
            }
        } else if (['e','f','g','%'].indexOf(lftype) !== -1) {
            is_numeric = true;
            value = parseFloat(value);
            if (lftype === "e") {
                value = value.toExponential((isNaN(precision)) ? 6 : precision);
                value = (ftype === "E") ? value.toUpperCase() : value.toLowerCase();
            } else if (lftype === "f") {
                value = value.toFixed((isNaN(precision)) ? 6 : precision);
                value = (ftype === "F") ? value.toUpperCase() : value.toLowerCase();
            } else if (ftype === "%") {
                value *= 100;
                value = value.toFixed((isNaN(precision)) ? 6 : precision) + "%";
            } else if (lftype === "g") {
                if (isNaN(precision)) {
                    precision = 6;
                }
                precision = max(1, precision);
                exp = parseInt(value.toExponential(precision - 1).toLowerCase().split("e")[1], 10);
                if (-4 <= exp && exp < precision) {
                    value = value.toFixed(precision - 1 - exp);
                } else {
                    value = value.toExponential(precision - 1);
                }
                value = value.replace(/0+$/g, "");
                if (value[value.length-1] === ".") {
                    value = value.slice(0, -1);
                }
                if (ftype === "G") {
                    value = value.toUpperCase();
                }
            }
        } else {
            value += "";
            if (!isNaN(precision)) {
                value = value.slice(0, precision);
            }
        }
        value += "";
        if (is_numeric && sign) {
            nval = Number(value);
            is_positive = !isNaN(nval) && nval >= 0;
            if (is_positive && (sign === " " || sign === "+")) {
                value = sign + value;
            }
        }
        function repeat(char, num) {
            return (new Array(num+1)).join(char);
        }
        if (is_numeric && width && width[0] === "0") {
            width = width.slice(1);
            _$rapyd$_unpack = ["0", "="];
            fill = _$rapyd$_unpack[0];
            align = _$rapyd$_unpack[1];
        }
        width = parseInt(width || "-1", 10);
        if (isNaN(width)) {
            throw new ValueError("Invalid width specification: " + width);
        }
        if (fill && value.length < width) {
            if (align === "<") {
                value = value + repeat(fill, width - value.length);
            } else if (align === ">") {
                value = repeat(fill, width - value.length) + value;
            } else if (align === "^") {
                left = Math.floor((width - value.length) / 2);
                right = width - left - value.length;
                value = repeat(fill, left) + value + repeat(fill, right);
            } else if (align === "=") {
                if (_$rapyd$_in(value[0], "+- ")) {
                    value = value[0] + repeat(fill, width - value.length) + value.slice(1);
                } else {
                    value = repeat(fill, width - value.length) + value;
                }
            } else {
                throw new ValueError("Unrecognized alignment: " + align);
            }
        }
        return value;
    }
    function parse_markup(markup) {
        var key, transformer, format_spec, _$rapyd$_chain_assign_temp, pos, state, ch;
        _$rapyd$_chain_assign_temp = "";
        key = _$rapyd$_chain_assign_temp;
        transformer = _$rapyd$_chain_assign_temp;
        format_spec = _$rapyd$_chain_assign_temp;
;
        pos = 0;
        state = 0;
        while (pos < markup.length) {
            ch = markup[pos];
            if (state === 0) {
                if (ch === "!") {
                    state = 1;
                } else if (ch === ":") {
                    state = 2;
                } else {
                    key += ch;
                }
            } else if (state === 1) {
                if (ch === ":") {
                    state = 2;
                } else {
                    transformer += ch;
                }
            } else {
                format_spec += ch;
            }
            pos += 1;
        }
        return [key, transformer, format_spec];
    }
    function render_markup(markup) {
        var _$rapyd$_unpack, key, transformer, format_spec, lkey, nvalue, object, ans;
        _$rapyd$_unpack = parse_markup(markup);
        key = _$rapyd$_unpack[0];
        transformer = _$rapyd$_unpack[1];
        format_spec = _$rapyd$_unpack[2];
        if (transformer && ['a', 'r', 's'].indexOf(transformer) === -1) {
            throw new ValueError("Unknown conversion specifier: " + transformer);
        }
        lkey = key.length && key.split(/[.\[]/, 1)[0];
        if (lkey) {
            explicit = true;
            if (implicit) {
                throw new ValueError("cannot switch from automatic field numbering to manual field specification");
            }
            nvalue = parseInt(lkey);
            object = (isNaN(nvalue)) ? kwargs[lkey] : args[nvalue];
            if (object === undefined) {
                if (isNaN(nvalue)) {
                    throw new KeyError(lkey);
                }
                throw new IndexError(lkey);
            }
            object = resolve(key.slice(lkey.length), object);
        } else {
            implicit = true;
            if (explicit) {
                throw new ValueError("cannot switch from manual field specification to automatic field numbering");
            }
            if (idx >= args.length) {
                throw new IndexError("Not enough arguments to match template: " + template);
            }
            object = args[idx];
            idx += 1;
        }
        if (typeof object === "function") {
            object = object();
        }
        ans = "" + object;
        if (format_spec) {
            ans = apply_formatting(ans, format_spec);
        }
        return ans;
    }
    ans = "";
    pos = 0;
    in_brace = 0;
    markup = "";
    while (pos < template.length) {
        ch = template[pos];
        if (in_brace) {
            if (ch === "{") {
                in_brace += 1;
                markup += "{";
            } else if (ch === "}") {
                in_brace -= 1;
                if (in_brace > 0) {
                    markup += "}";
                } else {
                    ans += render_markup(markup);
                }
            } else {
                markup += ch;
            }
        } else {
            if (ch === "{") {
                if (template[pos + 1] === "{") {
                    pos += 1;
                    ans += "{";
                } else {
                    in_brace = 1;
                    markup = "";
                }
            } else {
                ans += ch;
            }
        }
        pos += 1;
    }
    if (in_brace) {
        throw new ValueError("expected '}' before end of string");
    }
    return ans;
};
_$rapyd$_str.capitalize = function(string) {
    if (string) {
        string = string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
    return string;
};
_$rapyd$_str.center = function(string, width, fill) {
    var left, right;
    left = Math.floor((width - string.length) / 2);
    right = width - left - string.length;
    fill = fill || " ";
    return new Array(left+1).join(fill) + string + new Array(right+1).join(fill);
};
_$rapyd$_str.count = function(string, needle, start, end) {
    var _$rapyd$_unpack, pos, step, ans;
    start = start || 0;
    end = end || string.length;
    if (start < 0 || end < 0) {
        string = string.slice(start, end);
        _$rapyd$_unpack = [0, string.length];
        start = _$rapyd$_unpack[0];
        end = _$rapyd$_unpack[1];
    }
    pos = start;
    step = needle.length;
    ans = 0;
    while (pos !== -1) {
        pos = string.indexOf(needle, pos);
        if (pos !== -1) {
            ans += 1;
            pos += step;
        }
    }
    return ans;
};
_$rapyd$_str.endswith = function(string, suffixes, start, end) {
    var q;
    start = start || 0;
    if (typeof suffixes === "string") {
        suffixes = [suffixes];
    }
    if (end !== undefined) {
        string = string.slice(0, end);
    }
    for (var i = 0; i < suffixes.length; i++) {
        q = suffixes[i];
        if (string.indexOf(q, Math.max(start, string.length - q.length)) !== -1) {
            return true;
        }
    }
    return false;
};
_$rapyd$_str.startswith = function(string, prefixes, start, end) {
    var prefix;
    start = start || 0;
    if (typeof prefixes === "string") {
        prefixes = [prefixes];
    }
    for (var i = 0; i < prefixes.length; i++) {
        prefix = prefixes[i];
        end = (end === undefined) ? string.length : end;
        if (end - start >= prefix.length && prefix === string.slice(start, start + prefix.length)) {
            return true;
        }
    }
    return false;
};
_$rapyd$_str.find = function(string, needle, start, end) {
    var ans;
    while (start < 0) {
        start += string.length;
    }
    ans = string.indexOf(needle, start);
    if (end !== undefined && ans !== -1) {
        while (end < 0) {
            end += string.length;
        }
        if (ans >= end - needle.length) {
            return -1;
        }
    }
    return ans;
};
_$rapyd$_str.rfind = function(string, needle, start, end) {
    var ans;
    while (end < 0) {
        end += string.length;
    }
    ans = string.lastIndexOf(needle, end - 1);
    if (start !== undefined && ans !== -1) {
        while (start < 0) {
            start += string.length;
        }
        if (ans < start) {
            return -1;
        }
    }
    return ans;
};
_$rapyd$_str.index = function(string, needle, start, end) {
    var ans;
    ans = _$rapyd$_str.find.apply(null, arguments);
    if (ans === -1) {
        throw new ValueError("substring not found");
    }
    return ans;
};
_$rapyd$_str.rindex = function(string, needle, start, end) {
    var ans;
    ans = _$rapyd$_str.rfind.apply(null, arguments);
    if (ans === -1) {
        throw new ValueError("substring not found");
    }
    return ans;
};
_$rapyd$_str.islower = function(string) {
    return string.length > 0 && string.toUpperCase() !== string;
};
_$rapyd$_str.isupper = function(string) {
    return string.length > 0 && string.toLowerCase() !== string;
};
_$rapyd$_str.isspace = function(string) {
    return string.length > 0 && /^\s+$/.test(string);
};
_$rapyd$_str.join = function(string, iterable) {
    var ans, r;
    if (Array.isArray(iterable)) {
        return iterable.join(string);
    }
    ans = "";
    r = iterable.next();
    while (!r.done) {
        if (ans) {
            ans += string;
        }
        ans += r.value;
        r = iterable.next();
    }
    return ans;
};
_$rapyd$_str.ljust = function(string, width, fill) {
    if (width > string.length) {
        fill = fill || " ";
        string += new Array(width - string.length + 1).join(fill);
    }
    return string;
};
_$rapyd$_str.rjust = function(string, width, fill) {
    if (width > string.length) {
        fill = fill || " ";
        string = new Array(width - string.length + 1).join(fill) + string;
    }
    return string;
};
_$rapyd$_str.lower = function(string) {
    return string.toLowerCase();
};
_$rapyd$_str.upper = function(string) {
    return string.toUpperCase();
};
_$rapyd$_str.lstrip = function(string, chars) {
    var pos;
    pos = 0;
    chars = chars || _$rapyd$_str.whitespace;
    while (chars.indexOf(string[pos]) !== -1) {
        pos += 1;
    }
    if (pos) {
        string = string.slice(pos);
    }
    return string;
};
_$rapyd$_str.rstrip = function(string, chars) {
    var pos;
    pos = string.length - 1;
    chars = chars || _$rapyd$_str.whitespace;
    while (chars.indexOf(string[pos]) !== -1) {
        pos -= 1;
    }
    if (pos < string.length - 1) {
        string = string.slice(0, pos + 1);
    }
    return string;
};
_$rapyd$_str.strip = function(string, chars) {
    return _$rapyd$_str.lstrip(_$rapyd$_str.rstrip(string, chars), chars);
};
_$rapyd$_str.partition = function(string, sep) {
    var idx;
    idx = string.indexOf(sep);
    if (idx === -1) {
        return [string, "", ""];
    }
    return [string.slice(0, idx), sep, string.slice(idx + sep.length)];
};
_$rapyd$_str.rpartition = function(string, sep) {
    var idx;
    idx = string.lastIndexOf(sep);
    if (idx === -1) {
        return ["", "", string];
    }
    return [string.slice(0, idx), sep, string.slice(idx + sep.length)];
};
_$rapyd$_str.replace = function(string, old, repl, count) {
    var pos, idx;
    if (count === 1) {
        return string.replace(old, repl);
    }
    if (count < 1) {
        return string;
    }
    count = count || Number.MAX_VALUE;
    pos = 0;
    while (count > 0) {
        count -= 1;
        idx = string.indexOf(old, pos);
        if (idx === -1) {
            break;
        }
        pos = idx + repl.length;
        string = string.slice(0, idx) + repl + string.slice(idx + old.length);
    }
    return string;
};
_$rapyd$_str.split = function(string, sep, maxsplit) {
    var ans, extra, parts;
    if (maxsplit === 0) {
        return _$rapyd$_list_decorate([ string ]);
    }
    if (sep === undefined || sep === null) {
        if (maxsplit > 0) {
            ans = string.split(/(\s+)/);
            extra = "";
            parts = [];
            for (var i = 0; i < ans.length; i++) {
                if (parts.length >= maxsplit + 1) {
                    extra += ans[i];
                } else if (i % 2 === 0) {
                    parts.push(ans[i]);
                }
            }
            parts[parts.length-1] += extra;
            ans = parts;
        } else {
            ans = string.split(/\s+/);
        }
    } else {
        if (sep === "") {
            throw new ValueError("empty separator");
        }
        ans = string.split(sep);
        if (maxsplit > 0 && ans.length > maxsplit) {
            extra = ans.slice(maxsplit).join(sep);
            ans = ans.slice(0, maxsplit);
            ans.push(extra);
        }
    }
    return _$rapyd$_list_decorate(ans);
};
_$rapyd$_str.rsplit = function(string, sep, maxsplit) {
    var ans, is_space, pos, current, spc, ch, end, _$rapyd$_chain_assign_temp, idx;
    if (!maxsplit) {
        return _$rapyd$_str.split.call(null, string, sep, maxsplit);
    }
    if (sep === undefined || sep === null) {
        if (maxsplit > 0) {
            ans = [];
            is_space = /\s/;
            pos = string.length - 1;
            current = "";
            while (pos > -1 && maxsplit > 0) {
                spc = false;
                ch = string[pos];
                while (pos > -1 && is_space.test(ch)) {
                    spc = true;
                    ch = string[--pos];
                }
                if (spc) {
                    if (current) {
                        ans.push(current);
                        maxsplit -= 1;
                    }
                    current = ch;
                } else {
                    current += ch;
                }
                pos -= 1;
            }
            ans.push(string.slice(0, pos + 1) + current);
            ans.reverse();
        } else {
            ans = string.split(/\s+/);
        }
    } else {
        if (sep === "") {
            throw new ValueError("empty separator");
        }
        ans = [];
        _$rapyd$_chain_assign_temp = string.length;
        pos = _$rapyd$_chain_assign_temp;
        end = _$rapyd$_chain_assign_temp;
;
        while (pos > -1 && maxsplit > 0) {
            maxsplit -= 1;
            idx = string.lastIndexOf(sep, pos);
            if (idx === -1) {
                break;
            }
            ans.push(string.slice(idx + sep.length, end));
            pos = idx - 1;
            end = idx;
        }
        ans.push(string.slice(0, end));
        ans.reverse();
    }
    return _$rapyd$_list_decorate(ans);
};
_$rapyd$_str.splitlines = function(string, keepends) {
    var parts, ans;
    if (keepends) {
        parts = string.split(/((?:\r?\n)|\r)/);
        ans = [];
        for (var i = 0; i < parts.length; i++) {
            if (i % 2 === 0) {
                ans.push(parts[i]);
            } else {
                ans[ans.length-1] += parts[i];
            }
        }
    } else {
        ans = string.split(/(?:\r?\n)|\r/);
    }
    return _$rapyd$_list_decorate(ans);
};
_$rapyd$_str.swapcase = function(string) {
    var ans, a, b;
    ans = new Array(string.length);
    for (var i = 0; i < ans.length; i++) {
        a = string[i];
        b = a.toLowerCase();
        if (a === b) {
            b = a.toUpperCase();
        }
        ans[i] = b;
    }
    return ans.join("");
};
_$rapyd$_str.zfill = function(string, width) {
    if (width > string.length) {
        string = new Array(width - string.length + 1).join("0") + string;
    }
    return string;
};
_$rapyd$_str.uchrs = function(string, with_positions) {
    return (function(){
        var _$rapyd$_d = {};
        _$rapyd$_d["_string"] = string;
        _$rapyd$_d["_pos"] = 0;
        _$rapyd$_d[_$rapyd$_iterator_symbol] = function() {
            return this;
        };
        _$rapyd$_d["next"] = function() {
            var length, pos, value, ans, extra;
            length = this._string.length;
            if (this._pos >= length) {
                return {
                    "done": true
                };
            }
            pos = this._pos;
            value = this._string.charCodeAt(this._pos++);
            ans = "\ufffd";
            if (55296 <= value && value <= 56319) {
                if (this._pos < length) {
                    extra = this._string.charCodeAt(this._pos++);
                    if ((extra & 56320) === 56320) {
                        ans = String.fromCharCode(value, extra);
                    }
                }
            } else if ((value & 56320) !== 56320) {
                ans = String.fromCharCode(value);
            }
            if (with_positions) {
                return {
                    "done": false,
                    "value": _$rapyd$_list_decorate([ pos, ans ])
                };
            } else {
                return {
                    "done": false,
                    "value": ans
                };
            }
        };
        return _$rapyd$_d;
    })();
};
_$rapyd$_str.uslice = function(string, start, end) {
    var items, iterator, r;
    items = [];
    iterator = _$rapyd$_str.uchrs(string);
    r = iterator.next();
    while (!r.done) {
        items.push(r.value);
        r = iterator.next();
    }
    return items.slice(start || 0, (end === undefined) ? items.length : end).join("");
};
_$rapyd$_str.ulen = function(string) {
    var iterator, r, ans;
    iterator = _$rapyd$_str.uchrs(string);
    r = iterator.next();
    ans = 0;
    while (!r.done) {
        r = iterator.next();
        ans += 1;
    }
    return ans;
};
_$rapyd$_str.ascii_lowercase = "abcdefghijklmnopqrstuvwxyz";
_$rapyd$_str.ascii_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
_$rapyd$_str.ascii_letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
_$rapyd$_str.digits = "0123456789";
_$rapyd$_str.punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
_$rapyd$_str.printable = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\u000b\f";
_$rapyd$_str.whitespace = " \t\n\r\u000b\f";
var str = _$rapyd$_str;;
    var min = (function min() {
            return Math.min;
        })();
    var max = (function max() {
            return Math.max;
        })();
    function iter(iterable) {
            var ans;
            if (typeof iterable[_$rapyd$_iterator_symbol] === "function") {
                return (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[_$rapyd$_iterator_symbol]();
            }
            if (_$rapyd$_arraylike(iterable)) {
                ans = {
                    "_i": -1,
                    "next": function() {
                        this._i += 1;
                        if (this._i < iterable.length) {
                            return {
                                "done": false,
                                "value": iterable[this._i]
                            };
                        }
                        return {
                            "done": true
                        };
                    }
                };
                ans[_$rapyd$_iterator_symbol] = function() {
                    return this;
                };
                return ans;
            }
            return iter(Object.keys(iterable));
        };
    function getattr(obj, name, defval) {
            var ret;
            try {
                ret = obj[name];
            } catch (_$rapyd$_Exception) {
                if (_$rapyd$_Exception instanceof TypeError) {
                    if (defval === undefined) {
                        throw new AttributeError("The attribute " + name + " is not present");
                    }
                    return defval;
                } else {
                    throw _$rapyd$_Exception;
                }
            }
            if (ret === undefined && !(name in obj)) {
                if (defval === undefined) {
                    throw new AttributeError("The attribute " + name + " is not present");
                }
                ret = defval;
            }
            return ret;
        };
    var _$rapyd$_in = (function _$rapyd$_in() {
            if (typeof Map === "function" && typeof Set === "function") {
                return function(val, arr) {
                    if (Array.isArray(arr) || typeof arr === "string") {
                        return arr.indexOf(val) !== -1;
                    }
                    if (typeof arr.__contains__ === "function") {
                        return arr.__contains__(val);
                    }
                    if ((arr instanceof Map || arr instanceof Set)) {
                        return arr.has(val);
                    }
                    return Object.prototype.hasOwnProperty.call(arr, val);
                };
            }
            return function(val, arr) {
                if (Array.isArray(arr) || typeof arr === "string") {
                    return arr.indexOf(val) !== -1;
                }
                if (typeof arr.__contains__ === "function") {
                    return arr.__contains__(val);
                }
                return Object.prototype.hasOwnProperty.call(arr, val);
            };
        })();

    (function(){

        var __name__ = "__main__";


        var tap, sel, qbef_select, qcurr_select, qnumberOfRows, temp_item, trxbef_select, trxcurr_select, faktor, entriedItem;
        var isnt_touchable = !('ontouchstart' in window);;
        function sp2() {
            var pageHeight, pageWidth, ratio;
            pageHeight = 530;
            pageWidth = 800;
            ratio = window.innerWidth / pageWidth;
            if (ratio < 1) {
                document.body.style.transform = "scale(" + ratio + ")";
                document.body.style["transform-origin"] = "0 0";
            }
        }
        function yuy() {
            alert("yuy!");
        }
        (function() {
            function do_this() {
                set_today();
                generateRows();
                focusNamaObat();
                select("r1");
                if (isnt_touchable) {
                    document.getElementById("r1").setAttribute("onclick", "sel.mark('r1');");
                    document.getElementById("r1").setAttribute("ondblclick", "sel.reaccItem();");
                } else {
                    document.getElementById("r1").setAttribute("ontouchstart", "tap.touchstart('r1', onetapr1, dbltapr1)(event);");
                    document.getElementById("r1").setAttribute("ontouchend", "tap.touchend('r1', onetapr1, dbltapr1)(event);");
                }
            }
            document.addEventListener("DOMContentLoaded", do_this);
        }).call();
        function Tap() {
            Tap.prototype.__init__.apply(this, arguments);
        }
        Tap.prototype.__init__ = function __init__() {
            var self = this;
            self.lasttap = "";
            self.r = "";
            self.treshold = 10;
            self.loc = _$rapyd$_list_decorate([ 0, 0 ]);
        };
        Tap.prototype.tap = function tap(source, fn, fn2) {
            var self = this;
            function reset() {
                self.lasttap = "";
            }
            function f(event) {
                if (source === self.lasttap) {
                    clearTimeout(self.r);
                    fn2();
                } else {
                    fn();
                    self.lasttap = source;
                    self.r = setTimeout(reset, 200);
                }
            }
            return f;
        };
        Tap.prototype.touchstart = function touchstart(source, fn, fn2) {
            var self = this;
            function f(event) {
                self.loc = _$rapyd$_list_decorate([ event.changedTouches[0].pageX, event.changedTouches[0].pageY ]);
            }
            return f;
        };
        Tap.prototype.touchend = function touchend(source_te, fn_te, fn2_te) {
            var self = this;
            function f(event) {
                var test_x, test_y;
                test_x = abs(event.changedTouches[0].pageX - self.loc[0]) <= self.treshold;
                test_y = abs(event.changedTouches[0].pageY - self.loc[1]) <= self.treshold;
                if (test_x && test_y) {
                    self.tap(source_te, fn_te, fn2_te)(event);
                }
            }
            return f;
        };

        tap = new Tap();
        function Selector() {
            Selector.prototype.__init__.apply(this, arguments);
        }
        Selector.prototype.__init__ = function __init__() {
            var self = this;
            self.bef_select = "r1";
            self.curr_select = "r1";
            self.numberOfRows = 1;
            self.top_frame = 1;
            self.bot_frame = 8;
        };
        Selector.prototype.curr_num = function curr_num() {
            var self = this;
            return parseInt(self.curr_select.slice(1, 6));
        };
        Selector.prototype.chselect = function chselect(new_select) {
            var self = this;
            self.bef_select = self.curr_select;
            self.curr_select = new_select;
        };
        Selector.prototype.mark = function mark(the_id) {
            var self = this;
            self.chselect(the_id);
            deselect(self.bef_select);
            select(self.curr_select);
            self.checkFrame();
            self.moveFrame();
            self.scrollToFrame();
        };
        Selector.prototype.moveFrame = function moveFrame() {
            var self = this;
            if (self.curr_num() >= self.top_frame && self.curr_num() <= self.bot_frame) {
            } else {
                if (self.curr_num() > self.bot_frame) {
                    self.bot_frame = self.curr_num();
                    self.top_frame = self.bot_frame - 7;
                } else if (self.curr_num() < self.top_frame) {
                    self.top_frame = self.curr_num();
                    self.bot_frame = self.top_frame + 7;
                }
            }
        };
        Selector.prototype.upOrDown = function upOrDown(e) {
            var self = this;
            function ch_mark(num) {
                var num_str;
                num_str = num.toString();
                self.mark("r" + num_str);
            }
            if (e.keyCode === 38) {
                if (self.curr_num() !== 1) {
                    ch_mark(self.curr_num() - 1);
                } else {
                    self.mark(self.curr_select);
                }
            } else if (e.keyCode === 40) {
                if (self.curr_num() !== self.numberOfRows) {
                    ch_mark(self.curr_num() + 1);
                } else {
                    self.mark(self.curr_select);
                }
            } else if (e.keyCode === 13) {
                self.reaccItem();
            }
        };
        Selector.prototype.reaccItem = function reaccItem() {
            var self = this;
            emptyTheFields();
            copyDataToTemp(self.curr_num() - 1);
            removeARow(self.curr_select);
            entriedItem.splice(self.curr_num() - 1, 1);
            fillTheFieldsFromTemp();
            document.getElementById("inp_qty").focus();
        };
        Selector.prototype.row_count = function row_count() {
            var self = this;
            add_row(self.numberOfRows + 1);
            self.numberOfRows = self.numberOfRows + 1;
        };
        Selector.prototype.checkFrame = function checkFrame() {
            var self = this;
            var currTopScroll;
            currTopScroll = document.getElementById("tab_rows").scrollTop;
            self.top_frame = Math.ceil(currTopScroll / 23) + 1;
            self.bot_frame = self.top_frame + 7;
        };
        Selector.prototype.scrollToFrame = function scrollToFrame() {
            var self = this;
            document.getElementById("tab_rows").scrollTop = (self.top_frame - 1) * 23;
        };

        function select(which_id) {
            var myElements, i;
            myElements = document.getElementById(which_id).getElementsByTagName("TD");
            for (i = 0; i < myElements.length; i++) {
                myElements[i].setAttribute("style", "background-color:#eb8a1b");
            }
        }
        function deselect(which_id) {
            var myElements, i;
            myElements = document.getElementById(which_id).getElementsByTagName("TD");
            for (i = 0; i < myElements.length; i++) {
                myElements[i].setAttribute("style", "background-color:#ffffff");
            }
        }
        sel = new Selector();
        function onetapr1() {
            sel.mark("r1");
        }
        function dbltapr1() {
            sel.reaccItem();
        }
        function add_row(number) {
            var tr, num_row, col1, div1, num_row_table, col2, div2, p2, col3, div3, col4, div4, col5, div5, col6, div6, the_table;
            tr = document.createElement("tr");
            num_row = number.toString();
            tr.setAttribute("id", "r" + num_row);
            if (isnt_touchable) {
                tr.setAttribute("onclick", "sel.mark('r" + num_row + "');");
                tr.setAttribute("ondblclick", "sel.reaccItem();");
            } else {
                function onetap() {
                    sel.mark("r" + num_row);
                }
                function dbltap() {
                    sel.reaccItem();
                }
                tr.addEventListener("touchstart", tap.touchstart("r" + num_row, onetap, dbltap));
                tr.addEventListener("touchend", tap.touchend("r" + num_row, onetap, dbltap));
            }
            col1 = document.createElement("td");
            col1.setAttribute("bgcolor", "#ffffff");
            div1 = document.createElement("div");
            div1.setAttribute("style", "width:56px;text-align:center;");
            col1.appendChild(div1);
            num_row_table = document.createTextNode(num_row);
            div1.appendChild(num_row_table);
            tr.appendChild(col1);
            col2 = document.createElement("td");
            div2 = document.createElement("div");
            p2 = document.createElement("p");
            col2.setAttribute("bgcolor", "#ffffff");
            div2.setAttribute("style", "width:331px; overflow:hidden;padding-right:0px");
            p2.setAttribute("style", "width:500px; margin:0px; text-align:left;");
            div2.appendChild(p2);
            col2.appendChild(div2);
            tr.appendChild(col2);
            col3 = document.createElement("td");
            div3 = document.createElement("div");
            col3.setAttribute("bgcolor", "#ffffff");
            div3.setAttribute("style", "width:86px;text-align:center;");
            col3.appendChild(div3);
            tr.appendChild(col3);
            col4 = document.createElement("td");
            div4 = document.createElement("div");
            col4.setAttribute("bgcolor", "#ffffff");
            div4.setAttribute("style", "width:76px;text-align:center;");
            col4.appendChild(div4);
            tr.appendChild(col4);
            col5 = document.createElement("td");
            div5 = document.createElement("div");
            col5.setAttribute("bgcolor", "#ffffff");
            div5.setAttribute("style", "width:96px;text-align:center;");
            col5.appendChild(div5);
            tr.appendChild(col5);
            col6 = document.createElement("td");
            div6 = document.createElement("div");
            col6.setAttribute("bgcolor", "#ffffff");
            div6.setAttribute("style", "width:96px;text-align:center;");
            col6.appendChild(div6);
            tr.appendChild(col6);
            the_table = document.getElementById("cells");
            the_table.appendChild(tr);
        }
        function el_add_row() {
            document.getElementById("entri").onclick = sel.row_count;
        }
        function disable_default(e) {
            if (e.keyCode === 38 || e.keyCode === 40) {
                e.preventDefault();
            }
        }
        function ch_focus(e) {
            if (e.keyCode === 9) {
                e.preventDefault();
                document.getElementById("save").focus();
            }
        }
        function get_today() {
            var today, mnth, dt, mnthfmtd, dtfmtd, fmttoday;
            today = new Date(Date.now());
            mnth = (today.getMonth() + 1).toString();
            dt = today.getDate().toString();
            if (mnth.length === 2) {
                mnthfmtd = mnth;
            } else {
                mnthfmtd = "0" + mnth;
            }
            if (dt.length === 2) {
                dtfmtd = dt;
            } else {
                dtfmtd = "0" + dt;
            }
            fmttoday = today.getFullYear().toString() + "-" + mnthfmtd + "-" + dtfmtd;
            return fmttoday;
        }
        function do_query(t, e) {
            if (e.keyCode === 13) {
                if (t.value === "") {
                    alert("Harap isi Nama Obat!");
                    document.getElementById("inp_namaobat").focus();
                } else {
                    qqueryget(t.value);
                }
            }
        }
        function do_query_ch(t) {
            if (t.value === "") {
                alert("Harap isi Nama Obat!");
                document.getElementById("inp_namaobat").focus();
            } else {
                qqueryget(t.value);
            }
        }
        function set_today() {
            document.getElementById("inp_tanggal").setAttribute("value", get_today());
        }
        function generateRows() {
            var i;
            for (i = 0; i < 9; i++) {
                sel.row_count();
            }
        }
        function focusNamaObat() {
            document.getElementById("inp_namaobat").focus();
        }
        qbef_select = "qr1";
        qcurr_select = "qr1";
        function qcurr_num() {
            return parseInt(qcurr_select.substring(2, 7));
        }
        function qselect(which_id) {
            var myElements, i;
            myElements = document.getElementById(which_id).getElementsByTagName("TD");
            for (i = 0; i < myElements.length; i++) {
                myElements[i].setAttribute("style", "background-color:#eb8a1b;");
            }
        }
        function qdeselect(which_id) {
            var myElements, i;
            myElements = document.getElementById(which_id).getElementsByTagName("TD");
            for (i = 0; i < myElements.length; i++) {
                myElements[i].setAttribute("style", "background-color:#ffffff;");
            }
        }
        function qmark(the_id) {
            qbef_select = qcurr_select;
            qcurr_select = the_id;
            qdeselect(qbef_select);
            qselect(qcurr_select);
            qcheckFrame();
            qmoveFrame();
            qscrollToFrame();
        }
        function qpress_enter(e) {
            if (e.keyCode === 13) {
                alert(qcurr_select);
            }
        }
        qnumberOfRows = 0;
        function qadd_row(number) {
            var tr, num_row, col1, div1, col2, div2, p2, the_table;
            tr = document.createElement("tr");
            num_row = number.toString();
            tr.setAttribute("id", "qr" + num_row);
            if (isnt_touchable) {
                tr.setAttribute("onclick", "qmark('qr" + num_row + "');");
                tr.setAttribute("ondblclick", "chosen()");
            } else {
                function onetap() {
                    qmark("qr" + num_row);
                }
                function dbltap() {
                    chosen();
                }
                function touchstart(evt) {
                    tap.touchstart("qr" + num_row, onetap, dbltap)(evt);
                }
                function touchend(evt) {
                    tap.touchend("qr" + num_row, onetap, dbltap)(evt);
                }
                tr.ontouchstart = touchstart;
                tr.ontouchend = touchend;
            }
            col1 = document.createElement("td");
            col1.setAttribute("bgcolor", "#ffffff");
            div1 = document.createElement("div");
            div1.setAttribute("style", "width:196px; text-align:center;");
            col1.appendChild(div1);
            tr.appendChild(col1);
            col2 = document.createElement("td");
            div2 = document.createElement("div");
            p2 = document.createElement("p");
            col2.setAttribute("bgcolor", "#ffffff");
            div2.setAttribute("style", "width:542px; overflow:hidden;padding-right:0px");
            p2.setAttribute("style", "width:700px; margin:0px; text-align:left;");
            div2.appendChild(p2);
            col2.appendChild(div2);
            tr.appendChild(col2);
            the_table = document.getElementById("qcells");
            the_table.appendChild(tr);
        }
        function qrow_count() {
            qadd_row(qnumberOfRows + 1);
            qnumberOfRows = qnumberOfRows + 1;
        }
        function qqueryget(token) {
            var xhttp;
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    qres = JSON.parse(xhttp.responseText);
                    qrowsNeeded = qres.result.length;
                    if (qres.result.length < 21) {
                        qrowsRange = qrowsNeeded;
                    } else {
                        qrowsRange = 21;
                    }
                    qtop_frame = 1;
                    qbot_frame = qtop_frame + (qrowsRange - 1);
                    frame_constructor();
                    qrow_count();
                    qgenerateRows();
                    qfillTheRows();
                    qautoSelect();
                    if (qres.result.length === 0) {
                        alert("Tidak ditemukan Nama Barang dengan Keyword: '" + token + "'");
                    }
                }
            };
            xhttp.open("GET", "/queryreq?key=" + token, true);
            xhttp.send();
        }
        function qquery_delay() {
            setTimeout(qqueryget, 1e3);
        }
        function qgenerateRows() {
            var i;
            for (i = 0; i < qrowsNeeded - 1; i++) {
                qrow_count();
            }
        }
        function qfillTheRows() {
            var i;
            for (i = 0; i < qrowsNeeded; i++) {
                document.getElementById("qr" + (i + 1)).getElementsByTagName("TD")[0].getElementsByTagName("DIV")[0].innerHTML = qres.result[i][0];
                document.getElementById("qr" + (i + 1)).getElementsByTagName("TD")[1].getElementsByTagName("DIV")[0].getElementsByTagName("P")[0].innerHTML = qres.result[i][1];
            }
        }
        function qremoveFloat() {
            document.getElementById("qfloat").remove();
            qnumberOfRows = 0;
            qbef_select = "qr1";
            qcurr_select = "qr1";
        }
        function qcheckFrame() {
            var currTopScroll;
            currTopScroll = document.getElementById("qtab_rows").scrollTop;
            qtop_frame = Math.ceil(currTopScroll / 23) + 1;
            qbot_frame = qtop_frame + (qrowsRange - 1);
        }
        function qmoveFrame() {
            if (qcurr_num() >= qtop_frame && qcurr_num() <= qbot_frame) {
            } else if (qcurr_num() > qbot_frame) {
                qbot_frame = qcurr_num();
                qtop_frame = qbot_frame - (qrowsRange - 1);
            } else if (qcurr_num() < qtop_frame) {
                qtop_frame = qcurr_num();
                qbot_frame = qtop_frame + (qrowsRange - 1);
            }
        }
        function qscrollToFrame() {
            document.getElementById("qtab_rows").scrollTop = (qtop_frame - 1) * 23;
        }
        function qupOrDown(e) {
            function ch_mark(num) {
                qmark("qr" + num.toString());
            }
            if (e.keyCode === 38) {
                if (qcurr_num() !== 1) {
                    ch_mark(qcurr_num() - 1);
                } else {
                    qmark(qcurr_select);
                }
            } else if (e.keyCode === 40) {
                if (qcurr_num() !== qnumberOfRows) {
                    ch_mark(qcurr_num() + 1);
                } else {
                    qmark(qcurr_select);
                }
            } else if (e.keyCode === 13) {
                chosen();
            } else if (e.keyCode === 27) {
                qremoveFloat();
                document.getElementById("inp_namaobat").focus();
            }
        }
        function qdisable_default(e) {
            if (e.keyCode === 38 || e.keyCode === 40) {
                e.preventDefault();
            }
        }
        function qautoSelect() {
            document.getElementById("qcells").focus();
            select("qr1");
        }
        function frame_constructor() {
            var divc, tabHeader, qtr, qth1, qdivh1, qtnh1, qth2, qdivh2, qtnh2, qth3, qdivh3, qdivr, qtabler;
            divc = document.createElement("div");
            divc.id = "qfloat";
            divc.setAttribute("style", "background-color: #dddddd; height:546px; width:805px; position:absolute; top:0px; left:0px; z-index:1;");
            tabHeader = document.createElement("table");
            tabHeader.setAttribute("style", "width:800px;height:20px;");
            qtr = document.createElement("tr");
            qth1 = document.createElement("th");
            qth1.setAttribute("style", "background-color:#aaaaaa;");
            qdivh1 = document.createElement("div");
            qdivh1.setAttribute("style", "width:196px;");
            qtnh1 = document.createTextNode("KODE OBAT");
            qth2 = document.createElement("th");
            qth2.setAttribute("style", "background-color:#aaaaaa;");
            qdivh2 = document.createElement("div");
            qdivh2.setAttribute("style", "width:542px;");
            qtnh2 = document.createTextNode("NAMA OBAT");
            qth3 = document.createElement("th");
            qth3.setAttribute("style", "background-color:#aaaaaa;");
            qdivh3 = document.createElement("div");
            qdivh3.setAttribute("style", "width:18px;");
            qdivh1.appendChild(qtnh1);
            qdivh2.appendChild(qtnh2);
            qth1.appendChild(qdivh1);
            qth2.appendChild(qdivh2);
            qth3.appendChild(qdivh3);
            qtr.appendChild(qth1);
            qtr.appendChild(qth2);
            qtr.appendChild(qth3);
            tabHeader.appendChild(qtr);
            divc.appendChild(tabHeader);
            qdivr = document.createElement("div");
            qdivr.id = "qtab_rows";
            qdivr.setAttribute("style", "height:506px; width:798px; overflow:scroll;");
            qdivr.setAttribute("onkeydown", "qdisable_default(event);");
            qtabler = document.createElement("table");
            qtabler.id = "qcells";
            qtabler.setAttribute("style", "width:776px;");
            qtabler.setAttribute("tabindex", "1");
            qtabler.setAttribute("onkeydown", "qupOrDown(event);");
            qdivr.appendChild(qtabler);
            divc.appendChild(qdivr);
            document.body.appendChild(divc);
        }
        temp_item = {};
        function rm_tempitem() {
            temp_item.kode = undefined;
            temp_item.nama = undefined;
            temp_item.satuan = undefined;
            temp_item.hnappn = undefined;
            temp_item.faktor = undefined;
            temp_item.hja = undefined;
            temp_item.qty = undefined;
            temp_item.subtot = undefined;
        }
        function chosen() {
            document.getElementById("inp_namaobat").value = qres.result[qcurr_num() - 1][1];
            document.getElementById("inp_satuan").value = qres.result[qcurr_num() - 1][2];
            temp_item.kode = qres.result[qcurr_num() - 1][0];
            temp_item.nama = qres.result[qcurr_num() - 1][1];
            temp_item.satuan = qres.result[qcurr_num() - 1][2];
            temp_item.hnappn = qres.result[qcurr_num() - 1][3];
            qremoveFloat();
            document.getElementById("inp_harga").focus();
        }
        function inputHarga() {
            if (temp_item.kode === undefined) {
                alert("Harap isi Nama Obat!");
                document.getElementById("inp_namaobat").focus();
            } else {
                jenisTrxFrame();
                document.getElementById("tabtrx").focus();
                trxmark("trx1");
            }
        }
        function chooseTrxFrame() {
            document.getElementById("inp_harga").value = fillHarga();
            document.getElementById("trxframe").remove();
            document.getElementById("inp_qty").focus();
        }
        function jenisTrxFrame() {
            var divd, tabd, trd1, trd2, trd3, divd1, divd2, divd3;
            divd = document.createElement("div");
            divd.id = "trxframe";
            divd.setAttribute("style", "background-color: #dddddd; height:108px; width:199px; padding:5px; position:absolute; top:128px; left:436px; z-index:1; border-style:solid; border-width:1px; border-color:black;");
            tabd = document.createElement("table");
            tabd.id = "tabtrx";
            tabd.setAttribute("style", "height:71px; width:198px");
            tabd.setAttribute("tabindex", "1");
            tabd.setAttribute("onkeydown", "trxupOrDown(event); dis_ch_focus(event);");
            trd1 = document.createElement("tr");
            trd1.id = "trx1";
            trd2 = document.createElement("tr");
            trd2.id = "trx2";
            trd3 = document.createElement("tr");
            trd3.id = "trx3";
            if (isnt_touchable) {
                trd1.setAttribute("onclick", "trxmark('trx1');");
                trd1.setAttribute("ondblclick", "chooseTrxFrame();");
                trd2.setAttribute("onclick", "trxmark('trx2');");
                trd2.setAttribute("ondblclick", "chooseTrxFrame();");
                trd3.setAttribute("onclick", "trxmark('trx3');");
                trd3.setAttribute("ondblclick", "chooseTrxFrame();");
            } else {
                function onetaptrx1() {
                    trxmark("trx1");
                }
                function onetaptrx2() {
                    trxmark("trx2");
                }
                function onetaptrx3() {
                    trxmark("trx3");
                }
                trd1.addEventListener("touchstart", tap.touchstart("trx1", onetaptrx1, chooseTrxFrame));
                trd2.addEventListener("touchstart", tap.touchstart("trx2", onetaptrx2, chooseTrxFrame));
                trd3.addEventListener("touchstart", tap.touchstart("trx3", onetaptrx3, chooseTrxFrame));
                trd1.addEventListener("touchend", tap.touchend("trx1", onetaptrx1, chooseTrxFrame));
                trd2.addEventListener("touchend", tap.touchend("trx2", onetaptrx2, chooseTrxFrame));
                trd3.addEventListener("touchend", tap.touchend("trx3", onetaptrx3, chooseTrxFrame));
            }
            divd1 = document.createElement("div");
            divd1.setAttribute("style", "background-color: #ffffff; height:23px; padding:5px;");
            divd2 = document.createElement("div");
            divd2.setAttribute("style", "background-color: #ffffff; height:23px; padding:5px;");
            divd3 = document.createElement("div");
            divd3.setAttribute("style", "background-color: #ffffff; height:23px; padding:5px;");
            divd1.innerHTML = "<b>HV</b>";
            divd2.innerHTML = "<b>UPDS</b>";
            divd3.innerHTML = "<b>RESEP</b>";
            trd1.appendChild(divd1);
            trd2.appendChild(divd2);
            trd3.appendChild(divd3);
            tabd.appendChild(trd1);
            tabd.appendChild(trd2);
            tabd.appendChild(trd3);
            divd.appendChild(tabd);
            document.body.appendChild(divd);
        }
        function dis_ch_focus(e) {
            if (e.keyCode === 9) {
                e.preventDefault();
            }
        }
        trxbef_select = "trx1";
        trxcurr_select = "trx1";
        faktor = {
            "trx1": 1.15,
            "trx2": 1.25,
            "trx3": 1.3
        };
        function trxcurr_num() {
            return parseInt(trxcurr_select.substring(3, 4));
        }
        function trxselect(which_id) {
            document.getElementById(which_id).getElementsByTagName("DIV")[0].style.backgroundColor = "#eb8a1b";
        }
        function trxdeselect(which_id) {
            document.getElementById(which_id).getElementsByTagName("DIV")[0].style.backgroundColor = "#ffffff";
        }
        function trxmark(the_id) {
            trxbef_select = trxcurr_select;
            trxcurr_select = the_id;
            trxdeselect(trxbef_select);
            trxselect(trxcurr_select);
        }
        function trxupOrDown(e) {
            function ch_mark(num) {
                var num_str;
                num_str = num.toString();
                trxmark("trx" + num_str);
            }
            if (e.keyCode === 38) {
                if (trxcurr_num() !== 1) {
                    ch_mark(trxcurr_num() - 1);
                } else {
                    trxmark(trxcurr_select);
                }
            } else if (e.keyCode === 40) {
                if (trxcurr_num() !== 3) {
                    ch_mark(trxcurr_num() + 1);
                } else {
                    trxmark(trxcurr_select);
                }
            } else if (e.keyCode === 13) {
                document.getElementById("inp_harga").value = fillHarga();
                (function() {
                    document.getElementById("trxframe").remove();
                }).call();
                document.getElementById("inp_qty").focus();
            } else if (e.keyCode === 27) {
                (function() {
                    document.getElementById("trxframe").remove();
                }).call();
                document.getElementById("inp_qty").focus();
            }
        }
        function fillHarga() {
            if (temp_item.kode === undefined) {
                alert("Harap isi Nama Obat!");
                document.getElementById("inp_namaobat").focus();
            } else {
                temp_item.faktor = faktor[trxcurr_select];
                temp_item.hja = Math.round(temp_item.hnappn * temp_item.faktor);
                return fmtedInt(temp_item.hja);
            }
        }
        function inputQty() {
            if (temp_item.kode === undefined) {
                alert("Harap isi Nama Obat!");
                document.getElementById("inp_namaobat").focus();
            }
        }
        function submitQty(t, e) {
            if (e.keyCode === 13) {
                document.getElementById("inp_subtot").value = execQty(t.value);
                document.getElementById("entri").focus();
            }
        }
        function fmtedInt(the_int) {
            var strint;
            strint = the_int.toString();
            if (strint.length > 0 && strint.length < 4) {
                return strint;
            } else if (strint.length === 4) {
                return strint.slice(0, 1) + "," + strint.slice(1, 4);
            } else if (strint.length === 5) {
                return strint.slice(0, 2) + "," + strint.slice(2, 5);
            } else if (strint.length === 6) {
                return strint.slice(0, 3) + "," + strint.slice(3, 6);
            } else if (strint.length === 7) {
                return strint.slice(0, 1) + "," + strint.slice(1, 4) + "," + strint.slice(4, 7);
            } else if (strint.length === 8) {
                return strint.slice(0, 2) + "," + strint.slice(2, 5) + "," + strint.slice(5, 8);
            } else if (strint.length === 9) {
                return strint.slice(0, 3) + "," + strint.slice(3, 6) + "," + strint.slice(6, 9);
            } else {
                return strint;
            }
        }
        function execQty(qty) {
            var subtotInt;
            subtotInt = qty * temp_item.hja;
            temp_item.qty = qty;
            temp_item.subtot = subtotInt;
            return fmtedInt(subtotInt);
        }
        function chEvnUpDownKey(e) {
            if (e.keyCode === 13) {
                document.getElementById("inp_qty").setAttribute("onkeyup", "submitQty(this,event); revEvnUpDownKey();");
            }
        }
        function revEvnUpDownKey() {
            document.getElementById("inp_qty").setAttribute("onkeyup", undefined);
        }
        entriedItem = _$rapyd$_list_decorate([]);
        function execEntri() {
            if (temp_item.kode === undefined) {
                alert("Harap isi Nama Obat!");
                document.getElementById("inp_namaobat").focus();
            } else if (sel.numberOfRows === entriedItem.length) {
                sel.row_count();
            }
            entriedItem.push({
                "kode": temp_item.kode,
                "nama": temp_item.nama,
                "satuan": temp_item.satuan,
                "hnappn": temp_item.hnappn,
                "faktor": temp_item.faktor,
                "hja": temp_item.hja,
                "qty": temp_item.qty,
                "subtot": temp_item.subtot
            });
            entriToRows();
            document.getElementById("inp_namaobat").focus();
        }
        function entriToRows() {
            var rInt, rid;
            rInt = entriedItem.length;
            rid = "r" + rInt.toString();
            document.getElementById(rid).getElementsByTagName("TD")[1].getElementsByTagName("DIV")[0].getElementsByTagName("P")[0].innerHTML = entriedItem[rInt - 1].nama;
            document.getElementById(rid).getElementsByTagName("TD")[2].getElementsByTagName("DIV")[0].innerHTML = entriedItem[rInt - 1].satuan;
            document.getElementById(rid).getElementsByTagName("TD")[3].getElementsByTagName("DIV")[0].innerHTML = entriedItem[rInt - 1].qty;
            document.getElementById(rid).getElementsByTagName("TD")[4].getElementsByTagName("DIV")[0].innerHTML = fmtedInt(entriedItem[rInt - 1].hja);
            document.getElementById(rid).getElementsByTagName("TD")[5].getElementsByTagName("DIV")[0].innerHTML = fmtedInt(entriedItem[rInt - 1].subtot);
        }
        function emptyTheFields() {
            document.getElementById("inp_namaobat").value = "";
            document.getElementById("inp_satuan").value = "";
            document.getElementById("inp_harga").value = "";
            document.getElementById("inp_qty").value = "";
            document.getElementById("inp_subtot").value = "";
        }
        function copyDataToTemp(num) {
            temp_item.kode = entriedItem[num].kode;
            temp_item.nama = entriedItem[num].nama;
            temp_item.satuan = entriedItem[num].satuan;
            temp_item.hnappn = entriedItem[num].hnappn;
            temp_item.faktor = entriedItem[num].faktor;
            temp_item.hja = entriedItem[num].hja;
            temp_item.qty = entriedItem[num].qty;
            temp_item.subtot = entriedItem[num].subtot;
        }
        function delDataInARow(rid) {
            document.getElementById(rid).getElementsByTagName("TD")[1].getElementsByTagName("DIV")[0].getElementsByTagName("P")[0].innerHTML = "";
            document.getElementById(rid).getElementsByTagName("TD")[2].getElementsByTagName("DIV")[0].innerHTML = "";
            document.getElementById(rid).getElementsByTagName("TD")[3].getElementsByTagName("DIV")[0].innerHTML = "";
            document.getElementById(rid).getElementsByTagName("TD")[4].getElementsByTagName("DIV")[0].innerHTML = "";
            document.getElementById(rid).getElementsByTagName("TD")[5].getElementsByTagName("DIV")[0].innerHTML = "";
        }
        function getDataOfARow(rid) {
            var theData;
            theData = {};
            theData.nama = document.getElementById(rid).getElementsByTagName("TD")[1].getElementsByTagName("DIV")[0].getElementsByTagName("P")[0].innerHTML;
            theData.satuan = document.getElementById(rid).getElementsByTagName("TD")[2].getElementsByTagName("DIV")[0].innerHTML;
            theData.hja = document.getElementById(rid).getElementsByTagName("TD")[4].getElementsByTagName("DIV")[0].innerHTML;
            theData.qty = document.getElementById(rid).getElementsByTagName("TD")[3].getElementsByTagName("DIV")[0].innerHTML;
            theData.subtot = document.getElementById(rid).getElementsByTagName("TD")[5].getElementsByTagName("DIV")[0].innerHTML;
            return theData;
        }
        function setDataToARow(rid, data) {
            document.getElementById(rid).getElementsByTagName("TD")[1].getElementsByTagName("DIV")[0].getElementsByTagName("P")[0].innerHTML = data.nama;
            document.getElementById(rid).getElementsByTagName("TD")[2].getElementsByTagName("DIV")[0].innerHTML = data.satuan;
            document.getElementById(rid).getElementsByTagName("TD")[4].getElementsByTagName("DIV")[0].innerHTML = data.hja;
            document.getElementById(rid).getElementsByTagName("TD")[3].getElementsByTagName("DIV")[0].innerHTML = data.qty;
            document.getElementById(rid).getElementsByTagName("TD")[5].getElementsByTagName("DIV")[0].innerHTML = data.subtot;
        }
        function removeARowField(rid) {
            document.getElementById(rid).remove();
            sel.numberOfRows = sel.numberOfRows - 1;
        }
        function removeARow(rid) {
            var numOfDataInTheRows, numrid, id;
            numOfDataInTheRows = entriedItem.length;
            numrid = parseInt(rid.slice(1, 6));
            if (entriedItem.length === 1) {
                delDataInARow("r1");
            } else if (numrid === entriedItem.length) {
                delDataInARow("r" + numrid.toString());
                if (numrid > 10) {
                    removeARowField(rid);
                }
            } else {
                for (id = numrid + 1; id < entriedItem.length + 1; id++) {
                    delDataInARow("r" + (id - 1).toString());
                    setDataToARow("r" + (id - 1).toString(), getDataOfARow("r" + id.toString()));
                }
                delDataInARow("r" + entriedItem.length.toString());
                if (sel.numberOfRows > 10) {
                    removeARowField("r" + entriedItem.length.toString());
                }
            }
        }
        function fillTheFieldsFromTemp() {
            document.getElementById("inp_namaobat").value = temp_item.nama;
            document.getElementById("inp_satuan").value = temp_item.satuan;
            document.getElementById("inp_harga").value = fmtedInt(temp_item.hja);
            document.getElementById("inp_qty").value = fmtedInt(temp_item.qty);
            document.getElementById("inp_subtot").value = fmtedInt(temp_item.subtot);
        }
        function yay() {
            alert("yay!");
        }
    })();
})();
