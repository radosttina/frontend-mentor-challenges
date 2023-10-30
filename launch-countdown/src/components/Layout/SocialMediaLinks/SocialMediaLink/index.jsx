import "./index.css";

const SocialMediaLink = ({ url, icon }) => {
	return (
		<a class="social-media-link" href={url}>
			{icon}
		</a>
	);
};

export default SocialMediaLink;
