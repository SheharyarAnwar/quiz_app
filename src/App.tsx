// import { Typography } from "@material-ui/core";
import React from "react";
import HomeView from "./Views/Home/index";
import QuizView from "./Views/Quiz/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: React.FC<{}> = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/quiz" component={QuizView} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
