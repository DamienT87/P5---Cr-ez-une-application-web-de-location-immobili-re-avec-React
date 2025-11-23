import { useState } from "react";
import "./Collapse.scss"
import arrow_collapse from "../assets/images/arrow_collapse.svg";

export default function Collapse({ title, children, defaultOpen=false, className= "" }){
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const toggle = () => {
        setIsOpen((prev) => !prev);
    }

    const containerClass = `collapse ${isOpen ? "collapse--open" : ""} ${className}`.trim();

    return(
        <div className={containerClass}>
            <button type="button" className="collapse__header" onClick={toggle} aria-expanded={isOpen}>
                <span className="collapse__title">{title}</span>
                <span className="collapse__icon" aria-hidden="true">
                    <img src={arrow_collapse} alt="Chevron"/>
                </span>
            </button>
            <div className="collapse__content">
                <div className="collapse__inner">
                    {children}
                </div>
            </div>
        </div>
    );
}