import React from "react";

const Pagination = ({ className }) => {
  return (
    <div className={className}>
      <div className='numbers'>1</div>
      <div className='numbers'>2</div>
      <div className='numbers'>3</div>
      <div className='numbers'>4</div>
      <div className='numbers'>></div>
    </div>
  );
};

export default Pagination;
