import React from "react";
import DonutChart from "./DonutChart";
import SmallDonut from "./SmallDonut";

const DashboardContent = () => {
	return (
		<div className="dashboard-content">
			<div className="dashboard-card">
				<div className="dashboard-summary">
					<DonutChart
						donutLabel="Attended"
						value={63}
						strokeWidth={10}
						size={280}
						color="#113470"
					/>
					<div className="summary-content">
						<div className="total-attended">200 attended</div>
						<div className="sub-title prereg-attended">
							180 / 300 pre-registered (60%)
						</div>
						<div className="sub-title walkins-attended">20 walk-ins</div>
					</div>
				</div>
				<div className="summary-attendee">
					<SmallDonut />
					<div className="attendee-info">
						<div className="attendee-title">Partner</div>
						<div className="attendee-total">60 attended</div>
						<div className="attendee-sub">55 / 75 pre-registered (73%)</div>
						<div className="attendee-sub">5 walk-ins</div>
					</div>
				</div>
				<div className="summary-attendee">
					<SmallDonut />
					<div className="attendee-info">
						<div className="attendee-title">Customer</div>
						<div className="attendee-total">35 attended</div>
						<div className="attendee-sub">28 / 175 pre-registered (16%)</div>
						<div className="attendee-sub">7 walk-ins</div>
					</div>
				</div>
				<div className="summary-attendee">
					<SmallDonut />
					<div className="attendee-info">
						<div className="attendee-title">Prospective Developer</div>
						<div className="attendee-total">7 attended</div>
						<div className="attendee-sub">7 / 10 pre-registered (70%)</div>
						<div className="attendee-sub">0 walk-ins</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardContent;
