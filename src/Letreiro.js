import React, { useState, useEffect } from 'react';
 
function Letreiro() {

    const texto = "Venha estudar na FATEC";

    const [displayedText, setDisplayedText] = useState("");

    const [isDeleting, setIsDeleting] = useState(false);

    const [index, setIndex] = useState(0);
 
    useEffect(() => {

        const intervalo = setInterval(() => {

            if (isDeleting) {

                setDisplayedText((prev) => prev.slice(0, -1));

                if (displayedText.length === 0) {

                    setIsDeleting(false);

                    setIndex(0);

                }

            } else {

                setDisplayedText((prev) => prev + texto[index]);

                if (index === texto.length - 1) {

                    setIsDeleting(true);

                }

            }
 
            setIndex((prev) => (isDeleting ? prev : prev + 1) % texto.length);

        }, isDeleting ? 150 : 200);
 
        return () => clearInterval(intervalo);

    }, [index, displayedText, isDeleting]);
 
    return (
<>
<h2>Meu Letreiro</h2>
 
            <h1 style={{

                fontSize: '2em',

                whiteSpace: 'nowrap',

                overflow: 'hidden',

                borderRight: '2px solid black',

                animation: 'caret 0.8s infinite'

            }}>

                {displayedText}
</h1>
</>

    );

}
 
export default Letreiro;
 
