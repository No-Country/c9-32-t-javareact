interface searchBar{
	placeholder:string
}

const SearchBar = ({placeholder}:searchBar) => {
	return (
		<form className="w-full rounded-[300px] overflow-hidden">
			<label
				htmlFor="default-search"
				className="mb-2 text-sm w-full font-medium  sr-only "
			>
				Search
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex  items-center pl-3 pointer-events-none">
					<svg
						aria-hidden="true"
						className="w-5 h-5 text-gray-500 dark:text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						></path>
					</svg>
				</div>
				<input
					type="search"
					id="default-search"
					className="block w-full p-4 pl-10 text-sm   bg-gray-50 rounded-lg focus:outline-none "
					placeholder={placeholder}
					required
				/>
				
			</div>
		</form>
	);
};
export default SearchBar;
