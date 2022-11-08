import { Switch, withRouter, Route } from "react-router-dom";
import Home from "../components/Home";

export default function Content(props)
{
    return(
    <Switch>
        <Route exact path="/" component={withRouter(Home)}/>
    </Switch>
    );
}