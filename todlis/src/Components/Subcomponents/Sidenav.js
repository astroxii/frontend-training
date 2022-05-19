import { useEffect } from 'react';
import "../../Styles/Sidenav.css";

export default function Sidenav({subView, setSubView})
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
        <aside className="sidenav">
            <button title="Expand/Collapse" type="button" onClick={(e) => e.target.parentElement.classList.toggle("closed")} className="toggle-sidenav"></button>
            <nav className="sidenav-nav">
                <ul className="subview-list">
                    <li className="subview-select"><button onClick={() => subView !== "Welcome" ? setSubView("Welcome") : null} id="Welcome" type="button" className="subview-btn"><img alt="" src={`/project/todlis/images/welcome_icon.png`}/><span className="subview-name">Welcome</span></button></li>
                    <li className="subview-select"><button onClick={() => subView !== "Recent" ? setSubView("Recent") : null} id="Recent" type="button" className="subview-btn"><img alt="" src={`/project/todlis/images/recent_icon.png`}/><span className="subview-name">Recent</span></button></li>
                </ul>
            </nav>
            <button type="button" className="settings-btn"><img alt="" src={`/project/todlis/images/settings_icon.png`}/><span className="subview-name">Settings</span></button>
        </aside>
    );
}