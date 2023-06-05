const inc = document.getElementById('button1');
const rem = document.getElementById('button2');
const cons = document.getElementById('button3');
const est = document.getElementById("est");

console.log(est);

contador = 0;
exc = 0;

document.getElementById('exp').innerHTML = "Temos "+ contador +" elementos";

function adicionar(){
    var arvore = ArvoreBuscaBinaria;
    var text = document.getElementById('input').value;
    var canvas = document.getElementById('meuRetangulo');
    var context = canvas.getContext('2d');

    var checkFil = document.getElementById('fila');
    var checkPil = document.getElementById('pilha');
    var checkLis = document.getElementById('lista');
    var checkLise = document.getElementById('listae');
    var checkLisd = document.getElementById('listad');
    var checkArv = document.getElementById('arvore');

    if(checkFil.checked == true){
        var elem = document.createElement("cl");
        elem.classList.add('shadowbox');

        elem.appendChild(document.createTextNode(text));
        console.log(elem);
        est.appendChild(elem);
        contador++;
    }

    if(checkPil.checked == true){
        var itens = document.getElementsByTagName('li');
        var elem = document.createElement("li");
        elem.classList.add('shadowbox');
        elem.style = "list-style: none;"
        elem.appendChild(document.createTextNode(text));
        console.log(elem);
        est.insertBefore(elem, itens[0]);
        
        contador++;
    }

    if(checkLis.checked == true){
        var posicao = document.getElementById('posicao').value;
        if(!est.hasChildNodes()){
            for(var i = 0; i < 10; i++){
                var elem = document.createElement("cl");
                elem.classList.add('shadowbox');
                console.log(elem);
                est.appendChild(elem);
            }
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
        contador++;
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
        contador++;
    }

    if(checkArv.checked == true){
        if(contador == 0){
            var novoNo = new No(text);
            arvore.insercao(novoNo);
            var elem = document.createElement("cl");
            elem.classList.add('shadowbox');    
            elem.appendChild(document.createTextNode(text));
            console.log(elem);
            est.appendChild(elem);
            
            var aux = est.firstChild;
            aux.style.position = "relative";
            aux.style.left = "900px";
            aux.style.top = "1px"
            aux.style.width = "25px";
            contador++;
        }else{
            var novoNo = new No(text);
            arvore.insercao(novoNo);
            var topo = est.firstChild;
            var aux = topo;
            var raiz = topo;
            var aq = topo;
            var desceu = 1;
            var temp = 0;
            var tempAnt = 0;
            for(var i = 1; i < contador; i++){
                aux = aux.nextElementSibling;
                temp = parseInt(topo.innerHTML);
                var configR = aq.getBoundingClientRect();
                var configF = aux.getBoundingClientRect();
                if(temp > text && configR.x > configF.x){
                    aq = aux;
                    desceu++;
                }
                if(temp < text && configR.x < configF.x){
                    aq = aux;
                    desceu++;
                }
            }
            var configP = aq.getBoundingClientRect();
            var elem = document.createElement("cl");
            elem.classList.add('shadowbox');
        
            elem.appendChild(document.createTextNode(text));
            console.log(elem);
            est.appendChild(elem);

            aux = est.lastChild;
            
            aux.style.position = "absolute";
            var esquerda = 400 / desceu;
            var cima = 40 * desceu;
            temp = parseInt(aq.innerHTML)
            if(temp > text){
                aux.style.left = (configP.x - esquerda) + "px";
                aux.style.top = (configP.y + cima) + "px";
                aux.style.width = "25px";
            }
            if(temp < text){
                aux.style.left = (configP.x + esquerda) + "px";
                aux.style.top = (configP.y + cima) + "px";
                aux.style.width = "25px";
            }
            contador++;
            configF = aux.getBoundingClientRect();
            context.lineTo(configP.x+20, configP.y-435);
            context.lineTo(configF.x+20, configF.y-435);
            context.stroke();
        }
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

function consultar(){
    var valor = prompt("Qual número deve ser consultado?");
    var cont = 0;
    var aux = est.firstChild;
            
    for(var j = 0; j < contador; j++){
        var temp = parseInt(aux.innerHTML);
        console.log(valor);
        if (temp == valor) {
            cont++;
            console.log(cont);
        }
        var aux = aux.nextElementSibling;
    }  
    alert("Foram encontradas " + cont + " ocorrencias");
}
cons.addEventListener('click', consultar);

//class
class No{
    constructor(data, esquerda = null, direita = null){
        this.data = data;
        this.esquerda = esquerda;
        this.direita = null;
    }
}

class ArvoreBuscaBinaria{
    constructor(root = null){
        this.root = null;
    }
}

ArvoreBuscaBinaria.insercao = function(data){
    let novoNo = new No(data);
    console.log(data);
    console.log(this.root);
    if (this.root === undefined){
        this.root = novoNo;
    } else {
        this.inserirNo(this.root, novoNo);
    }
};

ArvoreBuscaBinaria.inserirNo = function(no, novoNo){
    if (novoNo.data < no.data){
        if (no.esquerda === null){
            no.esquerda = novoNo;
        } else {
            this.inserirNo(no.esquerda, novoNo);
        }
    } else {
        if (no.direita === null){
            no.direita = novoNo;
        } else {
            this.inserirNo(no.direita, novoNo);
        }
    }
};

ArvoreBuscaBinaria.pesquisarPai = function(no, data){
    if (no === null){
        return null;
    }
    else if (data < no.esquerda.data){
        return this.Pesquisar(no.esquerda, data);
    } else if (data > no.direita.data){
        return this.Pesquisar(no.direita, data);
    } else {
        return no;
    }
};