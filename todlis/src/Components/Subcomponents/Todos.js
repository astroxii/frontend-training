import { Fragment, useState } from "react";
import Todo from "../../Objects/Todo";
import "../../Styles/Todos.css";

export default function Todos({user, setUser, theme})
{
    const [todo, setTodo] = useState(null);

    function handleAdd()
    {
        const item = {description: `Tarefa #${todo.content.length + 1}`, priority: false, done: false};

        setTodo({...todo, content: [...todo.content, item]});
    }

    function handleCancel()
    {

    }

    function handleSave()
    {

    }

    return(
        <section className={`subview ${theme}-background`}>
            <h2 className={`subview-title ${theme}-text`}>Listas de Tarefas{todo ? " - Editar" : null}</h2>
            {
                !todo ?
                <Fragment>
                    <div className="subview-cards">
                        <button onClick={() => {setTodo(new Todo(`NovaLista${user.todos.length+1}`));}} type="button" className={`action-card ${theme}-background-c`}>
                            <span className={`action-icon ${theme}-text`}>+</span>
                            <h4 className={`action-title ${theme}-text`}>Criar Nova Lista</h4>
                        </button>
                        <button type="button" className={`action-card ${theme}-background-c`}>
                            <span className={`action-icon ${theme}-text`}>+</span>
                            <h4 className={`action-title ${theme}-text`}>Criar Lista de Rotina</h4>
                            {/* OPEN CHOOSE: EXISTING LIST OR NEW LIST IN ABSOLUTE OPTION BOX UNDER BUTTON! */}
                        </button>
                    </div>
                    <div className="subview-cards">
                        {
                            user.todos.length > 0 ? 
                            user.todos.map((l) => <div>TODO LIST</div>)
                            :
                            <p className={`empty-text ${theme}-text`}>Sem listas para mostrar... Crie uma lista e ela aparecer&aacute; aqui!</p>
                        }
                    </div>
                </Fragment>
                :
                <Fragment>
                    <div className={`edit-container ${theme}-background-c`} style={{border: `${todo.color} 3px solid`}}>
                        <input type="text" maxLength={30} value={`${todo.title}`} onChange={(e) => {setTodo({...todo, title: e.target.value});}} className="edit-title" style={{backgroundColor: `${todo.color}`}} />
                        <ul className="list">
                            {   
                                todo.content.length > 0 ?
                                todo.content.map((t, i) => 
                                <li className="list-item" key={`task-${i}`}>
                                    <input type="checkbox" defaultChecked={t.done} onChange={(e) => {/* NOT WORKING FIX */}} className="task-done-check"/>
                                    <p className={`task-description ${theme}-text`}>{t.description}</p>
                                </li>)
                                :
                                <p className={`empty-list-text ${theme}-text`}>Lista vazia. Adicione tarefas pelo bot&atilde;o abaixo!</p>
                            }
                        </ul>
                        <button onClick={() => {handleAdd();}} className="add-item-btn" style={{backgroundColor: `${todo.color}`}}>Adicionar Tarefa</button>
                    </div>
                    <div className="setup-bottom">
                        <button onClick={() => {handleCancel();}} type="button" className="setup-button">Cancelar</button>
                        <button onClick={() => {handleSave();}} id="settings-save" type="button" className="setup-button">Salvar</button>
                    </div>
                </Fragment>
            }
        </section>
    );
}