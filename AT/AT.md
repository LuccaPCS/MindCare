# Projeto de Bloco: Desenvolvimento Front-end com Frameworks

Lucca Pietro Camillo dos Santos
26/08/2025

## 1. Definição de Projeto

Plataforma de saúde mental MindCare.

## 2. Definição de Escopo e Objetivos

O objetivo principal da aplicação é conectar psicólogos e pacientes em um ambiente seguro e intuitivo, oferecendo gestão de agenda e registro de sessões para o profissional e um painel de acompanhamento do tratamento para o paciente. Tanto o profissional quanto o paciente também devem contar com um canal de comunicação seguro.

## 3. Gestão Ágil do Projeto

O projeto será organizado em três épicos. Cada épico terá duas sprints de duração, nas quais serão executadas histórias de usuário relativas a determinada funcionalidade ou conjunto de funcionalidades da aplicação.

Os épicos e suas histórias (e tarefas para cada história) estão descritos no final deste documento.

## 4. Artefatos, Papéis e Eventos do Scrum

### Artefatos

- Backlog do produto: levantamento de histórias pendentes de implantação para a entrega do produto final; essencial para a visualização do projeto.
- Backlog da sprint: definição da história e tarefas necessárias para a entrega estabelecida para a sprint; essencial para quebrar o projeto em partes menores.

### Eventos

- Sprint: será estabelecido o tempo de 15 dias para cada sprint, em que será desenvolvida uma funcionalidade da aplicação.
- História de usuário e tarefas: em cada sprint, será escolhida uma história de usuário para ser desenvolvida em 1-3 dias.
- Retrospectiva: análise ao final de uma sprint do que foi entregue de valor ao cliente e pontos de melhoria.

### Papéis

- PO: representado no documento de requisitos do MindCare e nas observações do professor; garante que o projeto está evoluindo para as entregas de valor e mantém as necessidades de usuário sempre atualizadas.
- Desenvolvedor: escolhe uma história e taregas para entregar na sprint.

## 5. Criação de Histórias de Usuário

Os épicos e suas histórias (e tarefas para cada história) estão descritos no final deste documento.

## 6. Planejamento do Projeto de Desenvolvimento de Front-end

Através da necessidade do usuário e dos casos de uso, desenvolver protótipos dos componentes principais:

- Formulário de cadastro de usuário
- Login
- Vitrine de profissionais
- Agenda de sessões
- Painel de acompanhamento do tratamento

## 7. Interatividade na Aplicação Web/Mobile

- Preenchimento de formulário para cadastro.
- Marcar e desmarcar sessões com clique em um calendário e pop-up de confirmação.
- Clicar em elementos de uma janela para visualizar dados detalhados daquela entidade (psicólogos na vitrine ou sessões no acompanhamento do tratamento).

## 8. Framework

O React trabalha com componentes reutilizáveis. Tal paradigma é ideal para um time ágil, em que a entrega do produto é quebrada em entregas menores, todas gerando valor e podendo ser testadas pelo PO ou pelo cliente à medida em que são desenvolvidas.

## Épico 1 - Cadastro

### História 1 - Cadastro do paciente

Como novo paciente, quero me cadastrar na aplicação, fornecendo dados de apresentação, que serão úteis para os psicólogos.

- Criar tela de escolha do perfil de usuário (psicólogo ou paciente).
- Criar componente com formulário de cadastramento para paciente.

### História 2 - Cadastro do psicólogo

Como novo psicólogo, quero me cadastrar na aplicação, fornecendo dados que
serão úteis para os pacientes que queiram agendar uma consulta.

- Criar tela de escolha do perfil de usuário (psicólogo ou paciente).
- Criar componente com formulário de cadastramento para psicólogo.
  O snapshot do projeto entregue neste épico pode ser acessado na branch remota “TP2” do projeto GitHub.

## Épico 2 - Dashboard e navegação

### História 3 - Dashboard do paciente

Como paciente autenticado, quero ter acesso aos psicólogos disponíveis para visualizar detalhes e marcar consulta.

- Construir dashboard de clientes, com cards de psicólogos disponíveis.
- Mostrar detalhes do psicólogo ao clicar no card.

### História 4 - Navegação 1

Como usuário autenticado, quero navegar do dashboard para o meu perfil.

- Construir painel de navegação e exibir no dashboard.
- Adicionar link para a página de perfil do usuário no painel de navegação.
  O snapshot do projeto entregue neste épico pode ser acessado na branch remota “TP3” do projeto GitHub.

## Épico 3 - Login e navegação

### História 5 - Login

Como usuário, quero poder fazer login na aplicação, com a devida validação dos meus dados e direcionamento para o dahboard do meu perfil (paciente ou psicólogo).

- Construir tela de login.
- Incluir validação de senha correta e usuário cadastrado.
- Com o login, guardar perfil do usuário autenticado e direcionar para o dashboard de acordo.
- Testar login utilizando o Cypress (cenários de teste: autenticação bem sucedida e senha não validada).

### História 6 - Navegação 2

Como usuário, quero poder navegar da tela de login para o cadastro, para poder me cadastrar.

- Incluir link para cadastro de usuários não cadastrados na tela de login.

A conclusão do épico 3 resultou no projeto final.
