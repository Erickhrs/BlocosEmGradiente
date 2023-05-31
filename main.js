let containerleft = document.getElementById("containerleft");
let containerright = document.getElementById("containerright");
let blocktext1 = document.getElementById("blocktext1");
let blocktext2 = document.getElementById("blocktext2");
let block1 = document.getElementById("block1");
let block2 = document.getElementById("block2");
var validador = false;
var validadorr = false;

let cd;
let c1c;
let c2c;

let cdr;
let c1cr;
let c2cr;

var direction = "ola";

//criando um objeto com todos os elemntos da classe .checks
let checksl = document.querySelectorAll(".checksl");
let checksr = document.querySelectorAll(".checksr");

//para cada elemento dentro desse objeto/caixa iremos executar uma ação
//eachelement -  selecionando todos os elementos da caixa e passando pra função como parametro
checksl.forEach(eachelement => {
    eachelement.addEventListener('input', () => {

        //pegando o id do elemento clicado a partir do parametro que entrou
        var idselected = (eachelement.id);
        if (validador == false) {
            switch (idselected) {
                case "to-top":
                    block1.style.background = "linear-gradient(to top, #000000, #FFFFFF)"
                    break;
                case "to-bottom":
                    block1.style.background = "linear-gradient(to bottom, #000000, #FFFFFF)"
                    break;
                case "to-left":
                    block1.style.background = "linear-gradient(to left, #000000, #FFFFFF)"
                    break;
                case "to-right":
                    block1.style.background = "linear-gradient(to right, #000000, #FFFFFF)"
                    break;
                case "to top-left":
                    block1.style.background = "linear-gradient(to top left, #000000, #FFFFFF)"
                    break;
                case "to top":
                    block1.style.background = "linear-gradient(to top, #000000, #FFFFFF)"
                    break;
                case "to top-right":
                    block1.style.background = "linear-gradient(to top right, #000000, #FFFFFF)"
                    break;
                case "to top left":
                    block1.style.background = "linear-gradient(to top left, #000000, #FFFFFF)"
                    break;
                case "to top right":
                    block1.style.background = "linear-gradient(to top right, #000000, #FFFFFF)"
                    break;
                case "to bottom-left":
                    block1.style.background = "linear-gradient(to bottom left, #000000, #FFFFFF)"
                    break;
                case "to-bottom-right":
                    block1.style.background = "linear-gradient(to bottom right, #000000, #FFFFFF)"
                    break;
                case "to top-left":
                    block1.style.background = "linear-gradient(to top left, #000000, #FFFFFF)"
                    break;
                case "to top right":
                    block1.style.background = "linear-gradient(to top right, #000000, #FFFFFF)"
                    break;
                case "to bottom left":
                    block1.style.background = "linear-gradient(to bottom left, #000000, #FFFFFF)"
                    break;
                case "to bottom right":
                    block1.style.background = "linear-gradient(to bottom right, #000000, #FFFFFF)"
            }
        }
        if (validador == true) {
            cd = idselected.replace("-", " ");
            cd = cd.replace("-", " ");
            var novagrad = "linear-gradient(" + cd + ", " + c1c + ", " + c2c + ")"
            block1.style.backgroundImage = (novagrad);
        }



        //se algum elemento da classe for clicado
        if (eachelement.checked) {
            //fazendo a mesma coisa la de cima
            //iremos mandar como parametro cada elemento dentro da caixa "checksl"  
            checksl.forEach((othercheckbox) => {
                //valida se cada elemento do parametro é diferente do elemento clicado
                if (othercheckbox !== eachelement) {
                    othercheckbox.checked = false;
                }
            })
        }


    });
});




