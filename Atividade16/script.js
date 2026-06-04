const btn = document.getElementById('btnLimpar')
const listaTarefas = document.getElementById('listaTarefas');
let contagem = 1;

function addTarefa() {
    const inputElement = document.getElementById('novaTarefa');
    const mensagemElement = document.getElementById('mensagem');
    
    let novaTarefa = document.createElement('li');
    let mensagem, cor;
    
    tarefa = inputElement.value;
    
    
    if (TarefaValida(tarefa)) {
        novaTarefa.textContent = contagem + "° " + tarefa;
        contagem++;
        listaTarefas.appendChild(novaTarefa);        
        
        mensagem = "Adicionado com Sucesso";
        cor = 'green';
    }else{
        mensagem = "Tarefa vazia, redigite";
        cor = 'red';
    }
    
    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;
    
    inputElement.value = "";
    inputElement.focus();

    
    botao(contagem);
}

function TarefaValida(tarefa) {
    return tarefa.trim().length >= 5;
}

function limpar() {
    listaTarefas.innerHTML='';
    contagem = 1;
    botao(contagem);
}

function botao(contagem) {
    if (contagem > 1) {
        btn.style.display = 'block';
    }else{
        btn.style.display = 'none';

    }
}