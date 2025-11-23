import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../assets/images/logo_Kasa.png";

export default function Header(){
    return(
        <header className="site-header">
            <div className="container header__inner">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Kasa"/>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Accueil</NavLink></li>
                        <li><NavLink to="/apropos">A Propos</NavLink></li>
                    </ul>
                </nav>
            </div>  
        </header>
    )
}