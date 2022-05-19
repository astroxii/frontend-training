import "../../Styles/Welcome.css";

export default function Welcome(props)
{
    return(
        <section className="subview">
            <h2 className="subview-title">Welcome, <span className="username">{localStorage.getItem("Username") || "__User__"}</span>!</h2>
            <div className="username-warn">
                <p className="username-warn-text">First of all, you might have noticed the title calling you "__User__". You may change the name you wish to be referred as at any moment acessing <span className="setting-ref">Settings &gt; Personal</span> at the bottom of the left side navigation, unless you enjoy the current one.</p>
                <button className="username-warn-dismiss">Dismiss</button>
            </div>
            DISPLAY TIME AND LINKS HERE
            {/* THIS PAGE IS DELETABLE IF THE USER DON'T WANT TO SEE IT */}
        </section>
    );
}