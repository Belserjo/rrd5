import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./components/main";
import Users from "./components/users";
import Profile from "./components/profile";
import ProfileEdit from "./components/profileEdit";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/users" exact component={Users} />
      <Route path="/users/:userId?" exact component={Profile} />
      <Route path="/users/:userId?/edit" exact component={ProfileEdit} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
