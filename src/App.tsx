import Servbar from "./components/Servbar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

// import useCounter from "./hooks/counter";

import "./App.css";

export default function App(): JSX.Element {

    // const [counter, increase, decrement, reset] = useCounter();

    return <>
        <Servbar />
        <Navbar />
        <Header />
        <Slider />
        <Cards />
        {/* <div style={{ background: "#ededed", marginTop: "5rem" }}>
            <button onClick={increase}>Icrementar</button>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={reset}>Restablecer</button>
            <h1>Contador: {counter}</h1>
        </div> */}
        <Footer />
        <Copyright />
    </>;
    
}