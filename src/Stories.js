export default function Stories() {
    const stories=[
        {imagem:"assets/img/9gag.svg",usuario:"9gag"},
        {imagem:"assets/img/meowed.svg",usuario:"meowed"},
        {imagem:"assets/img/barked.svg",usuario:"barked"},
        {imagem:"assets/img/nathanwpylestrangeplanet.svg",usuario:"nathanwpylestrangeplanet"},
        {imagem:"assets/img/wawawicomics.svg",usuario:"wawawicomics"},
        {imagem:"assets/img/respondeai.svg",usuario:"respondeai"},
        {imagem:"assets/img/filomoderna.svg",usuario:"filomoderna"},
        {imagem:"assets/img/memeriagourmet.svg",usuario:"memeriagourmet"}
    ]
    return (
        <div className="stories"> 
            
                {stories.map(stories => 
                
                    <div className="story">
                    <div className="imagem">
                        <img src={stories.imagem} alt={stories.usuario}/>
                    </div>
                    <div className="usuario">
                        {stories.usuario}
                    </div>
                    </div>)}
                <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            
        </div>
        
    );
}


