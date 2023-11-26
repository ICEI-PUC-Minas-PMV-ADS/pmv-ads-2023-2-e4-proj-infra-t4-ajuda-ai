# Plano de Testes de Software

Testes aplicação back-end:

# BACK-END  
Testes aplicação back-end:  

Clique aqui em <a href="../src/web-api/README.md"> API - AJUDA AÍ </a> para iniciar a aplicação backend.<br/><br/>

Dentro da documentação, vai conter o comando: <p style="color:violet">npm test</p> Assim que a aplicação estiver rodando, usando esse comando no mesmo diretorio, porém em outro terminal, irá rodar os testes unitarios na aplicação.

![Evidencias de Testes UNitarios Back-end](./img/evidenciadetestesunitariosbackend.png)  
# FRONT-END WEB
Está seção detalha o planejamentos do processo de realização dos Testes de Software FRONT-END WEB.
|Caso de Teste | CT-01 - Funcionamento da API para os usuários.|
|:--|:--|
|**Requisitos Associados**|RF-001 - A aplicação deverá permitir o cadastro de usuários e suas informações, sendo separados em autônomos ou solicitante do serviço. <br/> RF-002 - A aplicação deverá permitir a alteração dos dados do usuário. <br/> RF-003 - A aplicação deverá permitir a exclusão dos dados do usuário. <br/> RF-004 - A aplicação deverá exibir os dados do usuário.|
|**Objetivo do teste**| Verificar e testar o cadastro dos usuários juntamente com outras funcionalidades CRUD (Create, Read, Update, Delete). |
|**Passos**|1 - Incluir dados no Banco de Dados NoSQL através da rota pré-definida. <br/>2 - Alterar dados no Banco de Dados NoSQL através da rota pré-definida.<br/>3 - Excluir dados no Banco de Dados NoSQL através da rota pré-definida. <br/> 4 - Listar dados no Banco de Dados NoSQL através da rota pré-definida.|
|**Critérios de Êxito**| Os usuários e suas informações devem ser cadastrados com sucesso e a aplicação deverá permitir a manipulação de seus dados conforme expecificado com êxito através das rotas. |

|Caso de Teste | CT-02 - Funcionamento da interface do usuário(logado) com os funcionamentos do lado do servidor. |
|:--|:--|
|**Requisitos Associados**|RF-005 - Poderá acessar a lista de autônomos verificando o serviço prestado <br/> RF-006 - Poderá acessar a opção para adicionar comentariós sobre o prestador <br/> RF-007 - Poderá acessar a opão para verificar suas informações.<br/> RF-008 - Poderá acessar a opção de editar dados, que irá permitir editar seus dados pessoais ou excluir conta.
|**Objetivo do teste**|Verificar o funcionamento da aplicação para usuários já logados e as funcionalidades que o usuário poderá realizar, utilizando o lado do cliente e do servidor. |
|**Passos**| 1 - Acessar a aplicação<br/> 2 - realizar o login com uma conta já cadastrada<br/> 3 - acessar as opções no menu<br/> 4 - Verificar prestadores e seu serviço |
|**Critérios de Êxito**| Possuir uma integração do lado do servidor e do cliente com requisições-respostas através das rotas definidas na API. O usuário conseguirá realizar todas as funcionaliades descritas com êxito desde que utilizadas corretamente, caso não bem utilizadas deverá ser exibida mesnagens de aviso para o usuário. |
# FRONT-END MOBILE
|Caso de Teste | CT-01 - - Funcionamento da API para os prestadores de serviços e usuários (Mobile)|
|:--|:--|
|**Requisitos Associados**|RF-001 -  A aplicação deve permitir o cadastro de prestadores de serviços/usuarios e suas informações <br/> RF-002 - A aplicação deve permitir a alteração dos dados do prestador de serviço/usuario. <br/> RF-003 - A aplicação deve permitir a exclusão dos dados do prestador de serviço/usuario. <br/> RF-004 - A aplicação deve exibir os dados do prestador de serviço/usuario.|
|**Objetivo do teste**| Verificar e testar o cadastro dos usuários juntamente com outras funcionalidades CRUD (Create, Read, Update, Delete). |
|**Passos**|1 -  Realizar o cadastro de prestadores de serviços/usuario no aplicativo mobile.  <br/>2 - Alterar dados dos prestadores de serviços/usuario via aplicativo mobile <br/> 3 - Excluir dados dos prestadores de serviços/usuario via aplicativo mobile <br/> 4 - Visualizar os dados dos prestadores de serviços/usuarios no aplicativo mobile.|
|**Critérios de Êxito**| Os prestadores de serviços/usuarios devem ser cadastrados com sucesso, e a aplicação mobile deve permitir a manipulação dos dados conforme especificado nas rotas API. |

|Caso de Teste | CT-02 - - Funcionamento da interface do usuário (não logado) com os funcionamentos do lado do servidor (Mobile)|
|:--|:--|
|**Requisitos Associados**|RF-005 -   A aplicação deve ser acessada pelo usuário exigindo login/cadastro obrigatório. <br/> RF-006 - A aplicação deve exibir informações do Menu para criar conta e realizar o Login. <br/> RF-007 -  O usuário não logado deve poder criar uma conta de usuário comum. |
|**Objetivo do teste**| Verificar se o usuário não logado terá acesso primário ao aplicativo, permitindo o login ou a criação de uma conta de usuário comum. |
|**Passos**|1. Abrir o aplicativo mobile. <br/> 2. Visualizar a tela inicial do aplicativo. <br/> 3. Escolher e acessar uma das opções no menu. <br/> 4. Realizar o cadastro ou login como usuário comum. <br/> 5. Verificar o sucesso no login ou na criação de conta.|
|**Critérios de Êxito**|O usuário deve acessar a tela inicial do aplicativo, onde as opções de cadastro ou login devem estar visíveis. Após preencher corretamente as opções, o usuário deve ser logado ou a conta deve ser criada com sucesso como um usuário comum. |

|Caso de Teste | CT-03 - -  Funcionamento da interface do usuário (logado) com os funcionamentos do lado do servidor (Mobile)|
|:--|:--|
|**Requisitos Associados**|RF-009 - Acesso para prestadores de serviços adicionar detalhes de serviços oferecidos. <br/> RF-010 - Acesso para usuários comuns visualizarem os serviços oferecidos pelos prestadores. <br/> RF-011 - Acesso para usuários comuns solicitarem serviços.|
|**Objetivo do teste**| Verificar o funcionamento da aplicação para usuários logados e as funcionalidades que podem ser realizadas no ambiente mobile. |
|**Passos**|1. Abrir o aplicativo. <br/> 2. Realizar o login com uma conta já cadastrada. <br/> 3. Acessar as opções no menu. <br/> 4. Realizar as funcionalidades de acordo com a interação do prestador de serviço ou usuário comum.|
|**Critérios de Êxito**|Ter uma integração entre o lado do servidor e cliente com requisições-respostas através das rotas definidas na API. Os prestadores de serviços devem conseguir adicionar detalhes dos serviços oferecidos, e os usuários comuns devem conseguir visualizar e solicitar serviços de forma correta e intuitiva no aplicativo mobile. caso não bem utilizadas deverá ser exibida mesnagens de aviso para o usuário. |

 
## Ferramentas de Testes

Comente sobre as ferramentas de testes utilizadas.
 
Ferramenta de teste para aplicação back-end em *Node.js*: <a href="https://jestjs.io/pt-BR/">JEST</a> e <a href="https://www.npmjs.com/package/supertest">SuperTest</a>
