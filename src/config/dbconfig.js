import { MongoClient } from 'mongodb';
// Importa a classe MongoClient do pacote mongodb, 
// que será utilizada para criar uma conexão com o banco de dados.

export default async function conectarAoBanco(stringConexao) {
  // Define uma função assíncrona chamada 'conectarAoBanco' que recebe 
  // como parâmetro a 'stringConexao' do banco de dados.

  let mongoClient;
  // Declara uma variável para armazenar o cliente MongoDB, que será utilizado 
  // para realizar operações no banco de dados.

  try {
      // Bloco try-catch para tratar possíveis erros durante a conexão.
      mongoClient = new MongoClient(stringConexao);
      // Cria uma nova instância de MongoClient, passando a string de conexão.
      console.log('Conectando ao cluster do banco de dados...');
      // Imprime uma mensagem no console para indicar que a conexão está sendo estabelecida.
      await mongoClient.connect();
      // Espera a conexão ser estabelecida de forma assíncrona.
      console.log('Conectado ao MongoDB Atlas com sucesso!');
      // Imprime uma mensagem de sucesso caso a conexão seja estabelecida.

      return mongoClient;
      // Retorna o cliente MongoDB para que possa ser utilizado em outras partes do código.
  } catch (erro) {
      // Caso ocorra algum erro durante a conexão, o bloco catch é executado.
      console.error('Falha na conexão com o banco!', erro);
      // Imprime uma mensagem de erro no console, junto com o objeto de erro.
      process.exit();
      // Encerra a execução do processo, indicando que a aplicação não pode continuar sem a conexão com o banco.
  }
}