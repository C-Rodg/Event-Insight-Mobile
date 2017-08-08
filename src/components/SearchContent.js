import React, { Component } from "react";

import SearchForm from "./SearchForm";

// TESTING
import { getRegistrants, loadRegistrant } from "../mock/mock";

class SearchContent extends Component {
	constructor() {
		super();
		this.state = {
			searchTerm: "",
			registrants: [],
			error: false
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
		this.setState({ registrants: regs });
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
					<div className="registrant-tile">
						<div className="registrant-info">
							<div className="name">James Wilson-Walker</div>
							<div className="company">
								Disney, World Wide Corporation of the world
							</div>
						</div>
						<div className="registrant-action watchlist-add">
							<i className="material-icons">add_circle_outline</i>
						</div>
					</div>
					<div className="registrant-tile">
						<div className="registrant-info">
							<div className="name">Janae Thompson</div>
							<div className="company">CP Technologies</div>
						</div>
						<div className="registrant-action watchlist-add">
							<i className="material-icons">add_circle_outline</i>
						</div>
					</div>
					<div className="registrant-tile attended">
						<div className="registrant-info">
							<div className="name">Michael Moore</div>
							<div className="company">Wilson Basketballs</div>
						</div>
						<div className="registrant-action watchlist-remove">
							<i className="material-icons">remove_circle_outline</i>
						</div>
					</div>
					<div className="registrant-tile attended">
						<div className="registrant-info">
							<div className="name">Janae Thompson</div>
							<div className="company">CP Technologies</div>
						</div>
						<div className="registrant-action watchlist-add">
							<i className="material-icons">add_circle_outline</i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchContent;
