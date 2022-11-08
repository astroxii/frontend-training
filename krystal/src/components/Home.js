import Card from "./Card";
import Slider from "./Slider";
import "../styles/Home.css";

export default function Home(props)
{
    return(
    <main className="content">
        <button id="scrolldownbtn" className="scrldwn-btn" onClick={(e) => {e.preventDefault(); ScrollDown("entrance");}}>
            Aventure-se
        </button>
        <section id="entrance" className="content-section entrance">
            <div className="left">
                <h3 className="title">A Aventura Aguarda</h3>
                <p className="sub">N&atilde;o deixe seu esp&iacute;rito desbravador morrer!</p>
                <p className="sub">Viaje pelo mundo com os melhores experts em explora&ccedil;&atilde;o e historiadores do planeta, 
                e adquira um conhecimento invej&aacute;vel!</p>
                <button onClick={(e) => {e.preventDefault(); ScrollDown("recommended");}}>Vamos l&aacute;?</button>
            </div>
        </section>
        <section id="recommended" className="content-section rec-products">
            <h3 className="title">Recomendados</h3>
            <Slider>
                <Card key={0} title="Polo Norte" img="northern_lights.jpg" desc="Pegue sua c&acirc;mera, olhe para o c&eacute;u e veja o magn&iacute;fico f&ecirc;nomeno da Aurora Boreal!"/>
                <Card key={1} title="Montanhas do Sul" img="mountain_river.jpg" desc="Acho que temos que levar um tanque de O² aqui. N&atilde;o &eacute; pela subida, &eacute; pela vista de tirar o f&ocirc;lego!"/>
                <Card key={2} title="Ilhas Maldivas" img="beach.jpg" desc="O que poderia ser melhor? Sombra, areia, &aacute;gua de coco, e a brisa do mar no rosto..."/>
                <Card key={3} title="Savana Africana" img="savanna.jpg" desc="A grande m&atilde;e &Aacute;frica, o ber&ccedil;o dos humanos. Mas entre poderosos le&otilde;es e enormes elefantes, somos insignificantes."/>
                <Card key={4} title="Grand Canyon" img="grand_canyon.jpg" desc="O Grand Canyon, uma colossal forma&ccedil;&atilde;o nos Estados Unidos, que foi forjada pela natureza h&aacute; apenas 70 milh&otilde;es de anos."/>
                <Card key={5} title="Stonehenge" img="stonehenge.jpg" desc="Alguns dizem que essa estrutura era utilizada para rituais antigos... Ent&atilde;o escolha sua teoria, e venha para a Stonehenge!"/>
            </Slider>
        </section>
        <section id="plans" className="content-section plans-section">
            <h3 className="title">Nossos Planos</h3>
            <div className="plans">
                
            </div>
        </section>
    </main>
    );
}

function ScrollDown(to)
{
    const elm = document.getElementById(to);

    if(elm)
    {
        document.scrollingElement.scroll({top: elm.offsetTop-(window.innerHeight*0.10)});
    }
}