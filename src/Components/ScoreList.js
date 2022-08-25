import React, {useState, useCallback, useEffect} from "react";
import RatingStars from "./ratingStars/RatingStars";

function Item (props) {
    const [data, setData] = useState(props);

  function getCategories() {
    return Object.keys(props.value.scores);
}

function getSkills(category) {
        return Object.keys(props.value.scores[category]);
}

function getScore(category, skill) {
    return props.value.scores[category][skill];
}

    return (
      <React.Fragment>
        <div className='accordion_wrapper'>
            <h1>Scores Collection:</h1>
            <div className="scores">
            {
            getCategories().map((category) => {
            return <div className="categories"
                    >  
                        <div>{category}</div>
                        <div className="skills_wrapper">
                    {
                        getSkills(category).map((skill) => {

                            return (
                            <div className="skills">
                                <p>{skill}</p>
                                <div>
                                    <RatingStars value={getScore(category,skill)}/>
                                </div>
                            </div>);
                        })                       
                    }       
                    </div>
                </div>
            })}
            </div>
            <button>Update Scores</button>
        </div>
      </React.Fragment>
    );
}

export default Item;