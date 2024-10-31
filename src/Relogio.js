import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Relogio() {
    const [horaAtual, setHoraAtual] = useState('');

    useEffect(() => {
        const atualizarHora = () => {
            const agora = new Date();
            const horas = String(agora.getHours()).padStart(2, '0');
            const minutos = String(agora.getMinutes()).padStart(2, '0');
            const segundos = String(agora.getSeconds()).padStart(2, '0');
            setHoraAtual(`${horas}:${minutos}:${segundos}`);
        };

        atualizarHora(); 
        const intervalo = setInterval(atualizarHora, 1000);

        return () => clearInterval(intervalo); 
    }, []);

    return (
        <div>
            <h1>Meu relógio</h1>
            <h2>{horaAtual}</h2>
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Relogio />);

export default Relogio;
