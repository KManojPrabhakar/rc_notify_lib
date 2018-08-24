var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import "./Toastify.scss";
import "../../src/stylesheets/app.css";

var Toastify = function (_Component) {
	_inherits(Toastify, _Component);

	function Toastify(props) {
		_classCallCheck(this, Toastify);

		var _this = _possibleConstructorReturn(this, (Toastify.__proto__ || Object.getPrototypeOf(Toastify)).call(this, props));

		_this.state = {
			defaultClass: 'notifywrapper'
		};
		return _this;
	}

	_createClass(Toastify, [{
		key: "render",
		value: function render() {
			var notifyClass = void 0,
			    notifyPoistion = void 0,
			    typeValue = void 0,
			    that = this;
			if (this.props.positionValue) {
				notifyPoistion = "notifywrapper__" + this.props.positionValue;
			} else {
				notifyPoistion = "notifywrapper__topright";
			}
			if (this.props.notifyType) {
				typeValue = "notifywrapper__" + this.props.notifyType;
			} else {
				typeValue = "notifywrapper__success";
			}
			var defaultClass = "notifywrapper";
			if (this.props.autoClose) {
				setTimeout(function () {

					that.setState({
						defaultClass: 'notifywrapper__none'
					});
				}, Number(this.props.autoClose));
			} else {
				setTimeout(function () {

					that.setState({
						defaultClass: 'notifywrapper__none'
					});
				}, 3000);
			}

			notifyClass = this.state.defaultClass + "  " + notifyPoistion + "  " + typeValue;
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ className: notifyClass },
					this.props.message
				)
			);
		}
	}]);

	return Toastify;
}(Component);

export default Toastify;