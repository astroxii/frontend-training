import { Fragment, useEffect } from "react";

export default function Profile({user, setUser, setCategory, username, setUsername})
{
    function edit(btn, field)
    {
        if(field.type === "text")
        {
            field.readOnly = !field.readOnly;
        }
    }

    function handleChange(field, handler)
    {
        if(username !== field.value)
        {
            handler(field.value.length > 0 ? field.value : null);
        }
    }

    function handleSave()
    {
        // save the different from saved fields
    }

    function handleCancel()
    {
        document.getElementById("settings-save").disabled = true;

        document.querySelectorAll(".settings-field").forEach((f) =>
        {
            if(!f.readOnly || f.value !== user[f.id])
            {
                f.value = user[f.id];
                f.readOnly = true;
            }
        });
    }

    useEffect(() =>
    {
        // const sv = document.getElementById("settings-save");

        // check if any of the fields differ

    }, [username]);

    return(
        <Fragment>
            <p className="settings-title-category">Perfil</p>
            <button title="Voltar" type="button" onClick={() => {setCategory(null);}} className="settings-back-btn">&lt;</button>
            <form className="settings-edit-form">
                <label className="setup-field-holder">
                    <input onChange={(e) => {handleChange(e.target, setUsername);}} 
                    type="text" placeholder="" value={username} id="username" className={`setup-field settings-field ${username ? "has-content" : null}`} 
                    autoComplete="false" autoCorrect="false" readOnly={true} />
                    <h3 className="setup-field-title">Nome de usu&aacute;rio</h3>
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