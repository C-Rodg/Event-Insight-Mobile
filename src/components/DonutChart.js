import React from "react";

const DonutChart = props => {
	const halfSize = props.size * 0.5;
	const radius = halfSize - props.strokeWidth * 0.5;
	const circumference = 2 * Math.PI * radius;
	const strokeVal = props.value * circumference / 100;
	const dashVal = `${strokeVal}, ${circumference}`;
	const rotateVal = `rotate(-90 ${halfSize},${halfSize})`;
	const trackStyle = { strokeWidth: props.strokeWidth };
	const indicatorStyle = {
		strokeWidth: props.strokeWidth,
		strokeDasharray: dashVal,
		stroke: props.color,
		strokeDashoffset: strokeVal,
		animation: `fill-donut 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards`
	};
	const textStyle = { textAnchor: "middle", fill: props.color };

	return (
		<svg width={props.size} height={props.size} className="donut-chart">
			<circle
				className="donut-chart-track"
				r={radius}
				cx={halfSize}
				cy={halfSize}
				transform={rotateVal}
				style={trackStyle}
			/>
			<circle
				className="donut-chart-indicator"
				r={radius}
				cx={halfSize}
				cy={halfSize}
				transform={rotateVal}
				style={indicatorStyle}
			/>
			<text
				x={halfSize}
				y={halfSize + 35}
				style={textStyle}
				className="donut-chart-text"
			>
				<tspan className="donut-chart-text-val" x={halfSize + 12}>
					{props.value}
				</tspan>
				<tspan className="donut-chart-text-percent">%</tspan>
				<tspan
					className="donut-chart-text-label"
					x={halfSize}
					y={halfSize + 72}
				>
					{props.donutLabel}
				</tspan>
			</text>
		</svg>
	);
};

DonutChart.defaultProps = {
	donutLabel: "",
	value: 0,
	size: 150,
	strokeWidth: 25,
	color: "#00897b",
	animationTime: "1"
};

export default DonutChart;
