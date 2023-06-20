"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clearItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dragUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _checkBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _assets_refresh_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _assets_back_space_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _assets_more_vert_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _assets_bin_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _addItem_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _deleteItem_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21);
/* harmony import */ var _getListDom_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22);













const initializeTodoListApp = () => {
  const inputField = document.querySelector('.add-item');

  const todoListItems = document.querySelectorAll('#todo-list li');
  todoListItems.forEach((listItem) => {
    listItem.addEventListener('click', (event) => {
      (0,_checkBox_js__WEBPACK_IMPORTED_MODULE_2__["default"])(event, inputField, _assets_more_vert_png__WEBPACK_IMPORTED_MODULE_5__, _assets_bin_icon_png__WEBPACK_IMPORTED_MODULE_6__);
    });
  });

  const todoList = document.getElementById('todo-list');
  todoList.addEventListener('click', (event) => {
    (0,_checkBox_js__WEBPACK_IMPORTED_MODULE_2__["default"])(event, inputField, _assets_more_vert_png__WEBPACK_IMPORTED_MODULE_5__, _assets_bin_icon_png__WEBPACK_IMPORTED_MODULE_6__);
  });

  const renderTodoListItems = () => {
    const items = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_9__.getListFromStorage)(); // Retrieve items from storage
    items.forEach((todoItem, index) => {
      const listItem = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('gray-checkbox');
      checkbox.checked = todoItem.completed;
      checkbox.classList.add('gray-checkbox');
      checkbox.addEventListener('change', _checkBox_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

      const label = document.createElement('label');
      label.textContent = todoItem.description;

      const moreIconElement = document.createElement('img');
      moreIconElement.src = _assets_more_vert_png__WEBPACK_IMPORTED_MODULE_5__;
      moreIconElement.alt = 'More Icon';
      moreIconElement.classList.add('more-icon');
      moreIconElement.draggable = true;
      moreIconElement.addEventListener('dragstart', _dragUtils_js__WEBPACK_IMPORTED_MODULE_1__.handleDragStart);

      listItem.appendChild(checkbox);
      listItem.appendChild(label);
      listItem.appendChild(moreIconElement);
      todoList.appendChild(listItem);
      todoItem.index = index + 1;
      checkbox.addEventListener('change', (event) => {
        const listItem = event.target.closest('li');
        const label = listItem.querySelector('label');

        if (event.target.checked) {
          label.classList.add('crossed-out');
          listItem.classList.add('completed');
        } else {
          label.classList.remove('crossed-out');
          listItem.classList.remove('completed');
        }

        (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_9__.saveListToStorage)((0,_getListDom_js__WEBPACK_IMPORTED_MODULE_11__["default"])()); // Update storage after the checkbox state changes
      });

      listItem.addEventListener('click', () => {
        listItem.contentEditable = true;
        listItem.focus();
        moreIconElement.src = _assets_bin_icon_png__WEBPACK_IMPORTED_MODULE_6__;
        moreIconElement.alt = 'Dustbin Icon';
        listItem.classList.add('selected');
        listItem.classList.remove('edit-mode');
      });

      listItem.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          listItem.contentEditable = false;
          moreIconElement.src = _assets_more_vert_png__WEBPACK_IMPORTED_MODULE_5__;
          moreIconElement.alt = 'More Icon';
          listItem.classList.remove('selected');
          listItem.classList.add('edit-mode');

          // Update the description in the storage
          const index = Array.from(todoList.children).indexOf(listItem);
          const updatedList = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_9__.getListFromStorage)();
          updatedList[index].description = listItem.querySelector('label').textContent;
          (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_9__.saveListToStorage)(updatedList);
        }
      });

      moreIconElement.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from propagating to the list item
        if (moreIconElement.src === _assets_bin_icon_png__WEBPACK_IMPORTED_MODULE_6__) {
          (0,_deleteItem_js__WEBPACK_IMPORTED_MODULE_10__["default"])(listItem);
          (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_9__.saveListToStorage)((0,_getListDom_js__WEBPACK_IMPORTED_MODULE_11__["default"])()); // Update storage after an item is removed
        }
      });
    });
  };

  renderTodoListItems();
  // card header
  const header = document.querySelector('.card-header');
  const refreshIconElement = document.createElement('img');
  refreshIconElement.src = _assets_refresh_icon_png__WEBPACK_IMPORTED_MODULE_3__;
  refreshIconElement.alt = 'Refresh icon';
  refreshIconElement.classList.add('refresh-icon');
  header.appendChild(refreshIconElement);
  // backspace image
  const backspaceIconElement = document.createElement('img');
  backspaceIconElement.src = _assets_back_space_icon_png__WEBPACK_IMPORTED_MODULE_4__;
  backspaceIconElement.alt = 'Backspace icon';
  backspaceIconElement.classList.add('backspace-icon');
  // Input field image
  inputField.appendChild(backspaceIconElement);
  // Add event listener for the Enter key press
  inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      (0,_addItem_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
    }
  });
  // Drag | drop
  todoList.addEventListener('dragover', _dragUtils_js__WEBPACK_IMPORTED_MODULE_1__.handleDragOver);
  todoList.addEventListener('dragenter', _dragUtils_js__WEBPACK_IMPORTED_MODULE_1__.handleDragEnter);
  todoList.addEventListener('dragleave', _dragUtils_js__WEBPACK_IMPORTED_MODULE_1__.handleDragLeave);
  todoList.addEventListener('drop', _dragUtils_js__WEBPACK_IMPORTED_MODULE_1__.handleDrop);
  todoList.addEventListener('dragend', _dragUtils_js__WEBPACK_IMPORTED_MODULE_1__.handleDragEnd);

  const clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', () => {
    (0,_clearItems_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_9__.saveListToStorage)((0,_getListDom_js__WEBPACK_IMPORTED_MODULE_11__["default"])()); // Update storage after clearing completed items
  });
};

