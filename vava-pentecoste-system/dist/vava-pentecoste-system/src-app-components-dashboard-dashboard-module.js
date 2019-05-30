(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-components-dashboard-dashboard-module"],{

/***/ "./node_modules/chartist/dist/chartist.js":
/*!************************************************!*\
  !*** ./node_modules/chartist/dist/chartist.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return (root['Chartist'] = factory());
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {

/* Chartist.js 0.11.0
 * Copyright © 2017 Gion Kunz
 * Free to use under either the WTFPL license or the MIT license.
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
 */
/**
 * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
 *
 * @module Chartist.Core
 */
var Chartist = {
  version: '0.11.0'
};

(function (window, document, Chartist) {
  'use strict';

  /**
   * This object contains all namespaces used within Chartist.
   *
   * @memberof Chartist.Core
   * @type {{svg: string, xmlns: string, xhtml: string, xlink: string, ct: string}}
   */
  Chartist.namespaces = {
    svg: 'http://www.w3.org/2000/svg',
    xmlns: 'http://www.w3.org/2000/xmlns/',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xlink: 'http://www.w3.org/1999/xlink',
    ct: 'http://gionkunz.github.com/chartist-js/ct'
  };

  /**
   * Helps to simplify functional style code
   *
   * @memberof Chartist.Core
   * @param {*} n This exact value will be returned by the noop function
   * @return {*} The same value that was provided to the n parameter
   */
  Chartist.noop = function (n) {
    return n;
  };

  /**
   * Generates a-z from a number 0 to 26
   *
   * @memberof Chartist.Core
   * @param {Number} n A number from 0 to 26 that will result in a letter a-z
   * @return {String} A character from a-z based on the input number n
   */
  Chartist.alphaNumerate = function (n) {
    // Limit to a-z
    return String.fromCharCode(97 + n % 26);
  };

  /**
   * Simple recursive object extend
   *
   * @memberof Chartist.Core
   * @param {Object} target Target object where the source will be merged into
   * @param {Object...} sources This object (objects) will be merged into target and then target is returned
   * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
   */
  Chartist.extend = function (target) {
    var i, source, sourceProp;
    target = target || {};

    for (i = 1; i < arguments.length; i++) {
      source = arguments[i];
      for (var prop in source) {
        sourceProp = source[prop];
        if (typeof sourceProp === 'object' && sourceProp !== null && !(sourceProp instanceof Array)) {
          target[prop] = Chartist.extend(target[prop], sourceProp);
        } else {
          target[prop] = sourceProp;
        }
      }
    }

    return target;
  };

  /**
   * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
   *
   * @memberof Chartist.Core
   * @param {String} str
   * @param {String} subStr
   * @param {String} newSubStr
   * @return {String}
   */
  Chartist.replaceAll = function(str, subStr, newSubStr) {
    return str.replace(new RegExp(subStr, 'g'), newSubStr);
  };

  /**
   * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
   *
   * @memberof Chartist.Core
   * @param {Number} value
   * @param {String} unit
   * @return {String} Returns the passed number value with unit.
   */
  Chartist.ensureUnit = function(value, unit) {
    if(typeof value === 'number') {
      value = value + unit;
    }

    return value;
  };

  /**
   * Converts a number or string to a quantity object.
   *
   * @memberof Chartist.Core
   * @param {String|Number} input
   * @return {Object} Returns an object containing the value as number and the unit as string.
   */
  Chartist.quantity = function(input) {
    if (typeof input === 'string') {
      var match = (/^(\d+)\s*(.*)$/g).exec(input);
      return {
        value : +match[1],
        unit: match[2] || undefined
      };
    }
    return { value: input };
  };

  /**
   * This is a wrapper around document.querySelector that will return the query if it's already of type Node
   *
   * @memberof Chartist.Core
   * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
   * @return {Node}
   */
  Chartist.querySelector = function(query) {
    return query instanceof Node ? query : document.querySelector(query);
  };

  /**
   * Functional style helper to produce array with given length initialized with undefined values
   *
   * @memberof Chartist.Core
   * @param length
   * @return {Array}
   */
  Chartist.times = function(length) {
    return Array.apply(null, new Array(length));
  };

  /**
   * Sum helper to be used in reduce functions
   *
   * @memberof Chartist.Core
   * @param previous
   * @param current
   * @return {*}
   */
  Chartist.sum = function(previous, current) {
    return previous + (current ? current : 0);
  };

  /**
   * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
   *
   * @memberof Chartist.Core
   * @param {Number} factor
   * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
   */
  Chartist.mapMultiply = function(factor) {
    return function(num) {
      return num * factor;
    };
  };

  /**
   * Add helper to be used in `Array.map` for adding a addend to each value of an array.
   *
   * @memberof Chartist.Core
   * @param {Number} addend
   * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
   */
  Chartist.mapAdd = function(addend) {
    return function(num) {
      return num + addend;
    };
  };

  /**
   * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
   *
   * @memberof Chartist.Core
   * @param arr
   * @param cb
   * @return {Array}
   */
  Chartist.serialMap = function(arr, cb) {
    var result = [],
        length = Math.max.apply(null, arr.map(function(e) {
          return e.length;
        }));

    Chartist.times(length).forEach(function(e, index) {
      var args = arr.map(function(e) {
        return e[index];
      });

      result[index] = cb.apply(null, args);
    });

    return result;
  };

  /**
   * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
   *
   * @memberof Chartist.Core
   * @param {Number} value The value that should be rounded with precision
   * @param {Number} [digits] The number of digits after decimal used to do the rounding
   * @returns {number} Rounded value
   */
  Chartist.roundWithPrecision = function(value, digits) {
    var precision = Math.pow(10, digits || Chartist.precision);
    return Math.round(value * precision) / precision;
  };

  /**
   * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
   *
   * @memberof Chartist.Core
   * @type {number}
   */
  Chartist.precision = 8;

  /**
   * A map with characters to escape for strings to be safely used as attribute values.
   *
   * @memberof Chartist.Core
   * @type {Object}
   */
  Chartist.escapingMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;'
  };

  /**
   * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
   * If called with null or undefined the function will return immediately with null or undefined.
   *
   * @memberof Chartist.Core
   * @param {Number|String|Object} data
   * @return {String}
   */
  Chartist.serialize = function(data) {
    if(data === null || data === undefined) {
      return data;
    } else if(typeof data === 'number') {
      data = ''+data;
    } else if(typeof data === 'object') {
      data = JSON.stringify({data: data});
    }

    return Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
    }, data);
  };

  /**
   * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
   *
   * @memberof Chartist.Core
   * @param {String} data
   * @return {String|Number|Object}
   */
  Chartist.deserialize = function(data) {
    if(typeof data !== 'string') {
      return data;
    }

    data = Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
    }, data);

    try {
      data = JSON.parse(data);
      data = data.data !== undefined ? data.data : data;
    } catch(e) {}

    return data;
  };

  /**
   * Create or reinitialize the SVG element for the chart
   *
   * @memberof Chartist.Core
   * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
   * @param {String} width Set the width of the SVG element. Default is 100%
   * @param {String} height Set the height of the SVG element. Default is 100%
   * @param {String} className Specify a class to be added to the SVG element
   * @return {Object} The created/reinitialized SVG element
   */
  Chartist.createSvg = function (container, width, height, className) {
    var svg;

    width = width || '100%';
    height = height || '100%';

    // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
    // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/
    Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
      return svg.getAttributeNS(Chartist.namespaces.xmlns, 'ct');
    }).forEach(function removePreviousElement(svg) {
      container.removeChild(svg);
    });

    // Create svg object with width and height or use 100% as default
    svg = new Chartist.Svg('svg').attr({
      width: width,
      height: height
    }).addClass(className);

    svg._node.style.width = width;
    svg._node.style.height = height;

    // Add the DOM node to our container
    container.appendChild(svg._node);

    return svg;
  };

  /**
   * Ensures that the data object passed as second argument to the charts is present and correctly initialized.
   *
   * @param  {Object} data The data object that is passed as second argument to the charts
   * @return {Object} The normalized data object
   */
  Chartist.normalizeData = function(data, reverse, multi) {
    var labelCount;
    var output = {
      raw: data,
      normalized: {}
    };

    // Check if we should generate some labels based on existing series data
    output.normalized.series = Chartist.getDataArray({
      series: data.series || []
    }, reverse, multi);

    // If all elements of the normalized data array are arrays we're dealing with
    // multi series data and we need to find the largest series if they are un-even
    if (output.normalized.series.every(function(value) {
        return value instanceof Array;
      })) {
      // Getting the series with the the most elements
      labelCount = Math.max.apply(null, output.normalized.series.map(function(series) {
        return series.length;
      }));
    } else {
      // We're dealing with Pie data so we just take the normalized array length
      labelCount = output.normalized.series.length;
    }

    output.normalized.labels = (data.labels || []).slice();
    // Padding the labels to labelCount with empty strings
    Array.prototype.push.apply(
      output.normalized.labels,
      Chartist.times(Math.max(0, labelCount - output.normalized.labels.length)).map(function() {
        return '';
      })
    );

    if(reverse) {
      Chartist.reverseData(output.normalized);
    }

    return output;
  };

  /**
   * This function safely checks if an objects has an owned property.
   *
   * @param {Object} object The object where to check for a property
   * @param {string} property The property name
   * @returns {boolean} Returns true if the object owns the specified property
   */
  Chartist.safeHasProperty = function(object, property) {
    return object !== null &&
      typeof object === 'object' &&
      object.hasOwnProperty(property);
  };

  /**
   * Checks if a value is considered a hole in the data series.
   *
   * @param {*} value
   * @returns {boolean} True if the value is considered a data hole
   */
  Chartist.isDataHoleValue = function(value) {
    return value === null ||
      value === undefined ||
      (typeof value === 'number' && isNaN(value));
  };

  /**
   * Reverses the series, labels and series data arrays.
   *
   * @memberof Chartist.Core
   * @param data
   */
  Chartist.reverseData = function(data) {
    data.labels.reverse();
    data.series.reverse();
    for (var i = 0; i < data.series.length; i++) {
      if(typeof(data.series[i]) === 'object' && data.series[i].data !== undefined) {
        data.series[i].data.reverse();
      } else if(data.series[i] instanceof Array) {
        data.series[i].reverse();
      }
    }
  };

  /**
   * Convert data series into plain array
   *
   * @memberof Chartist.Core
   * @param {Object} data The series object that contains the data to be visualized in the chart
   * @param {Boolean} [reverse] If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
   * @param {Boolean} [multi] Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
   * @return {Array} A plain array that contains the data to be visualized in the chart
   */
  Chartist.getDataArray = function(data, reverse, multi) {
    // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
    // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
    function recursiveConvert(value) {
      if(Chartist.safeHasProperty(value, 'value')) {
        // We are dealing with value object notation so we need to recurse on value property
        return recursiveConvert(value.value);
      } else if(Chartist.safeHasProperty(value, 'data')) {
        // We are dealing with series object notation so we need to recurse on data property
        return recursiveConvert(value.data);
      } else if(value instanceof Array) {
        // Data is of type array so we need to recurse on the series
        return value.map(recursiveConvert);
      } else if(Chartist.isDataHoleValue(value)) {
        // We're dealing with a hole in the data and therefore need to return undefined
        // We're also returning undefined for multi value output
        return undefined;
      } else {
        // We need to prepare multi value output (x and y data)
        if(multi) {
          var multiValue = {};

          // Single series value arrays are assumed to specify the Y-Axis value
          // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
          // If multi is a string then it's assumed that it specified which dimension should be filled as default
          if(typeof multi === 'string') {
            multiValue[multi] = Chartist.getNumberOrUndefined(value);
          } else {
            multiValue.y = Chartist.getNumberOrUndefined(value);
          }

          multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
          multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;

          return multiValue;

        } else {
          // We can return simple data
          return Chartist.getNumberOrUndefined(value);
        }
      }
    }

    return data.series.map(recursiveConvert);
  };

  /**
   * Converts a number into a padding object.
   *
   * @memberof Chartist.Core
   * @param {Object|Number} padding
   * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
   * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
   */
  Chartist.normalizePadding = function(padding, fallback) {
    fallback = fallback || 0;

    return typeof padding === 'number' ? {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    } : {
      top: typeof padding.top === 'number' ? padding.top : fallback,
      right: typeof padding.right === 'number' ? padding.right : fallback,
      bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
      left: typeof padding.left === 'number' ? padding.left : fallback
    };
  };

  Chartist.getMetaData = function(series, index) {
    var value = series.data ? series.data[index] : series[index];
    return value ? value.meta : undefined;
  };

  /**
   * Calculate the order of magnitude for the chart scale
   *
   * @memberof Chartist.Core
   * @param {Number} value The value Range of the chart
   * @return {Number} The order of magnitude
   */
  Chartist.orderOfMagnitude = function (value) {
    return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
  };

  /**
   * Project a data length into screen coordinates (pixels)
   *
   * @memberof Chartist.Core
   * @param {Object} axisLength The svg element for the chart
   * @param {Number} length Single data value from a series array
   * @param {Object} bounds All the values to set the bounds of the chart
   * @return {Number} The projected data length in pixels
   */
  Chartist.projectLength = function (axisLength, length, bounds) {
    return length / bounds.range * axisLength;
  };

  /**
   * Get the height of the area in the chart for the data series
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @return {Number} The height of the area in the chart for the data series
   */
  Chartist.getAvailableHeight = function (svg, options) {
    return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top +  options.chartPadding.bottom) - options.axisX.offset, 0);
  };

  /**
   * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
   *
   * @memberof Chartist.Core
   * @param {Array} data The array that contains the data to be visualized in the chart
   * @param {Object} options The Object that contains the chart options
   * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
   * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
   */
  Chartist.getHighLow = function (data, options, dimension) {
    // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
    options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});

    var highLow = {
        high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
        low: options.low === undefined ? Number.MAX_VALUE : +options.low
      };
    var findHigh = options.high === undefined;
    var findLow = options.low === undefined;

    // Function to recursively walk through arrays and find highest and lowest number
    function recursiveHighLow(data) {
      if(data === undefined) {
        return undefined;
      } else if(data instanceof Array) {
        for (var i = 0; i < data.length; i++) {
          recursiveHighLow(data[i]);
        }
      } else {
        var value = dimension ? +data[dimension] : +data;

        if (findHigh && value > highLow.high) {
          highLow.high = value;
        }

        if (findLow && value < highLow.low) {
          highLow.low = value;
        }
      }
    }

    // Start to find highest and lowest number recursively
    if(findHigh || findLow) {
      recursiveHighLow(data);
    }

    // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
    // used to generate the chart. This is useful when the chart always needs to contain the position of the
    // invisible reference value in the view i.e. for bipolar scales.
    if (options.referenceValue || options.referenceValue === 0) {
      highLow.high = Math.max(options.referenceValue, highLow.high);
      highLow.low = Math.min(options.referenceValue, highLow.low);
    }

    // If high and low are the same because of misconfiguration or flat data (only the same value) we need
    // to set the high or low to 0 depending on the polarity
    if (highLow.high <= highLow.low) {
      // If both values are 0 we set high to 1
      if (highLow.low === 0) {
        highLow.high = 1;
      } else if (highLow.low < 0) {
        // If we have the same negative value for the bounds we set bounds.high to 0
        highLow.high = 0;
      } else if (highLow.high > 0) {
        // If we have the same positive value for the bounds we set bounds.low to 0
        highLow.low = 0;
      } else {
        // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
        highLow.high = 1;
        highLow.low = 0;
      }
    }

    return highLow;
  };

  /**
   * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {Boolean}
   */
  Chartist.isNumeric = function(value) {
    return value === null ? false : isFinite(value);
  };

  /**
   * Returns true on all falsey values except the numeric value 0.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {boolean}
   */
  Chartist.isFalseyButZero = function(value) {
    return !value && value !== 0;
  };

  /**
   * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {*}
   */
  Chartist.getNumberOrUndefined = function(value) {
    return Chartist.isNumeric(value) ? +value : undefined;
  };

  /**
   * Checks if provided value object is multi value (contains x or y properties)
   *
   * @memberof Chartist.Core
   * @param value
   */
  Chartist.isMultiValue = function(value) {
    return typeof value === 'object' && ('x' in value || 'y' in value);
  };

  /**
   * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
   *
   * @memberof Chartist.Core
   * @param value
   * @param dimension
   * @param defaultValue
   * @returns {*}
   */
  Chartist.getMultiValue = function(value, dimension) {
    if(Chartist.isMultiValue(value)) {
      return Chartist.getNumberOrUndefined(value[dimension || 'y']);
    } else {
      return Chartist.getNumberOrUndefined(value);
    }
  };

  /**
   * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
   *
   * @memberof Chartist.Core
   * @param {Number} num An integer number where the smallest factor should be searched for
   * @returns {Number} The smallest integer factor of the parameter num.
   */
  Chartist.rho = function(num) {
    if(num === 1) {
      return num;
    }

    function gcd(p, q) {
      if (p % q === 0) {
        return q;
      } else {
        return gcd(q, p % q);
      }
    }

    function f(x) {
      return x * x + 1;
    }

    var x1 = 2, x2 = 2, divisor;
    if (num % 2 === 0) {
      return 2;
    }

    do {
      x1 = f(x1) % num;
      x2 = f(f(x2)) % num;
      divisor = gcd(Math.abs(x1 - x2), num);
    } while (divisor === 1);

    return divisor;
  };

  /**
   * Calculate and retrieve all the bounds for the chart and return them in one array
   *
   * @memberof Chartist.Core
   * @param {Number} axisLength The length of the Axis used for
   * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
   * @param {Number} scaleMinSpace The minimum projected length a step should result in
   * @param {Boolean} onlyInteger
   * @return {Object} All the values to set the bounds of the chart
   */
  Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
    var i,
      optimizationCounter = 0,
      newMin,
      newMax,
      bounds = {
        high: highLow.high,
        low: highLow.low
      };

    bounds.valueRange = bounds.high - bounds.low;
    bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
    bounds.step = Math.pow(10, bounds.oom);
    bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
    bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
    bounds.range = bounds.max - bounds.min;
    bounds.numberOfSteps = Math.round(bounds.range / bounds.step);

    // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
    // If we are already below the scaleMinSpace value we will scale up
    var length = Chartist.projectLength(axisLength, bounds.step, bounds);
    var scaleUp = length < scaleMinSpace;
    var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0;

    // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1
    if(onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
      bounds.step = 1;
    } else if(onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
      // If step 1 was too small, we can try the smallest factor of range
      // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
      // is larger than the scaleMinSpace we should go for it.
      bounds.step = smallestFactor;
    } else {
      // Trying to divide or multiply by 2 and find the best step value
      while (true) {
        if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
          bounds.step *= 2;
        } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
          bounds.step /= 2;
          if(onlyInteger && bounds.step % 1 !== 0) {
            bounds.step *= 2;
            break;
          }
        } else {
          break;
        }

        if(optimizationCounter++ > 1000) {
          throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
        }
      }
    }

    var EPSILON = 2.221E-16;
    bounds.step = Math.max(bounds.step, EPSILON);
    function safeIncrement(value, increment) {
      // If increment is too small use *= (1+EPSILON) as a simple nextafter
      if (value === (value += increment)) {
      	value *= (1 + (increment > 0 ? EPSILON : -EPSILON));
      }
      return value;
    }

    // Narrow min and max based on new step
    newMin = bounds.min;
    newMax = bounds.max;
    while (newMin + bounds.step <= bounds.low) {
    	newMin = safeIncrement(newMin, bounds.step);
    }
    while (newMax - bounds.step >= bounds.high) {
    	newMax = safeIncrement(newMax, -bounds.step);
    }
    bounds.min = newMin;
    bounds.max = newMax;
    bounds.range = bounds.max - bounds.min;

    var values = [];
    for (i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
      var value = Chartist.roundWithPrecision(i);
      if (value !== values[values.length - 1]) {
        values.push(value);
      }
    }
    bounds.values = values;
    return bounds;
  };

  /**
   * Calculate cartesian coordinates of polar coordinates
   *
   * @memberof Chartist.Core
   * @param {Number} centerX X-axis coordinates of center point of circle segment
   * @param {Number} centerY X-axis coordinates of center point of circle segment
   * @param {Number} radius Radius of circle segment
   * @param {Number} angleInDegrees Angle of circle segment in degrees
   * @return {{x:Number, y:Number}} Coordinates of point on circumference
   */
  Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  /**
   * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
   * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
   */
  Chartist.createChartRect = function (svg, options, fallbackPadding) {
    var hasAxis = !!(options.axisX || options.axisY);
    var yAxisOffset = hasAxis ? options.axisY.offset : 0;
    var xAxisOffset = hasAxis ? options.axisX.offset : 0;
    // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0
    var width = svg.width() || Chartist.quantity(options.width).value || 0;
    var height = svg.height() || Chartist.quantity(options.height).value || 0;
    var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding);

    // If settings were to small to cope with offset (legacy) and padding, we'll adjust
    width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
    height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);

    var chartRect = {
      padding: normalizedPadding,
      width: function () {
        return this.x2 - this.x1;
      },
      height: function () {
        return this.y1 - this.y2;
      }
    };

    if(hasAxis) {
      if (options.axisX.position === 'start') {
        chartRect.y2 = normalizedPadding.top + xAxisOffset;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
      } else {
        chartRect.y2 = normalizedPadding.top;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
      }

      if (options.axisY.position === 'start') {
        chartRect.x1 = normalizedPadding.left + yAxisOffset;
        chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
      } else {
        chartRect.x1 = normalizedPadding.left;
        chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
      }
    } else {
      chartRect.x1 = normalizedPadding.left;
      chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
      chartRect.y2 = normalizedPadding.top;
      chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
    }

    return chartRect;
  };

  /**
   * Creates a grid line based on a projected value.
   *
   * @memberof Chartist.Core
   * @param position
   * @param index
   * @param axis
   * @param offset
   * @param length
   * @param group
   * @param classes
   * @param eventEmitter
   */
  Chartist.createGrid = function(position, index, axis, offset, length, group, classes, eventEmitter) {
    var positionalData = {};
    positionalData[axis.units.pos + '1'] = position;
    positionalData[axis.units.pos + '2'] = position;
    positionalData[axis.counterUnits.pos + '1'] = offset;
    positionalData[axis.counterUnits.pos + '2'] = offset + length;

    var gridElement = group.elem('line', positionalData, classes.join(' '));

    // Event for grid draw
    eventEmitter.emit('draw',
      Chartist.extend({
        type: 'grid',
        axis: axis,
        index: index,
        group: group,
        element: gridElement
      }, positionalData)
    );
  };

  /**
   * Creates a grid background rect and emits the draw event.
   *
   * @memberof Chartist.Core
   * @param gridGroup
   * @param chartRect
   * @param className
   * @param eventEmitter
   */
  Chartist.createGridBackground = function (gridGroup, chartRect, className, eventEmitter) {
    var gridBackground = gridGroup.elem('rect', {
        x: chartRect.x1,
        y: chartRect.y2,
        width: chartRect.width(),
        height: chartRect.height(),
      }, className, true);

      // Event for grid background draw
      eventEmitter.emit('draw', {
        type: 'gridBackground',
        group: gridGroup,
        element: gridBackground
      });
  };

  /**
   * Creates a label based on a projected value and an axis.
   *
   * @memberof Chartist.Core
   * @param position
   * @param length
   * @param index
   * @param labels
   * @param axis
   * @param axisOffset
   * @param labelOffset
   * @param group
   * @param classes
   * @param useForeignObject
   * @param eventEmitter
   */
  Chartist.createLabel = function(position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
    var labelElement;
    var positionalData = {};

    positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
    positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
    positionalData[axis.units.len] = length;
    positionalData[axis.counterUnits.len] = Math.max(0, axisOffset - 10);

    if(useForeignObject) {
      // We need to set width and height explicitly to px as span will not expand with width and height being
      // 100% in all browsers
      var content = document.createElement('span');
      content.className = classes.join(' ');
      content.setAttribute('xmlns', Chartist.namespaces.xhtml);
      content.innerText = labels[index];
      content.style[axis.units.len] = Math.round(positionalData[axis.units.len]) + 'px';
      content.style[axis.counterUnits.len] = Math.round(positionalData[axis.counterUnits.len]) + 'px';

      labelElement = group.foreignObject(content, Chartist.extend({
        style: 'overflow: visible;'
      }, positionalData));
    } else {
      labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
    }

    eventEmitter.emit('draw', Chartist.extend({
      type: 'label',
      axis: axis,
      index: index,
      group: group,
      element: labelElement,
      text: labels[index]
    }, positionalData));
  };

  /**
   * Helper to read series specific options from options object. It automatically falls back to the global option if
   * there is no option in the series options.
   *
   * @param {Object} series Series object
   * @param {Object} options Chartist options object
   * @param {string} key The options key that should be used to obtain the options
   * @returns {*}
   */
  Chartist.getSeriesOption = function(series, options, key) {
    if(series.name && options.series && options.series[series.name]) {
      var seriesOptions = options.series[series.name];
      return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
    } else {
      return options[key];
    }
  };

  /**
   * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
   *
   * @memberof Chartist.Core
   * @param {Object} options Options set by user
   * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
   * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
   * @return {Object} The consolidated options object from the defaults, base and matching responsive options
   */
  Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
    var baseOptions = Chartist.extend({}, options),
      currentOptions,
      mediaQueryListeners = [],
      i;

    function updateCurrentOptions(mediaEvent) {
      var previousOptions = currentOptions;
      currentOptions = Chartist.extend({}, baseOptions);

      if (responsiveOptions) {
        for (i = 0; i < responsiveOptions.length; i++) {
          var mql = window.matchMedia(responsiveOptions[i][0]);
          if (mql.matches) {
            currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
          }
        }
      }

      if(eventEmitter && mediaEvent) {
        eventEmitter.emit('optionsChanged', {
          previousOptions: previousOptions,
          currentOptions: currentOptions
        });
      }
    }

    function removeMediaQueryListeners() {
      mediaQueryListeners.forEach(function(mql) {
        mql.removeListener(updateCurrentOptions);
      });
    }

    if (!window.matchMedia) {
      throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
    } else if (responsiveOptions) {

      for (i = 0; i < responsiveOptions.length; i++) {
        var mql = window.matchMedia(responsiveOptions[i][0]);
        mql.addListener(updateCurrentOptions);
        mediaQueryListeners.push(mql);
      }
    }
    // Execute initially without an event argument so we get the correct options
    updateCurrentOptions();

    return {
      removeMediaQueryListeners: removeMediaQueryListeners,
      getCurrentOptions: function getCurrentOptions() {
        return Chartist.extend({}, currentOptions);
      }
    };
  };


  /**
   * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
   * valueData property describing the segment.
   *
   * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
   * points with undefined values are discarded.
   *
   * **Options**
   * The following options are used to determine how segments are formed
   * ```javascript
   * var options = {
   *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
   *   fillHoles: false,
   *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
   *   increasingX: false
   * };
   * ```
   *
   * @memberof Chartist.Core
   * @param {Array} pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
   * @param {Array} values List of associated point values in the form [v1, v2 .. vn]
   * @param {Object} options Options set by user
   * @return {Array} List of segments, each containing a pathCoordinates and valueData property.
   */
  Chartist.splitIntoSegments = function(pathCoordinates, valueData, options) {
    var defaultOptions = {
      increasingX: false,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    var segments = [];
    var hole = true;

    for(var i = 0; i < pathCoordinates.length; i += 2) {
      // If this value is a "hole" we set the hole flag
      if(Chartist.getMultiValue(valueData[i / 2].value) === undefined) {
      // if(valueData[i / 2].value === undefined) {
        if(!options.fillHoles) {
          hole = true;
        }
      } else {
        if(options.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i-2]) {
          // X is not increasing, so we need to make sure we start a new segment
          hole = true;
        }


        // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment
        if(hole) {
          segments.push({
            pathCoordinates: [],
            valueData: []
          });
          // As we have a valid value now, we are not in a "hole" anymore
          hole = false;
        }

        // Add to the segment pathCoordinates and valueData
        segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
        segments[segments.length - 1].valueData.push(valueData[i / 2]);
      }
    }

    return segments;
  };
}(window, document, Chartist));
;/**
 * Chartist path interpolation functions.
 *
 * @module Chartist.Interpolation
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  Chartist.Interpolation = {};

  /**
   * This interpolation function does not smooth the path and the result is only containing lines and no curves.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.none({
   *     fillHoles: false
   *   })
   * });
   *
   *
   * @memberof Chartist.Interpolation
   * @return {Function}
   */
  Chartist.Interpolation.none = function(options) {
    var defaultOptions = {
      fillHoles: false
    };
    options = Chartist.extend({}, defaultOptions, options);
    return function none(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();
      var hole = true;

      for(var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var currData = valueData[i / 2];

        if(Chartist.getMultiValue(currData.value) !== undefined) {

          if(hole) {
            path.move(currX, currY, false, currData);
          } else {
            path.line(currX, currY, false, currData);
          }

          hole = false;
        } else if(!options.fillHoles) {
          hole = true;
        }
      }

      return path;
    };
  };

  /**
   * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
   *
   * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.simple({
   *     divisor: 2,
   *     fillHoles: false
   *   })
   * });
   *
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the simple interpolation factory function.
   * @return {Function}
   */
  Chartist.Interpolation.simple = function(options) {
    var defaultOptions = {
      divisor: 2,
      fillHoles: false
    };
    options = Chartist.extend({}, defaultOptions, options);

    var d = 1 / Math.max(1, options.divisor);

    return function simple(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();
      var prevX, prevY, prevData;

      for(var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var length = (currX - prevX) * d;
        var currData = valueData[i / 2];

        if(currData.value !== undefined) {

          if(prevData === undefined) {
            path.move(currX, currY, false, currData);
          } else {
            path.curve(
              prevX + length,
              prevY,
              currX - length,
              currY,
              currX,
              currY,
              false,
              currData
            );
          }

          prevX = currX;
          prevY = currY;
          prevData = currData;
        } else if(!options.fillHoles) {
          prevX = currX = prevData = undefined;
        }
      }

      return path;
    };
  };

  /**
   * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
   *
   * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 1,
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the cardinal factory function.
   * @return {Function}
   */
  Chartist.Interpolation.cardinal = function(options) {
    var defaultOptions = {
      tension: 1,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    var t = Math.min(1, Math.max(0, options.tension)),
      c = 1 - t;

    return function cardinal(pathCoordinates, valueData) {
      // First we try to split the coordinates into segments
      // This is necessary to treat "holes" in line charts
      var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
        fillHoles: options.fillHoles
      });

      if(!segments.length) {
        // If there were no segments return 'Chartist.Interpolation.none'
        return Chartist.Interpolation.none()([]);
      } else if(segments.length > 1) {
        // If the split resulted in more that one segment we need to interpolate each segment individually and join them
        // afterwards together into a single path.
          var paths = [];
        // For each segment we will recurse the cardinal function
        segments.forEach(function(segment) {
          paths.push(cardinal(segment.pathCoordinates, segment.valueData));
        });
        // Join the segment path data into a single path and return
        return Chartist.Svg.Path.join(paths);
      } else {
        // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
        // segment
        pathCoordinates = segments[0].pathCoordinates;
        valueData = segments[0].valueData;

        // If less than two points we need to fallback to no smoothing
        if(pathCoordinates.length <= 4) {
          return Chartist.Interpolation.none()(pathCoordinates, valueData);
        }

        var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
          z;

        for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
          var p = [
            {x: +pathCoordinates[i - 2], y: +pathCoordinates[i - 1]},
            {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]},
            {x: +pathCoordinates[i + 2], y: +pathCoordinates[i + 3]},
            {x: +pathCoordinates[i + 4], y: +pathCoordinates[i + 5]}
          ];
          if (z) {
            if (!i) {
              p[0] = {x: +pathCoordinates[iLen - 2], y: +pathCoordinates[iLen - 1]};
            } else if (iLen - 4 === i) {
              p[3] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
            } else if (iLen - 2 === i) {
              p[2] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
              p[3] = {x: +pathCoordinates[2], y: +pathCoordinates[3]};
            }
          } else {
            if (iLen - 4 === i) {
              p[3] = p[2];
            } else if (!i) {
              p[0] = {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]};
            }
          }

          path.curve(
            (t * (-p[0].x + 6 * p[1].x + p[2].x) / 6) + (c * p[2].x),
            (t * (-p[0].y + 6 * p[1].y + p[2].y) / 6) + (c * p[2].y),
            (t * (p[1].x + 6 * p[2].x - p[3].x) / 6) + (c * p[2].x),
            (t * (p[1].y + 6 * p[2].y - p[3].y) / 6) + (c * p[2].y),
            p[2].x,
            p[2].y,
            false,
            valueData[(i + 2) / 2]
          );
        }

        return path;
      }
    };
  };

  /**
   * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
   *
   * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
   *
   * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.monotoneCubic({
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the monotoneCubic factory function.
   * @return {Function}
   */
  Chartist.Interpolation.monotoneCubic = function(options) {
    var defaultOptions = {
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    return function monotoneCubic(pathCoordinates, valueData) {
      // First we try to split the coordinates into segments
      // This is necessary to treat "holes" in line charts
      var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
        fillHoles: options.fillHoles,
        increasingX: true
      });

      if(!segments.length) {
        // If there were no segments return 'Chartist.Interpolation.none'
        return Chartist.Interpolation.none()([]);
      } else if(segments.length > 1) {
        // If the split resulted in more that one segment we need to interpolate each segment individually and join them
        // afterwards together into a single path.
          var paths = [];
        // For each segment we will recurse the monotoneCubic fn function
        segments.forEach(function(segment) {
          paths.push(monotoneCubic(segment.pathCoordinates, segment.valueData));
        });
        // Join the segment path data into a single path and return
        return Chartist.Svg.Path.join(paths);
      } else {
        // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
        // segment
        pathCoordinates = segments[0].pathCoordinates;
        valueData = segments[0].valueData;

        // If less than three points we need to fallback to no smoothing
        if(pathCoordinates.length <= 4) {
          return Chartist.Interpolation.none()(pathCoordinates, valueData);
        }

        var xs = [],
          ys = [],
          i,
          n = pathCoordinates.length / 2,
          ms = [],
          ds = [], dys = [], dxs = [],
          path;

        // Populate x and y coordinates into separate arrays, for readability

        for(i = 0; i < n; i++) {
          xs[i] = pathCoordinates[i * 2];
          ys[i] = pathCoordinates[i * 2 + 1];
        }

        // Calculate deltas and derivative

        for(i = 0; i < n - 1; i++) {
          dys[i] = ys[i + 1] - ys[i];
          dxs[i] = xs[i + 1] - xs[i];
          ds[i] = dys[i] / dxs[i];
        }

        // Determine desired slope (m) at each point using Fritsch-Carlson method
        // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation

        ms[0] = ds[0];
        ms[n - 1] = ds[n - 2];

        for(i = 1; i < n - 1; i++) {
          if(ds[i] === 0 || ds[i - 1] === 0 || (ds[i - 1] > 0) !== (ds[i] > 0)) {
            ms[i] = 0;
          } else {
            ms[i] = 3 * (dxs[i - 1] + dxs[i]) / (
              (2 * dxs[i] + dxs[i - 1]) / ds[i - 1] +
              (dxs[i] + 2 * dxs[i - 1]) / ds[i]);

            if(!isFinite(ms[i])) {
              ms[i] = 0;
            }
          }
        }

        // Now build a path from the slopes

        path = new Chartist.Svg.Path().move(xs[0], ys[0], false, valueData[0]);

        for(i = 0; i < n - 1; i++) {
          path.curve(
            // First control point
            xs[i] + dxs[i] / 3,
            ys[i] + ms[i] * dxs[i] / 3,
            // Second control point
            xs[i + 1] - dxs[i] / 3,
            ys[i + 1] - ms[i + 1] * dxs[i] / 3,
            // End point
            xs[i + 1],
            ys[i + 1],

            false,
            valueData[i + 1]
          );
        }

        return path;
      }
    };
  };

  /**
   * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.step({
   *     postpone: true,
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param options
   * @returns {Function}
   */
  Chartist.Interpolation.step = function(options) {
    var defaultOptions = {
      postpone: true,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    return function step(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();

      var prevX, prevY, prevData;

      for (var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var currData = valueData[i / 2];

        // If the current point is also not a hole we can draw the step lines
        if(currData.value !== undefined) {
          if(prevData === undefined) {
            path.move(currX, currY, false, currData);
          } else {
            if(options.postpone) {
              // If postponed we should draw the step line with the value of the previous value
              path.line(currX, prevY, false, prevData);
            } else {
              // If not postponed we should draw the step line with the value of the current value
              path.line(prevX, currY, false, currData);
            }
            // Line to the actual point (this should only be a Y-Axis movement
            path.line(currX, currY, false, currData);
          }

          prevX = currX;
          prevY = currY;
          prevData = currData;
        } else if(!options.fillHoles) {
          prevX = prevY = prevData = undefined;
        }
      }

      return path;
    };
  };

}(window, document, Chartist));
;/**
 * A very basic event module that helps to generate and catch events.
 *
 * @module Chartist.Event
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  Chartist.EventEmitter = function () {
    var handlers = [];

    /**
     * Add an event handler for a specific event
     *
     * @memberof Chartist.Event
     * @param {String} event The event name
     * @param {Function} handler A event handler function
     */
    function addEventHandler(event, handler) {
      handlers[event] = handlers[event] || [];
      handlers[event].push(handler);
    }

    /**
     * Remove an event handler of a specific event name or remove all event handlers for a specific event.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name where a specific or all handlers should be removed
     * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
     */
    function removeEventHandler(event, handler) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        // If handler is set we will look for a specific handler and only remove this
        if(handler) {
          handlers[event].splice(handlers[event].indexOf(handler), 1);
          if(handlers[event].length === 0) {
            delete handlers[event];
          }
        } else {
          // If no handler is specified we remove all handlers for this event
          delete handlers[event];
        }
      }
    }

    /**
     * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name that should be triggered
     * @param {*} data Arbitrary data that will be passed to the event handler callback functions
     */
    function emit(event, data) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        handlers[event].forEach(function(handler) {
          handler(data);
        });
      }

      // Emit event to star event handlers
      if(handlers['*']) {
        handlers['*'].forEach(function(starHandler) {
          starHandler(event, data);
        });
      }
    }

    return {
      addEventHandler: addEventHandler,
      removeEventHandler: removeEventHandler,
      emit: emit
    };
  };

}(window, document, Chartist));
;/**
 * This module provides some basic prototype inheritance utilities.
 *
 * @module Chartist.Class
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  function listToArray(list) {
    var arr = [];
    if (list.length) {
      for (var i = 0; i < list.length; i++) {
        arr.push(list[i]);
      }
    }
    return arr;
  }

  /**
   * Method to extend from current prototype.
   *
   * @memberof Chartist.Class
   * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
   * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
   * @return {Function} Constructor function of the new class
   *
   * @example
   * var Fruit = Class.extend({
     * color: undefined,
     *   sugar: undefined,
     *
     *   constructor: function(color, sugar) {
     *     this.color = color;
     *     this.sugar = sugar;
     *   },
     *
     *   eat: function() {
     *     this.sugar = 0;
     *     return this;
     *   }
     * });
   *
   * var Banana = Fruit.extend({
     *   length: undefined,
     *
     *   constructor: function(length, sugar) {
     *     Banana.super.constructor.call(this, 'Yellow', sugar);
     *     this.length = length;
     *   }
     * });
   *
   * var banana = new Banana(20, 40);
   * console.log('banana instanceof Fruit', banana instanceof Fruit);
   * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
   * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
   * console.log(banana.sugar);
   * console.log(banana.eat().sugar);
   * console.log(banana.color);
   */
  function extend(properties, superProtoOverride) {
    var superProto = superProtoOverride || this.prototype || Chartist.Class;
    var proto = Object.create(superProto);

    Chartist.Class.cloneDefinitions(proto, properties);

    var constr = function() {
      var fn = proto.constructor || function () {},
        instance;

      // If this is linked to the Chartist namespace the constructor was not called with new
      // To provide a fallback we will instantiate here and return the instance
      instance = this === Chartist ? Object.create(proto) : this;
      fn.apply(instance, Array.prototype.slice.call(arguments, 0));

      // If this constructor was not called with new we need to return the instance
      // This will not harm when the constructor has been called with new as the returned value is ignored
      return instance;
    };

    constr.prototype = proto;
    constr.super = superProto;
    constr.extend = this.extend;

    return constr;
  }

  // Variable argument list clones args > 0 into args[0] and retruns modified args[0]
  function cloneDefinitions() {
    var args = listToArray(arguments);
    var target = args[0];

    args.splice(1, args.length - 1).forEach(function (source) {
      Object.getOwnPropertyNames(source).forEach(function (propName) {
        // If this property already exist in target we delete it first
        delete target[propName];
        // Define the property with the descriptor from source
        Object.defineProperty(target, propName,
          Object.getOwnPropertyDescriptor(source, propName));
      });
    });

    return target;
  }

  Chartist.Class = {
    extend: extend,
    cloneDefinitions: cloneDefinitions
  };

}(window, document, Chartist));
;/**
 * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
 *
 * @module Chartist.Base
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
  // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
  // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
  // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
  // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
  // The problem is with the label offsets that can't be converted into percentage and affecting the chart container
  /**
   * Updates the chart which currently does a full reconstruction of the SVG DOM
   *
   * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
   * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
   * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
   * @memberof Chartist.Base
   */
  function update(data, options, override) {
    if(data) {
      this.data = data || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
      this.eventEmitter.emit('data', {
        type: 'update',
        data: this.data
      });
    }

    if(options) {
      this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options);

      // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
      // Otherwise we re-create the optionsProvider at this point
      if(!this.initializeTimeoutId) {
        this.optionsProvider.removeMediaQueryListeners();
        this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
      }
    }

    // Only re-created the chart if it has been initialized yet
    if(!this.initializeTimeoutId) {
      this.createChart(this.optionsProvider.getCurrentOptions());
    }

    // Return a reference to the chart object to chain up calls
    return this;
  }

  /**
   * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
   *
   * @memberof Chartist.Base
   */
  function detach() {
    // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
    // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
    if(!this.initializeTimeoutId) {
      window.removeEventListener('resize', this.resizeListener);
      this.optionsProvider.removeMediaQueryListeners();
    } else {
      window.clearTimeout(this.initializeTimeoutId);
    }

    return this;
  }

  /**
   * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event. Check the examples for supported events.
   * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
   */
  function on(event, handler) {
    this.eventEmitter.addEventHandler(event, handler);
    return this;
  }

  /**
   * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event for which a handler should be removed
   * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
   */
  function off(event, handler) {
    this.eventEmitter.removeEventHandler(event, handler);
    return this;
  }

  function initialize() {
    // Add window resize listener that re-creates the chart
    window.addEventListener('resize', this.resizeListener);

    // Obtain current options based on matching media queries (if responsive options are given)
    // This will also register a listener that is re-creating the chart based on media changes
    this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
    // Register options change listener that will trigger a chart update
    this.eventEmitter.addEventHandler('optionsChanged', function() {
      this.update();
    }.bind(this));

    // Before the first chart creation we need to register us with all plugins that are configured
    // Initialize all relevant plugins with our chart object and the plugin options specified in the config
    if(this.options.plugins) {
      this.options.plugins.forEach(function(plugin) {
        if(plugin instanceof Array) {
          plugin[0](this, plugin[1]);
        } else {
          plugin(this);
        }
      }.bind(this));
    }

    // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
    this.eventEmitter.emit('data', {
      type: 'initial',
      data: this.data
    });

    // Create the first chart
    this.createChart(this.optionsProvider.getCurrentOptions());

    // As chart is initialized from the event loop now we can reset our timeout reference
    // This is important if the chart gets initialized on the same element twice
    this.initializeTimeoutId = undefined;
  }

  /**
   * Constructor of chart base class.
   *
   * @param query
   * @param data
   * @param defaultOptions
   * @param options
   * @param responsiveOptions
   * @constructor
   */
  function Base(query, data, defaultOptions, options, responsiveOptions) {
    this.container = Chartist.querySelector(query);
    this.data = data || {};
    this.data.labels = this.data.labels || [];
    this.data.series = this.data.series || [];
    this.defaultOptions = defaultOptions;
    this.options = options;
    this.responsiveOptions = responsiveOptions;
    this.eventEmitter = Chartist.EventEmitter();
    this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
    this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');
    this.resizeListener = function resizeListener(){
      this.update();
    }.bind(this);

    if(this.container) {
      // If chartist was already initialized in this container we are detaching all event listeners first
      if(this.container.__chartist__) {
        this.container.__chartist__.detach();
      }

      this.container.__chartist__ = this;
    }

    // Using event loop for first draw to make it possible to register event listeners in the same call stack where
    // the chart was created.
    this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
  }

  // Creating the chart base class
  Chartist.Base = Chartist.Class.extend({
    constructor: Base,
    optionsProvider: undefined,
    container: undefined,
    svg: undefined,
    eventEmitter: undefined,
    createChart: function() {
      throw new Error('Base chart type can\'t be instantiated!');
    },
    update: update,
    detach: detach,
    on: on,
    off: off,
    version: Chartist.version,
    supportsForeignObject: false
  });

}(window, document, Chartist));
;/**
 * Chartist SVG module for simple SVG DOM abstraction
 *
 * @module Chartist.Svg
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
   *
   * @memberof Chartist.Svg
   * @constructor
   * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
   * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} className This class or class list will be added to the SVG element
   * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
   * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   */
  function Svg(name, attributes, className, parent, insertFirst) {
    // If Svg is getting called with an SVG element we just return the wrapper
    if(name instanceof Element) {
      this._node = name;
    } else {
      this._node = document.createElementNS(Chartist.namespaces.svg, name);

      // If this is an SVG element created then custom namespace
      if(name === 'svg') {
        this.attr({
          'xmlns:ct': Chartist.namespaces.ct
        });
      }
    }

    if(attributes) {
      this.attr(attributes);
    }

    if(className) {
      this.addClass(className);
    }

    if(parent) {
      if (insertFirst && parent._node.firstChild) {
        parent._node.insertBefore(this._node, parent._node.firstChild);
      } else {
        parent._node.appendChild(this._node);
      }
    }
  }

  /**
   * Set attributes on the current SVG element of the wrapper you're currently working on.
   *
   * @memberof Chartist.Svg
   * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
   * @param {String} [ns] If specified, the attribute will be obtained using getAttributeNs. In order to write namepsaced attributes you can use the namespace:attribute notation within the attributes object.
   * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
   */
  function attr(attributes, ns) {
    if(typeof attributes === 'string') {
      if(ns) {
        return this._node.getAttributeNS(ns, attributes);
      } else {
        return this._node.getAttribute(attributes);
      }
    }

    Object.keys(attributes).forEach(function(key) {
      // If the attribute value is undefined we can skip this one
      if(attributes[key] === undefined) {
        return;
      }

      if (key.indexOf(':') !== -1) {
        var namespacedAttribute = key.split(':');
        this._node.setAttributeNS(Chartist.namespaces[namespacedAttribute[0]], key, attributes[key]);
      } else {
        this._node.setAttribute(key, attributes[key]);
      }
    }.bind(this));

    return this;
  }

  /**
   * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
   *
   * @memberof Chartist.Svg
   * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
   * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
   */
  function elem(name, attributes, className, insertFirst) {
    return new Chartist.Svg(name, attributes, className, this, insertFirst);
  }

  /**
   * Returns the parent Chartist.SVG wrapper object
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
   */
  function parent() {
    return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
  }

  /**
   * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
   */
  function root() {
    var node = this._node;
    while(node.nodeName !== 'svg') {
      node = node.parentNode;
    }
    return new Chartist.Svg(node);
  }

  /**
   * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
   */
  function querySelector(selector) {
    var foundNode = this._node.querySelector(selector);
    return foundNode ? new Chartist.Svg(foundNode) : null;
  }

  /**
   * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
   */
  function querySelectorAll(selector) {
    var foundNodes = this._node.querySelectorAll(selector);
    return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
  }

  /**
   * Returns the underlying SVG node for the current element.
   *
   * @memberof Chartist.Svg
   * @returns {Node}
   */
  function getNode() {
    return this._node;
  }

  /**
   * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
   *
   * @memberof Chartist.Svg
   * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
   * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
   * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
   */
  function foreignObject(content, attributes, className, insertFirst) {
    // If content is string then we convert it to DOM
    // TODO: Handle case where content is not a string nor a DOM Node
    if(typeof content === 'string') {
      var container = document.createElement('div');
      container.innerHTML = content;
      content = container.firstChild;
    }

    // Adding namespace to content element
    content.setAttribute('xmlns', Chartist.namespaces.xmlns);

    // Creating the foreignObject without required extension attribute (as described here
    // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)
    var fnObj = this.elem('foreignObject', attributes, className, insertFirst);

    // Add content to foreignObjectElement
    fnObj._node.appendChild(content);

    return fnObj;
  }

  /**
   * This method adds a new text element to the current Chartist.Svg wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} t The text that should be added to the text element that is created
   * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
   */
  function text(t) {
    this._node.appendChild(document.createTextNode(t));
    return this;
  }

  /**
   * This method will clear all child nodes of the current wrapper object.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The same wrapper object that got emptied
   */
  function empty() {
    while (this._node.firstChild) {
      this._node.removeChild(this._node.firstChild);
    }

    return this;
  }

  /**
   * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The parent wrapper object of the element that got removed
   */
  function remove() {
    this._node.parentNode.removeChild(this._node);
    return this.parent();
  }

  /**
   * This method will replace the element with a new element that can be created outside of the current DOM.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
   * @return {Chartist.Svg} The wrapper of the new element
   */
  function replace(newElement) {
    this._node.parentNode.replaceChild(newElement._node, this._node);
    return newElement;
  }

  /**
   * This method will append an element to the current element as a child.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
   * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
   * @return {Chartist.Svg} The wrapper of the appended object
   */
  function append(element, insertFirst) {
    if(insertFirst && this._node.firstChild) {
      this._node.insertBefore(element._node, this._node.firstChild);
    } else {
      this._node.appendChild(element._node);
    }

    return this;
  }

  /**
   * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
   *
   * @memberof Chartist.Svg
   * @return {Array} A list of classes or an empty array if there are no classes on the current element
   */
  function classes() {
    return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
  }

  /**
   * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function addClass(names) {
    this._node.setAttribute('class',
      this.classes(this._node)
        .concat(names.trim().split(/\s+/))
        .filter(function(elem, pos, self) {
          return self.indexOf(elem) === pos;
        }).join(' ')
    );

    return this;
  }

  /**
   * Removes one or a space separated list of classes from the current element.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeClass(names) {
    var removedClasses = names.trim().split(/\s+/);

    this._node.setAttribute('class', this.classes(this._node).filter(function(name) {
      return removedClasses.indexOf(name) === -1;
    }).join(' '));

    return this;
  }

  /**
   * Removes all classes from the current element.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeAllClasses() {
    this._node.setAttribute('class', '');

    return this;
  }

  /**
   * Get element height using `getBoundingClientRect`
   *
   * @memberof Chartist.Svg
   * @return {Number} The elements height in pixels
   */
  function height() {
    return this._node.getBoundingClientRect().height;
  }

  /**
   * Get element width using `getBoundingClientRect`
   *
   * @memberof Chartist.Core
   * @return {Number} The elements width in pixels
   */
  function width() {
    return this._node.getBoundingClientRect().width;
  }

  /**
   * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
   * **An animations object could look like this:**
   * ```javascript
   * element.animate({
   *   opacity: {
   *     dur: 1000,
   *     from: 0,
   *     to: 1
   *   },
   *   x1: {
   *     dur: '1000ms',
   *     from: 100,
   *     to: 200,
   *     easing: 'easeOutQuart'
   *   },
   *   y1: {
   *     dur: '2s',
   *     from: 0,
   *     to: 100
   *   }
   * });
   * ```
   * **Automatic unit conversion**
   * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
   * **Guided mode**
   * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
   * If guided mode is enabled the following behavior is added:
   * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
   * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
   * - The animate element will be forced to use `fill="freeze"`
   * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
   * - After the animation the element attribute value will be set to the `to` value of the animation
   * - The animate element is deleted from the DOM
   *
   * @memberof Chartist.Svg
   * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
   * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
   * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
   * @return {Chartist.Svg} The current element where the animation was added
   */
  function animate(animations, guided, eventEmitter) {
    if(guided === undefined) {
      guided = true;
    }

    Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {

      function createAnimate(animationDefinition, guided) {
        var attributeProperties = {},
          animate,
          timeout,
          easing;

        // Check if an easing is specified in the definition object and delete it from the object as it will not
        // be part of the animate element attributes.
        if(animationDefinition.easing) {
          // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
          easing = animationDefinition.easing instanceof Array ?
            animationDefinition.easing :
            Chartist.Svg.Easing[animationDefinition.easing];
          delete animationDefinition.easing;
        }

        // If numeric dur or begin was provided we assume milli seconds
        animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
        animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

        if(easing) {
          animationDefinition.calcMode = 'spline';
          animationDefinition.keySplines = easing.join(' ');
          animationDefinition.keyTimes = '0;1';
        }

        // Adding "fill: freeze" if we are in guided mode and set initial attribute values
        if(guided) {
          animationDefinition.fill = 'freeze';
          // Animated property on our element should already be set to the animation from value in guided mode
          attributeProperties[attribute] = animationDefinition.from;
          this.attr(attributeProperties);

          // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
          // which needs to be in ms aside
          timeout = Chartist.quantity(animationDefinition.begin || 0).value;
          animationDefinition.begin = 'indefinite';
        }

        animate = this.elem('animate', Chartist.extend({
          attributeName: attribute
        }, animationDefinition));

        if(guided) {
          // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
          setTimeout(function() {
            // If beginElement fails we set the animated attribute to the end position and remove the animate element
            // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
            // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
            try {
              animate._node.beginElement();
            } catch(err) {
              // Set animated attribute to current animated value
              attributeProperties[attribute] = animationDefinition.to;
              this.attr(attributeProperties);
              // Remove the animate element as it's no longer required
              animate.remove();
            }
          }.bind(this), timeout);
        }

        if(eventEmitter) {
          animate._node.addEventListener('beginEvent', function handleBeginEvent() {
            eventEmitter.emit('animationBegin', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }.bind(this));
        }

        animate._node.addEventListener('endEvent', function handleEndEvent() {
          if(eventEmitter) {
            eventEmitter.emit('animationEnd', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }

          if(guided) {
            // Set animated attribute to current animated value
            attributeProperties[attribute] = animationDefinition.to;
            this.attr(attributeProperties);
            // Remove the animate element as it's no longer required
            animate.remove();
          }
        }.bind(this));
      }

      // If current attribute is an array of definition objects we create an animate for each and disable guided mode
      if(animations[attribute] instanceof Array) {
        animations[attribute].forEach(function(animationDefinition) {
          createAnimate.bind(this)(animationDefinition, false);
        }.bind(this));
      } else {
        createAnimate.bind(this)(animations[attribute], guided);
      }

    }.bind(this));

    return this;
  }

  Chartist.Svg = Chartist.Class.extend({
    constructor: Svg,
    attr: attr,
    elem: elem,
    parent: parent,
    root: root,
    querySelector: querySelector,
    querySelectorAll: querySelectorAll,
    getNode: getNode,
    foreignObject: foreignObject,
    text: text,
    empty: empty,
    remove: remove,
    replace: replace,
    append: append,
    classes: classes,
    addClass: addClass,
    removeClass: removeClass,
    removeAllClasses: removeAllClasses,
    height: height,
    width: width,
    animate: animate
  });

  /**
   * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
   *
   * @memberof Chartist.Svg
   * @param {String} feature The SVG 1.1 feature that should be checked for support.
   * @return {Boolean} True of false if the feature is supported or not
   */
  Chartist.Svg.isSupported = function(feature) {
    return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
  };

  /**
   * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
   *
   * @memberof Chartist.Svg
   */
  var easingCubicBeziers = {
    easeInSine: [0.47, 0, 0.745, 0.715],
    easeOutSine: [0.39, 0.575, 0.565, 1],
    easeInOutSine: [0.445, 0.05, 0.55, 0.95],
    easeInQuad: [0.55, 0.085, 0.68, 0.53],
    easeOutQuad: [0.25, 0.46, 0.45, 0.94],
    easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
    easeInCubic: [0.55, 0.055, 0.675, 0.19],
    easeOutCubic: [0.215, 0.61, 0.355, 1],
    easeInOutCubic: [0.645, 0.045, 0.355, 1],
    easeInQuart: [0.895, 0.03, 0.685, 0.22],
    easeOutQuart: [0.165, 0.84, 0.44, 1],
    easeInOutQuart: [0.77, 0, 0.175, 1],
    easeInQuint: [0.755, 0.05, 0.855, 0.06],
    easeOutQuint: [0.23, 1, 0.32, 1],
    easeInOutQuint: [0.86, 0, 0.07, 1],
    easeInExpo: [0.95, 0.05, 0.795, 0.035],
    easeOutExpo: [0.19, 1, 0.22, 1],
    easeInOutExpo: [1, 0, 0, 1],
    easeInCirc: [0.6, 0.04, 0.98, 0.335],
    easeOutCirc: [0.075, 0.82, 0.165, 1],
    easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
    easeInBack: [0.6, -0.28, 0.735, 0.045],
    easeOutBack: [0.175, 0.885, 0.32, 1.275],
    easeInOutBack: [0.68, -0.55, 0.265, 1.55]
  };

  Chartist.Svg.Easing = easingCubicBeziers;

  /**
   * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
   * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
   *
   * @memberof Chartist.Svg
   * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
   * @constructor
   */
  function SvgList(nodeList) {
    var list = this;

    this.svgElements = [];
    for(var i = 0; i < nodeList.length; i++) {
      this.svgElements.push(new Chartist.Svg(nodeList[i]));
    }

    // Add delegation methods for Chartist.Svg
    Object.keys(Chartist.Svg.prototype).filter(function(prototypeProperty) {
      return ['constructor',
          'parent',
          'querySelector',
          'querySelectorAll',
          'replace',
          'append',
          'classes',
          'height',
          'width'].indexOf(prototypeProperty) === -1;
    }).forEach(function(prototypeProperty) {
      list[prototypeProperty] = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        list.svgElements.forEach(function(element) {
          Chartist.Svg.prototype[prototypeProperty].apply(element, args);
        });
        return list;
      };
    });
  }

  Chartist.Svg.List = Chartist.Class.extend({
    constructor: SvgList
  });
}(window, document, Chartist));
;/**
 * Chartist SVG path module for SVG path description creation and modification.
 *
 * @module Chartist.Svg.Path
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var elementDescriptions = {
    m: ['x', 'y'],
    l: ['x', 'y'],
    c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
    a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
  };

  /**
   * Default options for newly created SVG path objects.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var defaultOptions = {
    // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
    accuracy: 3
  };

  function element(command, params, pathElements, pos, relative, data) {
    var pathElement = Chartist.extend({
      command: relative ? command.toLowerCase() : command.toUpperCase()
    }, params, data ? { data: data } : {} );

    pathElements.splice(pos, 0, pathElement);
  }

  function forEachParam(pathElements, cb) {
    pathElements.forEach(function(pathElement, pathElementIndex) {
      elementDescriptions[pathElement.command.toLowerCase()].forEach(function(paramName, paramIndex) {
        cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      });
    });
  }

  /**
   * Used to construct a new path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
   * @param {Object} options Options object that overrides the default objects. See default options for more details.
   * @constructor
   */
  function SvgPath(close, options) {
    this.pathElements = [];
    this.pos = 0;
    this.close = close;
    this.options = Chartist.extend({}, defaultOptions, options);
  }

  /**
   * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
   * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
   */
  function position(pos) {
    if(pos !== undefined) {
      this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
      return this;
    } else {
      return this.pos;
    }
  }

  /**
   * Removes elements from the path starting at the current position.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} count Number of path elements that should be removed from the current position.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function remove(count) {
    this.pathElements.splice(this.pos, count);
    return this;
  }

  /**
   * Use this function to add a new move SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the move element.
   * @param {Number} y The y coordinate for the move element.
   * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function move(x, y, relative, data) {
    element('M', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new line SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the line element.
   * @param {Number} y The y coordinate for the line element.
   * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function line(x, y, relative, data) {
    element('L', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new curve SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
   * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
   * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
   * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
   * @param {Number} x The x coordinate for the target point of the curve element.
   * @param {Number} y The y coordinate for the target point of the curve element.
   * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function curve(x1, y1, x2, y2, x, y, relative, data) {
    element('C', {
      x1: +x1,
      y1: +y1,
      x2: +x2,
      y2: +y2,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new non-bezier curve SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} rx The radius to be used for the x-axis of the arc.
   * @param {Number} ry The radius to be used for the y-axis of the arc.
   * @param {Number} xAr Defines the orientation of the arc
   * @param {Number} lAf Large arc flag
   * @param {Number} sf Sweep flag
   * @param {Number} x The x coordinate for the target point of the curve element.
   * @param {Number} y The y coordinate for the target point of the curve element.
   * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
    element('A', {
      rx: +rx,
      ry: +ry,
      xAr: +xAr,
      lAf: +lAf,
      sf: +sf,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function parse(path) {
    // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
    var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2')
      .replace(/([0-9])([A-Za-z])/g, '$1 $2')
      .split(/[\s,]+/)
      .reduce(function(result, element) {
        if(element.match(/[A-Za-z]/)) {
          result.push([]);
        }

        result[result.length - 1].push(element);
        return result;
      }, []);

    // If this is a closed path we remove the Z at the end because this is determined by the close option
    if(chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
      chunks.pop();
    }

    // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
    // For example {command: 'M', x: '10', y: '10'}
    var elements = chunks.map(function(chunk) {
        var command = chunk.shift(),
          description = elementDescriptions[command.toLowerCase()];

        return Chartist.extend({
          command: command
        }, description.reduce(function(result, paramName, index) {
          result[paramName] = +chunk[index];
          return result;
        }, {}));
      });

    // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position
    var spliceArgs = [this.pos, 0];
    Array.prototype.push.apply(spliceArgs, elements);
    Array.prototype.splice.apply(this.pathElements, spliceArgs);
    // Increase the internal position by the element count
    this.pos += elements.length;

    return this;
  }

  /**
   * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
   *
   * @memberof Chartist.Svg.Path
   * @return {String}
   */
  function stringify() {
    var accuracyMultiplier = Math.pow(10, this.options.accuracy);

    return this.pathElements.reduce(function(path, pathElement) {
        var params = elementDescriptions[pathElement.command.toLowerCase()].map(function(paramName) {
          return this.options.accuracy ?
            (Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier) :
            pathElement[paramName];
        }.bind(this));

        return path + pathElement.command + params.join(',');
      }.bind(this), '') + (this.close ? 'Z' : '');
  }

  /**
   * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function scale(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] *= paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function translate(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] += paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
   * The method signature of the callback function looks like this:
   * ```javascript
   * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
   * ```
   * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function transform(transformFnc) {
    forEachParam(this.pathElements, function(pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
      var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      if(transformed || transformed === 0) {
        pathElement[paramName] = transformed;
      }
    });
    return this;
  }

  /**
   * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
   *
   * @memberof Chartist.Svg.Path
   * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
   * @return {Chartist.Svg.Path}
   */
  function clone(close) {
    var c = new Chartist.Svg.Path(close || this.close);
    c.pos = this.pos;
    c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
      return Chartist.extend({}, pathElement);
    });
    c.options = Chartist.extend({}, this.options);
    return c;
  }

  /**
   * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
   *
   * @memberof Chartist.Svg.Path
   * @param {String} command The command you'd like to use to split the path
   * @return {Array<Chartist.Svg.Path>}
   */
  function splitByCommand(command) {
    var split = [
      new Chartist.Svg.Path()
    ];

    this.pathElements.forEach(function(pathElement) {
      if(pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
        split.push(new Chartist.Svg.Path());
      }

      split[split.length - 1].pathElements.push(pathElement);
    });

    return split;
  }

  /**
   * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
   *
   * @memberof Chartist.Svg.Path
   * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
   * @param {boolean} close If the newly created path should be a closed path
   * @param {Object} options Path options for the newly created path.
   * @return {Chartist.Svg.Path}
   */

  function join(paths, close, options) {
    var joinedPath = new Chartist.Svg.Path(close, options);
    for(var i = 0; i < paths.length; i++) {
      var path = paths[i];
      for(var j = 0; j < path.pathElements.length; j++) {
        joinedPath.pathElements.push(path.pathElements[j]);
      }
    }
    return joinedPath;
  }

  Chartist.Svg.Path = Chartist.Class.extend({
    constructor: SvgPath,
    position: position,
    remove: remove,
    move: move,
    line: line,
    curve: curve,
    arc: arc,
    scale: scale,
    translate: translate,
    transform: transform,
    parse: parse,
    stringify: stringify,
    clone: clone,
    splitByCommand: splitByCommand
  });

  Chartist.Svg.Path.elementDescriptions = elementDescriptions;
  Chartist.Svg.Path.join = join;
}(window, document, Chartist));
;/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  var axisUnits = {
    x: {
      pos: 'x',
      len: 'width',
      dir: 'horizontal',
      rectStart: 'x1',
      rectEnd: 'x2',
      rectOffset: 'y2'
    },
    y: {
      pos: 'y',
      len: 'height',
      dir: 'vertical',
      rectStart: 'y2',
      rectEnd: 'y1',
      rectOffset: 'x1'
    }
  };

  function Axis(units, chartRect, ticks, options) {
    this.units = units;
    this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
    this.chartRect = chartRect;
    this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
    this.gridOffset = chartRect[units.rectOffset];
    this.ticks = ticks;
    this.options = options;
  }

  function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
    var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
    var projectedValues = this.ticks.map(this.projectValue.bind(this));
    var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);

    projectedValues.forEach(function(projectedValue, index) {
      var labelOffset = {
        x: 0,
        y: 0
      };

      // TODO: Find better solution for solving this problem
      // Calculate how much space we have available for the label
      var labelLength;
      if(projectedValues[index + 1]) {
        // If we still have one label ahead, we can calculate the distance to the next tick / label
        labelLength = projectedValues[index + 1] - projectedValue;
      } else {
        // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
        // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
        // still be visible inside of the chart padding.
        labelLength = Math.max(this.axisLength - projectedValue, 30);
      }

      // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)
      if(Chartist.isFalseyButZero(labelValues[index]) && labelValues[index] !== '') {
        return;
      }

      // Transform to global coordinates using the chartRect
      // We also need to set the label offset for the createLabel function
      if(this.units.pos === 'x') {
        projectedValue = this.chartRect.x1 + projectedValue;
        labelOffset.x = chartOptions.axisX.labelOffset.x;

        // If the labels should be positioned in start position (top side for vertical axis) we need to set a
        // different offset as for positioned with end (bottom)
        if(chartOptions.axisX.position === 'start') {
          labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
        } else {
          labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
        }
      } else {
        projectedValue = this.chartRect.y1 - projectedValue;
        labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0);

        // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
        // different offset as for positioned with end (right side)
        if(chartOptions.axisY.position === 'start') {
          labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
        } else {
          labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
        }
      }

      if(axisOptions.showGrid) {
        Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [
          chartOptions.classNames.grid,
          chartOptions.classNames[this.units.dir]
        ], eventEmitter);
      }

      if(axisOptions.showLabel) {
        Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [
          chartOptions.classNames.label,
          chartOptions.classNames[this.units.dir],
          (axisOptions.position === 'start' ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames['end'])
        ], useForeignObject, eventEmitter);
      }
    }.bind(this));
  }

  Chartist.Axis = Chartist.Class.extend({
    constructor: Axis,
    createGridAndLabels: createGridAndLabels,
    projectValue: function(value, index, data) {
      throw new Error('Base axis can\'t be instantiated!');
    }
  });

  Chartist.Axis.units = axisUnits;

}(window, document, Chartist));
;/**
 * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
 *   high: 100,
 *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
 *   low: 0,
 *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
 *   scaleMinSpace: 20,
 *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
 *   onlyInteger: true,
 *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
 *   referenceValue: 5
 * };
 * ```
 *
 * @module Chartist.AutoScaleAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function AutoScaleAxis(axisUnit, data, chartRect, options) {
    // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
    var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
    this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
    this.range = {
      min: this.bounds.min,
      max: this.bounds.max
    };

    Chartist.AutoScaleAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      this.bounds.values,
      options);
  }

  function projectValue(value) {
    return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
  }

  Chartist.AutoScaleAxis = Chartist.Axis.extend({
    constructor: AutoScaleAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
 *   high: 100,
 *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
 *   low: 0,
 *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
 *   divisor: 4,
 *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
 *   ticks: [1, 10, 20, 30]
 * };
 * ```
 *
 * @module Chartist.FixedScaleAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function FixedScaleAxis(axisUnit, data, chartRect, options) {
    var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
    this.divisor = options.divisor || 1;
    this.ticks = options.ticks || Chartist.times(this.divisor).map(function(value, index) {
      return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
    }.bind(this));
    this.ticks.sort(function(a, b) {
      return a - b;
    });
    this.range = {
      min: highLow.low,
      max: highLow.high
    };

    Chartist.FixedScaleAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      this.ticks,
      options);

    this.stepLength = this.axisLength / this.divisor;
  }

  function projectValue(value) {
    return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
  }

  Chartist.FixedScaleAxis = Chartist.Axis.extend({
    constructor: FixedScaleAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
 *   ticks: ['One', 'Two', 'Three'],
 *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
 *   stretch: true
 * };
 * ```
 *
 * @module Chartist.StepAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function StepAxis(axisUnit, data, chartRect, options) {
    Chartist.StepAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      options.ticks,
      options);

    var calc = Math.max(1, options.ticks.length - (options.stretch ? 1 : 0));
    this.stepLength = this.axisLength / calc;
  }

  function projectValue(value, index) {
    return this.stepLength * index;
  }

  Chartist.StepAxis = Chartist.Axis.extend({
    constructor: StepAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
 *
 * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
 *
 * @module Chartist.Line
 */
