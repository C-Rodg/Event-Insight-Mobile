import React, { Component } from "react";

import SearchForm from "./SearchForm";
import RegistrantTile from "./RegistrantTile";

// TESTING
import { getRegistrants, loadRegistrant } from "../mock/mock";

class SearchContent extends Component {
	constructor() {
		super();
		this.state = {
			searchTerm: "",
			registrants: [],
			error: false,
			hasSearched: false
		};
	}

	// Update Search Term
	handleSearchUpdate(val) {
		this.setState({ searchTerm: val.target.value });
	}

	// Handle Form Submit
	handleSearchSubmit(ev) {
		ev.preventDefault();
		let { searchTerm } = this.state;
		console.log("Now searching for..." + searchTerm);
		searchTerm = searchTerm.toUpperCase();

		const regs = getRegistrants().filter(reg => {
			return (
				reg.FirstName.toUpperCase().indexOf(searchTerm) > -1 ||
				reg.LastName.toUpperCase().indexOf(searchTerm) > -1 ||
				reg.Company.toUpperCase().indexOf(searchTerm) > -1
			);
		});
		this.setState({ registrants: regs, hasSearched: true });
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
					key={registrant.AttendeeId}
					addToWatch={this.handleAddToWatchList}
					removeFromWatch={this.handleRemoveFromWatchList}
				/>
			);
		});
	}

	// Remove registrant from watchlist
	handleRemoveFromWatchList(registrant) {
		console.log("Removing from watchlist");
		console.log(registrant);
	}

	// Add registrant to watchlist
	handleAddToWatchList(registrant) {
		console.log("Adding to watchlist");
		console.log(registrant);
	}

	// Load registrant
	handleLoadRegistrant(registrant) {
		console.log("Loading registrant...");
		console.log(registrant);
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
					{this.generateRegistrantList()}
				</div>
			</div>
		);
	}
}

export default SearchContent;
