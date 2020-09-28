//Filtrar seguindo o combox de regioes
let filtroRegiao = document.querySelector('#filtro-regiao');
filtrarDadosRegiao = (dadosBrutos, valor) => {
    let filtrando = [];

    if(valor === "Regiao") return dadosBrutos;

    for(let i = 0; i < dadosBrutos.length; i++){
        if(dadosBrutos[i].regiao === valor){
            filtrando.push(dadosBrutos[i]);
        }
    }

    return filtrando;
}

//Filtrar seguindo o combox de estados
let filtroEstado = document.querySelector('#filtro-estado');
filtrarDadosEstado = (dadosBrutos, valor) => {
    let filtrando = [];

    if(valor === "Estado") return dadosBrutos;

    for(let i = 0; i < dadosBrutos.length; i++){
        if(dadosBrutos[i].uf === valor){
            filtrando.push(dadosBrutos[i]);
        }
    }

    return filtrando;
}

//Filtrar seguindo o combox de tipo
let filtroTipo = document.querySelector('#filtro-tipo');
filtrarDadosTipo = (dadosBrutos, valor) => {
    let filtrando = [];

    if(valor === "Tipo") return dadosBrutos;

    for(let i = 0; i < dadosBrutos.length; i++){
        if(dadosBrutos[i].catInstituicao === valor){
            filtrando.push(dadosBrutos[i]);
        }
    }

    return filtrando;
}

//Preencher o combobox de estado com os estados que tem projetos
let comboBoxRegioes = document.querySelector('#filtro-regiao');
let inserirFiltrosRegioes = (dadosBrutos) => {
    comboBoxRegioes.innerHTML = '<option value="Regiao" class="filtros__option">Região</option>';
    
    let regioes = [];
    for(let i = 0; i<dadosBrutos.length; i++){
        regioes.push(dadosBrutos[i].regiao);
    } 
    let unique = [...new Set(regioes)];  
    unique.sort(); 
    
    for(let i = 0; i < unique.length; i++){
        comboBoxRegioes.innerHTML += `<option  value="${unique[i]}" class="filtros__option">${unique[i]}</option>`;
    }
}

//Preencher o combobox de estado com os estados que tem projetos
let comboBoxEstado = document.querySelector('#filtro-estado');
let inserirFiltrosEstado = (dadosBrutos) => {
    comboBoxEstado.innerHTML = '<option value="Estado" class="filtros__option">Estado</option>';
    
    let estados = [];
    for(let i = 0; i<dadosBrutos.length; i++){
        estados.push(dadosBrutos[i].uf);
    } 
    let unique = [...new Set(estados)];  
    unique.sort(); 
    
    for(let i = 0; i < unique.length; i++){
        comboBoxEstado.innerHTML += `<option value="${unique[i]}" class="filtros__option">${unique[i]}</option>`;
    }
}

//Preencher o combobox de tipo de instituiçao com as instituições mapeadas
let comboBoxTipo = document.querySelector('#filtro-tipo');
let inserirFiltrosTipo = (dadosBrutos) => {
    comboBoxTipo.innerHTML = '<option value="Tipo" class="filtros__option">Tipo</option>';
    
    let tipos = [];
    for(let i = 0; i<dadosBrutos.length; i++){
        tipos.push(dadosBrutos[i].catInstituicao);
    } 
    let unique = [...new Set(tipos)];  
    unique.sort(); 
    
    for(let i = 0; i < unique.length; i++){
        comboBoxTipo.innerHTML += `<option value="${unique[i]}" class="filtros__option">${unique[i]}</option>`;
    }
}