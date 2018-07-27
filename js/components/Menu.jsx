import React, {Component} from "react";
// import { Link } from "react-router-dom";
import $ from "jquery";


$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            var hash = this.hash;
            if($(hash).offset()){
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1000, function(){
                    window.location.hash = hash;
                });
            }
        }
    });
});


class Menu extends Component {


    render() {
        return <div className="menu">
                <a className = "menu__span" href="/#"><img src='../images/mini_logo.png'/></a>
            <ul>
            <li className='menu__item'>
                <a className = "menu__item__link" href="/#przedmioty">Przedmioty</a></li>
            <li className='menu__item'>
                <a className = "menu__item__link" href="/#about">O nas</a></li>
            <li className='menu__item'>
                <a className= "menu__item__link" href="/#kontakt">Kontakt</a>
            </li>
            <li className='menu__item'>
                <a className = "menu__item__link" href="/#blog">Blog</a></li>
        </ul>
        </div>;
    }
}

export default Menu;