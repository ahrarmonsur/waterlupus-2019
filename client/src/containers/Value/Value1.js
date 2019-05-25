import React from "react";
import Value1Img from "assets/value1.svg";

class Value extends React.Component {
	render() {
		return (
			<div class="value1 section">
				<img src={Value1Img} alt="human brainstorming"/>
				<div>
					<h2>
						Ressources financières personnalisées
					</h2>
					<p>
						Le soutien financier peut varier d’un individu à l’autre et d’une province ou d’un territoire à l’autre.
					</p>
					<p>
						Nous pouvons vous aider à trouver des ressources financières adaptées à vos besoins et à recevoir des conseils sur mesure pour augmenter vos chances d'obtenir de l'aide.
					</p>

					<p className="highlight">
						Explorez des outils pour financer votre condition ➜
					</p>

				</div>
			</div>
		);
	}
}

export default Value;
