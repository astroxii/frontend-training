import Initial from "./Initial";
import Todos from "./Todos";

export default function Content(props)
{
    return(
        <main className="content" id="content">
            {
                props.view === "Initial" ?
                <Initial view={props.view} setView={props.setView}/>
                :
                props.view.split(".")[0] === "Todos" ?
                <Todos view={props.view} setView={props.setView}/>
                :
                null
            }
        </main>
    );
}