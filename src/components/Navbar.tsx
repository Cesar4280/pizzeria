import "../styles/Navbar.css";

export default function Navbar(): JSX.Element {
    return (
        <div className="navbar-parallax-section">
            <nav className="navbar-container">
                <a className="navbar-picture" href="http://localhost:3000/">
                    <img
                        width="269"
                        height="100"
                        alt="salvator-logo"
                        className="navbar-logo"
                        src="https://www.salvators.com.co/wp-content/uploads/2020/10/logo.png"
                        loading="lazy" />
                </a>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <a href="http://localhost:3000/">Inicio</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#">Menu<i className="fas fa-caret-down"></i></a>
                        <ul className="navbar-submenu">
                            <li><a href="#">Pizza</a></li>
                            <li><a href="#">Lasagnas</a></li>
                            <li><a href="#">Bebidas</a></li>
                            <li><a href="#">Crepes</a></li>
                            <li><a href="#">Entradas</a></li>
                            <li><a href="#">Pastas</a></li>
                            <li><a href="#">Pizza Burger</a></li>
                            <li><a href="#">Pastas Rellenas</a></li>
                            <li><a href="#">Stromboli</a></li>
                        </ul>
                    </li>
                    <li className="navbar-item">
                        <a href="#">Lunch Time<i className="fas fa-caret-down"></i></a>
                        <ul className="navbar-submenu">
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Restaurante</a></li>
                        </ul>
                    </li>
                    <li className="navbar-item">
                        <a href="http://localhost:3000/">Pizza Time</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#">Tiendas<i className="fas fa-caret-down"></i></a>
                        <ul className="navbar-submenu">
                            <li>
                                <a href="#">Barranquilla<i className="fas fa-caret-right"></i></a>
                                <ul className="navbar-subsubmenu">
                                    <li><a href="#">Restaurante Salvator´s Calle 84</a></li>
                                    <li><a href="#">C.C. Castellana Plaza</a></li>
                                    <li><a href="#">C.C. LeChamp</a></li>
                                    <li><a href="#">C.C. Portal del Prado</a></li>
                                    <li><a href="#">C.C. Viva Barranquilla</a></li>
                                    <li><a href="#">CC. Unico Barranquilla</a></li>
                                    <li><a href="#">C.C. Gran plaza del sol Soledad</a></li>
                                    <li><a href="#">Delivery Paraiso</a></li>
                                    <li><a href="#">Delivery 38</a></li>
                                    <li><a href="#">Delivery 84</a></li>
                                    <li><a href="#">Delivery K21</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Cartagena<i className="fas fa-caret-right"></i></a>
                                <ul className="navbar-subsubmenu">
                                    <li><a href="#">C.C. Caribe Plaza</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Montería<i className="fas fa-caret-right"></i></a>
                                <ul className="navbar-subsubmenu">
                                    <li><a href="#">C.C. Alamedas</a></li>
                                    <li><a href="#">C.C. Buenavista</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Santa Marta<i className="fas fa-caret-right"></i></a>
                                <ul className="navbar-subsubmenu">
                                    <li><a href="#">El Rodadero</a></li>
                                    <li><a href="#">C.C. Buenavista</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Sincelejo<i className="fas fa-caret-right"></i></a>
                                <ul className="navbar-subsubmenu">
                                    <li><a href="#">C.C. Guacari</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Valledupar<i className="fas fa-caret-right"></i></a>
                                <ul className="navbar-subsubmenu">
                                    <li><a href="#">C.C. Guatapuri</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Bogotá<i className="fas fa-caret-right"></i></a>
                                <ul className="navbar-subsubmenu">
                                    <li><a href="#">Calle 116 # 17A – 48 (Pepe Sierra)</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar-item">
                        <a href="#">Ordenar<i className="fas fa-caret-down"></i></a>
                        <ul className="navbar-submenu last">
                            <li><a href="#">Barranquilla – 3560999</a></li>
                            <li><a href="#">Santa Marta – 4365009</a></li>
                            <li><a href="#">Montería – 7894099</a></li>
                            <li><a href="#">Valledupar – 5885898</a></li>
                            <li><a href="#">Sincelejo – 2714999</a></li>
                            <li><a href="#">Cartagena – 6939899</a></li>
                            <li><a href="#">Bogotá – 7433888</a></li>
                        </ul>
                    </li>
                </ul>
                <ul className="navbar-social flex-center">
                    <li className="navbar-social-item">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                    </li>
                    <li className="navbar-social-item">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </li>
                    <li className="navbar-social-item">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </li>
                </ul>
                <div className="navbar-button-wrapper flex-center">
                    <a href="http://localhost:3000/" className="navbar-button">
                        <i className="far fa-calendar-days"></i>
                        Reservar
                    </a>
                </div>
            </nav>
        </div>
    );
}