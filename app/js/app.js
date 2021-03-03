/*
const clientes = new Clientes();

clientes.inserir(new Cliente('Rodrigo', '111111', new Conta('13', 1000)));
clientes.inserir(new Cliente('Gabriel', '123456', new Conta('1', 2000)));
clientes.inserir(new Cliente('Rafael', '101122', new Conta('2', 3000)));
console.log(clientes.listar());
clientes.remover('111111');
console.log(clientes.pesquisar('123456'));
*/
const clienteController = new ClienteController();
clienteController.listar();
