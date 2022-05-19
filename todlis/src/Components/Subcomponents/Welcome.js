import { useState } from "react";
import "../../Styles/Welcome.css";

export default function Welcome(props)
{
    const [nameWarn, setNameWarn] = useState(!localStorage.getItem("Username") && !localStorage.getItem("Dismiss.Username"));

    return(
        <section className="subview">
            <h2 className="subview-title">Welcome, <span className="username">{localStorage.getItem("Username") || "__User__"}</span>!</h2>
            {
                nameWarn ?
                <div className="username-warn">
                        <p className="username-warn-text">First of all, you might have noticed the title calling you "__User__". You may change the name you wish to be referred as at any moment acessing <span className="setting-ref">Settings &gt; Personal</span> at the bottom of the left side navigation, unless you enjoy the current one.</p>
                    <button type="button" onClick={() => {localStorage.setItem("Dismiss.Username", "true"); setNameWarn(false);}} className="username-warn-dismiss">Dismiss</button>
                </div>
                :
                null
            }
            
        </section>
    );
}