// MAINTOR Platform · State management
// Rodadas, peças, edits — persistidos em localStorage

const STORAGE_KEY = 'maintor_platform_v1';

// ============================================================
// SEED DATA · rodadas baseadas nos planejamentos enviados
// ============================================================

const seedData = {
  rodadas: [
    {
      id: '2026-05-W21',
      number: 21,
      year: 2026,
      label: 'Semana 21',
      dates: '19–26 Maio',
      theme: 'Do reativo ao preditivo · curva de maturidade',
      pillar: 'futuro',
      pieces: [
        {
          id: '21-01',
          template: 'CarrosselSlide',
          title: 'Carrossel mãe · Curva de maturidade',
          channel: 'LinkedIn',
          data: {
            pillar: 'Visão de futuro',
            slides: [
              { kind: 'cover', title: 'Manutenção que <i style="background:linear-gradient(90deg,#3B82F6,#A855F7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">aprende</i>.<br/>A curva de <i style="background:linear-gradient(90deg,#3B82F6,#A855F7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">maturidade</i>.', sub: 'Do reativo ao preditivo. Os 5 estágios que separam quem paga conta de quem antecipa.' },
              { kind: 'content', overline: 'Estágio 01', title: 'Reativa pura.', body: 'Quebrou, conserta. Sem plano, sem histórico, sem aprendizado. Equipe vive apagando incêndio.' },
              { kind: 'content', overline: 'Estágio 02', title: 'Preventiva no calendário.', body: 'Existe plano. Mas é fixo, baseado em manual. Executa parcialmente. Indicador é horizonte.' },
              { kind: 'content', overline: 'Estágio 03', title: 'Preventiva por condição.', body: 'Inspeção periódica detecta sinal de falha. Histórico começa a virar decisão.' },
              { kind: 'content', overline: 'Estágio 04', title: 'Preditiva por sensor.', body: 'IoT, telemetria, análise de vibração. O ativo avisa antes de falhar. MAINTOR Sense entra aqui.' },
              { kind: 'content', overline: 'Estágio 05', bigNumber: '60%', title: 'menos corretiva<br/>em empresas que<br/>chegam ao preditivo.', body: 'Não é só menos quebra. É previsibilidade de orçamento, de OEE, de turno.' },
              { kind: 'cta', title: 'MAINTOR conecta<br/>os 5 estágios.', body: 'Do registro estruturado ao Sense. Sem trocar de sistema, sem parar a operação.', cta: 'Conhecer MAINTOR Sense' },
            ],
          },
        },
        {
          id: '21-02',
          template: 'PostAutoridade',
          title: 'Post · Reativa vs. preditiva',
          channel: 'LinkedIn',
          data: {
            pillar: 'Autoridade técnica',
            photo: 'assets/img/08_tubulacoes_motores/sensor-sense-bomba-01.jpg', scrim: 80,
            headline: 'Reativa é resposta.<br/><i style="background:linear-gradient(90deg,#2563EB,#7C3AED);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">Preditiva</i> é antecipação.',
            sub: 'A diferença não está no software. Está na maturidade do processo que o software sustenta.',
            hash: '#AUTORIDADE',
          },
        },
        {
          id: '21-03',
          template: 'FraseMae',
          title: 'Frase forte · Antecipa vs. paga',
          channel: 'LinkedIn + Instagram',
          data: {
            pillar: 'Impacto financeiro',
            photo: 'assets/img/09_ambiente_geral/drone-planta-sunset-01.jpg', scrim: 70,
            quote: 'Quem antecipa<br/>decide.<br/><br/>Quem reage<br/>paga.',
            hash: '#FRASE',
          },
        },
        {
          id: '21-04',
          template: 'DadoImpacto',
          title: 'Dado · 60% menos corretiva',
          channel: 'LinkedIn',
          data: {
            pillar: 'Impacto financeiro',
            overline: 'O retorno da preditiva',
            headline: 'Empresas que migram para manutenção preditiva pagam, em média,',
            currency: '',
            number: '60',
            suffix: '%',
            unit: 'menos em<br/>manutenção<br/>corretiva',
            noteTitle: 'Não é teoria. É contabilidade.',
            noteBody: 'Menos quebra inesperada, menos hora-extra, menos peça emergencial, menos parada não planejada.',
            hash: '#IMPACTO',
          },
        },
        {
          id: '21-05',
          template: 'StoryReel',
          title: 'Stories · Em que nível está sua manutenção',
          channel: 'Instagram Stories',
          data: {
            pillar: 'Dor operacional',
            hook: 'Em que <i style="background:linear-gradient(90deg,#3B82F6,#A855F7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">nível</i><br/>está sua<br/>manutenção?',
            sub: 'Teste rápido: 5 perguntas. Veja seu estágio na curva.',
            photo: 'assets/img/09_ambiente_geral/broll-corredor-planta-01.jpg', scrim: 68,
            hash: 'STORIES · S21',
          },
        },
        {
          id: '21-06',
          template: 'LinkedInArtigo',
          title: 'Artigo · Da OS reativa ao sensor IoT',
          channel: 'LinkedIn (artigo longo)',
          data: {
            pillar: 'Visão de futuro',
            overline: 'Artigo · 6 min de leitura',
            photo: 'assets/img/12_graficos_capas/planta-noturna-hologramas-01.jpg', scrim: 72,
            title: 'Da OS reativa ao sensor IoT: a jornada da manutenção em 5 estágios.',
            sub: 'Onde você está hoje, o que sustenta cada estágio, e quanto custa pular fases.',
            items: [
              'Estágio 1: por que reativa pura é insustentável',
              'Estágio 2: preventiva no calendário (e seus limites)',
              'Estágio 3: a inspeção que vira decisão',
              'Estágio 4: sensor IoT, telemetria, MAINTOR Sense',
            ],
            author: 'Equipe MAINTOR',
          },
        },
      ],
    },
    {
      id: '2026-05-W20',
      number: 20,
      year: 2026,
      label: 'Semana 20',
      dates: '12–19 Maio',
      theme: 'A preventiva que ninguém cumpre',
      pillar: 'dor',
      pieces: [
        {
          id: '20-01',
          template: 'CarrosselSlide',
          title: 'Carrossel mãe · Preventiva no papel',
          channel: 'LinkedIn',
          data: {
            pillar: 'Dor operacional',
            slides: [
              { kind: 'cover', title: '<i style="background:linear-gradient(90deg,#3B82F6,#A855F7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">Preventiva</i> no calendário<br/>não é preventiva<br/>na operação.', sub: 'O plano existe. A execução escorrega. E a quebra volta.' },
              { kind: 'content', overline: 'Ponto 01', title: 'O plano é perfeito.<br/><i style="color:#DC2626;font-style:normal;">A execução<br/>é parcial.</i>', body: 'Cronograma aprovado pelo PCM. Mas o turno priorizou produção. A preventiva foi adiada. De novo.' },
              { kind: 'content', overline: 'Ponto 02', bigNumber: '42%', title: 'das preventivas<br/>atrasam ou são<br/>canceladas.', body: 'A causa não é má vontade. É falta de previsibilidade de parada, peça e equipe.' },
              { kind: 'content', overline: 'Ponto 03', title: 'Quem adia, paga.', body: 'A preventiva perdida hoje vira corretiva amanhã. Com mais peça, mais hora-extra, mais cliente parado.' },
              { kind: 'content', overline: 'Ponto 04', title: 'O plano precisa caber<br/>na rotina.', body: 'Plano que ignora janela de produção, estoque e capacidade de equipe é plano de gaveta.' },
              { kind: 'content', overline: 'O ponto', title: 'Preventiva real<br/>é integrada.<br/>Não é decreto.', body: 'PCM + produção + estoque + equipe — alinhados ou não acontece.' },
              { kind: 'cta', title: 'MAINTOR sincroniza<br/>plano e <i style="background:linear-gradient(90deg,#3B82F6,#A855F7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">execução</i>.', body: 'Janela de parada, disponibilidade de peça, escala de técnico — tudo num lugar só.', cta: 'Falar com especialista' },
            ],
          },
        },
        {
          id: '20-02',
          template: 'PostAutoridade',
          title: 'Post · Plano que ninguém executa',
          channel: 'LinkedIn',
          data: {
            pillar: 'Autoridade técnica',
            photo: 'assets/img/02_tecnicos_epi/operador-tablet-chao-01.jpg', scrim: 80,
            headline: 'O plano <i style="background:linear-gradient(90deg,#2563EB,#7C3AED);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">preventivo</i><br/>perfeito que<br/>ninguém executa.',
            sub: 'Excelência no PCM não vira disponibilidade se a execução tropeca em produção, estoque ou escala.',
            hash: '#AUTORIDADE',
          },
        },
        {
          id: '20-03',
          template: 'FraseMae',
          title: 'Frase forte · Plano no papel',
          channel: 'LinkedIn + Instagram',
          data: {
            pillar: 'Impacto financeiro',
            photo: 'assets/img/06_ferramentas_bancada/os-estruturada-topdown-01.jpg', scrim: 70,
            quote: 'Plano no papel<br/>não vira<br/>disponibilidade<br/>na linha.',
            hash: '#FRASE',
          },
        },
        {
          id: '20-04',
          template: 'DadoImpacto',
          title: 'Dado · 42% das preventivas atrasam',
          channel: 'LinkedIn',
          data: {
            pillar: 'Impacto financeiro',
            overline: 'O custo da preventiva adiada',
            headline: 'Em indústrias brasileiras de médio porte, em média',
            currency: '',
            number: '42',
            suffix: '%',
            unit: 'das preventivas<br/>atrasam ou<br/>não acontecem',
            noteTitle: 'A maior parte vira corretiva.',
            noteBody: 'Com peça emergencial, hora-extra, produção parada e relatório no final do mês com explicações.',
            hash: '#IMPACTO',
          },
        },
        {
          id: '20-05',
          template: 'StoryReel',
          title: 'Stories · Preventiva planejada ou improvisada',
          channel: 'Instagram Stories',
          data: {
            pillar: 'Dor operacional',
            hook: 'Sua <i style="background:linear-gradient(90deg,#3B82F6,#A855F7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">preventiva</i><br/>é planejada<br/>ou improvisada?',
            sub: 'Teste rápido: 4 perguntas que separam plano de execução.',
            photo: 'assets/img/05_paineis_eletricos/painel-sensor-retrofit-01.jpg', scrim: 68,
            hash: 'STORIES · S20',
          },
        },
        {
          id: '20-06',
          template: 'LinkedInArtigo',
          title: 'Artigo · 4 motivos da preventiva não acontecer',
          channel: 'LinkedIn (artigo longo)',
          data: {
            pillar: 'Autoridade técnica',
            overline: 'Artigo · 5 min de leitura',
            photo: 'assets/img/09_ambiente_geral/broll-corredor-planta-01.jpg', scrim: 72,
            title: 'Os 4 motivos pelos quais sua preventiva não acontece.',
            sub: 'Não é falta de plano. É falta de integração. Veja onde a execução escorrega.',
            items: [
              'Motivo 1: produção bloqueia a janela de parada',
              'Motivo 2: peça crítica não está no estoque',
              'Motivo 3: equipe alocada em corretiva urgente',
              'Motivo 4: indicador de cumprimento é cosmético',
            ],
            author: 'Equipe MAINTOR',
          },
        },
      ],
    },
    {
      id: '2026-05-W19',
      number: 19,
      year: 2026,
      label: 'Semana 19',
      dates: '5–12 Maio',
      theme: 'O indicador que existe mas não muda decisão',
      pillar: 'autoridade',
      pieces: [
        {
          id: '19-01',
          template: 'PostAutoridade',
          title: 'Post autoridade · MTBF sem contexto',
          channel: 'LinkedIn',
          data: {
            pillar: 'Autoridade técnica',
            photo: 'assets/img/09_ambiente_geral/sala-controle-warroom-01.jpg', scrim: 80,
            headline: 'MTBF sem <i style="background:linear-gradient(90deg,#2563EB,#7C3AED);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">contexto</i> é número.<br/>Não é gestão.',
            sub: 'Você apresenta 450h de MTBF. E daí? Pra qual ativo? Melhorou ou piorou? Por quê?',
            hash: '#AUTORIDADE',
          },
        },
        {
          id: '19-02',
          template: 'FraseMae',
          title: 'Frase forte · Se não muda decisão',
          channel: 'LinkedIn + Instagram',
          data: {
            pillar: 'Impacto financeiro',
            photo: 'assets/img/02_tecnicos_epi/retrato-tecnico-01.jpg', scrim: 70,
            quote: 'Se o indicador não muda a decisão,<br/>ele só muda o slide.',
            hash: '#FRASE',
          },
        },
        {
          id: '19-03',
          template: 'DadoImpacto',
          title: 'Dado · 81% indicadores ignorados',
          channel: 'LinkedIn',
          data: {
            pillar: 'Impacto financeiro',
            overline: 'O custo do indicador decorativo',
            headline: 'Dos gestores que coletam indicadores de manutenção, dizem que',
            currency: '',
            number: '81',
            suffix: '%',
            unit: 'não usam<br/>na tomada de<br/>decisão real',
            noteTitle: 'Indicador sem decisão é só custo de coleta.',
            noteBody: 'Tempo do analista, ferramenta, relatório — tudo paga para não mudar nada.',
            hash: '#IMPACTO',
          },
        },
        {
          id: '19-04',
          template: 'StoryReel',
          title: 'Stories · Teste de indicadores',
          channel: 'Instagram Stories',
          data: {
            pillar: 'Dor operacional',
            hook: 'Quantos dos seus<br/>indicadores<br/>mudam decisão?',
            sub: 'Responda no slider abaixo. Anonimato garantido.',
            photo: 'assets/img/10_dados_telas/dashboard-tablet-luva-01.jpg', scrim: 68,
            hash: 'STORIES · S19',
          },
        },
        {
          id: '19-05',
          template: 'LinkedInArtigo',
          title: 'Artigo · Peça-mãe',
          channel: 'LinkedIn (artigo longo)',
          data: {
            pillar: 'Autoridade técnica',
            overline: 'Artigo · 4 min de leitura',
            photo: 'assets/img/10_dados_telas/ia-copilot-engenheira-01.jpg', scrim: 72,
            title: 'Indicador que não muda decisão é só decoração de relatório.',
            sub: 'A coleta tem custo. Se a leitura não vira ação, você está pagando para reportar — não para gerir.',
            items: [
              'Por que MTBF sem benchmark não decide nada',
              'Disponibilidade isolada vs. disponibilidade por criticidade',
              'Pareto que ninguém olha (e por quê)',
              'O check de saúde: 3 perguntas pra cada indicador da sua planta',
            ],
            author: 'Equipe MAINTOR',
          },
        },
        {
          id: '19-06',
          template: 'CarrosselSlide',
          title: 'Carrossel · 5 sinais de indicadores fracos',
          channel: 'Instagram',
          data: {
            pillar: 'Dor operacional',
            slides: [
              { kind: 'cover', title: '5 sinais de que seus indicadores<br/>não <i style="background:linear-gradient(90deg,#3B82F6,#A855F7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">trabalham</i> pra você.', sub: 'Diagnóstico rápido pra supervisor e coordenador de manutenção.' },
              { kind: 'content', overline: 'Sinal 01', title: 'Ninguém pergunta sobre<br/>eles na reunião.', body: 'Se MTBF e MTTR não entram na pauta de priorização, eles são overhead de coleta.' },
              { kind: 'content', overline: 'Sinal 02', title: 'Você não sabe a meta.', body: 'Indicador sem meta é número. Meta dá contexto. Contexto vira decisão.' },
              { kind: 'content', overline: 'Sinal 03', title: 'O número é o mesmo<br/>todo mês.', body: 'Indicador que não oscila não está medindo nada real. Ou a coleta é frouxa, ou a operação está estática (improvável).' },
              { kind: 'content', overline: 'Sinal 04', title: 'Falta granularidade.', body: 'Disponibilidade da planta inteira diz pouco. Disponibilidade por ativo crítico decide investimento.' },
              { kind: 'content', overline: 'Sinal 05', title: 'O dono do indicador<br/>não é o tomador<br/>de decisão.', body: 'Quem coleta não decide. Quem decide não vê. Indicador vira ritual de relatório.' },
              { kind: 'cta', title: 'A MAINTOR foi construída<br/>pra acabar com<br/>indicador decorativo.', body: 'Cada KPI tem dono, meta, contexto e ação sugerida. Direto no fluxo de OS.', cta: 'Falar com especialista' },
            ],
          },
        },
      ],
    },
    {
      id: '2026-04-W18',
      number: 18,
      year: 2026,
      label: 'Semana 18',
      dates: '28 Abr–5 Mai',
      theme: 'WhatsApp, planilha e memória',
      pillar: 'dor',
      pieces: [
        {
          id: '18-01',
          template: 'CarrosselSlide',
          title: 'Carrossel mãe · WhatsApp resolve urgência',
          channel: 'LinkedIn',
          data: {
            pillar: 'Dor operacional',
            slides: [
              { kind: 'cover', title: 'WhatsApp resolve <i style="background:linear-gradient(90deg,#3B82F6,#A855F7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">urgência</i>.<br/>Não resolve <i style="background:linear-gradient(90deg,#3B82F6,#A855F7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">gestão</i>.', sub: 'A operação que ainda vive de mensagem, planilha e memória de equipe.' },
              { kind: 'content', overline: 'Ponto 01', title: 'A urgência é resolvida<br/>no grupo.<br/><i style="color:#DC2626;font-style:normal;">A informação some<br/>no histórico.</i>', body: 'WhatsApp é rápido. Mas não é rastreável. O chamado foi resolvido? Sim. Você consegue provar 30 dias depois? Não.' },
              { kind: 'content', overline: 'Ponto 02', bigNumber: '73%', title: 'dos técnicos perdem<br/>informação em<br/>apps informais.', body: 'Planilha funciona até alguém sair de férias. WhatsApp funciona até o grupo ficar cheio. Memória funciona até a pessoa sair.' },
              { kind: 'content', overline: 'Ponto 03', title: 'A planilha não escala.<br/>A maturidade sim.', body: 'Ferramenta informal cresce em complexidade até quebrar. Sistema cresce em maturidade até virar vantagem competitiva.' },
              { kind: 'content', overline: 'Ponto 04', title: 'Memória não é gestão.', body: 'Se a operação depende do que está na cabeça de uma pessoa, não há operação. Há dependência.' },
              { kind: 'content', overline: 'O ponto', title: 'Urgência ≠ gestão.', body: 'Resolver hoje é tarefa. Aprender com a falha é gestão. Tornar isso processo é maturidade.' },
              { kind: 'cta', title: 'MAINTOR transforma<br/>chamado em <i style="background:linear-gradient(90deg,#3B82F6,#A855F7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">processo</i>.', body: 'Ordem de serviço estruturada, histórico rastreável, indicadores que cabem na rotina. Sem fricção com a equipe.', cta: 'Agendar diagnóstico' },
            ],
          },
        },
        {
          id: '18-02',
          template: 'PostAutoridade',
          title: 'Post · Planilha não escala',
          channel: 'LinkedIn',
          data: {
            pillar: 'Autoridade técnica',
            photo: 'assets/img/10_dados_telas/antes-depois-papel-tablet-01.jpg', scrim: 80,
            headline: 'A planilha não escala.<br/>A <i style="background:linear-gradient(90deg,#2563EB,#7C3AED);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">maturidade</i> sim.',
            sub: 'Ferramentas informais resolvem hoje. Mas travam amanhã. Maturidade operacional é o que escala com a empresa.',
            hash: '#AUTORIDADE',
          },
        },
        {
          id: '18-03',
          template: 'FraseMae',
          title: 'Frase forte · WhatsApp e gestão',
          channel: 'LinkedIn + Instagram',
          data: {
            pillar: 'Impacto financeiro',
            photo: 'assets/img/02_tecnicos_epi/engenheira-confiabilidade-01.jpg', scrim: 70,
            quote: 'O WhatsApp resolve<br/>o chamado.<br/><br/>Quem resolve<br/>a gestão?',
            hash: '#FRASE',
          },
        },
        {
          id: '18-04',
          template: 'StoryReel',
          title: 'Stories · Teste de gestão',
          channel: 'Instagram Stories',
          data: {
            pillar: 'Dor operacional',
            hook: 'Sua gestão<br/>depende de<br/>memória?',
            sub: 'Teste rápido. 3 perguntas. Responda nas próximas telas.',
            photo: 'assets/img/02_tecnicos_epi/selfie-tecnico-ugc-01.jpg', scrim: 68,
            hash: 'STORIES · S18',
          },
        },
        {
          id: '18-05',
          template: 'DadoImpacto',
          title: 'Dado · Tempo no WhatsApp',
          channel: 'Instagram',
          data: {
            pillar: 'Impacto financeiro',
            overline: 'O custo invisível da conversa',
            headline: 'Equipes de manutenção que usam apenas WhatsApp gastam, em média,',
            currency: '',
            number: '4,2',
            suffix: 'h',
            unit: 'por dia<br/>rolando<br/>conversa',
            noteTitle: 'É quase metade do turno.',
            noteBody: 'Procurando histórico, pedindo confirmação, rastreando o que ficou pendente.',
            hash: '#IMPACTO',
          },
        },
        {
          id: '18-06',
          template: 'LinkedInArtigo',
          title: 'Artigo · Os 4 níveis de maturidade',
          channel: 'LinkedIn (artigo longo)',
          data: {
            pillar: 'Autoridade técnica',
            overline: 'Artigo · 5 min de leitura',
            photo: 'assets/img/10_dados_telas/antes-depois-papel-tablet-01.jpg', scrim: 72,
            title: 'Os 4 níveis de maturidade da gestão de manutenção.',
            sub: 'De WhatsApp ao preditivo. Identifique em qual nível sua planta está hoje.',
            items: [
              'Nível 1: WhatsApp, planilha e memória',
              'Nível 2: ERP genérico ou módulo de manutenção',
              'Nível 3: CMMS estruturado com OS e histórico',
              'Nível 4: Plataforma integrada com preditivo e IA',
            ],
            author: 'Equipe MAINTOR',
          },
        },
      ],
    },
    {
      id: '2025-04-W17',
      number: 17,
      year: 2025,
      label: 'Semana 17',
      dates: '22–28 Abril 2025',
      theme: 'Causa raiz e aprendizado',
      pillar: 'autoridade',
      pieces: [
        {
          id: '17-01',
          template: 'PostAutoridade',
          title: 'Post · 68% sem causa raiz',
          channel: 'LinkedIn',
          data: {
            pillar: 'Autoridade técnica',
            photo: 'assets/img/03_maos_trabalhando/instalacao-sensor-macro-01.jpg', scrim: 80,
            headline: '68% das OS<br/>não registram<br/>a <i style="background:linear-gradient(90deg,#2563EB,#7C3AED);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">causa raiz</i>.',
            sub: 'Sem causa raiz, sua manutenção repete o mesmo erro. E paga duas vezes.',
            hash: '#AUTORIDADE',
          },
        },
        {
          id: '17-02',
          template: 'FraseMae',
          title: 'Frase · Menos improviso',
          channel: 'Instagram',
          data: {
            pillar: 'Marca',
            photo: 'assets/img/02_tecnicos_epi/equipe-maintor-01.jpg', scrim: 70,
            quote: 'Menos improviso.<br/>Mais controle.',
            hash: '#MARCA',
          },
        },
        {
          id: '17-03',
          template: 'DadoImpacto',
          title: 'Dado · R$ 42 mil/hora',
          channel: 'LinkedIn',
          data: {
            pillar: 'Impacto financeiro',
            overline: 'O custo invisível da parada',
            headline: 'Cada hora de máquina crítica parada custa em média',
            currency: 'R$',
            number: '42',
            suffix: 'mil',
            unit: 'por hora<br/>em indústrias<br/>de médio porte',
            noteTitle: 'Não aparece no relatório.',
            noteBody: 'Aparece na operação, na meta não batida, no cliente que não recebeu — e no turno seguinte.',
            hash: '#IMPACTO',
          },
        },
      ],
    },
  ],
};

