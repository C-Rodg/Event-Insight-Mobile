import React, { Component } from "react";
import RegistrantTile from "./RegistrantTile";
import RegistrantCard from "./RegistrantCard";

import { getWatchlistRegistrants } from "../../mock/mock";

class WatchlistContent extends Component {
	constructor() {
		super();

		this.state = {
			registrants: getWatchlistRegistrants(),
			currentRegistrant: null
		};

		this.toggleWatchList = this.toggleWatchList.bind(this);
		this.handleLoadRegistrant = this.handleLoadRegistrant.bind(this);
		this.handleCloseRegistrant = this.handleCloseRegistrant.bind(this);
	}

	// Generate Watchlist tiles
	generateWatchlist() {
		const regList = this.state.registrants
			.map(reg => {
				return (
					<RegistrantTile
						registrant={reg}
						loadRegistrant={this.handleLoadRegistrant}
						toggleWatch={this.toggleWatchList}
						key={reg.AttendeeId}
					/>
				);
			})
			.filter(reg => !reg.WatchList);

		if (regList.length === 0) {
			return (
				<div className="no-registrants">
					Your watch list is currently empty...
				</div>
			);
		} else {
			return regList;
		}
	}

	// Load a registrant
	handleLoadRegistrant(registrant) {
		console.log("loading registrant...");
		console.log(registrant);
		this.setState({ currentRegistrant: registrant });
	}

	handleCloseRegistrant() {
		this.setState({ currentRegistrant: null });
	}

	// Change whether registrant should be on watchlist or not
	toggleWatchList(registrant, watch) {
		console.log("Toggling from watchlist");
		console.log(registrant);
		const newRegs = [...this.state.registrants];
		const objIdx = newRegs.findIndex(
			obj => obj.AttendeeId === registrant.AttendeeId
		);
		newRegs[objIdx].WatchList = watch;
		if (!watch) {
			newRegs.splice(objIdx, 1);
		}
		this.setState({ registrants: newRegs });
	}

	render() {
		return (
			<div className="watchlist-content">
				{!this.state.currentRegistrant
					? this.generateWatchlist()
					: <RegistrantCard
							registrant={this.state.currentRegistrant}
							onCloseRegistrant={this.handleCloseRegistrant}
							onToggleWatchList={this.toggleWatchList}
						/>}
			</div>
		);
	}
}

export default WatchlistContent;
