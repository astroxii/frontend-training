import { useEffect, useState } from "react";
import "../../Styles/Settings.css";

export default function Settings({user, setUser})
{
    const [username, setUsername] = useState(null);
    const [startView, setStartView] = useState(null);

    return(
        <section className="subview">
            <h2 className="subview-title">Configura&ccedil;&otilde;es</h2>
            <ul className="settings-categ-list">
                <li><button type="button">Perfil</button></li>
            </ul>
        </section>
    );
}