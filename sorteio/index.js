const embaralha = (lista) => {
  let indice = lista.length

  while(indice) {
    const indiceAleatorio = Math.floor(Math.random() * indice--);

    [lista[indice], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice]];
  }

  return lista
}

const separaGrupos = (arr, len) => {
  const chunks = []
  const n = arr.length;
  let i = 0

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }
  return chunks;
}

const turma = [
  "felipealmeida0404@gmail.com",
  "guilherme.totoli@gmail.com",
  "eulercurie@gmail.com",
  "ligia.bozzi@gmail.com",
  "ticampos@oficinacampos.com.br",
  "leticiaspcruz@gmail.com",
  "brunonisticodacruz@gmail.com",
  "homerao@gmail.com",
  "wagner.sistemalima@gmail.com",
  "brunoslopes1994@gmail.com",
  "guiduarte088@outlook.com",
  "felipepapaleofbpo@outlook.com",
  "erison274@gmail.com",
  "wqferreira@gmail.com",
  "geo.eolo@gmail.com",
  "bruguedes@gmail.com",
  "contato@jonaslobo.com.br",
  "rgrsilva.lopes@gmail.com",
  "bruno.tasc@gmail.com",
  "edu_lune@hotmail.com",
  "leo.maga17@gmail.com",
  "joaomarcoslimias@gmail.com",
  "marcelomariano11@gmail.com",
  "jessika.msmacedo@gmail.com",
  "massao.felipe@gmail.com",
  "renato.napoli75@gmail.com",
  "alcenir@outlook.com",
  "vicki.cavalcante3@gmail.com",
  "lopes12@gmail.com",
  "fabiana@madalogistica.com",
  "junior6g@hotmail.com",
  "williamsilva.formeld@gmail.com",
  "thadeulsantos@gmail.com",
]

const comGrupo = [
"leticiaspcruz@gmail.com",
"vicki.cavalcante3@gmail.com",
"ligia.bozzi@gmail.com",
"jessika.msmacedo@gmail.com",
"fabiana@madalogistica.com",
"geo.eolo@gmail.com",
"thadeulsantos@gmail.com",
"felipealmeida0404@gmail.com",
"brunoslopes1994@gmail.com",
"edu_lune@hotmail.com",
"joaomarcoslimias@gmail.com",
"contato@jonaslobo.com.br",
"bruguedes@gmail.com",
"leo.maga17@gmail.com",
"eulercurie@gmail.com",
"guilherme.totoli@gmail.com",
"lopes12@gmail.com",
"marcelomariano11@gmail.com",
"wagner.sistemalima@gmail.com",
"williamsilva.formeld@gmail.com",
"erison274@gmail.com",
]

const semGrupo = embaralha(turma.filter((aluno) => !comGrupo.includes(aluno)))

const novosGrupos = separaGrupos(semGrupo, 6)

for (const grupo of novosGrupos) {
  console.log('## GRUPO ##')
  console.log(grupo.join('\n'))
  console.log('###########\n')
}