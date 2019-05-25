import React from "react";
import "./ContactForm.sass";

class ContactForm extends React.Component {
	render() {
		return (
			<div className="contactFormContainer section">
				<h2>Contact Us</h2>
				<div className="horizontalBar"></div>
				<p>
					Got feedback? Do not hesitate to contact us!
				</p>
				<form action="" className="contactForm">
					<div className="row1">
						<input type="text" placeholder="First Name" className="formInput"/>
						<input type="text" placeholder="Last Name" className="formInput"/>
					</div>
					<input type="text" placeholder="Enter your email address" className="formInput"/>
					<textarea  rows="10" placeholder="Write a message..." className="formInput"/>
					<button>Send</button>
				</form>
			</div>
		);
	}
}

export default ContactForm;
