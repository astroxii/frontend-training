import { NavLink } from "react-router-dom";

export default function Header(props)
{
    return(
    <header>
        <nav className="h-nav">
            <ul className="nav-list">
                <li className="nav-list-i"><NavLink to="/" className="home-link" activeClassName=""><img alt="Logo da Krystal." src="/images/logo.png"/>Krystal</NavLink></li>
                <input className="h-search-input" type="search" placeholder="Aonde vamos dessa vez?" />
                <li className="nav-list-i"><NavLink to="#" className="link" activeClassName="">Sobre</NavLink></li>
                <li className="nav-list-i"><a href="#plans" className="link">Planos</a></li>
            </ul>
        </nav>
    </header>
    );
}