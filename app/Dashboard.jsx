// MAINTOR Platform · Dashboard + Sidebar + Modais de criação

const { PostAutoridade, FraseMae, CarrosselSlide, DadoImpacto, StoryReel, LinkedInArtigo, AntesDepois, CitacaoCliente, MitoVerdade, Lista, Checklist, AnuncioEvento, CaseStudyKPI, AnuncioProduto, Manifesto, Bastidores } = window.MaintorTemplates;
const TPL_MAP_D = { PostAutoridade, FraseMae, CarrosselSlide, DadoImpacto, StoryReel, LinkedInArtigo, AntesDepois, CitacaoCliente, MitoVerdade, Lista, Checklist, AnuncioEvento, CaseStudyKPI, AnuncioProduto, Manifesto, Bastidores };
const TPL_DIMS_D = {
  PostAutoridade: [1080, 1350], FraseMae: [1080, 1080],
  CarrosselSlide: [1080, 1350], DadoImpacto: [1080, 1350],
  StoryReel: [1080, 1920], LinkedInArtigo: [1200, 628],
  AntesDepois: [1080, 1350], CitacaoCliente: [1080, 1080],
  MitoVerdade: [1080, 1350], Lista: [1080, 1350],
  Checklist: [1080, 1350], AnuncioEvento: [1080, 1350],
  CaseStudyKPI: [1080, 1350], AnuncioProduto: [1080, 1350],
  Manifesto: [1080, 1080], Bastidores: [1080, 1350],
};
const TPL_LABEL = {
  PostAutoridade: 'Post autoridade',
  FraseMae: 'Frase-mãe',
  CarrosselSlide: 'Carrossel',
  DadoImpacto: 'Dado de impacto',
  StoryReel: 'Story/Reel',
  LinkedInArtigo: 'Artigo LinkedIn',
  AntesDepois: 'Antes → Depois',
  CitacaoCliente: 'Citação de cliente',
  MitoVerdade: 'Mito · Verdade',
  Lista: 'Lista numerada',
  Checklist: 'Checklist',
  AnuncioEvento: 'Anúncio de evento',
  CaseStudyKPI: 'Case com KPIs',
  AnuncioProduto: 'Anúncio de produto',
  Manifesto: 'Manifesto',
  Bastidores: 'Bastidores',
};
const TPL_CHANNEL_HINT = {
  PostAutoridade: 'LinkedIn',
  FraseMae: 'LinkedIn + Instagram',
  CarrosselSlide: 'LinkedIn',
  DadoImpacto: 'LinkedIn',
  StoryReel: 'Instagram Stories',
  LinkedInArtigo: 'LinkedIn (artigo longo)',
  AntesDepois: 'LinkedIn + Instagram',
  CitacaoCliente: 'LinkedIn + Instagram',
  MitoVerdade: 'LinkedIn',
  Lista: 'LinkedIn + Instagram',
  Checklist: 'LinkedIn',
  AnuncioEvento: 'LinkedIn + Instagram',
  CaseStudyKPI: 'LinkedIn',
  AnuncioProduto: 'LinkedIn + Instagram',
  Manifesto: 'LinkedIn + Instagram',
  Bastidores: 'Instagram + LinkedIn',
};
const PILLAR_OPTS = [
  { value: 'autoridade', label: 'Autoridade técnica', dot: '#2563EB' },
  { value: 'dor', label: 'Dor operacional', dot: '#F59E0B' },
  { value: 'impacto', label: 'Impacto financeiro', dot: '#DC2626' },
  { value: 'tecnologia', label: 'Tecnologia', dot: '#7C3AED' },
  { value: 'futuro', label: 'Visão de futuro', dot: '#A855F7' },
  { value: 'marca', label: 'Marca', dot: '#3B82F6' },
];

// ============================================================
// DEFAULT DATA · esqueleto inicial para nova peça por template
// ============================================================

