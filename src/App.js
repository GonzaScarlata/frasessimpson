import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./components/Frase";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";

function App() {
    // crear el state
    const [personaje, setPersonaje] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        // aqui escribo la logica
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        setCargando(true);
        const respuesta = await fetch(
            "https://thesimpsonsquoteapi.glitch.me/quotes"
        );
        const resultado = await respuesta.json();

        console.log(resultado[0]);
        // Guardar los datos en el state
        setTimeout(()=>{
          setPersonaje(resultado[0]);
          setCargando(false);
        }, 2000)
    };
    //Sintáxis operador ternario :
    // (condición Lógica) ? (lo que quiero que pase si es true) : (lo que quiero si es false);
    const mostrarComponente = (cargando) ? (<Spinner />) : (<Frase personaje={personaje}></Frase>);
    return (
        <section className="container my-5 d-flex flex-column align-items-center">
            <img
                src={process.env.PUBLIC_URL + "logo.png"}
                alt="logo simpsons"
                className="w-75 my-4"
            />
            <Button variant="warning" onClick={() => consultarAPI()}>
                Obtener frase
            </Button>
            <div className="my-4">
                {mostrarComponente}
            </div>
        </section>
    );
}

export default App;
