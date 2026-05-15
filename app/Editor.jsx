// MAINTOR Platform · Editor & Export
// Renderiza um template e permite editar inline + exportar PNG via html-to-image

const { PostAutoridade, FraseMae, CarrosselSlide, DadoImpacto, StoryReel, LinkedInArtigo, AntesDepois, CitacaoCliente, MitoVerdade, Lista, Checklist, AnuncioEvento, CaseStudyKPI, AnuncioProduto, Manifesto, Bastidores } = window.MaintorTemplates;
const TPL_MAP = { PostAutoridade, FraseMae, CarrosselSlide, DadoImpacto, StoryReel, LinkedInArtigo, AntesDepois, CitacaoCliente, MitoVerdade, Lista, Checklist, AnuncioEvento, CaseStudyKPI, AnuncioProduto, Manifesto, Bastidores };

// Dimensões por template
const TPL_DIMS = {
  PostAutoridade: [1080, 1350],
  FraseMae: [1080, 1080],
  CarrosselSlide: [1080, 1350],
  DadoImpacto: [1080, 1350],
  StoryReel: [1080, 1920],
  LinkedInArtigo: [1200, 628],
  AntesDepois: [1080, 1350],
  CitacaoCliente: [1080, 1080],
  MitoVerdade: [1080, 1350],
  Lista: [1080, 1350],
  Checklist: [1080, 1350],
  AnuncioEvento: [1080, 1350],
  CaseStudyKPI: [1080, 1350],
  AnuncioProduto: [1080, 1350],
  Manifesto: [1080, 1080],
  Bastidores: [1080, 1350],
};

// ============================================================
// EXPORT helpers
// ============================================================

async function exportPNG(node, filename = 'maintor.png', scale = 2) {
  // Garantir fontes carregadas
  await document.fonts.ready;
  await new Promise(r => setTimeout(r, 100)); // pequeno respiro

  const dataUrl = await window.htmlToImage.toPng(node, {
    pixelRatio: scale,
    backgroundColor: null,
    cacheBust: true,
    skipFonts: false,
    fontEmbedCSS: window.__maintorFontCSS || '',
  });

  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  link.click();
}

async function exportAllCarrosselSlides(piece, rodadaLabel) {
  // Para carrossel: renderizar cada slide e exportar um por um
  if (piece.template !== 'CarrosselSlide') return;
  const slides = piece.data.slides;
  const safeName = piece.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase();

  for (let i = 0; i < slides.length; i++) {
    // Trocar slide visível
    window.dispatchEvent(new CustomEvent('maintor:setSlide', { detail: { idx: i } }));
    await new Promise(r => setTimeout(r, 500)); // aguardar render

    const canvas = document.querySelector('[data-canvas]');
    if (!canvas) continue;
    await exportPNG(canvas, `${rodadaLabel}-${safeName}-${String(i + 1).padStart(2, '0')}.png`);
    await new Promise(r => setTimeout(r, 300));
  }
}

// ============================================================
// CANVAS RENDERER · escala pro viewport
// ============================================================

