import React from "react";

import './EmailInput.sass';

class EmailInput extends React.Component {
	render() {
		return (
			<form action="" className="emailInput">
				<input type="text" placeholder="Entrez votre adresse email" className="email formInput"/>
				<input type="submit" value="Commencer" className="submitButton"/>
			</form>
		);
	}
}

export default EmailInput;
