const express = require('express');
const {google} = require('googleapis');
const keys = require('./keys.json');
const cors = require('cors');
const app = express();
app.use(cors());
const info = [];

const client = new google.auth.JWT(
    keys.client_email, null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets.readonly']
);


client.authorize(function(err, tokens){

    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('Sheets conectou!');
        gsrun(client);
    }
});


async function gsrun(cl){

    const gsapi = google.sheets({version:'v4', auth:cl});

    const opt = {
        spreadsheetId: '1X3tuDP61AhD3NcK2tsKOnlLUDIf6egY1bH8sjiqtBbs',
        range: 'Data!A2:S'
    }

    let data = await gsapi.spreadsheets.values.get(opt);

    for(let i=0; i<data.data.values.length; i++){
            info.push({
                regiao:data.data.values[i][0],
                projeto:data.data.values[i][1],
                descricao:data.data.values[i][3],
                instituicao:data.data.values[i][4],
                catInstituicao:data.data.values[i][5],
                uf:data.data.values[i][7],
                municipio:data.data.values[i][8],
                contato:data.data.values[i][11],
                categoria:data.data.values[i][12],
                publicoAlvo:data.data.values[i][14],
                abrangencia:data.data.values[i][15],
                contribuicao:data.data.values[i][16],
            });
    }
}


app.listen(3000, function() {
    console.log(`Servidor rodando na porta 3000`);
});


app.get('/', function(req, resp) {
    resp.send(info);
});