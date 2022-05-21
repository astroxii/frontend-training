import { useState } from "react";
import "../Styles/Home.css";
import Recent from "./Subcomponents/Recent";
import Sidenav from "./Subcomponents/Sidenav";
import Welcome from "./Subcomponents/Welcome";

export default function Home(props)
{
    const [subView, setSubView] = useState(props.view.split(".")[1]);

    return(
        <section className="todos-section">
            <Sidenav user={props.user} setUser={props.setUser} subView={subView} setSubView={setSubView} />
            {
                subView === "Welcome" ?
                <Welcome user={props.user} setUser={props.setUser} />
                :
                subView === "Recent" ?
                <Recent />
                :
                null
            }
        </section>
    );
}