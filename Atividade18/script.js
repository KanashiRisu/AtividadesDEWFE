//Coloquei um "2" no final para ter moda, mas funciona mesmo sem moda.
let par_impar = [2, 5, 7, 75, 0, 49, 82, -4, 13, 6, 10,2];

function pares() {
    console.clear();
    
    par_impar.forEach(function(resultado){
        if (resultado%2==0) {
            console.log(resultado)
        }
        
    });
}
function impares() {
    console.clear();
    
    par_impar.forEach(function(resultado){
        if (resultado%2!=0) {
            console.log(resultado)
        }
        
    });
}


function media() {
    console.clear();
    
    let soma = 0;

    par_impar.forEach(function(numero){
        soma+=numero;
    })

    let media = soma/par_impar.length;

    console.log(media)
}

function moda() {
    console.clear();

    const frequencia = {};
    
    let maiorFreq = 0;


    for (const num of par_impar){
        frequencia[num] = (frequencia[num] || 0)+1;
        
        if (frequencia[num] > maiorFreq){
            maiorFreq = frequencia[num];
        }
    
    }

    if (maiorFreq <= 1){
        console.log("Sem moda")
    }else{
        for (const chave in frequencia){
            if (frequencia[chave]===maiorFreq){
                console.log(chave);
            }
        }
    }
    
}

function mediana() {
    console.clear();
    let ordCres = par_impar.sort(function(a,b){return b - a});
    let metade = Math.floor(ordCres.length/2);

    if (ordCres.length %2 !== 0) {
        console.log(ordCres[metade]);
    }else{
        console.log(ordCres[metade-1]+ordCres[metade]/2)
    }

}

function dv() {
    console.clear();
    
    let soma = 0;
    let varian = 0;

    par_impar.forEach(function(numero){
        soma+=numero;
    })

    let media = soma/par_impar.length;

    par_impar.forEach(function(numero){
        varian += Math.pow(numero - media, 2);
    });
    varian = varian/par_impar.length;
    
    let desvio = Math.sqrt(varian);

    console.log(desvio);

}

/* function add() {
    par_impar.push(Math.random()*10)
}

function exc() {
    par_impar.pop
} */