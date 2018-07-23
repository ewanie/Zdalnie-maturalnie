import React, {Component} from "react";

class Home extends Component {
    render() {
        return <div className="home">
                        <img src="../images/logo.png" alt='logo' title="logo"/>
                        <h1 className="home__header">Zdalnie maturalnie</h1>
                        <p className='home__description'>nowy wymiar wsparcia na maturalnej ścieżce</p>
                        <button>napisz do nas</button>
                    </div>

    }
}
export default Home;