//BREAK: Sai da rotina
//CONTINUE: Reinicia o processo, pulando a condição


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const n of numeros) {
    if (n === 2) {
        console.log("Numero 2 encontrado, PULANDO...")
        continue
    }

    if (n === 7) {
        console.log("Numero 7 encontrado, PARANDO...")
        break
    }

    console.log(n)
}