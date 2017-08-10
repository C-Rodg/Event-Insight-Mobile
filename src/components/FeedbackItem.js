import React from "react";

const FeedbackItem = ({ feedback }) => {
	return (
		<div className="eval-item">
			<div className="eval-info">
				<div className="info-name text-nowrap">
					{feedback.name}
				</div>
				<div className="info-time text-nowrap">
					Submitted: {feedback.submitted}
				</div>
				<div className="info-code text-nowrap">
					Session Code: {feedback.sessionCode}
				</div>
			</div>
			<div className="eval-content">
				{generateResponsesBox(feedback.responses)}
			</div>
		</div>
	);
};

const generateResponsesBox = (responses = []) => {
	if (responses.length === 0) {
		return <div className="no-responses">No responses available...</div>;
	}
	return responses.map((resp, idx) => {
		return (
			<div className="response-item" key={idx}>
				<div className="response-title">
					{resp.question}
				</div>
				<div className="response-body">
					{resp.response}
				</div>
			</div>
		);
	});
};

export default FeedbackItem;
