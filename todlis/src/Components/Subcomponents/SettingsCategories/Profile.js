import { Fragment } from "react";

export default function Profile({user, setUser, setCategory, username, setUsername})
{
    return(
        <Fragment>
            <p className="settings-title-category">Perfil</p>
            <button type="button" onClick={() => {setCategory(null);}} className="settings-back-btn">&lt;</button>
            <form>
                <label className="setup-field-holder">
                    <input onChange={(e) => {setUsername(e.target.value.length > 0 ? e.target.value : null); e.target.value.length > 0 ? e.target.classList.add("has-content") : e.target.classList.remove("has-content")}} 
                    type="text" placeholder="" value={username} id="username" className="setup-field" autoComplete="false" autoCorrect="false" />
                    <h3 className="setup-field-title">Nome de usu&aacute;rio</h3>
                </label>
            </form>
        </Fragment>
    );
}