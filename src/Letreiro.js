import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function MeuElemento({ texto }) {
    return (
        <div>
            <h1>{texto}</h1>
        </div>
    );
}

function App() {
    const frase = 'Venha estudar na FATEC!';
    const [textoAtual, setTextoAtual] = useState('');
    const [index, setIndex] = useState(0);
    const [apagando, setApagando] = useState(false);

    useEffect(() => {
        const tick = () => {
            if (!apagando && index < frase.length) {
                setTextoAtual((prev) => prev + frase[index]);
                setIndex((prev) => prev + 1);
            } else if (apagando && index > 0) {
                setTextoAtual((prev) => prev.slice(0, -1));
                setIndex((prev) => prev - 1);
            }

            if (index === frase.length) {
                setTimeout(() => setApagando(true), 1000);
            }

            if (index === 0 && apagando) {
                setApagando(false);
            }
        };

        const interval = setInterval(tick, 150);
        return () => clearInterval(interval);
    }, [index, apagando, frase]);

    return <MeuElemento texto={textoAtual} />;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
