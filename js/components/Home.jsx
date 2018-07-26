import React, {Component} from "react";

class Home extends Component {
    render() {
        return <div className="home" id="home">
                    <img className="home__img" src="../images/logo.png" alt='logo' title="logo"/>
                    <h1 className="home__header">Zdalnie maturalnie</h1>
                    <p className='home__description'>nowy wymiar wsparcia na maturalnej ścieżce</p>
                    <button><a href="mailto:zdalniematuralnie@gmail.com">napisz do nas</a></button>
                    </div>

    }
}
export default Home;