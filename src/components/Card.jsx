import { Link } from "react-router-dom";
import "./Card.scss";

export default function card({title, cover, to}){
    
    const content = (
        <article className="card">
            <img className="card__img" src={cover} alt={title}/>
            <h3 className="card__title">{title}</h3>
        </article>
    );

    return to ? <Link to={to}>{content}</Link> : content;
}