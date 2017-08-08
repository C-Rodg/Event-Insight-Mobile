import React from "react";

const RegistrantTile = ({
	Attended,
	FirstName,
	LastName,
	Company,
	FirstCheckInDateTime,
	WatchList
}) => {
	return (
		<div className={"registrant-tile " + (Attended ? "attended" : "")}>
			<div className="registrant-info">
				<div className="name">
					{FirstName + " " + LastName}
				</div>
				<div className="company">
					{Company}
				</div>
			</div>
			<div
				className={
					"registrant-action " +
					(WatchList ? "watchlist-remove" : "watchlist-add")
				}
			>
				{WatchList
					? <i className="material-icons">remove_circle_outline</i>
					: <i className="material-icons">add_circle_outline</i>}
			</div>
		</div>
	);
};

export default RegistrantTile;
