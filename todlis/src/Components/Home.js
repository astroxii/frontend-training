import { useState } from "react";
import "../Styles/Home.css";
import Actions from "./Subcomponents/Actions";
import Recent from "./Subcomponents/Recent";
import Reminders from "./Subcomponents/Reminders";
import Settings from "./Subcomponents/Settings";
import Sidenav from "./Subcomponents/Sidenav";
import Todos from "./Subcomponents/Todos";
import Welcome from "./Subcomponents/Welcome";

export default function Home({user, setUser, theme, setTheme, view, setView})
{
    const [subView, setSubView] = useState(view.split(".")[1]);

    return(
        <section className="todos-section">
            <Sidenav user={user} setUser={setUser} subView={subView} setSubView={setSubView} />
            {
                subView === "Welcome" ?
                <Welcome user={user} setUser={setUser} theme={theme} />
                :
                subView === "Recent" ?
                <Recent user={user} setUser={setUser} theme={theme} />
                :
                subView === "Todos" ?
                <Todos user={user} setUser={setUser} theme={theme} />
                :
                subView === "Reminders" ?
                <Reminders user={user} setUser={setUser} theme={theme} />
                :
                subView === "Settings" ?
                <Settings user={user} setUser={setUser} theme={theme} setTheme={setTheme} />
                :
                null
            }
            <Actions user={user} setUser={setUser} theme={theme} setTheme={setTheme} />
        </section>
    );
}