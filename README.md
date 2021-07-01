# livraria-site
Website criado como trabalho para a disciplina de desenvolvimento web do ICMC - USP, no primeiro semestre de 2021.


- Grupo 11:						
- 11219216,   Gustavo Bartholomeu Trad Souza,			gustavobartholomeu@usp.br;		
- 11219175,	  Luca Maciel Alexander,			        lucapitan72@usp.br;		
- 11795398,	  Victor Cologni Seles,			          victorcologniseles@usp.br;		
- 8936972,	  Henrique Martins Loschiavo,			    henrique.loschiavo@usp.br;		


1. **Requirements:** 

Os requerimentos do nosso sistema particular não acrescentam aos listados na descrição do trabalho. Uma exceção seria a funcionalidade de visualizar um trecho do livro gratuitamente, antes de optar por adicioná-lo ao carrinho.



2. **Project Description:**

- O projeto visa implementar um website de vendas para uma livraria virtual: a "Livraria ICMC". São previstos três tipos de usuários: um internauta não cadastrado, um cliente cadastrado e um administrador.
- A única categoria de produtos a serem vendidos é a de livros. As principais informações armazenadas no lado do servidor serão características dos usuários ou dos livros (exatamente aquelas elencadas na descrição do trabalho: nome, email, foto, preço, etc.).
- O site deve possuir uma página principal, com alguns produtos exibidos, um campo de busca e campos para se cadastrar ou fazer login.
- O site deve possuir uma página dedicada à entrada de campos para o cadastro de novos usuários.
- O site deve possuir uma página de mais informações sobre um livro, em que são exibidas descrições, preços, quantidades em estoque e prévias gratuitas de livros. É nesta página que o usuário teria a opção de adicionar o produto ao carrinho.
- O site deve possuir uma página exibindo os nomes dos produtos que se encontram no carrinho do cliente, juntamente aos preços e à possibilidade de alterar as quantidades destes produtos. É nesta página que o usuário teria a opção de finalizar a compra.
- O site deve possuir uma página que exibe as informações sobre a conta de um cliente. O cliente também deve ter a opção de alterar essas informações.
- O site deve possuir uma página em que os administradores podem buscar, criar, atualizar e deletar produtos.

| ![Diagrama de Navegação (Inicial)](./testes/navDiagramLivraria.png?raw=true) | 
|:--:| 
| *Diagrama de Navegação (Inicial)* |



3. **Comments About the Code:** 

O código fonte é dividido em diretórios intuitivamente nomeados:
- No diretório 'project', encontram-se as páginas estáticas implementadas para a primeira entrega deste trabalho, sem funcionalidades.
- No diretório 'public', encontra-se o arquivo 'index.html', para o qual o navegador é apontado quando iniciamos a SPA.
- No diretório 'src', está implementada a SPA:
  - Dentro de 'src' está o diretório 'pages', que implementa em SPA, usando Vue.js, todas as funcionalidades do site inicialmente propostas.
  - Os demais arquivos e diretórios em 'src' estabelecem uma conexão entre o servidor da Google Firebase (NoSql) e o web-app.
- O diretório 'testes' contém prints de alguns testes realizados, contidos na seção 5 logo abaixo.
- Demais observações sobre a implementação podem ser encontrados em forma de comentários dentro do próprio código.



4. **Test Plan:** 

Testamos utilizando o postman para realizar requests e conferir replies. Para conferir a qualidade do front-end e back-end, exaustaremos os caminhos de navegação pelo site manualmente, enquanto modificando variáveis como browsers e dispositivos. Os resultados são expostos abaixo. Além disso, cabe notar que os testes foram realizados sem entraves nos navegadores Chrome, Edge e Firefox, e também em um celular Samsung Galaxy s10e (navegador Chrome). Os tempos de resposta do servidor se mantiveram dentro do esperado. 



5. **Test Results:** 

Testes Realizados:

1) Adicionar um novo livro, pela tela de admin, usando conta de admin.
2) Editar as informações de um livro, pela tela de detalhes do livro, usando conta de admin.
3) Remover um livro, pela tela de detalhes do livro, usando conta de admin.
4) Cadastro de um novo usuário.
5) Login de um usuário cadastrado.
6) Filtro de categoria de livros.
7) Filtro de pesquisa de livros. 


6. **Build Procedures:** 

Para executar a aplicação tem-se duas opções:
1) Acessar o link https://livraria-site.web.app , hosteado no Google Firebase.
2) Localmente, clonando o repositório, e com yarn instalado, executar dentro do diretório raíz os primeiros dois:
  
### Project setup
```
yarn install
```
### Compiles and hot-reloads for development
```
yarn run serve
```
### Compiles and minifies for production
```
yarn run build
```
### Lints and fixes files
```
yarn run lint
```
E entrar no localhost:8080 pelo navegador. 



7. **Problems:** 

Uma dificuldade encontrada desde a primeira entrega foi, além de implementar as funcionalidades, passar o trabalho que já havia sido feito para uma SPA em Vue.



9. **Comments:** 
 
 Entrar em contato com os autores se desejar o user/senha da conta admin (para por exemplo alterar o estoque dos livros).






