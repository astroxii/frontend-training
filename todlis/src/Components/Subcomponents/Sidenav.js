import { useEffect } from 'react';
import "../../Styles/Sidenav.css";

export default function Sidenav({user, setUser, subView, setSubView})
{
    useEffect(() =>
    {
        document.querySelectorAll(".subview-btn").forEach((b) =>
        {
            b.classList.remove("active");
        });

        document.getElementById(subView).classList.add("active");
    }, [subView]);

    return(
        <aside className={`sidenav ${user?.preferences?.sidenav ? null : "closed"}`}>
            <button title="Expand/Collapse" type="button" onClick={(e) => sidenavShowState(e.target.parentElement, user, setUser)} className="toggle-sidenav"></button>
            <nav className="sidenav-nav">
                <ul className="subview-list">
                    <li className="subview-select"><button onClick={() => subView !== "Welcome" ? setSubView("Welcome") : null} id="Welcome" type="button" className="subview-btn"><img alt="" src={`/project/todlis/images/welcome_icon.png`}/><span className="subview-name">Boas-Vindas</span></button></li>
                    <li className="subview-select"><button onClick={() => subView !== "Recent" ? setSubView("Recent") : null} id="Recent" type="button" className="subview-btn"><img alt="" src={`/project/todlis/images/recent_icon.png`}/><span className="subview-name">Recentes</span></button></li>
                    <li className="subview-select"><button onClick={() => subView !== "Todos" ? setSubView("Todos") : null} id="Todos" type="button" className="subview-btn"><img alt="" src={`/project/todlis/images/todos_icon.png`}/><span className="subview-name">Listas</span></button></li>
                    <li className="subview-select"><button onClick={() => subView !== "Reminders" ? setSubView("Reminders") : null} id="Reminders" type="button" className="subview-btn"><img alt="" src={`/project/todlis/images/reminders_icon.png`}/><span className="subview-name">Lembretes</span></button></li>
                </ul>
            </nav>
            <button type="button" className="settings-btn"><img alt="" src={`/project/todlis/images/settings_icon.png`}/><span className="subview-name">Configura&ccedil;&otilde;es</span></button>
        </aside>
    );
}

function sidenavShowState(sn, user, setUser)
{
    setUser({...user, preferences: {...user.preferences, sidenav: !user.preferences.sidenav}});
    sn.classList.toggle("closed");
}