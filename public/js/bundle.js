/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/hello.js":
/*!*************************!*\
  !*** ./src/js/hello.js ***!
  \*************************/
/***/ (() => {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar echo = function echo(text) {\n  return text + \": Me Too\";\n};\n\nvar request_callback = function request_callback(text) {\n  var callback = echo(text);\n  return callback;\n};\n\nvar get_talk = function get_talk() {\n  var $final_talk = document.getElementsByClassName(\"final\");\n\n  if ($final_talk.length !== 0) {\n    if (last_talk !== $final_talk[$final_talk.length - 1].textContent) {\n      last_talk = $final_talk[$final_talk.length - 1].textContent;\n      add_response(request_callback(last_talk));\n    }\n  }\n};\n\nvar add_response = function add_response(text) {\n  var $response = document.getElementById(\"response\");\n  var text_node = document.createTextNode(text);\n  var $p = document.createElement(\"p\");\n  $p.classList.add(\"fin_response\");\n  $p.appendChild(text_node);\n  $response.appendChild($p);\n};\n\nvar remove_all_response = function remove_all_response() {\n  var $response = document.getElementById(\"response\");\n\n  while ($response.firstChild) {\n    $response.removeChild($response.firstChild);\n  }\n};\n\nvar speechRecognition = new webkitSpeechRecognition();\nspeechRecognition.onresult = console.log;\nspeechRecognition.start();\nvar intervalId;\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  var $button1 = document.getElementById(\"button1\");\n  var $result = document.getElementById(\"result\");\n  var $main = document.getElementById(\"main\");\n  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;\n\n  if (typeof SpeechRecognition === \"undefined\") {\n    $button1.remove();\n    var message = document.getElementById(\"message\");\n    message.removeAttribute(\"hidden\");\n    message.setAttribute(\"aria-hidden\", \"false\");\n  } else {\n    // good stuff to come here \n    var listening = false;\n    var recognition = new SpeechRecognition();\n\n    var start = function start() {\n      recognition.start();\n      $button1.textContent = \"Stop listening\";\n      $main.classList.add(\"speaking\");\n      remove_all_response();\n      intervalId = setInterval(get_talk, 1500);\n    };\n\n    var stop = function stop() {\n      recognition.stop();\n      $button1.textContent = \"Start listening\";\n      $main.classList.remove(\"speaking\");\n      clearInterval(intervalId);\n      last_talk = \"\";\n    };\n\n    var onResult = function onResult(event) {\n      $result.innerHTML = \"\";\n\n      var _iterator = _createForOfIteratorHelper(event.results),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var res = _step.value;\n          var text = document.createTextNode(res[0].transcript);\n          var p = document.createElement(\"p\");\n\n          if (res.isFinal) {\n            p.classList.add(\"final\");\n          }\n\n          p.appendChild(text);\n          $result.appendChild(p);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    };\n\n    recognition.continuous = true;\n    recognition.interimResults = true;\n    recognition.addEventListener(\"result\", onResult);\n    $button1.addEventListener(\"click\", function () {\n      listening ? stop() : start();\n      listening = !listening;\n    });\n  }\n});\n/* talk words*/\n\nvar last_talk = \"\";\n\n//# sourceURL=webpack://js_test/./src/js/hello.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/hello.js"]();
/******/ 	
/******/ })()
;