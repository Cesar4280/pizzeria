import "../styles/Copyright.css";

export default function Copyright(): JSX.Element {
    return (
        <div className="copyright-section">
            <span>
                Copyrights © 2020 salvator's pizza. Todos
                los derechos reservados (all rights reserved)
            </span>
            <div className="copyright-icons">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
        </div>
    );
}