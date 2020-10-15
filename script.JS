//array para acender as cor aleátoriamente
let order=[];
//array ordem do clics
let orderClicked= [];
let score=0;
//NUMEROS PARA CORES 0=VERDE 1=VERMELHO 2=AMARELO 3=AZUL
//constante para cada cor
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

//CRIAR ORDEM ALEATÓRIA DE CORES
let shuffleOrder = () =>{
    //variavel para guardar numero aleatorio a cada rodada
    let colorOrder = Math.floor(Math.random()*4);
    //atribuir o indice ao array order
    order[order.length] = colorOrder;
    orderClicked = [];
    for(let i in order){
        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor,Number(i)+1);
    }
}
//ACENDE A PRÓXIMA COR
let ligthColor = (element,number)=>{
    number= number*500;
    setTimeout(()=>{
        element.classList.add('selected');

    },number - 250);
    setTimeout(()=>{
        element.classList.remove('selected');

    });
}
    //VERFICA SE OS BOTÉS CLICADOS SÃO OS MESMO DO JOGO
    let checkOrder =()=>{
        for(let i in orderClicked){
           if(orderClicked[i]!=order[i]){
               lose();
               break;
           }
        }
        if(orderClicked.length==order.length){
            alert(`Pontuação:${score}\nVocê acertou! Iniciando próximo nível`);
            nextLevel();
        }
    }

//FUNÇÃO PARA O CLIQUE DO USUARIO
let click = (color)=>{
    orderClicked[orderClicked.length]= color;
    createColorElement(color).classList.add('selected');

    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
    
}
//FUNÇÃO QUE RETORNA A COR
let createColorElement = (color)=>{
    if(color==0){
        return green;
    }else if(color==1){
        return red;
    }else if(color==2){
        return yellow;
    }else if(color==3){
        return blue;
    }
}
//FUNÇÃO PROXIMO NIVEL DO JOGO
let nextLevel = ()=>{
score++;
shuffleOrder();
}
//FUNÇÃO PARA GAME OVER
let  lose = ()=>{
    alert(`Pontuação:${score}!\nVocê perdeu o jogo!\n Clique em Ok para iniciar um novo jogo.`);
    order =[];
    orderClicked = [];
    iniciarGame();
}
//FUNÇÃO PARA INICIO DO JOGO
let iniciarGame = ()=>{
    alert('Bem vindo ao GENESIS! Iniciando novo jogo');
    score=0;
    nextLevel();
    }
    //EVENTOS PARA AS CORES
green.onclick=()=>click(0);
red.onclick=()=>click(1);
yellow.onclick=()=>click(2);
blue.onclick=()=>click(3);
iniciarGame();