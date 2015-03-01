(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var tabs = require('tabs');

var container = document.querySelector('.tab-container');

tabs(container);

},{"tabs":2}],2:[function(require,module,exports){
! function(name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition();
  else if (typeof define == 'function') define(definition);
  else this[name] = definition();
}('tabs', function() {

  return function tabs(container) {
    var tabs = container.querySelectorAll('.tab');
    var panes = container.querySelectorAll('.tab-pane');

    each(tabs, function(i, tab) {
      tab.addEventListener('click', function(e) {
        activate(tabs, i);
        activate(panes, i);
      });
    })

    function activate(tabs, index) {
      each(tabs, function(i, tab) {
        if (i != index) {
          removeClass(tab, 'active')
        } else {
          addClass(tab, 'active')
        }
      });
    }
  }

  function each(elements, fn) {
    for (var i = elements.length - 1; i >= 0; i--) {
      fn(i, elements[i]);
    }
  }

  function hasClass(el, cls) {
    return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }

  function addClass(el, cls) {
    if (!hasClass(el, cls)) {
      el.className += " " + cls;
    }
  }

  function removeClass(el, cls) {
    if (hasClass(el, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      el.className = el.className.replace(reg, '');
    }
  }
});
},{}]},{},[1]);
