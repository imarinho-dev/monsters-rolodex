import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { api } from "./services/api";

const App = () => {
	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
		try {
			api
				.get("/users/")
				.then((response) => response)
				.then((users) => setMonsters(users.data));
		} catch (error) {
			console.log("error");
		}
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className="w-full  max-w-max flex flex-col mx-auto space-y-8">
			<h1 className="text-white mt-8 mb-4 text-7xl font-extrabold font-bigelow tracking-widest bg-gradient-to-tr from-orange-600 via-orange-400 to-orange-900 text-transparent bg-clip-text drop-shadow-lg shadow-orange-500 w-screen text-center">
				Monsters Rolodex
			</h1>
			<SearchBox
				className="mx-auto"
				placeholder="Search Monsters"
				label={"Monster search"}
				onChangeHandler={onSearchChange}
			/>

			<CardList monsters={filteredMonsters} />
		</div>
	);
};

// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			monsters: [],
// 			searchField: "",
// 		};
// 	}

// 	componentDidMount() {
// 		try {
// 			api.get("/users/").then((response) => {
// 				this.setState(() => {
// 					return { monsters: response.data };
// 				});
// 			});
// 		} catch (error) {
// 			console.log("error");
// 		}
// 	}

// 	onSearchChange = (event) => {
// 		{
// 			const searchField = event.target.value.toLocaleLowerCase();

// 			this.setState(() => {
// 				return { searchField };
// 			});
// 		}
// 	};

// 	render() {
// 		const { monsters, searchField } = this.state;
// 		const { onSearchChange } = this;

// 		const filteredMonsters = monsters.filter((monster) => {
// 			return monster.name.toLocaleLowerCase().includes(searchField);
// 		});

// 		return (
// 			<div className="w-full  max-w-max flex flex-col mx-auto space-y-8">
// 				<h1 className="text-white mt-8 mb-4 text-7xl font-extrabold font-bigelow tracking-widest bg-gradient-to-tr from-orange-600 via-orange-400 to-orange-900 text-transparent bg-clip-text drop-shadow-lg shadow-orange-500 w-screen text-center">
// 					Monsters Rolodex
// 				</h1>
// 				<SearchBox
// 					className="mx-auto"
// 					placeholder="search monsters"
// 					label={"Monster search"}
// 					onChangeHandler={onSearchChange}
// 				/>
// 				<CardList monsters={filteredMonsters} />
// 			</div>
// 		);
// 	}
// }

export default App;
