
import React, { Component } from 'react';
import "./TextInput.scss";
import "../../stylesheets/app.css"
class TextInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultClass: 'notifywrapper'
		}
	}
	render() {
		let notifyClass, notifyPoistion, typeValue, that = this;
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
		let defaultClass = "notifywrapper";
		if (this.props.autoClose) {
			setTimeout(function () {

				that.setState({
					defaultClass: 'notifywrapper__none'
				})

			}, Number(this.props.autoClose))
		} else {
			setTimeout(function () {

				that.setState({
					defaultClass: 'notifywrapper__none'
				})

			}, 3000)
		}

		notifyClass = `${this.state.defaultClass}  ${notifyPoistion}  ${typeValue}`;
		return (
			<div>
				<div className={notifyClass} >
					{this.props.message}
				</div>
			</div>
		);
	}
}



export default TextInput;
