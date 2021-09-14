import { Route, Switch } from "react-router-dom";
import "./scss/app.scss";
import Notes from "./pages/Notes";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/note/:id" component={Notes} />
      </Switch>
    </div>
  );
}

export default App;
