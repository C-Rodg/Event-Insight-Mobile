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
					<SmallDonut value={75} idx={0} />
					<div className="attendee-info">
						<div className="attendee-title">Partner</div>
						<div className="attendee-total">60 attended</div>
						<div className="attendee-sub">55 / 75 pre-registered (73%)</div>
						<div className="attendee-sub">5 walk-ins</div>
					</div>
				</div>
				<div className="summary-attendee">
					<SmallDonut value={19} idx={1} />
					<div className="attendee-info">
						<div className="attendee-title">Customer</div>
						<div className="attendee-total">35 attended</div>
						<div className="attendee-sub">28 / 175 pre-registered (16%)</div>
						<div className="attendee-sub">7 walk-ins</div>
					</div>
				</div>
				<div className="summary-attendee">
					<SmallDonut value={87} idx={2} />
					<div className="attendee-info">
						<div className="attendee-title">Prospective Developer</div>
						<div className="attendee-total">87 attended</div>
						<div className="attendee-sub">87 / 100 pre-registered (87%)</div>
						<div className="attendee-sub">0 walk-ins</div>
					</div>
				</div>
				<div className="summary-attendee">
					<SmallDonut value={53} idx={3} />
					<div className="attendee-info">
						<div className="attendee-title">Developer</div>
						<div className="attendee-total">25 attended</div>
						<div className="attendee-sub">23 / 45 pre-registered (51%)</div>
						<div className="attendee-sub">2 walk-ins</div>
					</div>
				</div>
				<div className="summary-attendee">
					<SmallDonut value={45} idx={4} />
					<div className="attendee-info">
						<div className="attendee-title">CEO</div>
						<div className="attendee-total">12 attended</div>
						<div className="attendee-sub">2 / 108 pre-registered (2%)</div>
						<div className="attendee-sub">10 walk-ins</div>
					</div>
				</div>
				<div className="summary-attendee">
					<SmallDonut value={3} idx={5} />
					<div className="attendee-info">
						<div className="attendee-title">C-Level</div>
						<div className="attendee-total">1 attended</div>
						<div className="attendee-sub">0 / 33 pre-registered (0%)</div>
						<div className="attendee-sub">1 walk-ins</div>
					</div>
				</div>
				<div className="summary-attendee">
					<SmallDonut value={11} idx={6} />
					<div className="attendee-info">
						<div className="attendee-title">Manager</div>
						<div className="attendee-total">0 attended</div>
						<div className="attendee-sub">0 / 13 pre-registered (0%)</div>
						<div className="attendee-sub">0 walk-ins</div>
					</div>
				</div>
				<div className="summary-attendee">
					<SmallDonut value={23} idx={7} />
					<div className="attendee-info">
						<div className="attendee-title">Upper Management</div>
						<div className="attendee-total">44 attended</div>
						<div className="attendee-sub">23 / 100 pre-registered (23%)</div>
						<div className="attendee-sub">11 walk-ins</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardContent;
