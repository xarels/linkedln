import React, { useState } from 'react';
import AccordionLayout from './AccordionLayout/AccordionLayout';

function Accordion (props) {
    function getCategories() {
        return Object.keys(props.value.scores);
    }
    
    function getSkills(category) {
            return Object.keys(props.value.scores[category]);
    }
    
    function getScore(category, skill) {
        return props.value.scores[category][skill];
    }

    const [activeIndex, setActiveIndex] = useState(1);

    return (
      <React.Fragment>
        {
        getCategories().map((category) => {
            return (
                getSkills(category).map((skill) => {
                return (
                <AccordionLayout 
                title= {category}
                index={getScore(category,skill)}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >{skill}</AccordionLayout>
              
       //getScore(category,skill)
            )})
        )})
       }
      </React.Fragment>
      );
    };
export default Accordion;