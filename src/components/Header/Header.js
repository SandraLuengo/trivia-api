import React from "react";
import { header } from "../../languages/en";
import { HeaderItem } from "../../components";

const Header = ({ className }) => {
  return (
    <header className={className}>
      {header.map((item, i) => (
        <HeaderItem key={`item${i}`} item={item}/>
      ))}
    </header>
  );
};

export default Header;
