import React, { useState, useCallback, useEffect } from 'react';
//import SearchBar from "../Components/searchBar"
import Data from "../dataExperts"
import PersonCard from "../Components/PersonCard"

const Experts = () => {
	
	const [experts, setExperts] = useState(Data);
    const [buttonPressed, setButtonPressed] = useState(false);
	const onsearchExpertChange = useCallback((event) => {
	  event.preventDefault();
	  setButtonPressed(true);
	}, []);
 
useEffect(()=>{console.log(experts);},[experts])

const formSubmitted = useCallback((event) => {
    event.preventDefault();
});

	return (
	  <div className="searchBar_container">
		<h1 className="homeh1">Search for the experts</h1>
		<form className="searchExpertForm" onSubmit={formSubmitted}>
		  <input
			id="searchExpert"
			name="searchExpert"
			placeholder="Enter a skill..."
		  />
		  <button onClick={onsearchExpertChange}>Search for Experts</button>
		</form>		
		<ul>
		  {buttonPressed && experts.map((expert, index) => 
			<li key={index}>
			  <PersonCard value={expert}/>
			</li>
		  )}
		</ul>
	  </div>
	);  
};
  
  
  
  export default Experts;