import { useEffect, useState } from "react";
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

const Counter = () => {
	const countdownTime = 56655;

	const [current, setCurrent] = useState(countdownTime);

	useEffect(() => {
		let iteration = 0;
		const interval = setInterval(() => {
			iteration++;

			if (iteration === countdownTime) {
				clearInterval(interval);
			}

			setCurrent(() => countdownTime - iteration);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="counter">
			<CounterTile
				current={NORMALIZERS.days(current + DURATION_LENGTHS.days)}
				next={NORMALIZERS.days(current)}
				durationType="days"
			/>
			<CounterTile
				current={NORMALIZERS.hours(current + DURATION_LENGTHS.hours)}
				next={NORMALIZERS.hours(current)}
				durationType="hours"
			/>
			<CounterTile
				current={NORMALIZERS.minutes(
					current + DURATION_LENGTHS.minutes
				)}
				next={NORMALIZERS.minutes(current)}
				durationType="minutes"
			/>
			<CounterTile
				current={NORMALIZERS.seconds(
					current + DURATION_LENGTHS.seconds
				)}
				next={NORMALIZERS.seconds(current)}
				durationType="seconds"
			/>
		</div>
	);
};

export default Counter;
