import { useEffect, useState } from "react";
import "../../Styles/Setup.css";

export default function Setup({user, setUser, theme, setTheme})
{
    const [username, setUsername] = useState(null);

    useEffect(() =>
    {
        const sv = document.getElementById("setup-save");

        if(username && sv.disabled)
        {
            document.getElementById("setup-save").disabled = false;
        }
        else if(!username)
        {
            document.getElementById("setup-save").disabled = true;
        }
    }, [username]);

    function handleSave()
    {
        setUser({...user, isNew: false, username});
    }

    return(
        <div className="setup-pane">
            <form className={`setup-form ${theme}-background`}>
                <h2 className={`setup-form-title ${theme}-text`}>Configure seu <span className="todlis">todlis</span></h2>
                <label className="setup-field-holder">
                    <input onChange={(e) => {setUsername(e.target.value.length > 0 ? e.target.value : null); e.target.value.length > 0 ? e.target.classList.add("has-content") : e.target.classList.remove("has-content")}} 
                    type="text" placeholder="" className={`setup-field ${theme}-text`} autoComplete="false" autoCorrect="false" />
                    <h3 className={`setup-field-title ${theme}-text ${theme}-background`}>Nome de usu&aacute;rio</h3>
                </label>
                <div className="setup-bottom">
                    <button onClick={() => {setUser({...user, isNew: false});}} type="button" className="setup-button">Pular por enquanto</button>
                    <button onClick={() => {handleSave();}} id="setup-save" type="button" className="setup-button">Salvar</button>
                </div>
            </form>
        </div>
    );
}