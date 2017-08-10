import React, { Component } from "react";

import SearchForm from "./SearchForm";
import RegistrantTile from "./RegistrantTile";
import RegistrantCard from "./RegistrantCard";

// TESTING
import { searchRegistrants } from "../mock/mock";

class SearchContent extends Component {
	constructor() {
		super();
		this.state = {
			searchTerm: "",
			registrants: [],
			error: false,
			hasSearched: false,
			currentRegistrant: null
		};

		// Bind handlers to this component
		this.toggleWatchList = this.toggleWatchList.bind(this);
		this.handleLoadRegistrant = this.handleLoadRegistrant.bind(this);
		this.handleCloseRegistrant = this.handleCloseRegistrant.bind(this);
	}

	// Update Search Term
	handleSearchUpdate(val) {
		this.setState({ searchTerm: val.target.value });
	}

	// Handle Form Submit
	handleSearchSubmit(ev) {
		ev.preventDefault();
		const { searchTerm } = this.state;
		console.log("Now searching for..." + searchTerm);
		const regs = searchRegistrants(searchTerm);
		this.setState({
			registrants: regs,
			hasSearched: true,
			currentRegistrant: null
		});
	}

	// Generate list of registrants
	generateRegistrantList() {
		if (this.state.registrants.length === 0 && this.state.hasSearched) {
			return <div className="no-registrants">No registrants found...</div>;
		}
		return this.state.registrants.map(registrant => {
			return (
				<RegistrantTile
					registrant={registrant}
					loadRegistrant={this.handleLoadRegistrant}
					toggleWatch={this.toggleWatchList}
					key={registrant.AttendeeId}
				/>
			);
		});
	}

	// Remove registrant from watchlist
	toggleWatchList(registrant, watch) {
		console.log("Toggling from watchlist");
		console.log(registrant);
		const newRegs = [...this.state.registrants];
		const objIdx = newRegs.findIndex(
			obj => obj.AttendeeId === registrant.AttendeeId
		);
		newRegs[objIdx].WatchList = watch;
		this.setState({ registrants: newRegs });
	}

	// Load registrant
	handleLoadRegistrant(registrant) {
		console.log("Loading registrant...");
		console.log(registrant);
		this.setState({
			currentRegistrant: registrant,
			searchTerm: "",
			hasSearched: false
		});
	}

	// Close current registrant
	handleCloseRegistrant() {
		this.setState({ currentRegistrant: null });
	}

	render() {
		return (
			<div className="search-content">
				<div className="search-title">
					Search by first name, last name, or company.
				</div>

				{!this.state.error
					? ""
					: <div className="search-error">
							There seems to be an issue searching...
						</div>}

				<SearchForm
					searchTerm={this.state.searchTerm}
					updateSearchValue={this.handleSearchUpdate.bind(this)}
					handleSearchSubmit={this.handleSearchSubmit.bind(this)}
				/>
				<div className="search-results">
					{!this.state.currentRegistrant && this.generateRegistrantList()}
				</div>
				{this.state.currentRegistrant
					? <RegistrantCard
							registrant={this.state.currentRegistrant}
							onCloseRegistrant={this.handleCloseRegistrant}
							onToggleWatchList={this.toggleWatchList}
						/>
					: ""}
			</div>
		);
	}
}

export default SearchContent;
