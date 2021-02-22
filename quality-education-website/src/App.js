import React from "react";
import NavbarComponent from "./components/NavbarComponent.js";
import Home from "./components/Home.js";
import VideoPage from "./components/VideoPage.js";
import QuizPage from "./components/QuizPage.js";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Subjects from "./components/Subjects.js";

function App() {
  return (
    <HashRouter>
      <div className="background">
        <NavbarComponent />
        <div className="home-top">
          <Route exact path="/" component={Home} />
          <Route path="/subjects" component={Subjects} />
          <Route path="/watch" component={VideoPage} />
          <Route path="/quiz" component={QuizPage} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
