import React, { Component } from "react";

import DashboardContent from "./DashboardContent";
import WatchlistContent from "./WatchlistContent";
import SearchContent from "./SearchContent";

class Content extends Component {
	constructor() {
		super();
	}

	generateContent() {
		if (this.props.activeTab === "dashboard") {
			return <DashboardContent />;
		} else if (this.props.activeTab === "watchlist") {
			return <WatchlistContent />;
		} else if (this.props.activeTab === "search") {
			return <SearchContent />;
		}
	}

	render() {
		return (
			<div className="content">
				{this.generateContent()}
			</div>
		);
	}
}

export default Content;
