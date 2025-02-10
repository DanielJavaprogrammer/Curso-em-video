// Usando this
// This se refere ao próprio objeto.
// Ele evita que o código quebre se o nome do objeto mudar.

let carro = {
    marca: "Volkswagen",
    modelo: "Hatch",
    ano: 2029,
    info: function(){
        console.log('Este e um modelo ' + this.modelo + 'da marca ' + this.marca + 'fabricado no ano de ' + this.ano);
    }
  };

  carro.info();