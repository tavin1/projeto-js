/*Esse arquivo .js é referente ao meu curso da alura com o node.js, irei usar ele como base para meu projeto
em HTML, densenvolvendo o site do MuBank*/





import { Gerente } from "../Funcao/Funcionarios/Gerente.js";
import { Diretor } from "../Funcao/Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "../Funcao/SistemaDeAutenticacao.js/SistemaDeAutenticacao.js";
import {Cliente} from "../Funcao/Cliente.js";

const cliente = new Cliente("Lais", 11122233344467, "321")
const diretor = new Diretor("Otávio", 10000, 12345678900);
diretor.cadastrarSenha("123456")

const gerente = new Gerente("Douglas", 80000, 12345678901);
gerente.cadastrarSenha("123")

const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente,"321");

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);