/* global Chartist */
(function(window, document, Chartist){
  'use strict';

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Line
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the labels to the chart area
      offset: 30,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'end',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
      type: undefined
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the labels to the chart area
      offset: 40,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'start',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
      type: undefined,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // If the line should be drawn or not
    showLine: true,
    // If dots should be drawn or not
    showPoint: true,
    // If the line chart should draw an area
    showArea: false,
    // The base for the area chart that will be used to close the area shape (is normally 0)
    areaBase: 0,
    // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
    lineSmooth: true,
    // If the line chart should add a background fill to the .ct-grids group.
    showGridBackground: false,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 5,
      left: 10
    },
    // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
    fullWidth: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-line',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      line: 'ct-line',
      point: 'ct-point',
      area: 'ct-area',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      gridBackground: 'ct-grid-background',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal',
      start: 'ct-start',
      end: 'ct-end'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var data = Chartist.normalizeData(this.data, options.reverseData, true);

    // Create new svg object
    this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart);
    // Create groups for labels, grid and series
    var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
    var seriesGroup = this.svg.elem('g');
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    var axisX, axisY;

    if(options.axisX.type === undefined) {
      axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
        ticks: data.normalized.labels,
        stretch: options.fullWidth
      }));
    } else {
      axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
    }

    if(options.axisY.type === undefined) {
      axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
        high: Chartist.isNumeric(options.high) ? options.high : options.axisY.high,
        low: Chartist.isNumeric(options.low) ? options.low : options.axisY.low
      }));
    } else {
      axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
    }

    axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

    if (options.showGridBackground) {
      Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }

    // Draw the series
    data.raw.series.forEach(function(series, seriesIndex) {
      var seriesElement = seriesGroup.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesElement.attr({
        'ct:series-name': series.name,
        'ct:meta': Chartist.serialize(series.meta)
      });

      // Use series class from series data or if not set generate one
      seriesElement.addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      var pathCoordinates = [],
        pathData = [];

      data.normalized.series[seriesIndex].forEach(function(value, valueIndex) {
        var p = {
          x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized.series[seriesIndex]),
          y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized.series[seriesIndex])
        };
        pathCoordinates.push(p.x, p.y);
        pathData.push({
          value: value,
          valueIndex: valueIndex,
          meta: Chartist.getMetaData(series, valueIndex)
        });
      }.bind(this));

      var seriesOptions = {
        lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
        showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
        showLine: Chartist.getSeriesOption(series, options, 'showLine'),
        showArea: Chartist.getSeriesOption(series, options, 'showArea'),
        areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
      };

      var smoothing = typeof seriesOptions.lineSmooth === 'function' ?
        seriesOptions.lineSmooth : (seriesOptions.lineSmooth ? Chartist.Interpolation.monotoneCubic() : Chartist.Interpolation.none());
      // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
      // index, value and meta data
      var path = smoothing(pathCoordinates, pathData);

      // If we should show points we need to create them now to avoid secondary loop
      // Points are drawn from the pathElements returned by the interpolation function
      // Small offset for Firefox to render squares correctly
      if (seriesOptions.showPoint) {

        path.pathElements.forEach(function(pathElement) {
          var point = seriesElement.elem('line', {
            x1: pathElement.x,
            y1: pathElement.y,
            x2: pathElement.x + 0.01,
            y2: pathElement.y
          }, options.classNames.point).attr({
            'ct:value': [pathElement.data.value.x, pathElement.data.value.y].filter(Chartist.isNumeric).join(','),
            'ct:meta': Chartist.serialize(pathElement.data.meta)
          });

          this.eventEmitter.emit('draw', {
            type: 'point',
            value: pathElement.data.value,
            index: pathElement.data.valueIndex,
            meta: pathElement.data.meta,
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            group: seriesElement,
            element: point,
            x: pathElement.x,
            y: pathElement.y
          });
        }.bind(this));
      }

      if(seriesOptions.showLine) {
        var line = seriesElement.elem('path', {
          d: path.stringify()
        }, options.classNames.line, true);

        this.eventEmitter.emit('draw', {
          type: 'line',
          values: data.normalized.series[seriesIndex],
          path: path.clone(),
          chartRect: chartRect,
          index: seriesIndex,
          series: series,
          seriesIndex: seriesIndex,
          seriesMeta: series.meta,
          axisX: axisX,
          axisY: axisY,
          group: seriesElement,
          element: line
        });
      }

      // Area currently only works with axes that support a range!
      if(seriesOptions.showArea && axisY.range) {
        // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
        // the area is not drawn outside the chart area.
        var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min);

        // We project the areaBase value into screen coordinates
        var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase);

        // In order to form the area we'll first split the path by move commands so we can chunk it up into segments
        path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
          // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
          return pathSegment.pathElements.length > 1;
        }).map(function convertToArea(solidPathSegments) {
          // Receiving the filtered solid path segments we can now convert those segments into fill areas
          var firstElement = solidPathSegments.pathElements[0];
          var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1];

          // Cloning the solid path segment with closing option and removing the first move command from the clone
          // We then insert a new move that should start at the area base and draw a straight line up or down
          // at the end of the path we add an additional straight line to the projected area base value
          // As the closing option is set our path will be automatically closed
          return solidPathSegments.clone(true)
            .position(0)
            .remove(1)
            .move(firstElement.x, areaBaseProjected)
            .line(firstElement.x, firstElement.y)
            .position(solidPathSegments.pathElements.length + 1)
            .line(lastElement.x, areaBaseProjected);

        }).forEach(function createArea(areaPath) {
          // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
          // and adding the created DOM elements to the correct series group
          var area = seriesElement.elem('path', {
            d: areaPath.stringify()
          }, options.classNames.area, true);

          // Emit an event for each area that was drawn
          this.eventEmitter.emit('draw', {
            type: 'area',
            values: data.normalized.series[seriesIndex],
            path: areaPath.clone(),
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            chartRect: chartRect,
            index: seriesIndex,
            group: seriesElement,
            element: area
          });
        }.bind(this));
      }
    }.bind(this));

    this.eventEmitter.emit('created', {
      bounds: axisY.bounds,
      chartRect: chartRect,
      axisX: axisX,
      axisY: axisY,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new line chart.
   *
   * @memberof Chartist.Line
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple line chart
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // As options we currently only set a static size of 300x200 px
   * var options = {
   *   width: '300px',
   *   height: '200px'
   * };
   *
   * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
   * new Chartist.Line('.ct-chart', data, options);
   *
   * @example
   * // Use specific interpolation function with configuration from the Chartist.Interpolation module
   *
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [
   *     [1, 1, 8, 1, 7]
   *   ]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 0.2
   *   })
   * });
   *
   * @example
   * // Create a line chart with responsive options
   *
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
   * var responsiveOptions = [
   *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
   *     showPoint: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return Mon, Tue, Wed etc. on medium screens
   *         return value.slice(0, 3);
   *       }
   *     }
   *   }],
   *   ['screen and (max-width: 640px)', {
   *     showLine: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return M, T, W etc. on small screens
   *         return value[0];
   *       }
   *     }
   *   }]
   * ];
   *
   * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
   *
   */
  function Line(query, data, options, responsiveOptions) {
    Chartist.Line.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating line chart type in Chartist namespace
  Chartist.Line = Chartist.Base.extend({
    constructor: Line,
    createChart: createChart
  });

}(window, document, Chartist));
;/**
 * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
 *
 * @module Chartist.Bar
 */