function getDefaultData(template) {
  switch (template) {
    case 'PostAutoridade': return {
      pillar: 'Autoridade técnica',
      headline: 'Título do post.<br/><i style="background:linear-gradient(90deg,#2563EB,#7C3AED);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">Destaque</i> aqui.',
      sub: 'Subtítulo explicativo. Provoca reflexão e estabelece autoridade técnica.',
      hash: '#AUTORIDADE',
    };
    case 'FraseMae': return {
      pillar: 'Marca',
      quote: 'Sua frase<br/>de impacto<br/>aqui.',
      hash: '#FRASE',
    };
    case 'CarrosselSlide': return {
      pillar: 'Dor operacional',
      slides: [
        { kind: 'cover', title: 'Título do <i style="background:linear-gradient(90deg,#3B82F6,#A855F7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:normal;">carrossel</i>.', sub: 'Subtítulo de capa.' },
        { kind: 'content', overline: 'Ponto 01', title: 'Primeiro ponto.', body: 'Corpo do slide com explicação detalhada.' },
        { kind: 'content', overline: 'Ponto 02', bigNumber: '00%', title: 'Big number aqui.', body: 'Contexto do número.' },
        { kind: 'content', overline: 'Ponto 03', title: 'Terceiro ponto.', body: 'Mais um corpo.' },
        { kind: 'cta', title: 'Chamada final.', body: 'Reforço de valor antes do CTA.', cta: 'Falar com especialista' },
      ],
    };
    case 'DadoImpacto': return {
      pillar: 'Impacto financeiro',
      overline: 'O dado',
      headline: 'Contextualização do dado em uma frase curta.',
      currency: '', number: '00', suffix: '%',
      unit: 'descrição<br/>do dado<br/>aqui',
      noteTitle: 'O que esse número significa.',
      noteBody: 'Explicação adicional do impacto operacional ou financeiro.',
      hash: '#IMPACTO',
    };
    case 'StoryReel': return {
      pillar: 'Dor operacional',
      hook: 'Hook<br/>principal<br/>aqui.',
      sub: 'Subtítulo do story.',
      hash: 'STORIES',
    };
    case 'LinkedInArtigo': return {
      pillar: 'Autoridade técnica',
      overline: 'Artigo · 5 min de leitura',
      title: 'Título do artigo no LinkedIn.',
      sub: 'Subtítulo que detalha o que o leitor vai aprender.',
      items: ['Tópico 1', 'Tópico 2', 'Tópico 3', 'Tópico 4'],
      author: 'Equipe MAINTOR',
    };
    case 'AntesDepois': return {
      pillar: 'Dor operacional',
      title: 'Antes × Depois com MAINTOR.',
      antesTitle: 'Como era antes',
      antesItems: ['Sintoma negativo 1', 'Sintoma negativo 2', 'Sintoma negativo 3'],
      depoisTitle: 'Como ficou',
      depoisItems: ['Resultado positivo 1', 'Resultado positivo 2', 'Resultado positivo 3'],
      hash: '#TRANSFORMAÇÃO',
    };
    case 'CitacaoCliente': return {
      pillar: 'Prova social',
      quote: 'Citação do cliente sobre o impacto de usar a MAINTOR. Uma frase forte que gera credibilidade.',
      avatar: 'MC',
      name: 'Nome do Cliente',
      role: 'Cargo · Empresa',
    };
    case 'MitoVerdade': return {
      pillar: 'Autoridade técnica',
      overline: 'Mito vs. Verdade',
      mito: 'O mito que o mercado acredita.',
      verdade: 'A verdade que a MAINTOR mostra na prática.',
      explicacao: 'Explicação adicional sobre por que isso é verdade e como impacta a operação.',
      hash: '#MITO·VERDADE',
    };
    case 'Lista': return {
      pillar: 'Autoridade técnica',
      overline: 'Lista',
      title: 'Título da lista numerada.',
      items: [
        { title: 'Item 01', body: 'Descrição do primeiro item.' },
        { title: 'Item 02', body: 'Descrição do segundo item.' },
        { title: 'Item 03', body: 'Descrição do terceiro item.' },
        { title: 'Item 04', body: 'Descrição do quarto item.' },
      ],
      hash: '#LISTA',
    };
    case 'Checklist': return {
      pillar: 'Dor operacional',
      title: 'Sua manutenção está no nível?',
      items: [
        { label: 'Pergunta 1 do checklist.', checked: false },
        { label: 'Pergunta 2 do checklist.', checked: false },
        { label: 'Pergunta 3 do checklist.', checked: false },
        { label: 'Pergunta 4 do checklist.', checked: false },
        { label: 'Pergunta 5 do checklist.', checked: false },
      ],
      scoreNote: 'Marcou menos de 3? Agende um diagnóstico gratuito.',
      hash: '#CHECKLIST',
    };
    case 'AnuncioEvento': return {
      pillar: 'Evento',
      kicker: 'Webinar gratuito',
      title: 'Título do evento.',
      description: 'Descrição curta do que será abordado e para quem é o evento.',
      date: '00 Mai',
      time: '18h00',
      duration: '60 min',
      hostInitials: 'MA',
      hostName: 'Nome do Host',
      hostRole: 'Cargo · MAINTOR',
      hash: '#EVENTO',
    };
    case 'CaseStudyKPI': return {
      pillar: 'Prova social',
      client: 'Nome do Cliente',
      context: 'Contexto resumido do caso de uso e do desafio que o cliente enfrentava.',
      kpis: [
        { label: 'KPI 1', detail: 'Detalhe do indicador.', value: '60%', direction: 'up' },
        { label: 'KPI 2', detail: 'Detalhe do indicador.', value: '40%', direction: 'down' },
        { label: 'KPI 3', detail: 'Detalhe do indicador.', value: '3x', direction: 'up' },
      ],
      quote: 'Citação curta do cliente sobre o resultado obtido.',
      attribution: 'Nome, Cargo',
      hash: '#CASE',
    };
    case 'AnuncioProduto': return {
      pillar: 'Produto',
      badge: 'Novo recurso',
      title: 'Título do anúncio do produto.',
      subtitle: 'Subtítulo explicativo do novo recurso e do valor que ele entrega.',
      mockLabel: 'PREVIEW · NOVA FUNCIONALIDADE',
      mockHeadline: 'Headline do mock do produto.',
      mockBullets: ['Benefício 1', 'Benefício 2', 'Benefício 3'],
      hash: '#LANÇAMENTO',
    };
    case 'Manifesto': return {
      pillar: 'Marca',
      statement: 'Nossa declaração de propósito em uma frase forte.',
      caption: 'Explicação curta do manifesto e do que ele representa.',
      signoff: 'O futuro da manutenção industrial',
    };
    case 'Bastidores': return {
      photoLabel: 'Bastidores',
      photoNote: '↥ Substitua por foto',
      overline: 'Por dentro da MAINTOR',
      headline: 'Título do momento de bastidores.',
      body: 'Texto curto contando uma história humana, do time, ou de campo.',
      hash: '#BASTIDORES',
    };
    default: return {};
  }
}

