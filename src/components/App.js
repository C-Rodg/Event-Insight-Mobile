import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";

class App extends Component {
	constructor() {
		super();
		this.state = {
			activeTab: "dashboard"
		};
	}

	// Change selected tab
	onTabSelect(tab) {
		this.setState({ activeTab: tab });
	}

	render() {
		return (
			<div className="app">
				<Header
					eventTitle="Salesforce World Tour - Toronto 2017"
					activeTab={this.state.activeTab}
					onTabSelect={this.onTabSelect.bind(this)}
				/>
				<Content activeTab={this.state.activeTab} />
			</div>
		);
	}
}

export default App;
