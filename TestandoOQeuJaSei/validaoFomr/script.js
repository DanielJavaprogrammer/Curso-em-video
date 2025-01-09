const checar = document.getElementById('botao').addEventListener('click', () => {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const nomeError = document.querySelector('.errorName')
    const emailError = document.querySelector('.errorEmail')
    const imgNome = document.querySelector('.inputnome img')
    const imgEmail = document.querySelector('.inputemail img')

    let nomeinput = nome.value.trim();
    let emailinput = email.value.trim();

    if (nomeinput.length == 0) {
        nome.style.borderColor = "red"
        nomeError.style.display = 'block';
        imgNome.style.display = 'block';
        nome.setAttribute('placeholder', 'Digite seu nome completo')
    }

    if (emailinput.length == 0) {
        email.style.borderColor = "red"
        emailError.style.display = 'block'
        imgEmail.style.display = 'block';
        email.setAttribute('placeholder', 'exemplo@email.com')
    }

    nome.addEventListener('input', () => {
        if (nome.value.trim().length > 0) {
            nome.style.borderColor = "gray";
            nomeError.style.display = 'none';
            imgNome.style.display = 'none';
        }
    });

    email.addEventListener('input', () => {
        if (email.value.trim().length > 0) {
            email.style.borderColor = "gray";
            emailError.style.display = 'none';
            imgEmail.style.display = 'none';
        }
    });

    // observações: Sempre use o Trim() para remover os espaços.
})

// Mesmo codigo porém automizado:
// const checar = document.getElementById('botao').addEventListener('click', () => {
//     const campos = [
//         {
//             elemento: document.getElementById('nome'),
//             error: document.querySelector('.errorName'),
//             img: document.querySelector('.inputnome img'),
//             placeholder: 'Digite seu nome completo'
//         },
//         {
//             elemento: document.getElementById('email'),
//             error: document.querySelector('.errorEmail'),
//             img: document.querySelector('.inputemail img'),
//             placeholder: 'exemplo@email.com'
//         }
//     ];

//     campos.forEach((campo) => {
//         const valor = campo.elemento.value.trim();

//         if (valor.length === 0) {
//             exibirErro(campo);
//         }

//         campo.elemento.addEventListener('input', () => {
//             if (campo.elemento.value.trim().length > 0) {
//                 removerErro(campo);
//             }
//         });
//     });

//     function exibirErro(campo) {
//         campo.elemento.style.borderColor = "red";
//         campo.error.style.display = 'block';
//         campo.img.style.display = 'block';
//         campo.elemento.setAttribute('placeholder', campo.placeholder);
//     }

//     function removerErro(campo) {
//         campo.elemento.style.borderColor = "gray";
//         campo.error.style.display = 'none';
//         campo.img.style.display = 'none';
//     }
// });