//passando todos os elementos da classe pra esse objeto
let incolorsl = document.querySelectorAll(".incolorsl");
let incolorsr = document.querySelectorAll(".incolorsr");
//é passado para a função cada elemento do objeto como parametro
//se algum dos elemenos dessa classe for clicado, ativa essa função
incolorsl.forEach(elements => {
    elements.addEventListener("input", function coresfuncao() {
        //pegando o id do elemento pelo parametro enviado e validando qual é qual
        let idincolorl = (elements.id)
        let cc = block1.style.backgroundImage;
        if (idincolorl == "color1") {
            //CD = CURRENT DIRECTION 
            //pegando a linha de css atual e passando pra variável cc (current color)
            //limpando a string tirando a primeira parte padrão em todos
            cd = cc.replace('linear-gradient(', '')
            //código que a IA fez para retornar tudo que vier antes da virgula
            cd = cd.substring(0, cd.indexOf(',')).trim();

            // C1C = CURRENT FIRST COLOR 
            //limpando a string tirando a primeira parte padrão em todos e a direção
            c1c = cc.replace('linear-gradient(', '')
            c1c = c1c.replace(cd + ",", '')
            //código que a IA fez para retornar tudo que vier antes da do fecha parenteses e virgula
            //depois coloca o parenteses de volta
            c1c = c1c.substring(0, c1c.indexOf('),')).trim();
            c1c = (c1c + ")")
            c1c = (elements.value);

            //C2C = CURRENT SECOND COLOR
            //limpando a string tirando a primeira parte padrão em todos e a direção
            //Depois tirando a primeira cor usando a c1c já pegada
            //depois limpando o fim
            c2c = cc.replace('linear-gradient(', '')
            c2c = c2c.replace(cd + ",", '')
            c2c = c2c.replace(c1c + ",", '')
            c2c = c2c.substring(0, c2c.indexOf(')')).trim();
            c2c = (c2c + ")")

            block1.style.background = "linear-gradient(" + cd + ", " + c1c + ", " + c2c + ")"
            validador = true;
        }
        if (idincolorl == "color2") {
            //CD = CURRENT DIRECTION 
            //pegando a linha de css atual e passando pra variável cc (current color)
            //limpando a string tirando a primeira parte padrão em todos
            cd = cc.replace('linear-gradient(', '')
            //código que a IA fez para retornar tudo que vier antes da virgula
            cd = cd.substring(0, cd.indexOf(',')).trim();

            // C1C = CURRENT FIRST COLOR 
            //limpando a string tirando a primeira parte padrão em todos e a direção
            let c1c = cc.replace('linear-gradient(', '')
            c1c = c1c.replace(cd + ",", '')
            //código que a IA fez para retornar tudo que vier antes da do fecha parenteses e virgula
            //depois coloca o parenteses de volta
            c1c = c1c.substring(0, c1c.indexOf('),')).trim();
            c1c = (c1c + ")")

            //C2C = CURRENT SECOND COLOR
            //limpando a string tirando a primeira parte padrão em todos e a direção
            //Depois tirando a primeira cor usando a c1c já pegada
            //depois limpando o fim
            c2c = cc.replace('linear-gradient(', '')
            c2c = c2c.replace(cd + ",", '')
            c2c = c2c.replace(c1c + ",", '')
            c2c = c2c.substring(0, c2c.indexOf(')')).trim();
            c2c = (c2c + ")")
            c2c = (elements.value);

            block1.style.background = "linear-gradient(" + cd + ", " + c1c + ", " + c2c + ")"
            validador = true;
        }
    })
});


checksr.forEach(elements => {
    elements.addEventListener('input', function () {
        idselected = (elements.id);
        if (validadorr==false){
            switch (idselected) {
                case "circle":
                    block2.style.backgroundImage = "radial-gradient(circle, #000000, #FFFFFF)"
                    break
                case "at-center-Top":
                    block2.style.backgroundImage = "radial-gradient(at center top, #000000, #FFFFFF)"
                    break
                case "at-center-left":
                    block2.style.backgroundImage = "radial-gradient(at center left, #000000, #FFFFFF)"
                    break
            }
        }
        else{
            cdr = idselected.replace("-", " ");
            cdr = cdr.replace("-", " ");
            var novagrad = "radial-gradient(" + cdr + ", " + c1cr + ", " + c2cr + ")"
            block2.style.backgroundImage = (novagrad);
        }

        if (elements.checked) {
            //fazendo a mesma coisa la de cima
            //iremos mandar como parametro cada elemento dentro da caixa "checksl"  
            checksr.forEach((othercheckbox) => {
                //valida se cada elemento do parametro é diferente do elemento clicado
                if (othercheckbox !== elements) {
                    othercheckbox.checked = false;
                }
            })
        }
       
    })
})



