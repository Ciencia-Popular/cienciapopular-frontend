// Variáveis
var conteudoForaDialog = document.querySelector('#conteudoForaDialog');

var conteudoPrincipal = document.querySelector('.conteudo-principal');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');



// Listener para abrir dialog pelos cards
conteudoPrincipal.addEventListener('click', function(evento) {
  var alvoDoEvento = event.target;
  
  if(alvoDoEvento.classList[0] === "conteudo-principal__cards" || alvoDoEvento.classList[0] === "cards__regiao" || alvoDoEvento.classList[0] === "cards__number" || alvoDoEvento.classList[0] === "cards__content"){
      dialog.classList.add('dialogNewsletter--aberto');
      conteudoForaDialog.inert = true;
  }
});

// Funcao que fecha a dialog
function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto'); 
  conteudoForaDialog.inert = false;
}

// Listeners para fechar
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);
dialogOverlay.addEventListener('click', fechandoDialog);
document.addEventListener('keyup', function(evento) {
  if (evento.keyCode == 27) {
      fechandoDialog()
  }
})

// Listener para subir a página
document.querySelector('.dialog__subir').addEventListener('click', function(){
  dialogBody.scrollTo(0,0);
})








