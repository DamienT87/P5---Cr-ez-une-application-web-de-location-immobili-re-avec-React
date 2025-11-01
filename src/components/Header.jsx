import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header(){
    return(
        <header>
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