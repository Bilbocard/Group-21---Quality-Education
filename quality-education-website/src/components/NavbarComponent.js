import React, { useState } from "react";

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
          href="#"
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

  return (
    <Navbar>
      <div className="nav-text">
        EDUQUALITY <i className="fas fa-book-reader"></i>
      </div>
      <NavItem icon="📚" dropdownN={1}>
        <DropdownMenuLessons />
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
