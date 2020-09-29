let iniciativasPai = document.querySelector('#iniciativaPai');
let botaoDialog = document.querySelector('.dialog__botao');
let dadosFiltrados = [];

let listaIniciativas = (iniciativas) => {
    for(let i = 0; i < 10; i++){        
        iniciativasPai.innerHTML  += `
        <div class="iniciativa">
                          <div class="iniciativas__numeracao">
                              <div class="iniciativas__numero">${i+1}</div>
                          </div>
    
                          <div class="iniciativas__texto">
    
                              <h2 class="iniciativas__titulo">${iniciativas[i].projeto}</h2>
    
                              <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">${iniciativas[i].instituicao} (${iniciativas[i].catInstituicao})</strong></p>
    
                              <p class="iniciativas__paragrafos">${iniciativas[i].descricao}</p>
    
                              <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">Categoria:</strong> ${iniciativas[i].categoria} - <strong class="iniciativas__negrito">Publico-alvo:</strong> ${iniciativas[i].publicoAlvo} - <strong class="iniciativas__negrito">Contribuição:</strong> ${iniciativas[i].contribuicao} - <strong class="iniciativas__negrito">Abrangência:</strong> ${iniciativas[i].abrangencia}</p>
    
                              <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">Município e UF:</strong> ${iniciativas[i].municipio}, ${iniciativas[i].uf}</p>
                              <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">Contato(s):</strong> ${iniciativas[i].contato}</p>
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
    iniciativasPai.innerHTML  += `
    <div class="iniciativa">
                      <div class="iniciativas__numeracao">
                          <div class="iniciativas__numero">${inicio+1}</div>
                      </div>

                      <div class="iniciativas__texto">

                          <h2 class="iniciativas__titulo">${iniciativas[inicio].projeto}</h2>

                          <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">${iniciativas[inicio].instituicao} (${iniciativas[inicio].catInstituicao})</strong></p>

                          <p class="iniciativas__paragrafos">${iniciativas[inicio].descricao}</p>

                          <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">Categoria:</strong> ${iniciativas[inicio].categoria} - <strong class="iniciativas__negrito">Publico-alvo:</strong> ${iniciativas[inicio].publicoAlvo} - <strong class="iniciativas__negrito">Contribuição:</strong> ${iniciativas[inicio].contribuicao} - <strong class="iniciativas__negrito">Abrangência:</strong> ${iniciativas[inicio].abrangencia}</p>

                          <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">Município e UF:</strong> ${iniciativas[inicio].municipio}, ${iniciativas[inicio].uf}</p>
                          <p class="iniciativas__paragrafos"><strong class="iniciativas__negrito">Contato(s):</strong> ${iniciativas[inicio].contato}</p>
                      </div>
                  </div>
    `;
}