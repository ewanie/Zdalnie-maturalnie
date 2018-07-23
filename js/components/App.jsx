import React, {Component} from "react";
import Menu from "./Menu.jsx";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import Learn from "./Learn.jsx";
import About from "./About.jsx";
import Blog from "./Blog.jsx";
import Math from "./Math.jsx";
import Presentation from "./Presentation.jsx";

class App extends Component {
    render(){
        return <Router>
            <div>
                <Menu/>
                <Switch>
                <Route exact path="/" component={Home}  />
                <Route path="/przedmioty" component={Learn} />
                <Route path="/o-nas" component={About} />
                <Route path="/kontakt" component={Contact} />
                <Route path="/blog" component={Blog} />
                <Route path="/matematyka" component={Math} />
                <Route path="/ustne" component={Presentation} />
                </Switch>

            </div>
        </Router>
;
    }
}

export default App;