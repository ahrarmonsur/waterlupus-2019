import React from "react";
import Value1Img from "assets/value1.svg";

class Value extends React.Component {
	render() {
		return (
			<div class="value1 section">
				<img src={Value1Img} alt="human brainstorming"/>
				<div>
					<h2>
						Personalized Financial Resources
					</h2>
					<p>
						Financial support can vary between individuals and across provinces/territories.
					</p>
					<p>
						We can help you find financial resources catered to you and recieve tailored advice to increase your chances of getting support.
					</p>

					<p className="highlight">
						Explore tools to finance your condition ➜
					</p>

				</div>
			</div>
		);
	}
}

export default Value;
