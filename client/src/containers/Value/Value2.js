import React from "react";
import Value2Img from "assets/value2.svg";

class Value extends React.Component {
	render() {
		return (
			<div class="value2 section">
				<div>
					<h2>
						Value #2
					</h2>
					<p>
						We’re here to help you find more about Lupus and to receive the support that you require.
					</p>
				</div>
				<img src={Value2Img} alt="human brainstorming"/>
			</div>
		);
	}
}

export default Value;
