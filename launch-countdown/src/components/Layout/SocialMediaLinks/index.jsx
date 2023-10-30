import SocialMediaLink from "./SocialMediaLink";
import IconFacebook from "./IconFacebook";
import IconPinterest from "./IconPinterest";
import IconInstagram from "./IconInstagram";

import "./index.css";

const SocialMediaLinks = () => {
	return (
		<div className="social-media-links-container">
			<SocialMediaLink
				url="https://facebook.com"
				icon={<IconFacebook />}
			/>
			<SocialMediaLink
				url="https://pinterest.com"
				icon={<IconPinterest />}
			/>
			<SocialMediaLink
				url="https://instagram.com"
				icon={<IconInstagram />}
			/>
		</div>
	);
};

export default SocialMediaLinks;
