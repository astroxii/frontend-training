import Initial from "./Initial";
import Home from "./Home";
import Setup from "./Subcomponents/Setup";

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
            {
                user?.isNew ?
                <Setup user={user} setUser={setUser} />
                :
                null
            }
        </main>
    );
}