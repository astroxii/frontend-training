import { useState } from "react";
import "../Styles/Home.css";
import Sidenav from "./Subcomponents/Sidenav";
import Welcome from "./Subcomponents/Welcome";

export default function Home(props)
{
    const [subView, setSubView] = useState(props.view.split(".")[1]);

    return(
        <section className="todos-section">
            <Sidenav subView={subView} setSubView={setSubView}/>
            {
                subView === "Welcome" ?
                <Welcome />
                :
                null
            }
        </section>
    );
}