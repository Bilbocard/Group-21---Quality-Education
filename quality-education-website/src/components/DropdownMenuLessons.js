import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function DropdownMenuLessons() {
  const [activeMenu, setActiveMenu] = useState("subjects");
  const [menuHeight, setMenuHeight] = useState(160);
  const [subjectSelected, setSubject] = useState(null);
  const [currentIcon, setIcon] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => {
          props.goToMenu && setActiveMenu(props.goToMenu);
          props.subject && setSubject(props.subject);
          props.leftIcon &&
            props.goToMenu === "tiers" &&
            setIcon(props.leftIcon);
        }}
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
        in={activeMenu === "subjects"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <h className="notifications">📚&ensp;Subjects</h>
          <DropdownItem
            leftIcon="🧮"
            subject="Maths"
            goToMenu="tiers"
            rightIcon="➡"
          >
            &ensp;Maths
          </DropdownItem>
          <DropdownItem
            leftIcon="🧪"
            subject="Science"
            goToMenu="tiers"
            rightIcon="➡"
          >
            &ensp;Science
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "tiers"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <h className="notifications">
            {currentIcon}&ensp;{subjectSelected}
          </h>
          <DropdownItem leftIcon="1">&ensp;Primary School</DropdownItem>
          <DropdownItem leftIcon="2">&ensp;Secondary School</DropdownItem>
          <DropdownItem leftIcon="3">&ensp;Sixth Form/College</DropdownItem>
          <DropdownItem leftIcon="⬅" goToMenu="subjects">
            &ensp;Back
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenuLessons;
