import "./Banner.scss";

export default function Banner({ image, title }){
    return(
        <div className="banner">
            {image && <img src={image} alt={title || "Bannière"} />}
            {title && <div className="banner_overlay"><h1>{title}</h1></div>}
        </div>
    );
}