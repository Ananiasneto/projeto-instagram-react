import React from 'react'


export default function User() {
 const [nome,setNome]=React.useState("catanacomics");
 const [imagemUser,setImagemUser]=React.useState("assets/img/catanacomics.svg");
 function mudaNome(){
  let novoNome=prompt("digite novo nome");
  if (novoNome){
    setNome(novoNome);
  }
 }


 function mudaImg(){
  let novaImg=prompt("digite o link da nova imagem");
  if (novaImg){
    setImagemUser(novaImg);
  }
 }


    return (
      <div className="usuario">
          <img onClick={mudaImg} src={imagemUser} alt="imagem de perfil"/>
          <div className="texto">
            <span>
              <strong>{nome}</strong>
              <ion-icon onClick={mudaNome} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    );
  }

