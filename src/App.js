import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Watched from "./Components/Watched";
import WatchList from "./Components/WatchList";
import Add from "./Components/Add";
import Header from "./Components/Header";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <WatchList />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
