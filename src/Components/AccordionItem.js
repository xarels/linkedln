const AccordionItem = ({categories, onToggle, active}) => {

    const {skill, score } = categories
//    const [ categoryIsOpen, setcategoryIsOpen ] = useState(false);
    return (

        <li className={`accordion_item${active ? "active" : ""}`}>
            <button className="button" onClick={onToggle}>
            {skill}
            <span className="control">{active ? "-" : "+"}</span>
            </button>
            <div className={`answer_wrapper ${active ? "open" : ""}`}>
                <div className="answer_wrapper">{score}</div>
            </div>
        </li>
    );

};

export default AccordionItem