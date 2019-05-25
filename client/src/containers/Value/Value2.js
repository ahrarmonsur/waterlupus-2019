import React from "react";
import Value2Img from "assets/value2.svg";

class Value extends React.Component {
	render() {
		return (
			<div class="value2 section">
				<div>
					<h2>
						Connectez-vous avec des experts
					</h2>

					<p>
						Où que vous soyez, contactez des experts pour en savoir plus sur la vie avec le lupus.
					</p>

					<p>
						Recevez des mises à jour fréquentes sur la disponibilité de vos spécialistes et sur la meilleure façon de les contacter.
					</p>

					<p className="highlight">
						Explorez vos options de soins ➜
					</p>
				</div>
				<img src={Value2Img} alt="human brainstorming"/>
			</div>
		);
	}
}

export default Value;
