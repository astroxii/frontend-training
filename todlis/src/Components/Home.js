import { useState } from "react";
import "../Styles/Home.css";
import Actions from "./Subcomponents/Actions";
import Recent from "./Subcomponents/Recent";
import Sidenav from "./Subcomponents/Sidenav";
import Welcome from "./Subcomponents/Welcome";

export default function Home({user, setUser, view, setView})
{
    const [subView, setSubView] = useState(view.split(".")[1]);

    return(
        <section className="todos-section">
            <Sidenav user={user} setUser={setUser} subView={subView} setSubView={setSubView} />
            {
                subView === "Welcome" ?
                <Welcome user={user} setUser={setUser} />
                :
                subView === "Recent" ?
                <Recent />
                :
                null
            }
            <Actions user={user} setUser={setUser} />
        </section>
    );
}