# Comandos para inicializar o servidor
    npm install express sequelize pg pg-hstore cors --save
    npm install -g nodemon

# Executar servidor 
  -> desenvolvimento: "nodemon server.js"
  -> server: "node server.js"

# Rotas da API
-"/" default - GET -

-"/usuarios" - GET, POST - Visualizar, validar e cadastra usuários.

-"/insumos" - GET, POST - Visualizar e cadastrar insumos.

-"/insumos/:id/:nome" - GET, PUT, DELETE - Pesquisa, edição e exclusão de insumos específicos.

-"/insumos/:tipo" - GET - Pesquisa específica por fármaco/insumo.

-"/compras" - GET, POST - Cadastro e pesquisa de novas compras de lotes de insumos.

-"/compras/:id" - DELETE - Exclusão de lotes de compras realizadas(apenas com permissão administrativa total).

-"/lotes" - GET, POST - Consulta e cadastro de novos lotes contidos em compras(linkado à IDCompra_FK).

-"/lotes/:id" - GET, PUT, DELETE - Consulta específica, alteração ou exclusão de um lote de compras.