initializeTodoListApp();


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const clearCompletedItems = () => {
  const completedItems = Array.from(
    document.querySelectorAll('.list-items li input[type="checkbox"]:checked'),
  );

  completedItems
    .map((item) => item.closest('li'))
    .filter((li) => li)
    .forEach((li) => {
      li.remove();
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompletedItems);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleDragEnd: () => (/* binding */ handleDragEnd),
/* harmony export */   handleDragEnter: () => (/* binding */ handleDragEnter),
/* harmony export */   handleDragLeave: () => (/* binding */ handleDragLeave),
/* harmony export */   handleDragOver: () => (/* binding */ handleDragOver),
/* harmony export */   handleDragStart: () => (/* binding */ handleDragStart),
/* harmony export */   handleDrop: () => (/* binding */ handleDrop)
/* harmony export */ });
function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  event.target.classList.add('dragging');
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDragEnter(event) {
  event.target.classList.add('drag-over');
}

function handleDragLeave(event) {
  event.target.classList.remove('drag-over');
}

function handleDrop(event) {
  event.preventDefault();
  const itemId = event.dataTransfer.getData('text/plain');
  const item = document.getElementById(itemId);
  const target = event.target.closest('li');

  if (target && item) {
    target.classList.remove('drag-over');
    target.before(item);
  }
}

