
export default function Posts() {
    const post=[
    {imagemUsuario:"assets/img/meowed.svg",nomeUsuario:"meowed",conteudo:"assets/img/gato-telefone.svg",numeroCurtidas:101.523},
    {imagemUsuario:"assets/img/barked.svg" ,nomeUsuario:"barked" ,conteudo:"assets/img/dog.svg" ,numeroCurtidas:101.525},
    {imagemUsuario:"assets/img/chibirdart.svg" ,nomeUsuario:"chibirdart" ,conteudo:"assets/img/adorable_animals.svg" ,numeroCurtidas:101.445}

    ];

    return (
        <div class="posts">
            {post.map((post)=>
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={post.imagemUsuario} alt={post.nomeUsuario}/>
                        {post.nomeUsuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <div class="conteudo">
                        <img src={post.conteudo} alt= ''/>
                </div>
                
                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
                        <div class="texto">
                        Curtido por <strong>adorable_animals</strong> e outras <strong>{post.numeroCurtidas} </strong>pessoas
                        </div>
                    </div>
                </div>
            </div>       
    )}
    </div>
)}
 
