import React from "react";

const RegistrantTile = ({
	registrant,
	loadRegistrant,
	addToWatch,
	removeFromWatch
}) => {
	const {
		Attended,
		FirstName,
		LastName,
		Company,
		FirstCheckInDateTime,
		WatchList
	} = registrant;
	return (
		<div className={"registrant-tile " + (Attended ? "attended" : "")}>
			<div
				className="registrant-info"
				onClick={() => loadRegistrant(registrant)}
			>
				<div className="name">
					{FirstName + " " + LastName}
				</div>
				<div className="company">
					{Company}
				</div>
				{Attended && FirstCheckInDateTime
					? <div className="time">
							{FirstCheckInDateTime}
						</div>
					: ""}
			</div>
			<div
				className={
					"registrant-action " +
					(WatchList ? "watchlist-remove" : "watchlist-add")
				}
				onClick={() =>
					WatchList ? removeFromWatch(registrant) : addToWatch(registrant)}
			>
				{WatchList
					? <i className="material-icons">remove_circle_outline</i>
					: <i className="material-icons">add_circle_outline</i>}
			</div>
		</div>
	);
};

export default RegistrantTile;
