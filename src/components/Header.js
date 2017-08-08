import React from "react";

const Header = ({ eventTitle, activeTab, onTabSelect }) => {
	return (
		<div className="header">
			<div className="event-title">
				{eventTitle}
			</div>
			<div className="tabs">
				<div
					className={
						"tab tab-dashboard " +
						(activeTab === "dashboard" ? "tab-active" : "")
					}
					onClick={() => onTabSelect("dashboard")}
				>
					<span className="tab-icon">
						<i className="material-icons">assessment</i>
					</span>
					<span className="tab-title">Dashboard</span>
				</div>
				<div
					className={
						"tab tab-search " + (activeTab === "search" ? "tab-active" : "")
					}
					onClick={() => onTabSelect("search")}
				>
					<span className="tab-icon">
						<i className="material-icons">search</i>
					</span>
					<span className="tab-title">Search</span>
				</div>
				<div
					className={
						"tab tab-watchlist " +
						(activeTab === "watchlist" ? "tab-active" : "")
					}
					onClick={() => onTabSelect("watchlist")}
				>
					<span className="tab-icon">
						<i className="material-icons">star</i>
					</span>
					<span className="tab-title">Watch List</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
