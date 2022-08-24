import {useState} from "react";
import AccordionItem from "./AccordionItem"
    //    const [clicked, setClicked] = useState("0");

    function Accordion (props) {
        const [clicked, setClicked] = useState("0");

        const handleToggle = (index) => {
            if (clicked === index) {
                return setClicked("0");
            }
        }

        function getCategories() {
            return Object.keys(props.value.scores);
        }

        return (
        <ul className="accordion">
        {
        
        getCategories().map((categories, index) => {
            return <AccordionItem 
            key={index} categories={categories}
            onToggle={ () => handleToggle(index)}
            active={clicked === index}
            />;
            })}
        </ul>
        );
    };

export default Accordion