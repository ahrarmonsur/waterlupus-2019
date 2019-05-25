import React from "react";
import Value1Img from "assets/value1.svg";

class Value extends React.Component {
	render() {
		return (
			<div class="value1 section">
				<img src={Value1Img} alt="human brainstorming"/>
				<div>
					<h2>
						Value #1
					</h2>
					<p>
						We’re here to help you find more about Lupus and to receive the support that you require.
					</p>
				</div>
			</div>
		);
	}
}

export default Value;
