let iniciativasPai = document.querySelector('#iniciativaPai');
let divContagemIniciativas = document.querySelector('#numeracao');
let botaoDialog = document.querySelector('.dialog__botao');
let dadosFiltrados = [];

let listaIniciativas = (iniciativas) => {
    
    let qtdDaLista = 10;
    if(iniciativas.length < 10) qtdDaLista = iniciativas.length;
    
    for(let i = 0; i < qtdDaLista; i++){        
        iniciativasPai.innerHTML  += `
        <div class="iniciativa">
                          <div class="iniciativas__numeracao">
                              <div class="iniciativas__numero">${i+1}</div>
                          </div>
    
                          <div class="iniciativas__texto">
    
                              <h2 class="iniciativas__titulo">${iniciativas[i].nome_projeto}</h2>
    
                              <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">${iniciativas[i].universidade_projeto} (${iniciativas[i].categoria_universidade})</strong></p>
    
                              <p class="iniciativas__paragrafos">${iniciativas[i].descricao_projeto}</p>
    
                              <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">Categoria:</strong> ${iniciativas[i].categoria_projeto} - <strong class="iniciativas__negrito">Publico-alvo:</strong> ${iniciativas[i].alvo_projeto} - <strong class="iniciativas__negrito">Contribuição:</strong> ${iniciativas[i].contribuicao_projeto} - <strong class="iniciativas__negrito">Abrangência:</strong> ${iniciativas[i].abrangencia_projeto}</p>
    
                              <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">Município e UF:</strong> ${iniciativas[i].municipio_campus}, ${iniciativas[i].uf_campus}</p>
                              <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">Contato(s):</strong> ${iniciativas[i].contato_projeto}</p>
                          </div>
                      </div>
        `;
    }
}

let limparIniciativas = () => {
    iniciativasPai.innerHTML = '';
}

let inicioDaInsercao = 10;
let inserirIniciativas = (iniciativas, inicio) => {
    let inseriu = true;
    while(iniciativas.length > inicio && inseriu){
        iniciativasPai.innerHTML  += `
            <div class="iniciativa">
                              <div class="iniciativas__numeracao">
                                  <div class="iniciativas__numero">${inicio+1}</div>
                              </div>
        
                              <div class="iniciativas__texto">
        
                                  <h2 class="iniciativas__titulo">${iniciativas[inicio].nome_projeto}</h2>
        
                                  <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">${iniciativas[inicio].universidade_projeto} (${iniciativas[inicio].categoria_universidade})</strong></p>
        
                                  <p class="iniciativas__paragrafos">${iniciativas[inicio].descricao_projeto}</p>
        
                                  <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">Categoria:</strong> ${iniciativas[inicio].categoria_projeto} - <strong class="iniciativas__negrito">Publico-alvo:</strong> ${iniciativas[inicio].alvo_projeto} - <strong class="iniciativas__negrito">Contribuição:</strong> ${iniciativas[inicio].contribuicao_projeto} - <strong class="iniciativas__negrito">Abrangência:</strong> ${iniciativas[inicio].abrangencia_projeto}</p>
        
                                  <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">Município e UF:</strong> ${iniciativas[inicio].municipio_campus}, ${iniciativas[inicio].uf_campus}</p>
                                  <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">Contato(s):</strong> ${iniciativas[inicio].contato_projeto}</p>
                              </div>
                          </div>
            `;
        inseriu = false;
    }

}

let contagemIniciativas = (dadosTotais, contagemAtual) => {

    if(contagemAtual > dadosTotais.length) return;

    divContagemIniciativas.innerHTML = `${contagemAtual} de ${dadosTotais.length}`;
}