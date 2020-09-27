let iniciativasPai = document.querySelector('#iniciativaPai');

let listaIniciativas = (iniciativas) => {

    for(let i = 0; i < 10; i++){
        
        iniciativasPai.innerHTML += `
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