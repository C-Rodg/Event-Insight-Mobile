import React, { Component } from "react";

class RegistrantCard extends Component {
	constructor() {
		super();

		this.state = {
			openReg: false,
			openSessions: false,
			openExhibitors: false,
			openFeedback: false
		};
	}

	toggleOpen(prop) {
		this.setState({ [prop]: !this.state[prop] });
	}

	render() {
		const { registrant } = this.props;
		return (
			<div className="registrant-card">
				<div
					className={"card-header " + (registrant.Attended ? "attended" : "")}
				>
					<div className="header-info">
						<div className="info-name text-nowrap">
							{registrant.FirstName + " " + registrant.LastName}
						</div>
						<div className="info-company text-nowrap">
							{registrant.Company}
						</div>
						<div className="info-email text-nowrap">
							{registrant.Email}
						</div>
						<div className="info-status text-nowrap">
							{registrant.Attended
								? "Checked-In: " + registrant.FirstCheckInDateTime
								: "Not Checked-In"}
						</div>
					</div>
					<div className="header-close" onClick={this.props.onCloseRegistrant}>
						<i className="material-icons">close</i>
					</div>
				</div>

				<div className="card-body">
					<div
						className={
							"card-body-data reg-data " + (this.state.openReg ? "open" : "")
						}
					>
						<div className="body-header">
							<div className="header-text">Registrant Data</div>
							<div
								className="header-icon"
								onClick={() => this.toggleOpen("openReg")}
							>
								<i className="material-icons icon-direction">
									keyboard_arrow_left
								</i>
							</div>
						</div>
						<div className="card-body-data-text">Reg data here...</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RegistrantCard;
