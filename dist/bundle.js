/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = React;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var List_1 = __webpack_require__(5);
var KanbanBoard = (function (_super) {
    __extends(KanbanBoard, _super);
    function KanbanBoard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KanbanBoard.prototype.render = function () {
        return (React.createElement("div", { className: "app" },
            React.createElement(List_1.List, { id: "todo", title: "To Do", cards: this.props.cards.filter(function (card) { return card.status == "todo"; }) }),
            React.createElement(List_1.List, { id: "in-progress", title: "In Progress", cards: this.props.cards.filter(function (card) { return card.status == "in-progress"; }) }),
            React.createElement(List_1.List, { id: "done", title: "Done", cards: this.props.cards.filter(function (card) { return card.status == "done"; }) })));
    };
    return KanbanBoard;
}(React.Component));
exports.KanbanBoard = KanbanBoard;


/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var CheckList_1 = __webpack_require__(4);
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        return (React.createElement("div", { className: "card" },
            React.createElement("div", { className: "card__title" }, this.props.title),
            React.createElement("div", { className: "card_details" },
                this.props.description,
                React.createElement(CheckList_1.CheckList, { cardId: this.props.id, tasks: this.props.tasks }))));
    };
    return Card;
}(React.Component));
exports.Card = Card;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var CheckList = (function (_super) {
    __extends(CheckList, _super);
    function CheckList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckList.prototype.render = function () {
        var tasks = this.props.tasks.map(function (task) {
            return React.createElement("li", { className: "checklist__task" },
                React.createElement("input", { type: "checkbox", defaultChecked: task.done }),
                task.name,
                React.createElement("a", { href: "#", className: "checklist__task--remove" }));
        });
        return (React.createElement("div", { className: "checklist" },
            React.createElement("ul", null, tasks)));
    };
    return CheckList;
}(React.Component));
exports.CheckList = CheckList;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var Card_1 = __webpack_require__(3);
;
var List = (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.render = function () {
        var cards = this.props.cards.map(function (card) {
            return React.createElement(Card_1.Card, { id: card.id, key: card.id, title: card.title, description: card.description, tasks: card.tasks });
        });
        return (React.createElement("div", { className: "list" },
            React.createElement("h1", null, this.props.title),
            cards));
    };
    return List;
}(React.Component));
exports.List = List;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var KanbanBoard_1 = __webpack_require__(1);
var cardsList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the whole book",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book",
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    },
];
ReactDOM.render(React.createElement(KanbanBoard_1.KanbanBoard, { cards: cardsList }), document.getElementById('root'));


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map