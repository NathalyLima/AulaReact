import React, { useState } from 'react';
import homemImg from './img/homem.png';  
import mulherImg from './img/mulher.png';  

function Contador() {
    const [homens, setHomens] = useState(0);
    const [mulheres, setMulheres] = useState(0);

    const atualizarTotal = () => homens + mulheres;

    const resetarContador = () => {
        setHomens(0);
        setMulheres(0);
    };

    const criarBloco = (tipo, contagem, setContagem) => {
        const imagem = tipo === 'Homens' ? homemImg : mulherImg; 
        return (
            <div style={estilos.bloco}>
                <img src={imagem} alt={tipo} style={estilos.imagem} />
                <div style={estilos.containerInterno}>
                    <div style={estilos.botoes}>
                        <button onClick={() => setContagem(contagem + 1)} style={estilos.botaoMais}>+</button>
                        <button onClick={() => contagem > 0 && setContagem(contagem - 1)} style={estilos.botaoMenos}>-</button>
                    </div>
                    <div style={estilos.rotulo}>{tipo}</div>
                    <input type="text" value={contagem} readOnly style={estilos.inputNumero} />
                </div>
            </div>
        );
    };

    return (
        <div style={estilos.contador}>
            <div style={estilos.totalContainer}>
                <h2 style={estilos.totalTitulo}>Total</h2>
                <button onClick={resetarContador} style={estilos.botaoReset}>↻</button>
            </div>
            <input type="text" value={atualizarTotal()} readOnly style={estilos.totalInput} />
            {criarBloco('Homens', homens, setHomens)}
            {criarBloco('Mulheres', mulheres, setMulheres)}
        </div>
    );
}

const estilos = {
    contador: {
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        border: '2px solid #ccc',
        padding: '20px',
        width: '350px',
        margin: '0 auto',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9'
    },
    totalContainer: {
        textAlign: 'center',
        marginBottom: '10px',
        position: 'relative'
    },
    totalTitulo: {
        margin: '0',
        fontSize: '24px',
        display: 'inline-block'
    },
    botaoReset: {
        fontSize: '35px',
        padding: '5px 15px',
        border: 'none',
        cursor: 'pointer',
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'transparent',
        color: 'inherit'
    },
    totalInput: {
        textAlign: 'center',
        width: '60px',
        fontSize: '18px',
        marginTop: '10px',
        display: 'block',
        margin: '0 auto'
    },
    bloco: {
        display: 'inline-block',
        width: '150px',
        margin: '10px',
        textAlign: 'center'
    },
    imagem: {
        width: '100px',
        height: 'auto'
    },
    containerInterno: {
        marginTop: '10px'
    },
    botoes: {
        marginBottom: '10px'
    },
    botaoMais: {
        width: '50px',
        height: '50px',
        margin: '0 5px',
        fontSize: '24px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
        color: 'white'
    },
    botaoMenos: {
        width: '40px',
        height: '40px',
        margin: '0 5px',
        fontSize: '20px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#f44336',
        color: 'white'
    },
    rotulo: {
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'bold'
    },
    inputNumero: {
        textAlign: 'center',
        width: '60px',
        fontSize: '18px',
        display: 'block',
        margin: '0 auto'
    }
};

export default Contador;
