import { useState } from "react";
import "../../Styles/Settings.css";
import Profile from "./SettingsCategories/Profile";

export default function Settings({user, setUser, theme, setTheme})
{
    const [category, setCategory] = useState(null);
    const [username, setUsername] = useState(user.username || null);
    const [startView, setStartView] = useState(user.preferences.startView || null);

    return(
        <section className={`subview ${theme}-background`}>
            <h2 className={`settings-title ${theme}-text`}>Configura&ccedil;&otilde;es</h2>
            {
                category === "Profile" ?
                <Profile user={user} setUser={setUser} setCategory={setCategory} username={username} setUsername={setUsername} startView={startView} setStartView={setStartView} />
                :
                <ul className="settings-categ-list">
                    <li><button onClick={() => {setCategory("Profile");}} type="button" className="settings-categ">Perfil</button></li>
                    <li><button onClick={() => {setCategory("Accessibility");}} type="button" className="settings-categ">Acessibilidade</button></li>
                </ul>
            }
            {
                !category ?
                <div className="settings-bottom">
                    <p className="version">v1.0.0 05.2022</p>
                </div>
                :
                null
            }
        </section>
    );
}