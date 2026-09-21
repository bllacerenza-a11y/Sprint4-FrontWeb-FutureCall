# Guia do código — Smarty Sprint 4

Este guia foi escrito para ajudar a equipe a apresentar o projeto e explicar as decisões principais sem precisar decorar cada linha.

## 1. Como o projeto está organizado

```text
src/
├── components/  componentes reutilizados em mais de uma tela
├── context/     estado de autenticação compartilhado
├── data/        textos e dados locais do projeto
├── hooks/       hooks customizados
├── layouts/     estrutura que se repete entre as páginas
├── pages/       páginas ligadas às rotas
├── services/    comunicação com a API
├── index.css    Tailwind, variáveis visuais e estilos responsivos
├── main.jsx     ponto de entrada do React
└── router.jsx   configuração das rotas
```

Essa separação evita concentrar todo o código em um único arquivo. A parte visual, os dados e a lógica ficam em locais fáceis de identificar.

## 2. Componentização e props

Os componentes `Header`, `Footer`, `ContactForm`, `FeatureCard` e `TeamMember` representam partes reutilizáveis da interface.

`FeatureCard` e `TeamMember` recebem **props**. Props são informações enviadas pelo componente pai para que o mesmo componente possa mostrar conteúdos diferentes. Em `Home.jsx`, por exemplo, o `map` percorre os recursos e envia cada objeto para `FeatureCard`.

Exemplo simplificado:

```jsx
<FeatureCard feature={feature} featured={index === 0} />
```

## 3. Rotas públicas, dinâmica e privada

O arquivo `src/router.jsx` centraliza a navegação.

- `/`, `/recursos`, `/equipe` e `/login` são rotas públicas.
- `/recursos/:id` é uma rota dinâmica. O valor de `id` muda de acordo com o recurso escolhido.
- `/painel` é privada e passa pelo componente `PrivateRoute`.
- `*` mostra a página de erro quando a rota não existe.

Na página de detalhes, `useParams` lê o `id` presente no endereço. No login, `useNavigate` envia o usuário ao painel depois da autenticação.

## 4. Hooks nativos

- `useState`: controla menu, campos do login, mensagens do formulário, carregamento e erros.
- `useEffect`: executa a busca da API quando o painel é carregado.
- `useContext`: permite acessar o usuário autenticado em diferentes componentes.
- `useNavigate`: muda a rota depois do login.
- `useParams`: lê o identificador da rota de detalhes.

## 5. Hooks customizados

O projeto possui dois hooks próprios:

- `useAuth`: simplifica o acesso ao contexto de autenticação.
- `useStudyTopics`: guarda a lógica de carregamento dos conteúdos da Wikipédia.

O `useStudyTopics` mantém a lógica separada da tela. Assim, `Dashboard.jsx` se concentra principalmente em mostrar os estados de carregamento, erro e sucesso.

## 6. Consumo da API

O arquivo `src/services/wikipediaApi.js` usa `fetch` para consultar a API pública da Wikipédia em português. A resposta é convertida para JSON e organizada antes de chegar à página.

Fluxo da informação:

```text
Wikipédia → wikipediaApi.js → useStudyTopics.js → Dashboard.jsx
```

Também existe tratamento para resposta com erro. Enquanto a requisição acontece, o painel mostra uma mensagem de carregamento.

## 7. Autenticação e rota privada

`AuthContext.jsx` guarda o usuário e oferece as funções `login` e `logout`. A demonstração aceita:

- E-mail: `aluno@smarty.com`
- Senha: `smarty123`

O usuário é salvo no LocalStorage para continuar conectado após atualizar a página. É uma simulação acadêmica, não uma autenticação de produção.

`PrivateRoute.jsx` verifica se existe usuário. Se não existir, usa `Navigate` para redirecionar para `/login`.

## 8. Tailwind e responsividade

O Tailwind está integrado pelo plugin oficial no `vite.config.js` e importado no início de `src/index.css`.

O projeto usa classes utilitárias do Tailwind em pontos como o formulário e também reúne estilos maiores em classes semânticas. As media queries adaptam grade, menu, tipografia e espaçamento para desktop, tablet e celular.

## 9. Como demonstrar ao professor

1. Abra a página inicial e explique que ela evolui a mesma solução da Sprint 3.
2. Reduza a janela para mostrar o menu e a reorganização dos blocos.
3. Entre em Recursos e abra um item para demonstrar a rota dinâmica.
4. Tente abrir `/painel` sem login para mostrar o redirecionamento.
5. Entre com o usuário de teste e aguarde os três conteúdos da Wikipédia.
6. Mostre rapidamente `router.jsx`, `FeatureCard.jsx`, `useStudyTopics.js` e `wikipediaApi.js`.

## 10. Resumo em uma frase

O Smarty da Sprint 3 foi transformado em uma aplicação React componentizada, responsiva, com navegação pública e privada, hooks, Tailwind e dados carregados de uma API pública.
