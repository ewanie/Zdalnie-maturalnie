import React, {Component} from "react";
import Home from "./Home.jsx";
import Learn from "./Learn.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Blog from "./Blog.jsx";
import Footer from "./Footer.jsx";

class Main extends Component {
    render() {
        return <div>
                <Home/>
                <Learn/>
                <About/>
                <Contact/>
                <Blog/>
                <Footer/>
        </div>
    }
}


export default Main;