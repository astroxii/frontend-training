import "../../Styles/Setup.css";

export default function Setup({user, setUser})
{
    return(
        <div className="setup-pane">
            <form className="setup-form">
                <h2 className="setup-form-title">Configure seu <span className="todlis">todlis</span></h2>
                <div className="setup-bottom">
                    <button onClick={() => {setUser({...user, isNew: false})}} type="button" className="setup-button">Pular por enquanto</button>
                    <button type="button" className="setup-button" disabled>Salvar</button>
                </div>
            </form>
        </div>
    );
}