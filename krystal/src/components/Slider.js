import { useEffect, useState } from "react";
import "./Slider.css";

export default function Slider(props)
{
    const [current, setCurrent] = useState(0);

    useEffect(() =>
    {
        const pagDots = Array.from(document.querySelectorAll(".dot"));

        pagDots.forEach((pd) => pd.classList.remove("dot-active"));
        pagDots[current].classList.add("dot-active");
    }, [current]);

    return(
    <div className="product-slider">
        <div className="cards">
            <button onClick={(e) => {Slide(current, setCurrent, props.children, -1)}} className="slider-btn">&lt;</button>

            {props.children[current]}

            <button onClick={(e) => {Slide(current, setCurrent, props.children, 1)}} className="slider-btn">&gt;</button>
        </div>

        <div className="pagination">
            {
                props.children.map((s) =>
                {
                    return <button onClick={() => {setCurrent(s.key);}} key={`dot-${s.key}`} className="dot"></button>;
                })
            }
        </div>
    </div>
    );
}

function Slide(current, setCurrent, slides, direction)
{
    if(current + direction < slides.length && current + direction > -1)
    {
        setCurrent(current+direction);
    }
    else if(current + direction >= slides.length)
    {
        setCurrent(0);
    }
    else
    {
        setCurrent(slides.length-1);
    }
}