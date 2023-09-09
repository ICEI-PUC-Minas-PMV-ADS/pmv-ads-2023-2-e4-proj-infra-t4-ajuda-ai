# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

## Personas

Maria Alves - 27 anos.

- Profissional Autônoma de Design Gráfico.
- Maria é uma designer gráfica talentosa, mas ainda está construindo sua carreira como autônoma. Com isso usa a plataforma `Ajuda Aí!` para expandir sua base de clientes e mostrar seu portfólio incrível.  

Pedro Carvalho - 35 anos.

- Cliente em Busca de Reparos Domésticos.
- Pedro é um pai de família ocupado que recentemente comprou sua primeira casa. Ele precisa de um eletricista confiável para resolver um problema de fiação. Usando `Ajuda Aí!`, Pedro pode navegar pela categoria de serviços domésticos e encontrar eletricistas qualificados em sua área. 

Carolina Costa - 24 anos.

- Empreendedora Iniciante.
- Carolina está lançando uma startup de moda sustentável e precisa de um fotógrafo para tirar fotos de seus produtos. Como ela está no início, o orçamento é apertado. Carolina encontra a solução perfeita em `Ajuda aí!`, onde fotógrafos autônomos oferecem pacotes acessíveis. 

Rafael Ferreira - 40 anos.

- Viajante Precisando de Serviços Temporários.
- Em sua última parada, ele percebeu que seu laptop precisava de reparos urgentes. Usando `Ajuda Aí!`, Rafael encontra técnicos de informática disponíveis em sua localização atual. 

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

| `PERSONA`         | `FUNCIONALIDADE`                                                                    | `MOTIVO/VALOR`                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Maria Alves       | Precisar um local de para divulgar seu trabalho de forma eficaz | Ter um lugar que serve como vitrine para todo seu talento. |
| Pedro Carvalho    | Cuidar bem da sua casa conseguindo contato com pessoas de serviço de qualidade                     | Ter acesso à profissionais que oferecem soluções rápidas e eficientes para necessidades do dia a dia.                     |
| Carolina Costa    | Ter a chance e acessibilidade de começar seus projetos                                 | Ter acesso à profissionais sem gastar muito                   |
| Rafael Ferreira  | Contratar profissionais de forma bem pratica e sem limitações                               | Ter acesso a profissionias durante as suas viagens    |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

O setor enfrenta desafios significativos relacionados à busca eficiente de clientes por parte dos autônomos. Esses problemas incluem:

Falta de visibilidade: Muitos autônomos não têm uma plataforma centralizada para se apresentar aos potenciais clientes, o que resulta em uma falta de visibilidade e dificuldade em se destacar no mercado.

Desperdício de tempo: Autônomos frequentemente gastam tempo precioso procurando ativamente clientes, seja por meio de anúncios locais, redes sociais ou outros métodos, o que pode ser ineficiente e cansativo.

Falta de confiabilidade: Os clientes também podem enfrentar dificuldades em encontrar autônomos confiáveis e qualificados para os serviços que necessitam, uma vez que não há uma fonte centralizada de informações sobre esses profissionais.

Comunicação ineficaz: A comunicação entre autônomos e clientes muitas vezes ocorre de maneira ineficiente, tornando difícil a coordenação de horários e detalhes dos serviços a serem prestados.

Acesso limitado à tecnologia: Alguns autônomos podem não estar familiarizados com ferramentas tecnológicas que poderiam ajudá-los a encontrar clientes de forma mais eficaz.

### Descrição Geral da Proposta

Uma solução para os desafios enfrentados pelos autônomos é a criação de uma plataforma digital de correspondência entre autônomos e clientes. 

Essa iniciativa visa melhorar significativamente a experiência de ambas as partes envolvidas, contribuindo para o desenvolvimento econômico e aprimorando a eficiência do mercado de trabalho autônomo.

A plataforma digital proposta funcionaria como um intermediário eficiente, reunindo autônomos de diferentes áreas, como serviços de reparo, construção, consultoria, transporte, design, entre outros, e os clientes que necessitam desses serviços. Os principais componentes e benefícios da proposta incluem:

Conexão Eficiente: A plataforma oferecerá uma interface fácil de usar, onde autônomos podem se cadastrar e criar perfis detalhados com suas habilidades, experiência e disponibilidade. Os clientes, por sua vez, podem procurar profissionais com base em suas necessidades específicas, como localização, tipo de serviço e orçamento.

Transparência e Confiança: A plataforma promoverá a transparência ao exibir avaliações e comentários de clientes anteriores sobre os serviços prestados pelos autônomos. Isso ajuda os clientes a tomar decisões informadas e permite que os autônomos construam uma reputação sólida.

Desenvolvimento da Comunidade: A proposta não apenas beneficia os autônomos e os clientes, mas também contribui para o crescimento econômico da região, incentivando a contratação local e fortalecendo a economia local.

Impacto Social Positivo: Ao criar uma rede mais eficiente e confiável de autônomos e clientes, a plataforma pode contribuir para a redução do desemprego e subemprego na região, bem como aumentar a qualidade dos serviços disponíveis para a comunidade.

### Processo 1 – Fluxo da aplicação

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/BPMN.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/indicadorDesempenho.png)

