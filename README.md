* Here's a documentation for the 

for the website to be livedemo please-visit ` https://online-store.poudelraj.com.np/`

### Code Documentation: Navbar Component
* Import Statements

`The code begins with the import statements that include the necessary dependencies and components for the Navbar.`
The `Navbar` component is a functional component that represents the navigation bar of the application. It contains a search functionality and displays a header, search input field, and a search button.

```
export const Navbar = () => {
  //  State for search input value
  const [search, setSearch] = useState('');

  // Function to handle search
  const handleSearch = () => {
    // Capitalize the first letter of the search query
    const capitalizedSearch = search.charAt(0).toUpperCase() + search.slice(1);
    console.log(capitalizedSearch);
    // Perform further search-related logic or API requests here
  };

  // State for tracking search input focus
  const [isSearchFocused, setSearchFocused] = useState(false);

  // Function to handle search input focus
  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  // Function to handle search input blur
  const handleSearchBlur = () => {
    setSearchFocused(false);
  };

  // JSX rendering
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center justify-around">
          <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer" href="#">
            <span className="ml-3 text-xl">
              <span className="text-yellow-600 select-none ">O</span>nline <span className="text-yellow-600">S</span>tore
            </span>
          </p>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              id="name"
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              name="name"
              className="searchbar w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder='Search...'
            />
          </nav>
          <button
            className="inline-flex items-center text-black bg-transparent border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </header>
      {/* Rest of the code */}
    </>
  );
};
 ```

### State Management
The component uses the useState hook to manage state. It initializes two state variables: search and isSearchFocused. The search state variable stores the current value of the search input, while isSearchFocused tracks whether the search input is currently focused.
```
const [search, setSearch] = useState('');
const [isSearchFocused, setSearchFocused] = useState(false);
```
### Search Functionality
The handleSearch function is triggered when the search button is clicked. It logs the capitalized version of the search query to the console and can be extended to perform further search-related logic or API requests.
```
const handleSearch = () => {
  const capitalizedSearch = search.charAt(0).toUpperCase() + search.slice(1);
  console.log(capitalizedSearch);
  // Perform further search-related logic or API requests here
};
```

### Search Input Handling
* The handleSearchFocus function is triggered when the search input is focused, and it sets the isSearchFocused state to true.
* The handleSearchBlur function is triggered when the search input loses focus, and it sets the isSearchFocused state to false.
* The onChange event handler on the search input updates the search state with the current value of the input.

```
const handleSearchFocus = () => {
  setSearchFocused(true);
};

const handleSearchBlur = () => {
  setSearchFocused(false);
};

<input
  onChange={(e) => setSearch(e.target.value)}
  type="text"
  id="name"
  onFocus={handleSearchFocus}
  onBlur={handleSearchBlur}
  name="name"
  className="searchbar w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
  placeholder='Search...'
/>
```
### JSX Rendering
The JSX code within the return statement defines the structure and appearance of the Navbar component.

* The header element contains the main content of the navbar.
* The p element represents the logo or title of the application.
* The nav element contains the search input field.
* The button element triggers the search functionality.
* The header, p, nav, and button elements are styled using CSS classes defined in external stylesheets.
```
<header className="text-gray-600 body-font">
  {/* Logo or title */}
  <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center justify-around">
    <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer" href="#">
      <span className="ml-3 text-xl">
        <span className="text-yellow-600 select-none ">O</span>nline <span className="text-yellow-600">S</span>tore
      </span>
    </p>

    {/* Search input */}
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        id="name"
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
        name="name"
        className="searchbar w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder='Search...'
      />
    </nav>

    {/* Search button */}
    <button
      className="inline-flex items-center text-black bg-transparent border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      onClick={handleSearch}
    >
      Search
    </button>
  </div>
</header>
```

### Rest of the Code

The remaining code after the header section includes:


* An empty <div> that conditionally hides the content below the navbar when the search input is focused.
* Two <img> elements displaying sale banners.
* A heading displaying "Products".
* The Body component, which receives the search prop.

### Body Component
The `Body` component is a functional component that represents the main content section of the application. It fetches data from an API and displays a list of products based on the search input.

### State Management
* The component uses the useState hook to manage state. It initializes the fakeData state variable as an empty array, which will store the fetched data from the API.

### Fetching Data from API
* The useEffect hook is used to fetch data from the API when the component mounts or when the fakeData state variable changes.
* The fakeDatas function is an asynchronous function that performs the API request using fetch. It retrieves the JSON data and sets it to the fakeData state variable using the setFakeData function.

```
const filteredData = fakeData.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase())
);
```
### JSX Rendering
The JSX code within the return statement defines the structure and appearance of the Body component.

* The section element represents the main section of the page.
* The container, flex, and wrap classes are used for layout and responsiveness.
* The filteredData array is mapped to generate individual product cards using the map function.
* Each product card contains an image, category, title, and price.

### Conclusion

* The provided code represents a Body component in a React application. It fetches data from an API and displays a list of products based on the search input. The component can be used to render the main content section of an e-commerce or product listing application.