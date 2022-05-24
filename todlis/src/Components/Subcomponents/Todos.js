import "../../Styles/Todos.css";

export default function Todos({user, setUser, theme})
{
    return(
        <section className={`subview ${theme}-background`}>
            <h2 className={`subview-title ${theme}-text`}>Listas de Tarefas</h2>
            <div className="subview-cards">
                <button type="button" className={`action-card ${theme}-background-c`}>
                    <span className={`action-icon ${theme}-text`}>+</span>
                    <h4 className={`action-title ${theme}-text`}>Criar Nova Lista</h4>
                </button>
            </div>
        </section>
    );
}