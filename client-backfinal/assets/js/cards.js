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
    <h2 class="conteudo-principal__p"><strong class="conteudo-principal__destaque"><!-- ${resposta.length} -->2070 ações</strong><br>foram mapeadas até o momento</h2>
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

    // regioesCard.push(sudeste,sul,centroOeste,norte,nordeste);
    // regioesNome.push('Sudeste','Sul','Centro-Oeste','Norte','Nordeste');     
    
    cards +=`
      <div class="conteudo-principal__cards Sudeste" id="dialogAbrir">
              <p class="cards__regiao Sudeste">Sudeste</p>
              <p class="cards__content Sudeste}"><strong class="cards__number Sudeste">911</strong><br>ações</p>
      </div>

      <div class="conteudo-principal__cards Sul" id="dialogAbrir">
              <p class="cards__regiao Sul">Sul</p>
              <p class="cards__content Sul}"><strong class="cards__number Sul">273</strong><br>ações</p>
      </div>

      <div class="conteudo-principal__cards Centro-Oeste" id="dialogAbrir">
              <p class="cards__regiao Centro-Oeste">Centro-Oeste</p>
              <p class="cards__content Centro-Oeste}"><strong class="cards__number Centro-Oeste">144</strong><br>ações</p>
      </div>

      <div class="conteudo-principal__cards Norte" id="dialogAbrir">
              <p class="cards__regiao Norte">Norte</p>
              <p class="cards__content Norte}"><strong class="cards__number Norte">136</strong><br>ações</p>
      </div>

      <div class="conteudo-principal__cards Nordeste" id="dialogAbrir">
              <p class="cards__regiao Nordeste">Nordeste</p>
              <p class="cards__content Nordeste}"><strong class="cards__number Nordeste">606</strong><br>ações</p>
      </div>
    `;

    // for(let i = 0; i < regioesNome.length; i++){
    //   cards +=`
    //     <div class="conteudo-principal__cards ${regioesNome[i]}" id="dialogAbrir">
    //             <p class="cards__regiao ${regioesNome[i]}">${regioesNome[i]}</p>
    //             <p class="cards__content ${regioesNome[i]}"><strong class="cards__number ${regioesNome[i]}">${regioesCard[i]}</strong><br>ações</p>
    //     </div>
    //   `;
    // }
    
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