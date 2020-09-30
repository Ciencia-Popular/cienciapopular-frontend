const listarIniciativas = () => { 
    return fetch('https://cienciapopular-com-br.umbler.net/projetos')
    .then( resposta => {
        return resposta.json();
    })
    .then( json => {
        return json;
    });
};

listarIniciativas().then(dadosBrutos => { 
    dadosTotais = dadosBrutos;
    inserirNumerosNoContent(dadosBrutos);

    inserirFiltrosRegioes(dadosBrutos);
    inserirFiltrosEstado(dadosBrutos);
    inserirFiltrosTipo(dadosBrutos);

    listaIniciativas(dadosBrutos);

    filtroRegiao.addEventListener('change', function(){    
        inicioDaInsercao=10;    
        dadosFiltrados = filtrarDadosRegiao(dadosBrutos, this.value);
        limparIniciativas();
        filtroEstado.selectedIndex = 0;
        filtroTipo.selectedIndex = 0;
        listaIniciativas(dadosFiltrados);
    });

    filtroEstado.addEventListener('change', function(){
        inicioDaInsercao=10;
        dadosFiltrados = filtrarDadosEstado(dadosBrutos, this.value);
        limparIniciativas();
        filtroRegiao.selectedIndex = 0;
        filtroTipo.selectedIndex = 0;
        listaIniciativas(dadosFiltrados);        
    });

    filtroTipo.addEventListener('change', function(){
        inicioDaInsercao=10;
        dadosFiltrados = filtrarDadosTipo(dadosBrutos, this.value);
        limparIniciativas();
        filtroRegiao.selectedIndex = 0;
        filtroEstado.selectedIndex = 0;
        listaIniciativas(dadosFiltrados);        
    });

    botaoDialog.addEventListener("click", function(){  
        if(filtroRegiao.value != "Regiao"){
            inserirIniciativas(dadosFiltrados, inicioDaInsercao);
        }
        else if(filtroEstado.value != "Estado"){
            inserirIniciativas(dadosFiltrados, inicioDaInsercao);
        }
        else if(filtroTipo.value != "Tipo"){
            inserirIniciativas(dadosFiltrados, inicioDaInsercao);
        }
        else{
            inserirIniciativas(dadosBrutos, inicioDaInsercao);
        }
        inicioDaInsercao+=1;       
    });
});