function CanvasViewer({ children, width, height }) {
  const wrapRef = React.useRef();
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    const compute = () => {
      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const padding = 40;
      const s = Math.min(
        (rect.width - padding) / width,
        (rect.height - padding) / height,
        1
      );
      setScale(s);
    };
    compute();
    const obs = new ResizeObserver(compute);
    if (wrapRef.current) obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, [width, height]);

  return (
    <div ref={wrapRef} style={{
      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'auto', position: 'relative', background: '#0A0E1A',
      backgroundImage: `radial-gradient(circle at 50% 40%, #1a2337 0%, #0A0E1A 75%)`,
    }}>
      <div style={{
        width: width * scale,
        height: height * scale,
        position: 'relative',
      }}>
        <div style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          position: 'absolute', top: 0, left: 0,
          width: width, height: height,
          boxShadow: '0 24px 80px rgba(0,0,0,.5)',
          borderRadius: 8,
          overflow: 'hidden',
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// EDITOR
// ============================================================

function Editor({ piece, rodada, store, onBack }) {
  const [slideIdx, setSlideIdx] = React.useState(0);
  const [exporting, setExporting] = React.useState(false);
  const TplComp = TPL_MAP[piece.template];
  const [w, h] = TPL_DIMS[piece.template] || [1080, 1350];

  // Slide navigation event
  React.useEffect(() => {
    const handler = (e) => setSlideIdx(e.detail.idx);
    window.addEventListener('maintor:setSlide', handler);
    return () => window.removeEventListener('maintor:setSlide', handler);
  }, []);

  const update = (key, value) => {
    store.updatePiece(rodada.id, piece.id, key, value);
  };

  const isCarrossel = piece.template === 'CarrosselSlide';
  const totalSlides = isCarrossel ? piece.data.slides.length : 1;

  const handleExport = async () => {
    setExporting(true);
    try {
      const canvas = document.querySelector('[data-canvas]');
      if (!canvas) throw new Error('Canvas not found');

      const safeName = piece.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
      const suffix = isCarrossel ? `-slide${String(slideIdx + 1).padStart(2, '0')}` : '';
      await exportPNG(canvas, `${rodada.id}-${safeName}${suffix}.png`);
    } catch (e) {
      console.error(e);
      alert('Erro ao exportar: ' + e.message);
    } finally {
      setExporting(false);
    }
  };

  const handleExportAll = async () => {
    if (!isCarrossel) return;
    if (!confirm(`Exportar todos os ${totalSlides} slides do carrossel?`)) return;
    setExporting(true);
    try {
      await exportAllCarrosselSlides(piece, rodada.id);
    } catch (e) {
      console.error(e);
      alert('Erro: ' + e.message);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100%',
    }}>
      {/* Toolbar */}
      <div style={{
        height: 56, background: '#fff', borderBottom: '1px solid #E2E8F0',
        display: 'flex', alignItems: 'center', gap: 16, padding: '0 20px', flexShrink: 0,
      }}>
        <button onClick={onBack} style={btnGhost}>← Voltar</button>
        <div style={{ width: 1, height: 24, background: '#E2E8F0' }} />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#0F172A' }}>{piece.title}</div>
          <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 11, color: '#64748B', letterSpacing: '0.05em' }}>
            {rodada.label} · {piece.channel} · {w}×{h}
          </div>
        </div>
        <div style={{ flex: 1 }} />
        {isCarrossel && (
          <>
            <button onClick={handleExportAll} disabled={exporting} style={btnGhost}>
              {exporting ? 'Exportando...' : `↓ Exportar todos (${totalSlides})`}
            </button>
            <div style={{ width: 1, height: 24, background: '#E2E8F0' }} />
          </>
        )}
        <button onClick={handleExport} disabled={exporting} style={btnPrimary}>
          {exporting ? 'Exportando...' : '↓ Exportar PNG'}
        </button>
      </div>

      {/* Carousel slide tabs */}
      {isCarrossel && (
        <div style={{
          padding: '10px 20px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0',
          display: 'flex', gap: 6, overflowX: 'auto', flexShrink: 0,
        }}>
          {piece.data.slides.map((s, i) => (
            <button key={i} onClick={() => setSlideIdx(i)} style={{
              ...btnGhost,
              padding: '6px 12px',
              background: i === slideIdx ? '#0F172A' : '#fff',
              color: i === slideIdx ? '#fff' : '#475569',
              border: '1px solid ' + (i === slideIdx ? '#0F172A' : '#E2E8F0'),
              fontSize: 11, fontWeight: 600,
              minWidth: 48,
            }}>
              {String(i + 1).padStart(2, '0')}
              <span style={{ marginLeft: 6, opacity: 0.6, fontSize: 10 }}>
                {s.kind === 'cover' ? 'capa' : s.kind === 'cta' ? 'cta' : '·'}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Canvas */}
      <CanvasViewer width={w} height={h}>
        {isCarrossel ? (
          <CarrosselSlide
            data={piece.data}
            update={update}
            slideIdx={slideIdx}
            totalSlides={totalSlides}
            canvasId="export-canvas"
          />
        ) : (
          <TplComp data={piece.data} update={update} canvasId="export-canvas" />
        )}
      </CanvasViewer>

      <div style={{
        padding: '8px 20px', background: '#fff', borderTop: '1px solid #E2E8F0',
        fontFamily: 'IBM Plex Mono', fontSize: 11, color: '#64748B',
        textAlign: 'center', letterSpacing: '0.05em', flexShrink: 0,
      }}>
        Clique em qualquer texto para editar · Edits salvos automaticamente
      </div>
    </div>
  );
}

const btnPrimary = {
  fontFamily: 'IBM Plex Mono', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em',
  textTransform: 'uppercase', padding: '8px 16px', borderRadius: 6, cursor: 'pointer',
  border: 'none', background: '#2563EB', color: '#fff',
};
const btnGhost = {
  fontFamily: 'IBM Plex Mono', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em',
  textTransform: 'uppercase', padding: '8px 16px', borderRadius: 6, cursor: 'pointer',
  border: '1px solid #E2E8F0', background: '#fff', color: '#0F172A',
};

window.MaintorEditor = Editor;
