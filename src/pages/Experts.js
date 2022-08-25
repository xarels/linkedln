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
	  <div>
		<form className="searchExpertForm" onSubmit={formSubmitted}>
		  <label htmlFor="searchExpert">Enter a Skill:</label>
		  <input
			id="searchExpert"
			name="searchExpert"
			
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