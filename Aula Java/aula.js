// const numero = Number(prompt("Digite um número:"));

//     console.log("Soma do " + numero + ":");

//     for (let i = 0; i <= 500; i++) {
//         console.log(numero + " + " + i + " = " + (numero + i));
//     } 

// let total = 0

// for(let i = 1; i<=500; i++){
//     total += i
// }
// console.log(total);

// let soma = 0
// let maior = Number.NEGATIVE_INFINITY
// let menor = Number.POSITIVE_INFINITY

// for(let i = 1; i<=5; i++){
//     const numero = Number(prompt("Digite um numero:"))
//     soma += numero
//     if(numero > maior){
//         maior = numero
//     }
//     if(numero < menor){
//         menor = numero
//     }
// }
// const media = soma / 5

// console.log(`A soma dos números é igual a ${soma}`);
// console.log(` A media dos números é igual a ${media}`);
// console.log(`O maior numero digitado foi ${maior}`);
// console.log(`O menor numero digitado foi ${menor}`);

// const palavra = prompt("Digite uma palavra:")
// const todas_as_vogais = "aáàãâeéèiíoóòõuúù"
// const todas_as_consoantes = "bcdfghjklmnpqrstvxywz"
// let qtd_de_vogais = 0
// let qtd_de_consoantes = 0
// let qtd_de_letras= 0

// for(let letra of palavra.toLowerCase()){
//     if(todas_as_vogais.includes(letra)){
//         qtd_de_vogais++
//     }
// }
// for(let letra of palavra.toLowerCase()){
//     if(todas_as_consoantes.includes(letra)){
//         qtd_de_consoantes++
//     }
// }

// alert(`A palavra tem  ${qtd_de_vogais} vogais.`)
// alert(`A palavra tem  ${qtd_de_consoantes} consoantes.`)
// alert(`A palavra tem  ${palavra.length} letras.`)


// const Pessoas = ["João", "Maria", "Pedro", "Ana", "Abel"]
// console.log("Primeira versão", Pessoas);
// Pessoas.push("Amanda")
// Pessoas.shift("João")
// Pessoas.unshift("Raimundo")
// Pessoas.splice(2,2,"Thais","Victoria")
// Pessoas.splice(1,1)
// console.log("Segunda Versão",Pessoas);
// Pessoas.sort()
// console.log(Pessoas);
// Pessoas.reverse()
// console.log(Pessoas);

// const td_numeros = []
// const num_par = []
// const num_impar = []

// for (let i= 1; i<=20; i++) {
//  const numero= Number( prompt("Digite um numero: "))
//  td_numeros.push(numero)
//  if (numero % 2 === 0) {
//     num_par.push(numero)
// }else{
//     num_impar.push(numero)
// }
// }