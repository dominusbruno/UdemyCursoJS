const pessoa = {
    nome: 'Bruno', 
    sobrenome: 'Rodrigues', 
    idade: 42,
}


for (const i in pessoa) {
    console.log(i,":", pessoa[i])     
}