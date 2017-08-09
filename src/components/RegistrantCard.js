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

	// Toggle opening of accordions
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
						<div
							className="body-header"
							onClick={() => this.toggleOpen("openReg")}
						>
							<div className="header-text">Registrant Data</div>
							<div className="header-icon">
								<i className="material-icons icon-direction">
									keyboard_arrow_left
								</i>
							</div>
						</div>
						<div className="card-body-data-text">
							Registrant data goes here...
						</div>
					</div>

					<div
						className={
							"card-body-data reg-data " +
							(this.state.openSessions ? "open" : "")
						}
					>
						<div
							className="body-header"
							onClick={() => this.toggleOpen("openSessions")}
						>
							<div className="header-text">
								Sessions Attended ({(registrant.Sessions &&
									registrant.Sessions.length) ||
									0})
							</div>
							<div className="header-icon">
								<i className="material-icons icon-direction">
									keyboard_arrow_left
								</i>
							</div>
						</div>
						<div className="card-body-data-text">Sessions.. atttended...</div>
					</div>

					<div
						className={
							"card-body-data reg-data " +
							(this.state.openExhibitors ? "open" : "")
						}
					>
						<div
							className="body-header"
							onClick={() => this.toggleOpen("openExhibitors")}
						>
							<div className="header-text">
								Exhibitors Visited ({(registrant.Exhibitors &&
									registrant.Exhibitors.length) ||
									0})
							</div>
							<div className="header-icon">
								<i className="material-icons icon-direction">
									keyboard_arrow_left
								</i>
							</div>
						</div>
						<div className="card-body-data-text">Exhibitors visited...</div>
					</div>

					<div
						className={
							"card-body-data reg-data " +
							(this.state.openFeedback ? "open" : "")
						}
					>
						<div
							className="body-header"
							onClick={() => this.toggleOpen("openFeedback")}
						>
							<div className="header-text">
								Feedback ({(registrant.Feedback &&
									registrant.Feedback.length) ||
									0})
							</div>
							<div className="header-icon">
								<i className="material-icons icon-direction">
									keyboard_arrow_left
								</i>
							</div>
						</div>
						<div className="card-body-data-text">
							Feedback data goes here...
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RegistrantCard;
