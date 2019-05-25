import React from "react";
import Value2Img from "assets/value2.svg";

class Value extends React.Component {
	render() {
		return (
			<div class="value2 section">
				<div>
					<h2>
						Connect	With Experts
					</h2>

					<p>
						No matter where you are, connect with experts to find out more about living with lupus.
					</p>

					<p>
						Receive frequent updates on the availability of your specialists and how you can best reach them.
					</p>

					<p className="highlight">
						Explore your options for care ➜
					</p>
				</div>
				<img src={Value2Img} alt="human brainstorming"/>
			</div>
		);
	}
}

export default Value;
