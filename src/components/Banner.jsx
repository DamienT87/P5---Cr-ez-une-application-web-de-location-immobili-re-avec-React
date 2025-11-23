import "./Banner.scss";

export default function Banner({ image, title }){
    return(
        <div className="banner">
            {image && <img className="banner__img" src={image} alt={title || "Bannière"} />}
            {title && <div className="banner__overlay banner__title"><h1>{title}</h1></div>}
        </div>
    );
}