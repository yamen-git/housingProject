import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home'
import Detail from './Detail'


export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:propertyName/:id">
            <Detail />
          </Route>
        </Switch>
    </Router>
  );
}
