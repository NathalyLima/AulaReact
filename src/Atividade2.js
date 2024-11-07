import React from "react";
import { Link } from "react-router-dom";
import Contador from "./Contador"; 
 
function Atividade2() {
    return (
<>
<h1>Atividade 02</h1>
<Contador />  
<Link to="/">Voltar para a Home</Link> 
</>
    );
}
 
export default Atividade2;

