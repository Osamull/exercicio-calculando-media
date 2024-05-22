let nome = prompt("Digite seu nome: ")
let nota1 = Number(prompt("Digite a nota da sua primeira nota: "))
let nota2 = Number(prompt("Digite a nota da sua segunda nota: "))

let listAlunos = []

    let alunos = {
        nome,
        nota1,
        nota2,
    }
    
    listAlunos[0] += alunos
    
    let calculaMedia = () => {
            let result = (nota1 + nota2) / 2
            return result
    }

    let verificaMedia = () =>{

        let media = calculaMedia()

        if(media >= 7){
            alert(`Parabéns ${alunos.nome} você passou no concurso!! Sua nota foi de ${calculaMedia()}`)
        }else{
            alert(`Que pena ${alunos.nome} tente novamente ano que vem!!`)
        }
    }

    verificaMedia()

