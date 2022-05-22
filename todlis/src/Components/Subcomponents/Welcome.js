import "../../Styles/Welcome.css";

export default function Welcome({user, setUser})
{
    //const [nameWarn, setNameWarn] = useState(!localStorage.getItem("Username") && !localStorage.getItem("Dismiss.Username"));

    return(
        <section className="subview">
            <h2 className="subview-title">Como vai, <span className="username">{user?.username || "Visitante"}</span>?</h2>
            {
                !user?.username ?
                <div className="username-warn">
                        <p className="username-warn-text">Antes de qualquer coisa, deves ter percebido o t&iacute;tulo chamando-te de "Visitante". Tu podes mudar como prefere ser chamado em <span className="setting-ref">Configura&ccedil;&otilde;es &gt; Perfil</span>, no fim da navega&ccedil;&atilde;o do lado esquerdo, a n&atilde;o ser que prefira assim, claro.</p>
                    <button type="button" onClick={() => {setUser({...user, username: "Visitante"});}} className="username-warn-dismiss">Ignorar</button>
                </div>
                :
                null
            }
        </section>
    );
}