import React from "react";

import "./Footer.sass";

import LinkedinIcon from "assets/LinkedIn.svg";
import FacebookIcon from "assets/Facebook.svg";
import TwitterIcon from "assets/Twitter.svg";
import InstagramIcon from "assets/Instagram.svg";

class Footer extends React.Component {
	render() {
		return (
			<div class="footer">
				<div className="innerContainer">
					<div className="socials">
						<img src={LinkedinIcon} alt="linkedin"/>
						<img src={FacebookIcon} alt="facebook"/>
						<img src={TwitterIcon} alt="twitter"/>
						<img src={InstagramIcon} alt="instragram"/>
					</div>
					<div className="footerLinks">
						<span>About Us</span>
						<span>Career</span>
						<span>FAQ</span>
						<span>Support Us</span>
					</div>
					<div className="languages">
						English &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; French
					</div>

				</div>
			</div>
		);
	}
}

export default Footer;
