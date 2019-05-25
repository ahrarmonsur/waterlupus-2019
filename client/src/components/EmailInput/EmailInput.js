import React from "react";

import './EmailInput.sass';

class EmailInput extends React.Component {
	render() {
		return (
			<form action="" className="emailInput">
				<input type="text" placeholder="Enter your email address" className="email"/>
				<input type="submit" value="Get Started" className="submitButton"/>
			</form>
		);
	}
}

export default EmailInput;
