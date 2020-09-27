let numerosContent = document.querySelector('.conteudo-principal');

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
        if(resposta[i].regiao === 'Sudeste') regioes.sudeste+=1;
        if(resposta[i].regiao === 'Sul') regioes.sul+=1;
        if(resposta[i].regiao === 'Centro Oeste') regioes.centroOeste+=1;
        if(resposta[i].regiao === 'Norte') regioes.norte+=1;
        if(resposta[i].regiao === 'Nordeste') regioes.nordeste+=1;
        else erro+=1
    }

    let cards = inserirCards(regioes.sudeste, regioes.sul, regioes.centroOeste, regioes.norte, regioes.nordeste);
    let instituicoes = contarInstituicoes(resposta);
    
    numerosContent.innerHTML = `
    <h2 class="conteudo-principal__p"><strong class="conteudo-principal__destaque">Universidades contra COVID-19</strong><br>Clique no mapa ou nos cards para ver as iniciativas!</h2>
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
    regioesNome.push('Sudeste','Sul','C. Oeste','Norte','Nordeste');    

    cards =`
                    <div class="conteudo-principal__cards" id="dialogAbrir">
                            <p class="cards__regiao">${regioesNome[0]}</p>
                            <p class="cards__content"><strong class="cards__number">${regioesCard[0]}</strong><br>ações</p>
                        </div>
                        <div class="conteudo-principal__cards">
                          <p class="cards__regiao">${regioesNome[1]}</p>
                          <p class="cards__content"><strong class="cards__number">${regioesCard[1]}</strong><br>ações</p>
                      </div>
                      <div class="conteudo-principal__cards">
                        <p class="cards__regiao">${regioesNome[2]}</p>
                        <p class="cards__content"><strong class="cards__number">${regioesCard[2]}</strong><br>ações</p>
                      </div>
                      <div class="conteudo-principal__cards">
                        <p class="cards__regiao">${regioesNome[3]}</p>
                        <p class="cards__content"><strong class="cards__number">${regioesCard[3]}</strong><br>ações</p>
                      </div>
                      <div class="conteudo-principal__cards">
                        <p class="cards__regiao">${regioesNome[4]}</p>
                        <p class="cards__content"><strong class="cards__number">${regioesCard[4]}</strong><br>ações</p>
                      </div>     
    `;

    return cards;
}

let contarInstituicoes = (resposta) => {

  let instituicoes = [];
  for(let i = 0; i<resposta.length; i++){
    instituicoes.push(resposta[i].instituicao);
  } 

  let unique = [...new Set(instituicoes)];
  return unique.length;
}