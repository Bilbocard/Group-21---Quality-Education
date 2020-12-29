import { setState, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Route, NavLink, HashRouter } from "react-router-dom";

function DropdownMenuLessons(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(160);
  const [subjectSelected, setSubject] = useState(null);
  const [currentIcon, setIcon] = useState(null);
  const [currentPage, setPage] = useState("/subjects");

  function changeDropdown(newMenu) {
    props.onChange(newMenu);
  }

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function Back(props) {
    return (
      <a
        className="back-button"
        onClick={() => {
          props.goToMenu && setActiveMenu(props.goToMenu);
          setPage("/subjects");
        }}
      >
        <span className="back-icon-button">⬅</span>
      </a>
    );
  }

  function DropdownItem(props) {
    return (
      <a>
        {props.navPath ? (
          <NavLink
            to={props.navPath}
            className="menu-item"
            onClick={() => {
              props.goToMenu && setActiveMenu(props.goToMenu);
              props.subject && setSubject(props.subject);
              props.leftIcon &&
                props.goToMenu === "tiers" &&
                setIcon(props.leftIcon);
              changeDropdown(0);
            }}
          >
            <span className="icon-button2">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
          </NavLink>
        ) : (
          <a
            className="menu-item"
            onClick={() => {
              props.goToMenu && setActiveMenu(props.goToMenu);
              props.subject && setSubject(props.subject);
              props.subject &&
                setPage(currentPage + "/" + props.subject.toLowerCase());

              props.leftIcon &&
                props.goToMenu === "tiers" &&
                setIcon(props.leftIcon);
            }}
          >
            <span className="icon-button2">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
          </a>
        )}
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
            <div className="status-text">📚&ensp;Subjects</div>
          </h>
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
            <div className="back-position">
              <Back goToMenu="main" />
            </div>
            <div className="back-text">
              {currentIcon}&ensp;{subjectSelected}
            </div>
          </h>
          <DropdownItem leftIcon="1" navPath={currentPage + "/1"}>
            &ensp;Primary School
          </DropdownItem>
          <DropdownItem leftIcon="2" navPath={currentPage + "/2"}>
            &ensp;Secondary School
          </DropdownItem>
          <DropdownItem leftIcon="3" navPath={currentPage + "/3"}>
            &ensp;Sixth Form/College
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenuLessons;