/* global Chartist */
(function(window, document, Chartist){
  'use strict';

  /**
   * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Bar
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the chart drawing area to the border of the container
      offset: 30,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'end',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum width in pixel of the scale steps
      scaleMinSpace: 30,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the chart drawing area to the border of the container
      offset: 40,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'start',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
    referenceValue: 0,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 5,
      left: 10
    },
    // Specify the distance in pixel of bars in a group
    seriesBarDistance: 15,
    // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
    stackBars: false,
    // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
    // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
    stackMode: 'accumulate',
    // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
    horizontalBars: false,
    // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
    distributeSeries: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // If the bar chart should add a background fill to the .ct-grids group.
    showGridBackground: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-bar',
      horizontalBars: 'ct-horizontal-bars',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      bar: 'ct-bar',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      gridBackground: 'ct-grid-background',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal',
      start: 'ct-start',
      end: 'ct-end'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var data;
    var highLow;

    if(options.distributeSeries) {
      data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
      data.normalized.series = data.normalized.series.map(function(value) {
        return [value];
      });
    } else {
      data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
    }

    // Create new svg element
    this.svg = Chartist.createSvg(
      this.container,
      options.width,
      options.height,
      options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')
    );

    // Drawing groups in correct order
    var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
    var seriesGroup = this.svg.elem('g');
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

    if(options.stackBars && data.normalized.series.length !== 0) {

      // If stacked bars we need to calculate the high low from stacked values from each series
      var serialSums = Chartist.serialMap(data.normalized.series, function serialSums() {
        return Array.prototype.slice.call(arguments).map(function(value) {
          return value;
        }).reduce(function(prev, curr) {
          return {
            x: prev.x + (curr && curr.x) || 0,
            y: prev.y + (curr && curr.y) || 0
          };
        }, {x: 0, y: 0});
      });

      highLow = Chartist.getHighLow([serialSums], options, options.horizontalBars ? 'x' : 'y');

    } else {

      highLow = Chartist.getHighLow(data.normalized.series, options, options.horizontalBars ? 'x' : 'y');
    }

    // Overrides of high / low from settings
    highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
    highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);

    var valueAxis,
      labelAxisTicks,
      labelAxis,
      axisX,
      axisY;

    // We need to set step count based on some options combinations
    if(options.distributeSeries && options.stackBars) {
      // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
      // use only the first label for the step axis
      labelAxisTicks = data.normalized.labels.slice(0, 1);
    } else {
      // If distributed series are enabled but stacked bars aren't, we should use the series labels
      // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
      // as the bars are normalized
      labelAxisTicks = data.normalized.labels;
    }

    // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.
    if(options.horizontalBars) {
      if(options.axisX.type === undefined) {
        valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          highLow: highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          highLow: highLow,
          referenceValue: 0
        }));
      }

      if(options.axisY.type === undefined) {
        labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
      }
    } else {
      if(options.axisX.type === undefined) {
        labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
      }

      if(options.axisY.type === undefined) {
        valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          highLow: highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          highLow: highLow,
          referenceValue: 0
        }));
      }
    }

    // Projected 0 point
    var zeroPoint = options.horizontalBars ? (chartRect.x1 + valueAxis.projectValue(0)) : (chartRect.y1 - valueAxis.projectValue(0));
    // Used to track the screen coordinates of stacked bars
    var stackedBarValues = [];

    labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

    if (options.showGridBackground) {
      Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }

    // Draw the series
    data.raw.series.forEach(function(series, seriesIndex) {
      // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
      var biPol = seriesIndex - (data.raw.series.length - 1) / 2;
      // Half of the period width between vertical grid lines used to position bars
      var periodHalfLength;
      // Current series SVG element
      var seriesElement;

      // We need to set periodHalfLength based on some options combinations
      if(options.distributeSeries && !options.stackBars) {
        // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
        // which is the series count and divide by 2
        periodHalfLength = labelAxis.axisLength / data.normalized.series.length / 2;
      } else if(options.distributeSeries && options.stackBars) {
        // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
        // length by 2
        periodHalfLength = labelAxis.axisLength / 2;
      } else {
        // On regular bar charts we should just use the series length
        periodHalfLength = labelAxis.axisLength / data.normalized.series[seriesIndex].length / 2;
      }

      // Adding the series group to the series element
      seriesElement = seriesGroup.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesElement.attr({
        'ct:series-name': series.name,
        'ct:meta': Chartist.serialize(series.meta)
      });

      // Use series class from series data or if not set generate one
      seriesElement.addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      data.normalized.series[seriesIndex].forEach(function(value, valueIndex) {
        var projected,
          bar,
          previousStack,
          labelAxisValueIndex;

        // We need to set labelAxisValueIndex based on some options combinations
        if(options.distributeSeries && !options.stackBars) {
          // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
          // on the step axis for label positioning
          labelAxisValueIndex = seriesIndex;
        } else if(options.distributeSeries && options.stackBars) {
          // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
          // 0 for projection on the label step axis
          labelAxisValueIndex = 0;
        } else {
          // On regular bar charts we just use the value index to project on the label step axis
          labelAxisValueIndex = valueIndex;
        }

        // We need to transform coordinates differently based on the chart layout
        if(options.horizontalBars) {
          projected = {
            x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized.series[seriesIndex])
          };
        } else {
          projected = {
            x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized.series[seriesIndex])
          }
        }

        // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
        // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
        // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
        // add any automated positioning.
        if(labelAxis instanceof Chartist.StepAxis) {
          // Offset to center bar between grid lines, but only if the step axis is not stretched
          if(!labelAxis.options.stretch) {
            projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
          }
          // Using bi-polar offset for multiple series if no stacked bars or series distribution is used
          projected[labelAxis.units.pos] += (options.stackBars || options.distributeSeries) ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
        }

        // Enter value in stacked bar values used to remember previous screen value for stacking up bars
        previousStack = stackedBarValues[valueIndex] || zeroPoint;
        stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]);

        // Skip if value is undefined
        if(value === undefined) {
          return;
        }

        var positions = {};
        positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
        positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

        if(options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
          // Stack mode: accumulate (default)
          // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
          // We want backwards compatibility, so the expected fallback without the 'stackMode' option
          // to be the original behaviour (accumulate)
          positions[labelAxis.counterUnits.pos + '1'] = previousStack;
          positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
        } else {
          // Draw from the zero line normally
          // This is also the same code for Stack mode: overlap
          positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
          positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
        }

        // Limit x and y so that they are within the chart rect
        positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
        positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
        positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
        positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);

        var metaData = Chartist.getMetaData(series, valueIndex);

        // Create bar element
        bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
          'ct:value': [value.x, value.y].filter(Chartist.isNumeric).join(','),
          'ct:meta': Chartist.serialize(metaData)
        });

        this.eventEmitter.emit('draw', Chartist.extend({
          type: 'bar',
          value: value,
          index: valueIndex,
          meta: metaData,
          series: series,
          seriesIndex: seriesIndex,
          axisX: axisX,
          axisY: axisY,
          chartRect: chartRect,
          group: seriesElement,
          element: bar
        }, positions));
      }.bind(this));
    }.bind(this));

    this.eventEmitter.emit('created', {
      bounds: valueAxis.bounds,
      chartRect: chartRect,
      axisX: axisX,
      axisY: axisY,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new bar chart and returns API object that you can use for later changes.
   *
   * @memberof Chartist.Bar
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple bar chart
   * var data = {
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
   * new Chartist.Bar('.ct-chart', data);
   *
   * @example
   * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
   * new Chartist.Bar('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5, 6, 7],
   *   series: [
   *     [1, 3, 2, -5, -3, 1, -6],
   *     [-5, -2, -4, -1, 2, -3, 1]
   *   ]
   * }, {
   *   seriesBarDistance: 12,
   *   low: -10,
   *   high: 10
   * });
   *
   */
  function Bar(query, data, options, responsiveOptions) {
    Chartist.Bar.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating bar chart type in Chartist namespace
  Chartist.Bar = Chartist.Base.extend({
    constructor: Bar,
    createChart: createChart
  });

}(window, document, Chartist));
;/**
 * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
 *
 * @module Chartist.Pie
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Pie
   */
  var defaultOptions = {
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: 5,
    // Override the class names that are used to generate the SVG structure of the chart
    classNames: {
      chartPie: 'ct-chart-pie',
      chartDonut: 'ct-chart-donut',
      series: 'ct-series',
      slicePie: 'ct-slice-pie',
      sliceDonut: 'ct-slice-donut',
      sliceDonutSolid: 'ct-slice-donut-solid',
      label: 'ct-label'
    },
    // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
    startAngle: 0,
    // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
    total: undefined,
    // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
    donut: false,
    // If specified the donut segments will be drawn as shapes instead of strokes.
    donutSolid: false,
    // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
    // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
    donutWidth: 60,
    // If a label should be shown or not
    showLabel: true,
    // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
    labelOffset: 0,
    // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
    labelPosition: 'inside',
    // An interpolation function for the label value
    labelInterpolationFnc: Chartist.noop,
    // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
    labelDirection: 'neutral',
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // If true empty values will be ignored to avoid drawing unncessary slices and labels
    ignoreEmptyValues: false
  };

  /**
   * Determines SVG anchor position based on direction and center parameter
   *
   * @param center
   * @param label
   * @param direction
   * @return {string}
   */
  function determineAnchorPosition(center, label, direction) {
    var toTheRight = label.x > center.x;

    if(toTheRight && direction === 'explode' ||
      !toTheRight && direction === 'implode') {
      return 'start';
    } else if(toTheRight && direction === 'implode' ||
      !toTheRight && direction === 'explode') {
      return 'end';
    } else {
      return 'middle';
    }
  }

  /**
   * Creates the pie chart
   *
   * @param options
   */
  function createChart(options) {
    var data = Chartist.normalizeData(this.data);
    var seriesGroups = [],
      labelsGroup,
      chartRect,
      radius,
      labelRadius,
      totalDataSum,
      startAngle = options.startAngle;

    // Create SVG.js draw
    this.svg = Chartist.createSvg(this.container, options.width, options.height,options.donut ? options.classNames.chartDonut : options.classNames.chartPie);
    // Calculate charting rect
    chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    // Get biggest circle radius possible within chartRect
    radius = Math.min(chartRect.width() / 2, chartRect.height() / 2);
    // Calculate total of all series to get reference value or use total reference from optional options
    totalDataSum = options.total || data.normalized.series.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);

    var donutWidth = Chartist.quantity(options.donutWidth);
    if (donutWidth.unit === '%') {
      donutWidth.value *= radius / 100;
    }

    // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
    // Unfortunately this is not possible with the current SVG Spec
    // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html
    radius -= options.donut && !options.donutSolid ? donutWidth.value / 2  : 0;

    // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
    // if regular pie chart it's half of the radius
    if(options.labelPosition === 'outside' || options.donut && !options.donutSolid) {
      labelRadius = radius;
    } else if(options.labelPosition === 'center') {
      // If labelPosition is center we start with 0 and will later wait for the labelOffset
      labelRadius = 0;
    } else if(options.donutSolid) {
      labelRadius = radius - donutWidth.value / 2;
    } else {
      // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
      // slice
      labelRadius = radius / 2;
    }
    // Add the offset to the labelRadius where a negative offset means closed to the center of the chart
    labelRadius += options.labelOffset;

    // Calculate end angle based on total sum and current data value and offset with padding
    var center = {
      x: chartRect.x1 + chartRect.width() / 2,
      y: chartRect.y2 + chartRect.height() / 2
    };

    // Check if there is only one non-zero value in the series array.
    var hasSingleValInSeries = data.raw.series.filter(function(val) {
      return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
    }).length === 1;

    // Creating the series groups
    data.raw.series.forEach(function(series, index) {
      seriesGroups[index] = this.svg.elem('g', null, null);
    }.bind(this));
    //if we need to show labels we create the label group now
    if(options.showLabel) {
      labelsGroup = this.svg.elem('g', null, null);
    }

    // Draw the series
    // initialize series groups
    data.raw.series.forEach(function(series, index) {
      // If current value is zero and we are ignoring empty values then skip to next value
      if (data.normalized.series[index] === 0 && options.ignoreEmptyValues) return;

      // If the series is an object and contains a name or meta data we add a custom attribute
      seriesGroups[index].attr({
        'ct:series-name': series.name
      });

      // Use series class from series data or if not set generate one
      seriesGroups[index].addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(index))
      ].join(' '));

      // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.
      var endAngle = (totalDataSum > 0 ? startAngle + data.normalized.series[index] / totalDataSum * 360 : 0);

      // Use slight offset so there are no transparent hairline issues
      var overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));

      // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
      // with Z and use 359.99 degrees
      if(endAngle - overlappigStartAngle >= 359.99) {
        endAngle = overlappigStartAngle + 359.99;
      }

      var start = Chartist.polarToCartesian(center.x, center.y, radius, overlappigStartAngle),
        end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);

      var innerStart,
        innerEnd,
        donutSolidRadius;

      // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke
      var path = new Chartist.Svg.Path(!options.donut || options.donutSolid)
        .move(end.x, end.y)
        .arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y);

      // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie
      if(!options.donut) {
        path.line(center.x, center.y);
      } else if (options.donutSolid) {
        donutSolidRadius = radius - donutWidth.value;
        innerStart = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
        innerEnd = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, endAngle);
        path.line(innerStart.x, innerStart.y);
        path.arc(donutSolidRadius, donutSolidRadius, 0, endAngle - startAngle  > 180, 1, innerEnd.x, innerEnd.y);
      }

      // Create the SVG path
      // If this is a donut chart we add the donut class, otherwise just a regular slice
      var pathClassName = options.classNames.slicePie;
      if (options.donut) {
        pathClassName = options.classNames.sliceDonut;
        if (options.donutSolid) {
          pathClassName = options.classNames.sliceDonutSolid;
        }
      }
      var pathElement = seriesGroups[index].elem('path', {
        d: path.stringify()
      }, pathClassName);

      // Adding the pie series value to the path
      pathElement.attr({
        'ct:value': data.normalized.series[index],
        'ct:meta': Chartist.serialize(series.meta)
      });

      // If this is a donut, we add the stroke-width as style attribute
      if(options.donut && !options.donutSolid) {
        pathElement._node.style.strokeWidth = donutWidth.value + 'px';
      }

      // Fire off draw event
      this.eventEmitter.emit('draw', {
        type: 'slice',
        value: data.normalized.series[index],
        totalDataSum: totalDataSum,
        index: index,
        meta: series.meta,
        series: series,
        group: seriesGroups[index],
        element: pathElement,
        path: path.clone(),
        center: center,
        radius: radius,
        startAngle: startAngle,
        endAngle: endAngle
      });

      // If we need to show labels we need to add the label for this slice now
      if(options.showLabel) {
        var labelPosition;
        if(data.raw.series.length === 1) {
          // If we have only 1 series, we can position the label in the center of the pie
          labelPosition = {
            x: center.x,
            y: center.y
          };
        } else {
          // Position at the labelRadius distance from center and between start and end angle
          labelPosition = Chartist.polarToCartesian(
            center.x,
            center.y,
            labelRadius,
            startAngle + (endAngle - startAngle) / 2
          );
        }

        var rawValue;
        if(data.normalized.labels && !Chartist.isFalseyButZero(data.normalized.labels[index])) {
          rawValue = data.normalized.labels[index];
        } else {
          rawValue = data.normalized.series[index];
        }

        var interpolatedValue = options.labelInterpolationFnc(rawValue, index);

        if(interpolatedValue || interpolatedValue === 0) {
          var labelElement = labelsGroup.elem('text', {
            dx: labelPosition.x,
            dy: labelPosition.y,
            'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
          }, options.classNames.label).text('' + interpolatedValue);

          // Fire off draw event
          this.eventEmitter.emit('draw', {
            type: 'label',
            index: index,
            group: labelsGroup,
            element: labelElement,
            text: '' + interpolatedValue,
            x: labelPosition.x,
            y: labelPosition.y
          });
        }
      }

      // Set next startAngle to current endAngle.
      // (except for last slice)
      startAngle = endAngle;
    }.bind(this));

    this.eventEmitter.emit('created', {
      chartRect: chartRect,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new pie chart and returns an object that can be used to redraw the chart.
   *
   * @memberof Chartist.Pie
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object with a version and an update method to manually redraw the chart
   *
   * @example
   * // Simple pie chart example with four series
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * });
   *
   * @example
   * // Drawing a donut chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * }, {
   *   donut: true
   * });
   *
   * @example
   * // Using donut, startAngle and total to draw a gauge chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   donut: true,
   *   donutWidth: 20,
   *   startAngle: 270,
   *   total: 200
   * });
   *
   * @example
   * // Drawing a pie chart with padding and labels that are outside the pie
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   chartPadding: 30,
   *   labelOffset: 50,
   *   labelDirection: 'explode'
   * });
   *
   * @example
   * // Overriding the class names for individual series as well as a name and meta data.
   * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
   * // to a ct:meta attribute.
   * new Chartist.Pie('.ct-chart', {
   *   series: [{
   *     value: 20,
   *     name: 'Series 1',
   *     className: 'my-custom-class-one',
   *     meta: 'Meta One'
   *   }, {
   *     value: 10,
   *     name: 'Series 2',
   *     className: 'my-custom-class-two',
   *     meta: 'Meta Two'
   *   }, {
   *     value: 70,
   *     name: 'Series 3',
   *     className: 'my-custom-class-three',
   *     meta: 'Meta Three'
   *   }]
   * });
   */
  function Pie(query, data, options, responsiveOptions) {
    Chartist.Pie.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating pie chart type in Chartist namespace
  Chartist.Pie = Chartist.Base.extend({
    constructor: Pie,
    createChart: createChart,
    determineAnchorPosition: determineAnchorPosition
  });

}(window, document, Chartist));

