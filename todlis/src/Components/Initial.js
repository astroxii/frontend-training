import User from "../Objects/User";
import "../Styles/Initial.css";

export default function Initial(props)
{
    return(
        <section className="section welcome-section">
            <div className="welcome-img"></div>
            <div className={`welcome-text-c ${props.theme}-background`}>
                <h2 className="welcome-title">Bem-Vindo&#x0028;a&#x0029; ao <span className="todlis">todlis</span>!</h2>
                <p className="welcome-text">Desejas criar listas de tarefas e lembretes de forma f&aacute;cil? Est&aacute;s no lugar certo!
                Para usar o <span className="todlis">todlis</span>, basta clicar no bot&atilde;o abaixo e come&ccedil;ar sua rotina de organiza&ccedil;&atilde;o.</p>
                <div className="welcome-direct-c">
                    <button 
                    onClick={() => {props.setUser(new User()); props.setView("Home.Welcome");}}
                    type="button" className="welcome-direct">
                        Vamos l&aacute;
                    </button>
                </div>
                <p className="devby">Por <a href="https://github.com/astroxii" rel="noopener noreferrer external nofollow" target="_blank" className="astroxii">astroxii</a> @ 2022</p>
            </div>
        </section>
    );
}