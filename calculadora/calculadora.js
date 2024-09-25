function calcular(){

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;

    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break; 

        case 'subt':
                resultado = num1 - num2;
                break;

        case 'multip':
                resultado = num1 * num2;
                break; 
                
        case 'div':    
            resultado = num2 != 0 ? num1 /  num2: "!Erro! Divisão por zero."
            break;
    }
    document.getElementById('resultado').textContent = `${resultado}`
}

function limpar(){
    
}