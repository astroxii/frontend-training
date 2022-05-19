import "../Styles/Header.css";

export default function Header(props)
{
    return(
        <header className="header">
            <a className="header-title" href="/project/todlis"><img alt="todlis logo" src={`/project/todlis/images/logo.png`}/>todlis</a>
        </header>
    );
}