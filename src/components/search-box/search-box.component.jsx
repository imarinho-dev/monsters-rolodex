const SearchBox = ({ className, placeholder, onChangeHandler }) => (
	<div className="w-screen flex justify-center">
		<input
			className={`w-4/5 md:w-1/2 lg:w-1/4 p-4 outline-0 rounded-md ${className}`}
			type="search"
			placeholder={placeholder}
			onChange={onChangeHandler}
		/>
	</div>
);

export default SearchBox;
