import React, { useState } from 'react';
import './App.css'
import { Body } from './Body';
export const Navbar = () => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    const capitalizedSearch = search.charAt(0).toUpperCase() + search.slice(1);
    console.log(capitalizedSearch);
    // Perform further search-related logic or API requests here
  };
  const [isSearchFocused, setSearchFocused] = useState(false);

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setSearchFocused(false);
  };
  return (
    <>
      <header className="text-gray-600 body-font">
        
        <div className="container mx-auto flex flex-wrap p-5  md:flex-row items-center justify-around">
          <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer" href="#">
            <span className="ml-3 text-xl"> <span className="text-yellow-600 select-none ">O</span>nline <span className="text-yellow-600">S</span>tore</span>
          </p>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              id="name"
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              name="name"
              className="searchbar w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
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
      <div className={`mt-7 object-to-hide ${isSearchFocused ? 'hidden' : ''}`}>

      <img src="https://static.vecteezy.com/system/resources/previews/002/613/020/original/sale-banner-template-big-sale-special-offer-fifty-percent-discount-sale-banner-template-concept-vector.jpg"
       alt="sale sale sale" srcset=""
       className='w-full h-[50vh] cursor-pointer'
       />

      <img src="https://img.freepik.com/premium-vector/special-offer-super-sale-discount-up-50-off-promotion-marketing-template_22052-1936.jpg?w=2000"
       alt="sale sale sale" srcset=""
       className='w-full h-[50vh] cursor-pointer'
       />

       </div>
       <h1 className='text-center text-3xl font-bold'>Products:-</h1>
      <Body search={search} />
    </>
  );
};
