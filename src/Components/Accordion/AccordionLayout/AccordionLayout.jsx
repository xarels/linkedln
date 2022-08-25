import React from 'react';

import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);

  return (
    <>
        <div onClick={() => handleSetIndex(index)} className='accordion_wrapper'>
            <div className='scores'>
                <div className='categories'>{title}</div>
            </div>
            <div className="sign">
                {
                (activeIndex === index) 
                ? <BsFillArrowDownCircleFill className='' />
                : <BsFillArrowUpCircleFill className='' />
                }
            </div>
        </div>

        {(activeIndex === index) && (
            <div className="skills">
              {children}
            </div>
        )}
    </>
  );
};

export default AccordionLayout;