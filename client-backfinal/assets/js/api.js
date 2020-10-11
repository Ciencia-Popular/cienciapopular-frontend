const listarIniciativas = () => { 
    return fetch('https://cienciapop-com-br.umbler.net/projetos')
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
    inserirFiltrosCatIniciativa(dadosBrutos);

    listaIniciativas(dadosBrutos);
    contagemIniciativas(dadosBrutos, inicioDaInsercao);

    filtroRegiao.addEventListener('change', function(){    
        inicioDaInsercao=10;    
        dadosFiltrados = filtrarDadosRegiao(dadosBrutos, this.value);
        limparIniciativas();
        filtroEstado.selectedIndex = 0;
        filtroTipo.selectedIndex = 0;
        filtroCatIniciativa.selectedIndex = 0;
        listaIniciativas(dadosFiltrados);
        contagemIniciativas(dadosFiltrados, inicioDaInsercao);
    });

    filtroEstado.addEventListener('change', function(){
        inicioDaInsercao=10;
        dadosFiltrados = filtrarDadosEstado(dadosBrutos, this.value);
        limparIniciativas();
        filtroRegiao.selectedIndex = 0;
        filtroTipo.selectedIndex = 0;
        filtroCatIniciativa.selectedIndex = 0;
        listaIniciativas(dadosFiltrados); 
        contagemIniciativas(dadosFiltrados, inicioDaInsercao);       
    });

    filtroTipo.addEventListener('change', function(){
        inicioDaInsercao=10;
        dadosFiltrados = filtrarDadosTipo(dadosBrutos, this.value);
        limparIniciativas();
        filtroRegiao.selectedIndex = 0;
        filtroEstado.selectedIndex = 0;
        filtroCatIniciativa.selectedIndex = 0;
        listaIniciativas(dadosFiltrados); 
        contagemIniciativas(dadosFiltrados, inicioDaInsercao);       
    });

    filtroCatIniciativa.addEventListener('change', function(){
        inicioDaInsercao=10;
        dadosFiltrados = filtrarDadosCatIniciativa(dadosBrutos, this.value);
        limparIniciativas();
        filtroRegiao.selectedIndex = 0;
        filtroEstado.selectedIndex = 0;
        filtroTipo.selectedIndex = 0;
        listaIniciativas(dadosFiltrados);
        contagemIniciativas(dadosFiltrados, inicioDaInsercao);        
    });


    botaoDialog.addEventListener("click", function(){  
        if(filtroRegiao.value != "Regiao"){
            inserirIniciativas(dadosFiltrados, inicioDaInsercao);
            contagemIniciativas(dadosFiltrados, inicioDaInsercao+1);
        }
        else if(filtroEstado.value != "Estado"){
            inserirIniciativas(dadosFiltrados, inicioDaInsercao);
            contagemIniciativas(dadosFiltrados, inicioDaInsercao+1);
        }
        else if(filtroTipo.value != "Tipo"){
            inserirIniciativas(dadosFiltrados, inicioDaInsercao);
            contagemIniciativas(dadosFiltrados, inicioDaInsercao+1);
        }
        else if(filtroCatIniciativa.value != "CatIniciativa"){
            inserirIniciativas(dadosFiltrados, inicioDaInsercao);
            contagemIniciativas(dadosFiltrados, inicioDaInsercao+1);
        }
        else{
            inserirIniciativas(dadosBrutos, inicioDaInsercao);
            contagemIniciativas(dadosBrutos, inicioDaInsercao+1);
        }
        inicioDaInsercao+=1;       
    });
});
