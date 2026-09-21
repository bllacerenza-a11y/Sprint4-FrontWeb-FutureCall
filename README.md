# Smarty Study Camera - Sprint 4

Evolução em React da landing page desenvolvida pela equipe FutureCall na Sprint 3 do FIAP Challenge. O Smarty transforma registros feitos pela câmera em conteúdos organizados para revisão, flashcards e conexões entre matérias.

## Tecnologias utilizadas

- React 19
- Vite 8
- React Router 7
- Tailwind CSS 4
- JavaScript
- API pública da Wikipédia em português
- LocalStorage para simulação da autenticação
- Git e Vercel para versionamento e publicação

## Funcionalidades

- Componentes reutilizáveis alimentados por props
- Rotas públicas e rota privada
- Rota dinâmica para os detalhes dos recursos
- Autenticação demonstrativa
- Uso de `useState`, `useEffect`, `useContext`, `useNavigate` e `useParams`
- Hooks customizados `useAuth` e `useStudyTopics`
- Consumo da API pública da Wikipédia
- Estados de carregamento e erro da API
- Layout responsivo para desktop, tablet e celular
- Formulário demonstrativo com resposta visual

## Como instalar as dependências

É necessário ter o Node.js instalado. No terminal, abra a pasta do projeto e execute:

```bash
npm install
```

## Como executar o projeto

Depois da instalação, execute:

```bash
npm run dev
```

O terminal mostrará o endereço local da aplicação. Normalmente será `http://localhost:5173`.

## Como gerar e testar a versão de produção

```bash
npm run build
npm run preview
```

A pasta `dist` será criada pelo Vite com os arquivos finais da aplicação.

## Servidores e API

O projeto não possui back-end próprio e não exige a execução de um segundo servidor. A área privada consome informações da API pública da Wikipédia em português. Por isso, é necessário estar conectado à internet para carregar os conteúdos do painel.

## Usuário para teste

- E-mail: `aluno@smarty.com`
- Senha: `smarty123`

A autenticação é uma simulação acadêmica armazenada no LocalStorage do navegador. Ela não deve ser usada como autenticação real em produção.

## Rotas

| Rota | Acesso | Conteúdo |
| --- | --- | --- |
| `/` | Pública | Página inicial |
| `/recursos` | Pública | Lista de recursos |
| `/recursos/:id` | Pública | Detalhes de um recurso |
| `/equipe` | Pública | Integrantes da FutureCall |
| `/login` | Pública | Autenticação demonstrativa |
| `/painel` | Privada | Conteúdos obtidos pela API |

## Uso de inteligência artificial

A inteligência artificial foi utilizada como apoio durante a evolução da Sprint 3 para a Sprint 4, auxiliando na organização dos componentes, revisão do código, adequação aos critérios da atividade e documentação. A equipe permaneceu responsável pelas decisões do projeto, conferência do funcionamento e compreensão do código entregue.

## Repositório e deploy

- Repositório da Sprint 4: https://github.com/bllacerenza-a11y/Sprint3_Front_FutureCall
- Deploy na Vercel: https://smarty-sprint4-publish.vercel.app

## Equipe FutureCall

- Arthur Sgarbi Sousa - RM 569774
- Bruno Bastos - RM 569434
- Pedro Oliveira - RM 572468
