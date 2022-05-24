import "../../Styles/Reminders.css";

export default function Reminders({user, setUser, theme})
{
    return(
        <section className={`subview ${theme}-background`}>
            <h2 className={`subview-title ${theme}-text`}>Lembretes</h2>
            <div className="subview-cards">
                <button type="button" className={`action-card ${theme}-background-c`}>
                    <span className={`action-icon ${theme}-text`}>+</span>
                    <h4 className={`action-title ${theme}-text`}>Criar Lembrete</h4>
                </button>
            </div>
        </section>
    );
}