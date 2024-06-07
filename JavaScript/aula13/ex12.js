var agora = new Date(); //Usar o "new Date" faz com que tenhamos as extas informações de dia e hora de hoje.
var semana = agora.getDay(); // Nesse caso, o GetDay faz com que se tenha a data de hoje(dia da semana).. PAra optar por hora, mês e etc, é preciso trocar o "Day" por  "hour", "mounth" e etc
// var semana = 7

/*
    Dias da Semana no Java Script:
    0 = Domingo
    1 = Segunda-Feira
    2 = Terça-Feira
    3 = Quarta-Feira
    5 = Sexta-Feira
    6 = Sabado

*/

// console.log(semana)

switch (semana) {
    case 0:
        console.log("Hoje é Domingo")
        break //Nunca esquecer o break para parar na opção selecionada. Se não, as opções abaixo da opção escolhida será tbm executada.
    case 1:
        console.log("Hoje é Segunda-Feira")
        break
    case 2:
        console.log("Hoje é Terça-Feira")
        break
    case 3:
        console.log("Hoje é Quarta-Feira")
        break
    case 4:
        console.log("Hoje é Quinta-Feira")
        break
    case 5:
        console.log("Hoje é Sexta-Feira")
        break
    case 6:
        console.log("Hoje é Sábado")
        break
    default:
        console.log("Data inválida.")
        break
}