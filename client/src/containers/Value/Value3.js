import React from "react";
import Value3Img from "assets/value3.svg";

class Value extends React.Component {
	render() {
		return (
			<div class="value3 section">
				<img src={Value3Img} alt="human brainstorming"/>
				<div>
					<h2>
						Value #3
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
