import React from "react";
import Humans1Img from "assets/humans_1.svg";

import "./Hero.sass";

import EmailInput from "components/EmailInput/EmailInput";

class Hero extends React.Component {
	render() {
		return (
			<div class="hero section">
				<div className="heroContent">
					<h2>
						Avoir le lupus ne signifie pas que vous devez vous en occuper seul.
					</h2>
					<p>
						Nous sommes ici pour vous aider à en apprendre davantage sur le lupus et à obtenir le soutien dont vous avez besoin.
					</p>
					<EmailInput/>
					<p>Avoir des questions? <span className="expertCTA">Parlez avec un expert.</span></p>

				</div>
				<img src={Humans1Img} alt="humans interacting"/>
			</div>
		);
	}
}

export default Hero;
