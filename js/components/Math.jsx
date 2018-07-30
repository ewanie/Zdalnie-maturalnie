import React, {Component} from "react";

class Math extends Component {
    render() {
        return <div className="math">
            <div className="math__header">
                <h1 className="math__header__title">Matematyka</h1>
                <p className="math__header__description">nasze szkolenia pomogą Ci przygotować się do matury z matematyki</p>
            </div>
            <div className="math__root">
                <h1>Pierwiastki</h1>
                <div className="math__root__courses">
                    <div className="math__root__courses__title"><p><img src ="../images/square-root-mathematical-symbol.png"/></p></div>
                    <div className="math__root__courses__title"><p><img src ="../images/square-root-mathematical-symbol.png"/></p></div>
                    <div className="math__root__courses__title"><p><img src ="../images/square-root-of-x-math-formula.png"/></p></div>
                    <div className="math__root__courses__description">
                        <p>Pellentesque mollis varius, sem urna ante, in faucibus orci sem leo at lorem. Cras iaculis ante, cursus magna.</p></div>
                    <div className="math__root__courses__description">
                        <p>Pellentesque mollis varius, sem urna ante, in faucibus orci sem leo at lorem. Cras iaculis ante, cursus magna.</p></div>
                    <div className="math__root__courses__description">
                        <p>Pellentesque mollis varius, sem urna ante, in faucibus orci sem leo at lorem. Cras iaculis ante, cursus magna.</p></div>
                </div>
            </div>
        </div>
    }
}
export default Math;