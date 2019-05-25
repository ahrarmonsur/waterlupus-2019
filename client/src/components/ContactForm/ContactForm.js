import React from "react";
import "./ContactForm.sass";

class ContactForm extends React.Component {
	render() {
		return (
			<div className="contactFormContainer section">
				<h2>
					Contactez nous
				</h2>
				<div className="horizontalBar"></div>
				<p>
					Vous avez des commentaires? N'hésitez pas à nous contacter!
				</p>
				<form action="" className="contactForm">
					<div className="row1">
						<input type="text" placeholder="Prénom" className="formInput"/>
						<input type="text" placeholder="Nom de famille" className="formInput"/>
					</div>
					<input type="text" placeholder="Entrez votre adresse email" className="formInput"/>
					<textarea  rows="10" placeholder="Écrire un message..." className="formInput"/>
					<button>Envoyer</button>
				</form>
			</div>
		);
	}
}

export default ContactForm;
