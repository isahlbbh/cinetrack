# 🎬 CineTrack

**Explore filmes, descubra novas histórias e organize seus favoritos e assistidos.**

O **CineTrack** é uma aplicação web desenvolvida com React que permite explorar filmes populares, pesquisar títulos, visualizar informações detalhadas, criar uma lista personalizada de favoritos e acompanhar os filmes já assistidos, utilizando dados reais da API do The Movie Database (TMDB).

O projeto foi criado para colocar em prática conceitos de desenvolvimento Front-end, como componentização, gerenciamento e compartilhamento de estados, consumo de APIs REST, navegação entre páginas, persistência de dados e construção de interfaces responsivas.

## 📸 Preview do projeto

![Demonstração do CineTrack](./src/screenshots/cinetrack.png)

🌐 **[Acesse o projeto online](https://cinetrack-blush.vercel.app/)**

## 🚀 Tecnologias utilizadas

- **React** — construção de interfaces com componentes reutilizáveis.
- **JavaScript (ES6+)** — lógica da aplicação e programação assíncrona.
- **React Router DOM** — navegação entre páginas e rotas dinâmicas.
- **HTML5** — estrutura semântica da aplicação.
- **CSS3** — estilização, Flexbox, CSS Grid e responsividade.
- **Vite** — ambiente de desenvolvimento e build.
- **TMDB API** — integração com dados reais de filmes.
- **LocalStorage** — persistência dos filmes favoritos e assistidos no navegador.

## ✨ Funcionalidades implementadas

### 🎥 Exploração de filmes

- Listagem de filmes populares utilizando a API do TMDB.
- Pesquisa de filmes por título.
- Exibição de pôsteres, títulos, anos de lançamento e avaliações.
- Paginação com botão **Carregar mais filmes**.
- Carregamento incremental de filmes populares.
- Mensagens para pesquisas sem resultados.
- Indicadores de carregamento e tratamento básico de erros.

### 🎬 Detalhes dos filmes

- Página individual de detalhes para cada filme.
- Navegação dinâmica utilizando React Router.
- Exibição de sinopse, gêneros, duração e avaliação.
- Botão para retornar à página inicial.

### ❤️ Sistema de favoritos

- Adição e remoção de filmes favoritos diretamente nos cards.
- Persistência dos favoritos utilizando LocalStorage.
- Página **Minha lista** com os filmes favoritados.
- Remoção de favoritos diretamente da página Minha lista.
- Consulta dos dados completos dos favoritos através da API do TMDB.
- Navegação para os detalhes dos filmes.
- Mensagem personalizada quando a lista está vazia.
- Indicador de carregamento dos filmes favoritos.
- Compartilhamento do estado de favoritos entre páginas.

### ✅ Sistema de filmes assistidos

- Marcação de filmes como assistidos diretamente nos cards.
- Alternância entre os estados **Marcar como assistido** e **Assistido**.
- Página dedicada aos filmes assistidos.
- Remoção de filmes diretamente da lista de assistidos.
- Persistência dos filmes assistidos utilizando LocalStorage.
- Consulta dos detalhes dos filmes assistidos através da API do TMDB.
- Exibição da quantidade total de filmes assistidos.
- Mensagem personalizada quando não há filmes assistidos.
- Indicador de carregamento durante as requisições.
- Compartilhamento do estado de assistidos entre páginas.

### 🧭 Navegação e interface

- Sidebar com navegação entre **Explorar**, **Minha lista** e **Assistidos**.
- Destaque automático da página ativa utilizando `useLocation()`.
- Contadores dinâmicos de filmes favoritos e assistidos.
- Atualização automática dos contadores ao adicionar ou remover filmes.
- Interface em tema escuro com detalhes em roxo.
- Layout responsivo na página de detalhes.
- Organização em componentes, páginas e serviços.

## 🛠️ Próximas funcionalidades

O CineTrack continua em desenvolvimento. As próximas melhorias previstas são:

- [x] Implementar uma lista de filmes favoritos.
- [x] Salvar favoritos utilizando LocalStorage.
- [x] Criar uma página dedicada aos filmes favoritos.
- [x] Permitir remover favoritos diretamente da página Minha lista.
- [x] Exibir uma mensagem personalizada quando não houver favoritos.
- [x] Criar uma lista de filmes assistidos.
- [x] Permitir marcar e desmarcar filmes como assistidos.
- [x] Persistir filmes assistidos no LocalStorage.
- [x] Criar uma página dedicada aos filmes assistidos.
- [x] Implementar navegação com destaque da página ativa.
- [x] Adicionar contadores dinâmicos na Sidebar.
- [ ] Adicionar filtros por gênero e avaliação.
- [ ] Melhorar a experiência de busca com debounce.
- [ ] Evitar respostas desatualizadas em pesquisas consecutivas.
- [ ] Exibir elenco e informações adicionais dos filmes.
- [ ] Criar uma lista de filmes para assistir posteriormente.
- [ ] Aprimorar a responsividade das demais telas.
- [ ] Adicionar estados visuais de carregamento (skeletons).
- [ ] Aprimorar o tratamento de erros nas páginas de favoritos e assistidos.
- [ ] Aprimorar a acessibilidade da interface.

## 📚 Conceitos praticados

Durante o desenvolvimento, foram trabalhados:

- Componentes funcionais e props.
- Hooks `useState` e `useEffect`.
- Navegação com `useNavigate`.
- Identificação da rota atual com `useLocation`.
- Parâmetros dinâmicos com `useParams`.
- Configuração de rotas com `BrowserRouter`, `Routes` e `Route`.
- Navegação declarativa utilizando `Link`.
- Gerenciamento e compartilhamento de estados entre componentes.
- **Lifting State Up** — elevação do estado para um componente pai.
- Fluxo de dados entre componentes pais e filhos.
- Passagem de funções como props.
- Renderização condicional.
- Renderização de listas com `.map()`.
- Manipulação de arrays com `.filter()`, `.includes()` e spread operator.
- Requisições HTTP com `fetch()`.
- Programação assíncrona com `async/await`.
- Execução de múltiplas requisições com `Promise.all()`.
- Tratamento de erros com `try/catch/finally`.
- Persistência de dados com `localStorage`.
- Serialização e desserialização com `JSON.stringify()` e `JSON.parse()`.
- Eventos e controle de propagação com `event.stopPropagation()`.
- Classes CSS dinâmicas utilizando operadores ternários.
- Atualização automática da interface a partir de mudanças de estado.
- Paginação de resultados.
- Variáveis de ambiente com Vite.
- Separação de responsabilidades entre componentes, páginas e serviços.
- Layouts responsivos com Flexbox e media queries.

## 📁 Estrutura do projeto

```text
cinetrack/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── MovieCard.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── FavoritesPage.jsx
│   │   ├── WatchedPage.jsx
│   │   └── MovieDetailsPage.jsx
│   ├── services/
│   │   └── tmdb.js
│   ├── screenshots/
│   │   └── cinetrack.png
│   ├── App.jsx
│   └── main.jsx
├── styles/
│   ├── App.css
│   ├── Header.css
│   ├── Sidebar.css
│   ├── MovieCard.css
│   ├── MovieDetailsPage.css
│   └── index.css
├── .env.local
├── package.json
└── README.md
```

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
cd cinetrack
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure a API do TMDB

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_TMDB_API_KEY=SUA_CHAVE_DA_API
```

Você pode obter uma chave de API no site do [TMDB](https://www.themoviedb.org/).

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Abra no navegador o endereço local informado pelo Vite.

**Observação:** variáveis com o prefixo `VITE_` são incorporadas ao código do navegador e não devem ser consideradas secretas. Credenciais privadas devem ser protegidas em um backend.

## 🎯 Objetivo do projeto

O CineTrack faz parte do meu processo de aprendizado e evolução como desenvolvedora Front-end.

Meu objetivo é desenvolver uma aplicação que vá além de uma interface estática, trabalhando com dados reais, interações, navegação, persistência de informações, organização de código e resolução de problemas encontrados durante o desenvolvimento.

A implementação dos sistemas de favoritos e filmes assistidos permitiu aprofundar meus conhecimentos em gerenciamento de estados, compartilhamento de dados entre componentes, armazenamento local, manipulação de arrays e requisições assíncronas.

O desenvolvimento dos contadores dinâmicos e da navegação com destaque automático também contribuiu para compreender melhor o fluxo de dados no React e a atualização da interface a partir das mudanças de estado.

Cada funcionalidade representa uma oportunidade de desenvolver autonomia e consolidar meus conhecimentos em React, JavaScript e boas práticas de desenvolvimento web.

O projeto continuará recebendo melhorias conforme novos conhecimentos forem adquiridos.

## 🎞️ Créditos

Este produto utiliza a API do TMDB, mas não é endossado nem certificado pelo TMDB.

Dados e imagens de filmes fornecidos por [The Movie Database (TMDB)](https://www.themoviedb.org/).

---

**Desenvolvido com 💜 e React.**
