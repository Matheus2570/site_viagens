import { useState } from "react";
import './BotaoCurtir.css';

function BotaoCurtir() {
  const [curtir, setCurtir] = useState(false);

  return (
    <div className="meio">
      <button
        className={curtir ? "botao-curtir-ativo" : "botao-curtir-inativo"}
        onClick={() => setCurtir(!curtir)}
      >
        {curtir ? "Site curtido ✅" : "Curta o site 👍"}
      </button>
    </div>
  );
}

export default BotaoCurtir;