# Documentação Completa do Projeto VeloFit
![Logo VeloFit](https://imgur.com/H6qOppX.png)


## 1. Introdução

O projeto **VeloFit** é uma aplicação *front-end* desenvolvida em **React** com **TypeScript** e **Vite**, que simula um sistema de gerenciamento de serviços e categorias para uma academia ou centro de bem-estar. A aplicação é construída com uma arquitetura moderna, utilizando **Tailwind CSS** para estilização e **Axios** para comunicação com um *back-end* externo.

O objetivo desta documentação é fornecer uma visão geral da arquitetura, das funcionalidades implementadas, das tecnologias utilizadas e das instruções para a configuração e execução do projeto.

## 2. Tecnologias Utilizadas

O VeloFit é um projeto *full-stack* *front-end* que se integra a um *back-end* externo. As principais tecnologias e bibliotecas utilizadas no *front-end* são:

| Categoria | Tecnologia/Biblioteca | Descrição |
| :--- | :--- | :--- |
| **Framework** | React (v19.2.0) | Biblioteca JavaScript para construção de interfaces de usuário. |
| **Linguagem** | TypeScript (v5.9.3) | Superset do JavaScript que adiciona tipagem estática. |
| **Build Tool** | Vite (v7.2.2) | Ferramenta de *build* rápida para projetos web modernos. |
| **Estilização** | Tailwind CSS (v4.1.17) | Framework CSS *utility-first* para construção rápida de designs. |
| **Roteamento** | React Router DOM (v7.9.5) | Gerenciamento de rotas e navegação na aplicação. |
| **Comunicação API** | Axios (v1.13.2) | Cliente HTTP baseado em *Promises* para fazer requisições ao *back-end*. |
| **Estado Global** | React Context API | Gerenciamento do estado de autenticação do usuário. |
| **Notificações** | React Toastify (v11.0.5) | Exibição de mensagens de alerta e notificação (*toasts*). |
| **Ícones** | Phosphor Icons (v2.1.10) | Biblioteca de ícones vetoriais. |

## 3. Arquitetura e Estrutura de Pastas

O projeto segue uma estrutura de pastas modular e organizada, típica de aplicações React/Vite:

```
generation-react-veloFit/
├── src/
│   ├── assets/             # Arquivos estáticos como imagens e ícones
│   ├── components/         # Componentes reutilizáveis da interface
│   │   ├── categoria/      # Componentes relacionados à Categoria (CRUD)
│   │   ├── servico/        # Componentes relacionados ao Serviço (CRUD)
│   │   ├── footer/
│   │   ├── navbar/
│   │   └── utils/          # Funções utilitárias (ex: ToastAlerta)
│   ├── contexts/           # Contextos globais (ex: AuthContext)
│   ├── models/             # Definições de tipos TypeScript para os dados
│   ├── pages/              # Páginas principais da aplicação (rotas)
│   ├── services/           # Módulo de comunicação com a API (Service.ts)
│   ├── App.tsx             # Componente principal e configuração de rotas
│   └── main.tsx            # Ponto de entrada da aplicação
├── public/                 # Arquivos públicos (ex: index.html)
├── package.json            # Metadados e dependências do projeto
└── ...
```

## 4. Funcionalidades e Rotas

A aplicação VeloFit implementa as seguintes funcionalidades principais, acessíveis através das rotas configuradas no `App.tsx`:

### 4.1. Autenticação e Usuário

| Rota | Componente | Funcionalidade |
| :--- | :--- | :--- |
| `/` ou `/login` | `Login` | Permite que o usuário faça login na aplicação. |
| `/cadastro` | `Cadastro` | Permite que novos usuários se cadastrem. |
| `/perfil` | `Perfil` | Exibe informações do perfil do usuário logado. |

O gerenciamento de estado de autenticação é feito pelo `AuthContext.tsx`, que armazena o token e os dados do usuário.

### 4.2. Gerenciamento de Categorias (CRUD)

| Rota | Componente | Funcionalidade |
| :--- | :--- | :--- |
| `/categorias` | `ListaCategoria` | Exibe todas as categorias cadastradas. |
| `/cadastrarcategoria` | `FormCategoria` | Formulário para cadastrar uma nova categoria. |
| `/editarcategoria/:id` | `FormCategoria` | Formulário para editar uma categoria existente. |
| `/deletarcategoria/:id` | `DeletarCategoria` | Confirmação e exclusão de uma categoria. |

### 4.3. Gerenciamento de Serviços (CRUD)

| Rota | Componente | Funcionalidade |
| :--- | :--- | :--- |
| `/servicos` | `ListaServico` | Exibe todos os serviços cadastrados. |
| `/cadastrarservico` | `FormServico` | Formulário para cadastrar um novo serviço. |
| `/editarservico/:id` | `FormServico` | Formulário para editar um serviço existente. |
| `/deletarservico/:id` | `DeletarServico` | Confirmação e exclusão de um serviço. |

### 4.4. Páginas Informativas

| Rota | Componente | Funcionalidade |
| :--- | :--- | :--- |
| `/home` | `Home` | Página inicial da aplicação. |
| `/sobre` | `About` | Página com informações sobre o projeto/empresa. |
| `/contato` | `Contato` | Página de contato. |

## 5. Modelagem de Dados (TypeScript)

Os principais modelos de dados da aplicação, definidos em `src/models/`, são:

### 5.1. `Usuario` e `UsuarioLogin`

Representam a estrutura de dados do usuário e os dados necessários para o login.

| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | `number` | Identificador único do usuário. |
| `nome` | `string` | Nome completo do usuário. |
| `usuario` | `string` | E-mail ou nome de usuário. |
| `senha` | `string` | Senha do usuário. |
| `foto` | `string` | URL da foto de perfil. |
| `token` | `string` | Token de autenticação (apenas em `UsuarioLogin`). |
| `servico` | `Servico[]` | Lista de serviços associados ao usuário (opcional). |

### 5.2. `Categoria`

Representa uma categoria de serviço (ex: "Musculação", "Pilates").

| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | `number` | Identificador único da categoria. |
| `nome_categoria` | `string` | Nome da categoria. |
| `servico` | `Servico[]` | Lista de serviços pertencentes a esta categoria. |

### 5.3. `Servico`

Representa um serviço ou matrícula.

| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | `number` | Identificador único do serviço. |
| `valor_mensalidade` | `number` | Valor da mensalidade. |
| `frequencia` | `number` | Frequência de uso/aulas. |
| `dt_matricula` | `Date` | Data da matrícula. |
| `modalidade` | `string` | Nome da modalidade (ex: "Plano Mensal"). |
| `usuario` | `Usuario` | Usuário associado a este serviço. |
| `categoria` | `Categoria` | Categoria do serviço. |

## 6. Comunicação com o Back-end

A comunicação com o *back-end* é centralizada no módulo `src/services/Service.ts`, que utiliza a biblioteca **Axios**.

### 6.1. URL Base da API

Todas as requisições são direcionadas para a seguinte URL base:

> `https://generation-velofit-1.onrender.com`

### 6.2. Funções de Serviço

O módulo `Service.ts` exporta as seguintes funções para interação com a API:

| Função | Método HTTP | Endpoint de Exemplo | Descrição |
| :--- | :--- | :--- | :--- |
| `cadastrarUsuario` | `POST` | `/usuarios/cadastrar` | Cadastra um novo usuário. |
| `login` | `POST` | `/usuarios/logar` | Realiza o login e retorna o token. |
| `buscar` | `GET` | `/categorias` | Busca dados (requer token no `header`). |
| `cadastrar` | `POST` | `/servicos` | Cadastra um novo recurso (requer token). |
| `atualizar` | `PUT` | `/servicos/1` | Atualiza um recurso existente (requer token). |
| `deletar` | `DELETE` | `/categorias/1` | Deleta um recurso (requer token). |
| `CalcularMensalidade` | `GET` | `/servicos/mensalidade` | Função específica para cálculo de mensalidade. |

## 7. Configuração e Execução Local

Para configurar e executar o projeto localmente, siga os passos abaixo:

### 7.1. Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (ou **pnpm**) instalados em sua máquina.

### 7.2. Instalação de Dependências

1.  Navegue até o diretório do projeto:
    ```bash
    cd generation-react-veloFit
    ```
2.  Instale as dependências:
    ```bash
    npm install
    # ou pnpm install
    ```

### 7.3. Execução do Projeto

Execute o comando de desenvolvimento para iniciar a aplicação:

```bash
npm run dev
# ou pnpm run dev
```

O projeto será iniciado em modo de desenvolvimento, geralmente acessível em `http://localhost:5173`.


## 8. Referências

A documentação foi elaborada com base na análise do código-fonte do repositório `Grupo2-JS09/generation-react-veloFit` [1].

[1] Grupo2-JS09/generation-react-veloFit: Repositório GitHub do projeto VeloFit. (https://github.com/Grupo2-JS09/generation-react-veloFit)