return Chartist;

}));


/***/ }),

/***/ "./node_modules/ng-chartist/dist/ng-chartist.js":
/*!******************************************************!*\
  !*** ./node_modules/ng-chartist/dist/ng-chartist.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var Chartist = __webpack_require__(0);
var ChartistComponent = (function () {
    function ChartistComponent(element) {
        this.element = element.nativeElement;
    }
    ChartistComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.type || !this.data) {
            Promise.reject("Expected at least type and data.");
        }
        return this.renderChart().then(function (chart) {
            if (_this.events !== undefined) {
                _this.bindEvents(chart);
            }
            return chart;
        });
    };
    ChartistComponent.prototype.ngOnChanges = function (changes) {
        this.update(changes);
    };
    ChartistComponent.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.detach();
        }
    };
    ChartistComponent.prototype.renderChart = function () {
        var _this = this;
        var promises = [
            this.type,
            this.element,
            this.data,
            this.options,
            this.responsiveOptions
        ];
        return Promise.all(promises).then(function (values) {
            var type = values[0], args = values.slice(1);
            if (!(type in Chartist)) {
                throw new Error(type + " is not a valid chart type");
            }
            _this.chart = (_a = Chartist)[type].apply(_a, args);
            return _this.chart;
            var _a;
        });
    };
    ChartistComponent.prototype.update = function (changes) {
        if (!this.chart || 'type' in changes) {
            this.renderChart();
        }
        else {
            if (changes['data']) {
                this.data = changes['data'].currentValue;
            }
            if (changes['options']) {
                this.options = changes['options'].currentValue;
            }
            this.chart.update(this.data, this.options);
        }
    };
    ChartistComponent.prototype.bindEvents = function (chart) {
        for (var _i = 0, _a = Object.keys(this.events); _i < _a.length; _i++) {
            var event_1 = _a[_i];
            chart.on(event_1, this.events[event_1]);
        }
    };
    return ChartistComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartistComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartistComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartistComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartistComponent.prototype, "responsiveOptions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartistComponent.prototype, "events", void 0);
ChartistComponent = __decorate([
    core_1.Component({
        selector: 'x-chartist',
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ChartistComponent);
exports.ChartistComponent = ChartistComponent;
var ChartistModule = (function () {
    function ChartistModule() {
    }
    return ChartistModule;
}());
ChartistModule = __decorate([
    core_1.NgModule({
        declarations: [
            ChartistComponent
        ],
        exports: [
            ChartistComponent
        ]
    })
], ChartistModule);
exports.ChartistModule = ChartistModule;
// for angular-cli
exports.default = {
    directives: [ChartistComponent]
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=ng-chartist.js.map

/***/ }),

