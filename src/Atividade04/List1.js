import { useState } from 'react';

let nextId = 0;

export default function List() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={() => {
                    if (name.trim() === '') return; // Evita adicionar nomes vazios
                    setArtists([
                        ...artists,
                        { id: nextId++, name: name.trim() }
                    ]);
                    setName(''); // Limpa o campo de entrada após adicionar
                }}
            >
                Add
            </button>
            <ul>
                {artists.map((artist) => (
                    <li key={artist.id}>{artist.name}</li> // Corrigido o nome da variável
                ))}
            </ul>
        </>
    );
}
