<h1>API Ajuda Aí!</h1>

Antes de seguir os passos para rodar o projeto local, certifique-se que tenha instalado <strong>NodeJS</strong> e <strong>NPM</strong>

- [Instalar NPM e NodeJS para Windows](https://nodejs.org/en/)

Para instalar no linux rodar esses comandos no terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

```bash
nvm install 18.18.0
```

<h2> Como instalar as dependências do projeto; </h2>

## Rodar localmente

No terminal na sua maquina, clone o repositório:

```bash
git clone https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-ajuda-ai.git
```

Vá até o diretório do projeto:

```bash
cd src/web-api
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor local:

```bash
npm start
```

Inicie o servidor para desenvolvimento do projeto:

```bash
npm run dev
```

Depois de subir o servidor use esse comando para rodar a camada de testes unitarios:

```bash
npm test
```

<h2>Como executar o projeto;</h2>

Depois de ativar o servidor, acesse: <a><strong>http://localhost:3000</strong></a>

<h2>Rotas presentes;</h2> 
  
<strong>Verbos HTTP REST:</strong> GET, POST, DELETE E PUT.
  
 <h4>Para Autonomos:</h4>
  
<strong>Rota para buscar todos os perfils autonomos:</strong> GET <a>http://localhost:3000/api/autonomos</a>

<h3>Para mais informações sobre a API acesse o arquivo:</h3> 

<h4>request.rest</h4>

<li><a href="./request.rest"> Informações da API</a></li> <br/>

<h1>DEPLOY DA APLICAÇÃO!</h1>

[Back-end Ajuda aí](https://ajuda-ai-backend.onrender.com/)
