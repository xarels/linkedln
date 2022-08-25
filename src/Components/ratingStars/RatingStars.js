import React, { useState, useEffect } from 'react';
import Star from './Star';

const RatingStars = (props) => {
    const [gradeIndex, setGradeIndex] = useState(props.value);
    const GRADES = ['0','1', '2', '3', '4', '5'];
    const activeStar = {
        fill: '#FFA400'
    };

    useEffect(()=>{console.log(gradeIndex);console.group(props)},[gradeIndex])

    const changeGradeIndex = ( index ) => {
        setGradeIndex(index);
    }

    return (
        <div className="container">
            <div className="stars">
                {
                    GRADES.map((grade, index) => (
                        <Star 
                            index={index} 
                            key={grade} 
                            changeGradeIndex={changeGradeIndex}
                            style={ gradeIndex > index ? activeStar : {}}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default RatingStars;