const listarIniciativas = () => { 
    return fetch('http://localhost:3000/')
    .then( resposta => {
        return resposta.json();
    })
    .then( json => {
        return json;
    });
};

listarIniciativas().then(dadosBrutos => { 
    inserirNumerosNoContent(dadosBrutos);

    inserirFiltrosRegioes(dadosBrutos);
    inserirFiltrosEstado(dadosBrutos);
    inserirFiltrosTipo(dadosBrutos);

    listaIniciativas(dadosBrutos);

    filtroRegiao.addEventListener('change', function(){
        let dadosFiltradosRegiao = [];
        dadosFiltradosRegiao = filtrarDadosRegiao(dadosBrutos, this.value);
        limparIniciativas();
        filtroEstado.selectedIndex = 0;
        filtroTipo.selectedIndex = 0;
        listaIniciativas(dadosFiltradosRegiao);
    });
    filtroEstado.addEventListener('change', function(){
        let dadosFiltradosEstado = [];
        dadosFiltradosEstado = filtrarDadosEstado(dadosBrutos, this.value);
        limparIniciativas();
        filtroRegiao.selectedIndex = 0;
        filtroTipo.selectedIndex = 0;
        listaIniciativas(dadosFiltradosEstado);        
    });
    filtroTipo.addEventListener('change', function(){
        let dadosFiltradosTipo = [];
        dadosFiltradosTipo = filtrarDadosTipo(dadosBrutos, this.value);
        limparIniciativas();
        filtroRegiao.selectedIndex = 0;
        filtroEstado.selectedIndex = 0;
        listaIniciativas(dadosFiltradosTipo);        
    });
});
