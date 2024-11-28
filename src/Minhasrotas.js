import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Atividade1 from "./Atividade1";
import Atividade2 from "./Atividade2";
import Atividade03 from "./Atividade03/Atividade03";
import Atividade04 from "./Atividade04/Atividade04";

 
export default function MinhasRotas() {
    return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} /> 
<Route path="/Atividade1" element={<Atividade1 />} /> 
<Route path="/Atividade2" element={<Atividade2 />} /> 
<Route path="/Atividade03" element={<Atividade03 />} /> 
<Route path="/Atividade04" element={<Atividade04 />} /> 
</Routes>
</BrowserRouter>
    );
}