Esses indicadores de desempenho fornecerão insights valiosos sobre a eficácia da plataforma e ajudarão a identificar áreas que precisam de ajustes ou melhorias ao longo do tempo. 

É importante monitorar esses KPIs continuamente para garantir que o projeto atenda às expectativas e objetivos estabelecidos.

## Requisitos

Os requisitos funcionais são uma parte essencial do processo de desenvolvimento de qualquer sistema ou plataforma, assim como os requisitos não funcionais são igualmente importantes para o sucesso de um projeto de desenvolvimento de software, pois se concentram em aspectos que não estão diretamente relacionados às funcionalidades, mas que impactam a qualidade, desempenho e usabilidade do sistema.

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito   | Prioridade |
|------|---------------------------------------------------------------------------------------|-------|
|RF-001| Os autônomos devem poder criar contas com informações de perfil.                      | ALTA  | 
|RF-002| Os usuários devem poder criar contas com informações de perfil.                       | ALTA  | 
|RF-003| O sistema deve validar informações de registro, como e-mail ou número de telefone.    | ALTA  | 
|RF-004| Os autônomos devem poder criar e editar perfis                                        | ALTA  | 
|RF-005| Os usuários devem poder criar e editar perfis                                         | ALTA  |
|RF-006| Disponibilizar filtros de pesquisa serviço                                            | MÉDIA | 
|RF-007| Disponibilizar filtros de pesquisa oportunidade serviço                               | MÉDIA | 
|RF-008| Permitir a comunicação entre o cliente e o autônomo                                   | MÉDIA |  
|RF-009| Garantir a segurança dos dados do autônomos e usuários                                | ALTA  | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A plataforma deve ser responsiva e rápida, com tempos de carregamento de página curtos          | MÉDIA | 
|RNF-002| A plataforma deve ser escalável e acomodar um alto no número de usuários e dados                | BAIXA | 
|RNF-003| Deve garantir segurança dos dados,sejam protegidos por medidas de segurança robusta             | MÉDIA | 
|RNF-004| A plataforma deve ter planos de contingência para lidar com interrupções não planejadas         | BAIXA | 
|RNF-005| O sistema deve ser confiável, com um baixo índice de erros e falhas                             | MÉDIA | 
|RNF-006| O sistema deve cumprir regulamentações e normas legais relevantes                               | BAIXA | 

## Restrições

Restrições são limitações, condições ou restrições impostas a um sistema, processo, projeto ou atividade para controlar, direcionar ou definir seus parâmetros de funcionamento. 

Elas desempenham um papel importante na gestão de projetos e no funcionamento eficiente de sistemas e organizações, uma vez que ajudam a definir limites, garantir conformidade e mitigar riscos. 

É essencial considerar e gerenciar adequadamente as restrições ao planejar e executar qualquer projeto ou atividade.

Elas são comuns em várias áreas e contextos, incluindo:
•	Segurança de Dados
•	Privacidade dos Usuários
•	Avaliação de Fornecedores de Serviços
•	Avaliações de Usuários
•	Segurança Cibernética
•	Responsabilidade Civil

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

![Diagrama ER](img/DiagramaER.png)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização do relacionamento entre requisitos e outros projetos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio.

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

|ID do requesito    | Descrição do Requisito  |Casos de Uso Afetados |Testes Afetados  | Componentes de Software Afetados |
|-------------------|-------------------------|----------------------|-----------------|----------------------------------|
|REQ-001| O sistema deve permitir o login do usuário                     | |RF001 |Módulo Autenticação               | 
|REQ-002| O sistema deve permitir que o usuário crie um perfil           | |RF002 |Módulo de Gerenciamento de Perfil | 
|REQ-003| O sistema deve ser compatível com dispositivos móveis          | |RF008 | -                                | 
|REQ-004| O sistema deve fornecer segurança cibernética                  | |RF006 |Módulo segurança e ESG            | 
|REQ-005| O sistema deve armazenar dados de usuário em um banco de dados | |RF008 |Módulo de Banco de Dados          | 
|REQ-006| O sistema deve ser seguro contra ataques de força bruta        | |RF005 |Módulo de Segurança               | 

# Gerenciamento de Projeto

Divisão de Papéis
Tech Lead: Marcus Vinicius Marinho Ferreira

Scrum Master: Marcus Vinicius Marinho Ferreira

Product Owner: Amanda Eufrasio Cacholi

Equipe de Desenvolvimento

Amanda Eufrasio Cacholi
Marcus Vinicius Marinho Ferreira
Daniel de Oliveira Marcelino
Luiz Fernando Ribeiro Ferreira
Patrick Douglas dos Santos

Equipe de design:

Amanda Eufrasio Cacholi

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.


![Captura de tela 2023-09-08 222149](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-ajuda-ai/assets/93995106/e4ff30ef-4675-498c-8385-acb80a5e9956)


## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-ajuda-ai/assets/93995106/ad7612f6-6e86-4eec-8106-ec0f2659cf7c)


## Gestão de Orçamento


![Recursos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-ajuda-ai/assets/93995106/1c399ba4-2937-455a-9711-147b8d6baee1)

