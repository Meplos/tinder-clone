import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButton from "./SwipeButton";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header*/}
        <Switch>
          <Route path="/chats/:person">
            <Header backButton="/chats" />
            <ChatScreen />
          </Route>
          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
            {/* Chats screen*/}
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButton />
          </Route>
          {/*Individual  chat screen*/}
        </Switch>
        {/* Bottom button*/}
      </Router>
    </div>
  );
}

export default App;
