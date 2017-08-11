import React from "react";
import SmallDonut from "./SmallDonut";

const AttendeeTypeBox = ({ atData, idx }) => {
	const totalPercent = Math.floor(
		(atData.preRegHere + atData.walkInsHere) /
			(atData.preRegTotal + atData.walkInsHere) *
			100
	);
	return (
		<div className="summary-attendee">
			<SmallDonut value={totalPercent} idx={idx} />
			<div className="attendee-info">
				<div className="attendee-title">
					{atData.type}
				</div>
				<div className="attendee-total">
					{atData.preRegHere + atData.walkInsHere} attended
				</div>
				<div className="attendee-sub">
					{atData.preRegHere} / {atData.preRegTotal} pre-registered ({Math.floor(atData.preRegHere / atData.preRegTotal * 100)}%)
				</div>
				<div className="attendee-sub">
					{atData.walkInsHere} walk-ins
				</div>
			</div>
		</div>
	);
};

export default AttendeeTypeBox;
