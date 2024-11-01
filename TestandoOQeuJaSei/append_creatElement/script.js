document.querySelector("#btnpostar").addEventListener("click", novaPublicacao);

var tudo = document.querySelector("main");

function novaPublicacao(usuario, setor, conteudo) {
    var usuario = document.querySelector("#usuario").value; //Usuario

    var setor = document.querySelector("#setor").value;//Setor

    var textoPost = document.querySelector("#textoPost").value;

    const tamplate =
        `
            <section class="feed_postagens">
                <article class="post">
                    <div class="post_usuario">
                        <h1>${usuario}</h1>
                        <h2>${setor}</h2>
                    </div>

                    <div class="postagem">
                        <div class="postagem-item">
                            <ul>
                                <li>${textoPost}</li>
                            </ul>
                        </div>

                        <div class="postagem-btn">
                            <button>Curtir</button>
                        </div>
                    </div>
                </article>
            </section>
    `

    tudo.insertAdjacentHTML("beforeend", tamplate);

}