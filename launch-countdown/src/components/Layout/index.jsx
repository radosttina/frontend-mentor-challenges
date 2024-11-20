import SocialMediaLinks from "./SocialMediaLinks";

import "./index.css";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<header>
				<h1>We're launching soon</h1>
			</header>
			<main>{children}</main>
			<footer>
				<SocialMediaLinks />
			</footer>
		</div>
	);
};

export default Layout;
