import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function DropdownMenuLessons() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(225);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function Back(props) {
    return (
      <a
        href="#"
        className="back-button"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="back-icon-button">⬅</span>
      </a>
    );
  }
  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown-notifications" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <h className="notifications">
            <div className="status-text">⚙️&ensp;Settings</div>
          </h>
          <DropdownItem leftIcon="👤" goToMenu="profile-control" rightIcon="➡">
            &ensp;My Profile
          </DropdownItem>
          <DropdownItem leftIcon="✉️">&ensp;Messages</DropdownItem>
          <DropdownItem leftIcon="❓">&ensp;About</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "profile-control"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <h className="notifications">
            <div className="back-position">
              <Back goToMenu="main" />
            </div>
            <div className="back-text">👤&ensp;My Profile</div>
          </h>
          <DropdownItem leftIcon="⚙️">&ensp;Account Settings</DropdownItem>
          <DropdownItem leftIcon="🚪">&ensp;Log Out</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenuLessons;
