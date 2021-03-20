
import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrent.js'

const cliente1 = new Cliente('Vítor Mendes', '12344567889');
const cliente2 = new Cliente('Fernanda Carpinetti', '12344567889');


const contaCorrentCliente1 = new ContaCorrente('1001', cliente1);

const contaCorrentCliente2 = new ContaCorrente('1001', cliente2);


console.log(cliente1);
console.log(cliente2);

console.log(contaCorrentCliente1);
console.log(contaCorrentCliente2);

contaCorrentCliente1.depositar(1000);
contaCorrentCliente2.depositar(10000);

console.log(`**Saldo após depósito**`)
console.log(`Saldo do cliente1: ${contaCorrentCliente1.saldo}`);
console.log(`Saldo do cliente2: ${contaCorrentCliente2.saldo}`);

contaCorrentCliente2.sacar(1000);
contaCorrentCliente1.sacar(10000);

console.log(`**Saldo após saque**`)
console.log(`Saldo do cliente1: ${contaCorrentCliente1.saldo}`);
console.log(`Saldo do cliente2: ${contaCorrentCliente2.saldo}`);

contaCorrentCliente2.tranferir(4000, contaCorrentCliente1);

console.log(`Saldo das contas após transferência`);
console.log(`Saldo do cliente1: ${contaCorrentCliente1.saldo}`);
console.log(`Saldo do cliente2: ${contaCorrentCliente2.saldo}`);