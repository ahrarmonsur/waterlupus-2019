import React from "react";
import Value3Img from "assets/value3.svg";

class Value extends React.Component {
	render() {
		return (
			<div class="value3 section">
				<img src={Value3Img} alt="human brainstorming"/>
				<div>
					<h2>
						Construisez votre communauté
					</h2>

					<p>
						Saviez-vous qu'environ <span className="highlight">1 Canadien sur 1000</span> a le lupus?
					</p>

					<p>
						Connectez-vous avec l'ensemble de la communauté et partagez vos expériences avec les personnes de votre voisinage pour mieux vous soutenir mutuellement.
					</p>

					<p className="highlight">
						Explorez la communauté maintenant ➜
					</p>
				</div>
			</div>
		);
	}
}

export default Value;
