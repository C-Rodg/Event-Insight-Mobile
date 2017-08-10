import React from "react";
import DonutChart from "./DonutChart";

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
						<div className="prereg-attended">
							180 / 300 pre-registered (60%)
						</div>
						<div className="walkins-attended">20 walk-ins</div>
					</div>
				</div>
				<div className="summary-attendee" />
			</div>
		</div>
	);
};

export default DashboardContent;
