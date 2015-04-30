(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
mout = require('mout');

},{"mout":96}],2:[function(require,module,exports){


//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'append' : require('./array/append'),
    'collect' : require('./array/collect'),
    'combine' : require('./array/combine'),
    'compact' : require('./array/compact'),
    'contains' : require('./array/contains'),
    'difference' : require('./array/difference'),
    'equals' : require('./array/equals'),
    'every' : require('./array/every'),
    'filter' : require('./array/filter'),
    'find' : require('./array/find'),
    'findIndex' : require('./array/findIndex'),
    'findLast' : require('./array/findLast'),
    'findLastIndex' : require('./array/findLastIndex'),
    'flatten' : require('./array/flatten'),
    'forEach' : require('./array/forEach'),
    'groupBy' : require('./array/groupBy'),
    'indexOf' : require('./array/indexOf'),
    'insert' : require('./array/insert'),
    'intersection' : require('./array/intersection'),
    'invoke' : require('./array/invoke'),
    'join' : require('./array/join'),
    'last' : require('./array/last'),
    'lastIndexOf' : require('./array/lastIndexOf'),
    'map' : require('./array/map'),
    'max' : require('./array/max'),
    'min' : require('./array/min'),
    'pick' : require('./array/pick'),
    'pluck' : require('./array/pluck'),
    'range' : require('./array/range'),
    'reduce' : require('./array/reduce'),
    'reduceRight' : require('./array/reduceRight'),
    'reject' : require('./array/reject'),
    'remove' : require('./array/remove'),
    'removeAll' : require('./array/removeAll'),
    'shuffle' : require('./array/shuffle'),
    'slice' : require('./array/slice'),
    'some' : require('./array/some'),
    'sort' : require('./array/sort'),
    'sortBy' : require('./array/sortBy'),
    'split' : require('./array/split'),
    'take' : require('./array/take'),
    'toLookup' : require('./array/toLookup'),
    'union' : require('./array/union'),
    'unique' : require('./array/unique'),
    'xor' : require('./array/xor'),
    'zip' : require('./array/zip')
};



},{"./array/append":3,"./array/collect":4,"./array/combine":5,"./array/compact":6,"./array/contains":7,"./array/difference":8,"./array/equals":9,"./array/every":10,"./array/filter":11,"./array/find":12,"./array/findIndex":13,"./array/findLast":14,"./array/findLastIndex":15,"./array/flatten":16,"./array/forEach":17,"./array/groupBy":18,"./array/indexOf":19,"./array/insert":20,"./array/intersection":21,"./array/invoke":22,"./array/join":23,"./array/last":24,"./array/lastIndexOf":25,"./array/map":26,"./array/max":27,"./array/min":28,"./array/pick":29,"./array/pluck":30,"./array/range":31,"./array/reduce":32,"./array/reduceRight":33,"./array/reject":34,"./array/remove":35,"./array/removeAll":36,"./array/shuffle":37,"./array/slice":38,"./array/some":39,"./array/sort":40,"./array/sortBy":41,"./array/split":42,"./array/take":43,"./array/toLookup":44,"./array/union":45,"./array/unique":46,"./array/xor":47,"./array/zip":48}],3:[function(require,module,exports){


    /**
     * Appends an array to the end of another.
     * The first array will be modified.
     */
    function append(arr1, arr2) {
        if (arr2 == null) {
            return arr1;
        }

        var pad = arr1.length,
            i = -1,
            len = arr2.length;
        while (++i < len) {
            arr1[pad + i] = arr2[i];
        }
        return arr1;
    }
    module.exports = append;


},{}],4:[function(require,module,exports){
var append = require('./append');
var makeIterator = require('../function/makeIterator_');

    /**
     * Maps the items in the array and concatenates the result arrays.
     */
    function collect(arr, callback, thisObj){
        callback = makeIterator(callback, thisObj);
        var results = [];
        if (arr == null) {
            return results;
        }

        var i = -1, len = arr.length;
        while (++i < len) {
            var value = callback(arr[i], i, arr);
            if (value != null) {
                append(results, value);
            }
        }

        return results;
    }

    module.exports = collect;



},{"../function/makeIterator_":88,"./append":3}],5:[function(require,module,exports){
var indexOf = require('./indexOf');

    /**
     * Combines an array with all the items of another.
     * Does not allow duplicates and is case and type sensitive.
     */
    function combine(arr1, arr2) {
        if (arr2 == null) {
            return arr1;
        }

        var i = -1, len = arr2.length;
        while (++i < len) {
            if (indexOf(arr1, arr2[i]) === -1) {
                arr1.push(arr2[i]);
            }
        }

        return arr1;
    }
    module.exports = combine;


},{"./indexOf":19}],6:[function(require,module,exports){
var filter = require('./filter');

    /**
     * Remove all null/undefined items from array.
     */
    function compact(arr) {
        return filter(arr, function(val){
            return (val != null);
        });
    }

    module.exports = compact;


},{"./filter":11}],7:[function(require,module,exports){
var indexOf = require('./indexOf');

    /**
     * If array contains values.
     */
    function contains(arr, val) {
        return indexOf(arr, val) !== -1;
    }
    module.exports = contains;


},{"./indexOf":19}],8:[function(require,module,exports){
var unique = require('./unique');
var filter = require('./filter');
var some = require('./some');
var contains = require('./contains');
var slice = require('./slice');


    /**
     * Return a new Array with elements that aren't present in the other Arrays.
     */
    function difference(arr) {
        var arrs = slice(arguments, 1),
            result = filter(unique(arr), function(needle){
                return !some(arrs, function(haystack){
                    return contains(haystack, needle);
                });
            });
        return result;
    }

    module.exports = difference;



},{"./contains":7,"./filter":11,"./slice":38,"./some":39,"./unique":46}],9:[function(require,module,exports){
var is = require('../lang/is');
var isArray = require('../lang/isArray');
var every = require('./every');

    /**
     * Compares if both arrays have the same elements
     */
    function equals(a, b, callback){
        callback = callback || is;

        if (!isArray(a) || !isArray(b)) {
            return callback(a, b);
        }

        if (a.length !== b.length) {
            return false;
        }

        return every(a, makeCompare(callback), b);
    }

    function makeCompare(callback) {
        return function(value, i) {
            return i in this && callback(value, this[i]);
        };
    }

    module.exports = equals;



},{"../lang/is":106,"../lang/isArray":108,"./every":10}],10:[function(require,module,exports){
var makeIterator = require('../function/makeIterator_');

    /**
     * Array every
     */
    function every(arr, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var result = true;
        if (arr == null) {
            return result;
        }

        var i = -1, len = arr.length;
        while (++i < len) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if (!callback(arr[i], i, arr) ) {
                result = false;
                break;
            }
        }

        return result;
    }

    module.exports = every;


},{"../function/makeIterator_":88}],11:[function(require,module,exports){
var makeIterator = require('../function/makeIterator_');

    /**
     * Array filter
     */
    function filter(arr, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var results = [];
        if (arr == null) {
            return results;
        }

        var i = -1, len = arr.length, value;
        while (++i < len) {
            value = arr[i];
            if (callback(value, i, arr)) {
                results.push(value);
            }
        }

        return results;
    }

    module.exports = filter;



},{"../function/makeIterator_":88}],12:[function(require,module,exports){
var findIndex = require('./findIndex');

    /**
     * Returns first item that matches criteria
     */
    function find(arr, iterator, thisObj){
        var idx = findIndex(arr, iterator, thisObj);
        return idx >= 0? arr[idx] : void(0);
    }

    module.exports = find;



},{"./findIndex":13}],13:[function(require,module,exports){
var makeIterator = require('../function/makeIterator_');

    /**
     * Returns the index of the first item that matches criteria
     */
    function findIndex(arr, iterator, thisObj){
        iterator = makeIterator(iterator, thisObj);
        if (arr == null) {
            return -1;
        }

        var i = -1, len = arr.length;
        while (++i < len) {
            if (iterator(arr[i], i, arr)) {
                return i;
            }
        }

        return -1;
    }

    module.exports = findIndex;


},{"../function/makeIterator_":88}],14:[function(require,module,exports){
var findLastIndex = require('./findLastIndex');

    /**
     * Returns last item that matches criteria
     */
    function findLast(arr, iterator, thisObj){
        var idx = findLastIndex(arr, iterator, thisObj);
        return idx >= 0? arr[idx] : void(0);
    }

    module.exports = findLast;



},{"./findLastIndex":15}],15:[function(require,module,exports){
var makeIterator = require('../function/makeIterator_');

    /**
     * Returns the index of the last item that matches criteria
     */
    function findLastIndex(arr, iterator, thisObj){
        iterator = makeIterator(iterator, thisObj);
        if (arr == null) {
            return -1;
        }

        var n = arr.length;
        while (--n >= 0) {
            if (iterator(arr[n], n, arr)) {
                return n;
            }
        }

        return -1;
    }

    module.exports = findLastIndex;



},{"../function/makeIterator_":88}],16:[function(require,module,exports){
var isArray = require('../lang/isArray');
var append = require('./append');

    /*
     * Helper function to flatten to a destination array.
     * Used to remove the need to create intermediate arrays while flattening.
     */
    function flattenTo(arr, result, level) {
        if (arr == null) {
            return result;
        } else if (level === 0) {
            append(result, arr);
            return result;
        }

        var value,
            i = -1,
            len = arr.length;
        while (++i < len) {
            value = arr[i];
            if (isArray(value)) {
                flattenTo(value, result, level - 1);
            } else {
                result.push(value);
            }
        }
        return result;
    }

    /**
     * Recursively flattens an array.
     * A new array containing all the elements is returned.
     * If `shallow` is true, it will only flatten one level.
     */
    function flatten(arr, level) {
        level = level == null? -1 : level;
        return flattenTo(arr, [], level);
    }

    module.exports = flatten;




},{"../lang/isArray":108,"./append":3}],17:[function(require,module,exports){


    /**
     * Array forEach
     */
    function forEach(arr, callback, thisObj) {
        if (arr == null) {
            return;
        }
        var i = -1,
            len = arr.length;
        while (++i < len) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if ( callback.call(thisObj, arr[i], i, arr) === false ) {
                break;
            }
        }
    }

    module.exports = forEach;



},{}],18:[function(require,module,exports){
var forEach = require('../array/forEach');
var identity = require('../function/identity');
var makeIterator = require('../function/makeIterator_');

    /**
     * Bucket the array values.
     */
    function groupBy(arr, categorize, thisObj) {
        if (categorize) {
            categorize = makeIterator(categorize, thisObj);
        } else {
            // Default to identity function.
            categorize = identity;
        }

        var buckets = {};
        forEach(arr, function(element) {
            var bucket = categorize(element);
            if (!(bucket in buckets)) {
                buckets[bucket] = [];
            }

            buckets[bucket].push(element);
        });

        return buckets;
    }

    module.exports = groupBy;


},{"../array/forEach":17,"../function/identity":87,"../function/makeIterator_":88}],19:[function(require,module,exports){


    /**
     * Array.indexOf
     */
    function indexOf(arr, item, fromIndex) {
        fromIndex = fromIndex || 0;
        if (arr == null) {
            return -1;
        }

        var len = arr.length,
            i = fromIndex < 0 ? len + fromIndex : fromIndex;
        while (i < len) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if (arr[i] === item) {
                return i;
            }

            i++;
        }

        return -1;
    }

    module.exports = indexOf;


},{}],20:[function(require,module,exports){
var difference = require('./difference');
var slice = require('./slice');

    /**
     * Insert item into array if not already present.
     */
    function insert(arr, rest_items) {
        var diff = difference(slice(arguments, 1), arr);
        if (diff.length) {
            Array.prototype.push.apply(arr, diff);
        }
        return arr.length;
    }
    module.exports = insert;


},{"./difference":8,"./slice":38}],21:[function(require,module,exports){
var unique = require('./unique');
var filter = require('./filter');
var every = require('./every');
var contains = require('./contains');
var slice = require('./slice');


    /**
     * Return a new Array with elements common to all Arrays.
     * - based on underscore.js implementation
     */
    function intersection(arr) {
        var arrs = slice(arguments, 1),
            result = filter(unique(arr), function(needle){
                return every(arrs, function(haystack){
                    return contains(haystack, needle);
                });
            });
        return result;
    }

    module.exports = intersection;



},{"./contains":7,"./every":10,"./filter":11,"./slice":38,"./unique":46}],22:[function(require,module,exports){
var slice = require('./slice');

    /**
     * Call `methodName` on each item of the array passing custom arguments if
     * needed.
     */
    function invoke(arr, methodName, var_args){
        if (arr == null) {
            return arr;
        }

        var args = slice(arguments, 2);
        var i = -1, len = arr.length, value;
        while (++i < len) {
            value = arr[i];
            value[methodName].apply(value, args);
        }

        return arr;
    }

    module.exports = invoke;


},{"./slice":38}],23:[function(require,module,exports){
var filter = require('./filter');

    function isValidString(val) {
        return (val != null && val !== '');
    }

    /**
     * Joins strings with the specified separator inserted between each value.
     * Null values and empty strings will be excluded.
     */
    function join(items, separator) {
        separator = separator || '';
        return filter(items, isValidString).join(separator);
    }

    module.exports = join;


},{"./filter":11}],24:[function(require,module,exports){


    /**
     * Returns last element of array.
     */
    function last(arr){
        if (arr == null || arr.length < 1) {
            return undefined;
        }

        return arr[arr.length - 1];
    }

    module.exports = last;



},{}],25:[function(require,module,exports){


    /**
     * Array lastIndexOf
     */
    function lastIndexOf(arr, item, fromIndex) {
        if (arr == null) {
            return -1;
        }

        var len = arr.length;
        fromIndex = (fromIndex == null || fromIndex >= len)? len - 1 : fromIndex;
        fromIndex = (fromIndex < 0)? len + fromIndex : fromIndex;

        while (fromIndex >= 0) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if (arr[fromIndex] === item) {
                return fromIndex;
            }
            fromIndex--;
        }

        return -1;
    }

    module.exports = lastIndexOf;


},{}],26:[function(require,module,exports){
var makeIterator = require('../function/makeIterator_');

    /**
     * Array map
     */
    function map(arr, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var results = [];
        if (arr == null){
            return results;
        }

        var i = -1, len = arr.length;
        while (++i < len) {
            results[i] = callback(arr[i], i, arr);
        }

        return results;
    }

     module.exports = map;


},{"../function/makeIterator_":88}],27:[function(require,module,exports){
var makeIterator = require('../function/makeIterator_');

    /**
     * Return maximum value inside array
     */
    function max(arr, iterator, thisObj){
        if (arr == null || !arr.length) {
            return Infinity;
        } else if (arr.length && !iterator) {
            return Math.max.apply(Math, arr);
        } else {
            iterator = makeIterator(iterator, thisObj);
            var result,
                compare = -Infinity,
                value,
                temp;

            var i = -1, len = arr.length;
            while (++i < len) {
                value = arr[i];
                temp = iterator(value, i, arr);
                if (temp > compare) {
                    compare = temp;
                    result = value;
                }
            }

            return result;
        }
    }

    module.exports = max;



},{"../function/makeIterator_":88}],28:[function(require,module,exports){
var makeIterator = require('../function/makeIterator_');

    /**
     * Return minimum value inside array
     */
    function min(arr, iterator, thisObj){
        if (arr == null || !arr.length) {
            return -Infinity;
        } else if (arr.length && !iterator) {
            return Math.min.apply(Math, arr);
        } else {
            iterator = makeIterator(iterator, thisObj);
            var result,
                compare = Infinity,
                value,
                temp;

            var i = -1, len = arr.length;
            while (++i < len) {
                value = arr[i];
                temp = iterator(value, i, arr);
                if (temp < compare) {
                    compare = temp;
                    result = value;
                }
            }

            return result;
        }
    }

    module.exports = min;



},{"../function/makeIterator_":88}],29:[function(require,module,exports){
var randInt = require('../random/randInt');

    /**
     * Remove random item(s) from the Array and return it.
     * Returns an Array of items if [nItems] is provided or a single item if
     * it isn't specified.
     */
    function pick(arr, nItems){
        if (nItems != null) {
            var result = [];
            if (nItems > 0 && arr && arr.length) {
                nItems = nItems > arr.length? arr.length : nItems;
                while (nItems--) {
                    result.push( pickOne(arr) );
                }
            }
            return result;
        }
        return (arr && arr.length)? pickOne(arr) : void(0);
    }


    function pickOne(arr){
        var idx = randInt(0, arr.length - 1);
        return arr.splice(idx, 1)[0];
    }


    module.exports = pick;



},{"../random/randInt":211}],30:[function(require,module,exports){
var map = require('./map');

    /**
     * Extract a list of property values.
     */
    function pluck(arr, propName){
        return map(arr, propName);
    }

    module.exports = pluck;



},{"./map":26}],31:[function(require,module,exports){
var countSteps = require('../math/countSteps');

    /**
     * Returns an Array of numbers inside range.
     */
    function range(start, stop, step) {
        if (stop == null) {
            stop = start;
            start = 0;
        }
        step = step || 1;

        var result = [],
            nSteps = countSteps(stop - start, step),
            i = start;

        while (i <= stop) {
            result.push(i);
            i += step;
        }

        return result;
    }

    module.exports = range;



},{"../math/countSteps":133}],32:[function(require,module,exports){


    /**
     * Array reduce
     */
    function reduce(arr, fn, initVal) {
        // check for args.length since initVal might be "undefined" see #gh-57
        var hasInit = arguments.length > 2,
            result = initVal;

        if (arr == null || !arr.length) {
            if (!hasInit) {
                throw new Error('reduce of empty array with no initial value');
            } else {
                return initVal;
            }
        }

        var i = -1, len = arr.length;
        while (++i < len) {
            if (!hasInit) {
                result = arr[i];
                hasInit = true;
            } else {
                result = fn(result, arr[i], i, arr);
            }
        }

        return result;
    }

    module.exports = reduce;


},{}],33:[function(require,module,exports){


    /**
     * Array reduceRight
     */
    function reduceRight(arr, fn, initVal) {
        // check for args.length since initVal might be "undefined" see #gh-57
        var hasInit = arguments.length > 2;

        if (arr == null || !arr.length) {
            if (hasInit) {
                return initVal;
            } else {
                throw new Error('reduce of empty array with no initial value');
            }
        }

        var i = arr.length, result = initVal, value;
        while (--i >= 0) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            value = arr[i];
            if (!hasInit) {
                result = value;
                hasInit = true;
            } else {
                result = fn(result, value, i, arr);
            }
        }
        return result;
    }

    module.exports = reduceRight;


},{}],34:[function(require,module,exports){
var makeIterator = require('../function/makeIterator_');

    /**
     * Array reject
     */
    function reject(arr, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var results = [];
        if (arr == null) {
            return results;
        }

        var i = -1, len = arr.length, value;
        while (++i < len) {
            value = arr[i];
            if (!callback(value, i, arr)) {
                results.push(value);
            }
        }

        return results;
    }

    module.exports = reject;


},{"../function/makeIterator_":88}],35:[function(require,module,exports){
var indexOf = require('./indexOf');

    /**
     * Remove a single item from the array.
     * (it won't remove duplicates, just a single item)
     */
    function remove(arr, item){
        var idx = indexOf(arr, item);
        if (idx !== -1) arr.splice(idx, 1);
    }

    module.exports = remove;


},{"./indexOf":19}],36:[function(require,module,exports){
var indexOf = require('./indexOf');

    /**
     * Remove all instances of an item from array.
     */
    function removeAll(arr, item){
        var idx = indexOf(arr, item);
        while (idx !== -1) {
            arr.splice(idx, 1);
            idx = indexOf(arr, item, idx);
        }
    }

    module.exports = removeAll;


},{"./indexOf":19}],37:[function(require,module,exports){
var randInt = require('../random/randInt');

    /**
     * Shuffle array items.
     */
    function shuffle(arr) {
        var results = [],
            rnd;
        if (arr == null) {
            return results;
        }

        var i = -1, len = arr.length, value;
        while (++i < len) {
            if (!i) {
                results[0] = arr[0];
            } else {
                rnd = randInt(0, i);
                results[i] = results[rnd];
                results[rnd] = arr[i];
            }
        }

        return results;
    }

    module.exports = shuffle;


},{"../random/randInt":211}],38:[function(require,module,exports){


    /**
     * Create slice of source array or array-like object
     */
    function slice(arr, start, end){
        var len = arr.length;

        if (start == null) {
            start = 0;
        } else if (start < 0) {
            start = Math.max(len + start, 0);
        } else {
            start = Math.min(start, len);
        }

        if (end == null) {
            end = len;
        } else if (end < 0) {
            end = Math.max(len + end, 0);
        } else {
            end = Math.min(end, len);
        }

        var result = [];
        while (start < end) {
            result.push(arr[start++]);
        }

        return result;
    }

    module.exports = slice;



},{}],39:[function(require,module,exports){
var makeIterator = require('../function/makeIterator_');

    /**
     * Array some
     */
    function some(arr, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var result = false;
        if (arr == null) {
            return result;
        }

        var i = -1, len = arr.length;
        while (++i < len) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if ( callback(arr[i], i, arr) ) {
                result = true;
                break;
            }
        }

        return result;
    }

    module.exports = some;


},{"../function/makeIterator_":88}],40:[function(require,module,exports){


    /**
     * Merge sort (http://en.wikipedia.org/wiki/Merge_sort)
     */
    function mergeSort(arr, compareFn) {
        if (arr == null) {
            return [];
        } else if (arr.length < 2) {
            return arr;
        }

        if (compareFn == null) {
            compareFn = defaultCompare;
        }

        var mid, left, right;

        mid   = ~~(arr.length / 2);
        left  = mergeSort( arr.slice(0, mid), compareFn );
        right = mergeSort( arr.slice(mid, arr.length), compareFn );

        return merge(left, right, compareFn);
    }

    function defaultCompare(a, b) {
        return a < b ? -1 : (a > b? 1 : 0);
    }

    function merge(left, right, compareFn) {
        var result = [];

        while (left.length && right.length) {
            if (compareFn(left[0], right[0]) <= 0) {
                // if 0 it should preserve same order (stable)
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        if (left.length) {
            result.push.apply(result, left);
        }

        if (right.length) {
            result.push.apply(result, right);
        }

        return result;
    }

    module.exports = mergeSort;



},{}],41:[function(require,module,exports){
var sort = require('./sort');
var makeIterator = require('../function/makeIterator_');

    /*
     * Sort array by the result of the callback
     */
    function sortBy(arr, callback, context){
        callback = makeIterator(callback, context);

        return sort(arr, function(a, b) {
            a = callback(a);
            b = callback(b);
            return (a < b) ? -1 : ((a > b) ? 1 : 0);
        });
    }

    module.exports = sortBy;



},{"../function/makeIterator_":88,"./sort":40}],42:[function(require,module,exports){


    /**
     * Split array into a fixed number of segments.
     */
    function split(array, segments) {
        segments = segments || 2;
        var results = [];
        if (array == null) {
            return results;
        }

        var minLength = Math.floor(array.length / segments),
            remainder = array.length % segments,
            i = 0,
            len = array.length,
            segmentIndex = 0,
            segmentLength;

        while (i < len) {
            segmentLength = minLength;
            if (segmentIndex < remainder) {
                segmentLength++;
            }

            results.push(array.slice(i, i + segmentLength));

            segmentIndex++;
            i += segmentLength;
        }

        return results;
    }
    module.exports = split;


},{}],43:[function(require,module,exports){


    /**
     * Iterates over a callback a set amount of times
     * returning the results
     */
    function take(n, callback, thisObj){
        var i = -1;
        var arr = [];
        if( !thisObj ){
            while(++i < n){
                arr[i] = callback(i, n);
            }
        } else {
            while(++i < n){
                arr[i] = callback.call(thisObj, i, n);
            }
        }
        return arr;
    }

    module.exports = take;



},{}],44:[function(require,module,exports){
var isFunction = require('../lang/isFunction');

    /**
     * Creates an object that holds a lookup for the objects in the array.
     */
    function toLookup(arr, key) {
        var result = {};
        if (arr == null) {
            return result;
        }

        var i = -1, len = arr.length, value;
        if (isFunction(key)) {
            while (++i < len) {
                value = arr[i];
                result[key(value)] = value;
            }
        } else {
            while (++i < len) {
                value = arr[i];
                result[value[key]] = value;
            }
        }

        return result;
    }
    module.exports = toLookup;


},{"../lang/isFunction":113}],45:[function(require,module,exports){
var unique = require('./unique');
var append = require('./append');

    /**
     * Concat multiple arrays and remove duplicates
     */
    function union(arrs) {
        var results = [];
        var i = -1, len = arguments.length;
        while (++i < len) {
            append(results, arguments[i]);
        }

        return unique(results);
    }

    module.exports = union;



},{"./append":3,"./unique":46}],46:[function(require,module,exports){
var filter = require('./filter');

    /**
     * @return {array} Array of unique items
     */
    function unique(arr, compare){
        compare = compare || isEqual;
        return filter(arr, function(item, i, arr){
            var n = arr.length;
            while (++i < n) {
                if ( compare(item, arr[i]) ) {
                    return false;
                }
            }
            return true;
        });
    }

    function isEqual(a, b){
        return a === b;
    }

    module.exports = unique;



},{"./filter":11}],47:[function(require,module,exports){
var unique = require('./unique');
var filter = require('./filter');
var contains = require('./contains');


    /**
     * Exclusive OR. Returns items that are present in a single array.
     * - like ptyhon's `symmetric_difference`
     */
    function xor(arr1, arr2) {
        arr1 = unique(arr1);
        arr2 = unique(arr2);

        var a1 = filter(arr1, function(item){
                return !contains(arr2, item);
            }),
            a2 = filter(arr2, function(item){
                return !contains(arr1, item);
            });

        return a1.concat(a2);
    }

    module.exports = xor;



},{"./contains":7,"./filter":11,"./unique":46}],48:[function(require,module,exports){
var max = require('./max');
var map = require('./map');

    function getLength(arr) {
        return arr == null ? 0 : arr.length;
    }

    /**
     * Merges together the values of each of the arrays with the values at the
     * corresponding position.
     */
    function zip(arr){
        var len = arr ? max(map(arguments, getLength)) : 0,
            results = [],
            i = -1;
        while (++i < len) {
            // jshint loopfunc: true
            results.push(map(arguments, function(item) {
                return item == null ? undefined : item[i];
            }));
        }

        return results;
    }

    module.exports = zip;



},{"./map":26,"./max":27}],49:[function(require,module,exports){


//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'contains' : require('./collection/contains'),
    'every' : require('./collection/every'),
    'filter' : require('./collection/filter'),
    'find' : require('./collection/find'),
    'forEach' : require('./collection/forEach'),
    'make_' : require('./collection/make_'),
    'map' : require('./collection/map'),
    'max' : require('./collection/max'),
    'min' : require('./collection/min'),
    'pluck' : require('./collection/pluck'),
    'reduce' : require('./collection/reduce'),
    'reject' : require('./collection/reject'),
    'size' : require('./collection/size'),
    'some' : require('./collection/some')
};



},{"./collection/contains":50,"./collection/every":51,"./collection/filter":52,"./collection/find":53,"./collection/forEach":54,"./collection/make_":55,"./collection/map":56,"./collection/max":57,"./collection/min":58,"./collection/pluck":59,"./collection/reduce":60,"./collection/reject":61,"./collection/size":62,"./collection/some":63}],50:[function(require,module,exports){
var make = require('./make_');
var arrContains = require('../array/contains');
var objContains = require('../object/contains');

    /**
     */
    module.exports = make(arrContains, objContains);



},{"../array/contains":7,"../object/contains":162,"./make_":55}],51:[function(require,module,exports){
var make = require('./make_');
var arrEvery = require('../array/every');
var objEvery = require('../object/every');

    /**
     */
    module.exports = make(arrEvery, objEvery);



},{"../array/every":10,"../object/every":167,"./make_":55}],52:[function(require,module,exports){
var forEach = require('./forEach');
var makeIterator = require('../function/makeIterator_');

    /**
     * filter collection values, returns array.
     */
    function filter(list, iterator, thisObj) {
        iterator = makeIterator(iterator, thisObj);
        var results = [];
        if (!list) {
            return results;
        }
        forEach(list, function(value, index, list) {
            if (iterator(value, index, list)) {
                results[results.length] = value;
            }
        });
        return results;
    }

    module.exports = filter;



},{"../function/makeIterator_":88,"./forEach":54}],53:[function(require,module,exports){
var make = require('./make_');
var arrFind = require('../array/find');
var objFind = require('../object/find');

    /**
     * Find value that returns true on iterator check.
     */
    module.exports = make(arrFind, objFind);



},{"../array/find":12,"../object/find":170,"./make_":55}],54:[function(require,module,exports){
var make = require('./make_');
var arrForEach = require('../array/forEach');
var objForEach = require('../object/forOwn');

    /**
     */
    module.exports = make(arrForEach, objForEach);



},{"../array/forEach":17,"../object/forOwn":172,"./make_":55}],55:[function(require,module,exports){
var slice = require('../array/slice');

    /**
     * internal method used to create other collection modules.
     */
    function makeCollectionMethod(arrMethod, objMethod, defaultReturn) {
        return function(){
            var args = slice(arguments);
            if (args[0] == null) {
                return defaultReturn;
            }
            // array-like is treated as array
            return (typeof args[0].length === 'number')? arrMethod.apply(null, args) : objMethod.apply(null, args);
        };
    }

    module.exports = makeCollectionMethod;



},{"../array/slice":38}],56:[function(require,module,exports){
var isObject = require('../lang/isObject');
var values = require('../object/values');
var arrMap = require('../array/map');
var makeIterator = require('../function/makeIterator_');

    /**
     * Map collection values, returns Array.
     */
    function map(list, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        // list.length to check array-like object, if not array-like
        // we simply map all the object values
        if( isObject(list) && list.length == null ){
            list = values(list);
        }
        return arrMap(list, function (val, key, list) {
            return callback(val, key, list);
        });
    }

    module.exports = map;



},{"../array/map":26,"../function/makeIterator_":88,"../lang/isObject":119,"../object/values":195}],57:[function(require,module,exports){
var make = require('./make_');
var arrMax = require('../array/max');
var objMax = require('../object/max');

    /**
     * Get maximum value inside collection
     */
    module.exports = make(arrMax, objMax);



},{"../array/max":27,"../object/max":180,"./make_":55}],58:[function(require,module,exports){
var make = require('./make_');
var arrMin = require('../array/min');
var objMin = require('../object/min');

    /**
     * Get minimum value inside collection.
     */
    module.exports = make(arrMin, objMin);



},{"../array/min":28,"../object/min":182,"./make_":55}],59:[function(require,module,exports){
var map = require('./map');

    /**
     * Extract a list of property values.
     */
    function pluck(list, key) {
        return map(list, function(value) {
            return value[key];
        });
    }

    module.exports = pluck;



},{"./map":56}],60:[function(require,module,exports){
var make = require('./make_');
var arrReduce = require('../array/reduce');
var objReduce = require('../object/reduce');

    /**
     */
    module.exports = make(arrReduce, objReduce);



},{"../array/reduce":32,"../object/reduce":188,"./make_":55}],61:[function(require,module,exports){
var filter = require('./filter');
var makeIterator = require('../function/makeIterator_');

    /**
     * Inverse or collection/filter
     */
    function reject(list, iterator, thisObj) {
        iterator = makeIterator(iterator, thisObj);
        return filter(list, function(value, index, list) {
            return !iterator(value, index, list);
        }, thisObj);
    }

    module.exports = reject;



},{"../function/makeIterator_":88,"./filter":52}],62:[function(require,module,exports){
var isArray = require('../lang/isArray');
var objSize = require('../object/size');

    /**
     * Get collection size
     */
    function size(list) {
        if (!list) {
            return 0;
        }
        if (isArray(list)) {
            return list.length;
        }
        return objSize(list);
    }

    module.exports = size;



},{"../lang/isArray":108,"../object/size":192}],63:[function(require,module,exports){
var make = require('./make_');
var arrSome = require('../array/some');
var objSome = require('../object/some');

    /**
     */
    module.exports = make(arrSome, objSome);



},{"../array/some":39,"../object/some":193,"./make_":55}],64:[function(require,module,exports){


//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'dayOfTheYear' : require('./date/dayOfTheYear'),
    'diff' : require('./date/diff'),
    'i18n_' : require('./date/i18n_'),
    'isLeapYear' : require('./date/isLeapYear'),
    'isSame' : require('./date/isSame'),
    'parseIso' : require('./date/parseIso'),
    'quarter' : require('./date/quarter'),
    'startOf' : require('./date/startOf'),
    'strftime' : require('./date/strftime'),
    'timezoneAbbr' : require('./date/timezoneAbbr'),
    'timezoneOffset' : require('./date/timezoneOffset'),
    'totalDaysInMonth' : require('./date/totalDaysInMonth'),
    'totalDaysInYear' : require('./date/totalDaysInYear'),
    'weekOfTheYear' : require('./date/weekOfTheYear')
};



},{"./date/dayOfTheYear":65,"./date/diff":66,"./date/i18n_":68,"./date/isLeapYear":69,"./date/isSame":70,"./date/parseIso":71,"./date/quarter":72,"./date/startOf":73,"./date/strftime":74,"./date/timezoneAbbr":75,"./date/timezoneOffset":76,"./date/totalDaysInMonth":77,"./date/totalDaysInYear":78,"./date/weekOfTheYear":79}],65:[function(require,module,exports){
var isDate = require('../lang/isDate');

    /**
     * return the day of the year (1..366)
     */
    function dayOfTheYear(date){
        return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
                Date.UTC(date.getFullYear(), 0, 1)) / 86400000 + 1;
    }

    module.exports = dayOfTheYear;



},{"../lang/isDate":110}],66:[function(require,module,exports){
var totalDaysInMonth = require('./totalDaysInMonth');
var totalDaysInYear = require('./totalDaysInYear');
var convert = require('../time/convert');

    /**
     * calculate the difference between dates (range)
     */
    function diff(start, end, unitName){
        // sort the dates to make it easier to process (specially year/month)
        if (start > end) {
            var swap = start;
            start = end;
            end = swap;
        }

        var output;

        if (unitName === 'month') {
            output = getMonthsDiff(start, end);
        } else if (unitName === 'year'){
            output = getYearsDiff(start, end);
        } else if (unitName != null) {
            if (unitName === 'day') {
                // ignore timezone difference because of daylight savings time
                start = toUtc(start);
                end = toUtc(end);
            }
            output = convert(end - start, 'ms', unitName);
        } else {
            output = end - start;
        }

        return output;
    }


    function toUtc(d){
        // we ignore timezone differences on purpose because of daylight
        // savings time, otherwise it would return fractional days/weeks even
        // if a full day elapsed. eg:
        // Wed Feb 12 2014 00:00:00 GMT-0200 (BRST)
        // Sun Feb 16 2014 00:00:00 GMT-0300 (BRT)
        // diff should be 4 days and not 4.041666666666667
        return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(),
                        d.getHours(), d.getMinutes(), d.getSeconds(),
                        d.getMilliseconds());
    }


    function getMonthsDiff(start, end){
        return getElapsedMonths(start, end) +
               getElapsedYears(start, end) * 12 +
               getFractionalMonth(start, end);
    }


    function getYearsDiff(start, end){
        var elapsedYears = getElapsedYears(start, end);
        return elapsedYears + getFractionalYear(start, end, elapsedYears);
    }


    function getElapsedMonths(start, end){
        var monthDiff = end.getMonth() - start.getMonth();
        if (monthDiff < 0) {
            monthDiff += 12;
        }
        // less than a full month
        if (start.getDate() > end.getDate()) {
            monthDiff -= 1;
        }
        return monthDiff;
    }


    function getElapsedYears(start, end){
        var yearDiff = end.getFullYear() - start.getFullYear();
        // less than a full year
        if (start.getMonth() > end.getMonth()) {
            yearDiff -= 1;
        }
        return yearDiff;
    }


    function getFractionalMonth(start, end){
        var fractionalDiff = 0;
        var startDay = start.getDate();
        var endDay = end.getDate();

        if (startDay !== endDay) {
            var startTotalDays = totalDaysInMonth(start);
            var endTotalDays = totalDaysInMonth(end);
            var totalDays;
            var daysElapsed;

            if (startDay > endDay) {
                // eg: Jan 29 - Feb 27 (29 days elapsed but not a full month)
                var baseDay = startTotalDays - startDay;
                daysElapsed = endDay + baseDay;
                // total days should be relative to 1st day of next month if
                // startDay > endTotalDays
                totalDays = (startDay > endTotalDays)?
                    endTotalDays + baseDay + 1 : startDay + baseDay;
            } else {
                // fractional is only based on endMonth eg: Jan 12 - Feb 18
                // (6 fractional days, 28 days until next full month)
                daysElapsed = endDay - startDay;
                totalDays = endTotalDays;
            }

            fractionalDiff = daysElapsed / totalDays;
        }

        return fractionalDiff;
    }


    function getFractionalYear(start, end, elapsedYears){
        var base = elapsedYears?
            new Date(end.getFullYear(), start.getMonth(), start.getDate()) :
            start;
        var elapsedDays = diff(base, end, 'day');
        return elapsedDays / totalDaysInYear(end);
    }


    module.exports = diff;



},{"../time/convert":255,"./totalDaysInMonth":77,"./totalDaysInYear":78}],67:[function(require,module,exports){

    // en-US (English, United States)
    module.exports = {
        "am" : "AM",
        "pm" : "PM",

        "x": "%m/%d/%y",
        "X": "%H:%M:%S",
        "c": "%a %d %b %Y %I:%M:%S %p %Z",

        "months" : [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],

        "months_abbr" : [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],

        "days" : [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],

        "days_abbr" : [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ]
    };


},{}],68:[function(require,module,exports){
var mixIn = require('../object/mixIn');
var enUS = require('./i18n/en-US');

    // we also use mixIn to make sure we don't affect the original locale
    var activeLocale = mixIn({}, enUS, {
        // we expose a "set" method to allow overriding the global locale
        set : function(localeData){
            mixIn(activeLocale, localeData);
        }
    });

    module.exports = activeLocale;



},{"../object/mixIn":183,"./i18n/en-US":67}],69:[function(require,module,exports){
var isDate = require('../lang/isDate');

    /**
     * checks if it's a leap year
     */
    function isLeapYear(fullYear){
        if (isDate(fullYear)) {
            fullYear = fullYear.getFullYear();
        }
        return fullYear % 400 === 0 || (fullYear % 100 !== 0 && fullYear % 4 === 0);
    }

    module.exports = isLeapYear;



},{"../lang/isDate":110}],70:[function(require,module,exports){
var startOf = require('./startOf');

    /**
     * Check if date is "same" with optional period
     */
    function isSame(date1, date2, period){
        if (period) {
            date1 = startOf(date1, period);
            date2 = startOf(date2, period);
        }
        return Number(date1) === Number(date2);
    }

    module.exports = isSame;



},{"./startOf":73}],71:[function(require,module,exports){
var some = require('../array/some');

    var datePatterns = [
        /^([0-9]{4})$/,                        // YYYY
        /^([0-9]{4})-([0-9]{2})$/,             // YYYY-MM (YYYYMM not allowed)
        /^([0-9]{4})-?([0-9]{2})-?([0-9]{2})$/ // YYYY-MM-DD or YYYYMMDD
    ];
    var ORD_DATE = /^([0-9]{4})-?([0-9]{3})$/; // YYYY-DDD

    var timePatterns = [
        /^([0-9]{2}(?:\.[0-9]*)?)$/,                      // HH.hh
        /^([0-9]{2}):?([0-9]{2}(?:\.[0-9]*)?)$/,          // HH:MM.mm
        /^([0-9]{2}):?([0-9]{2}):?([0-9]{2}(\.[0-9]*)?)$/ // HH:MM:SS.ss
    ];

    var DATE_TIME = /^(.+)T(.+)$/;
    var TIME_ZONE = /^(.+)([+\-])([0-9]{2}):?([0-9]{2})$/;

    function matchAll(str, patterns) {
        var match;
        var found = some(patterns, function(pattern) {
            return !!(match = pattern.exec(str));
        });

        return found ? match : null;
    }

    function getDate(year, month, day) {
        var date = new Date(Date.UTC(year, month, day));

        // Explicitly set year to avoid Date.UTC making dates < 100 relative to
        // 1900
        date.setUTCFullYear(year);

        var valid =
            date.getUTCFullYear() === year &&
            date.getUTCMonth() === month &&
            date.getUTCDate() === day;
        return valid ? +date : NaN;
    }

    function parseOrdinalDate(str) {
        var match = ORD_DATE.exec(str);
        if (match ) {
            var year = +match[1],
                day = +match[2],
                date = new Date(Date.UTC(year, 0, day));

            if (date.getUTCFullYear() === year) {
                return +date;
            }
        }

        return NaN;
    }

    function parseDate(str) {
        var match, year, month, day;

        match = matchAll(str, datePatterns);
        if (match === null) {
            // Ordinal dates are verified differently.
            return parseOrdinalDate(str);
        }

        year = (match[1] === void 0) ? 0 : +match[1];
        month = (match[2] === void 0) ? 0 : +match[2] - 1;
        day = (match[3] === void 0) ? 1 : +match[3];

        return getDate(year, month, day);
    }

    function getTime(hr, min, sec) {
        var valid =
            (hr < 24 && hr >= 0 &&
             min < 60 && min >= 0 &&
             sec < 60 && min >= 0) ||
            (hr === 24 && min === 0 && sec === 0);
        if (!valid) {
            return NaN;
        }

        return ((hr * 60 + min) * 60 + sec) * 1000;
    }

    function parseOffset(str) {
        var match;
        if (str.charAt(str.length - 1) === 'Z') {
            str = str.substring(0, str.length - 1);
        } else {
            match = TIME_ZONE.exec(str);
            if (match) {
                var hours = +match[3],
                    minutes = (match[4] === void 0) ? 0 : +match[4],
                    offset = getTime(hours, minutes, 0);

                if (match[2] === '-') {
                    offset *= -1;
                }

                return { offset: offset, time: match[1] };
            }
        }

        // No time zone specified, assume UTC
        return { offset: 0, time: str };
    }

    function parseTime(str) {
        var match;
        var offset = parseOffset(str);

        str = offset.time;
        offset = offset.offset;
        if (isNaN(offset)) {
            return NaN;
        }

        match = matchAll(str, timePatterns);
        if (match === null) {
            return NaN;
        }

        var hours = (match[1] === void 0) ? 0 : +match[1],
            minutes = (match[2] === void 0) ? 0 : +match[2],
            seconds = (match[3] === void 0) ? 0 : +match[3];

        return getTime(hours, minutes, seconds) - offset;
    }

    /**
     * Parse an ISO8601 formatted date string, and return a Date object.
     */
    function parseISO8601(str){
        var match = DATE_TIME.exec(str);
        if (!match) {
            // No time specified
            return parseDate(str);
        }

        return parseDate(match[1]) + parseTime(match[2]);
    }

    module.exports = parseISO8601;



},{"../array/some":39}],72:[function(require,module,exports){


    /**
     * gets date quarter
     */
    function quarter(date){
        var month = date.getMonth();
        if (month < 3) return 1;
        if (month < 6) return 2;
        if (month < 9) return 3;
        return 4;
    }

    module.exports = quarter;



},{}],73:[function(require,module,exports){
var clone = require('../lang/clone');

    /**
     * get a new Date object representing start of period
     */
    function startOf(date, period){
        date = clone(date);

        // intentionally removed "break" from switch since start of
        // month/year/etc should also reset the following periods
        switch (period) {
            case 'year':
                date.setMonth(0);
            /* falls through */
            case 'month':
                date.setDate(1);
            /* falls through */
            case 'week':
            case 'day':
                date.setHours(0);
            /* falls through */
            case 'hour':
                date.setMinutes(0);
            /* falls through */
            case 'minute':
                date.setSeconds(0);
            /* falls through */
            case 'second':
                date.setMilliseconds(0);
                break;
            default:
                throw new Error('"'+ period +'" is not a valid period');
        }

        // week is the only case that should reset the weekDay and maybe even
        // overflow to previous month
        if (period === 'week') {
            var weekDay = date.getDay();
            var baseDate = date.getDate();
            if (weekDay) {
                if (weekDay >= baseDate) {
                    //start of the week is on previous month
                    date.setDate(0);
                }
                date.setDate(date.getDate() - date.getDay());
            }
        }

        return date;
    }

    module.exports = startOf;



},{"../lang/clone":99}],74:[function(require,module,exports){
var pad = require('../number/pad');
var lpad = require('../string/lpad');
var i18n = require('./i18n_');
var dayOfTheYear = require('./dayOfTheYear');
var timezoneOffset = require('./timezoneOffset');
var timezoneAbbr = require('./timezoneAbbr');
var weekOfTheYear = require('./weekOfTheYear');

    var _combinations = {
        'D': '%m/%d/%y',
        'F': '%Y-%m-%d',
        'r': '%I:%M:%S %p',
        'R': '%H:%M',
        'T': '%H:%M:%S',
        'x': 'locale',
        'X': 'locale',
        'c': 'locale'
    };


    /**
     * format date based on strftime format
     */
    function strftime(date, format, localeData){
        localeData = localeData  || i18n;
        var reToken = /%([a-z%])/gi;

        function makeIterator(fn) {
            return function(match, token){
                return fn(date, token, localeData);
            };
        }

        return format
            .replace(reToken, makeIterator(expandCombinations))
            .replace(reToken, makeIterator(convertToken));
    }


    function expandCombinations(date, token, l10n){
        if (token in _combinations) {
            var expanded = _combinations[token];
            return expanded === 'locale'? l10n[token] : expanded;
        } else {
            return '%'+ token;
        }
    }


    function convertToken(date, token, l10n){
        switch (token){
            case 'a':
                return l10n.days_abbr[date.getDay()];
            case 'A':
                return l10n.days[date.getDay()];
            case 'h':
            case 'b':
                return l10n.months_abbr[date.getMonth()];
            case 'B':
                return l10n.months[date.getMonth()];
            case 'C':
                return pad(Math.floor(date.getFullYear() / 100), 2);
            case 'd':
                return pad(date.getDate(), 2);
            case 'e':
                return pad(date.getDate(), 2, ' ');
            case 'H':
                return pad(date.getHours(), 2);
            case 'I':
                return pad(date.getHours() % 12, 2);
            case 'j':
                return pad(dayOfTheYear(date), 3);
            case 'l':
                return lpad(date.getHours() % 12, 2);
            case 'L':
                return pad(date.getMilliseconds(), 3);
            case 'm':
                return pad(date.getMonth() + 1, 2);
            case 'M':
                return pad(date.getMinutes(), 2);
            case 'n':
                return '\n';
            case 'p':
                return date.getHours() >= 12? l10n.pm : l10n.am;
            case 'P':
                return convertToken(date, 'p', l10n).toLowerCase();
            case 's':
                return date.getTime() / 1000;
            case 'S':
                return pad(date.getSeconds(), 2);
            case 't':
                return '\t';
            case 'u':
                var day = date.getDay();
                return day === 0? 7 : day;
            case 'U':
                return pad(weekOfTheYear(date), 2);
            case 'w':
                return date.getDay();
            case 'W':
                return pad(weekOfTheYear(date, 1), 2);
            case 'y':
                return pad(date.getFullYear() % 100, 2);
            case 'Y':
                return pad(date.getFullYear(), 4);
            case 'z':
                return timezoneOffset(date);
            case 'Z':
                return timezoneAbbr(date);
            case '%':
                return '%';
            default:
                // keep unrecognized tokens
                return '%'+ token;
        }
    }


    module.exports = strftime;



},{"../number/pad":153,"../string/lpad":228,"./dayOfTheYear":65,"./i18n_":68,"./timezoneAbbr":75,"./timezoneOffset":76,"./weekOfTheYear":79}],75:[function(require,module,exports){
var timezoneOffset = require('./timezoneOffset');

    /**
     * Abbreviated time zone name or similar information.
     */
    function timezoneAbbr(date){
        // Date.toString gives different results depending on the
        // browser/system so we fallback to timezone offset
        // chrome: 'Mon Apr 08 2013 09:02:04 GMT-0300 (BRT)'
        // IE: 'Mon Apr 8 09:02:04 UTC-0300 2013'
        var tz = /\(([A-Z]{3,4})\)/.exec(date.toString());
        return tz? tz[1] : timezoneOffset(date);
    }

    module.exports = timezoneAbbr;



},{"./timezoneOffset":76}],76:[function(require,module,exports){
var pad = require('../number/pad');

    /**
     * time zone as hour and minute offset from UTC (e.g. +0900)
     */
    function timezoneOffset(date){
        var offset = date.getTimezoneOffset();
        var abs = Math.abs(offset);
        var h = pad(Math.floor(abs / 60), 2);
        var m = pad(abs % 60, 2);
        return (offset > 0? '-' : '+') + h + m;
    }

    module.exports = timezoneOffset;



},{"../number/pad":153}],77:[function(require,module,exports){
var isDate = require('../lang/isDate');
var isLeapYear = require('./isLeapYear');

    var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    /**
     * returns the total amount of days in the month (considering leap years)
     */
    function totalDaysInMonth(fullYear, monthIndex){
        if (isDate(fullYear)) {
            monthIndex = fullYear.getMonth();
        }

        if (monthIndex === 1 && isLeapYear(fullYear)) {
            return 29;
        } else {
            return DAYS_IN_MONTH[monthIndex];
        }
    }

    module.exports = totalDaysInMonth;



},{"../lang/isDate":110,"./isLeapYear":69}],78:[function(require,module,exports){
var isLeapYear = require('./isLeapYear');

    /**
     * return the amount of days in the year following the gregorian calendar
     * and leap years
     */
    function totalDaysInYear(fullYear){
        return isLeapYear(fullYear)? 366 : 365;
    }

    module.exports = totalDaysInYear;



},{"./isLeapYear":69}],79:[function(require,module,exports){
var dayOfTheYear = require('./dayOfTheYear');

    /**
     * Return the week of the year based on given firstDayOfWeek
     */
    function weekOfTheYear(date, firstDayOfWeek){
        firstDayOfWeek = firstDayOfWeek == null? 0 : firstDayOfWeek;
        var doy = dayOfTheYear(date);
        var dow = (7 + date.getDay() - firstDayOfWeek) % 7;
        var relativeWeekDay = 6 - firstDayOfWeek - dow;
        return Math.floor((doy + relativeWeekDay) / 7);
    }

    module.exports = weekOfTheYear;



},{"./dayOfTheYear":65}],80:[function(require,module,exports){


//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'awaitDelay' : require('./function/awaitDelay'),
    'bind' : require('./function/bind'),
    'compose' : require('./function/compose'),
    'constant' : require('./function/constant'),
    'debounce' : require('./function/debounce'),
    'func' : require('./function/func'),
    'identity' : require('./function/identity'),
    'makeIterator_' : require('./function/makeIterator_'),
    'partial' : require('./function/partial'),
    'prop' : require('./function/prop'),
    'series' : require('./function/series'),
    'throttle' : require('./function/throttle'),
    'timeout' : require('./function/timeout'),
    'times' : require('./function/times'),
    'wrap' : require('./function/wrap')
};



},{"./function/awaitDelay":81,"./function/bind":82,"./function/compose":83,"./function/constant":84,"./function/debounce":85,"./function/func":86,"./function/identity":87,"./function/makeIterator_":88,"./function/partial":89,"./function/prop":90,"./function/series":91,"./function/throttle":92,"./function/timeout":93,"./function/times":94,"./function/wrap":95}],81:[function(require,module,exports){
var now = require('../time/now');
var timeout = require('./timeout');
var append = require('../array/append');

    /**
     * Ensure a minimum delay for callbacks
     */
    function awaitDelay( callback, delay ){
        var baseTime = now() + delay;
        return function() {
            // ensure all browsers will execute it asynchronously (avoid hard
            // to catch errors) not using "0" because of old browsers and also
            // since new browsers increase the value to be at least "4"
            // http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout
            var ms = Math.max(baseTime - now(), 4);
            return timeout.apply(this, append([callback, ms, this], arguments));
        };
    }

    module.exports = awaitDelay;



},{"../array/append":3,"../time/now":256,"./timeout":93}],82:[function(require,module,exports){
var slice = require('../array/slice');

    /**
     * Return a function that will execute in the given context, optionally adding any additional supplied parameters to the beginning of the arguments collection.
     * @param {Function} fn  Function.
     * @param {object} context   Execution context.
     * @param {rest} args    Arguments (0...n arguments).
     * @return {Function} Wrapped Function.
     */
    function bind(fn, context, args){
        var argsArr = slice(arguments, 2); //curried args
        return function(){
            return fn.apply(context, argsArr.concat(slice(arguments)));
        };
    }

    module.exports = bind;



},{"../array/slice":38}],83:[function(require,module,exports){


    /**
     * Returns a function that composes multiple functions, passing results to
     * each other.
     */
    function compose() {
        var fns = arguments;
        return function(arg){
            // only cares about the first argument since the chain can only
            // deal with a single return value anyway. It should start from
            // the last fn.
            var n = fns.length;
            while (n--) {
                arg = fns[n].call(this, arg);
            }
            return arg;
         };
     }

     module.exports = compose;



},{}],84:[function(require,module,exports){


    /**
     * Returns a new function that will return the value
     */
    function constant(value){
        return function() {
            return value;
        };
    }

    module.exports = constant;



},{}],85:[function(require,module,exports){


    /**
     * Debounce callback execution
     */
    function debounce(fn, threshold, isAsap){
        var timeout, result;
        function debounced(){
            var args = arguments, context = this;
            function delayed(){
                if (! isAsap) {
                    result = fn.apply(context, args);
                }
                timeout = null;
            }
            if (timeout) {
                clearTimeout(timeout);
            } else if (isAsap) {
                result = fn.apply(context, args);
            }
            timeout = setTimeout(delayed, threshold);
            return result;
        }
        debounced.cancel = function(){
            clearTimeout(timeout);
        };
        return debounced;
    }

    module.exports = debounce;



},{}],86:[function(require,module,exports){


    /**
     * Returns a function that call a method on the passed object
     */
    function func(name){
        return function(obj){
            return obj[name]();
        };
    }

    module.exports = func;



},{}],87:[function(require,module,exports){


    /**
     * Returns the first argument provided to it.
     */
    function identity(val){
        return val;
    }

    module.exports = identity;



},{}],88:[function(require,module,exports){
var identity = require('./identity');
var prop = require('./prop');
var deepMatches = require('../object/deepMatches');

    /**
     * Converts argument into a valid iterator.
     * Used internally on most array/object/collection methods that receives a
     * callback/iterator providing a shortcut syntax.
     */
    function makeIterator(src, thisObj){
        if (src == null) {
            return identity;
        }
        switch(typeof src) {
            case 'function':
                // function is the first to improve perf (most common case)
                // also avoid using `Function#call` if not needed, which boosts
                // perf a lot in some cases
                return (typeof thisObj !== 'undefined')? function(val, i, arr){
                    return src.call(thisObj, val, i, arr);
                } : src;
            case 'object':
                return function(val){
                    return deepMatches(val, src);
                };
            case 'string':
            case 'number':
                return prop(src);
        }
    }

    module.exports = makeIterator;



},{"../object/deepMatches":164,"./identity":87,"./prop":90}],89:[function(require,module,exports){
var slice = require('../array/slice');

    /**
     * Creates a partially applied function.
     */
    function partial(f) {
        var as = slice(arguments, 1);
        return function() {
            var args = as.concat(slice(arguments));
            for (var i = args.length; i--;) {
                if (args[i] === partial._) {
                    args[i] = args.splice(-1)[0];
                }
            }
            return f.apply(this, args);
        };
    }

    partial._ = {};

    module.exports = partial;



},{"../array/slice":38}],90:[function(require,module,exports){


    /**
     * Returns a function that gets a property of the passed object
     */
    function prop(name){
        return function(obj){
            return obj[name];
        };
    }

    module.exports = prop;



},{}],91:[function(require,module,exports){


    /**
     * Returns a function that will execute a list of functions in sequence
     * passing the same arguments to each one. (useful for batch processing
     * items during a forEach loop)
     */
    function series(){
        var fns = arguments;
        return function(){
            var i = 0,
                n = fns.length;
            while (i < n) {
                fns[i].apply(this, arguments);
                i += 1;
            }
        };
    }

    module.exports = series;



},{}],92:[function(require,module,exports){
var now = require('../time/now');

    /**
     */
    function throttle(fn, delay){
        var context, timeout, result, args,
            diff, prevCall = 0;
        function delayed(){
            prevCall = now();
            timeout = null;
            result = fn.apply(context, args);
        }
        function throttled(){
            context = this;
            args = arguments;
            diff = delay - (now() - prevCall);
            if (diff <= 0) {
                clearTimeout(timeout);
                delayed();
            } else if (! timeout) {
                timeout = setTimeout(delayed, diff);
            }
            return result;
        }
        throttled.cancel = function(){
            clearTimeout(timeout);
        };
        return throttled;
    }

    module.exports = throttle;



},{"../time/now":256}],93:[function(require,module,exports){
var slice = require('../array/slice');

    /**
     * Delays the call of a function within a given context.
     */
    function timeout(fn, millis, context){

        var args = slice(arguments, 3);

        return setTimeout(function() {
            fn.apply(context, args);
        }, millis);
    }

    module.exports = timeout;



},{"../array/slice":38}],94:[function(require,module,exports){


    /**
     * Iterates over a callback a set amount of times
     */
    function times(n, callback, thisObj){
        var i = -1;
        while (++i < n) {
            if ( callback.call(thisObj, i) === false ) {
                break;
            }
        }
    }

    module.exports = times;



},{}],95:[function(require,module,exports){
var partial = require('./partial');

    /**
     * Returns the first function passed as an argument to the second,
     * allowing you to adjust arguments, run code before and after, and
     * conditionally execute the original function.
     */
    function wrap(fn, wrapper){
        return partial(wrapper, fn);
    }

    module.exports = wrap;



},{"./partial":89}],96:[function(require,module,exports){
/**@license
 * mout v0.11.0 | http://moutjs.com | MIT license
 */


//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'VERSION' : '0.11.0',
    'array' : require('./array'),
    'collection' : require('./collection'),
    'date' : require('./date'),
    'function' : require('./function'),
    'lang' : require('./lang'),
    'math' : require('./math'),
    'number' : require('./number'),
    'object' : require('./object'),
    'queryString' : require('./queryString'),
    'random' : require('./random'),
    'string' : require('./string'),
    'time' : require('./time'),
    'fn' : require('./function')
};



},{"./array":2,"./collection":49,"./date":64,"./function":80,"./lang":97,"./math":130,"./number":142,"./object":160,"./queryString":196,"./random":204,"./string":215,"./time":254}],97:[function(require,module,exports){


//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'GLOBAL' : require('./lang/GLOBAL'),
    'clone' : require('./lang/clone'),
    'createObject' : require('./lang/createObject'),
    'ctorApply' : require('./lang/ctorApply'),
    'deepClone' : require('./lang/deepClone'),
    'deepEquals' : require('./lang/deepEquals'),
    'defaults' : require('./lang/defaults'),
    'inheritPrototype' : require('./lang/inheritPrototype'),
    'is' : require('./lang/is'),
    'isArguments' : require('./lang/isArguments'),
    'isArray' : require('./lang/isArray'),
    'isBoolean' : require('./lang/isBoolean'),
    'isDate' : require('./lang/isDate'),
    'isEmpty' : require('./lang/isEmpty'),
    'isFinite' : require('./lang/isFinite'),
    'isFunction' : require('./lang/isFunction'),
    'isInteger' : require('./lang/isInteger'),
    'isKind' : require('./lang/isKind'),
    'isNaN' : require('./lang/isNaN'),
    'isNull' : require('./lang/isNull'),
    'isNumber' : require('./lang/isNumber'),
    'isObject' : require('./lang/isObject'),
    'isPlainObject' : require('./lang/isPlainObject'),
    'isPrimitive' : require('./lang/isPrimitive'),
    'isRegExp' : require('./lang/isRegExp'),
    'isString' : require('./lang/isString'),
    'isUndefined' : require('./lang/isUndefined'),
    'isnt' : require('./lang/isnt'),
    'kindOf' : require('./lang/kindOf'),
    'toArray' : require('./lang/toArray'),
    'toNumber' : require('./lang/toNumber'),
    'toString' : require('./lang/toString')
};



},{"./lang/GLOBAL":98,"./lang/clone":99,"./lang/createObject":100,"./lang/ctorApply":101,"./lang/deepClone":102,"./lang/deepEquals":103,"./lang/defaults":104,"./lang/inheritPrototype":105,"./lang/is":106,"./lang/isArguments":107,"./lang/isArray":108,"./lang/isBoolean":109,"./lang/isDate":110,"./lang/isEmpty":111,"./lang/isFinite":112,"./lang/isFunction":113,"./lang/isInteger":114,"./lang/isKind":115,"./lang/isNaN":116,"./lang/isNull":117,"./lang/isNumber":118,"./lang/isObject":119,"./lang/isPlainObject":120,"./lang/isPrimitive":121,"./lang/isRegExp":122,"./lang/isString":123,"./lang/isUndefined":124,"./lang/isnt":125,"./lang/kindOf":126,"./lang/toArray":127,"./lang/toNumber":128,"./lang/toString":129}],98:[function(require,module,exports){


    // Reference to the global context (works on ES3 and ES5-strict mode)
    //jshint -W061, -W064
    module.exports = Function('return this')();



},{}],99:[function(require,module,exports){
var kindOf = require('./kindOf');
var isPlainObject = require('./isPlainObject');
var mixIn = require('../object/mixIn');

    /**
     * Clone native types.
     */
    function clone(val){
        switch (kindOf(val)) {
            case 'Object':
                return cloneObject(val);
            case 'Array':
                return cloneArray(val);
            case 'RegExp':
                return cloneRegExp(val);
            case 'Date':
                return cloneDate(val);
            default:
                return val;
        }
    }

    function cloneObject(source) {
        if (isPlainObject(source)) {
            return mixIn({}, source);
        } else {
            return source;
        }
    }

    function cloneRegExp(r) {
        var flags = '';
        flags += r.multiline ? 'm' : '';
        flags += r.global ? 'g' : '';
        flags += r.ignoreCase ? 'i' : '';
        return new RegExp(r.source, flags);
    }

    function cloneDate(date) {
        return new Date(+date);
    }

    function cloneArray(arr) {
        return arr.slice();
    }

    module.exports = clone;



},{"../object/mixIn":183,"./isPlainObject":120,"./kindOf":126}],100:[function(require,module,exports){
var mixIn = require('../object/mixIn');

    /**
     * Create Object using prototypal inheritance and setting custom properties.
     * - Mix between Douglas Crockford Prototypal Inheritance <http://javascript.crockford.com/prototypal.html> and the EcmaScript 5 `Object.create()` method.
     * @param {object} parent    Parent Object.
     * @param {object} [props] Object properties.
     * @return {object} Created object.
     */
    function createObject(parent, props){
        function F(){}
        F.prototype = parent;
        return mixIn(new F(), props);

    }
    module.exports = createObject;



},{"../object/mixIn":183}],101:[function(require,module,exports){


    function F(){}

    /**
     * Do fn.apply on a constructor.
     */
    function ctorApply(ctor, args) {
        F.prototype = ctor.prototype;
        var instance = new F();
        ctor.apply(instance, args);
        return instance;
    }

    module.exports = ctorApply;



},{}],102:[function(require,module,exports){
var clone = require('./clone');
var forOwn = require('../object/forOwn');
var kindOf = require('./kindOf');
var isPlainObject = require('./isPlainObject');

    /**
     * Recursively clone native types.
     */
    function deepClone(val, instanceClone) {
        switch ( kindOf(val) ) {
            case 'Object':
                return cloneObject(val, instanceClone);
            case 'Array':
                return cloneArray(val, instanceClone);
            default:
                return clone(val);
        }
    }

    function cloneObject(source, instanceClone) {
        if (isPlainObject(source)) {
            var out = {};
            forOwn(source, function(val, key) {
                this[key] = deepClone(val, instanceClone);
            }, out);
            return out;
        } else if (instanceClone) {
            return instanceClone(source);
        } else {
            return source;
        }
    }

    function cloneArray(arr, instanceClone) {
        var out = [],
            i = -1,
            n = arr.length,
            val;
        while (++i < n) {
            out[i] = deepClone(arr[i], instanceClone);
        }
        return out;
    }

    module.exports = deepClone;




},{"../object/forOwn":172,"./clone":99,"./isPlainObject":120,"./kindOf":126}],103:[function(require,module,exports){
var is = require('./is');
var isObject = require('./isObject');
var isArray = require('./isArray');
var objEquals = require('../object/equals');
var arrEquals = require('../array/equals');

    /**
     * Recursively checks for same properties and values.
     */
    function deepEquals(a, b, callback){
        callback = callback || is;

        var bothObjects = isObject(a) && isObject(b);
        var bothArrays = !bothObjects && isArray(a) && isArray(b);

        if (!bothObjects && !bothArrays) {
            return callback(a, b);
        }

        function compare(a, b){
            return deepEquals(a, b, callback);
        }

        var method = bothObjects ? objEquals : arrEquals;
        return method(a, b, compare);
    }

    module.exports = deepEquals;



},{"../array/equals":9,"../object/equals":166,"./is":106,"./isArray":108,"./isObject":119}],104:[function(require,module,exports){
var toArray = require('./toArray');
var find = require('../array/find');

    /**
     * Return first non void argument
     */
    function defaults(var_args){
        return find(toArray(arguments), nonVoid);
    }

    function nonVoid(val){
        return val != null;
    }

    module.exports = defaults;



},{"../array/find":12,"./toArray":127}],105:[function(require,module,exports){
var createObject = require('./createObject');

    /**
    * Inherit prototype from another Object.
    * - inspired by Nicholas Zackas <http://nczonline.net> Solution
    * @param {object} child Child object
    * @param {object} parent    Parent Object
    */
    function inheritPrototype(child, parent){
        var p = createObject(parent.prototype);
        p.constructor = child;
        child.prototype = p;
        child.super_ = parent;
        return p;
    }

    module.exports = inheritPrototype;


},{"./createObject":100}],106:[function(require,module,exports){


    /**
     * Check if both arguments are egal.
     */
    function is(x, y){
        // implementation borrowed from harmony:egal spec
        if (x === y) {
          // 0 === -0, but they are not identical
          return x !== 0 || 1 / x === 1 / y;
        }

        // NaN !== NaN, but they are identical.
        // NaNs are the only non-reflexive value, i.e., if x !== x,
        // then x is a NaN.
        // isNaN is broken: it converts its argument to number, so
        // isNaN("foo") => true
        return x !== x && y !== y;
    }

    module.exports = is;



},{}],107:[function(require,module,exports){
var isKind = require('./isKind');

    /**
     */
    var isArgs = isKind(arguments, 'Arguments')?
            function(val){
                return isKind(val, 'Arguments');
            } :
            function(val){
                // Arguments is an Object on IE7
                return !!(val && Object.prototype.hasOwnProperty.call(val, 'callee'));
            };

    module.exports = isArgs;


},{"./isKind":115}],108:[function(require,module,exports){
var isKind = require('./isKind');
    /**
     */
    var isArray = Array.isArray || function (val) {
        return isKind(val, 'Array');
    };
    module.exports = isArray;


},{"./isKind":115}],109:[function(require,module,exports){
var isKind = require('./isKind');
    /**
     */
    function isBoolean(val) {
        return isKind(val, 'Boolean');
    }
    module.exports = isBoolean;


},{"./isKind":115}],110:[function(require,module,exports){
var isKind = require('./isKind');
    /**
     */
    function isDate(val) {
        return isKind(val, 'Date');
    }
    module.exports = isDate;


},{"./isKind":115}],111:[function(require,module,exports){
var forOwn = require('../object/forOwn');
var isArray = require('./isArray');

    function isEmpty(val){
        if (val == null) {
            // typeof null == 'object' so we check it first
            return true;
        } else if ( typeof val === 'string' || isArray(val) ) {
            return !val.length;
        } else if ( typeof val === 'object' ) {
            var result = true;
            forOwn(val, function(){
                result = false;
                return false; // break loop
            });
            return result;
        } else {
            return true;
        }
    }

    module.exports = isEmpty;



},{"../object/forOwn":172,"./isArray":108}],112:[function(require,module,exports){
var isNumber = require('./isNumber');
var GLOBAL = require('./GLOBAL');

    /**
     * Check if value is finite
     */
    function isFinite(val){
        var is = false;
        if (typeof val === 'string' && val !== '') {
            is = GLOBAL.isFinite( parseFloat(val) );
        } else if (isNumber(val)){
            // need to use isNumber because of Number constructor
            is = GLOBAL.isFinite( val );
        }
        return is;
    }

    module.exports = isFinite;



},{"./GLOBAL":98,"./isNumber":118}],113:[function(require,module,exports){
var isKind = require('./isKind');
    /**
     */
    function isFunction(val) {
        return isKind(val, 'Function');
    }
    module.exports = isFunction;


},{"./isKind":115}],114:[function(require,module,exports){
var isNumber = require('./isNumber');

    /**
     * Check if value is an integer
     */
    function isInteger(val){
        return isNumber(val) && (val % 1 === 0);
    }

    module.exports = isInteger;



},{"./isNumber":118}],115:[function(require,module,exports){
var kindOf = require('./kindOf');
    /**
     * Check if value is from a specific "kind".
     */
    function isKind(val, kind){
        return kindOf(val) === kind;
    }
    module.exports = isKind;


},{"./kindOf":126}],116:[function(require,module,exports){
var isNumber = require('./isNumber');
var $isNaN = require('../number/isNaN');

    /**
     * Check if value is NaN for realz
     */
    function isNaN(val){
        // based on the fact that NaN !== NaN
        // need to check if it's a number to avoid conflicts with host objects
        // also need to coerce ToNumber to avoid edge case `new Number(NaN)`
        return !isNumber(val) || $isNaN(Number(val));
    }

    module.exports = isNaN;



},{"../number/isNaN":150,"./isNumber":118}],117:[function(require,module,exports){

    /**
     */
    function isNull(val){
        return val === null;
    }
    module.exports = isNull;



},{}],118:[function(require,module,exports){
var isKind = require('./isKind');
    /**
     */
    function isNumber(val) {
        return isKind(val, 'Number');
    }
    module.exports = isNumber;


},{"./isKind":115}],119:[function(require,module,exports){
var isKind = require('./isKind');
    /**
     */
    function isObject(val) {
        return isKind(val, 'Object');
    }
    module.exports = isObject;


},{"./isKind":115}],120:[function(require,module,exports){


    /**
     * Checks if the value is created by the `Object` constructor.
     */
    function isPlainObject(value) {
        return (!!value && typeof value === 'object' &&
            value.constructor === Object);
    }

    module.exports = isPlainObject;



},{}],121:[function(require,module,exports){


    /**
     * Checks if the object is a primitive
     */
    function isPrimitive(value) {
        // Using switch fallthrough because it's simple to read and is
        // generally fast: http://jsperf.com/testing-value-is-primitive/5
        switch (typeof value) {
            case "string":
            case "number":
            case "boolean":
                return true;
        }

        return value == null;
    }

    module.exports = isPrimitive;



},{}],122:[function(require,module,exports){
var isKind = require('./isKind');
    /**
     */
    function isRegExp(val) {
        return isKind(val, 'RegExp');
    }
    module.exports = isRegExp;


},{"./isKind":115}],123:[function(require,module,exports){
var isKind = require('./isKind');
    /**
     */
    function isString(val) {
        return isKind(val, 'String');
    }
    module.exports = isString;


},{"./isKind":115}],124:[function(require,module,exports){

    var UNDEF;

    /**
     */
    function isUndef(val){
        return val === UNDEF;
    }
    module.exports = isUndef;


},{}],125:[function(require,module,exports){
var is = require('./is');

    /**
     * Check if both values are not identical/egal
     */
    function isnt(x, y){
        return !is(x, y);
    }

    module.exports = isnt;



},{"./is":106}],126:[function(require,module,exports){


    var _rKind = /^\[object (.*)\]$/,
        _toString = Object.prototype.toString,
        UNDEF;

    /**
     * Gets the "kind" of value. (e.g. "String", "Number", etc)
     */
    function kindOf(val) {
        if (val === null) {
            return 'Null';
        } else if (val === UNDEF) {
            return 'Undefined';
        } else {
            return _rKind.exec( _toString.call(val) )[1];
        }
    }
    module.exports = kindOf;


},{}],127:[function(require,module,exports){
var kindOf = require('./kindOf');
var GLOBAL = require('./GLOBAL');

    /**
     * Convert array-like object into array
     */
    function toArray(val){
        var ret = [],
            kind = kindOf(val),
            n;

        if (val != null) {
            if ( val.length == null || kind === 'String' || kind === 'Function' || kind === 'RegExp' || val === GLOBAL ) {
                //string, regexp, function have .length but user probably just want
                //to wrap value into an array..
                ret[ret.length] = val;
            } else {
                //window returns true on isObject in IE7 and may have length
                //property. `typeof NodeList` returns `function` on Safari so
                //we can't use it (#58)
                n = val.length;
                while (n--) {
                    ret[n] = val[n];
                }
            }
        }
        return ret;
    }
    module.exports = toArray;


},{"./GLOBAL":98,"./kindOf":126}],128:[function(require,module,exports){
var isArray = require('./isArray');

    /**
     * covert value into number if numeric
     */
    function toNumber(val){
        // numberic values should come first because of -0
        if (typeof val === 'number') return val;
        // we want all falsy values (besides -0) to return zero to avoid
        // headaches
        if (!val) return 0;
        if (typeof val === 'string') return parseFloat(val);
        // arrays are edge cases. `Number([4]) === 4`
        if (isArray(val)) return NaN;
        return Number(val);
    }

    module.exports = toNumber;



},{"./isArray":108}],129:[function(require,module,exports){


    /**
     * Typecast a value to a String, using an empty string value for null or
     * undefined.
     */
    function toString(val){
        return val == null ? '' : val.toString();
    }

    module.exports = toString;



},{}],130:[function(require,module,exports){


//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'ceil' : require('./math/ceil'),
    'clamp' : require('./math/clamp'),
    'countSteps' : require('./math/countSteps'),
    'floor' : require('./math/floor'),
    'inRange' : require('./math/inRange'),
    'isNear' : require('./math/isNear'),
    'lerp' : require('./math/lerp'),
    'loop' : require('./math/loop'),
    'map' : require('./math/map'),
    'norm' : require('./math/norm'),
    'round' : require('./math/round')
};



},{"./math/ceil":131,"./math/clamp":132,"./math/countSteps":133,"./math/floor":134,"./math/inRange":135,"./math/isNear":136,"./math/lerp":137,"./math/loop":138,"./math/map":139,"./math/norm":140,"./math/round":141}],131:[function(require,module,exports){

    /**
     * Round value up with a custom radix.
     */
    function ceil(val, step){
        step = Math.abs(step || 1);
        return Math.ceil(val / step) * step;
    }

    module.exports = ceil;


},{}],132:[function(require,module,exports){

    /**
     * Clamps value inside range.
     */
    function clamp(val, min, max){
        return val < min? min : (val > max? max : val);
    }
    module.exports = clamp;


},{}],133:[function(require,module,exports){

    /**
    * Count number of full steps.
    */
    function countSteps(val, step, overflow){
        val = Math.floor(val / step);

        if (overflow) {
            return val % overflow;
        }

        return val;
    }

    module.exports = countSteps;


},{}],134:[function(require,module,exports){

    /**
    * Floor value to full steps.
    */
    function floor(val, step){
        step = Math.abs(step || 1);
        return Math.floor(val / step) * step;
    }
    module.exports = floor;


},{}],135:[function(require,module,exports){

    /**
    * Checks if value is inside the range.
    */
    function inRange(val, min, max, threshold){
        threshold = threshold || 0;
        return (val + threshold >= min && val - threshold <= max);
    }

    module.exports = inRange;


},{}],136:[function(require,module,exports){

    /**
    * Check if value is close to target.
    */
    function isNear(val, target, threshold){
        return (Math.abs(val - target) <= threshold);
    }
    module.exports = isNear;


},{}],137:[function(require,module,exports){

    /**
    * Linear interpolation.
    * IMPORTANT:will return `Infinity` if numbers overflow Number.MAX_VALUE
    */
    function lerp(ratio, start, end){
        return start + (end - start) * ratio;
    }

    module.exports = lerp;


},{}],138:[function(require,module,exports){

    /**
    * Loops value inside range.
    */
    function loop(val, min, max){
        return val < min? max : (val > max? min : val);
    }

    module.exports = loop;


},{}],139:[function(require,module,exports){
var lerp = require('./lerp');
var norm = require('./norm');
    /**
    * Maps a number from one scale to another.
    * @example map(3, 0, 4, -1, 1) -> 0.5
    */
    function map(val, min1, max1, min2, max2){
        return lerp( norm(val, min1, max1), min2, max2 );
    }
    module.exports = map;


},{"./lerp":137,"./norm":140}],140:[function(require,module,exports){

    /**
    * Gets normalized ratio of value inside range.
    */
    function norm(val, min, max){
        if (val < min || val > max) {
            throw new RangeError('value (' + val + ') must be between ' + min + ' and ' + max);
        }

        return val === max ? 1 : (val - min) / (max - min);
    }
    module.exports = norm;


},{}],141:[function(require,module,exports){

    /**
     * Round number to a specific radix
     */
    function round(value, radix){
        radix = radix || 1; // default round 1
        return Math.round(value / radix) * radix;
    }

    module.exports = round;



},{}],142:[function(require,module,exports){


//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'MAX_INT' : require('./number/MAX_INT'),
    'MAX_SAFE_INTEGER' : require('./number/MAX_SAFE_INTEGER'),
    'MAX_UINT' : require('./number/MAX_UINT'),
    'MIN_INT' : require('./number/MIN_INT'),
    'abbreviate' : require('./number/abbreviate'),
    'currencyFormat' : require('./number/currencyFormat'),
    'enforcePrecision' : require('./number/enforcePrecision'),
    'isNaN' : require('./number/isNaN'),
    'nth' : require('./number/nth'),
    'ordinal' : require('./number/ordinal'),
    'pad' : require('./number/pad'),
    'rol' : require('./number/rol'),
    'ror' : require('./number/ror'),
    'sign' : require('./number/sign'),
    'toInt' : require('./number/toInt'),
    'toUInt' : require('./number/toUInt'),
    'toUInt31' : require('./number/toUInt31')
};



},{"./number/MAX_INT":143,"./number/MAX_SAFE_INTEGER":144,"./number/MAX_UINT":145,"./number/MIN_INT":146,"./number/abbreviate":147,"./number/currencyFormat":148,"./number/enforcePrecision":149,"./number/isNaN":150,"./number/nth":151,"./number/ordinal":152,"./number/pad":153,"./number/rol":154,"./number/ror":155,"./number/sign":156,"./number/toInt":157,"./number/toUInt":158,"./number/toUInt31":159}],143:[function(require,module,exports){
/**
 * @constant Maximum 32-bit signed integer value. (2^31 - 1)
 */

    module.exports = 2147483647;


},{}],144:[function(require,module,exports){


    // maximum safe integer (Math.pow(2, 53) - 1)
    // see: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer
    module.exports = 9007199254740991;



},{}],145:[function(require,module,exports){
/**
 * @constant Maximum 32-bit unsigned integet value (2^32 - 1)
 */

    module.exports = 4294967295;


},{}],146:[function(require,module,exports){
/**
 * @constant Minimum 32-bit signed integer value (-2^31).
 */

    module.exports = -2147483648;


},{}],147:[function(require,module,exports){
var enforcePrecision = require('./enforcePrecision');

    var _defaultDict = {
        thousand : 'K',
        million : 'M',
        billion : 'B'
    };

    /**
     * Abbreviate number if bigger than 1000. (eg: 2.5K, 17.5M, 3.4B, ...)
     */
    function abbreviateNumber(val, nDecimals, dict){
        nDecimals = nDecimals != null? nDecimals : 1;
        dict = dict || _defaultDict;
        val = enforcePrecision(val, nDecimals);

        var str, mod;

        if (val < 1000000) {
            mod = enforcePrecision(val / 1000, nDecimals);
            // might overflow to next scale during rounding
            str = mod < 1000? mod + dict.thousand : 1 + dict.million;
        } else if (val < 1000000000) {
            mod = enforcePrecision(val / 1000000, nDecimals);
            str = mod < 1000? mod + dict.million : 1 + dict.billion;
        } else {
            str = enforcePrecision(val / 1000000000, nDecimals) + dict.billion;
        }

        return str;
    }

    module.exports = abbreviateNumber;



},{"./enforcePrecision":149}],148:[function(require,module,exports){
var toNumber = require('../lang/toNumber');

    /**
     * Converts number into currency format
     */
    function currencyFormat(val, nDecimalDigits, decimalSeparator, thousandsSeparator) {
        val = toNumber(val);
        nDecimalDigits = nDecimalDigits == null? 2 : nDecimalDigits;
        decimalSeparator = decimalSeparator == null? '.' : decimalSeparator;
        thousandsSeparator = thousandsSeparator == null? ',' : thousandsSeparator;

        //can't use enforce precision since it returns a number and we are
        //doing a RegExp over the string
        var fixed = val.toFixed(nDecimalDigits),
            //separate begin [$1], middle [$2] and decimal digits [$4]
            parts = new RegExp('^(-?\\d{1,3})((?:\\d{3})+)(\\.(\\d{'+ nDecimalDigits +'}))?$').exec( fixed );

        if(parts){ //val >= 1000 || val <= -1000
            return parts[1] + parts[2].replace(/\d{3}/g, thousandsSeparator + '$&') + (parts[4] ? decimalSeparator + parts[4] : '');
        }else{
            return fixed.replace('.', decimalSeparator);
        }
    }

    module.exports = currencyFormat;



},{"../lang/toNumber":128}],149:[function(require,module,exports){
var toNumber = require('../lang/toNumber');
    /**
     * Enforce a specific amount of decimal digits and also fix floating
     * point rounding issues.
     */
    function enforcePrecision(val, nDecimalDigits){
        val = toNumber(val);
        var pow = Math.pow(10, nDecimalDigits);
        return +(Math.round(val * pow) / pow).toFixed(nDecimalDigits);
    }
    module.exports = enforcePrecision;


},{"../lang/toNumber":128}],150:[function(require,module,exports){


    /**
     * ES6 Number.isNaN
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
     */
    function isNaN(val){
        // jshint eqeqeq:false
        return typeof val === 'number' && val != val;
    }

    module.exports = isNaN;



},{}],151:[function(require,module,exports){


    /**
     * Returns "nth" of number (1 = "st", 2 = "nd", 3 = "rd", 4..10 = "th", ...)
     */
    function nth(i) {
        var t = (i % 100);
        if (t >= 10 && t <= 20) {
            return 'th';
        }
        switch(i % 10) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    }

    module.exports = nth;



},{}],152:[function(require,module,exports){
var toInt = require('./toInt');
var nth = require('./nth');

    /**
     * converts number into ordinal form (1st, 2nd, 3rd, 4th, ...)
     */
    function ordinal(n){
       n = toInt(n);
       return n + nth(n);
    }

    module.exports = ordinal;



},{"./nth":151,"./toInt":157}],153:[function(require,module,exports){
var lpad = require('../string/lpad');
var toNumber = require('../lang/toNumber');

    /**
     * Add padding zeros if n.length < minLength.
     */
    function pad(n, minLength, char){
        n = toNumber(n);
        return lpad(''+ n, minLength, char || '0');
    }

    module.exports = pad;



},{"../lang/toNumber":128,"../string/lpad":228}],154:[function(require,module,exports){

    /**
     * Bitwise circular shift left
     * http://en.wikipedia.org/wiki/Circular_shift
     */
    function rol(val, shift){
        return (val << shift) | (val >> (32 - shift));
    }
    module.exports = rol;


},{}],155:[function(require,module,exports){

    /**
     * Bitwise circular shift right
     * http://en.wikipedia.org/wiki/Circular_shift
     */
    function ror(val, shift){
        return (val >> shift) | (val << (32 - shift));
    }
    module.exports = ror;


},{}],156:[function(require,module,exports){
var toNumber = require('../lang/toNumber');

    /**
     * Get sign of the value.
     */
    function sign(val) {
        var num = toNumber(val);
        if (num === 0) return num; // +0 and +0 === 0
        if (isNaN(num)) return num; // NaN
        return num < 0? -1 : 1;
    }

    module.exports = sign;



},{"../lang/toNumber":128}],157:[function(require,module,exports){


    /**
     * "Convert" value into an 32-bit integer.
     * Works like `Math.floor` if val > 0 and `Math.ceil` if val < 0.
     * IMPORTANT: val will wrap at 2^31 and -2^31.
     * Perf tests: http://jsperf.com/vs-vs-parseint-bitwise-operators/7
     */
    function toInt(val){
        // we do not use lang/toNumber because of perf and also because it
        // doesn't break the functionality
        return ~~val;
    }

    module.exports = toInt;



},{}],158:[function(require,module,exports){


    /**
     * "Convert" value into a 32-bit unsigned integer.
     * IMPORTANT: Value will wrap at 2^32.
     */
    function toUInt(val){
        // we do not use lang/toNumber because of perf and also because it
        // doesn't break the functionality
        return val >>> 0;
    }

    module.exports = toUInt;



},{}],159:[function(require,module,exports){
var MAX_INT = require('./MAX_INT');

    /**
     * "Convert" value into an 31-bit unsigned integer (since 1 bit is used for sign).
     * IMPORTANT: value wil wrap at 2^31, if negative will return 0.
     */
    function toUInt31(val){
        // we do not use lang/toNumber because of perf and also because it
        // doesn't break the functionality
        return (val <= 0)? 0 : (val > MAX_INT? ~~(val % (MAX_INT + 1)) : ~~val);
    }

    module.exports = toUInt31;



},{"./MAX_INT":143}],160:[function(require,module,exports){


//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'bindAll' : require('./object/bindAll'),
    'contains' : require('./object/contains'),
    'deepFillIn' : require('./object/deepFillIn'),
    'deepMatches' : require('./object/deepMatches'),
    'deepMixIn' : require('./object/deepMixIn'),
    'equals' : require('./object/equals'),
    'every' : require('./object/every'),
    'fillIn' : require('./object/fillIn'),
    'filter' : require('./object/filter'),
    'find' : require('./object/find'),
    'forIn' : require('./object/forIn'),
    'forOwn' : require('./object/forOwn'),
    'functions' : require('./object/functions'),
    'get' : require('./object/get'),
    'has' : require('./object/has'),
    'hasOwn' : require('./object/hasOwn'),
    'keys' : require('./object/keys'),
    'map' : require('./object/map'),
    'matches' : require('./object/matches'),
    'max' : require('./object/max'),
    'merge' : require('./object/merge'),
    'min' : require('./object/min'),
    'mixIn' : require('./object/mixIn'),
    'namespace' : require('./object/namespace'),
    'omit' : require('./object/omit'),
    'pick' : require('./object/pick'),
    'pluck' : require('./object/pluck'),
    'reduce' : require('./object/reduce'),
    'reject' : require('./object/reject'),
    'result' : require('./object/result'),
    'set' : require('./object/set'),
    'size' : require('./object/size'),
    'some' : require('./object/some'),
    'unset' : require('./object/unset'),
    'values' : require('./object/values')
};



},{"./object/bindAll":161,"./object/contains":162,"./object/deepFillIn":163,"./object/deepMatches":164,"./object/deepMixIn":165,"./object/equals":166,"./object/every":167,"./object/fillIn":168,"./object/filter":169,"./object/find":170,"./object/forIn":171,"./object/forOwn":172,"./object/functions":173,"./object/get":174,"./object/has":175,"./object/hasOwn":176,"./object/keys":177,"./object/map":178,"./object/matches":179,"./object/max":180,"./object/merge":181,"./object/min":182,"./object/mixIn":183,"./object/namespace":184,"./object/omit":185,"./object/pick":186,"./object/pluck":187,"./object/reduce":188,"./object/reject":189,"./object/result":190,"./object/set":191,"./object/size":192,"./object/some":193,"./object/unset":194,"./object/values":195}],161:[function(require,module,exports){
var functions = require('./functions');
var bind = require('../function/bind');
var forEach = require('../array/forEach');
var slice = require('../array/slice');

    /**
     * Binds methods of the object to be run in it's own context.
     */
    function bindAll(obj, rest_methodNames){
        var keys = arguments.length > 1?
                    slice(arguments, 1) : functions(obj);
        forEach(keys, function(key){
            obj[key] = bind(obj[key], obj);
        });
    }

    module.exports = bindAll;



},{"../array/forEach":17,"../array/slice":38,"../function/bind":82,"./functions":173}],162:[function(require,module,exports){
var some = require('./some');

    /**
     * Check if object contains value
     */
    function contains(obj, needle) {
        return some(obj, function(val) {
            return (val === needle);
        });
    }
    module.exports = contains;



},{"./some":193}],163:[function(require,module,exports){
var forOwn = require('./forOwn');
var isPlainObject = require('../lang/isPlainObject');

    /**
     * Deeply copy missing properties in the target from the defaults.
     */
    function deepFillIn(target, defaults){
        var i = 0,
            n = arguments.length,
            obj;

        while(++i < n) {
            obj = arguments[i];
            if (obj) {
                // jshint loopfunc: true
                forOwn(obj, function(newValue, key) {
                    var curValue = target[key];
                    if (curValue == null) {
                        target[key] = newValue;
                    } else if (isPlainObject(curValue) &&
                               isPlainObject(newValue)) {
                        deepFillIn(curValue, newValue);
                    }
                });
            }
        }

        return target;
    }

    module.exports = deepFillIn;



},{"../lang/isPlainObject":120,"./forOwn":172}],164:[function(require,module,exports){
var forOwn = require('./forOwn');
var isArray = require('../lang/isArray');

    function containsMatch(array, pattern) {
        var i = -1, length = array.length;
        while (++i < length) {
            if (deepMatches(array[i], pattern)) {
                return true;
            }
        }

        return false;
    }

    function matchArray(target, pattern) {
        var i = -1, patternLength = pattern.length;
        while (++i < patternLength) {
            if (!containsMatch(target, pattern[i])) {
                return false;
            }
        }

        return true;
    }

    function matchObject(target, pattern) {
        var result = true;
        forOwn(pattern, function(val, key) {
            if (!deepMatches(target[key], val)) {
                // Return false to break out of forOwn early
                return (result = false);
            }
        });

        return result;
    }

    /**
     * Recursively check if the objects match.
     */
    function deepMatches(target, pattern){
        if (target && typeof target === 'object') {
            if (isArray(target) && isArray(pattern)) {
                return matchArray(target, pattern);
            } else {
                return matchObject(target, pattern);
            }
        } else {
            return target === pattern;
        }
    }

    module.exports = deepMatches;



},{"../lang/isArray":108,"./forOwn":172}],165:[function(require,module,exports){
var forOwn = require('./forOwn');
var isPlainObject = require('../lang/isPlainObject');

    /**
     * Mixes objects into the target object, recursively mixing existing child
     * objects.
     */
    function deepMixIn(target, objects) {
        var i = 0,
            n = arguments.length,
            obj;

        while(++i < n){
            obj = arguments[i];
            if (obj) {
                forOwn(obj, copyProp, target);
            }
        }

        return target;
    }

    function copyProp(val, key) {
        var existing = this[key];
        if (isPlainObject(val) && isPlainObject(existing)) {
            deepMixIn(existing, val);
        } else {
            this[key] = val;
        }
    }

    module.exports = deepMixIn;



},{"../lang/isPlainObject":120,"./forOwn":172}],166:[function(require,module,exports){
var hasOwn = require('./hasOwn');
var every = require('./every');
var isObject = require('../lang/isObject');
var is = require('../lang/is');

    // Makes a function to compare the object values from the specified compare
    // operation callback.
    function makeCompare(callback) {
        return function(value, key) {
            return hasOwn(this, key) && callback(value, this[key]);
        };
    }

    function checkProperties(value, key) {
        return hasOwn(this, key);
    }

    /**
     * Checks if two objects have the same keys and values.
     */
    function equals(a, b, callback) {
        callback = callback || is;

        if (!isObject(a) || !isObject(b)) {
            return callback(a, b);
        }

        return (every(a, makeCompare(callback), b) &&
                every(b, checkProperties, a));
    }

    module.exports = equals;


},{"../lang/is":106,"../lang/isObject":119,"./every":167,"./hasOwn":176}],167:[function(require,module,exports){
var forOwn = require('./forOwn');
var makeIterator = require('../function/makeIterator_');

    /**
     * Object every
     */
    function every(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var result = true;
        forOwn(obj, function(val, key) {
            // we consider any falsy values as "false" on purpose so shorthand
            // syntax can be used to check property existence
            if (!callback(val, key, obj)) {
                result = false;
                return false; // break
            }
        });
        return result;
    }

    module.exports = every;



},{"../function/makeIterator_":88,"./forOwn":172}],168:[function(require,module,exports){
var forEach = require('../array/forEach');
var slice = require('../array/slice');
var forOwn = require('./forOwn');

    /**
     * Copy missing properties in the obj from the defaults.
     */
    function fillIn(obj, var_defaults){
        forEach(slice(arguments, 1), function(base){
            forOwn(base, function(val, key){
                if (obj[key] == null) {
                    obj[key] = val;
                }
            });
        });
        return obj;
    }

    module.exports = fillIn;



},{"../array/forEach":17,"../array/slice":38,"./forOwn":172}],169:[function(require,module,exports){
var forOwn = require('./forOwn');
var makeIterator = require('../function/makeIterator_');

    /**
     * Creates a new object with all the properties where the callback returns
     * true.
     */
    function filterValues(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var output = {};
        forOwn(obj, function(value, key, obj) {
            if (callback(value, key, obj)) {
                output[key] = value;
            }
        });

        return output;
    }
    module.exports = filterValues;


},{"../function/makeIterator_":88,"./forOwn":172}],170:[function(require,module,exports){
var some = require('./some');
var makeIterator = require('../function/makeIterator_');

    /**
     * Returns first item that matches criteria
     */
    function find(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var result;
        some(obj, function(value, key, obj) {
            if (callback(value, key, obj)) {
                result = value;
                return true; //break
            }
        });
        return result;
    }

    module.exports = find;



},{"../function/makeIterator_":88,"./some":193}],171:[function(require,module,exports){
var hasOwn = require('./hasOwn');

    var _hasDontEnumBug,
        _dontEnums;

    function checkDontEnum(){
        _dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ];

        _hasDontEnumBug = true;

        for (var key in {'toString': null}) {
            _hasDontEnumBug = false;
        }
    }

    /**
     * Similar to Array/forEach but works over object properties and fixes Don't
     * Enum bug on IE.
     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    function forIn(obj, fn, thisObj){
        var key, i = 0;
        // no need to check if argument is a real object that way we can use
        // it for arrays, functions, date, etc.

        //post-pone check till needed
        if (_hasDontEnumBug == null) checkDontEnum();

        for (key in obj) {
            if (exec(fn, obj, key, thisObj) === false) {
                break;
            }
        }


        if (_hasDontEnumBug) {
            var ctor = obj.constructor,
                isProto = !!ctor && obj === ctor.prototype;

            while (key = _dontEnums[i++]) {
                // For constructor, if it is a prototype object the constructor
                // is always non-enumerable unless defined otherwise (and
                // enumerated above).  For non-prototype objects, it will have
                // to be defined on this object, since it cannot be defined on
                // any prototype objects.
                //
                // For other [[DontEnum]] properties, check if the value is
                // different than Object prototype value.
                if (
                    (key !== 'constructor' ||
                        (!isProto && hasOwn(obj, key))) &&
                    obj[key] !== Object.prototype[key]
                ) {
                    if (exec(fn, obj, key, thisObj) === false) {
                        break;
                    }
                }
            }
        }
    }

    function exec(fn, obj, key, thisObj){
        return fn.call(thisObj, obj[key], key, obj);
    }

    module.exports = forIn;



},{"./hasOwn":176}],172:[function(require,module,exports){
var hasOwn = require('./hasOwn');
var forIn = require('./forIn');

    /**
     * Similar to Array/forEach but works over object properties and fixes Don't
     * Enum bug on IE.
     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    function forOwn(obj, fn, thisObj){
        forIn(obj, function(val, key){
            if (hasOwn(obj, key)) {
                return fn.call(thisObj, obj[key], key, obj);
            }
        });
    }

    module.exports = forOwn;



},{"./forIn":171,"./hasOwn":176}],173:[function(require,module,exports){
var forIn = require('./forIn');

    /**
     * return a list of all enumerable properties that have function values
     */
    function functions(obj){
        var keys = [];
        forIn(obj, function(val, key){
            if (typeof val === 'function'){
                keys.push(key);
            }
        });
        return keys.sort();
    }

    module.exports = functions;



},{"./forIn":171}],174:[function(require,module,exports){
var isPrimitive = require('../lang/isPrimitive');

    /**
     * get "nested" object property
     */
    function get(obj, prop){
        var parts = prop.split('.'),
            last = parts.pop();

        while (prop = parts.shift()) {
            obj = obj[prop];
            if (obj == null) return;
        }

        return obj[last];
    }

    module.exports = get;



},{"../lang/isPrimitive":121}],175:[function(require,module,exports){
var get = require('./get');

    var UNDEF;

    /**
     * Check if object has nested property.
     */
    function has(obj, prop){
        return get(obj, prop) !== UNDEF;
    }

    module.exports = has;




},{"./get":174}],176:[function(require,module,exports){


    /**
     * Safer Object.hasOwnProperty
     */
     function hasOwn(obj, prop){
         return Object.prototype.hasOwnProperty.call(obj, prop);
     }

     module.exports = hasOwn;



},{}],177:[function(require,module,exports){
var forOwn = require('./forOwn');

    /**
     * Get object keys
     */
     var keys = Object.keys || function (obj) {
            var keys = [];
            forOwn(obj, function(val, key){
                keys.push(key);
            });
            return keys;
        };

    module.exports = keys;



},{"./forOwn":172}],178:[function(require,module,exports){
var forOwn = require('./forOwn');
var makeIterator = require('../function/makeIterator_');

    /**
     * Creates a new object where all the values are the result of calling
     * `callback`.
     */
    function mapValues(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var output = {};
        forOwn(obj, function(val, key, obj) {
            output[key] = callback(val, key, obj);
        });

        return output;
    }
    module.exports = mapValues;


},{"../function/makeIterator_":88,"./forOwn":172}],179:[function(require,module,exports){
var forOwn = require('./forOwn');

    /**
     * checks if a object contains all given properties/values
     */
    function matches(target, props){
        // can't use "object/every" because of circular dependency
        var result = true;
        forOwn(props, function(val, key){
            if (target[key] !== val) {
                // break loop at first difference
                return (result = false);
            }
        });
        return result;
    }

    module.exports = matches;



},{"./forOwn":172}],180:[function(require,module,exports){
var arrMax = require('../array/max');
var values = require('./values');

    /**
     * Returns maximum value inside object.
     */
    function max(obj, compareFn) {
        return arrMax(values(obj), compareFn);
    }

    module.exports = max;


},{"../array/max":27,"./values":195}],181:[function(require,module,exports){
var hasOwn = require('./hasOwn');
var deepClone = require('../lang/deepClone');
var isObject = require('../lang/isObject');

    /**
     * Deep merge objects.
     */
    function merge() {
        var i = 1,
            key, val, obj, target;

        // make sure we don't modify source element and it's properties
        // objects are passed by reference
        target = deepClone( arguments[0] );

        while (obj = arguments[i++]) {
            for (key in obj) {
                if ( ! hasOwn(obj, key) ) {
                    continue;
                }

                val = obj[key];

                if ( isObject(val) && isObject(target[key]) ){
                    // inception, deep merge objects
                    target[key] = merge(target[key], val);
                } else {
                    // make sure arrays, regexp, date, objects are cloned
                    target[key] = deepClone(val);
                }

            }
        }

        return target;
    }

    module.exports = merge;



},{"../lang/deepClone":102,"../lang/isObject":119,"./hasOwn":176}],182:[function(require,module,exports){
var arrMin = require('../array/min');
var values = require('./values');

    /**
     * Returns minimum value inside object.
     */
    function min(obj, iterator) {
        return arrMin(values(obj), iterator);
    }

    module.exports = min;


},{"../array/min":28,"./values":195}],183:[function(require,module,exports){
var forOwn = require('./forOwn');

    /**
    * Combine properties from all the objects into first one.
    * - This method affects target object in place, if you want to create a new Object pass an empty object as first param.
    * @param {object} target    Target Object
    * @param {...object} objects    Objects to be combined (0...n objects).
    * @return {object} Target Object.
    */
    function mixIn(target, objects){
        var i = 0,
            n = arguments.length,
            obj;
        while(++i < n){
            obj = arguments[i];
            if (obj != null) {
                forOwn(obj, copyProp, target);
            }
        }
        return target;
    }

    function copyProp(val, key){
        this[key] = val;
    }

    module.exports = mixIn;


},{"./forOwn":172}],184:[function(require,module,exports){
var forEach = require('../array/forEach');

    /**
     * Create nested object if non-existent
     */
    function namespace(obj, path){
        if (!path) return obj;
        forEach(path.split('.'), function(key){
            if (!obj[key]) {
                obj[key] = {};
            }
            obj = obj[key];
        });
        return obj;
    }

    module.exports = namespace;



},{"../array/forEach":17}],185:[function(require,module,exports){
var slice = require('../array/slice');
var contains = require('../array/contains');

    /**
     * Return a copy of the object, filtered to only contain properties except the blacklisted keys.
     */
    function omit(obj, var_keys){
        var keys = typeof arguments[1] !== 'string'? arguments[1] : slice(arguments, 1),
            out = {};

        for (var property in obj) {
            if (obj.hasOwnProperty(property) && !contains(keys, property)) {
                out[property] = obj[property];
            }
        }
        return out;
    }

    module.exports = omit;



},{"../array/contains":7,"../array/slice":38}],186:[function(require,module,exports){
var slice = require('../array/slice');

    /**
     * Return a copy of the object, filtered to only have values for the whitelisted keys.
     */
    function pick(obj, var_keys){
        var keys = typeof arguments[1] !== 'string'? arguments[1] : slice(arguments, 1),
            out = {},
            i = 0, key;
        while (key = keys[i++]) {
            out[key] = obj[key];
        }
        return out;
    }

    module.exports = pick;



},{"../array/slice":38}],187:[function(require,module,exports){
var map = require('./map');
var prop = require('../function/prop');

    /**
     * Extract a list of property values.
     */
    function pluck(obj, propName){
        return map(obj, prop(propName));
    }

    module.exports = pluck;



},{"../function/prop":90,"./map":178}],188:[function(require,module,exports){
var forOwn = require('./forOwn');
var size = require('./size');

    /**
     * Object reduce
     */
    function reduce(obj, callback, memo, thisObj) {
        var initial = arguments.length > 2;

        if (!size(obj) && !initial) {
            throw new Error('reduce of empty object with no initial value');
        }

        forOwn(obj, function(value, key, list) {
            if (!initial) {
                memo = value;
                initial = true;
            }
            else {
                memo = callback.call(thisObj, memo, value, key, list);
            }
        });

        return memo;
    }

    module.exports = reduce;



},{"./forOwn":172,"./size":192}],189:[function(require,module,exports){
var filter = require('./filter');
var makeIterator = require('../function/makeIterator_');

    /**
     * Object reject
     */
    function reject(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        return filter(obj, function(value, index, obj) {
            return !callback(value, index, obj);
        }, thisObj);
    }

    module.exports = reject;



},{"../function/makeIterator_":88,"./filter":169}],190:[function(require,module,exports){
var isFunction = require('../lang/isFunction');

    function result(obj, prop) {
        var property = obj[prop];

        if(property === undefined) {
            return;
        }

        return isFunction(property) ? property.call(obj) : property;
    }

    module.exports = result;


},{"../lang/isFunction":113}],191:[function(require,module,exports){
var namespace = require('./namespace');

    /**
     * set "nested" object property
     */
    function set(obj, prop, val){
        var parts = (/^(.+)\.(.+)$/).exec(prop);
        if (parts){
            namespace(obj, parts[1])[parts[2]] = val;
        } else {
            obj[prop] = val;
        }
    }

    module.exports = set;



},{"./namespace":184}],192:[function(require,module,exports){
var forOwn = require('./forOwn');

    /**
     * Get object size
     */
    function size(obj) {
        var count = 0;
        forOwn(obj, function(){
            count++;
        });
        return count;
    }

    module.exports = size;



},{"./forOwn":172}],193:[function(require,module,exports){
var forOwn = require('./forOwn');
var makeIterator = require('../function/makeIterator_');

    /**
     * Object some
     */
    function some(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var result = false;
        forOwn(obj, function(val, key) {
            if (callback(val, key, obj)) {
                result = true;
                return false; // break
            }
        });
        return result;
    }

    module.exports = some;



},{"../function/makeIterator_":88,"./forOwn":172}],194:[function(require,module,exports){
var has = require('./has');

    /**
     * Unset object property.
     */
    function unset(obj, prop){
        if (has(obj, prop)) {
            var parts = prop.split('.'),
                last = parts.pop();
            while (prop = parts.shift()) {
                obj = obj[prop];
            }
            return (delete obj[last]);

        } else {
            // if property doesn't exist treat as deleted
            return true;
        }
    }

    module.exports = unset;



},{"./has":175}],195:[function(require,module,exports){
var forOwn = require('./forOwn');

    /**
     * Get object values
     */
    function values(obj) {
        var vals = [];
        forOwn(obj, function(val, key){
            vals.push(val);
        });
        return vals;
    }

    module.exports = values;



},{"./forOwn":172}],196:[function(require,module,exports){


//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'contains' : require('./queryString/contains'),
    'decode' : require('./queryString/decode'),
    'encode' : require('./queryString/encode'),
    'getParam' : require('./queryString/getParam'),
    'getQuery' : require('./queryString/getQuery'),
    'parse' : require('./queryString/parse'),
    'setParam' : require('./queryString/setParam')
};



},{"./queryString/contains":197,"./queryString/decode":198,"./queryString/encode":199,"./queryString/getParam":200,"./queryString/getQuery":201,"./queryString/parse":202,"./queryString/setParam":203}],197:[function(require,module,exports){
var getQuery = require('./getQuery');

    /**
     * Checks if query string contains parameter.
     */
    function contains(url, paramName) {
        var regex = new RegExp('(\\?|&)'+ paramName +'=', 'g'); //matches `?param=` or `&param=`
        return regex.test(getQuery(url));
    }

    module.exports = contains;


},{"./getQuery":201}],198:[function(require,module,exports){
var typecast = require('../string/typecast');
var isString = require('../lang/isString');
var isArray = require('../lang/isArray');
var hasOwn = require('../object/hasOwn');

    /**
     * Decode query string into an object of keys => vals.
     */
    function decode(queryStr, shouldTypecast) {
        var queryArr = (queryStr || '').replace('?', '').split('&'),
            count = -1,
            length = queryArr.length,
            obj = {},
            item, pValue, pName, toSet;

        while (++count < length) {
            item = queryArr[count].split('=');
            pName = item[0];
            if (!pName || !pName.length){
                continue;
            }
            pValue = shouldTypecast === false ? item[1] : typecast(item[1]);
            toSet = isString(pValue) ? decodeURIComponent(pValue) : pValue;
            if (hasOwn(obj,pName)){
                if(isArray(obj[pName])){
                    obj[pName].push(toSet);
                } else {
                    obj[pName] = [obj[pName],toSet];
                }
            } else {
                obj[pName] = toSet;
           }
        }
        return obj;
    }

    module.exports = decode;


},{"../lang/isArray":108,"../lang/isString":123,"../object/hasOwn":176,"../string/typecast":247}],199:[function(require,module,exports){
var forOwn = require('../object/forOwn');
var isArray = require('../lang/isArray');
var forEach = require('../array/forEach');

    /**
     * Encode object into a query string.
     */
    function encode(obj){
        var query = [],
            arrValues, reg;
        forOwn(obj, function (val, key) {
            if (isArray(val)) {
                arrValues = key + '=';
                reg = new RegExp('&'+key+'+=$');
                forEach(val, function (aValue) {
                    arrValues += encodeURIComponent(aValue) + '&' + key + '=';
                });
                query.push(arrValues.replace(reg, ''));
            } else {
               query.push(key + '=' + encodeURIComponent(val));
            }
        });
        return (query.length) ? '?' + query.join('&') : '';
    }

    module.exports = encode;


},{"../array/forEach":17,"../lang/isArray":108,"../object/forOwn":172}],200:[function(require,module,exports){
var typecast = require('../string/typecast');
var getQuery = require('./getQuery');

    /**
     * Get query parameter value.
     */
    function getParam(url, param, shouldTypecast){
        var regexp = new RegExp('(\\?|&)'+ param + '=([^&]*)'), //matches `?param=value` or `&param=value`, value = $2
            result = regexp.exec( getQuery(url) ),
            val = (result && result[2])? result[2] : null;
        return shouldTypecast === false? val : typecast(val);
    }

    module.exports = getParam;


},{"../string/typecast":247,"./getQuery":201}],201:[function(require,module,exports){


    /**
     * Gets full query as string with all special chars decoded.
     */
    function getQuery(url) {
        url = url.replace(/#.*/, ''); //removes hash (to avoid getting hash query)
        var queryString = /\?[a-zA-Z0-9\=\&\%\$\-\_\.\+\!\*\'\(\)\,]+/.exec(url); //valid chars according to: http://www.ietf.org/rfc/rfc1738.txt
        return (queryString)? decodeURIComponent(queryString[0]) : '';
    }

    module.exports = getQuery;


},{}],202:[function(require,module,exports){
var decode = require('./decode');
var getQuery = require('./getQuery');

    /**
     * Get query string, parses and decodes it.
     */
    function parse(url, shouldTypecast) {
        return decode(getQuery(url), shouldTypecast);
    }

    module.exports = parse;



},{"./decode":198,"./getQuery":201}],203:[function(require,module,exports){


    /**
     * Set query string parameter value
     */
    function setParam(url, paramName, value){
        url = url || '';

        var re = new RegExp('(\\?|&)'+ paramName +'=[^&]*' );
        var param = paramName +'='+ encodeURIComponent( value );

        if ( re.test(url) ) {
            return url.replace(re, '$1'+ param);
        } else {
            if (url.indexOf('?') === -1) {
                url += '?';
            }
            if (url.indexOf('=') !== -1) {
                url += '&';
            }
            return url + param;
        }

    }

    module.exports = setParam;



},{}],204:[function(require,module,exports){


//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'choice' : require('./random/choice'),
    'guid' : require('./random/guid'),
    'rand' : require('./random/rand'),
    'randBit' : require('./random/randBit'),
    'randBool' : require('./random/randBool'),
    'randHex' : require('./random/randHex'),
    'randInt' : require('./random/randInt'),
    'randSign' : require('./random/randSign'),
    'randString' : require('./random/randString'),
    'random' : require('./random/random')
};



},{"./random/choice":205,"./random/guid":206,"./random/rand":207,"./random/randBit":208,"./random/randBool":209,"./random/randHex":210,"./random/randInt":211,"./random/randSign":212,"./random/randString":213,"./random/random":214}],205:[function(require,module,exports){
var randInt = require('./randInt');
var isArray = require('../lang/isArray');

    /**
     * Returns a random element from the supplied arguments
     * or from the array (if single argument is an array).
     */
    function choice(items) {
        var target = (arguments.length === 1 && isArray(items))? items : arguments;
        return target[ randInt(0, target.length - 1) ];
    }

    module.exports = choice;



},{"../lang/isArray":108,"./randInt":211}],206:[function(require,module,exports){
var randHex = require('./randHex');
var choice = require('./choice');

  /**
   * Returns pseudo-random guid (UUID v4)
   * IMPORTANT: it's not totally "safe" since randHex/choice uses Math.random
   * by default and sequences can be predicted in some cases. See the
   * "random/random" documentation for more info about it and how to replace
   * the default PRNG.
   */
  function guid() {
    return (
        randHex(8)+'-'+
        randHex(4)+'-'+
        // v4 UUID always contain "4" at this position to specify it was
        // randomly generated
        '4' + randHex(3) +'-'+
        // v4 UUID always contain chars [a,b,8,9] at this position
        choice(8, 9, 'a', 'b') + randHex(3)+'-'+
        randHex(12)
    );
  }
  module.exports = guid;


},{"./choice":205,"./randHex":210}],207:[function(require,module,exports){
var random = require('./random');
var MIN_INT = require('../number/MIN_INT');
var MAX_INT = require('../number/MAX_INT');

    /**
     * Returns random number inside range
     */
    function rand(min, max){
        min = min == null? MIN_INT : min;
        max = max == null? MAX_INT : max;
        return min + (max - min) * random();
    }

    module.exports = rand;


},{"../number/MAX_INT":143,"../number/MIN_INT":146,"./random":214}],208:[function(require,module,exports){
var randBool = require('./randBool');

    /**
     * Returns random bit (0 or 1)
     */
    function randomBit() {
        return randBool()? 1 : 0;
    }

    module.exports = randomBit;


},{"./randBool":209}],209:[function(require,module,exports){
var random = require('./random');

    /**
     * returns a random boolean value (true or false)
     */
    function randBool(){
        return random() >= 0.5;
    }

    module.exports = randBool;



},{"./random":214}],210:[function(require,module,exports){
var choice = require('./choice');

    var _chars = '0123456789abcdef'.split('');

    /**
     * Returns a random hexadecimal string
     */
    function randHex(size){
        size = size && size > 0? size : 6;
        var str = '';
        while (size--) {
            str += choice(_chars);
        }
        return str;
    }

    module.exports = randHex;



},{"./choice":205}],211:[function(require,module,exports){
var MIN_INT = require('../number/MIN_INT');
var MAX_INT = require('../number/MAX_INT');
var rand = require('./rand');

    /**
     * Gets random integer inside range or snap to min/max values.
     */
    function randInt(min, max){
        min = min == null? MIN_INT : ~~min;
        max = max == null? MAX_INT : ~~max;
        // can't be max + 0.5 otherwise it will round up if `rand`
        // returns `max` causing it to overflow range.
        // -0.5 and + 0.49 are required to avoid bias caused by rounding
        return Math.round( rand(min - 0.5, max + 0.499999999999) );
    }

    module.exports = randInt;


},{"../number/MAX_INT":143,"../number/MIN_INT":146,"./rand":207}],212:[function(require,module,exports){
var randBool = require('./randBool');

    /**
     * Returns random sign (-1 or 1)
     */
    function randomSign() {
        return randBool()? 1 : -1;
    }

    module.exports = randomSign;


},{"./randBool":209}],213:[function(require,module,exports){
var isNumber = require('../lang/isNumber');
var isString = require('../lang/isString');
var randInt = require('./randInt');

    var defaultDictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function randomString(length, dictionary) {
        if(!isNumber(length) || length <= 0) {
          length = 8;
        }

        if(!isString(dictionary) || dictionary.length < 1) {
          dictionary = defaultDictionary;
        }

        var result = '',
            domain = dictionary.length - 1;

        while(length--) {
          result += dictionary[randInt(0, domain)];
        }
        
        return result;
    }

    module.exports = randomString;


},{"../lang/isNumber":118,"../lang/isString":123,"./randInt":211}],214:[function(require,module,exports){


    /**
     * Just a wrapper to Math.random. No methods inside mout/random should call
     * Math.random() directly so we can inject the pseudo-random number
     * generator if needed (ie. in case we need a seeded random or a better
     * algorithm than the native one)
     */
    function random(){
        return random.get();
    }

    // we expose the method so it can be swapped if needed
    random.get = Math.random;

    module.exports = random;



},{}],215:[function(require,module,exports){


//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'WHITE_SPACES' : require('./string/WHITE_SPACES'),
    'camelCase' : require('./string/camelCase'),
    'contains' : require('./string/contains'),
    'crop' : require('./string/crop'),
    'endsWith' : require('./string/endsWith'),
    'escapeHtml' : require('./string/escapeHtml'),
    'escapeRegExp' : require('./string/escapeRegExp'),
    'escapeUnicode' : require('./string/escapeUnicode'),
    'hyphenate' : require('./string/hyphenate'),
    'insert' : require('./string/insert'),
    'interpolate' : require('./string/interpolate'),
    'lowerCase' : require('./string/lowerCase'),
    'lpad' : require('./string/lpad'),
    'ltrim' : require('./string/ltrim'),
    'makePath' : require('./string/makePath'),
    'normalizeLineBreaks' : require('./string/normalizeLineBreaks'),
    'pascalCase' : require('./string/pascalCase'),
    'properCase' : require('./string/properCase'),
    'removeNonASCII' : require('./string/removeNonASCII'),
    'removeNonWord' : require('./string/removeNonWord'),
    'repeat' : require('./string/repeat'),
    'replace' : require('./string/replace'),
    'replaceAccents' : require('./string/replaceAccents'),
    'rpad' : require('./string/rpad'),
    'rtrim' : require('./string/rtrim'),
    'sentenceCase' : require('./string/sentenceCase'),
    'slugify' : require('./string/slugify'),
    'startsWith' : require('./string/startsWith'),
    'stripHtmlTags' : require('./string/stripHtmlTags'),
    'trim' : require('./string/trim'),
    'truncate' : require('./string/truncate'),
    'typecast' : require('./string/typecast'),
    'unCamelCase' : require('./string/unCamelCase'),
    'underscore' : require('./string/underscore'),
    'unescapeHtml' : require('./string/unescapeHtml'),
    'unescapeUnicode' : require('./string/unescapeUnicode'),
    'unhyphenate' : require('./string/unhyphenate'),
    'upperCase' : require('./string/upperCase')
};



},{"./string/WHITE_SPACES":216,"./string/camelCase":217,"./string/contains":218,"./string/crop":219,"./string/endsWith":220,"./string/escapeHtml":221,"./string/escapeRegExp":222,"./string/escapeUnicode":223,"./string/hyphenate":224,"./string/insert":225,"./string/interpolate":226,"./string/lowerCase":227,"./string/lpad":228,"./string/ltrim":229,"./string/makePath":230,"./string/normalizeLineBreaks":231,"./string/pascalCase":232,"./string/properCase":233,"./string/removeNonASCII":234,"./string/removeNonWord":235,"./string/repeat":236,"./string/replace":237,"./string/replaceAccents":238,"./string/rpad":239,"./string/rtrim":240,"./string/sentenceCase":241,"./string/slugify":242,"./string/startsWith":243,"./string/stripHtmlTags":244,"./string/trim":245,"./string/truncate":246,"./string/typecast":247,"./string/unCamelCase":248,"./string/underscore":249,"./string/unescapeHtml":250,"./string/unescapeUnicode":251,"./string/unhyphenate":252,"./string/upperCase":253}],216:[function(require,module,exports){

    /**
     * Contains all Unicode white-spaces. Taken from
     * http://en.wikipedia.org/wiki/Whitespace_character.
     */
    module.exports = [
        ' ', '\n', '\r', '\t', '\f', '\v', '\u00A0', '\u1680', '\u180E',
        '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006',
        '\u2007', '\u2008', '\u2009', '\u200A', '\u2028', '\u2029', '\u202F',
        '\u205F', '\u3000'
    ];


},{}],217:[function(require,module,exports){
var toString = require('../lang/toString');
var replaceAccents = require('./replaceAccents');
var removeNonWord = require('./removeNonWord');
var upperCase = require('./upperCase');
var lowerCase = require('./lowerCase');
    /**
    * Convert string to camelCase text.
    */
    function camelCase(str){
        str = toString(str);
        str = replaceAccents(str);
        str = removeNonWord(str)
            .replace(/[\-_]/g, ' ') //convert all hyphens and underscores to spaces
            .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
            .replace(/\s+/g, '') //remove spaces
            .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase
        return str;
    }
    module.exports = camelCase;


},{"../lang/toString":129,"./lowerCase":227,"./removeNonWord":235,"./replaceAccents":238,"./upperCase":253}],218:[function(require,module,exports){
var toString = require('../lang/toString');

    /**
     * Searches for a given substring
     */
    function contains(str, substring, fromIndex){
        str = toString(str);
        substring = toString(substring);
        return str.indexOf(substring, fromIndex) !== -1;
    }

    module.exports = contains;



},{"../lang/toString":129}],219:[function(require,module,exports){
var toString = require('../lang/toString');
var truncate = require('./truncate');
    /**
     * Truncate string at full words.
     */
     function crop(str, maxChars, append) {
         str = toString(str);
         return truncate(str, maxChars, append, true);
     }

     module.exports = crop;


},{"../lang/toString":129,"./truncate":246}],220:[function(require,module,exports){
var toString = require('../lang/toString');
    /**
     * Checks if string ends with specified suffix.
     */
    function endsWith(str, suffix) {
        str = toString(str);
        suffix = toString(suffix);

        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    module.exports = endsWith;


},{"../lang/toString":129}],221:[function(require,module,exports){
var toString = require('../lang/toString');

    /**
     * Escapes a string for insertion into HTML.
     */
    function escapeHtml(str){
        str = toString(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;');
        return str;
    }

    module.exports = escapeHtml;



},{"../lang/toString":129}],222:[function(require,module,exports){
var toString = require('../lang/toString');

    /**
     * Escape RegExp string chars.
     */
    function escapeRegExp(str) {
        return toString(str).replace(/\W/g,'\\$&');
    }

    module.exports = escapeRegExp;



},{"../lang/toString":129}],223:[function(require,module,exports){
var toString = require('../lang/toString');

    /**
     * Escape string into unicode sequences
     */
    function escapeUnicode(str, shouldEscapePrintable){
        str = toString(str);
        return str.replace(/[\s\S]/g, function(ch){
            // skip printable ASCII chars if we should not escape them
            if (!shouldEscapePrintable && (/[\x20-\x7E]/).test(ch)) {
                return ch;
            }
            // we use "000" and slice(-4) for brevity, need to pad zeros,
            // unicode escape always have 4 chars after "\u"
            return '\\u'+ ('000'+ ch.charCodeAt(0).toString(16)).slice(-4);
        });
    }

    module.exports = escapeUnicode;



},{"../lang/toString":129}],224:[function(require,module,exports){
var toString = require('../lang/toString');
var slugify = require('./slugify');
var unCamelCase = require('./unCamelCase');
    /**
     * Replaces spaces with hyphens, split camelCase text, remove non-word chars, remove accents and convert to lower case.
     */
    function hyphenate(str){
        str = toString(str);
        str = unCamelCase(str);
        return slugify(str, "-");
    }

    module.exports = hyphenate;


},{"../lang/toString":129,"./slugify":242,"./unCamelCase":248}],225:[function(require,module,exports){
var clamp = require('../math/clamp');
var toString = require('../lang/toString');

    /**
     * Inserts a string at a given index.
     */
    function insert(string, index, partial){
        string = toString(string);

        if (index < 0) {
            index = string.length + index;
        }

        index = clamp(index, 0, string.length);

        return string.substr(0, index) + partial + string.substr(index);
    }

    module.exports = insert;



},{"../lang/toString":129,"../math/clamp":132}],226:[function(require,module,exports){
var toString = require('../lang/toString');
var get = require('../object/get');

    var stache = /\{\{([^\}]+)\}\}/g; //mustache-like

    /**
     * String interpolation
     */
    function interpolate(template, replacements, syntax){
        template = toString(template);
        var replaceFn = function(match, prop){
            return toString( get(replacements, prop) );
        };
        return template.replace(syntax || stache, replaceFn);
    }

    module.exports = interpolate;



},{"../lang/toString":129,"../object/get":174}],227:[function(require,module,exports){
var toString = require('../lang/toString');
    /**
     * "Safer" String.toLowerCase()
     */
    function lowerCase(str){
        str = toString(str);
        return str.toLowerCase();
    }

    module.exports = lowerCase;


},{"../lang/toString":129}],228:[function(require,module,exports){
var toString = require('../lang/toString');
var repeat = require('./repeat');

    /**
     * Pad string with `char` if its' length is smaller than `minLen`
     */
    function lpad(str, minLen, ch) {
        str = toString(str);
        ch = ch || ' ';

        return (str.length < minLen) ?
            repeat(ch, minLen - str.length) + str : str;
    }

    module.exports = lpad;



},{"../lang/toString":129,"./repeat":236}],229:[function(require,module,exports){
var toString = require('../lang/toString');
var WHITE_SPACES = require('./WHITE_SPACES');
    /**
     * Remove chars from beginning of string.
     */
    function ltrim(str, chars) {
        str = toString(str);
        chars = chars || WHITE_SPACES;

        var start = 0,
            len = str.length,
            charLen = chars.length,
            found = true,
            i, c;

        while (found && start < len) {
            found = false;
            i = -1;
            c = str.charAt(start);

            while (++i < charLen) {
                if (c === chars[i]) {
                    found = true;
                    start++;
                    break;
                }
            }
        }

        return (start >= len) ? '' : str.substr(start, len);
    }

    module.exports = ltrim;


},{"../lang/toString":129,"./WHITE_SPACES":216}],230:[function(require,module,exports){
var join = require('../array/join');
var slice = require('../array/slice');

    /**
     * Group arguments as path segments, if any of the args is `null` or an
     * empty string it will be ignored from resulting path.
     */
    function makePath(var_args){
        var result = join(slice(arguments), '/');
        // need to disconsider duplicate '/' after protocol (eg: 'http://')
        return result.replace(/([^:\/]|^)\/{2,}/g, '$1/');
    }

    module.exports = makePath;


},{"../array/join":23,"../array/slice":38}],231:[function(require,module,exports){
var toString = require('../lang/toString');

    /**
     * Convert line-breaks from DOS/MAC to a single standard (UNIX by default)
     */
    function normalizeLineBreaks(str, lineEnd) {
        str = toString(str);
        lineEnd = lineEnd || '\n';

        return str
            .replace(/\r\n/g, lineEnd) // DOS
            .replace(/\r/g, lineEnd)   // Mac
            .replace(/\n/g, lineEnd);  // Unix
    }

    module.exports = normalizeLineBreaks;



},{"../lang/toString":129}],232:[function(require,module,exports){
var toString = require('../lang/toString');
var camelCase = require('./camelCase');
var upperCase = require('./upperCase');
    /**
     * camelCase + UPPERCASE first char
     */
    function pascalCase(str){
        str = toString(str);
        return camelCase(str).replace(/^[a-z]/, upperCase);
    }

    module.exports = pascalCase;


},{"../lang/toString":129,"./camelCase":217,"./upperCase":253}],233:[function(require,module,exports){
var toString = require('../lang/toString');
var lowerCase = require('./lowerCase');
var upperCase = require('./upperCase');
    /**
     * UPPERCASE first char of each word.
     */
    function properCase(str){
        str = toString(str);
        return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
    }

    module.exports = properCase;


},{"../lang/toString":129,"./lowerCase":227,"./upperCase":253}],234:[function(require,module,exports){
var toString = require('../lang/toString');
    /**
     * Remove non-printable ASCII chars
     */
    function removeNonASCII(str){
        str = toString(str);

        // Matches non-printable ASCII chars -
        // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
        return str.replace(/[^\x20-\x7E]/g, '');
    }

    module.exports = removeNonASCII;


},{"../lang/toString":129}],235:[function(require,module,exports){
var toString = require('../lang/toString');
    // This pattern is generated by the _build/pattern-removeNonWord.js script
    var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;

    /**
     * Remove non-word chars.
     */
    function removeNonWord(str){
        str = toString(str);
        return str.replace(PATTERN, '');
    }

    module.exports = removeNonWord;


},{"../lang/toString":129}],236:[function(require,module,exports){
var toString = require('../lang/toString');
var toInt = require('../number/toInt');

    /**
     * Repeat string n times
     */
     function repeat(str, n){
         var result = '';
         str = toString(str);
         n = toInt(n);
        if (n < 1) {
            return '';
        }
        while (n > 0) {
            if (n % 2) {
                result += str;
            }
            n = Math.floor(n / 2);
            str += str;
        }
        return result;
     }

     module.exports = repeat;



},{"../lang/toString":129,"../number/toInt":157}],237:[function(require,module,exports){
var toString = require('../lang/toString');
var toArray = require('../lang/toArray');

    /**
     * Replace string(s) with the replacement(s) in the source.
     */
    function replace(str, search, replacements) {
        str = toString(str);
        search = toArray(search);
        replacements = toArray(replacements);

        var searchLength = search.length,
            replacementsLength = replacements.length;

        if (replacementsLength !== 1 && searchLength !== replacementsLength) {
            throw new Error('Unequal number of searches and replacements');
        }

        var i = -1;
        while (++i < searchLength) {
            // Use the first replacement for all searches if only one
            // replacement is provided
            str = str.replace(
                search[i],
                replacements[(replacementsLength === 1) ? 0 : i]);
        }

        return str;
    }

    module.exports = replace;



},{"../lang/toArray":127,"../lang/toString":129}],238:[function(require,module,exports){
var toString = require('../lang/toString');
    /**
    * Replaces all accented chars with regular ones
    */
    function replaceAccents(str){
        str = toString(str);

        // verifies if the String has accents and replace them
        if (str.search(/[\xC0-\xFF]/g) > -1) {
            str = str
                    .replace(/[\xC0-\xC5]/g, "A")
                    .replace(/[\xC6]/g, "AE")
                    .replace(/[\xC7]/g, "C")
                    .replace(/[\xC8-\xCB]/g, "E")
                    .replace(/[\xCC-\xCF]/g, "I")
                    .replace(/[\xD0]/g, "D")
                    .replace(/[\xD1]/g, "N")
                    .replace(/[\xD2-\xD6\xD8]/g, "O")
                    .replace(/[\xD9-\xDC]/g, "U")
                    .replace(/[\xDD]/g, "Y")
                    .replace(/[\xDE]/g, "P")
                    .replace(/[\xE0-\xE5]/g, "a")
                    .replace(/[\xE6]/g, "ae")
                    .replace(/[\xE7]/g, "c")
                    .replace(/[\xE8-\xEB]/g, "e")
                    .replace(/[\xEC-\xEF]/g, "i")
                    .replace(/[\xF1]/g, "n")
                    .replace(/[\xF2-\xF6\xF8]/g, "o")
                    .replace(/[\xF9-\xFC]/g, "u")
                    .replace(/[\xFE]/g, "p")
                    .replace(/[\xFD\xFF]/g, "y");
        }
        return str;
    }
    module.exports = replaceAccents;


},{"../lang/toString":129}],239:[function(require,module,exports){
var toString = require('../lang/toString');
var repeat = require('./repeat');

    /**
     * Pad string with `char` if its' length is smaller than `minLen`
     */
    function rpad(str, minLen, ch) {
        str = toString(str);
        ch = ch || ' ';
        return (str.length < minLen)? str + repeat(ch, minLen - str.length) : str;
    }

    module.exports = rpad;



},{"../lang/toString":129,"./repeat":236}],240:[function(require,module,exports){
var toString = require('../lang/toString');
var WHITE_SPACES = require('./WHITE_SPACES');
    /**
     * Remove chars from end of string.
     */
    function rtrim(str, chars) {
        str = toString(str);
        chars = chars || WHITE_SPACES;

        var end = str.length - 1,
            charLen = chars.length,
            found = true,
            i, c;

        while (found && end >= 0) {
            found = false;
            i = -1;
            c = str.charAt(end);

            while (++i < charLen) {
                if (c === chars[i]) {
                    found = true;
                    end--;
                    break;
                }
            }
        }

        return (end >= 0) ? str.substring(0, end + 1) : '';
    }

    module.exports = rtrim;


},{"../lang/toString":129,"./WHITE_SPACES":216}],241:[function(require,module,exports){
var toString = require('../lang/toString');
var lowerCase = require('./lowerCase');
var upperCase = require('./upperCase');
    /**
     * UPPERCASE first char of each sentence and lowercase other chars.
     */
    function sentenceCase(str){
        str = toString(str);

        // Replace first char of each sentence (new line or after '.\s+') to
        // UPPERCASE
        return lowerCase(str).replace(/(^\w)|\.\s+(\w)/gm, upperCase);
    }
    module.exports = sentenceCase;


},{"../lang/toString":129,"./lowerCase":227,"./upperCase":253}],242:[function(require,module,exports){
var toString = require('../lang/toString');
var replaceAccents = require('./replaceAccents');
var removeNonWord = require('./removeNonWord');
var trim = require('./trim');
    /**
     * Convert to lower case, remove accents, remove non-word chars and
     * replace spaces with the specified delimeter.
     * Does not split camelCase text.
     */
    function slugify(str, delimeter){
        str = toString(str);

        if (delimeter == null) {
            delimeter = "-";
        }
        str = replaceAccents(str);
        str = removeNonWord(str);
        str = trim(str) //should come after removeNonWord
                .replace(/ +/g, delimeter) //replace spaces with delimeter
                .toLowerCase();
        return str;
    }
    module.exports = slugify;


},{"../lang/toString":129,"./removeNonWord":235,"./replaceAccents":238,"./trim":245}],243:[function(require,module,exports){
var toString = require('../lang/toString');
    /**
     * Checks if string starts with specified prefix.
     */
    function startsWith(str, prefix) {
        str = toString(str);
        prefix = toString(prefix);

        return str.indexOf(prefix) === 0;
    }

    module.exports = startsWith;


},{"../lang/toString":129}],244:[function(require,module,exports){
var toString = require('../lang/toString');
    /**
     * Remove HTML tags from string.
     */
    function stripHtmlTags(str){
        str = toString(str);

        return str.replace(/<[^>]*>/g, '');
    }
    module.exports = stripHtmlTags;


},{"../lang/toString":129}],245:[function(require,module,exports){
var toString = require('../lang/toString');
var WHITE_SPACES = require('./WHITE_SPACES');
var ltrim = require('./ltrim');
var rtrim = require('./rtrim');
    /**
     * Remove white-spaces from beginning and end of string.
     */
    function trim(str, chars) {
        str = toString(str);
        chars = chars || WHITE_SPACES;
        return ltrim(rtrim(str, chars), chars);
    }

    module.exports = trim;


},{"../lang/toString":129,"./WHITE_SPACES":216,"./ltrim":229,"./rtrim":240}],246:[function(require,module,exports){
var toString = require('../lang/toString');
var trim = require('./trim');
    /**
     * Limit number of chars.
     */
    function truncate(str, maxChars, append, onlyFullWords){
        str = toString(str);
        append = append || '...';
        maxChars = onlyFullWords? maxChars + 1 : maxChars;

        str = trim(str);
        if(str.length <= maxChars){
            return str;
        }
        str = str.substr(0, maxChars - append.length);
        //crop at last space or remove trailing whitespace
        str = onlyFullWords? str.substr(0, str.lastIndexOf(' ')) : trim(str);
        return str + append;
    }
    module.exports = truncate;


},{"../lang/toString":129,"./trim":245}],247:[function(require,module,exports){


    var UNDEF;

    /**
     * Parses string and convert it into a native value.
     */
    function typecast(val) {
        var r;
        if ( val === null || val === 'null' ) {
            r = null;
        } else if ( val === 'true' ) {
            r = true;
        } else if ( val === 'false' ) {
            r = false;
        } else if ( val === UNDEF || val === 'undefined' ) {
            r = UNDEF;
        } else if ( val === '' || isNaN(val) ) {
            //isNaN('') returns false
            r = val;
        } else {
            //parseFloat(null || '') returns NaN
            r = parseFloat(val);
        }
        return r;
    }

    module.exports = typecast;


},{}],248:[function(require,module,exports){
var toString = require('../lang/toString');

    var CAMEL_CASE_BORDER = /([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g;

    /**
     * Add space between camelCase text.
     */
    function unCamelCase(str, delimiter){
        if (delimiter == null) {
            delimiter = ' ';
        }

        function join(str, c1, c2) {
            return c1 + delimiter + c2;
        }

        str = toString(str);
        str = str.replace(CAMEL_CASE_BORDER, join);
        str = str.toLowerCase(); //add space between camelCase text
        return str;
    }
    module.exports = unCamelCase;


},{"../lang/toString":129}],249:[function(require,module,exports){
var toString = require('../lang/toString');
var slugify = require('./slugify');
var unCamelCase = require('./unCamelCase');
    /**
     * Replaces spaces with underscores, split camelCase text, remove non-word chars, remove accents and convert to lower case.
     */
    function underscore(str){
        str = toString(str);
        str = unCamelCase(str);
        return slugify(str, "_");
    }
    module.exports = underscore;


},{"../lang/toString":129,"./slugify":242,"./unCamelCase":248}],250:[function(require,module,exports){
var toString = require('../lang/toString');

    /**
     * Unescapes HTML special chars
     */
    function unescapeHtml(str){
        str = toString(str)
            .replace(/&amp;/g , '&')
            .replace(/&lt;/g  , '<')
            .replace(/&gt;/g  , '>')
            .replace(/&#0*39;/g , "'")
            .replace(/&quot;/g, '"');
        return str;
    }

    module.exports = unescapeHtml;



},{"../lang/toString":129}],251:[function(require,module,exports){
var toString = require('../lang/toString');

    /**
     * Unescape unicode char sequences
     */
    function unescapeUnicode(str){
        str = toString(str);
        return str.replace(/\\u[0-9a-f]{4}/g, function(ch){
            var code = parseInt(ch.slice(2), 16);
            return String.fromCharCode(code);
        });
    }

    module.exports = unescapeUnicode;



},{"../lang/toString":129}],252:[function(require,module,exports){
var toString = require('../lang/toString');
    /**
     * Replaces hyphens with spaces. (only hyphens between word chars)
     */
    function unhyphenate(str){
        str = toString(str);
        return str.replace(/(\w)(-)(\w)/g, '$1 $3');
    }
    module.exports = unhyphenate;


},{"../lang/toString":129}],253:[function(require,module,exports){
var toString = require('../lang/toString');
    /**
     * "Safer" String.toUpperCase()
     */
    function upperCase(str){
        str = toString(str);
        return str.toUpperCase();
    }
    module.exports = upperCase;


},{"../lang/toString":129}],254:[function(require,module,exports){


//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'convert' : require('./time/convert'),
    'now' : require('./time/now'),
    'parseMs' : require('./time/parseMs'),
    'toTimeString' : require('./time/toTimeString')
};



},{"./time/convert":255,"./time/now":256,"./time/parseMs":257,"./time/toTimeString":258}],255:[function(require,module,exports){


    /**
     * convert time into another unit
     */
    function convert(val, sourceUnitName, destinationUnitName){
        destinationUnitName = destinationUnitName || 'ms';
        return (val * getUnit(sourceUnitName)) / getUnit(destinationUnitName);
    }


    //TODO: maybe extract to a separate module
    function getUnit(unitName){
        switch(unitName){
            case 'ms':
            case 'millisecond':
                return 1;
            case 's':
            case 'second':
                 return 1000;
            case 'm':
            case 'minute':
                 return 60000;
            case 'h':
            case 'hour':
                 return 3600000;
            case 'd':
            case 'day':
                 return 86400000;
            case 'w':
            case 'week':
                 return 604800000;
            default:
                throw new Error('"'+ unitName + '" is not a valid unit');
        }
    }


    module.exports = convert;



},{}],256:[function(require,module,exports){


    /**
     * Get current time in miliseconds
     */
    function now(){
        // yes, we defer the work to another function to allow mocking it
        // during the tests
        return now.get();
    }

    now.get = (typeof Date.now === 'function')? Date.now : function(){
        return +(new Date());
    };

    module.exports = now;



},{}],257:[function(require,module,exports){
var countSteps = require('../math/countSteps');

    /**
     * Parse timestamp into an object.
     */
    function parseMs(ms){
        return {
            milliseconds : countSteps(ms, 1, 1000),
            seconds      : countSteps(ms, 1000, 60),
            minutes      : countSteps(ms, 60000, 60),
            hours        : countSteps(ms, 3600000, 24),
            days         : countSteps(ms, 86400000)
        };
    }

    module.exports = parseMs;


},{"../math/countSteps":133}],258:[function(require,module,exports){
var countSteps = require('../math/countSteps');
var pad = require('../number/pad');

    var HOUR = 3600000,
        MINUTE = 60000,
        SECOND = 1000;

    /**
     * Format timestamp into a time string.
     */
    function toTimeString(ms){
        var h = ms < HOUR   ? 0 : countSteps(ms, HOUR),
            m = ms < MINUTE ? 0 : countSteps(ms, MINUTE, 60),
            s = ms < SECOND ? 0 : countSteps(ms, SECOND, 60),
            str = '';

        str += h? h + ':' : '';
        str += pad(m, 2) + ':';
        str += pad(s, 2);

        return str;
    }
    module.exports = toTimeString;


},{"../math/countSteps":133,"../number/pad":153}]},{},[1]);
