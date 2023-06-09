import React from "react";
import { navLinks } from "../../assets/data";
import { handleScroll } from "../../utils/handleScroll";
import './sidebar.css'

const Sidebar = ({ props }) => {
  const { scrollToTop } = handleScroll(props);
  
  return (
    <div className={`${props.isSidebarOpen ? "sidebar active" : "sidebar"}`}>
      <ul className="links">
        {navLinks.map((link) => {
          return (
            <a href={link.link} key={link.link} onClick={scrollToTop}>
              {link.title}
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
