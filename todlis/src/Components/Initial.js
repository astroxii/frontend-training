import "../Styles/Initial.css";

export default function Initial(props)
{
    return(
        <section className="section welcome-section">
            <div className="welcome-img"></div>
            <div className="welcome-text-c">
                <h2 className="welcome-title">Welcome to <span className="todlis">todlis</span>!</h2>
                <p className="welcome-text">Wish to make quick, resourceful and registration free TO-DO lists? Seems like you're in the right place! 
                You don't need to create accounts to use <span className="todlis">todlis</span> and start being organized in your routine. When ready to start, click the Start now button below.</p>
                <div className="welcome-direct-c">
                    <button onClick={() => {props.setView("Todos.Welcome"); localStorage.setItem("isUser", "true");}} type="button" className="welcome-direct">Start now</button>
                </div>
                <p className="devby">By <a href="https://github.com/astroxii" rel="noopener noreferrer external nofollow" target="_blank" className="astroxii">astroxii</a> @ 2022</p>
            </div>
        </section>
    );
}