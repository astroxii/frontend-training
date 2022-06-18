import { Fragment, useEffect } from "react";

export default function Profile({user, setUser, username, setUsername, startView, setStartView, theme})
{
    function edit(btn, field)
    {
        if(field.type === "text")
        {
            field.readOnly = !field.readOnly;
        }
    }

    function handleChange(field, current, handler)
    {
        if(field.type === "text")
        {
            if(current.trim() !== field.value.trim())
            {
                document.getElementById("settings-save").disabled = false;
                handler(field.value.trim());
            }
        }
    }

    function handleSave()
    {
        document.getElementById("settings-save").disabled = true;

        document.querySelectorAll(".settings-field").forEach((f) =>
        {
            if(f.type === "text")
            {
                f.readOnly = true;

                if(f.value !== user[f.id] && f.value.length > 0)
                {
                    const tUser = {};
                    Object.assign(tUser, user);
                    tUser[f.id] = f.value; // Problem
                    setUser(tUser);
                }
                else
                {
                    f.value = user[f.id];
                }
            }
        });
    }

    function handleCancel()
    {
        document.getElementById("settings-save").disabled = true;

        document.querySelectorAll(".settings-field").forEach((f) =>
        {
            if(f.type === "text")
            {
                if(!f.readOnly || f.value !== user[f.id])
                {
                    f.value = user[f.id];
                    f.readOnly = true;
                }
            }
        });
    }

    useEffect(() =>
    {
        if(username === user.username && startView === user.preferences.startView)
        {
            document.getElementById("settings-save").disabled = true;
        }
    }, [user, username, startView]);

    return(
        <Fragment>
            <p className="settings-title-category">Perfil</p>
            <form className="settings-edit-form">
                <label className="setup-field-holder">
                    <input onChange={(e) => {handleChange(e.target, username, setUsername);}} 
                    type="text" placeholder="" value={username} id="username" className={`setup-field settings-field ${theme}-text has-content`}
                    autoComplete="false" autoCorrect="false" readOnly={true} />
                    <h3 className={`setup-field-title ${theme}-text ${theme}-background`}>Nome de usu&aacute;rio</h3>
                    <button title="Editar" type="button" onClick={(e) => {edit(e.target, document.getElementById("username"))}}>E</button>
                </label>
            </form>
            <div className="setup-bottom">
                <button onClick={() => {handleCancel();}} type="button" className="setup-button">Cancelar</button>
                <button onClick={() => {handleSave();}} id="settings-save" type="button" className="setup-button">Salvar</button>
            </div>
        </Fragment>
    );
}
