import { Component } from "react";

class SearchBox extends Component {
	render() {
		return (
			<div className="w-screen flex justify-center">
				<input
					className={`w-4/5 md:w-1/2 lg:w-1/4 p-4 outline-0 capitalize rounded-md ${this.props.className}`}
					type="search"
					placeholder={this.props.placeholder}
					onChange={this.props.onChangeHandler}
				/>
			</div>
		);
	}
}

export default SearchBox;
