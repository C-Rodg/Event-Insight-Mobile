import React from "react";

const SearchForm = ({ searchTerm, updateSearchValue, handleSearchSubmit }) => {
	return (
		<form className="search-form" onSubmit={handleSearchSubmit}>
			<button type="submit" className="search-icon-btn" />
			<i className="material-icons search-icon">search</i>
			<input
				type="text"
				placeholder="Search"
				className="search-input"
				value={searchTerm}
				onChange={updateSearchValue}
				autoFocus
			/>
		</form>
	);
};

export default SearchForm;
