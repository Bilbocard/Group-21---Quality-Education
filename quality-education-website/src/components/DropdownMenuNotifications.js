import { useState } from "react";

function DropdownMenuNotifications() {
  const [activeMenu, setActiveMenu] = useState("main");
  function DropdownItem(props) {
    return (
      <a className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    );
  }
  return (
    <div className="dropdown-notifications" style={{ height: 400 }}>
      <h className="notifications">
        <div className="status-text">🔔&ensp;Notifications</div>
      </h>
      <div className="dropdown-notifications-scroll" style={{ height: 390 }}>
        <DropdownItem leftIcon="🧪">CS2002 test due tomorrow</DropdownItem>
        <DropdownItem leftIcon="✉️">kibler sent you a message</DropdownItem>
        <DropdownItem leftIcon="🧪">CS2002 test due tomorrow</DropdownItem>
        <DropdownItem leftIcon="✉️">kibler sent you a message</DropdownItem>
        <DropdownItem leftIcon="🧪">CS2002 test due tomorrow</DropdownItem>
        <DropdownItem leftIcon="✉️">kibler sent you a message</DropdownItem>
        <DropdownItem leftIcon="🧪">CS2002 test due tomorrow</DropdownItem>
        <DropdownItem leftIcon="✉️">kibler sent you a message</DropdownItem>
      </div>
    </div>
  );
}

export default DropdownMenuNotifications;
