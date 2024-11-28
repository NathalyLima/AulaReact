import { useState } from 'react';

export default function MovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    return (
        <div
            onPointerMove={(e) => {
                // Calcula as coordenadas relativas ao contêiner
                const rect = e.currentTarget.getBoundingClientRect();
                setPosition({
                    x: e.clientX - rect.left, // Coordenada relativa no eixo X
                    y: e.clientY - rect.top,  // Coordenada relativa no eixo Y
                });
            }}
            style={{
                position: 'relative',
                width: '400px', // Largura do contêiner
                height: '300px', // Altura do contêiner
                border: '1px solid black', // Apenas para destacar o contêiner
                overflow: 'hidden', // Garante que a bolinha não saia
            }}
        >
            {/* Bolinha vermelha */}
            <div
                style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    width: 20,
                    height: 20,
                    pointerEvents: 'none', // A bolinha não interfere no movimento do mouse
                }}
            />
        </div>
    );
}

