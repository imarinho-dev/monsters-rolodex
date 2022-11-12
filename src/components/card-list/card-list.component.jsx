import { Component } from "react";
import Card from "../card/card.component";

class CardList extends Component {
	render() {
		const { monsters } = this.props;

		return (
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-10 w-screen justify-center items-center py-12">
				{monsters.map((monster) => {
					return <Card monster={monster} key={monster.id} />;
				})}
			</div>
		);
	}
}

export default CardList;
