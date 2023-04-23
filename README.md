# Comandos para inicializar o servidor
    npm install express sequelize pg pg-hstore cors --save
    npm install -g nodemon

# Executar servidor 
  -> desenvolvimento: "nodemon server.js"
  -> server: "node server.js"

<h3>SERVIDOR ATENDE NA PORTA 4444<h3>

# Rotas da API
-"/api/" default - GET -

-"/api/usuarios" - GET, POST - Visualizar, validar e cadastra usuários.

-"/api/insumos" - GET, POST - Visualizar e cadastrar insumos.

-"/api/insumos/:id" - GET, PUT, DELETE - Pesquisa, edição e exclusão de insumos específicos.

-"/api/insumos/:tipo" - GET - Pesquisa específica por fármaco/insumo.

-"/api/compras" - GET, POST - Cadastro e pesquisa de novas compras de lotes de insumos.

-"/api/compras/:id" - DELETE - Exclusão de lotes de compras realizadas(apenas com permissão administrativa total).

-"/api/lotes" - GET, POST - Consulta e cadastro de novos lotes contidos em compras(linkado à IDCompra_FK).

-"/api/lotes/:id" - GET, PUT, DELETE - Consulta específica, alteração ou exclusão de um lote de compras.


# Notas sobre as rotas e funcionamento do CRUD
<div>
<h5>POST: -Create</h5>
<p>-JSON;</p>
</div>
<br>
<div>
<h5>GET: -Read</h5>
<p>-Valores pela query, no link: "/?exemplo=exemplo";</p>
<p>-Nas funções podendo ser encontrados em req.query.exemplo;</p>
</div>