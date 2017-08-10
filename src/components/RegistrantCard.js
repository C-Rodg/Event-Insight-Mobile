import React, { Component } from "react";
import FeedbackItem from "./FeedbackItem";

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

	// Generate simple array list card data  -- set for exhibitors or session data
	generateArrayCardData(arr = [], field) {
		if (arr.length === 0) {
			const msg =
				field === "exh"
					? "No exhibitors visited yet..."
					: "No sessions have been attended yet...";
			return (
				<div className="no-card-data">
					{msg}
				</div>
			);
		}
		return arr.map(topic => {
			return (
				<div className="list-topic" key={topic}>
					{topic}
				</div>
			);
		});
	}

	// Generate Registrant data
	generateRegistrantCardData(arr = []) {
		if (arr.length === 0) {
			return <div className="no-card-data">No registrant data...</div>;
		}
		return arr.map(ques => {
			return (
				<div className="list-topic" key={ques.name}>
					<span className="question-prompt">
						{ques.name}:
					</span>
					<span className="question-answer">
						{ques.value}
					</span>
				</div>
			);
		});
	}

	// Generate Feedback data
	generateFeedbackCardData(arr = []) {
		if (arr.length === 0) {
			return (
				<div className="no-card-data">
					No evaluations have been completed yet...
				</div>
			);
		}

		return arr.map(feedback => {
			return <FeedbackItem feedback={feedback} key={feedback.sessionCode} />;
		});
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
							{this.generateRegistrantCardData(registrant.RegistrantData)}
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
						<div className="card-body-data-text">
							{this.generateArrayCardData(registrant.Sessions, "sess")}
						</div>
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
						<div className="card-body-data-text">
							{this.generateArrayCardData(registrant.Exhibitors, "exh")}
						</div>
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
							{this.generateFeedbackCardData(registrant.Feedback)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RegistrantCard;
