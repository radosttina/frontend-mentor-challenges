import Counter from "../Counter";
import Acknowledgements from "./Acknowledgements";
import SocialMediaLinks from "./SocialMediaLinks";

import "./index.css";

const Layout = () => {
	return (
		<div className="layout">
			<header>
				<h1>We're launching soon</h1>
			</header>
			<main>
				<Counter />
			</main>
			<footer>
				<SocialMediaLinks />
				{/* <Acknowledgements /> */}
			</footer>
		</div>
	);
};

export default Layout;
