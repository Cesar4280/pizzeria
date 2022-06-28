import "../styles/Header.css";

export default function Header(): JSX.Element {
    return (
        <header className="banner-section">
            <div className="banner-mask">
                <div className="banner-content">
                    <img
                        width="60"
                        height="60"
                        alt="pizza-banner"
                        className="banner-image"
                        src="https://www.salvators.com.co/wp-content/uploads/2020/10/pizza.png"
                        loading="lazy" />
                    <h1 className="banner-title">Pizza</h1>
                </div>
            </div>
        </header>
    );
}