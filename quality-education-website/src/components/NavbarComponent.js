import React, { useState } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import DropdownMenuNotifications from "../components/DropdownMenuNotifications.js";
import DropdownMenuSettings from "../components/DropdownMenuSettings.js";
import DropdownMenuLessons from "../components/DropdownMenuLessons.js";
function NavbarComponent() {
  const [openedDropdown, setOpenedDropdown] = useState(0);

  function NavItem(props) {
    const dropdownNumber = props.dropdownN;
    return (
      <li className="nav-item">
        <a
          className="icon-button"
          onClick={() =>
            openedDropdown === dropdownNumber
              ? setOpenedDropdown(0)
              : setOpenedDropdown(dropdownNumber)
          }
        >
          {props.icon}
        </a>
        {openedDropdown == dropdownNumber && props.children}
      </li>
    );
  }

  function changeDropdown(newValue) {
    setOpenedDropdown(newValue);
  }

  return (
    <Navbar>
      <NavLink className="nav-text" to="/">
        EDUQUALITY <i className="fas fa-book-reader"></i>
      </NavLink>
      <NavItem icon="📚" dropdownN={1}>
        <DropdownMenuLessons onChange={changeDropdown} />
      </NavItem>
      <NavItem icon="🔔" dropdownN={2}>
        <DropdownMenuNotifications />
      </NavItem>
      <NavItem icon="⚙️" dropdownN={3}>
        <DropdownMenuSettings />
      </NavItem>
    </Navbar>
  );
}

export default NavbarComponent;
