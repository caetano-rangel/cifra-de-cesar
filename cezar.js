//CIFRA DE CESAR - CRIPTOGRAFIA

function calculate(){
    let texto = document.querySelector("#texto")
    let keyValue = parseInt(document.querySelector("#key").value)

    let textoValue = texto.value
    //let keyValue = key.value

    let n = textoValue.length
    let newText = "";
    let num;

    //CHARCODEAT = TRASNFORMA EM ASCII
    //FROMCHARCODE = DEVOLVE PARA STRING

    for (let i = 0; i < n; i++){
        
        num = textoValue.charCodeAt([i]);

        //LETRAS MAIUSCULAS
        if(num >= 65 && num <= 90){
            num = ((num - 65 + keyValue) % 26) + 65;
            newText = newText.concat(String.fromCharCode(num));
            num = 0;
        }
        //LETRAS MINUSCULAS
        else if(num >= 97 && num <= 122){
           num = ((num - 97 + keyValue) % 26)+ 97;
           newText = newText.concat(String.fromCharCode(num));
           num = 0;
        }
        //ESPAÇO BUG
        else{
            newText = newText.concat(String.fromCharCode(num));
        }
    }
    document.getElementById("resultado").innerText = newText;
}