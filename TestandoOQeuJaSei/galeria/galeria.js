//Selecionar todas as imagens do container (galeria).
const imagens =  document.querySelectorAll('.galeria img');
//Selecionar modal onde vai aparecer a imagem em tela Cheia.
const modal = document.getElementById('modal');
//Botao para fecahr a imagem.
const fecharModal = document.getElementById('fecharFoto');

const imgModal = document.querySelector('#modal img');

imagens.forEach(imagem =>{
    imagem.addEventListener('click', () =>{
        const imgSelecionda = imagem.src;
        imgModal.src = imgSelecionda;

        modal.style.display = 'flex'

        fecharModal.style.display = 'block'
    })
})

fecharModal.addEventListener('click', () =>{
    fecharModal.style.display = 'none';
    modal.style.display = 'none';
})