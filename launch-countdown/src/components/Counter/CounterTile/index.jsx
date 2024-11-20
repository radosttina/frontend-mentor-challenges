import { memo } from "react";
import "./index.css";

const format = (count) => {
	const str = "0" + count;
	return str.substr(str.length - 2);
};

const CounterTile = ({ current, next, durationType }) => {
	return (
		<div className={`${current !== next ? "animated" : ""} counter-tile`}>
			<div key={Math.random()} className="facet-container">
				<div className="next facet facet-top">{format(next)}</div>
				<div className="next facet facet-bottom">{format(next)}</div>

				<div className="current facet facet-top">{format(current)}</div>
				<div className="current facet facet-bottom">
					{format(current)}
				</div>
			</div>
			<h2 className="duration">{durationType}</h2>
		</div>
	);
};

export default memo(CounterTile);
