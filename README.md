VeloFit - Plataforma de Serviços Fitness

<div align="center">
<img src="https://i.imgur.com/2s90F7q.png" alt="Logo VeloFit" width="200"/>
</div>

🚀 Visão Geral do Projeto

O VeloFit é uma plataforma web moderna e responsiva, desenvolvida para conectar usuários a uma variedade de serviços e categorias do universo fitness. O projeto foi concebido com o objetivo de oferecer uma experiência de usuário fluida e intuitiva, facilitando a busca, visualização e gerenciamento de serviços relacionados a atividades físicas, saúde e bem-estar.

A aplicação é um SPA (Single Page Application ) construída com React e TypeScript, garantindo alta performance, escalabilidade e um código mais robusto e livre de erros.

💻 Aspectos Técnicos e Tecnologias

O projeto VeloFit é uma aplicação full-stack com foco no front-end, utilizando um conjunto de tecnologias modernas e eficientes para a construção da interface e a comunicação com o back-end (simulado ou externo).

🛠️ Tecnologias Utilizadas

Categoria
Tecnologia
Descrição
Framework Front-end
React (com Hooks)
Biblioteca JavaScript para construção de interfaces de usuário reativas e baseadas em componentes.
Linguagem
TypeScript
Superset do JavaScript que adiciona tipagem estática, melhorando a manutenibilidade e a detecção de erros em tempo de desenvolvimento.
Build Tool
Vite
Ferramenta de build e bundler de última geração, otimizando o desenvolvimento e a performance da aplicação.
Estilização
Tailwind CSS
Framework CSS utility-first para construção rápida de designs customizados e responsivos.
Roteamento
React Router DOM v6
Gerenciamento de rotas e navegação entre as diferentes páginas da aplicação.
Requisições HTTP
Axios
Cliente HTTP baseado em Promises para realizar requisições à API back-end.
Ícones
Phosphor Icons e Lucide React
Bibliotecas de ícones vetoriais para enriquecer a interface.
Componentes UI
Swiper
Biblioteca para criação de carrosséis e sliders responsivos.
Notificações
React Toastify
Biblioteca para exibir notificações e alertas de forma elegante e não-bloqueante.


🧩 Estrutura e Lógica do Projeto

A arquitetura do VeloFit segue o padrão de componentes do React, organizada de forma modular para facilitar o desenvolvimento e a manutenção:

1.
Componentes (src/components):

•
Reutilização: Contém componentes de interface menores e reutilizáveis (e.g., Navbar, Footer, Cards).

•
Módulos Específicos: Estrutura modular para as principais funcionalidades, como categoria e servico, cada uma com seus próprios componentes de listagem, formulário e exclusão.



2.
Páginas (src/pages):

•
Define as rotas principais da aplicação (e.g., Home, Login, Cadastro, Perfil, About).



3.
Contextos (src/contexts):

•
AuthContext.tsx: Implementa a lógica de Autenticação Global da aplicação. Gerencia o estado de login do usuário, armazena o token de acesso e as informações do usuário, e provê funções para login e logout.



4.
Modelos (src/models):

•
Define as interfaces TypeScript para as entidades do sistema (Categoria, Servico, Usuario, UsuarioLogin), garantindo a integridade e a tipagem dos dados.



5.
Serviços (src/services):

•
Service.ts: Centraliza a lógica de comunicação com o back-end (API). Utiliza o Axios para encapsular as requisições HTTP (GET, POST, PUT, DELETE), facilitando a manutenção e a troca de URLs base.



🔑 Lógica de Autenticação

A aplicação utiliza um sistema de autenticação baseado em Token (JWT), gerenciado pelo AuthContext:

•
Login: Ao realizar o login, a aplicação envia as credenciais para o back-end e recebe um token de autenticação.

•
Persistência: O token é armazenado no contexto e, geralmente, em um mecanismo de armazenamento persistente (como localStorage ou sessionStorage) para manter o usuário logado entre as sessões.

•
Autorização: Todas as requisições que exigem autenticação (e.g., criar, editar ou deletar serviços/categorias) incluem o token no cabeçalho Authorization (Bearer Token), garantindo que apenas usuários autenticados possam acessar recursos protegidos.

👥 Equipe de Desenvolvimento

## 👥 Equipe do Projeto

Projeto desenvolvido com dedicação pela equipe:

| **Nome**            | **Função**                          | **LinkedIn** |
|---------------------|--------------------------------------|--------------|
| Elzilane Barreto    | Desenvolvedora – Módulo Categoria    | [elzilanebarreto](https://www.linkedin.com/in/elzilanebarreto) |
| Benner Dias         | Desenvolvedor – Tester               | [BennerDias](https://www.linkedin.com/in/BennerDias) |
| Anna Clara          | Desenvolvedora – Módulo Serviços     | [andradeannac](https://www.linkedin.com/in/andradeannac) |
| Paulo Henrique      | Documentação                         | [paulo-henrique-belarmino-ads](https://www.linkedin.com/in/paulo-henrique-belarmino-ads) |
| Mateus Heloi        | Desenvolvedor – Módulo Usuário       | [mateus-heloi](https://www.linkedin.com/in/mateus-heloi) |
| Maristela Rocha     | Desenvolvedora Segurança – Designer  | [maristela-rocha](https://www.linkedin.com/in/maristela-rocha) |
| Vinicius Valverde   | Engenheiro de Infraestrutura         | [vinicius-valverde](https://www.linkedin.com/in/vinicius-valverde) |


📧 Contato

Email: grupo_02-turma-javascript_09@outlook.com

📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.




<div align="center">

⭐ Se este projeto te ajudou, não esqueça de dar uma estrela!

Desenvolvido com 💪 pelo Time VeloGroup

</div>

