export default function Suggestion() {
  const sugestoes = [
    { imagemUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed", razao: "seguiu você" },
    { imagemUsuario: "assets/img/barked.svg", nomeUsuario: "barked", razao: "novo no Instagram" },
    { imagemUsuario: "assets/img/chibirdart.svg", nomeUsuario: "chibirdart", razao: "seguiu você" }
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((sugestao) => (
        <div className="sugestao">
          <div className="usuario">
            <img src={sugestao.imagemUsuario} alt="" />
            <div className="texto">
              <div className="nome">{sugestao.nomeUsuario}</div>
              <div className="razao">{sugestao.razao}</div>
            </div>
          </div>
          <div className="seguir">Seguir</div>
        </div>
      ))}
    </div>
  );
}
