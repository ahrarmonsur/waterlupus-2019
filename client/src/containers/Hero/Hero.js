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
						Having Lupus doesn’t mean that you have to face it alone.
					</h2>
					<p>
						We’re here to help you find more about Lupus and to receive the support that you require.
					</p>
					<EmailInput/>
					<p>Have questions? <span className="expertCTA">Talk to an Expert.</span></p>

				</div>
				<img src={Humans1Img} alt="humans interacting"/>
			</div>
		);
	}
}

export default Hero;