function handleDragEnd(event) {
  event.target.classList.remove('dragging');
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const handleCheckboxChange = (event) => {
  const listItem = event.target.closest('li');
  const label = listItem.querySelector('label');

  if (event.target.checked) {
    label.classList.add('crossed-out');
    listItem.classList.remove('selected');
  } else {
    label.classList.remove('crossed-out');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleCheckboxChange);


/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a19d2ef516ded0aa5e4.png";

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba44d9e97bc7fa267a05.png";

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59c18bd77893b72a74f3.png";

/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a92fd041afbe0f2cf744.png";

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 9 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 10 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 11 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 13 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 14 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 15 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(6), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(7), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* project css styles */

:root {
  --white-bg-color: #fff;
  --card-bg: #ccc;
  --body-background: #fff;
  --card-background: #fff;
  --card-box-shadow: rgba(0, 0, 0, 0.2);
  --card-header-text: #797878;
  --clear-completed-background: #e1e1e1;
  --clear-completed-text-color: #8e8e8e;
  --card-background-color: #ccc;
  --grey-text-color: #ccc;
  --dark-grey-icon-color: #919090;
  --list-item-color: #424242;
  --edit-item-color: #ff0;
  --list-item-drag-color: #d6d5d5;
  --crossed-text-color: #9b9999;
  --drag-over-bordr-color: #c9d3e0;
}

body {
  background: var(--body-background);
  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.card {
  position: relative;
  width: 500px;
  margin: 0 auto;
  border: 1px solid var(--card-bg);
  border-radius: 4px;
  box-shadow: 0 2px 4px var(--card-box-shadow);
  padding: 16px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  background: var(--card-background);
  overflow: hidden;
  max-height: 400px;
  transition: max-height 0.3s ease;
  padding-bottom: 40px;
}

.card.expanded {
  max-height: none;
}

.card-body {
  margin-bottom: 2px;
  overflow-y: auto;
  margin-top: auto;
  flex-grow: 1;
}

/* card header */
.card-header {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
}

.card-header h3 {
  margin-right: 10px;
  font-size: 18px;
  color: var(--card-header-text);
}

.card-header::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--card-background-color);
  bottom: -10px;
}

.header-icons {
  margin-left: auto;
}

.refresh-icon {
  width: 20px;
  height: 20px;
  right: 0;
}

/* card header END */

/* Input field   */
.add-item {
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  position: relative;
  margin-bottom: 20px;
}

.add-item input {
  width: 100%;
  border: none;
  outline: none;
  line-height: 50px;
  font-size: 16px;
}

.add-item::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--grey-text-color);
  z-index: 1;
}

input[type="text"] {
  font-style: italic;
}

.backspace-icon {
  width: 20px;
  margin-left: 10px;
  fill: var(--dark-grey-icon-color);
}

.add-item .backspace-icon {
  width: 20px;
  margin-left: 10px;
  position: relative;
  z-index: 1;
}

.checkbox-icon {
  width: 16px;
  height: 16px;
}

/* Input field END   */

/* list items  */
.list-items {
  display: flex;
  cursor: pointer;
  color: var(--list-item-color);
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  padding-left: 0;
  margin: 0;
  margin-bottom: 0;
  overflow: visible;
}

.list-items li {
  display: flex;
  align-items: center;
  width: 100%;
  line-height: 25px;
  color: var(--list-item-color);
  padding: 10px;
  justify-content: space-between;
  margin-bottom: 40px;
}

.list-items li:not(:last-child) {
  border-bottom: 1px solid var(--grey-text-color);
  margin-bottom: 10px;
  padding-bottom: 10px;
}

.list-items li .more-icon {
  width: 20px;
  margin-right: -10px;
  transition: src 0.3s ease;
}

.list-items li:hover .more-icon {
  cursor: move;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.list-items li .checkbox {
  margin-right: 4px;
}

.list-items li label {
  margin-right: 200px;
  overflow: hidden;
  margin-left: 8px;
  white-space: normal;
  width: 100%;
}

.gray-checkbox {
  background-color: rgb(158, 158, 158);
}

.list-items li.dragging {
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  opacity: 0.5;
}

.drag-over {
  border: 2px solid var(--drag-over-bordr-color);
}

.list-items .selected {
  background-color: var(--edit-item-color);
  border-radius: 0;
}

.list-items .edit-mode {
  background-color: var(--white-bg-color);
}

.edit-input {
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
}

.list-items li label.crossed-out {
  text-decoration: line-through;
  color: var(--grey-text-color);
}

.list-items li.selected .more-icon {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  transition: background-image 0.3s ease;
}

/* list items  END */

/* Input field   END */

/* clear items footer bottom */
.clear-completed {
  cursor: pointer;
  color: var(--clear-completed-text-color);
  background-color: var(--clear-completed-background);
  justify-content: center;
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 50px 0 0;
  padding: 20px 0;
  font-weight: normal;
  font-size: 20px;
  display: flex;
}

.clear-completed h5 {
  margin: 0;
}

/* clear items footer bottom END */

.list-items li.drag-over {
  background-color: var(--list-item-drag-color);
}

.dragging {
  cursor: move;
  transition: cursor;
}

#todo-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  padding-left: 0;
  margin: 0;
  overflow: visible;
}

