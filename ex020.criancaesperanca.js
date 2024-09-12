const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log('=====================');
    console.log(' CRIANÇA ESPERANÇA ');
    console.log(' ====================');
    console.log(" Muito obrigado por ajudar!");
    console.log("[1] para doar R$10,00");
    console.log("[2] para doar R$25,00");
    console.log("[3] para doar R$30,00");
    console.log("[4] para doar outros valores");
    console.log("[5] para cancelar!");
    
    rl.question("Escolha uma opção: ", (opcao) => {
        let doacao;

        switch(opcao) {
            case '1':
                doacao = 10;
                break;
            case '2':
                doacao = 25;
                break;
            case '3':
                doacao = 30;
                break;
            case '4':
                rl.question("Digite o valor da doação: R$", (valor) => {
                    doacao = Number(valor);
                    finalizar(doacao);
                });
                return
            case '5':
                doacao = 0;
                break;
            default:
                console.log("Opção inválida. Sua doação será considerada R$0,00");
                doacao = 0;
                break;
        }

        if (opcao !== '4') {
            finalizar(doacao);
        }
    });
}

function finalizar(doacao) {
    console.clear();
    console.log('=====================');
    console.log(' CRIANÇA ESPERANÇA ');
    console.log(' ====================');
    console.log(" Muito obrigado por sua doação!");
    console.log(`Sua doação foi ${doacao.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
    rl.close();
}

mostrarMenu();
