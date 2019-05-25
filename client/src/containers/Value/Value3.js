import React from "react";
import Value3Img from "assets/value3.svg";

class Value extends React.Component {
	render() {
		return (
			<div class="value3 section">
				<img src={Value3Img} alt="human brainstorming"/>
				<div>
					<h2>
						Build your community
					</h2>

					<p>
						Did you know that about <span className="highlight">1 in 1000</span> Canadians have lupus?
					</p>

					<p>
						Connect with the community at large and share your experiences with others in your vicinity to better support each other.
					</p>

					<p className="highlight">
						Explore the community now ➜
					</p>
				</div>
			</div>
		);
	}
}

export default Value;
