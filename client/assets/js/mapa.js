(function() {
                
    var states = document.getElementsByClassName("estado")
    
    for(var i = 0; i < states.length; i++) {
        states[i].onclick = function() {
            console.log(this.getAttribute('name') + ' ' + this.getAttribute('code'));
            dialog.classList.add('dialogNewsletter--aberto');
            conteudoForaDialog.inert = true;
        }
    }
    
})();