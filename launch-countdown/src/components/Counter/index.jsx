import { useEffect, useReducer } from "react";
import CounterTile from "./CounterTile";

import "./index.css";

const DURATION_LENGTHS = Object.freeze({
	seconds: 1,
	minutes: 60 * 1,
	hours: 60 * 60 * 1,
	days: 24 * 60 * 60,
});

const NORMALIZERS = Object.freeze({
	seconds: (count) => Math.floor((count / DURATION_LENGTHS.seconds) % 60),
	minutes: (count) => Math.floor((count / DURATION_LENGTHS.minutes) % 60),
	hours: (count) => Math.floor((count / DURATION_LENGTHS.hours) % 24),
	days: (count) => Math.floor(count / DURATION_LENGTHS.days),
});

function reducer(state, action) {
	if (action.type === "decrement") {
		return {
			current: state.current - 1,
		};
	}

	throw Error("Unknown action.");
}

const Counter = ({ countdownTimeMs }) => {
	const [state, dispatch] = useReducer(reducer, {
		current: countdownTimeMs,
	});

	useEffect(() => {
		let iteration = 0;
		const interval = setInterval(() => {
			iteration++;

			if (iteration === countdownTimeMs) {
				clearInterval(interval);
				return;
			}

			dispatch({ type: "decrement" });
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [countdownTimeMs]);

	return (
		<div className="counter">
			<CounterTile
				current={NORMALIZERS.days(state.current)}
				next={NORMALIZERS.days(state.current - 1)}
				durationType="days"
			/>
			<CounterTile
				current={NORMALIZERS.hours(state.current)}
				next={NORMALIZERS.hours(state.current - 1)}
				durationType="hours"
			/>
			<CounterTile
				current={NORMALIZERS.minutes(state.current)}
				next={NORMALIZERS.minutes(state.current - 1)}
				durationType="minutes"
			/>
			<CounterTile
				current={NORMALIZERS.seconds(state.current)}
				next={NORMALIZERS.seconds(state.current - 1)}
				durationType="seconds"
			/>
		</div>
	);
};

export default Counter;
