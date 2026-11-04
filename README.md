# 🎬 CineTrack

## 📸 Preview do projeto

![Demonstração do CineTrack](./src/screenshots/cinetrack.png)

🌐 **Acesse o projeto:** https://cinetrack-blush.vercel.app/

**Explore filmes, descubra novas histórias e encontre o que assistir.**

O **CineTrack** é uma aplicação web desenvolvida com React que permite explorar filmes populares, consultar avaliações e pesquisar títulos utilizando dados reais da API do The Movie Database (TMDB).

O projeto foi criado para colocar em prática conceitos de desenvolvimento Front-end, incluindo componentização, gerenciamento de estados, consumo de APIs REST e renderização dinâmica de interfaces.

## 🚀 Tecnologias utilizadas

- **React** — construção da interface com componentes reutilizáveis.
- **JavaScript (ES6+)** — lógica, manipulação de arrays e operações assíncronas.
- **HTML5** — estrutura da aplicação.
- **CSS3** — estilização, layout com Flexbox e CSS Grid, transições e efeitos visuais.
- **Vite** — ambiente de desenvolvimento e build.
- **TMDB API** — integração com dados reais de filmes.

## ✨ Funcionalidades implementadas

- 🎥 Listagem de filmes populares com dados da API do TMDB.
- 🔎 Pesquisa de filmes por título diretamente na API.
- 🖼️ Exibição de pôsteres, títulos, anos de lançamento e avaliações.
- 📄 Paginação com botão **Carregar mais filmes**.
- ➕ Carregamento de novos filmes sem substituir os anteriores na listagem de populares.
- ⏳ Indicadores de carregamento durante as requisições.
- 🚫 Mensagens para pesquisas sem resultados.
- ⚠️ Tratamento básico de erros nas requisições.
- 🎨 Interface em tema escuro com detalhes em roxo.
- 🧩 Organização da interface em componentes React.

## 🛠️ Funcionalidades planejadas

O CineTrack continua em desenvolvimento. As próximas melhorias previstas são:

- [ ] Corrigir a atualização da lista ao sair de uma pesquisa.
- [ ] Melhorar a experiência de busca com debounce.
- [ ] Evitar respostas desatualizadas em pesquisas consecutivas.
- [ ] Criar uma página de detalhes para cada filme.
- [ ] Exibir sinopse, gêneros, duração e elenco.
- [ ] Implementar uma lista de filmes favoritos.
- [ ] Salvar favoritos utilizando LocalStorage.
- [ ] Criar uma lista de filmes para assistir posteriormente.
- [ ] Adicionar filtros por gênero e avaliação.
- [ ] Melhorar a responsividade para dispositivos móveis.
- [ ] Adicionar estados visuais de carregamento (skeletons).
- [ ] Implementar navegação entre páginas com React Router.
- [ ] Aprimorar a acessibilidade da interface.

## 📚 Conceitos praticados

Durante o desenvolvimento, foram trabalhados:

- Componentes funcionais e props.
- Hooks `useState` e `useEffect`.
- Renderização condicional.
- Renderização de listas com `.map()`.
- Manipulação de arrays com `.filter()` e spread operator.
- Requisições HTTP com `fetch()`.
- Programação assíncrona com `async/await`.
- Tratamento de erros com `try/catch/finally`.
- Paginação de resultados.
- Variáveis de ambiente com Vite.
- Separação de responsabilidades entre componentes e serviços.

## 📁 Estrutura do projeto

```text
cinetrack/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── MovieCard.jsx
│   ├── services/
│   │   └── tmdb.js
│   ├── App.jsx
│   └── main.jsx
├── styles/
│   ├── App.css
│   ├── Header.css
│   ├── Sidebar.css
│   ├── MovieCard.css
│   └── index.css
├── .env.local
├── package.json
└── README.md
```

## ⚙️ Como executar o projeto

**1. Clone o repositório**

```bash
git clone URL_DO_SEU_REPOSITORIO
cd cinetrack
```

**2. Instale as dependências**

```bash
npm install
```

**3. Configure a API do TMDB**

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_TMDB_API_KEY=SUA_CHAVE_DA_API
```

Você pode obter uma chave no site do [TMDB](https://www.themoviedb.org/).

**4. Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

Abra no navegador o endereço local informado pelo Vite.

> **Observação:** variáveis `VITE_` são incorporadas ao código do navegador e não devem ser consideradas secretas. Para proteger credenciais privadas, é necessário utilizar um backend.

## 🎯 Objetivo do projeto

O CineTrack faz parte do meu processo de aprendizado e evolução como desenvolvedora Front-end.

O objetivo é desenvolver uma aplicação que vá além de uma interface estática, trabalhando com dados reais, interações, organização de código e resolução de problemas encontrados durante o desenvolvimento.

O projeto será atualizado conforme novas funcionalidades e conhecimentos forem incorporados.

## 🎞️ Créditos

Este produto utiliza a API do TMDB, mas não é endossado nem certificado pelo TMDB.

Dados e imagens de filmes fornecidos por [The Movie Database (TMDB)](https://www.themoviedb.org/).

---

**Desenvolvido com 💜 e React.**
