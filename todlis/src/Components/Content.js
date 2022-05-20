import Initial from "./Initial";
import Home from "./Home";

export default function Content({user, setUser, view, setView})
{
    return(
        <main className="content" id="content">
            {
                view.trim() === "Initial" ?
                <Initial user={user} setUser={setUser} view={view} setView={setView} />
                :
                view.trim().split(".")[0] === "Home" ?
                <Home user={user} setUser={setUser} view={view} setView={setView} />
                :
                null
            }
        </main>
    );
}