// ============================================================
// MINI THUMBNAIL · render escalado da peça
// ============================================================

function PieceThumb({ piece, size = 240 }) {
  const Tpl = TPL_MAP_D[piece.template];
  if (!Tpl) return <div style={{ width: size, height: size, background: '#1E293B', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8', fontFamily: 'IBM Plex Mono', fontSize: 10 }}>?</div>;
  const [w, h] = TPL_DIMS_D[piece.template];
  const scale = size / Math.max(w, h);
  const tw = w * scale;
  const th = h * scale;
  const noUpdate = () => {};
  const isCar = piece.template === 'CarrosselSlide';

  return (
    <div style={{
      width: tw, height: th, position: 'relative', overflow: 'hidden',
      borderRadius: 6, background: '#0A0E1A', flexShrink: 0,
      boxShadow: '0 8px 24px rgba(0,0,0,.3)',
    }}>
      <div style={{
        transform: `scale(${scale})`, transformOrigin: 'top left',
        position: 'absolute', top: 0, left: 0, width: w, height: h,
        pointerEvents: 'none',
      }}>
        {isCar ? (
          <CarrosselSlide data={piece.data} update={noUpdate} slideIdx={0} totalSlides={piece.data.slides.length} />
        ) : (
          <Tpl data={piece.data} update={noUpdate} />
        )}
      </div>
    </div>
  );
}

// ============================================================
// MODAL · backdrop + container reutilizável
// ============================================================

function Modal({ children, onClose, width = 560 }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(10,14,26,.6)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 20,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#fff', borderRadius: 12, width: '100%', maxWidth: width,
        maxHeight: '90vh', overflow: 'auto', boxShadow: '0 32px 80px rgba(0,0,0,.4)',
      }}>
        {children}
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%', padding: '10px 14px', borderRadius: 8,
  border: '1px solid #E2E8F0', fontFamily: 'Inter', fontSize: 14, color: '#0F172A',
  outline: 'none', transition: 'border-color .15s',
};
const labelStyle = {
  fontFamily: 'IBM Plex Mono', fontSize: 10, fontWeight: 600,
  letterSpacing: '0.08em', textTransform: 'uppercase',
  color: '#64748B', marginBottom: 6, display: 'block',
};
const btnPrimaryM = {
  fontFamily: 'IBM Plex Mono', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em',
  textTransform: 'uppercase', padding: '10px 18px', borderRadius: 6, cursor: 'pointer',
  border: 'none', background: '#2563EB', color: '#fff',
};
const btnGhostM = {
  fontFamily: 'IBM Plex Mono', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em',
  textTransform: 'uppercase', padding: '10px 18px', borderRadius: 6, cursor: 'pointer',
  border: '1px solid #E2E8F0', background: '#fff', color: '#475569',
};

