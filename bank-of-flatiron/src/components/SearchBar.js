import React from "react";

const SearchBar = function({search, setSearchBar}) {
    //event listener for search
    const handleSearchBar = function(event){
      setSearchBar(event.target.value)
    } 
  
 
    return (
      <div>
        <input type="text" placeholder="Search Transaction" value={search} onChange={handleSearchBar}/>
        <i className="circular search link icon"></i>
      </div>
    );
  }
  