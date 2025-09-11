"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _UlItem = _interopRequireDefault(require("./components/UlItem.tsx"));
var _catPlaceholder = _interopRequireDefault(require("./assets/cat-placeholder.jfif"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function App() {
  var initialTasks = [];
  var emptyTask = {
    task: "",
    description: "",
    tags: ""
  };
  var _useState = (0, _react.useState)(initialTasks),
    _useState2 = _slicedToArray(_useState, 2),
    tasks = _useState2[0],
    setTasks = _useState2[1];
  var _useState3 = (0, _react.useState)(emptyTask),
    _useState4 = _slicedToArray(_useState3, 2),
    newTask = _useState4[0],
    setNewTask = _useState4[1];
  var _useState5 = (0, _react.useState)(initialTasks),
    _useState6 = _slicedToArray(_useState5, 2),
    completedTasks = _useState6[0],
    setCompletedTasks = _useState6[1];
  var handleTaskChange = function handleTaskChange(e, field) {
    setNewTask(_objectSpread(_objectSpread({}, newTask), {}, _defineProperty({}, field, e.target.value)));
  };
  var handleAddTask = function handleAddTask() {
    setTasks(function (t) {
      return [].concat(_toConsumableArray(t), [newTask]);
    });
    setNewTask(emptyTask);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("div", {
    className: "weather"
  }, /*#__PURE__*/React.createElement("div", {
    className: "weather__main"
  }), /*#__PURE__*/React.createElement("div", {
    className: "weather__details"
  })), /*#__PURE__*/React.createElement("div", {
    className: "catPic"
  }, /*#__PURE__*/React.createElement("h2", null, " ", /*#__PURE__*/React.createElement("i", null), "Daily Cat"), /*#__PURE__*/React.createElement("img", {
    src: _catPlaceholder.default,
    alt: "Cat of the Day"
  }), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null), "Photo of the Day")), /*#__PURE__*/React.createElement(_UlItem.default, {
    className: "toDo",
    TaskItemType: tasks,
    title: "Active Tasks",
    iconClassName: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "addTask"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", null), "Add New Task"), /*#__PURE__*/React.createElement("div", {
    className: "addTask__input"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "newTask"
  }, "Task"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "newTask",
    placeholder: "Enter task...",
    value: newTask.task,
    onChange: function onChange(e) {
      return handleTaskChange(e, "task");
    }
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "taskDescription"
  }, "Description"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "taskDescription",
    placeholder: "Enter task description...",
    value: newTask.description,
    onChange: function onChange(e) {
      return handleTaskChange(e, "description");
    }
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "taskTag"
  }, "Tags"), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: "taskTag"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleAddTask
  }, "Add task"))), /*#__PURE__*/React.createElement(_UlItem.default, {
    className: "completedTasks",
    TaskItemType: completedTasks,
    title: "Completed Tasks",
    iconClassName: ""
  }));
}
;
var _default = exports.default = App;