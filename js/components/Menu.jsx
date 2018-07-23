import React, {Component} from "react";
import { Link } from "react-router-dom";

class Menu extends Component {

    render() {
        return <div className="menu">
                <Link className = "menu__span" to="/"><img src='../images/mini_logo.png'/></Link>
            <ul>
            <li className='menu__item'>
                <Link className = "menu__item__link" to='/przedmioty'>Przedmioty</Link></li>
            <li className='menu__item'>
                <Link className = "menu__item__link" to='/o-nas'>O nas</Link></li>
            <li className='menu__item'>
                <Link className = "menu__item__link" to="/kontakt">Kontakt</Link>
            </li>
            <li className='menu__item'>
                <Link className = "menu__item__link" to="/blog">Blog</Link></li>
        </ul>
        </div>;
    }
}

export default Menu;