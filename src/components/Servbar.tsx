import "../styles/Servbar.css";

export default function Servbar(): JSX.Element {
    return (
        <div className="servbar-section">
            <ul className="servbar-list">
                <li className="servbar-item">
                    <a href="http://localhost:3000/">
                        <span><i className="fas fa-user-check"></i></span>
                        <span className="servbar-option">Servicio al cliente</span>
                    </a>
                </li>
                <span className="servbar-separation">|</span>
                <li className="servbar-item">
                    <a href="http://localhost:3000/">
                        <span><i className="fas fa-user-tie"></i></span>
                        <span className="servbar-option">Trabaja con nosotros</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}