/***/ "./src/app/components/dashboard/analytics/analytics.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard/analytics/analytics.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Statistics cards Starts-->\r\n<div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-6 col-md-6 col-12\">\r\n        <div class=\"card bg-white\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block pt-2 pb-0\">\r\n                    <div class=\"media\">\r\n                        <div class=\"media-body text-left\">\r\n                            <h4 class=\"font-medium-5 card-title mb-0\">$2310</h4>\r\n                            <span>Analysts Payable</span>\r\n                        </div>\r\n                        <div class=\"media-right text-right\">\r\n                            <i class=\"icon-briefcase font-large-1 red\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div id=\"Widget-area-chart4\" class=\"height-150 WidgetAreaChart4 WidgetAreaChart4shadow mb-2\">\r\n                    <x-chartist class=\"\" [data]=\"WidgetAreaChart4.data\" [type]=\"WidgetAreaChart4.type\" [options]=\"WidgetAreaChart4.options\" [responsiveOptions]=\"WidgetAreaChart4.responsiveOptions\"\r\n                        [events]=\"WidgetAreaChart4.events\">\r\n                    </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-6 col-md-6 col-12\">\r\n        <div class=\"card bg-white\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block pt-2 pb-0\">\r\n                    <div class=\"media\">\r\n                        <div class=\"media-body text-left\">\r\n                            <h4 class=\"font-medium-5 card-title mb-0\">$2543</h4>\r\n                            <span>Equipment Cost</span>\r\n                        </div>\r\n                        <div class=\"media-right text-right\">\r\n                            <i class=\"icon-anchor font-large-1 purple\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div id=\"Widget-area-chart5\" class=\"height-150 WidgetAreaChart5 WidgetAreaChart5shadow mb-2\">\r\n                    <x-chartist class=\"\" [data]=\"WidgetAreaChart5.data\" [type]=\"WidgetAreaChart5.type\" [options]=\"WidgetAreaChart5.options\" [responsiveOptions]=\"WidgetAreaChart5.responsiveOptions\"\r\n                        [events]=\"WidgetAreaChart5.events\">\r\n                    </x-chartist>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-4 col-lg-6 col-md-6 col-12\">\r\n        <div class=\"card bg-white\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block pt-2 pb-0\">\r\n                    <div class=\"media\">\r\n                        <div class=\"media-body text-left\">\r\n                            <h4 class=\"font-medium-5 card-title mb-0\">$5686</h4>\r\n                            <span>Analytics Output</span>\r\n                        </div>\r\n                        <div class=\"media-right text-right\">\r\n                            <i class=\"icon-share-alt font-large-1 blue\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div id=\"Widget-area-chart6\" class=\"height-150 WidgetAreaChart6 WidgetAreaChart6shadow mb-2\">\r\n                    <x-chartist class=\"\" [data]=\"WidgetAreaChart6.data\" [type]=\"WidgetAreaChart6.type\" [options]=\"WidgetAreaChart6.options\" [responsiveOptions]=\"WidgetAreaChart6.responsiveOptions\"\r\n                        [events]=\"WidgetAreaChart6.events\">\r\n                    </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--Statistics cards Ends-->\r\n<div class=\"row\" matchHeight=\"card\">\r\n    <div class=\"col-xl-8 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title-wrap bar-warning\">\r\n                    <h4 class=\"card-title mb-0\">Sales Analysis</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div id=\"line-area6\" class=\"height-350 lineArea6 lineArea6Shadow\">\r\n                        <x-chartist [data]=\"lineArea6.data\" [type]=\"lineArea6.type\" [options]=\"lineArea6.options\" [responsiveOptions]=\"lineArea6.responsiveOptions\"\r\n                            [events]=\"lineArea6.events\">\r\n                        </x-chartist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header pb-0\">\r\n                <div class=\"card-title-wrap bar-info\">\r\n                    <h4 class=\"card-title\">Chat</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block chat-application\">\r\n                    <div class=\"chats height-300 overflow-y-scroll\">\r\n                        <div class=\"chats\">\r\n                          <div class=\"chat\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"right\" title=\"\" data-original-title=\"\">\r\n                                  <img src=\"assets/img/portrait/small/avatar-s-19.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>How can we help? We're here for you!</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat chat-left\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"left\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-15.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>Hey Jacob, Could you please help me to find it out?</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"right\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-19.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>Absolutely!</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat chat-left\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"left\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-15.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>I am looking for the best Angular admin template.</p>\r\n                                <p>It should be Bootstrap 4 compatible.</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"right\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-19.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>Convex admin template is responsive Angular 6+ bootstrap 4 admin template.</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat chat-left\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"left\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-15.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>Looks clean and fresh UI.</p>\r\n                              </div>\r\n                              <div class=\"chat-content\">\r\n                                <p>It's perfect for my next project.</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"right\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-19.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>Thanks a lot!</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat chat-left\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"left\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-15.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                                <div class=\"chat-content\">\r\n                                  <p>How can I purchase it?</p>\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"right\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-19.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>From Wrapbootstrap.</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat chat-left\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"left\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-15.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>I will purchase it for sure.</p>\r\n                              </div>\r\n                              <div class=\"chat-content\">\r\n                                <p>Thanks.</p>\r\n                              </div>              \r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"right\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-19.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>Great!!</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                    <form class=\"chat-app-input mt-4 row\">\r\n                      <fieldset class=\"form-group position-relative has-icon-left col-xl-10 col-lg-8 col-8 m-0 mb-1\">\r\n                        <div class=\"form-control-position\">\r\n                          <i class=\"icon-emoticon-smile\"></i>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" id=\"iconLeft4\" placeholder=\"Type your message\">\r\n                        <div class=\"form-control-position control-position-right\">\r\n                          <i class=\"ft-image\"></i>\r\n                        </div>\r\n                      </fieldset>\r\n                      <fieldset class=\"form-group position-relative has-icon-left col-2 m-0\">\r\n                        <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-paper-plane white\"></i> </button>\r\n                      </fieldset>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Table -->\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title-wrap bar-warning\">\r\n                    <h4 class=\"card-title\">Invoice Summary</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"table-responsive\">\r\n                        <table id=\"recent-orders\" class=\"table table-hover table-xl mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"border-top-0\">Status</th>                                \r\n                                    <th class=\"border-top-0\">Invoice#</th>\r\n                                    <th class=\"border-top-0\">Customer Name</th>\r\n                                    <th class=\"border-top-0\">Products</th>\r\n                                    <th class=\"border-top-0\">Categories</th>\r\n                                    <th class=\"border-top-0\">Shipping</th>\r\n                                    <th class=\"border-top-0\">Amount</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td class=\"text-truncate\"><i class=\"fa fa-dot-circle-o success font-medium-1 mr-1\"></i> Paid</td>\r\n                                    <td class=\"text-truncate\"><a href=\"#\">INV-001001</a></td>\r\n                                    <td class=\"text-truncate\">\r\n                                        <span class=\"avatar avatar-xs\">\r\n                                            <img class=\"box-shadow-2\" src=\"assets/img/portrait/small/avatar-s-4.jpg\" alt=\"avatar\">\r\n                                        </span>\r\n                                        <span>Elizabeth W.</span>\r\n                                    </td>\r\n                                    <td class=\"text-truncate p-1\">\r\n                                        <ul class=\"list-unstyled users-list m-0\">                                               \r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Kimberly Simmons\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-1.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Willie Torres\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-2.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Rebecca Jones\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-4.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li class=\"avatar avatar-sm\">                                            \r\n                                                <span class=\"badge badge-info\">+1 more</span>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </td>\r\n                                    <td>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-outline-danger round\">Food</button>\r\n                                    </td>\r\n                                    <td>\r\n                                        <ngb-progressbar type=\"danger\" [value]=\"25\" [striped]=\"true\" class=\"progress-bar-md bg-gradient-x-danger\"></ngb-progressbar>\r\n                                    </td>\r\n                                    <td class=\"text-truncate\">$ 1200.00</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-truncate\"><i class=\"fa fa-dot-circle-o danger font-medium-1 mr-1\"></i> Declined</td>\r\n                                    <td class=\"text-truncate\"><a href=\"#\">INV-001002</a></td>\r\n                                    <td class=\"text-truncate\">\r\n                                        <span class=\"avatar avatar-xs\">\r\n                                            <img class=\"box-shadow-2\" src=\"assets/img/portrait/small/avatar-s-5.jpg\" alt=\"avatar\">\r\n                                        </span>\r\n                                        <span>Doris R.</span>\r\n                                    </td>\r\n                                    <td class=\"text-truncate p-1\">\r\n                                        <ul class=\"list-unstyled users-list m-0\">                                               \r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Kimberly Simmons\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-5.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Willie Torres\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-6.jpg\" alt=\"Avatar\">\r\n                                            </li>                                        \r\n                                            <li class=\"avatar avatar-sm\">                                            \r\n                                                <span class=\"badge badge-info\">+2 more</span>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </td>\r\n                                    <td>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-outline-warning round\">Electronics</button>\r\n                                    </td>\r\n                                    <td>\r\n                                        <ngb-progressbar type=\"warning\" [value]=\"45\" [striped]=\"true\" class=\"progress-bar-md bg-gradient-x-warning\"></ngb-progressbar>\r\n                                    </td>\r\n                                    <td class=\"text-truncate\">$ 1850.00</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-truncate\"><i class=\"fa fa-dot-circle-o warning font-medium-1 mr-1\"></i> Pending</td>\r\n                                    <td class=\"text-truncate\"><a href=\"#\">INV-001003</a></td>\r\n                                    <td class=\"text-truncate\">\r\n                                        <span class=\"avatar avatar-xs\">\r\n                                            <img class=\"box-shadow-2\" src=\"assets/img/portrait/small/avatar-s-6.jpg\" alt=\"avatar\">\r\n                                        </span>\r\n                                        <span>Megan S.</span>\r\n                                    </td>\r\n                                    <td class=\"text-truncate p-1\">\r\n                                        <ul class=\"list-unstyled users-list m-0\">                                               \r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Kimberly Simmons\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-2.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Willie Torres\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-5.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                        </ul>\r\n                                    </td>\r\n                                    <td>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-outline-success round\">Groceries</button>\r\n                                    </td>\r\n                                    <td>\r\n                                        <ngb-progressbar type=\"success\" [value]=\"75\" [striped]=\"true\" class=\"progress-bar-md bg-gradient-x-success\"></ngb-progressbar>\r\n                                    </td>\r\n                                    <td class=\"text-truncate\">$ 3200.00</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-truncate\"><i class=\"fa fa-dot-circle-o success font-medium-1 mr-1\"></i> Paid</td>\r\n                                    <td class=\"text-truncate\"><a href=\"#\">INV-001004</a></td>\r\n                                    <td class=\"text-truncate\">\r\n                                        <span class=\"avatar avatar-xs\">\r\n                                            <img class=\"box-shadow-2\" src=\"assets/img/portrait/small/avatar-s-15.jpg\" alt=\"avatar\">\r\n                                        </span>\r\n                                        <span>Andrew D.</span>\r\n                                    </td>\r\n                                    <td class=\"text-truncate p-1\">\r\n                                        <ul class=\"list-unstyled users-list m-0\">                                               \r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Kimberly Simmons\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-6.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Willie Torres\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-1.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li class=\"avatar avatar-sm\">                                            \r\n                                                <span class=\"badge badge-info\">+1 more</span>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </td>\r\n                                    <td>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-outline-info round\">Apparels</button>\r\n                                    </td>\r\n                                    <td>\r\n                                        <ngb-progressbar type=\"info\" [value]=\"65\" [striped]=\"true\" class=\"progress-bar-md bg-gradient-x-info\"></ngb-progressbar>\r\n                                    </td>\r\n                                    <td class=\"text-truncate\">$ 4500.00</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-truncate\"><i class=\"fa fa-dot-circle-o success font-medium-1 mr-1\"></i> Paid</td>\r\n                                    <td class=\"text-truncate\"><a href=\"#\">INV-001005</a></td>\r\n                                    <td class=\"text-truncate\">\r\n                                        <span class=\"avatar avatar-xs\">\r\n                                            <img class=\"box-shadow-2\" src=\"assets/img/portrait/small/avatar-s-9.jpg\" alt=\"avatar\">\r\n                                        </span>\r\n                                        <span>Walter R.</span>\r\n                                    </td>\r\n                                    <td class=\"text-truncate p-1\">\r\n                                        <ul class=\"list-unstyled users-list m-0\">                                               \r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Kimberly Simmons\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-5.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Willie Torres\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-3.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                        </ul>\r\n                                    </td>\r\n                                    <td>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-outline-danger round\">Food</button>\r\n                                    </td>\r\n                                    <td>\r\n                                        <ngb-progressbar type=\"primary\" [value]=\"35\" [striped]=\"true\" class=\"progress-bar-md bg-gradient-x-primary\"></ngb-progressbar>\r\n                                    </td>\r\n                                    <td class=\"text-truncate\">$ 1500.00</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xl-6 col-lg-12 col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-5 col-md-12\">\r\n                    <div class=\"gradient-bg gradient-ibiza-sunset\">\r\n                        <div class=\"card-body py-5 text-center\">\r\n                            <i class=\"wi wi-day-sunny fa-spin warning font-large-4 lighten-4\"></i>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <h1 class=\"card-title mt-5 py-5 font-large-2 text-center white lighten-2\">Sunny</h1>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-7 col-md-12\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"pt-3\">\r\n                            <h2>Tuesday, 22</h2>\r\n                            <div class=\"card-title font-large-1\">April</div>\r\n                        </div>\r\n                        <div class=\"my-5 py-3\">\r\n                            <h2 class=\"danger\">40&deg; Warm</h2>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col text-center\">\r\n                                <span class=\"display-block text-uppercase\">Wed</span>\r\n                                <i class=\"wi wi-day-sunny display-block danger font-medium-2 my-3\"></i>\r\n                                <span class=\"display-block\">35&deg;</span>\r\n                            </div>\r\n                            <div class=\"col text-center\">\r\n                                <span class=\"display-block text-uppercase\">Thu</span>\r\n                                <i class=\"wi wi-day-cloudy display-block danger font-medium-2 my-3\"></i>\r\n                                <span class=\"display-block\">30&deg;</span>\r\n                            </div>\r\n                            <div class=\"col text-center\">\r\n                                <span class=\"display-block text-uppercase\">Fri</span>\r\n                                <i class=\"wi wi-day-cloudy-gusts display-block danger font-medium-2 my-3\"></i>\r\n                                <span class=\"display-block\">25&deg;</span>\r\n                            </div>\r\n                            <div class=\"col text-center\">\r\n                                <span class=\"display-block text-uppercase\">Sat</span>\r\n                                <i class=\"wi wi-day-cloudy-windy display-block danger font-medium-2 my-3\"></i>\r\n                                <span class=\"display-block\">22&deg;</span>\r\n                            </div>\r\n                            <div class=\"col text-center\">\r\n                                <span class=\"display-block text-uppercase\">Sun</span>\r\n                                <i class=\"wi wi-day-cloudy-windy display-block danger font-medium-2 my-3\"></i>\r\n                                <span class=\"display-block\">20&deg;</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-6 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header pb-0\">\r\n                <div class=\"card-title-wrap bar-primary\">\r\n                    <h4 class=\"card-title\">Statistics</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"chart-info mb-2\">\r\n                        <span class=\"text-uppercase mr-3\">\r\n                            <i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Users</span>\r\n                        <span class=\"text-uppercase\">\r\n                            <i class=\"fa fa-circle warning font-small-2 mr-1\"></i> Progress</span>\r\n                    </div>\r\n                    <div id=\"line-chart2\" class=\"height-350 lineChart2 lineChart2Shadow\">\r\n                        <x-chartist class=\"\" [data]=\"lineChart2.data\" [type]=\"lineChart2.type\" [options]=\"lineChart2.options\" [responsiveOptions]=\"lineChart2.responsiveOptions\"\r\n                            [events]=\"lineChart2.events\">\r\n                        </x-chartist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\" matchHeight=\"card\">\r\n    <div class=\"col-xl-8 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header pb-0\">\r\n                <div class=\"card-title-wrap bar-danger\">\r\n                    <h4 class=\"card-title\">User Conversion</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"chart-info mb-2\">\r\n                        <span class=\"text-uppercase mr-3\">\r\n                            <i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Users</span>\r\n                        <span class=\"text-uppercase\">\r\n                            <i class=\"fa fa-circle success font-small-2 mr-1\"></i> Products</span>\r\n                    </div>\r\n                    <div id=\"line-area-chart\" class=\"height-300 lineAreaChart lineAreaChartShadow mb-1\">\r\n                        <x-chartist class=\"\" [data]=\"lineAreaChart.data\" [type]=\"lineAreaChart.type\" [options]=\"lineAreaChart.options\" [responsiveOptions]=\"lineAreaChart.responsiveOptions\"\r\n                            [events]=\"lineAreaChart.events\">\r\n\r\n                        </x-chartist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title-wrap bar-success\">\r\n                    <h4 class=\"card-title mb-0\">Super Analysts</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"media mb-3\">\r\n                        <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-12.jpg\">\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"font-medium-1 mt-1 mb-0\">Jessie Lee</h4>\r\n                            <span class=\"font-small-3 grey mb-0\">Head of Department</span>\r\n                        </div>\r\n                        <div class=\"text-right\">\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-facebook\">\r\n                                <span class=\"fa fa-facebook\"></span>\r\n                            </a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-twitter\">\r\n                                <span class=\"fa fa-twitter\"></span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"media mb-3\">\r\n                        <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-danger height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-11.jpg\">\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"font-medium-1 mt-1 mb-0\">Jack Penne</h4>\r\n                            <span class=\"font-small-3 grey mb-0\">Head of Department</span>\r\n                        </div>\r\n                        <div class=\"text-right\">\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-facebook\">\r\n                                <span class=\"fa fa-facebook\"></span>\r\n                            </a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-twitter\">\r\n                                <span class=\"fa fa-twitter\"></span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"media mb-3\">\r\n                        <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-success height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-3.jpg\">\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"font-medium-1 mt-1 mb-0\">Russez Pinch</h4>\r\n                            <span class=\"font-small-3 grey mb-0\">Head of Department</span>\r\n                        </div>\r\n                        <div class=\"text-right\">\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-facebook\">\r\n                                <span class=\"fa fa-facebook\"></span>\r\n                            </a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-twitter\">\r\n                                <span class=\"fa fa-twitter\"></span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"media mb-3\">\r\n                        <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-warning height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-6.jpg\">\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"font-medium-1 mt-1 mb-0\">Pinz Colado</h4>\r\n                            <span class=\"font-small-3 grey mb-0\">Head of Department</span>\r\n                        </div>\r\n                        <div class=\"text-right\">\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-facebook\">\r\n                                <span class=\"fa fa-facebook\"></span>\r\n                            </a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-twitter\">\r\n                                <span class=\"fa fa-twitter\"></span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/analytics/analytics.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard/analytics/analytics.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .WidgetAreaChart4 .ct-series-a .ct-area {\n  fill-opacity: 1;\n  fill: url(\"/dashboard/analytics#wGradient4\") !important; }\n\n:host /deep/ .WidgetAreaChart4 .ct-series-a .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetAreaChart4 .ct-series-a .ct-point-circle {\n  fill: #fa394e;\n  stroke-width: 5;\n  stroke: #fff; }\n\n:host /deep/ .WidgetAreaChart4 .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .WidgetAreaChart4 .ct-target-line {\n  stroke: #fff;\n  stroke-width: 2px;\n  stroke-dasharray: 4px; }\n\n:host /deep/ .WidgetAreaChart4shadow {\n  -webkit-filter: drop-shadow(0px -5px 2px rgba(0, 0, 0, 0.2));\n  filter: drop-shadow(0px -5px 2px rgba(0, 0, 0, 0.2));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetAreaChart5 .ct-series-a .ct-area {\n  fill-opacity: 1;\n  fill: url(\"/dashboard/analytics#wGradient5\") !important; }\n\n:host /deep/ .WidgetAreaChart5 .ct-series-a .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetAreaChart5 .ct-series-a .ct-point-circle {\n  fill: #6d3da7;\n  stroke-width: 5;\n  stroke: #fff; }\n\n:host /deep/ .WidgetAreaChart5 .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .WidgetAreaChart5 .ct-target-line {\n  stroke: #fff;\n  stroke-width: 2px;\n  stroke-dasharray: 4px; }\n\n:host /deep/ .WidgetAreaChart5shadow {\n  -webkit-filter: drop-shadow(0px -5px 2px rgba(0, 0, 0, 0.2));\n  filter: drop-shadow(0px -5px 2px rgba(0, 0, 0, 0.2));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetAreaChart6 .ct-series-a .ct-area {\n  fill-opacity: 1;\n  fill: url(\"/dashboard/analytics#wGradient6\") !important; }\n\n:host /deep/ .WidgetAreaChart6 .ct-series-a .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetAreaChart6 .ct-series-a .ct-point-circle {\n  fill: #6d64f3;\n  stroke-width: 5;\n  stroke: #fff; }\n\n:host /deep/ .WidgetAreaChart6 .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .WidgetAreaChart6 .ct-target-line {\n  stroke: #fff;\n  stroke-width: 2px;\n  stroke-dasharray: 4px; }\n\n:host /deep/ .WidgetAreaChart6shadow {\n  -webkit-filter: drop-shadow(0px -5px 2px rgba(0, 0, 0, 0.2));\n  filter: drop-shadow(0px -5px 2px rgba(0, 0, 0, 0.2));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .lineAreaChart .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/analytics#laGradient1\") !important; }\n\n:host /deep/ .lineAreaChart .ct-series-b .ct-area {\n  fill: url(\"/dashboard/analytics#laGradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineAreaChart .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineAreaChart .ct-series-b .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .lineAreaChart .ct-series-b .ct-point-circle {\n  display: none; }\n\n:host /deep/ .lineAreaChart .ct-series-b .ct-point-circle-transperent {\n  display: none; }\n\n:host /deep/ .lineAreaChart .ct-series-a .ct-point-circle {\n  fill: url(\"/dashboard/analytics#laGradient1\");\n  stroke-width: 3;\n  stroke: #fff; }\n\n:host /deep/ .lineAreaChartShadow {\n  -webkit-filter: drop-shadow(0px -8px 4px rgba(0, 0, 0, 0.2));\n  filter: drop-shadow(0px -8px 4px rgba(0, 0, 0, 0.2));\n  /* Same syntax as box-shadow, except \r\n                                                           for the spread property */ }\n\n:host /deep/ .lineAreaChart .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .lineChart2 .ct-series.ct-series-a .ct-line {\n  stroke: url(\"/dashboard/analytics#lineGradient1\") !important;\n  stroke-width: 3px; }\n\n:host /deep/ .lineChart2 .ct-series.ct-series-a .ct-circle {\n  fill: url(\"/dashboard/analytics#lineGradient1\") !important;\n  stroke-width: 3;\n  stroke: #fff; }\n\n:host /deep/ .lineChart2 .ct-series.ct-series-b .ct-line {\n  stroke: url(\"/dashboard/analytics#lineGradient2\") !important;\n  stroke-width: 3px; }\n\n:host /deep/ .lineChart2 .ct-series.ct-series-b .ct-circle {\n  fill: url(\"/dashboard/analytics#lineGradient2\") !important;\n  stroke-width: 3;\n  stroke: #fff; }\n\n:host /deep/ .lineChart2Shadow {\n  -webkit-filter: drop-shadow(0px 14px 4px rgba(0, 0, 0, 0.2));\n  filter: drop-shadow(0px 14px 4px rgba(0, 0, 0, 0.2));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .lineArea6 .ct-series-a .ct-area {\n  fill-opacity: 1;\n  fill: url(\"/dashboard/analytics#gradient6\") !important; }\n\n:host /deep/ .lineArea6 .ct-series.ct-series-a .ct-line {\n  stroke: url(\"/dashboard/analytics#linear6\") !important;\n  stroke-width: 13px; }\n\n:host /deep/ .lineArea6 .ct-series.ct-series-a .ct-point-circle {\n  fill: url(\"/dashboard/analytics#linear6\") !important;\n  stroke-width: 5;\n  stroke: #fff; }\n\n:host /deep/ .lineArea6 .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .lineArea6Shadow {\n  -webkit-filter: drop-shadow(0px -8px 4px rgba(0, 0, 0, 0.2));\n  filter: drop-shadow(0px -8px 4px rgba(0, 0, 0, 0.2));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvYW5hbHl0aWNzL0M6XFxVc2Vyc1xcbHVuaWRcXERlc2t0b3BcXHByb2pldG9cXFNJU1RFTUEgLSBWQVZBXFx2YXZhLXBlbnRlY29zdGUtc3lzdGVtL3NyY1xcYXBwXFxjb21wb25lbnRzXFxkYXNoYm9hcmRcXGFuYWx5dGljc1xcYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksc0JBQXFCO0VBQ3JCLDJCQUEwQixFQUM3Qjs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFHRDtFQUNJLGdCQUFlO0VBQ2Ysd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLGdCQUFlO0VBQ2YsYUFBWSxFQUNmOztBQUVBO0VBQ0csa0JBQWlCLEVBQ3BCOztBQUVBO0VBQ0csYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixzQkFBcUIsRUFDeEI7O0FBRUE7RUFDRyw2REFBNkQ7RUFDN0QscURBQXFEO0VBQ3JEO2lGQUM2RSxFQUNoRjs7QUFJRDtFQUNJLGdCQUFlO0VBQ2Ysd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLGdCQUFlO0VBQ2YsYUFBWSxFQUNmOztBQUVBO0VBQ0csa0JBQWlCLEVBQ3BCOztBQUVBO0VBQ0csYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixzQkFBcUIsRUFDeEI7O0FBRUE7RUFDRyw2REFBNkQ7RUFDN0QscURBQXFEO0VBQ3JEO2lGQUM2RSxFQUNoRjs7QUFJRDtFQUNJLGdCQUFlO0VBQ2Ysd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLGdCQUFlO0VBQ2YsYUFBWSxFQUNmOztBQUVBO0VBQ0csa0JBQWlCLEVBQ3BCOztBQUVBO0VBQ0csYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixzQkFBcUIsRUFDeEI7O0FBRUE7RUFDRyw2REFBNkQ7RUFDN0QscURBQXFEO0VBQ3JEO2lGQUM2RSxFQUNoRjs7QUFJQTtFQUNHLGtCQUFpQjtFQUNqQix5REFBOEQsRUFDakU7O0FBRUQ7RUFDSSx3REFBNkQ7RUFDN0Qsa0JBQWlCLEVBQ3BCOztBQU1EO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUVEO0VBR1EsY0FBYSxFQUVoQjs7QUFMTDtFQVFRLGNBQWEsRUFFaEI7O0FBR0w7RUFDSSw4Q0FBbUQ7RUFDbkQsZ0JBQWU7RUFDZixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSw2REFBNkQ7RUFDN0QscURBQXFEO0VBQ3JEO3FGQUNpRixFQUNwRjs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFJRDtFQUNJLDZEQUFpRTtFQUNqRSxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSwyREFBK0Q7RUFDL0QsZ0JBQWU7RUFDZixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSw2REFBaUU7RUFDakUsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksMkRBQStEO0VBQy9ELGdCQUFlO0VBQ2YsYUFBWSxFQUNmOztBQUVEO0VBQ0ksNkRBQTZEO0VBQzdELHFEQUFxRDtFQUNyRDtpRkFDNkUsRUFDaEY7O0FBSUQ7RUFDSSxnQkFBZTtFQUNmLHVEQUE0RCxFQUMvRDs7QUFFRDtFQUNJLHVEQUEyRDtFQUMzRCxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxxREFBeUQ7RUFDekQsZ0JBQWU7RUFDZixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSw2REFBNkQ7RUFDN0QscURBQXFEO0VBQ3JEO2lGQUM2RSxFQUNoRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2FuYWx5dGljcy9hbmFseXRpY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3Mvc2Nzcy9ncmFkaWVudC12YXJpYWJsZXMuc2Nzc1wiO1xyXG46aG9zdCAvZGVlcC8gLmN0LWdyaWQge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xyXG4gICAgc3Ryb2tlOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8vIFdpZGdldCBhcmVhIDQgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG46aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDQgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMTtcclxuICAgIGZpbGw6IHVybCgkYW5hbHl0aWNzLWdyYWRpZW50LXBhdGggKyAgI3dHcmFkaWVudDQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0NCAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0NCAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBmaWxsOiAjZmEzOTRlO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA1O1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG59XHJcblxyXG4gOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlLXRyYW5zcGVyZW50IHtcclxuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4gOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQ0IC5jdC10YXJnZXQtbGluZSB7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDRweDtcclxufVxyXG5cclxuIDpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0NHNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAtNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMikpO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IC01cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XHJcbiAgICAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBXaWRnZXQgYXJlYSA0IENoYXJ0IENTUyBFbmRzXHJcbi8vIFdpZGdldCBhcmVhIDUgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG46aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDUgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMTtcclxuICAgIGZpbGw6IHVybCgkYW5hbHl0aWNzLWdyYWRpZW50LXBhdGggKyAgI3dHcmFkaWVudDUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0NSAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0NSAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBmaWxsOiAjNmQzZGE3O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA1O1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG59XHJcblxyXG4gOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQ1IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlLXRyYW5zcGVyZW50IHtcclxuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4gOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQ1IC5jdC10YXJnZXQtbGluZSB7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDRweDtcclxufVxyXG5cclxuIDpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0NXNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAtNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMikpO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IC01cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XHJcbiAgICAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBXaWRnZXQgYXJlYSA1IENoYXJ0IENTUyBFbmRzXHJcbi8vIFdpZGdldCBhcmVhIDYgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG46aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDYgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMTtcclxuICAgIGZpbGw6IHVybCgkYW5hbHl0aWNzLWdyYWRpZW50LXBhdGggKyAgI3dHcmFkaWVudDYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0NiAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0NiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBmaWxsOiAjNmQ2NGYzO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA1O1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG59XHJcblxyXG4gOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQ2IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlLXRyYW5zcGVyZW50IHtcclxuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4gOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQ2IC5jdC10YXJnZXQtbGluZSB7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDRweDtcclxufVxyXG5cclxuIDpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0NnNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAtNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMikpO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IC01cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XHJcbiAgICAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBXaWRnZXQgYXJlYSA2IENoYXJ0IENTUyBFbmRzXHJcbi8vIExpbmUgYXJlYSBjaGFydCBDU1MgU3RhcnRzXHJcbiA6aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMC43O1xyXG4gICAgZmlsbDogdXJsKCRhbmFseXRpY3MtZ3JhZGllbnQtcGF0aCArICAjbGFHcmFkaWVudDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWFDaGFydCAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRhbmFseXRpY3MtZ3JhZGllbnQtcGF0aCArICAjbGFHcmFkaWVudCkgIWltcG9ydGFudDtcclxuICAgIGZpbGwtb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4vLyA6aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcclxuLy8gICAgIGZpbGw6ICNmZjhkNjA7XHJcbi8vICAgICBmaWxsLW9wYWNpdHk6IDAuMTtcclxuLy8gfVxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LWxpbmUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWFDaGFydCAuY3Qtc2VyaWVzLWIgLmN0LXBvaW50IHtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1iIHtcclxuICAgIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgICAgIC8vIGZpbGw6dXJsKCRhbmFseXRpY3MtZ3JhZGllbnQtcGF0aCArICAjbGFHcmFkaWVudCk7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAvLyBzdHJva2U6I2ZmZjtcclxuICAgIH1cclxuICAgIC5jdC1wb2ludC1jaXJjbGUtdHJhbnNwZXJlbnQge1xyXG4gICAgICAgIC8vIGZpbGw6dXJsKCRhbmFseXRpY3MtZ3JhZGllbnQtcGF0aCArICAjbGFHcmFkaWVudCk7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAvLyBzdHJva2U6I2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIGZpbGw6IHVybCgkYW5hbHl0aWNzLWdyYWRpZW50LXBhdGggKyAgI2xhR3JhZGllbnQxKTtcclxuICAgIHN0cm9rZS13aWR0aDogMztcclxuICAgIHN0cm9rZTogI2ZmZjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYUNoYXJ0U2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IC04cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggLThweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpKTtcclxuICAgIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUtdHJhbnNwZXJlbnQge1xyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8vIExpbmUgYXJlYSBjaGFydCBDU1MgRW5kc1xyXG4vL0xpbmUgY2hhcnQgMiBDU1MgU3RhcnRzXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MiAuY3Qtc2VyaWVzLmN0LXNlcmllcy1hIC5jdC1saW5lIHtcclxuICAgIHN0cm9rZTogdXJsKCRhbmFseXRpY3MtZ3JhZGllbnQtcGF0aCArICNsaW5lR3JhZGllbnQxKSAhaW1wb3J0YW50O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MiAuY3Qtc2VyaWVzLmN0LXNlcmllcy1hIC5jdC1jaXJjbGUge1xyXG4gICAgZmlsbDogdXJsKCRhbmFseXRpY3MtZ3JhZGllbnQtcGF0aCArICNsaW5lR3JhZGllbnQxKSAhaW1wb3J0YW50O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAzO1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydDIgLmN0LXNlcmllcy5jdC1zZXJpZXMtYiAuY3QtbGluZSB7XHJcbiAgICBzdHJva2U6IHVybCgkYW5hbHl0aWNzLWdyYWRpZW50LXBhdGggKyAjbGluZUdyYWRpZW50MikgIWltcG9ydGFudDtcclxuICAgIHN0cm9rZS13aWR0aDogM3B4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydDIgLmN0LXNlcmllcy5jdC1zZXJpZXMtYiAuY3QtY2lyY2xlIHtcclxuICAgIGZpbGw6IHVybCgkYW5hbHl0aWNzLWdyYWRpZW50LXBhdGggKyAjbGluZUdyYWRpZW50MikgIWltcG9ydGFudDtcclxuICAgIHN0cm9rZS13aWR0aDogMztcclxuICAgIHN0cm9rZTogI2ZmZjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQyU2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpKTtcclxuICAgIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vTGluZSBjaGFydCAyIENTUyBFbmRzXHJcbi8vIExpbmVBcmVhIENoYXJ0IDYgQ1NTIFN0YXJ0c1xyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhNiAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gICAgZmlsbC1vcGFjaXR5OiAxO1xyXG4gICAgZmlsbDogdXJsKCRhbmFseXRpY3MtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhNiAuY3Qtc2VyaWVzLmN0LXNlcmllcy1hIC5jdC1saW5lIHtcclxuICAgIHN0cm9rZTogdXJsKCRhbmFseXRpY3MtZ3JhZGllbnQtcGF0aCArICNsaW5lYXI2KSAhaW1wb3J0YW50O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxM3B4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhNiAuY3Qtc2VyaWVzLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgZmlsbDogdXJsKCRhbmFseXRpY3MtZ3JhZGllbnQtcGF0aCArICNsaW5lYXI2KSAhaW1wb3J0YW50O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA1O1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhNiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZS10cmFuc3BlcmVudCB7XHJcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTZTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggLThweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpKTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAtOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMikpO1xyXG4gICAgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gTGluZUFyZWEgQ2hhcnQgNiBDU1MgRW5kcyJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/analytics/analytics.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/analytics/analytics.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var data = __webpack_require__(/*! ../../shared/data/chartist.json */ "./src/app/components/shared/data/chartist.json");
var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
        // Widget Area chart 4 configuration Starts
        this.WidgetAreaChart4 = {
            type: 'Line', data: data['WidgetAreaChart2'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 0,
                    showLabel: false,
                    offset: 0,
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].simple({
                    divisor: 2
                }),
                fullWidth: true,
                showArea: true,
                onlyInteger: true
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'wGradient4',
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(250,81,61, 0.8)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(250,55,79, 0.8)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 7;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: data.value.y === 3 || data.value.y === 45 ? 'ct-point-circle-transperent' : 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Widget Area chart 4 configuration Ends
        // Widget Area chart 5 configuration Starts
        this.WidgetAreaChart5 = {
            type: 'Line', data: data['WidgetAreaChart2'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 0,
                    showLabel: false,
                    offset: 0,
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].simple({
                    divisor: 2
                }),
                fullWidth: true,
                showArea: true,
                onlyInteger: true
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'wGradient5',
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(255, 0, 204, 0.5)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(51, 51, 153, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 7;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: data.value.y === 3 || data.value.y === 45 ? 'ct-point-circle-transperent' : 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Widget Area chart 5 configuration Ends
        // Widget Area chart 6 configuration Starts
        this.WidgetAreaChart6 = {
            type: 'Line', data: data['WidgetAreaChart2'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 0,
                    showLabel: false,
                    offset: 0,
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].simple({
                    divisor: 2
                }),
                fullWidth: true,
                showArea: true,
                onlyInteger: true
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'wGradient6',
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(56, 184, 242, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(132, 60, 247, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 7;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: data.value.y === 3 || data.value.y === 45 ? 'ct-point-circle-transperent' : 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Widget Area chart 6 configuration Ends
        // Line area chart configuration Starts
        this.lineAreaChart = {
            type: 'Line',
            data: data['lineArea3'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true,
                onlyInteger: true,
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                axisX: {
                    showGrid: false
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'laGradient',
                        x1: 0,
                        y1: 1,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 201, 255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(146, 254, 157, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'laGradient1',
                        x1: 0,
                        y1: 1,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(132, 60, 247, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(56, 184, 242, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 6;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: data.value.y === 0 ? 'ct-point-circle-transperent' : 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Line area chart configuration Ends
        // Line chart configuration Starts
        this.lineChart2 = {
            type: 'Line', data: data['line2'],
            options: {
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                fullWidth: true,
            },
            responsiveOptions: [
                ['screen and (max-width: 640px) and (min-width: 381px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 2 === 0 ? value : null;
                            }
                        }
                    }],
                ['screen and (max-width: 380px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 3 === 0 ? value : null;
                            }
                        }
                    }]
            ],
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'lineGradient1',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(252,157,48, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(250,91,76, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'lineGradient2',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(45,121,255,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(249,81,255, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 8;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        // Line chart configuration Ends
        // Line with Area Chart 6 Starts
        this.lineArea6 = {
            type: 'Line',
            data: data['lineArea6'],
            options: {
                low: 0,
                fullWidth: true,
                showArea: true,
                onlyInteger: true,
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                axisX: {
                    showGrid: false
                },
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'linear6',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(45,121,255,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(249,81,255, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient6',
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0.2,
                        'stop-color': 'rgba(200,220,255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(247,250,255, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 10;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: data.value.y === 15 ? 'ct-point-circle' : 'ct-point-circle-transperent'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Line with Area Chart 6 Ends
    }
    AnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/components/dashboard/analytics/analytics.component.html"),
            styles: [__webpack_require__(/*! ./analytics.component.scss */ "./src/app/components/dashboard/analytics/analytics.component.scss")]
        })
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _eCommerce_eCommerce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eCommerce/eCommerce.component */ "./src/app/components/dashboard/eCommerce/eCommerce.component.ts");
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./analytics/analytics.component */ "./src/app/components/dashboard/analytics/analytics.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        children: [
            {
                path: 'eCommerce',
                component: _eCommerce_eCommerce_component__WEBPACK_IMPORTED_MODULE_3__["EcommerceComponent"],
                data: {
                    title: 'eCommerce'
                }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
            },
            {
                path: 'analytics',
                component: _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__["AnalyticsComponent"],
                data: {
                    title: 'Analytics'
                }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
            },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/components/dashboard/dashboard-routing.module.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_chartist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/components/shared/directives/match-height.directive.ts");
/* harmony import */ var _eCommerce_eCommerce_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eCommerce/eCommerce.component */ "./src/app/components/dashboard/eCommerce/eCommerce.component.ts");
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./analytics/analytics.component */ "./src/app/components/dashboard/analytics/analytics.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_3__["ChartistModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_5__["MatchHeightModule"]
            ],
            exports: [],
            declarations: [
                _eCommerce_eCommerce_component__WEBPACK_IMPORTED_MODULE_6__["EcommerceComponent"],
                _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_7__["AnalyticsComponent"]
            ],
            providers: [],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/eCommerce/eCommerce.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard/eCommerce/eCommerce.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Statistics cards Starts-->\r\n<section *ngIf=\"isAdmin\">\r\n    <div class=\"row\">\r\n        <div class=\" col-lg-6 col-12\">\r\n            <div class=\"card bg-white\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block pt-2 pb-0\">\r\n                        <div class=\"media\">\r\n                            <div class=\"media-body text-left\">\r\n                                <h4 class=\"font-medium-5 card-title mb-0\">R${{formatMoney(dashboard?.totalSales)}}</h4>\r\n                                <span>Valor em Vendas</span>\r\n                            </div>\r\n                            <div class=\"media-right text-right\">\r\n                                <i class=\"icon-wallet font-large-1 warning\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"Widget-area-chart2\" class=\"height-150 WidgetAreaChart2 mb-2\">\r\n                        <x-chartist class=\"\" [data]=\"WidgetAreaChart2.data\" [type]=\"WidgetAreaChart2.type\" [options]=\"WidgetAreaChart2.options\" [responsiveOptions]=\"WidgetAreaChart2.responsiveOptions\" [events]=\"WidgetAreaChart2.events\">\r\n                        </x-chartist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\" col-lg-6  col-12\">\r\n            <div class=\"card bg-white\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block pt-2 pb-0\">\r\n                        <div class=\"media\">\r\n                            <div class=\"media-body text-left\">\r\n                                <h4 class=\"font-medium-5 card-title mb-0\">Total: {{dashboard?.totalOrders}}</h4>\r\n                                <span>Quantidade de Pedidos</span>\r\n                            </div>\r\n                            <div class=\"media-right text-right\">\r\n                                <i class=\"icon-basket-loaded font-large-1 success\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"Widget-area-chart3\" class=\"height-150 WidgetAreaChart3 mb-2\">\r\n                        <x-chartist class=\"\" [data]=\"WidgetAreaChart3.data\" [type]=\"WidgetAreaChart3.type\" [options]=\"WidgetAreaChart3.options\" [responsiveOptions]=\"WidgetAreaChart3.responsiveOptions\" [events]=\"WidgetAreaChart3.events\">\r\n                        </x-chartist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Statistics cards Ends-->\r\n    <!--Line with Area Chart 1 Starts-->\r\n    <div class=\"row\">\r\n        <div class=\" col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"card-title-wrap bar-success\">\r\n                        <h4 class=\"card-title\">Valor Diário - Vendas</h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div id=\"line-chart\" class=\"height-300 lineChart lineChartShadow\">\r\n                            <x-chartist [data]=\"lineChart.data\" [type]=\"lineChart.type\" [options]=\"lineChart.options\" [responsiveOptions]=\"lineChart.responsiveOptions\" [events]=\"lineChart.events\">\r\n                            </x-chartist>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\" id=\"recent-sales\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"card-title-wrap bar-primary\">\r\n                        <h4 class=\"card-title\">Pedidos Recentes</h4>\r\n                    </div>\r\n                    <a class=\"heading-elements-toggle\">\r\n                        <i class=\"la la-ellipsis-v font-medium-3\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"card-content mt-1\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-hover table-xl mb-0\" id=\"recent-orders\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"border-top-0\">ID</th>\r\n                                    <th class=\"border-top-0\">Data</th>\r\n                                    <th class=\"border-top-0\">Status</th>\r\n                                    <th class=\"border-top-0\">Cliente</th>\r\n                                    <th class=\"border-top-0\">Valor</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let order of orders; let i = index\">\r\n                                    <td class=\"text-truncate\">{{order?.$key}}</td>\r\n                                    <td class=\"text-truncate\">{{order?.timeStamp | date:'dd/MM/yyyy HH:mm'}}</td>\r\n                                    <td class=\"text-truncate\">{{order?.status}}</td>\r\n                                    <td class=\"text-truncate\">{{order?.customerDetails?.displayName}}</td>\r\n                                    <td class=\"text-truncate\">R${{formatMoney(order?.total)}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/dashboard/eCommerce/eCommerce.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard/eCommerce/eCommerce.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineChart .ct-series.ct-series-a .ct-line {\n  stroke: url(\"/dashboard/eCommerce#linear1\") !important;\n  stroke-width: 5px; }\n\n:host /deep/ .lineChart .ct-series.ct-series-a .ct-circle {\n  fill: url(\"/dashboard/eCommerce#linear1\") !important;\n  stroke-width: 5;\n  stroke: #fff; }\n\n:host /deep/ .lineChart .ct-series.ct-series-a .ct-circle-transperent {\n  fill: transparent;\n  stroke-width: 0; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 6px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 6px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/eCommerce#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-slice-bar {\n  fill: url(\"/dashboard/eCommerce#linear\") !important; }\n\n:host /deep/ .donut .ct-done .ct-slice-donut-solid {\n  fill: url(\"/dashboard/eCommerce#donutGradient1\"); }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut-solid {\n  fill: url(\"/dashboard/eCommerce#donutGradient2\"); }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut-solid {\n  fill: url(\"/dashboard/eCommerce#donutGradient3\"); }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .donut .ct-chart-donut .ct-series {\n  stroke: #fff;\n  stroke-width: 3px; }\n\n:host /deep/ .donutShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                               for the spread property */ }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(5n+1),\n:host /deep/ .BarChart .ct-series-a .ct-slice-bar:nth-of-type(5n+1) {\n  stroke: url(\"/dashboard/eCommerce#gradient7\");\n  fill: url(\"/dashboard/eCommerce#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(5n+2),\n:host /deep/ .BarChart .ct-series-a .ct-slice-bar:nth-of-type(5n+2) {\n  stroke: url(\"/dashboard/eCommerce#gradient5\");\n  fill: url(\"/dashboard/eCommerce#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(5n+3),\n:host /deep/ .BarChart .ct-series-a .ct-slice-bar:nth-of-type(5n+3) {\n  stroke: url(\"/dashboard/eCommerce#gradient6\");\n  fill: url(\"/dashboard/eCommerce#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(5n+4),\n:host /deep/ .BarChart .ct-series-a .ct-slice-bar:nth-of-type(5n+4) {\n  stroke: url(\"/dashboard/eCommerce#gradient4\");\n  fill: url(\"/dashboard/eCommerce#gradient4\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(5n+5),\n:host /deep/ .BarChart .ct-series-a .ct-slice-bar:nth-of-type(5n+5) {\n  stroke: url(\"/dashboard/eCommerce#gradient8\");\n  fill: url(\"/dashboard/eCommerce#gradient8\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetAreaChart1 .ct-series-a .ct-area {\n  fill-opacity: 1;\n  fill: url(\"/dashboard/eCommerce#wGradient1\") !important; }\n\n:host /deep/ .WidgetAreaChart1 .ct-series-a .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetAreaChart1 .ct-series-a .ct-point-circle {\n  fill: #fff;\n  stroke-width: 10;\n  stroke: #8249e8; }\n\n:host /deep/ .WidgetAreaChart1 .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .WidgetAreaChart1 .ct-target-line {\n  stroke: #fff;\n  stroke-width: 2px;\n  stroke-dasharray: 4px; }\n\n:host /deep/ .WidgetAreaChart2 .ct-series-a .ct-area {\n  fill-opacity: 1;\n  fill: url(\"/dashboard/eCommerce#wGradient2\") !important; }\n\n:host /deep/ .WidgetAreaChart2 .ct-series-a .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetAreaChart2 .ct-series-a .ct-point-circle {\n  fill: #fff;\n  stroke-width: 10;\n  stroke: #fa5b4c; }\n\n:host /deep/ .WidgetAreaChart2 .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .WidgetAreaChart2 .ct-target-line {\n  stroke: #fff;\n  stroke-width: 2px;\n  stroke-dasharray: 4px; }\n\n:host /deep/ .WidgetAreaChart3 .ct-series-a .ct-area {\n  fill-opacity: 1;\n  fill: url(\"/dashboard/eCommerce#wGradient3\") !important; }\n\n:host /deep/ .WidgetAreaChart3 .ct-series-a .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetAreaChart3 .ct-series-a .ct-point-circle {\n  fill: #fff;\n  stroke-width: 10;\n  stroke: #19667d; }\n\n:host /deep/ .WidgetAreaChart3 .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .WidgetAreaChart3 .ct-target-line {\n  stroke: #fff;\n  stroke-width: 2px;\n  stroke-dasharray: 4px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZUNvbW1lcmNlL0M6XFxVc2Vyc1xcbHVuaWRcXERlc2t0b3BcXHByb2pldG9cXFNJU1RFTUEgLSBWQVZBXFx2YXZhLXBlbnRlY29zdGUtc3lzdGVtL3NyY1xcYXBwXFxjb21wb25lbnRzXFxkYXNoYm9hcmRcXGVDb21tZXJjZVxcZUNvbW1lcmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksc0JBQXFCO0VBQ3JCLDJCQUEwQixFQUM3Qjs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFHRDtFQUNJLHVEQUEyRDtFQUMzRCxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxxREFBeUQ7RUFDekQsZ0JBQWU7RUFDZixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZ0JBQ0osRUFBQzs7QUFFRDtFQUNJLDZEQUE2RDtFQUM3RCxxREFBcUQ7RUFDckQ7aUZBQzZFLEVBQ2hGOztBQUlEO0VBR1ksc0RBQTJELEVBQzlEOztBQUpUO0VBTVksb0RBQXlELEVBQzVEOztBQU1SO0VBQ0csaURBQXNELEVBRXpEOztBQUVBO0VBQ0csaURBQXNELEVBRXpEOztBQUVBO0VBQ0csaURBQXNELEVBRXpEOztBQUVBO0VBQ0csb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDaEI7O0FBRUE7RUFDRyxhQUFZO0VBQ1osa0JBQWlCLEVBQ3BCOztBQUVBO0VBQ0csNkRBQTZEO0VBQzdELHFEQUFxRDtFQUNyRDt5RUFDcUUsRUFDeEU7O0FBSUE7O0VBRUcsOENBQW1EO0VBQ25ELDRDQUFpRCxFQUNwRDs7QUFFQTs7RUFFRyw4Q0FBbUQ7RUFDbkQsNENBQWlELEVBQ3BEOztBQUVBOztFQUVHLDhDQUFtRDtFQUNuRCw0Q0FBaUQsRUFDcEQ7O0FBRUE7O0VBRUcsOENBQW1EO0VBQ25ELDRDQUFpRCxFQUNwRDs7QUFFQTs7RUFFRyw4Q0FBbUQ7RUFDbkQsNENBQWlELEVBQ3BEOztBQUVBO0VBQ0csNkRBQTZEO0VBQzdELHFEQUFxRDtFQUNyRDtpRkFDNkUsRUFDaEY7O0FBSUQ7RUFDSSxnQkFBZTtFQUNmLHdEQUE2RCxFQUNoRTs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFDbEI7O0FBRUE7RUFDRyxrQkFBaUIsRUFDcEI7O0FBRUE7RUFDRyxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLHNCQUFxQixFQUN4Qjs7QUFJRDtFQUNJLGdCQUFlO0VBQ2Ysd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksV0FBVTtFQUNWLGlCQUFnQjtFQUNoQixnQkFBZSxFQUNsQjs7QUFFQTtFQUNHLGtCQUFpQixFQUNwQjs7QUFFQTtFQUNHLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsc0JBQXFCLEVBQ3hCOztBQUlEO0VBQ0ksZ0JBQWU7RUFDZix3REFBNkQsRUFDaEU7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2xCOztBQUVBO0VBQ0csa0JBQWlCLEVBQ3BCOztBQUVBO0VBQ0csYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixzQkFBcUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9lQ29tbWVyY2UvZUNvbW1lcmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zYXNzL3Njc3MvZ3JhZGllbnQtdmFyaWFibGVzLnNjc3NcIjtcclxuOmhvc3QgL2RlZXAvIC5jdC1ncmlkIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcclxuICAgIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4vLyBMaW5lIENoYXJ0IENTUyBTdGFydHNcclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LXNlcmllcy5jdC1zZXJpZXMtYSAuY3QtbGluZSB7XHJcbiAgICBzdHJva2U6IHVybCgkZUNvbW1lcmNlLWdyYWRpZW50LXBhdGggKyAjbGluZWFyMSkgIWltcG9ydGFudDtcclxuICAgIHN0cm9rZS13aWR0aDogNXB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3Qtc2VyaWVzLmN0LXNlcmllcy1hIC5jdC1jaXJjbGUge1xyXG4gICAgZmlsbDogdXJsKCRlQ29tbWVyY2UtZ3JhZGllbnQtcGF0aCArICNsaW5lYXIxKSAhaW1wb3J0YW50O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA1O1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3Qtc2VyaWVzLmN0LXNlcmllcy1hIC5jdC1jaXJjbGUtdHJhbnNwZXJlbnQge1xyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xyXG4gICAgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gTGluZSBDaGFydCBDU1MgRW5kc1xyXG4vLyBTdGFjayBCYXIgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG46aG9zdCAvZGVlcC8gLlN0YWNrYmFyY2hhcnQge1xyXG4gICAgLmN0LXNlcmllcy1hIHtcclxuICAgICAgICAuY3QtYmFyIHtcclxuICAgICAgICAgICAgc3Ryb2tlOiB1cmwoJGVDb21tZXJjZS1ncmFkaWVudC1wYXRoICsgICNsaW5lYXIpICFpbXBvcnRhbnRcclxuICAgICAgICB9XHJcbiAgICAgICAgLmN0LXNsaWNlLWJhciB7XHJcbiAgICAgICAgICAgIGZpbGw6IHVybCgkZUNvbW1lcmNlLWdyYWRpZW50LXBhdGggKyAgI2xpbmVhcikgIWltcG9ydGFudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBFbmRzXHJcbi8vIERvbnV0IENoYXJ0ICBDU1MgRW5kc1xyXG4gOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQtc29saWQge1xyXG4gICAgZmlsbDogdXJsKCRlQ29tbWVyY2UtZ3JhZGllbnQtcGF0aCArICAjZG9udXRHcmFkaWVudDEpO1xyXG4gICAgLy8gc3Ryb2tlLXdpZHRoOiAyOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1wcm9ncmVzcyAuY3Qtc2xpY2UtZG9udXQtc29saWQge1xyXG4gICAgZmlsbDogdXJsKCRlQ29tbWVyY2UtZ3JhZGllbnQtcGF0aCArICAjZG9udXRHcmFkaWVudDIpO1xyXG4gICAgLy8gc3Ryb2tlLXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQtc29saWQge1xyXG4gICAgZmlsbDogdXJsKCRlQ29tbWVyY2UtZ3JhZGllbnQtcGF0aCArICAjZG9udXRHcmFkaWVudDMpO1xyXG4gICAgLy8gc3Ryb2tlLXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1sYWJlbCB7XHJcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gICAgYWxpZ25tZW50LWJhc2VsaW5lOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmaWxsOiAjODY4ZTk2O1xyXG59XHJcblxyXG4gOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtY2hhcnQtZG9udXQgLmN0LXNlcmllcyB7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbiAgICBzdHJva2Utd2lkdGg6IDNweDtcclxufVxyXG5cclxuIDpob3N0IC9kZWVwLyAuZG9udXRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xyXG4gICAgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIERvbnV0IENoYXJ0ICBDU1MgRW5kc1xyXG4vLyBCYXIgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG4gOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg1bisxKSxcclxuIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1zbGljZS1iYXI6bnRoLW9mLXR5cGUoNW4rMSkge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGVDb21tZXJjZS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDcpO1xyXG4gICAgZmlsbDogdXJsKCRlQ29tbWVyY2UtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ3KTtcclxufVxyXG5cclxuIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNW4rMiksXHJcbiA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3Qtc2xpY2UtYmFyOm50aC1vZi10eXBlKDVuKzIpIHtcclxuICAgIHN0cm9rZTogdXJsKCRlQ29tbWVyY2UtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ1KTtcclxuICAgIGZpbGw6IHVybCgkZUNvbW1lcmNlLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NSk7XHJcbn1cclxuXHJcbiA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDVuKzMpLFxyXG4gOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWJhcjpudGgtb2YtdHlwZSg1biszKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZUNvbW1lcmNlLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50Nik7XHJcbiAgICBmaWxsOiB1cmwoJGVDb21tZXJjZS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDYpO1xyXG59XHJcblxyXG4gOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg1bis0KSxcclxuIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1zbGljZS1iYXI6bnRoLW9mLXR5cGUoNW4rNCkge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGVDb21tZXJjZS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDQpO1xyXG4gICAgZmlsbDogdXJsKCRlQ29tbWVyY2UtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ0KTtcclxufVxyXG5cclxuIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNW4rNSksXHJcbiA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3Qtc2xpY2UtYmFyOm50aC1vZi10eXBlKDVuKzUpIHtcclxuICAgIHN0cm9rZTogdXJsKCRlQ29tbWVyY2UtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ4KTtcclxuICAgIGZpbGw6IHVybCgkZUNvbW1lcmNlLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50OCk7XHJcbn1cclxuXHJcbiA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0U2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcclxuICAgIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIEJhciBDaGFydCBDU1MgRW5kc1xyXG4vLyBXaWRnZXQgYXJlYSAxIENoYXJ0IENTUyBTdGFydHNcclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQxIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDE7XHJcbiAgICBmaWxsOiB1cmwoJGVDb21tZXJjZS1ncmFkaWVudC1wYXRoICsgICN3R3JhZGllbnQxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDEgLmN0LXNlcmllcy1hIC5jdC1saW5lIHtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDEgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgZmlsbDogI2ZmZjtcclxuICAgIHN0cm9rZS13aWR0aDogMTA7XHJcbiAgICBzdHJva2U6ICM4MjQ5ZTg7XHJcbn1cclxuXHJcbiA6aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDEgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUtdHJhbnNwZXJlbnQge1xyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiA6aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDEgLmN0LXRhcmdldC1saW5lIHtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNHB4O1xyXG59XHJcblxyXG4vLyBXaWRnZXQgYXJlYSAxIENoYXJ0IENTUyBFbmRzXHJcbi8vIFdpZGdldCBhcmVhIDIgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG46aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDIgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMTtcclxuICAgIGZpbGw6IHVybCgkZUNvbW1lcmNlLWdyYWRpZW50LXBhdGggKyAgI3dHcmFkaWVudDIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0MiAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0MiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBmaWxsOiAjZmZmO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxMDtcclxuICAgIHN0cm9rZTogI2ZhNWI0YztcclxufVxyXG5cclxuIDpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0MiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZS10cmFuc3BlcmVudCB7XHJcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuIDpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0MiAuY3QtdGFyZ2V0LWxpbmUge1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA0cHg7XHJcbn1cclxuXHJcbi8vIFdpZGdldCBhcmVhIDIgQ2hhcnQgQ1NTIEVuZHNcclxuLy8gV2lkZ2V0IGFyZWEgMyBDaGFydCBDU1MgU3RhcnRzXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0MyAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gICAgZmlsbC1vcGFjaXR5OiAxO1xyXG4gICAgZmlsbDogdXJsKCRlQ29tbWVyY2UtZ3JhZGllbnQtcGF0aCArICAjd0dyYWRpZW50MykgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQzIC5jdC1zZXJpZXMtYSAuY3QtbGluZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQzIC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIGZpbGw6ICNmZmY7XHJcbiAgICBzdHJva2Utd2lkdGg6IDEwO1xyXG4gICAgc3Ryb2tlOiAjMTk2NjdkO1xyXG59XHJcblxyXG4gOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQzIC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlLXRyYW5zcGVyZW50IHtcclxuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4gOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQzIC5jdC10YXJnZXQtbGluZSB7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDRweDtcclxufVxyXG5cclxuLy8gV2lkZ2V0IGFyZWEgMyBDaGFydCBDU1MgRW5kcyJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/eCommerce/eCommerce.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/eCommerce/eCommerce.component.ts ***!
  \***********************************************************************/
/*! exports provided: EcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function() { return EcommerceComponent; });
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var data = __webpack_require__(/*! ../../shared/data/chartist.json */ "./src/app/components/shared/data/chartist.json");
var EcommerceComponent = /** @class */ (function () {
    function EcommerceComponent(firebaseService) {
        this.firebaseService = firebaseService;
        // Line Chart Starts
        this.lineChart = {
            type: 'Line',
            data: data['line'],
            options: {
                low: 0,
                fullWidth: true,
                onlyInteger: true,
                chartPadding: {
                    right: 20
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 60,
                    labelInterpolationFnc: function labelInterpolationFnc(value) {
                        return value;
                    },
                },
                axisX: {
                    showGrid: false
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_2__["Interpolation"].simple({
                    divisor: 2
                }),
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'linear1',
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(185,168,231, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(118,74,233, 1)'
                    });
                },
                draw: function (data) {
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_2__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: [10],
                            class: data.value.y === 0 || data.value.y === 6800 ? 'ct-circle-transperent' : 'ct-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Line Chart Ends
        // Widget Area chart 2 configuration Starts
        this.WidgetAreaChart2 = {
            type: 'Line', data: data['WidgetAreaChart'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 0,
                    showLabel: false,
                    offset: 0,
                    scaleMinSpace: 10,
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_2__["Interpolation"].simple({
                    divisor: 2
                }),
                fullWidth: true,
                showArea: true,
                onlyInteger: true,
                targetLine: {
                    value: 30,
                    class: 'ct-target-line'
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'wGradient2',
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(252,157,48, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(250,91,76, 1)'
                    });
                },
            },
        };
        this.WidgetAreaChart3 = {
            type: 'Line', data: data['WidgetAreaChart'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 0,
                    showLabel: false,
                    offset: 0,
                    scaleMinSpace: 10,
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_2__["Interpolation"].simple({
                    divisor: 2
                }),
                fullWidth: true,
                showArea: true,
                onlyInteger: true,
                targetLine: {
                    value: 30,
                    class: 'ct-target-line'
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'wGradient3',
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(120, 204, 55, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(0, 75, 145, 1)'
                    });
                },
            },
        };
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
        this.orders = [];
        this.getDashboardOrders();
        this.getDashboardGraphsData();
    }
    EcommerceComponent.prototype.getDashboardOrders = function () {
        var _this = this;
        this.firebaseService.getDashboardOrders().snapshotChanges().subscribe(function (orders) {
            orders.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                _this.orders.push(a);
            });
        });
    };
    EcommerceComponent.prototype.getDashboardGraphsData = function () {
        var _this = this;
        this.firebaseService.getDashBoardData().snapshotChanges().subscribe(function (dashboard) {
            var res = dashboard.payload.val();
            if (dashboard.key != null || dashboard.key !== 'null') {
                res['$key'] = dashboard.key;
            }
            _this.dashboard = res;
            _this.dashboard.dailyRevenue.series = [_this.dashboard.dailyRevenue.series];
            _this.dashboard.dailyOrders.series = [_this.dashboard.dailyOrders.series];
            _this.dashboard.dailyRevenue.labels.forEach(function (value, index) {
                if (index > 0) {
                    _this.dashboard.dailyRevenue.labels[index] = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(value, 'dd/MM');
                }
            });
            _this.WidgetAreaChart2.data = _this.dashboard.dailyRevenue;
            _this.lineChart.data = _this.dashboard.dailyRevenue;
            _this.WidgetAreaChart3.data = _this.dashboard.dailyOrders;
        });
    };
    EcommerceComponent.prototype.formatMoney = function (n) {
        if (n) {
            return n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
        }
        else {
            return '';
        }
    };
    EcommerceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eCommerce',
            template: __webpack_require__(/*! ./eCommerce.component.html */ "./src/app/components/dashboard/eCommerce/eCommerce.component.html"),
            styles: [__webpack_require__(/*! ./eCommerce.component.scss */ "./src/app/components/dashboard/eCommerce/eCommerce.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_0__["FirebaseService"]])
    ], EcommerceComponent);
    return EcommerceComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/data/chartist.json":
/*!******************************************************!*\
  !*** ./src/app/components/shared/data/chartist.json ***!
  \******************************************************/
/*! exports provided: Bar, Line3, ScatterLine, Scatter, lineArea4, lineArea5, lineArea6, lineArea3, lineArea2, lineAreaDashboard, twoLinesArea, lineArea, lineArea1, Bi-PolarLine, DistributedSeries, donut, donutDashboard, DashboardDonut, LineDashboard, line2, line, line1, line4, WidgetlineChart, WidgetlineChart2, WidgetlineChart3, WidgetAreaChart, WidgetAreaChart2, DashboardBar, Stackbarchart, default */
/***/ (function(module) {

module.exports = {"Bar":{"labels":["Jan","Feb","Mar","Apr"],"series":[[5,4,3,7],[3,2,9,5]]},"Line3":{"labels":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"series":[[12,9,7,4,5,6,6],[2,1,10,7,3,7,2],[1,10,2,10,6,2,8]]},"ScatterLine":{"labels":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"series":[[5,5,10,8,7,5,4,null,null,null,10,10,7,8,6,9],[10,15,null,12,null,10,12,15,null,null,12,null,14,null,null,null],[null,null,null,null,3,4,1,3,4,6,7,9,5,null,null,null]]},"Scatter":{"labels":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"series":[[53.761530227932376,55.06077543488965,90.15619763154757,37.945743703232026,90.15064659594809,72.37213982905773,29.242023161826005,10.613377393892765,41.13272180459888,66.89170357483623,85.47173517613665,80.61313435041848,33.86466777842112,6.993834151672074,58.93321826442517,84.4944785171936,66.47863439014286,26.61792342884319,64.7715312645164,66.7721238997995,24.81459377695263,82.09485043326285,94.28939258245515,81.16315118589196,26.285515136087987,94.25034710171474,82.86738500874603,42.275860431799764,7.252221593822195,12.509815755028853,57.592396396889086,16.98227807583916,82.13296667627357,20.7798608815297,1.4886093931434141,27.717128889831557,83.02006467579533,46.825802760236044,4.449951322677559,63.949111152579285,76.2705142938321,92.84217568625859,33.34033701723147,83.32421059421287,30.95015406095809,99.26555827017742,64.73104862164556,58.3205528852039,98.07205383638176,34.217237701943006,76.84029415694194,77.51086205882534],[68.01743447487219,33.569040390627556,55.83518094287856,6.424873491809824,40.24108430485855,12.867529962712322,33.9171424717146,66.13486382709537,75.36042883674916,37.18758127466557,46.080488500245266,40.98286341759507,25.372664387026923,40.063178151024424,73.6495194240123,48.56310577188692,22.903651846539972,91.5635618730181,84.08459591966795,49.153284675642595,34.82239557500657,38.7753190443602,77.57931404198679,78.24594487949813,42.96149738863182,68.87344162290039,73.35891706187205,79.20638493178991,39.862955442611494,67.72254472880542,32.5667298714178,67.8951691474951,68.22845079029227,24.013142038835245,84.77387385278308,81.96540495436318,21.938120212431865,20.591735159801374,44.392082366517926,99.42917256114683,75.80197000496361,44.95928290576234,56.30251437622547,81.39575345403685,46.6480941362678,60.30444929651577,63.904344644822956,96.31525902388087,80.79036620032171,67.94970208668927,81.84914397158013,64.34930133297705],[94.83796449464408,0.05012881656139001,78.03842883107683,86.85066315022306,63.09834842166116,23.82558487142836,95.04013234951407,91.84355248378253,12.28927042529946,91.59027939302398,44.15426456286402,38.40309269293461,3.0323072732378,51.442756807992104,51.067878308530304,68.87925798432126,9.786004373688861,93.42472024399827,7.196590706996409,90.61672585107475,82.64800742042794,29.33983554466535,27.575295787547738,63.76900610636933,44.31691167371892,35.02049600051234,77.91406665575869,9.594366007019817,33.17507518940415,45.94854823450043,6.028395302814493,97.36303808493578,20.735238575670635,11.577295085428618,49.377810037702986,7.984978938697163,81.52380171386066,86.62152122764415,46.81516933597669,72.70055546352265,39.482785893198404,2.1729768023229346,32.730007414228865,11.8384494034782,97.04367174876609,37.87839695714026,96.1605067491887,24.340714355822968,90.92986653306863,1.9182109464024322,36.43773292877359,51.562138311337314],[90.93023971442824,91.24607758668748,83.11135627737995,38.89630350329263,47.48702934796674,83.10718371512166,93.40725921590878,62.65211828434698,76.93458061916239,94.13663459332706,15.47636651231441,93.70144628274673,80.7911280644665,32.06886936152644,6.458421962605865,14.668285135928372,10.700783089925082,46.997088144127886,53.02589740808132,15.662154340561152,94.70275097718405,59.27632659816442,53.88591373783527,21.602789791233846,29.326094253488066,8.159091366607441,52.57892041859127,71.68439221439431,61.773032787481455,43.02319475997418,97.7745443722398,41.77024219267196,32.79576671635134,26.614574588124352,96.60428591791621,68.90454201273897,33.39711159158707,94.56531035270376,83.77269890317353,72.91107164394433,50.31188574983041,54.67801129631369,69.65510719649639,59.96153020907791,50.66882388014429,97.73196339743835,12.936677564924759,30.197501751145396,7.071721221094629,60.85688790258899,51.276925828485446,30.951614223635193]]},"lineArea4":{"labels":[1,2,3,4,5,6,7,8],"series":[[5,9,7,8,5,3,5,4]]},"lineArea5":{"labels":[1,2,3],"series":[[30,80,35]]},"lineArea6":{"labels":[1,2,3,4,5,6,7],"series":[[10,6,15,13,20,17,19]]},"lineArea3":{"labels":[1,2,3,4,5,6,7,8],"series":[[0,5,15,8,15,9,30,0],[0,3,5,2,8,1,5,0]]},"lineArea2":{"labels":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"series":[[5,30,25,55,45,65,60,105,80,110,120,150],[80,95,87,155,140,147,130,180,160,175,165,200]]},"lineAreaDashboard":{"labels":[1,2,3,4,5,6,7,8],"series":[[0,20,10,45,20,36,21,0],[0,5,22,14,32,12,28,0]]},"twoLinesArea":{"labels":[1,2,3,4,5,6,7,8,9,10],"series":[[5,9,7,8,5,3,5,4,9,23],[10,14,12,13,10,8,10,9,14,28]]},"lineArea":{"labels":[1,2,3,4,5,6,7,8,9,10],"series":[[5,9,7,8,5,3,5,4,9,23]]},"lineArea1":{"labels":[1,2,3,4,5,6,7,8,9,10],"series":[[10,30,10,35,15,45,15,35,20,30],[0,10,30,10,30,15,30,15,30,0]]},"Bi-PolarLine":{"labels":[1,2,3,4,5,6,7,8],"series":[[1,2,3,1,-2,0,1,0],[-2,-1,-2,-1,-2.5,-1,-2,-1],[0,0,0,1,2,2.5,2,1],[2.5,2,1,0.5,1,0.5,-1,-2.5]]},"DistributedSeries":{"labels":["XS","S","M","L","XL","XXL","XXXL"],"series":[50,70,120,200,180,120,150]},"donut":{"series":[20,10,30,40]},"donutDashboard":{"series":[{"name":"done","className":"ct-done","value":35},{"name":"progress","className":"ct-progress","value":14},{"name":"outstanding","className":"ct-outstanding","value":23}]},"DashboardDonut":{"series":[{"name":"done","className":"ct-done","value":10},{"name":"outstanding","className":"ct-outstanding","value":3}]},"LineDashboard":{"labels":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"series":[[80,85,75,65,63,70,82]]},"line2":{"labels":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"series":[[160,150,140,120,75,35,45,65,100,145,160,180],[100,95,90,100,110,120,130,140,130,95,75,80]]},"line":{"labels":["1st","2nd","3rd","4th","5th","6th","7th","8th"],"series":[[0,4500,2600,6100,2600,6500,3200,6800]]},"line1":{"labels":["Jan","Feb","Mar","Apr","May","Jun"],"series":[[65,105,145,105,145,185],[125,80,30,70,110,150],[175,190,160,190,140,100]]},"line4":{"labels":[1,2,3,4],"series":[[750,1250,1100,1800]]},"WidgetlineChart":{"labels":["1","2","3","4","5","6","7","8","9","10","11","12","13"],"series":[[50,45,60,55,70,55,60,55,65,57,60,53,53]]},"WidgetlineChart2":{"labels":["Jan","Feb","Mar","Apr","May","June","July","Aug"],"series":[[55,60,50,55,50,60,55,57]]},"WidgetlineChart3":{"labels":["Jan","Feb","Mar","Apr","May"],"series":[[50,70,45,75,85]]},"WidgetAreaChart":{"labels":[1,2,3,4,5,6],"series":[[0,13,6,30,18,28]]},"WidgetAreaChart2":{"labels":[1,2,3,4,5,6],"series":[[3,20,17,35,32,45]]},"DashboardBar":{"labels":["Sport","Music","Travel","News","Blog"],"series":[[35,20,30,45,55]]},"Stackbarchart":{"labels":["J","F","M","A","M","J","J","A","S","O","N","D"],"series":[[7,4,2,-2,-4,-7,-7,-4,-2,2,4,7]]}};

/***/ }),

/***/ "./src/app/components/shared/directives/match-height.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/directives/match-height.directive.ts ***!
  \************************************************************************/
/*! exports provided: MatchHeightDirective, MatchHeightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightDirective", function() { return MatchHeightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightModule", function() { return MatchHeightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatchHeightDirective = /** @class */ (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    MatchHeightDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // call our matchHeight function here
        setTimeout(function () { _this.matchHeights(_this.el.nativeElement, _this.matchHeight); }, 300);
    };
    MatchHeightDirective.prototype.matchHeights = function (parent, className) {
        // match height logic here
        if (!parent)
            return;
        // step 1: find all the child elements with the selected class name
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        //PIXINVENT - Match hight - fix --- comment below code
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // step 2a: get all the child elements heights
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // step 2b: find out the tallest
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // step 3: update all the child elements to the tallest height
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here
        this.matchHeights(this.el.nativeElement, this.matchHeight);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MatchHeightDirective.prototype, "matchHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatchHeightDirective.prototype, "onResize", null);
    MatchHeightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[matchHeight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MatchHeightDirective);
    return MatchHeightDirective;
}());

var MatchHeightModule = /** @class */ (function () {
    function MatchHeightModule() {
    }
    MatchHeightModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [MatchHeightDirective],
            exports: [MatchHeightDirective]
        })
    ], MatchHeightModule);
    return MatchHeightModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-components-dashboard-dashboard-module.js.map