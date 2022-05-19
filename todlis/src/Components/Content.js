import Initial from "./Initial";
import Home from "./Home";

export default function Content(props)
{
    return(
        <main className="content" id="content">
            {
                props.view === "Initial" ?
                <Initial view={props.view} setView={props.setView}/>
                :
                props.view.split(".")[0] === "Home" ?
                <Home view={props.view} setView={props.setView}/>
                :
                null
            }
        </main>
    );
}