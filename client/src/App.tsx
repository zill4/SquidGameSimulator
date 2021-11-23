import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
// Pages
import { HomePage } from "./pages/HomePage";
import { FeedbackPage } from "./pages/FeedbackPage";
import { OperationsPage } from "./pages/OperationsPage";
import LoginPage from "./pages/LoginPage";
import  SignupPage  from "./pages/SignupPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshToken } from "./redux/actions/authAction";
import { Navbar } from "./components/navbar";
import GamePage from "./pages/GamePage";
import { getFeedback } from "./redux/actions/feedbackAction";

function App() {
  const dispatch = useDispatch();

  const AppContainer = styled.div`
    ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
  `;

  useEffect(() => {
    dispatch(refreshToken());
    dispatch(getFeedback());
  }, [dispatch]);

  return (
    <AppContainer>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/feedback" component={FeedbackPage} />
          <Route path="/operations" component={OperationsPage} />
          <Route path="/game" component={GamePage} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
