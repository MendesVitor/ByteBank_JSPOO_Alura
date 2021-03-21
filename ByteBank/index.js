
import { Cliente } from './Cliente.js'
import { Diretor } from './Funcionarios/Diretor.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { SistemaAutenticaocao } from './SistemaAutenticacao.js'

const cliente = new Cliente('Enzo', '12345678901', '1234');
const diretor = new Diretor('Fernanda', 1000, '12345678901');
diretor.cadastrarSenha('1234');
const gerente = new Gerente('Vitor', 800, '12345678901');
gerente.cadastrarSenha('123');

const logadoDiretor = SistemaAutenticaocao.login(diretor, '1234');
const logadoGerente = SistemaAutenticaocao.login(gerente, '123');
const logadoCliente = SistemaAutenticaocao.login(cliente, '1234');

console.log(logadoDiretor);
console.log(logadoGerente);
console.log(logadoCliente);