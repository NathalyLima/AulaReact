import React from "react";
import {Link} from "react-router-dom";

count Home = () => {
  return(
    <div>
      <h1> Página Inicial</h1>
      <nav>
          <ul>
              <li><Link to="/Atividade1"> Atividade 1</Link></li>
          <ul>
      </nav>
    </div>
  );
}

export default Home;
