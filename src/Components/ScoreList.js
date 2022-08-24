import React, {useState} from "react";

function Item (props) {

  function getCategories() {
    return Object.keys(props.value.scores);
}

function getSkills(category) {
        return Object.keys(props.value.scores[category]);
}

function getScore(category, skill) {
    return props.value.scores[category][skill];
}

const [isActive, setIsActive] = useState(false);

    return (
      <React.Fragment>
        <div className='accordion_wrapper'>
            <h1>Something</h1>
            <div className="scores">
            {
            getCategories().map((category) => {
            return <div className="categories"
                    onClick={() => setIsActive(!isActive)}
                    >   
                        <div>{category}</div>
                        <div className="sign">{isActive ? '-' : '+'}</div>
                    {
                        getSkills(category).map((skill) => {
                            return isActive && (<div className="skills">
                                <p>{skill}</p>
                                <p>{getScore(category,skill)}</p>
                            </div>);
                        })
                    }
                </div>
            })}
            </div>
        </div>
      </React.Fragment>
    );
}

export default Item;