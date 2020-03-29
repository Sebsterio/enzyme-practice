import React from "react";
import "./header.scss";
import Logo from "./../../assets/react-logo.png";

const Header = props => {
	return (
		<header data-test="Header">
			<div className="wrap">
				<div className="logo">
					<img data-test="logoIMG" src={Logo} alt="Logo" />
				</div>
			</div>
		</header>
	);
};

export default Header;
