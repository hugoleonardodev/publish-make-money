# Monetus Money

Um aplicativo React para mercado financeiro com atualização em tempo real.

- Database from [IEX API](https://cloud.iexapis.com/)

This applications is configured with:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Next](https://nextjs.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)
- Components and styles from [material-ui](https://material-ui.com/) and [styled-components](https://styled-components.com/) for customize Carousels
- Carousels from [react-elastic-carousel](https://sag1v.github.io/react-elastic-carousel/)
- Chart [recharts](https://recharts.org/en-US/)

More details on devDependencies check package.json file.

## Layout

Figma prototype [Figma](https://www.figma.com/file/QnP6TS75p4unSQyoz8GIRx/Teste-Front-end-Monetus?node-id=21%3A23)

![image](/public/layout-image.png)

## Tests Coverage

Cobertura de testes automatizados realizados com Jest. Ambiente configurado para rodar testes nas paginas do Next.
Melhor rodar com mercado fechado para evitar mutações desnecessárias e consequentemente erros no teste.

O next/image não passa nos testes se o src for importado. Como ocorre para executar o projeto. Então tem que ser
substituido em src/components/UserOptionsDropdown/UserOptionsDropdown.tsx. Está comentado no arquivo. Para analize
dos bundles a mesma coisa.

![image](/public/tests-image.png)

## Bundle Analyze

Analize do tamanho dos chunks e tempo de build. Identifica possiveis erros na produção.

![image](/public/analyze-image.png)

## How to use

- Install - install the application modules

```bash
  yarn install
```

- Analyze - analyzes both server and browser bundles

```bash
  yarn run analyze
```

- Analyze Browser - analyzes browser bundles

```bash
  yarn run analyze:browser
```

- Analyze Server - analyzes server bundles

```bash
  yarn run analyze:server
```

- Build - builds the application with next build

```bash
  yarn build
```

- Dev - runs the application with next dev on local environment

```bash
  yarn dev
```

- Format - prettier formater for code

```bash
  yarn run format
```

- Lint - eslint check linter

```bash
  yarn run lint
```

- Start - next start

```bash
  yarn start
```

- Type Check - typescript check types

```bash
  yarn run type:check
```

- Test - tests with jest

```bash
  yarn test
```

- Test All - linter, type checking, and jest tests

```bash
  yarn run test-all
```

## Considerações finais

Olá Monetus. Sou um desenvolvedor front-end de Belo Horizonte, MG. Trabalho atualmente em uma startup.
Com uma equipe de profissionais do Brasil e da Suíça. Onde tenho que usar minhas skills de JavaScript e
React ao máximo. Além de falar e ouvir bastante inglês.

Gostei muito da proposta do projeto. Foi um dos mais desafiadores que já fiz. Além de exigir tudo e mais
um pouco da parte de código, exigiu muito também do inglês, principalmente na leitura das documentações.
Exigiu ainda conhecimentos matemáticos, para a parte dos gráficos. E conhecimentos de mercado finaneiro,
para entender o que está acontecendo e os dados necessários para a aplicação. Então fiquei muito feliz mesmo.
Pois tive que me esforçar em todas essas áreas para conseguir concluir o desafio. Além disso, achei muito bem
feito a proposta do desafio. Gostei muito da empresa. Vocês são muito profissionais.

A aplicação em si, é um SPA com TypeScript e React, basicamente. Com framework Next para SSR e otimização de SEO.
O React possui mecanismos muito bons para fazer atualizações em tempo real. Dispensando uma biblioteca de terceiros como Socket.io para fazer esse serviço. Então acabei tirando proveito ao máximo do useEffect para fazer requisições a API e atualizar o estado dos componentes. Fazendo com que as informações sejam atualizadas a cada 5 segundos para indicadores de alta/baixa. E a cada 1 minuto para os gráficos. Mas podemos ajustar o tempo para menos. Porém não menos do que 3 segundos. Pois como tudo isso ocorre de forma assincrona, é bom deixar um intervalo de tempo seguro para que toda as atualizações de estado ocorram.

O layout consiste em componentes estraidos da biblioteca Material UI, principalmente. Visto que a mesma oferece suporte
para SSR. Não queria me preocupar muito com a construção dos componentes. Leva bastante tempo pra fazer tudo do zero.
A estrutura de pages, templates, layouts, containers e componentes, segue o Atomic Design. Um padrão de estrutura para
componentes React. Tudo dentro da pastar src. A exceção fica para o gŕafico e carousel. Que são duas bibliotecas distintas. E no caso do carousel, houve a necessidade de intalar o styled-components para customização. Mas a principio, não usaria o styled-components. Pois já estava com o SSR todo configurado para o Material UI. Não queria gerar conflitos. Como está acontecendo agora. Deveria ter usado o styled-components para o SSR e jogado o Material UI por cima. Mas agora não tem como voltar atrás. Vou usar o styled-components mais a fundo na aplicação React Native.

As demais estruturas como services, styles, common e core foram separadas pois possuem responsabilidade única. Services
é referente a requisições à API do IEX Cloud e localStorage. Styles cria instancias e gerencia tudo relacionado a estilos
do Material UI e styled-components. Como temas, hooks, globals e componentes. Assets são conjutos de imagens e icones
fornecidos pelo protótipo do Figma. Common são constantes que não são alteradas e funções helpers que podem ser chamdas
em qualquer lugar da aplicação. Core é o núcleo da aplicação. Onde fica toda a lógica do Context. Com Actions, Hooks,
Reducers, e tudo que for realacionado.

Um dos principais problemas logo no inicio foi a política de CORS da plataforma IEX Cloud. Eles não deixam uma aplicação
que roda no browser fazer requisições a API deles. Consultei a API e não havia muitas informações. Uma das soluções seria
entrar em contato com a equipe do back-end e perguntar o que enviar no headers para o CORS. Mas como essa não era uma opção, eu decidi testar requisições XMLHTTPRequest ou requisições no ambiente Node com HTTPS. Deu certo mas geraram alguns warnings. E no HTTPS não consegui tratar os dados de forma adequada. Mas ambos estão sendo utilizados no projeto.
Como forma de expor soluções. Uma outra forma seria criar um BFF. Uma camada extra de Back-end for Front-end para fazer
as requisições em ambiente de servidor e depois servi-las pela api do Next. Também é uma possibilidade. Mas o ideal mesmo
seria que todo o processamento de dados ocorresse na camada de banco de dados e/ou services. Pois o browser rodando
JavaScript single thread não é o ambiente ideal para isso.

Embora não esteja sendo cobrado, fiz alguns testes automatizados. O ideal é rodar com mercado fechado. Do contrário,
teria que criar uma API mockada. Aí está muito fora do escopo do projeto. Mas dava pra fazer também se fosse necessário.
O Cypress.io também iria bem aqui. Testando casos de uso em tempo real. Aí daria pra fazer com mercado aberto. Mas não
foi cobrado. O TypeScript valida muita coisa. E bastante coisa é testada nas bibliotecas externas. Então não sei se é
da cultura de vocês testar o front-end. Dava pra aprofundar mais com o Jest e conseguir uma cobertura proxima dos 100%
ou até mesmo os 100%. Mas leva tempo. E resolvi colocar um ponto final no projeto para ter tempo de fazer o React Native.

Não implementei a barra do Bloomberg. Mas era só pegar um Carousel e renderizar os cards com as informações em
tempo real. E colocar ele pra rodar em modo automático. Mas aí depende muito da API. Dava pra fazer usando Promise.all.
E ir atualizando. Mas também está fora do escopo fazer esse processamento de dados todo. Vou fazer na versão mobile.
Usando o mesmo Carousel. Pois não tinha muito espaço na interface web. E ia ficar estranho outro Carousel. Mas na versão
mobile dá pra fazer.

Não foram cobradas automações. Mas o Husky eu já deixo configurado nos meus boilerplates. E é muito bom para verificar
os arquivos antes dos commits. Mesmo com tudo isso, eu não faria o deploy ainda. Pois algumas configurações do SSR
ainda estão em conflito. Principalemente por causa do Material UI e Styled Components. Mas podem existeir outros
problemas ainda. Como a questão dos warnings e tratamento de dados das requisições.

Vou começar o React Native. Mas preciso de um tempo para terminar. Alguns problemas já resolvi nessa versão. Mas surgirão
outros. Com certeza. Principalmente na configuração do aplicativo como um todo. O resto vamos resolvendo com calma. Mas
será entregue a versão mobile.

Atencioasamente,

Hugo Leonardo
Desenvolvedor Front-End
TypeScript/JavaScript
React/Next/React Native

Contatos:

(31)99969-9361

hugoleonardo.dev@gmail.com

[LinkedIn](https://www.linkedin.com/in/hugo-leonardo-matosinhos-de-souza/)

[CodeSandBox](https://codesandbox.io/u/hugoleonardo.dev)