// ============================================================
// STORE
// ============================================================

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      // Merge: adicionar rodadas novas do seed que ainda não estão no saved state
      const savedIds = new Set(saved.rodadas.map(r => r.id));
      const newRodadas = seedData.rodadas.filter(r => !savedIds.has(r.id));
      if (newRodadas.length > 0) {
        const merged = { ...saved, rodadas: [...newRodadas, ...saved.rodadas] };
        saveState(merged);
        return merged;
      }
      return saved;
    }
  } catch (e) {
    console.warn('Failed to load state', e);
  }
  return seedData;
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to save state', e);
  }
}

function resetState() {
  localStorage.removeItem(STORAGE_KEY);
  return seedData;
}

// React hook
function useStore() {
  const [state, setState] = React.useState(() => loadState());

  const updatePiece = (rodadaId, pieceId, key, value) => {
    setState(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const rodada = next.rodadas.find(r => r.id === rodadaId);
      if (!rodada) return prev;
      const piece = rodada.pieces.find(p => p.id === pieceId);
      if (!piece) return prev;
      piece.data[key] = value;
      saveState(next);
      return next;
    });
  };

  const addRodada = (rodada) => {
    setState(prev => {
      const next = { ...prev, rodadas: [rodada, ...prev.rodadas] };
      saveState(next);
      return next;
    });
  };

  const addPiece = (rodadaId, piece) => {
    setState(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const rodada = next.rodadas.find(r => r.id === rodadaId);
      if (!rodada) return prev;
      rodada.pieces.push(piece);
      saveState(next);
      return next;
    });
  };

  const deletePiece = (rodadaId, pieceId) => {
    setState(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const rodada = next.rodadas.find(r => r.id === rodadaId);
      if (!rodada) return prev;
      rodada.pieces = rodada.pieces.filter(p => p.id !== pieceId);
      saveState(next);
      return next;
    });
  };

  const reset = () => {
    const fresh = resetState();
    setState(fresh);
  };

  return { state, updatePiece, addRodada, addPiece, deletePiece, reset };
}

window.useMaintorStore = useStore;
window.MaintorSeed = seedData;
