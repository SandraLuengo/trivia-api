import React from "react";

const HeaderItem = ({ className, item: { title, logo } }) => {
  return (
    <div className={className}>
      <i className={`logo ${logo}`} />
      {title}
    </div>
  );
};

export default HeaderItem;
