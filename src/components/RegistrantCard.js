import React from "react";

const RegistrantCard = ({ onCloseRegistrant }) => {
	return (
		<div className="registrant-card">
			<div className="card-header attended">
				<div className="header-info">
					<div className="info-name text-nowrap">James Tungsten-Walker</div>
					<div className="info-company text-nowrap">
						Disney WorldWide Solutions, Inc.
					</div>
					<div className="info-email text-nowrap">
						jtungstenwalker@disneysolutions.org
					</div>
					<div className="info-status text-nowrap">Not Checked-in</div>
				</div>
				<div className="header-close" onClick={onCloseRegistrant}>
					<i className="material-icons">close</i>
				</div>
			</div>

			<div className="card-body">
				<div className="card-body-data reg-data">
					<div className="card-body-data-title">Registrant Data</div>
					<div className="card-body-data-text">Reg data here...</div>
				</div>
				<div className="card-body-data session-data">
					<div className="card-body-data-title">Sessions Attended (6)</div>
					<div className="card-body-data-text">Sessions data here...</div>
				</div>
				<div className="card-body-data exhibitor-data">
					<div className="card-body-data-title">Exhibitors Visited (4)</div>
					<div className="card-body-data-text">Exhibitors here...</div>
				</div>
				<div className="card-body-data feedback-data">
					<div className="card-body-data-title">Feedback (2)</div>
					<div className="card-body-data-text">Feedback here...</div>
				</div>
			</div>
		</div>
	);
};

export default RegistrantCard;
