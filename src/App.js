import "./App.css";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import Image from "./components/images";
import Card from "./components/card";
import Home from "./pages/Home";
import Nav from "./pages/Nav"
import Contact from "./pages/Contact"
import Myskills from "./pages/Myskills";
import Liveproject from "./pages/Myprojects"
import Mygallery from "./pages/Carousel";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/social" exact>
          <Image />
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/myskill" exact>
          <Myskills/>
        </Route>
        <Route path="/liveproject" exact>
          <Liveproject/>
        </Route>
        <Route path="/img" exact>
        <Mygallery/>
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
