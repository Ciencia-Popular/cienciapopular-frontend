let numerosContent = document.querySelector('.conteudo-principal');

//numero de projetos existentes
let inserirNumerosNoContent = (resposta) => {

    let regioes = {
        sudeste:0,
        sul:0,
        centroOeste:0,
        norte:0,
        nordeste:0
    }

    let erro = 0;

    for(let i = 0; i < resposta.length; i++){
        if(resposta[i].regiao_campus === 'Sudeste') regioes.sudeste+=1;
        if(resposta[i].regiao_campus === 'Sul') regioes.sul+=1;
        if(resposta[i].regiao_campus === 'Centro Oeste') regioes.centroOeste+=1;
        if(resposta[i].regiao_campus === 'Norte') regioes.norte+=1;
        if(resposta[i].regiao_campus === 'Nordeste') regioes.nordeste+=1;
        else erro+=1
    }

    let cards = inserirCards(regioes.sudeste, regioes.sul, regioes.centroOeste, regioes.norte, regioes.nordeste);
    let instituicoes = contarInstituicoes(resposta);
    
    numerosContent.innerHTML = `
    <h2 class="conteudo-principal__p"><strong class="conteudo-principal__destaque">Universidades contra COVID-19</strong><br>Clique <span class="chamada__mapa">no mapa ou </span>nos cards para ver as iniciativas!</h2>
    <h2 class="conteudo-principal__p"><strong class="conteudo-principal__destaque">${resposta.length} ações</strong><br>foram mapeadas até o momento</h2>
    <h2 class="conteudo-principal__p">Dentre <strong class="conteudo-principal__destaque">${instituicoes} universidades</strong><br> e <strong class="conteudo-principal__destaque">institutos</strong> do Brasil</h2>

    <div class="conteudo-principal__pai-cards">
    ${cards}
    </div>
    `;
}

let inserirCards = (sudeste, sul, centroOeste, norte, nordeste) => {
    let cards = '';
    let regioesCard = [];
    let regioesNome = [];

    regioesCard.push(sudeste,sul,centroOeste,norte,nordeste);
    regioesNome.push('Sudeste','Sul','C-Oeste','Norte','Nordeste');    

    for(let i = 0; i < regioesNome.length; i++){
      cards +=`
        <div class="conteudo-principal__cards ${regioesNome[i]}" id="dialogAbrir">
                <p class="cards__regiao ${regioesNome[i]}">${regioesNome[i]}</p>
                <p class="cards__content ${regioesNome[i]}"><strong class="cards__number ${regioesNome[i]}">${regioesCard[i]}</strong><br>ações</p>
        </div>
      `;
    }
    
    return cards;
}

let contarInstituicoes = (resposta) => {

  let instituicoes = [];
  for(let i = 0; i<resposta.length; i++){
    instituicoes.push(resposta[i].universidade_projeto);
  } 

  let unique = [...new Set(instituicoes)];
  return unique.length;
}