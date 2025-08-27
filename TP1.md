# Projeto de Bloco: Desenvolvimento Front-end com Frameworks - TP1
Lucca Pietro Camillo dos Santos

26/08/2025
## 1. Definição de Projeto
>Descreva qual a aplicação foi escolhida para ser desenvolvida.

Plataforma de saúde mental MindCare.
## 2. Definição de Escopo e Objetivos
>Qual é o objetivo principal da aplicação web que desenvolveremos, e quais funcionalidades específicas devem ser incluídas para atender às necessidades do escopo definido pelo professor?

O objetivo principal da aplicação é conectar psicólogos e pacientes em um ambiente seguro e intuitivo, oferecendo gestão de agenda e registro de sessões para o profissional e um painel de acompanhamento do tratamento para o paciente. Tanto o profissional quanto o paciente também devem contar com um canal de comunicação seguro.
## 3. Gestão Ágil do Projeto
>Como organizaremos o trabalho seguindo os preceitos do Agile Scrum? Quais serão nossos sprints, como definiremos as tarefas, e como as atribuiremos para assegurar o desenvolvimento efetivo e o cumprimento dos prazos? Mostre uma primeira versão do cronograma de desenvolvimento do projeto.

O projeto será organizado em sprints de duas semanas e tarefas de 1-3 dias. 
### Sprint 1 - Cadastrar e autenticar usuário
 - Tarefa 1: Criar tela de escolha do perfil de usuário (psicólogo ou paciente).
 - Tarefa 2: Criar componente com formulário de cadastramento para psicólogo.
 - Tarefa 3: Criar componente com formulário de cadastramento para paciente.
 - Tarefa 4: Criar componente de autenticação (Firebase).

## 4. Artefatos, Papéis e Eventos do Scrum
>Como você planeja incorporar os artefatos, papéis, e eventos do Scrum no desenvolvimento da aplicação web? Descreva como cada elemento será utilizado para garantir um fluxo de trabalho ágil e eficiente.
### Artefatos
- Backlog do produto: levantamento de histórias pendentes de implantação para a entrega do produto final; essencial para a visualização do projeto.
- Backlog da sprint: definição da história e tarefas necessárias para a entrega estabelecida para a sprint; essencial para quebrar o projeto em partes menores. 

### Eventos
- Sprint: será estabelecido o tempo de 15 dias para cada sprint, em que será desenvolvida uma funcionalidade da aplicação.
- História de usuário e tarefas: em cada sprint, será escolhida uma história de usuário para ser desenvolvida, subdividida em tarefas menores de 1-3 dias.
- Retrospectiva: análise ao final de uma sprint do que foi entregue de valor ao cliente e pontos de melhoria.

### Papéis
- PO: representado no documento de requisitos do MindCare e nas observações do professor; garante que o projeto está evoluindo para as entregas de valor e mantém as necessidades de usuário sempre atualizadas.
- Desenvolvedor: escolhe uma história e taregas para entregar na sprint.

## 5. Criação de Histórias de Usuário
>Como você irá estruturar as histórias de usuário para este projeto? Crie duas histórias de usuário que capturam requisitos funcionais e não funcionais, incluindo responsividade, consumo de dados de uma fonte externa, e funcionalidades específicas para a versão mobile que utilizem gestos do usuário.

Histórias de usuário:
1. Cadastrar usuário
2. Autenticar usuário
3. Visualizar a vitrine de profissionais
4. Exibir detalhes do profissional
5. Agendar sessão
6. Desmarcar sessão
6. Avaliar sessão realizada
7. Visualizar o painel de acompanhamento do tratamento
8. Visualizar agenda de sessões

## 6. Planejamento do Projeto de Desenvolvimento de Front-end
>Quais são os passos iniciais e os marcos principais no planejamento do nosso projeto de desenvolvimento de front-end?

Através da necessidade do usuário e dos casos de uso, desenvolver protótipos dos componentes principais:
- Formulário de cadastro de usuário
- Login
- Vitrine de profissionais
- Agenda de sessões
- Painel de acompanhamento do tratamento
## 7. Interatividade na Aplicação Web/Mobile
>Quais serão as interações básicas disponíveis na nossa aplicação Web/Mobile? Como elas serão planejadas para garantir uma experiência do usuário fluida e intuitiva?

- Preenchimento de formulário para cadastro.
- Marcar e desmarcar sessões com clique em um calendário e pop-up de confirmação.
- Clicar em elementos de uma janela para visualizar dados detalhados daquela entidade (psicólogos na vitrine ou sessões no acompanhamento do tratamento).
## 8. Framework
>Explique como os frameworks ReactJS e React Native irão ajudar a cumprir os requisitos descritos anteriormente.

O React trabalha com componentes reutilizáveis. Tal paradigma é ideal para um time ágil, em que a entrega do produto é quebrada em entregas menores, todas gerando valor e podendo ser testadas pelo PO ou pelo cliente à medida em que são desenvolvidas.
