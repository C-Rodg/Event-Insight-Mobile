import React, { Component } from "react";

class Content extends Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
			error: false
		};
	}

	handleFormSubmit(ev) {
		ev.preventDefault();
		if (!this.state.email || !this.state.password) {
			this.setState({ error: true });
		} else {
			this.setState({ error: false });
			window.location.href = "default.html";
		}
	}

	render() {
		return (
			<div className="content">
				<div className="search-container">
					<div className="info">
						<div className="search-welcome">Event Insight Mobile</div>
						<div className="search-title">
							Please enter your email address and the password for this event.
						</div>
						{this.state.error
							? <div className="error-msg">
									There seems to be an issue logging in...
								</div>
							: ""}
					</div>
					<form
						onSubmit={this.handleFormSubmit.bind(this)}
						className="login-form"
					>
						<div className="form-items">
							<input
								type="email"
								placeholder="Email Address"
								value={this.state.email}
								onChange={e => this.setState({ email: e.target.value })}
							/>
							<input
								type="password"
								placeholder="Password"
								value={this.state.password}
								onChange={e => this.setState({ password: e.target.value })}
							/>
						</div>

						<button type="submit" className="btn-block-submit">
							Sign In
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Content;
