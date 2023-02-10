import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landing/LandingPage";
import Home from "./components/home/Home";
import Details from "./components/details/Details";
import RecipeCreate from "./components/form/RecipeCreate";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/Home" component={Home} />
        <Route path="/recipe/:id" component={Details} />
        <Route path="/recipeCreate" component={RecipeCreate} />
      </Switch>
    </div>
  );
}

export default App;
