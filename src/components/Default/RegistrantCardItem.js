import React from "react";

const RegistrantCardItem = ({ name, value }) => {
	return (
		<div className="list-reg">
			<div className="question-prompt">
				{name}:
			</div>
			<div className="question-answer">
				{value}
			</div>
		</div>
	);
};

export default RegistrantCardItem;
