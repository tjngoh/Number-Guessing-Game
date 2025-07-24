alert('Bem-vindo ao jogo do número secreto!');
let numeroMaximo = 3000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

// Enquanto o número não for o número certo, o programa vai continuar rodando
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    
    // Os chutes
    if (chute == numeroSecreto) {

        
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

if (tentativas > 1) {
    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