#todo-list li {
  display: flex;
  align-items: center;
  width: 100%;
  line-height: 25px;
  color: var(--list-item-color);
  padding: 10px;
  justify-content: space-between;
  margin-bottom: 40px;
}

#todo-list li:not(:last-child) {
  border-bottom: 1px solid var(--grey-text-color);
  margin-bottom: 10px;
  padding-bottom: 10px;
}

#todo-list li .more-icon {
  width: 20px;
  margin-right: -10px;
  transition: src 0.3s ease;
}

#todo-list li:hover .more-icon {
  cursor: move;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#todo-list li .checkbox {
  margin-right: 4px;
}

#todo-list li label {
  margin-right: 200px;
  overflow: hidden;
  margin-left: 8px;
  white-space: normal;
  width: 100%;
}

#todo-list li.dragging {
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  opacity: 0.5;
}

#todo-list .selected {
  background-color: var(--edit-item-color);
}

#todo-list .edit-mode {
  background-color: var(--white-bg-color);
}

#todo-list li label.crossed-out {
  text-decoration: line-through;
  color: var(--crossed-text-color);
}

#todo-list li.selected .more-icon {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  transition: background-image 0.3s ease;
}

.card.expanded #todo-list {
  max-height: none;
}

/* card body END */
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 16 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 17 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 18 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dragUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _checkBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _assets_more_vert_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _assets_bin_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);







const addItemToTodoList = () => {
  const inputField = document.querySelector('.add-item input');
  const inputValue = inputField.value.trim();

  if (inputValue) {
    const todoList = document.getElementById('todo-list');
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('gray-checkbox');

    const label = document.createElement('label');
    label.textContent = inputValue;

    const moreIconElement = document.createElement('img');
    moreIconElement.src = _assets_more_vert_png__WEBPACK_IMPORTED_MODULE_2__;
    moreIconElement.alt = 'More Icon';
    moreIconElement.classList.add('more-icon');
    moreIconElement.draggable = true;
    moreIconElement.addEventListener('dragstart', _dragUtils_js__WEBPACK_IMPORTED_MODULE_0__.handleDragStart);

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(moreIconElement);
    todoList.appendChild(listItem);

    listItem.addEventListener('click', (event) => {
      (0,_checkBox_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event, inputField, _assets_more_vert_png__WEBPACK_IMPORTED_MODULE_2__, _assets_bin_icon_png__WEBPACK_IMPORTED_MODULE_3__);
    });

    inputField.value = ''; // Clear the input field

    const updatedList = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_5__.getListFromStorage)();
    const newItem = {
      description: inputValue,
      completed: false,
      index: updatedList.length + 1,
    };
    updatedList.push(newItem);
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_5__.saveListToStorage)(updatedList);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addItemToTodoList);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getListFromStorage: () => (/* binding */ getListFromStorage),
/* harmony export */   saveListToStorage: () => (/* binding */ saveListToStorage)
/* harmony export */ });
const storageKey = 'todolist';

const getListFromStorage = () => {
  const items = JSON.parse(localStorage.getItem(storageKey));
  if (items) {
    return items.map((item, index) => ({ ...item, index: index + 1 }));
  }
  return [];
};

const saveListToStorage = (items) => {
  const itemsToSave = items.map(({ index, ...rest }) => rest);
  localStorage.setItem(storageKey, JSON.stringify(itemsToSave));
};


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _getListDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);



const deleteItem = (listItem) => {
  listItem.remove();
  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.saveListToStorage)(_getListDom_js__WEBPACK_IMPORTED_MODULE_1__["default"]); // Update storage after an item is removed
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteItem);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getListFromDOM = () => {
  const todoList = document.getElementById('todo-list');
  const listItems = Array.from(todoList.querySelectorAll('li'));
  const items = listItems.map((listItem) => {
    const checkbox = listItem.querySelector('input[type="checkbox"]');
    const label = listItem.querySelector('label');
    return {
      description: label.textContent,
      completed: checkbox.checked,
    };
  });
  return items;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getListFromDOM);


/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);