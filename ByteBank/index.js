
import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrent.js'

const cliente1 = new Cliente();

cliente1.nome = 'Vítor Mendes';
cliente1.cpf = '12344567889';

const cliente2 = new Cliente();

cliente2.nome = 'Fernanda Carpinetti';
cliente2.cpf = '12344567889';

const contaCorrentVitor = new ContaCorrente();

contaCorrentVitor.cliente = cliente1;
contaCorrentVitor.agencia = 1001;

const contaCorrent2 = new ContaCorrente();
contaCorrent2.cliente = cliente2;

console.log(contaCorrentVitor)
contaCorrentVitor.depositar(500);
console.log(contaCorrentVitor._saldo);

contaCorrentVitor.transferir(200, contaCorrent2);
console.log(contaCorrent2._saldo);