incolorsr.forEach(elements => {
    elements.addEventListener("input", function () {
        let ccr = block2.style.backgroundImage;
        idselected = (elements.id)
        if (idselected == "color1r") {
            //CD = CURRENT DIRECTION 
            //pegando a linha de css atual e passando pra variável ccr (current color right)
            //limpando a string tirando a primeira parte padrão em todos
            cdr = ccr.replace('radial-gradient(', '')
            //código que a IA fez para retornar tudo que vier antes da virgula
            cdr = cdr.substring(0, cdr.indexOf(',')).trim();

            // C1C = CURRENT FIRST COLOR 
            //limpando a string tirando a primeira parte padrão em todos e a direção
            c1cr = ccr.replace('radial-gradient(', '')
            c1cr = c1cr.replace(cdr + ",", '')
            //código que a IA fez para retornar tudo que vier antes da do fecha parenteses e virgula
            //depois coloca o parenteses de volta
            c1cr = c1cr.substring(0, c1cr.indexOf('),')).trim();
            c1cr = (c1cr + ")")
            //C2C = CURRENT SECOND COLOR
            //limpando a string tirando a primeira parte padrão em todos e a direção
            //Depois tirando a primeira cor usando a c1c já pegada
            //depois limpando o fim
            c2cr = ccr.replace('radial-gradient(', '')
            c2cr = c2cr.replace(cdr + ",", '')
            c2cr = c2cr.replace(c1cr + ",", '')
            c2cr = c2cr.substring(0, c2cr.indexOf(')')).trim();
            c2cr = (c2cr + ")")
            c1cr = (elements.value);

            block2.style.background = "radial-gradient(" + cdr + ", " + c1cr + ", " + c2cr + ")"
            validadorr = true;
        }
        else {
            //CD = CURRENT DIRECTION 
            //pegando a linha de css atual e passando pra variável cc (current color)
            //limpando a string tirando a primeira parte padrão em todos
            cdr = ccr.replace('radial-gradient(', '')
            //código que a IA fez para retornar tudo que vier antes da virgula
            cdr = cdr.substring(0, cdr.indexOf(',')).trim();

            // C1C = CURRENT FIRST COLOR 
            //limpando a string tirando a primeira parte padrão em todos e a direção
            c1cr = ccr.replace('radial-gradient(', '')
            c1cr = c1cr.replace(cdr + ",", '')
            //código que a IA fez para retornar tudo que vier antes da do fecha parenteses e virgula
            //depois coloca o parenteses de volta
            c1cr = c1cr.substring(0, c1cr.indexOf('),')).trim();
            c1cr = (c1cr + ")")

            //C2C = CURRENT SECOND COLOR
            //limpando a string tirando a primeira parte padrão em todos e a direção
            //Depois tirando a primeira cor usando a c1c já pegada
            //depois limpando o fim
            c2cr = ccr.replace('radial-gradient(', '')
            c2cr = c2cr.replace(cdr + ",", '')
            c2cr = c2cr.replace(c1cr + ",", '')
            c2cr = c2cr.substring(0, c2cr.indexOf(')')).trim();
            c2cr = (c2cr + ")")
            c2cr = (elements.value);

            block2.style.background = "radial-gradient(" + cdr + ", " + c1cr + ", " + c2cr + ")"
            validadorr = true;
        }
    })
})

function openeditl() {
    containerleft.style.display = "block";
}

function closel() {
    containerleft.style.display = "none";
}

function openeditr() {
    containerright.style.display = "block";
}
function closer() {
    containerright.style.display = "none";
}

function showtextblockl() {
    blocktext1.style.display = "inline";
}
function dntshowtextblockl() {
    blocktext1.style.display = "none";
}
function showtextblockr() {
    blocktext2.style.display = "inline";
}
function dntshowtextblockr() {
    blocktext2.style.display = "none";
}
