import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../assets/images/logo_Kasa.png";

export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src={logo}/>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/apropos">A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}