let dadosTotais = [];

(function() {
                
    var states = document.getElementsByClassName("estado")
    
    for(var i = 0; i < states.length; i++) {
        states[i].onclick = function() {
            inicioDaInsercao=10;
            dadosFiltrados = filtrarDadosEstado(dadosTotais, this.getAttribute('name'));
            limparIniciativas();
            filtroRegiao.selectedIndex = 0;
            filtroTipo.selectedIndex = 0;
            listaIniciativas(dadosFiltrados);

            for(let i = 0; i < filtroEstado.length; i++){
                if(this.getAttribute('name') == filtroEstado[i].value){
                    filtroEstado.selectedIndex = i;
                }
            }

            dialog.classList.add('dialogNewsletter--aberto');
            conteudoForaDialog.inert = true;
        }
    }
    
})();