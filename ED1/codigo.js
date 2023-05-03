const inc = document.getElementById('button1');
const rem = document.getElementById('button2');
var est = document.getElementById("est");
console.log(est);

contador = 0;

document.getElementById('exp').innerHTML = "Temos "+ contador +" elementos";

function adicionar(){
    var text = document.getElementById('input').value;

    var checkFil = document.getElementById('fila');
    var checkPil = document.getElementById('pilha');
    var checkLis = document.getElementById('lista');

    if(checkFil.checked == true){

        var elem = document.createElement("cl");

        elem.appendChild(document.createTextNode(text));
        console.log(elem);
        est.appendChild(elem);
        contador += 1;
    }

    if(checkPil.checked == true){
        
        var itens = document.getElementsByTagName('cl');
        var elem = document.createElement("cl");

        elem.appendChild(document.createTextNode(text));
        console.log(elem);
        est.insertBefore(elem, itens[0]);
        contador += 1;
    }

    if(checkLis.checked == true){

        var itens = document.getElementsByTagName('cl');
        var posicao = document.getElementById('posicao').value;
        var elem = document.createElement("cl");
        
        posicao -= 1;

        elem.appendChild(document.createTextNode(text));
        console.log(elem);
        est.insertBefore(elem, itens[posicao]);
        contador += 1;
    }

    document.getElementById('exp').innerHTML = "Temos "+ contador +" elementos";
}

inc.addEventListener('click', adicionar);

function remover(){
    
    var checkLis = document.getElementById('lista');
    
    if(checkLis.checked == true){
        
        const head = document.querySelector("#est > cl:first-of-type");
        var posicao = document.getElementById('posicao').value;
        
        if(posicao == 1){
            var aux = document.querySelector("#est cl");
            est.removeChild(aux);
        }else{   
            const head = document.querySelector("#est > cl:first-of-type");
            var aux = head.nextElementSibling;
        
            for(i = 1; i < posicao-1; i++)
                aux = aux.nextElementSibling;  
        }
        contador -= 1;
        aux.remove();
    }else{

        var aux = document.querySelector("#est cl");
        est.removeChild(aux);
        
        contador -= 1;
    }
    document.getElementById('exp').innerHTML = "Temos "+ contador +" elementos";
}  
rem.addEventListener('click', remover);