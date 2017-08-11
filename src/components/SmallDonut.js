import React from "react";

const SmallDonut = props => {
	const testVal = 75;

	const width = 76;
	const halfSize = width * 0.5;
	const strokeWidth = 8;
	const radius = halfSize - strokeWidth * 0.5;
	const circ = Math.PI * 2 * radius;
	const strokeVal = testVal * circ / 100;
	const dashVal = `${strokeVal}, ${circ}`;

	const rotateVal = `rotate(-90 ${halfSize},${halfSize})`;

	return (
		<div className="small-donut">
			<svg width="100%" height="100%" viewBox="0 0 76 76">
				<circle className="donut-hole" cx="38" cy="38" r="30" fill="#fff" />
				<circle
					className="donut-ring"
					cx={halfSize}
					cy={halfSize}
					r={radius}
					fill="transparent"
					stroke="#d2d3d4"
					strokeWidth={strokeWidth}
				/>
				<circle
					className="donut-segment"
					cx={halfSize}
					cy={halfSize}
					r={radius}
					fill="transparent"
					stroke="#ce4b99"
					strokeWidth={strokeWidth}
					strokeDasharray={dashVal}
					transform={rotateVal}
				/>
			</svg>
		</div>
	);
};

export default SmallDonut;
