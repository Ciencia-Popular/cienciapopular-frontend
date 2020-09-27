const listarIniciativas = () => { 
    return fetch('http://localhost:3000/')
    .then( resposta => {
        console.log(resposta);
        return resposta.json();
    })
    .then( json => {
        return json;
    });
};

listarIniciativas().then( exibe => {
    


    inserirNumerosNoContent(exibe);

    listaIniciativas(exibe)
});