// ============================================================
// NOVA RODADA · modal de criação
// ============================================================

function NewRodadaModal({ onClose, onConfirm, existingIds }) {
  const now = new Date();
  const [number, setNumber] = React.useState('');
  const [year, setYear] = React.useState(now.getFullYear());
  const [month, setMonth] = React.useState(String(now.getMonth() + 1).padStart(2, '0'));
  const [dates, setDates] = React.useState('');
  const [theme, setTheme] = React.useState('');
  const [pillar, setPillar] = React.useState('autoridade');
  const [error, setError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!number || !theme || !dates) {
      setError('Preencha Semana, Datas e Tema.');
      return;
    }
    const n = parseInt(number, 10);
    if (isNaN(n) || n < 1 || n > 53) {
      setError('Número da semana deve ser entre 1 e 53.');
      return;
    }
    const id = `${year}-${month}-W${String(n).padStart(2, '0')}`;
    if (existingIds.has(id)) {
      setError(`Já existe uma rodada com ID ${id}.`);
      return;
    }
    onConfirm({
      id, number: n, year: parseInt(year, 10),
      label: `Semana ${n}`, dates, theme, pillar,
      pieces: [],
    });
  };

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div style={{ padding: '24px 28px 20px', borderBottom: '1px solid #F1F5F9' }}>
          <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 10, letterSpacing: '0.1em', color: '#64748B', textTransform: 'uppercase', marginBottom: 6 }}>
            Nova rodada
          </div>
          <h2 style={{ margin: 0, fontFamily: 'Inter', fontSize: 22, fontWeight: 700, color: '#0F172A', letterSpacing: '-0.01em' }}>
            Criar rodada semanal
          </h2>
        </div>
        <div style={{ padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            <div>
              <label style={labelStyle}>Semana #</label>
              <input style={inputStyle} type="number" min="1" max="53" value={number} onChange={e => setNumber(e.target.value)} placeholder="22" autoFocus />
            </div>
            <div>
              <label style={labelStyle}>Mês</label>
              <select style={inputStyle} value={month} onChange={e => setMonth(e.target.value)}>
                {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0')).map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Ano</label>
              <input style={inputStyle} type="number" value={year} onChange={e => setYear(e.target.value)} />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Datas (texto)</label>
            <input style={inputStyle} value={dates} onChange={e => setDates(e.target.value)} placeholder="26 Mai – 2 Jun" />
          </div>
          <div>
            <label style={labelStyle}>Tema da semana</label>
            <input style={inputStyle} value={theme} onChange={e => setTheme(e.target.value)} placeholder="Ex.: O custo invisível da parada não-planejada" />
          </div>
          <div>
            <label style={labelStyle}>Pilar predominante</label>
            <select style={inputStyle} value={pillar} onChange={e => setPillar(e.target.value)}>
              {PILLAR_OPTS.map(p => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>
          {error && (
            <div style={{ fontFamily: 'Inter', fontSize: 13, color: '#DC2626', background: '#FEF2F2', padding: '10px 14px', borderRadius: 6 }}>
              {error}
            </div>
          )}
        </div>
        <div style={{ padding: '16px 28px 24px', display: 'flex', justifyContent: 'flex-end', gap: 10, borderTop: '1px solid #F1F5F9' }}>
          <button type="button" onClick={onClose} style={btnGhostM}>Cancelar</button>
          <button type="submit" style={btnPrimaryM}>+ Criar rodada</button>
        </div>
      </form>
    </Modal>
  );
}

// ============================================================
// NOVA PEÇA · modal de criação
// ============================================================

function NewPieceModal({ rodada, onClose, onConfirm }) {
  const [template, setTemplate] = React.useState('PostAutoridade');
  const [title, setTitle] = React.useState('');
  const [channel, setChannel] = React.useState(TPL_CHANNEL_HINT.PostAutoridade);
  const [error, setError] = React.useState('');

  const selectTemplate = (tpl) => {
    setTemplate(tpl);
    setChannel(TPL_CHANNEL_HINT[tpl] || '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Dê um título à peça.');
      return;
    }
    const existing = new Set(rodada.pieces.map(p => p.id));
    let n = rodada.pieces.length + 1;
    let id;
    do {
      id = `${rodada.number}-${String(n).padStart(2, '0')}`;
      n++;
    } while (existing.has(id));
    onConfirm({
      id, template, title: title.trim(),
      channel: channel.trim() || TPL_CHANNEL_HINT[template] || 'LinkedIn',
      data: getDefaultData(template),
    });
  };

  return (
    <Modal onClose={onClose} width={720}>
      <form onSubmit={handleSubmit}>
        <div style={{ padding: '24px 28px 20px', borderBottom: '1px solid #F1F5F9' }}>
          <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 10, letterSpacing: '0.1em', color: '#64748B', textTransform: 'uppercase', marginBottom: 6 }}>
            {rodada.label} · {rodada.dates}
          </div>
          <h2 style={{ margin: 0, fontFamily: 'Inter', fontSize: 22, fontWeight: 700, color: '#0F172A', letterSpacing: '-0.01em' }}>
            Nova peça
          </h2>
        </div>
        <div style={{ padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={labelStyle}>Template</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
              {Object.keys(TPL_LABEL).map(tpl => {
                const [tw, th] = TPL_DIMS_D[tpl];
                const active = tpl === template;
                return (
                  <button key={tpl} type="button" onClick={() => selectTemplate(tpl)} style={{
                    textAlign: 'left', padding: '10px 14px', borderRadius: 8, cursor: 'pointer',
                    background: active ? '#EFF6FF' : '#F8FAFC',
                    border: `1.5px solid ${active ? '#2563EB' : '#E2E8F0'}`,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10,
                  }}>
                    <div>
                      <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: active ? '#1D4ED8' : '#0F172A' }}>
                        {TPL_LABEL[tpl]}
                      </div>
                      <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 10, color: '#94A3B8', marginTop: 2, letterSpacing: '0.04em' }}>
                        {tw} × {th}
                      </div>
                    </div>
                    {active && <span style={{ color: '#2563EB', fontSize: 14, fontWeight: 700 }}>✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <label style={labelStyle}>Título da peça</label>
            <input style={inputStyle} value={title} onChange={e => setTitle(e.target.value)} placeholder="Ex.: Carrossel · Custo da parada não-planejada" autoFocus />
          </div>
          <div>
            <label style={labelStyle}>Canal</label>
            <input style={inputStyle} value={channel} onChange={e => setChannel(e.target.value)} placeholder={TPL_CHANNEL_HINT[template]} />
          </div>
          {error && (
            <div style={{ fontFamily: 'Inter', fontSize: 13, color: '#DC2626', background: '#FEF2F2', padding: '10px 14px', borderRadius: 6 }}>
              {error}
            </div>
          )}
        </div>
        <div style={{ padding: '16px 28px 24px', display: 'flex', justifyContent: 'flex-end', gap: 10, borderTop: '1px solid #F1F5F9' }}>
          <button type="button" onClick={onClose} style={btnGhostM}>Cancelar</button>
          <button type="submit" style={btnPrimaryM}>+ Criar peça</button>
        </div>
      </form>
    </Modal>
  );
}

// ============================================================
// SIDEBAR · rodadas + nova rodada + reset
// ============================================================

function Sidebar({ state, store, activeRodadaId, onSelectRodada, onGoDashboard, dashboardActive }) {
  const [showNewRodada, setShowNewRodada] = React.useState(false);

  const handleNewRodada = (rodada) => {
    store.addRodada(rodada);
    setShowNewRodada(false);
    window.location.hash = `rodada/${rodada.id}`;
  };

  const handleReset = () => {
    if (confirm('Resetar todos os edits e voltar ao conteúdo original? Suas peças e edições serão perdidas.')) {
      store.reset();
      window.location.hash = 'dashboard';
    }
  };

  const existingIds = new Set(state.rodadas.map(r => r.id));

  return (
    <aside style={{
      width: 280, background: '#0A0E1A', color: '#fff', flexShrink: 0,
      display: 'flex', flexDirection: 'column', borderRight: '1px solid #1E293B',
      height: '100vh', overflow: 'hidden',
    }}>
      <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid #1E293B', flexShrink: 0 }}>
        <div style={{
          fontFamily: 'Archivo Black', fontSize: 26, letterSpacing: '-0.02em',
          textTransform: 'uppercase', lineHeight: 1,
        }}>
          M<span style={{ color: '#3B82F6' }}>AI</span>NTOR
        </div>
        <div style={{
          fontFamily: 'IBM Plex Mono', fontSize: 11, color: 'rgba(255,255,255,.4)',
          letterSpacing: '0.1em', marginTop: 6, textTransform: 'uppercase',
        }}>
          Plataforma de Conteúdo · v2.0
        </div>
      </div>

      <div style={{ padding: '16px 12px', flex: 1, overflowY: 'auto' }}>
        <button onClick={onGoDashboard} style={{
          width: '100%', textAlign: 'left', padding: '10px 14px', borderRadius: 6,
          background: dashboardActive ? 'rgba(37,99,235,.15)' : 'transparent',
          border: 'none', color: dashboardActive ? '#3B82F6' : 'rgba(255,255,255,.85)',
          fontFamily: 'Inter', fontSize: 13, fontWeight: 600, cursor: 'pointer',
          marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ fontSize: 14 }}>◧</span> Dashboard
        </button>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '12px 14px 8px',
        }}>
          <span style={{
            fontFamily: 'IBM Plex Mono', fontSize: 10, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,.4)',
          }}>
            Rodadas semanais
          </span>
          <button onClick={() => setShowNewRodada(true)} title="Nova rodada" style={{
            background: 'rgba(37,99,235,.2)', border: 'none', color: '#3B82F6',
            cursor: 'pointer', padding: '2px 8px', borderRadius: 4,
            fontFamily: 'IBM Plex Mono', fontSize: 11, fontWeight: 700, lineHeight: 1,
          }}>+</button>
        </div>

        {state.rodadas.map(r => {
          const active = r.id === activeRodadaId;
          return (
            <button key={r.id} onClick={() => onSelectRodada(r.id)} style={{
              width: '100%', textAlign: 'left', padding: '12px 14px', borderRadius: 6,
              background: active ? 'rgba(37,99,235,.15)' : 'transparent',
              border: 'none', cursor: 'pointer', marginBottom: 4,
              color: 'rgba(255,255,255,.9)', display: 'flex', flexDirection: 'column', gap: 4,
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span style={{
                  fontFamily: 'Inter', fontSize: 13, fontWeight: 600,
                  color: active ? '#3B82F6' : '#fff',
                }}>
                  {r.label}
                </span>
                <span style={{
                  fontFamily: 'IBM Plex Mono', fontSize: 10, color: 'rgba(255,255,255,.5)',
                  background: 'rgba(255,255,255,.06)', padding: '2px 6px', borderRadius: 3,
                }}>
                  {r.pieces.length}
                </span>
              </div>
              <div style={{
                fontFamily: 'IBM Plex Mono', fontSize: 10,
                color: 'rgba(255,255,255,.5)', letterSpacing: '0.05em',
              }}>
                {r.dates}
              </div>
              <div style={{
                fontFamily: 'Inter', fontSize: 11,
                color: 'rgba(255,255,255,.6)', lineHeight: 1.3,
              }}>
                {r.theme}
              </div>
            </button>
          );
        })}
      </div>

      <div style={{
        padding: '12px 16px', borderTop: '1px solid #1E293B', flexShrink: 0,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8,
      }}>
        <div style={{
          fontFamily: 'IBM Plex Mono', fontSize: 10,
          color: 'rgba(255,255,255,.4)', letterSpacing: '0.05em', lineHeight: 1.3,
        }}>
          {state.rodadas.reduce((a, r) => a + r.pieces.length, 0)} peças · edits salvos
        </div>
        <button onClick={handleReset} title="Resetar tudo" style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'IBM Plex Mono', fontSize: 9, color: 'rgba(255,255,255,.3)',
          letterSpacing: '0.06em', padding: 0,
        }}>
          RESET
        </button>
      </div>

      {showNewRodada && (
        <NewRodadaModal
          onClose={() => setShowNewRodada(false)}
          onConfirm={handleNewRodada}
          existingIds={existingIds}
        />
      )}
    </aside>
  );
}

