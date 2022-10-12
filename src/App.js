import React from "react";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import StartPage from "./components/StartPage";
import ViewPage from "./components/ViewPage";
import Search from "./components/Search/Search";


function App() {
  return (
    <div className="App bg-black">
      <NavBar />
      <Switch>
        <Route exact path={'/'}>
          <StartPage></StartPage>
        </Route>
        <Route exact path={'/view-page/:artId'}>
          <ViewPage></ViewPage>
        </Route>
        <Route exact path={'/search/:term'}>
          <Search></Search>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
