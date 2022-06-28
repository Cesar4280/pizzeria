import "../styles/Footer.css";

export default function Footer(): JSX.Element {
    return (
        <div className="footer-section">
            <h1 className="footer-title">Suscríbete</h1>
            <p className="footer-text">
                “Su información no será compartida ni comercializada.
                Garantizamos total confidencialidad y privacidad de sus
                datos Ley 1582 de 2012”
            </p>
            <div className="footer-inputs">
                <input type="text" name="email" placeholder="Email" />
                <input type="submit" value="SUSCRIBIRME" />
            </div>
        </div>
    );
}