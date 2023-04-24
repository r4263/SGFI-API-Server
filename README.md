# Comandos para inicializar o servidor
    npm install express sequelize pg pg-hstore cors --save
    npm install -g nodemon

# Executar servidor 
  <p>-> desenvolvimento: "nodemon server.js"</p>
  <p>-> server: "node server.js"</p>

<h3>Funcional em PostgreSQL 15<h3>
<h4>Nome da database: sgfidb</h4>
<h4>Usuário: defuser</h4>
<h4>Senha: teste</h4>

<h3>SERVIDOR ATENDE NA PORTA 4444<h3>

# Rotas da API
<div>
<h3>Rotas relacionadas à tabela LOTE</h3>
<h4>localhost:4444/api/lotes/</h4>
<p>POST - "/" - Cria novo lote</p>
<p>GET - "/" - Retorna todos lotes cadastrados</p>
<p>GET - "/:id" - Retorna lote por ID</p>
<p>GET - "/fk/:id" - Retorna lote específicado por ID com as características do insumo vinculado</p>
<p>PUT - "/:id" - Atualiza dados do lote pelo ID especificado</p>
<p>DELETE - "/:id" - Apaga o lote especificado</p>
</div>
<br>
<div>
<h3>Rotas relacionadas à tabela COMPRA</h3>
<h4>localhost:4444/api/compras/</h4>
<p>POST - "/" - Cria nova compra</p>
<p>GET - "/" - Retorna todas as compras</p>
<p>GET - "/:id" - Retorna compra especificada pelo ID</p>
<p>GET - "/usuario/:idUsuario" - Retorna todas as compras cadastradas pelo usuários especificado na chave estrangeira "idUsuario"</p>
<p>DELETE - "/:id" - Apaga compra especificada pelo ID</p>
</div>
<br>
<div>
<h3>Rotas relacionadas à tabela INSUMO</h3>
<h4>localhost:4444/api/insumos/</h4>
<p>POST - "/" - Cria novo insumo</p>
<p>GET - "/" - Retorna todos insumos</p>
<p>GET - "/:id" - Retorna os insumos pelo ID</p>
<p>GET - "/tipo/:tipo" - Retorna os insumos pelo Tipo(Insumo:0, Fármaco:1)</p>
<p>PUT - "/:id" - Faz o update do insumo</p>
<p>DELETE - "/:id" - Apaga insumo especificado pelo ID</p>
</div>
<br>
<div>
<h3>Rotas relacionadas à tabela USUARIO</h3>
<h4>localhost:4444/api/usuarios/</h4>
<p>POST - "/" - Cria novo usuário</p>
<p>GET - "/:id" - Retorna os usuários pelo ID</p>
<p>GET - "/nome/:nome" - Retorna todos usuários pelo nome</p>
</div>
<br>