// ============================================================
// DASHBOARD · overview de uma rodada
// ============================================================

function Dashboard({ state, store }) {
  const totalPieces = state.rodadas.reduce((a, r) => a + r.pieces.length, 0);

  return (
    <div style={{
      flex: 1, overflowY: 'auto', background: '#F1F5F9',
    }}>
      <div style={{
        padding: '40px 48px 32px', background: '#fff',
        borderBottom: '1px solid #E2E8F0',
      }}>
        <div style={{
          fontFamily: 'IBM Plex Mono', fontSize: 11, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: '#64748B', marginBottom: 10,
        }}>
          Plataforma · visão geral
        </div>
        <h1 style={{
          margin: 0, fontFamily: 'Inter', fontWeight: 700, fontSize: 36,
          letterSpacing: '-0.02em', color: '#0F172A',
        }}>
          Conteúdo da <span style={{
            background: 'linear-gradient(90deg, #2563EB, #7C3AED)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>MAINTOR</span>
        </h1>

        <div style={{
          marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
          maxWidth: 720,
        }}>
          <Stat label="Rodadas" value={state.rodadas.length} />
          <Stat label="Peças totais" value={totalPieces} />
          <Stat label="Templates" value={Object.keys(TPL_LABEL).length} />
          <Stat label="Pilares" value={PILLAR_OPTS.length} />
        </div>
      </div>

      <div style={{ padding: '32px 48px' }}>
        <h2 style={{
          margin: '0 0 20px', fontFamily: 'Inter', fontWeight: 700,
          fontSize: 22, color: '#0F172A',
        }}>
          Rodadas
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {state.rodadas.map(r => (
            <RodadaCard key={r.id} rodada={r} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div style={{
      padding: '14px 18px', background: '#F8FAFC', borderRadius: 8,
      border: '1px solid #E2E8F0',
    }}>
      <div style={{
        fontFamily: 'IBM Plex Mono', fontSize: 10, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: '#64748B', marginBottom: 4,
      }}>
        {label}
      </div>
      <div style={{
        fontFamily: 'Archivo Black', fontSize: 28, letterSpacing: '-0.02em',
        color: '#0F172A', lineHeight: 1,
      }}>
        {value}
      </div>
    </div>
  );
}

function RodadaCard({ rodada }) {
  return (
    <div style={{
      background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12,
      padding: '20px 24px',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        marginBottom: 16, paddingBottom: 14, borderBottom: '1px solid #F1F5F9',
      }}>
        <div>
          <div style={{
            fontFamily: 'Inter', fontSize: 18, fontWeight: 700, color: '#0F172A',
          }}>
            {rodada.label} · {rodada.year}
          </div>
          <div style={{
            fontFamily: 'IBM Plex Mono', fontSize: 12, color: '#64748B',
            letterSpacing: '0.05em', marginTop: 4,
          }}>
            {rodada.dates} · {rodada.theme}
          </div>
        </div>
        <a href={`#rodada/${rodada.id}`} style={{
          fontFamily: 'IBM Plex Mono', fontSize: 11, fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.06em',
          color: '#2563EB', textDecoration: 'none', padding: '6px 12px',
          border: '1px solid #DCE8FE', borderRadius: 6, background: '#EFF6FF',
        }}>
          Abrir rodada →
        </a>
      </div>
      {rodada.pieces.length === 0 ? (
        <div style={{
          padding: '24px', background: '#F8FAFC', borderRadius: 8, border: '1px dashed #CBD5E1',
          fontFamily: 'IBM Plex Mono', fontSize: 12, color: '#94A3B8', textAlign: 'center',
          letterSpacing: '0.05em',
        }}>
          Rodada vazia · abra para adicionar peças
        </div>
      ) : (
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16,
        }}>
          {rodada.pieces.map(piece => (
            <a key={piece.id} href={`#editor/${rodada.id}/${piece.id}`} style={{
              textDecoration: 'none', color: 'inherit',
              display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              <PieceThumb piece={piece} size={200} />
              <div>
                <div style={{
                  fontFamily: 'IBM Plex Mono', fontSize: 9, fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2563EB',
                }}>
                  {TPL_LABEL[piece.template]}
                </div>
                <div style={{
                  fontFamily: 'Inter', fontSize: 13, fontWeight: 600,
                  color: '#0F172A', lineHeight: 1.3, marginTop: 2,
                }}>
                  {piece.title}
                </div>
                <div style={{
                  fontFamily: 'IBM Plex Mono', fontSize: 10, color: '#64748B',
                  marginTop: 2, letterSpacing: '0.05em',
                }}>
                  {piece.channel}
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// RODADA VIEW · galeria de uma semana com criar/deletar peça
// ============================================================

function RodadaView({ rodada, store }) {
  const [showNewPiece, setShowNewPiece] = React.useState(false);

  const handleNewPiece = (piece) => {
    store.addPiece(rodada.id, piece);
    setShowNewPiece(false);
    window.location.hash = `editor/${rodada.id}/${piece.id}`;
  };

  const handleDelete = (pieceId, pieceTitle) => {
    if (confirm(`Excluir a peça "${pieceTitle}"?`)) {
      store.deletePiece(rodada.id, pieceId);
    }
  };

  return (
    <div style={{ flex: 1, overflowY: 'auto', background: '#F1F5F9' }}>
      <div style={{
        padding: '40px 48px 32px', background: '#fff',
        borderBottom: '1px solid #E2E8F0',
      }}>
        <a href="#dashboard" style={{
          fontFamily: 'IBM Plex Mono', fontSize: 11, fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: '#64748B', textDecoration: 'none',
        }}>
          ← Voltar para Dashboard
        </a>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, marginTop: 12 }}>
          <div>
            <h1 style={{
              margin: '0 0 6px', fontFamily: 'Inter', fontWeight: 700, fontSize: 36,
              letterSpacing: '-0.02em', color: '#0F172A',
            }}>
              {rodada.label} <span style={{ color: '#94A3B8' }}>· {rodada.year}</span>
            </h1>
            <div style={{
              fontFamily: 'IBM Plex Mono', fontSize: 13, color: '#64748B',
              letterSpacing: '0.05em',
            }}>
              {rodada.dates} · Tema: <b style={{ color: '#0F172A', fontWeight: 600 }}>{rodada.theme}</b> · {rodada.pieces.length} peças
            </div>
          </div>
          <button onClick={() => setShowNewPiece(true)} style={{
            ...btnPrimaryM, padding: '10px 18px', fontSize: 12,
          }}>
            + Nova peça
          </button>
        </div>
      </div>

      <div style={{ padding: '32px 48px' }}>
        {rodada.pieces.length === 0 ? (
          <div style={{
            padding: '64px 24px', background: '#fff', border: '1px dashed #CBD5E1',
            borderRadius: 12, textAlign: 'center',
          }}>
            <div style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 600, color: '#0F172A', marginBottom: 6 }}>
              Esta rodada ainda não tem peças
            </div>
            <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 12, color: '#94A3B8', letterSpacing: '0.05em', marginBottom: 18 }}>
              Crie a primeira peça para começar a editar
            </div>
            <button onClick={() => setShowNewPiece(true)} style={btnPrimaryM}>+ Criar primeira peça</button>
          </div>
        ) : (
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24,
          }}>
            {rodada.pieces.map(piece => (
              <PieceCard
                key={piece.id}
                piece={piece}
                href={`#editor/${rodada.id}/${piece.id}`}
                onDelete={() => handleDelete(piece.id, piece.title)}
              />
            ))}
          </div>
        )}
      </div>

      {showNewPiece && (
        <NewPieceModal
          rodada={rodada}
          onClose={() => setShowNewPiece(false)}
          onConfirm={handleNewPiece}
        />
      )}
    </div>
  );
}

function PieceCard({ piece, href, onDelete }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff', padding: 16, borderRadius: 10,
        border: `1.5px solid ${hovered ? '#2563EB' : '#E2E8F0'}`,
        display: 'flex', flexDirection: 'column', gap: 10,
        transition: 'border-color .15s', position: 'relative',
      }}
    >
      <button onClick={onDelete} title="Excluir peça" style={{
        position: 'absolute', top: 8, right: 8, zIndex: 2,
        width: 28, height: 28, borderRadius: '50%',
        background: hovered ? '#FEF2F2' : 'transparent',
        border: hovered ? '1px solid #FECACA' : '1px solid transparent',
        color: hovered ? '#DC2626' : 'transparent',
        cursor: 'pointer', fontFamily: 'IBM Plex Mono', fontSize: 14, fontWeight: 700,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all .15s',
      }}>×</button>
      <a href={href} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PieceThumb piece={piece} size={240} />
        </div>
        <div>
          <div style={{
            fontFamily: 'IBM Plex Mono', fontSize: 10, fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2563EB',
          }}>
            {TPL_LABEL[piece.template]}
          </div>
          <div style={{
            fontFamily: 'Inter', fontSize: 14, fontWeight: 600,
            color: '#0F172A', lineHeight: 1.3, marginTop: 4,
          }}>
            {piece.title}
          </div>
          <div style={{
            fontFamily: 'IBM Plex Mono', fontSize: 11, color: '#64748B',
            marginTop: 2, letterSpacing: '0.05em',
          }}>
            {piece.channel}
          </div>
        </div>
      </a>
    </div>
  );
}

window.MaintorDashboard = Dashboard;
window.MaintorSidebar = Sidebar;
window.MaintorRodadaView = RodadaView;
window.MaintorPieceThumb = PieceThumb;
window.MaintorTplLabel = TPL_LABEL;
window.MaintorTplDims = TPL_DIMS_D;
window.MaintorTplMap = TPL_MAP_D;
window.MaintorGetDefaultData = getDefaultData;
