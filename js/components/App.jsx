import React, {Component} from "react";
import Menu from "./Menu.jsx";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Learn from "./Learn.jsx";
import Blog from "./Blog.jsx";
import Math from "./Math.jsx";
import Presentation from "./Presentation.jsx";
import Main from "./Main.jsx";

class App extends Component {
    render(){
        return <Router>
            <div>
                <Menu/>
                <Switch>
                <Route exact path="/" component={Main}  />
                <Route path="/przedmioty" component={Learn} />
                {/*<Route path="/blog" component={Blog} />*/}
                <Route path="/matematyka" component={Math} />
                <Route path="/ustne" component={Presentation} />
                </Switch>
            </div>
        </Router>
;
    }
}

export default App;