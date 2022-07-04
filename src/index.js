var notas = [
  { id: 1, Nome: "João Pedro", Nota: 8.5 },
  { id: 2, Nome: "Geovanna", Nota: 9 },
  { id: 3, Nome: "Caio", Nota: 8 },
  { id: 4, Nome: "Michele", Nota: 5 },
  { id: 5, Nome: "Jessica", Nota: 8 },
  { id: 6, Nome: "Flavio", Nota: 3.5 }
];
//funções map()
var Nomes = notas.map((notas) => notas.Nome);
var nota = notas.map((notas) => notas.Nota);
var id = notas.map((notas) => notas.id);

//funções filter()
var Nota1 = notas.filter((notas) => notas.Nota == 8).map((a) => a.Nota);

//funções reduce()
var media = nota.reduce((acc, numero) => acc + numero) / 6;

console.log(media);
