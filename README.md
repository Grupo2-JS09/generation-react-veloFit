# 🚴‍♂️ VeloFit

![VeloFit Logo](https://i.imgur.com/H6qOppX.png)

> **Mais que um aplicativo - Aplicação Fitness**  
> Uma solução VeloGroup

## 📋 Sobre o Projeto

VeloFit é uma plataforma inovadora de gestão para academias que resolve um problema comum: **pagar um mês inteiro de academia e treinar apenas alguns dias**.

Com o VeloFit, você paga de forma justa pelo seu uso real, recebendo descontos automáticos baseados na sua frequência de treino.

### 💡 O Diferencial

- **2% de desconto** por cada dia da semana que você **não planeja** usar
- Treina 3x na semana? Ganhe **8% de desconto** na mensalidade!
- Exemplo: R$ 100,00 → **R$ 92,00**

## ✨ Funcionalidades Principais

### 👤 Gestão de Usuários
- Cadastro e autenticação segura
- Atualização de perfil
- Gerenciamento de sessões com JWT

### 📦 Planos Personalizados
- **Frango**: Plano econômico com foco em uma academia
- **Maromba**: Plano premium com acesso a múltiplas academias

### 📊 Sistema de Serviços
- Cadastro de modalidades
- Controle de frequência semanal
- Cálculo automático de mensalidade com descontos
- Gestão de matrículas e pagamentos

### 🏷️ Categorias
- Organização por tipo de serviço
- Facilita a busca e gerenciamento
- Integração com cálculo de mensalidade

## 🔒 Segurança

O VeloFit leva a segurança dos seus dados a sério:

- **BCrypt**: Criptografia robusta de senhas
- **JWT (JSON Web Tokens)**: Gerenciamento seguro de sessões
- **Passport**: Estratégia de autenticação validada
- **LGPD**: Conformidade com a Lei Geral de Proteção de Dados

## 🛠️ Tecnologias Utilizadas

### Frontend
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Backend
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)

### Banco de Dados
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

### Ferramentas e Bibliotecas
- **TypeORM**: ORM para manipulação de dados
- **JWT**: Autenticação e autorização
- **Bcrypt**: Hash de senhas
- **Passport**: Estratégias de autenticação
- **Swagger**: Documentação da API
- **ESLint & Prettier**: Qualidade de código
- **React Router**: Navegação SPA
- **Axios**: Requisições HTTP
- **React Toastify**: Notificações
- **Lucide React**: Ícones
- **Swiper**: Carrossel de imagens

### Deploy
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn
- Git

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/Grupo2-JS09/generation-react-velofit.git
cd generation-react-velofit
```

2. Instale as dependências
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente
```bash
# Crie um arquivo .env na raiz do projeto
VITE_API_URL=https://generation-velofit-1.onrender.com
```

4. Execute o projeto
```bash
npm run dev
# ou
yarn dev
```

5. Acesse no navegador
```
http://localhost:5173
```

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Imagens e recursos estáticos
├── components/          # Componentes reutilizáveis
│   ├── categoria/      # Componentes de categoria
│   ├── servico/        # Componentes de serviço
│   ├── navbar/         # Barra de navegação
│   ├── footer/         # Rodapé
│   └── mycaroussel/    # Carrossel de imagens
├── contexts/           # Contextos React (AuthContext)
├── models/             # Interfaces TypeScript
│   ├── Categoria.ts
│   ├── Servico.ts
│   ├── Usuario.ts
│   └── UsuarioLogin.ts
├── pages/              # Páginas da aplicação
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Cadastro.tsx
│   └── About.tsx
├── services/           # Serviços de API
│   └── Service.ts
├── utils/              # Utilitários
│   └── ToastAlerta.ts
└── App.tsx             # Componente principal
```

## 🎨 Paleta de Cores

```css
--jet: #2C302E        /* Fundo escuro */
--mistyrose: #F9E0D9  /* Texto suave */
--tomato: #F06543     /* Destaques */
--celadon: #9AE19D    /* Verde claro */
--ferngreen: #537A5A  /* Verde médio */
```

## 📱 Funcionalidades por Página

### 🏠 Home
- Carrossel de imagens
- Apresentação da aplicação
- CTAs para login e cadastro

### 🔐 Login
- Autenticação de usuários
- Validação de credenciais
- Redirecionamento automático

### 📝 Cadastro
- Formulário completo de registro
- Validação de campos (nome, email, senha)
- Verificação de senha forte
- Upload de foto de perfil

### 📊 Categorias
- Listagem de categorias
- Cadastro e edição
- Exclusão com confirmação
- Cards interativos

### 🏋️ Serviços
- Listagem de serviços
- Cadastro com categorias
- Controle de frequência
- Cálculo de mensalidade
- Gestão de datas

### ℹ️ Sobre
- Proposta de valor
- Sistema de descontos
- Recursos principais
- Informações de segurança

## 🔄 Próximos Passos

### Técnico
- [ ] Implementar testes unitários e de integração
- [ ] Adicionar CI/CD com GitHub Actions
- [ ] Melhorar cobertura de testes

### Funcionalidades
- [ ] Desenvolver aplicativo mobile (React Native)
- [ ] Integração com planos de treino personalizados
- [ ] Sistema de notificações push
- [ ] Dashboard administrativo completo
- [ ] Relatórios de uso e financeiro
- [ ] Sistema de check-in via QR Code

### UX/UI
- [ ] Dark mode
- [ ] Animações avançadas
- [ ] PWA (Progressive Web App)
- [ ] Acessibilidade (WCAG 2.1)

## 👥 Time VeloGroup

| Nome | Função | LinkedIn |
|------|--------|----------|
| **Elzilane Barreto** | Desenvolvedora - Módulo Categoria | [/in/elzilanebarreto](https://linkedin.com/in/elzilanebarreto) |
| **Benner Dias** | Desenvolvedor - Tester | [/in/BennerDias](https://linkedin.com/in/BennerDias) |
| **Anna Clara** | Desenvolvedora - Módulo Serviços | [/in/andradeannac](https://linkedin.com/in/andradeannac) |
| **Paulo Henrique** | Documentação | [/in/paulo-henrique-belarmino-ads](https://linkedin.com/in/paulo-henrique-belarmino-ads) |
| **Mateus Heloi** | Desenvolvedor - Módulo Usuário | [/in/mateus-heloi](https://linkedin.com/in/mateus-heloi) |
| **Maristela Rocha** | Desenvolvedora Segurança - Designer | [/in/maristela-rocha](https://linkedin.com/in/maristela-rocha) |
| **Vinicius Valverde** | Engenheiro de Infraestrutura | [/in/vinicius-valverde](https://linkedin.com/in/vinicius-valverde) |

## 📧 Contato

**Email**: grupo_02-turma-javascript_09@outlook.com

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  
### ⭐ Se este projeto te ajudou, não esqueça de dar uma estrela!

**Desenvolvido com 💪 pelo Time VeloGroup**

</div>
