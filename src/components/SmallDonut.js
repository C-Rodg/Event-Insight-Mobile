import React from "react";

const attendeeColors = [
	"#005045",
	"#C56826",
	"#5676ac",
	"#00796b",
	"#C5A726",
	"#375b99"
];

const SmallDonut = props => {
	const width = 76;
	const halfSize = width * 0.5;
	const strokeWidth = 10;
	const radius = halfSize - strokeWidth * 0.5;
	const circ = Math.PI * 2 * radius;
	const strokeVal = props.value * circ / 100;
	const dashVal = `${strokeVal}, ${circ}`;
	const rotateVal = `rotate(-90 ${halfSize},${halfSize})`;

	const color = attendeeColors[props.idx % attendeeColors.length];
	const textStyle = { textAnchor: "middle", fill: color };

	let delay = (props.idx + 1) * 0.5;
	if (delay > 3) {
		delay = 3;
	}

	const animation = `fill-donut 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) ${delay}s forwards`;

	const dashStyles = {
		strokeDashoffset: strokeVal,
		animation
	};

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
					stroke={color}
					strokeWidth={strokeWidth}
					strokeDasharray={dashVal}
					transform={rotateVal}
					style={dashStyles}
				/>
				<text
					x={halfSize + 2}
					y={halfSize + 8}
					className="donut-number"
					style={textStyle}
				>
					<tspan style={{ fontSize: "21px" }}>
						{props.value}
					</tspan>
					<tspan style={{ fontSize: "14px" }}>%</tspan>
				</text>
			</svg>
		</div>
	);
};

export default SmallDonut;
