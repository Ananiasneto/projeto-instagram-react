import React, { useState } from 'react';


let idCounter = 0;

function chavePrimaria() {
  idCounter += 1;
  return idCounter;
}

export default function Posts() {
  const [posts, setPosts] = useState([
    { imagemUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed", conteudo: "assets/img/gato-telefone.svg", numeroCurtidas: 203, id: chavePrimaria(), curtido: false ,salvo:false},
    { imagemUsuario: "assets/img/barked.svg", nomeUsuario: "barked", conteudo: "assets/img/dog.svg", numeroCurtidas: 134, id: chavePrimaria(), curtido: false ,salvo:false},
    { imagemUsuario: "assets/img/chibirdart.svg", nomeUsuario: "chibirdart", conteudo: "assets/img/adorable_animals.svg", numeroCurtidas: 561, id: chavePrimaria(), curtido: false,salvo:false}
  ]);

  function curtir(id) {
    setPosts(postagens =>
      postagens.map(post => {
        if (post.id === id) {
          const novaCurtida = !post.curtido;
          return {
            ...post,
            curtido: novaCurtida,
            numeroCurtidas: novaCurtida
              ? post.numeroCurtidas + 1
              : post.numeroCurtidas - 1
          };
        }
        return post;
      })
    );
  }
  function curtirImagem(id) {
    setPosts(postagens =>
      postagens.map(post => {
        if (post.id === id) {
          const novaCurtida = !post.curtido;
            if(novaCurtida===true){
                return {
                    ...post,
                    curtido: novaCurtida,
                    numeroCurtidas:post.numeroCurtidas + 1
                 };
            }
        }
        return post;
      })
    );
  }

  function salvar(id){
    setPosts(postagens =>
        postagens.map(post => {
          if (post.id === id) {
            const save = !post.salvo;
            return {
              ...post,
              salvo: save,
            };
          }
          return post;
        })
      );

  }

  return (
    <div className="posts">
      {posts.map(post => (
        <div key={post.id} className="post">
          <div className="topo">
            <div className="usuario">
              <img src={post.imagemUsuario} alt={post.nomeUsuario} />
              {post.nomeUsuario}
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
          <div className="conteudo">
            <img  onClick={() => curtirImagem(post.id)} src={post.conteudo} alt='' />
          </div>
          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon
                  onClick={() => curtir(post.id)} style={{ color: post.curtido ? 'red' : 'black' }}
                  name= {!post.curtido ?'heart-outline': 'heart'} 
                ></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon onClick={() => salvar(post.id)} name={!post.salvo ?"bookmark-outline": "bookmark"} ></ion-icon>
              </div>
            </div>
            <div className="curtidas">
              <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
              <div className="texto">
                Curtido por <strong>adorable_animals</strong> e outras <strong>{post.numeroCurtidas}</strong> pessoas
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
