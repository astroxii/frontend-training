import "../styles/Card.css";

export default function Card(props)
{
    return(
        <div className="card">
            <img className="card-img" alt="Destination illustration." src={`/${props.img}`} />
            <div className="card-info">
                <h5 className="card-title">{props.title || null}</h5>
                <p className="card-desc">{props.description || props.desc || null}</p>
            </div>
            <div className="hover-actions">
                <button title={"Explore "+props.title} className="hover-btn">
                    <img alt="Bot&atilde;o para ver o destino." src="/images/eyeIcon.png"/>
                </button>
                <button onClick={(e) => CopyToClipboard(e.target, "https://astroxii.github.io/project/krystal/destination/"+props.title.replaceAll(" ", "-"))} 
                title={"Compartilhe o destino "+props.title} className="hover-btn">
                    <img alt="Bot&atilde;o para copiar link." src={`/images/linkIcon.png`}/>
                </button>
            </div>
        </div>
    );
}

function CopyToClipboard(e, content)
{
    navigator.clipboard.writeText(content);
    // make popup to tell the copied link
}