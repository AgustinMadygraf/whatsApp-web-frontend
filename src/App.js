import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector} from "react-redux";
import Login from "./components/login/login";

function App() {
  const user = useSelector((state) => state.rooms.user);
  return (
    <div className="App">
      {!user ? (
        <h1>
          <Login />
        </h1>
      ) : (
        <div className="app_body">
          <Router>
            <SideBar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">{/* <Chat /> */}</Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
