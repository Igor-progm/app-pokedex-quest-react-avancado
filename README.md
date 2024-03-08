# Desafio DevQuest - Pokedex SPA em React 🚀

### 📝Propósito da Aplicação 📝
Este projeto foi desenvolvido como parte do Desafio DevQuest para testar os conhecimentos avançados em ReactJS adquiridos durante as aulas exercícios práticos, além de simular um teste técnico em um processo seletivo de frontend. A aplicação é uma Single Page Application (SPA) que utiliza a API PokeAPI para exibir uma lista de Pokémons, permitindo aos usuários visualizar detalhes individuais de cada Pokémon. Além disso, a aplicação oferece a funcionalidade de alternar entre os temas claro e escuro.

### 🕹️ Funcionalidades da Aplicação 🕹️
1. Listagem de Pokémons na Página Inicial:
  
  - Exibe uma lista inicial de 10 Pokémons com imagem e nome.
  - Possui um botão "Load More" que carrega mais 10 Pokémons quando clicado.

2. Detalhes do Pokémon:

  - Ao clicar em um Pokémon na lista, o usuário é redirecionado para uma página interna com informações detalhadas.
  - Detalhes incluem a imagem do Pokémon, nome, lista de movimentos (moves), lista de habilidades (abilities), descrição de cada habilidade e o tipo do Pokémon.

3. Alternador de Tema Claro/Escuro:

  - Na página inicial, há um botão que permite alternar entre os temas escuro e claro (Dark/Light).

### 💡 Detalhes da Implementação 💡

Durante o desenvolvimento desta aplicação, foi incorporada a função de busca a um Pokémon presente na lista.

#### Busca Flexível de Pokémon 🔍

A funcionalidade de busca foi estendida para permitir que o usuário pesquise um Pokémon pelos caracteres de seu nome, desde que esse Pokémon  e esteja presente na lista, ou seja, que tenha sido acrescentado na lista através do botão "Load More".

### 📝 Requisitos do Teste 📝
O projeto foi desenvolvido para atender aos seguintes requisitos do teste:

  - Criar uma Home (página inicial) de listagem de alguns pokemons, utilizando a api PokeAPI.
  - Criar uma página interna de detalhe do pokemon.
  - A home deve apresentar uma listagem com 10 pokemons iniciais.
  - A home deve ter um botão "Carregar mais" abaixo dessa lista, que quando clicado deve buscar mais 10 pokemons e adicionar a listagem atual.
  - Essa listagem deve mostrar a imagem e nome de cada pokemon.
  - Na listagem cada pokemon deve ser clicável e ao clicar o usuário deve poder acessar uma página interna desse pokemon com informações detalhadas.
  - Na página de detalhes devem aparecer as seguintes informações:
  - Imagem do pokemon
  - Nome
  - Lista de movimentos do pokemon (moves)
  - Lista de habilidades do pokemon (abilities)
  - A lista de habilidades deve apresentar o nome e o texto descritivo da habilidade
  - Tipo do pokemon (type)
  - A home deve ter um botão para que o usuário possa alternar de cor entre tema claro e tema escuro (light/dark).

#### 📚 Requisitos Técnicos 📚

  - A aplicação deverá ser Single Page Application (SPA).
  - Utilizar React.js para o desenvolvimento da aplicação.
  - Utilizar Context API para criação do Theme Toggler (Alternador entre tema claro e escuro).
  - Utilizar styled-components para estilização dos componentes.
  - Utilizar react-router-dom para a navegação entre as páginas.

### 🔧 Ferramentas Utilizadas 🔧

  - React.js (Requisito do teste): Conhecido pela sua popularidade, eficiência e flexibilidade para o desenvolvimento de SPAs .
  - Context API (Requisito do teste): Utilizado para criar o Theme Toggler, permitindo a alternância entre temas claro e escuro de forma global na aplicação.
  - Styled-components (Requisito do teste): Escolhido para a estilização dos componentes, proporcionando um código mais legível e fácil de manter.
  - React Router Dom (Requisito do teste): Utilizado para facilitar a navegação entre as páginas da aplicação.

### 📜 Decisões Adotadas 📜

  - Criação de projeto com o Vite: O Vite tem mostrado menos 'bugs' do que o 'react-creat-app', então com a intenção de evita-los foi decidido uso do primeiro. 
  
  - Origem e Autonomia no Desenvolvimento: Todas as funcionalidades, lógicas e componentes foram desenvolvidos de forma autônoma, destacando a capacidade de criar soluções próprias e enfrentar desafios de maneira independente. Isso ressalta não apenas a implementação das features solicitadas, mas também a habilidade em tomar decisões lógicas e criativas durante o processo de construção do projeto.
  
  - Organização do Projeto: A estrutura do projeto foi organizada de maneira intuitiva, separando os componentes, páginas e estilos em diretórios distintos.
  
  - Estilo e Criatividade: O foco foi na concepção de um design cativante e acolhedor, com a aspiração de atingir a máxima intuitividade. A intenção é proporcionar uma interação fácil e natural para o usuário, elevando a experiência a um patamar mais envolvente e agradável.

  - Busca conceituada: É esperado que o usuário queira ver as informações dos Pokémons apenas carregados e presentes na lista, ao fazer a filtragem pelo input e clicar no botão, pois se trata de algo apenas visual e pouco interativo.

### 👣 Passo a Passo para Executar o Projeto Localmente 👣

1. Clone o repositório:

  git clone https://github.com/Igor-progm/app-pokedex-quest-react-avancado
  cd app-pokedex-quest-react-avancado

2. Instale as dependências:

  npm install

3. Execute a aplicação:

  npm run dev

### 🗒️ Observações 🗒️

Certifique-se de ter o Node.js e o npm instalados em seu sistema antes de seguir os passos acima.
