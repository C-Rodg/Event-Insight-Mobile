import React from "react";
import DonutChart from "./DonutChart";
import SmallDonut from "./SmallDonut";

import { getRegistrantData } from "../../mock/mock";
import AttendeeTypeBox from "./AttendeeTypeBox";

const generateAttendeeRows = data => {
	return data.map((atType, idx) => {
		return <AttendeeTypeBox atData={atType} key={idx} idx={idx} />;
	});
};

const DashboardContent = () => {
	const { total, attendeeTypes } = getRegistrantData();

	return (
		<div className="dashboard-content">
			<div className="dashboard-card">
				<div className="dashboard-summary">
					<DonutChart
						donutLabel="Attended"
						value={Math.floor(
							(total.preRegHere + total.walkInsHere) /
								(total.preRegTotal + total.walkInsHere) *
								100
						)}
						strokeWidth={10}
						size={280}
						color="#113470"
					/>
					<div className="summary-content">
						<div className="total-attended">
							{total.preRegHere + total.walkInsHere} attended
						</div>
						<div className="sub-title prereg-attended">
							{total.preRegHere} / {total.preRegTotal} pre-registered ({Math.floor(total.preRegHere / total.preRegTotal * 100)}%)
						</div>
						<div className="sub-title walkins-attended">
							{total.walkInsHere} walk-ins
						</div>
					</div>
				</div>
				{generateAttendeeRows(attendeeTypes)}
			</div>
		</div>
	);
};

export default DashboardContent;
