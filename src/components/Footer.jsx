import "./Footer.scss";
import logoWhite from "../assets/images/logo_Kasa_blanc.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <img className="footer__logo" src={logoWhite} alt="Kasa" />
        <p className="footer__copy">© 2025 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}