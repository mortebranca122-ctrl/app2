🚀 Nexus Chat - Full Stack Application
Um sistema de chat em tempo real desenvolvido com arquitetura MVC (Model-View-Controller), utilizando Node.js, SQL (via ORM Sequelize) e tecnologias web nativas. O projeto simula a experiência de plataformas como o Discord, focando em separação de responsabilidades e boas práticas de código.

🛠️ Tecnologias Utilizadas
Backend
Node.js & Express: Servidor HTTP e gerenciamento de rotas.
Sequelize ORM: Abstração do banco de dados para facilitar queries SQL.
SQLite: Banco de dados leve (fácil para desenvolvimento local e testes).
CORS: Políticas de compartilhamento de recursos entre origens.
Frontend
HTML5 Semântico: Estrutura acessível e organizada.
CSS3 Moderno: Estilização inspirada no Dark Mode do Discord (Flexbox, variáveis CSS).
JavaScript (Vanilla ES6+): Lógica de interação, requisições assíncronas (fetch API) e manipulação do DOM.
Banco de Dados
SQL Relacional: Estrutura de tabelas (Users, Rooms, Messages) com relacionamentos (Chaves Estrangeiras).
📋 Funcionalidades
✅ Autenticação de Usuários: Login e cadastro (com dados iniciais "seeded").
✅ Gestão de Salas: Listagem de canais públicos e privados.
✅ Chat em Tempo Real (Simulado): Polling para atualização dinâmica de mensagens.
✅ Design Responsivo: Interface adaptável a diferentes tamanhos de tela.
✅ Separação de Camadas: Código dividido em server.js, index.html, style.css e esquema SQL.
🚀 Como Executar o Projeto
Pré-requisitos
Node.js instalado na sua máquina.
Passo a Passo
Clone este repositório:
git clone https://github.com/seu-usuario/nexus-chat.gitcd nexus-chat
Instale as dependências do Backend:
bash

npm init -y
npm install express sequelize sqlite3 cors body-parser
Inicie o Servidor:
bash

node server.js
O servidor iniciará automaticamente na porta 3000 e criará o arquivo do banco de dados.
Acesse a Aplicação:
Abra o arquivo index.html diretamente no seu navegador ou acesse http://localhost:3000 (se configurado para servir arquivos estáticos).
Login Padrão (Seed):
Email: admin@nexus.com
Senha: 123
📂 Estrutura do Projeto
text

nexus-chat/
├── database.sql    # Script SQL para criação do schema (referência)
├── server.js       # API RESTful + Configuração do Sequelize + Rotas
├── index.html      # Interface do Usuário (DOM + Fetch API)
├── style.css       # Estilos visuais (Dark Theme)
└── README.md       # Esta documentação
📝 Observações
Para produção, substitua o SQLite por PostgreSQL ou MySQL.
A autenticação atual é simplificada; em produção, utilize JWT e Bcrypt para hash de senhas.
Desenvolvido por Gabriel da Silva Martins
