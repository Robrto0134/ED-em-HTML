const inc = document.getElementById('button1');
const rem = document.getElementById('button2');
const est = document.getElementById("est");
var i = 0;

console.log(est);

contador = 0;
exc = 0;

document.getElementById('exp').innerHTML = "Temos "+ contador +" elementos";

function adicionar(){
    var text = document.getElementById('input').value;

    var checkFil = document.getElementById('fila');
    var checkPil = document.getElementById('pilha');
    var checkLis = document.getElementById('lista');
    var checkLise = document.getElementById('listae');
    var checkLisd = document.getElementById('listad');

    if(checkFil.checked == true){

        var elem = document.createElement("cl");
        elem.classList.add('shadowbox');

        elem.appendChild(document.createTextNode(text));
        console.log(elem);
        est.appendChild(elem);
        contador += 1;
    }

    if(checkPil.checked == true){
        
        var itens = document.getElementsByTagName('li');
        var elem = document.createElement("li");
        elem.classList.add('shadowbox');

        elem.appendChild(document.createTextNode(text));
        console.log(elem);
        est.insertBefore(elem, itens[0]);
        
        contador += 1;
    }

    if(checkLis.checked == true){
        
        var posicao = document.getElementById('posicao').value;

        for(i == 0; i < 10; i++){
        var elem = document.createElement("cl");
        elem.classList.add('shadowbox');

        console.log(elem);
        est.appendChild(elem);
        }
        var itens = document.getElementsByTagName('cl');
        if(posicao == 1 && contador == 0)
            itens[0].innerHTML = text;
        else{
            for(var j = contador; j > posicao-1; j--)
                itens[j].innerHTML = itens[j-1].innerHTML;
            itens[posicao-1].innerHTML = text;
        }
        contador++;
    }

    if(checkLise.checked == true){

        var itens = document.getElementsByTagName('cl');
        var posicao = document.getElementById('posicao').value;
        var elem = document.createElement("cl");
        elem.classList.add('shadowbox');

        posicao -= 1;

        elem.appendChild(document.createTextNode(text));
        console.log(elem);
        est.insertBefore(elem, itens[posicao]);
        contador += 1;
        document.getElementById('listt').innerHTML = "Lista Encadeada --------------- "+ itens[0].innerHTML +" é o primeiro elemento";
    }

    if(checkLisd.checked == true){
        var posicao = document.getElementById('posicao').value;
        if(contador > 0){
            var itens = document.getElementsByTagName('cl');
            
            var elem = document.createElement("cl");
            elem.classList.add('shadowbox');

            posicao -= 1;

            elem.appendChild(document.createTextNode(text));
            console.log(elem);
            est.insertBefore(elem, itens[posicao]);
            var ult = est.lastElementChild.textContent;
            document.getElementById('listt2').innerHTML = "Lista Duplamente Encadeada --------------- "+ itens[0].innerHTML +" é o primeiro elemento e " + ult + " o último";
        }else{
            var elem = document.createElement("cl");
            elem.classList.add('shadowbox');
            elem.appendChild(document.createTextNode(text));
            console.log(elem);
            est.appendChild(elem);
        }
        contador += 1;
    }
    
    document.getElementById('exp').innerHTML = "Temos "+ contador +" elementos";
}

inc.addEventListener('click', adicionar);

function remover(){
    
    var checkPil = document.getElementById('pilha');
    var checkLis = document.getElementById('lista');
    var checkLise = document.getElementById('listae');
    var checkLisd = document.getElementById('listad');

    if(checkLise.checked == true){
        
        var head = document.querySelector("#est > cl:first-of-type");
        var posicao = document.getElementById('posicao').value;
        console.log(posicao);
        if(posicao == 1){
            var aux = document.querySelector("#est cl");
            est.removeChild(aux);
        }else{
            
            const head = document.getElementById("est");
            var aux = head.firstChild;
                
                for(var j = 0; j < posicao-1; j++){
                    var aux = aux.nextElementSibling;
                }  
        }
        head = document.querySelector("#est > cl:first-of-type");
        var conteudo = head.innerHTML;
        var ult = est.lastElementChild.textContent;
        document.getElementById('listt').innerHTML = "Lista Encadeada --------------- "+ conteudo +" é o primeiro elemento";
        contador -= 1;
        aux.remove();

    }else if(checkLisd.checked == true){
        
        var head = document.querySelector("#est > cl:first-of-type");
        var posicao = document.getElementById('posicao').value;
        console.log(posicao);
        if(posicao == 1){
            var aux = document.querySelector("#est cl");
            est.removeChild(aux);
        }else{

            const head = document.getElementById("est");
            var aux = head.firstChild;
                
                for(var j = 0; j < posicao-1; j++){
                    var aux = aux.nextElementSibling;
                }
            est.removeChild(aux);
        }
        head = document.querySelector("#est > cl:first-of-type");
        var conteudo = head.innerHTML;
        var ult = est.lastElementChild.textContent;
        document.getElementById('listt2').innerHTML = "Lista Duplamente Encadeada --------------- "+ conteudo +" é o primeiro elemento e " + ult + " o último";
        contador -= 1;
        aux.remove();

    }else if(checkPil.checked == true){

        var aux = document.querySelector("#est li");
        est.removeChild(aux);
        
        contador -= 1;

    }else if(checkLis.checked == true){

        var itens = document.getElementsByTagName('cl');
        var posicao = document.getElementById('posicao').value;

        for(var j = posicao-1; j < contador-1; j++){
            itens[j].innerHTML = itens[j+1].innerHTML;
        }
        itens[j].innerHTML = null;
    
    }else{

        var aux = document.querySelector("#est cl");
        est.removeChild(aux);
        
        contador -= 1;
    }
    document.getElementById('exp').innerHTML = "Temos "+ contador +" elementos";
}  
rem.addEventListener('click', remover);