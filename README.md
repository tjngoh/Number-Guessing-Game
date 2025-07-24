# Number Guessing Game

Um jogo simples de adivinhação de números, desenvolvido com JavaScript puro, HTML e CSS. O usuário deve adivinhar um número gerado aleatoriamente com base no feedback fornecido pela interface. Ideal para praticar manipulação básica do DOM, lógica condicional e tratamento de entrada do usuário.

[🔗 Jogue agora](https://tjngoh.github.io/Number-Guessing-Game/)

## Funcionalidades

- Geração aleatória de números dentro de um intervalo definido  
- Validação de entrada e feedback em tempo real  
- Contador de tentativas  
- Funcionalidade de reinício do jogo  
- Layout responsivo com interface limpa  

## Tecnologias Utilizadas

- HTML5  
- CSS3 (estilização personalizada, sem frameworks)  
- JavaScript (ES6+)  

## Estrutura do Projeto

    ├── index.html        // Estrutura principal da página  
    ├── style.css         // Regras de estilo e layout  
    └── script.js         // Lógica do jogo e manipulação do DOM

## Como Funciona

1. Ao carregar a página, um número aleatório entre um mínimo e máximo definidos é gerado.  
2. O usuário envia palpites por meio de um campo de entrada.  
3. O script compara o palpite com o número alvo e exibe o feedback:  
   - Se o palpite for muito alto ou muito baixo, uma mensagem é exibida.  
   - Se o palpite estiver correto, uma mensagem de sucesso aparece e o campo de entrada é desativado.  
4. O usuário pode reiniciar o jogo a qualquer momento.  

## Como Executar Localmente

Para rodar o projeto localmente:

```bash
git clone https://github.com/tjngoh/Number-Guessing-Game.git
cd Number-Guessing-Game
open index.html
