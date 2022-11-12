import { Component } from "react";

class Card extends Component {
	render() {
		const { id, name, email } = this.props.monster;

		return (
			<div className="p-6 w-3/4 backface-hidden flex flex-col mx-auto space-y-4 cursor-pointer text-white text-center bg-violet-600 border border-purple-400 hover:scale-110 transition-all rounded-md shadow hover:shadow-lg">
				<img
					src={`https://robohash.org/${id}?set=set2&size=180x180`}
					alt={`Monster ${name}`}
				/>
				<h2 className="text-2xl font-bold tracking-widest">{name}</h2>
				<p>{email}</p>
			</div>
		);
	}
}

export default Card;
