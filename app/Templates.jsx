// MAINTOR Templates · Biblioteca de componentes React
// Cada template é um componente puro que recebe `data` (campos editáveis) e renderiza canvas em tamanho real.

const { useEffect, useRef, useState } = React;

// ============================================================
// TOKENS · cores e fontes da marca
// ============================================================
const T = {
  ink: '#0F172A', paper: '#F8FAFC', night: '#0A0E1A',
  blue600: '#2563EB', blue500: '#3B82F6', blue700: '#1D4ED8',
  violet600: '#7C3AED', violet400: '#A855F7',
  orange500: '#F59E0B', red600: '#DC2626',
  slate600: '#475569', slate500: '#64748B', slate400: '#94A3B8',
  slate300: '#CBD5E1', slate200: '#E2E8F0', slate100: '#F1F5F9',
  fontUI: "'Inter', system-ui, sans-serif",
  fontDisplay: "'Archivo Black', sans-serif",
  fontMono: "'IBM Plex Mono', ui-monospace, monospace",
  gradient: 'linear-gradient(90deg, #2563EB 0%, #7C3AED 100%)',
};

// ============================================================
// ELEMENTOS COMUNS
// ============================================================

function Wordmark({ size = 38, dark = false }) {
  return (
    <span style={{
      fontFamily: T.fontDisplay, fontWeight: 900, fontSize: size,
      letterSpacing: '-0.02em', color: dark ? '#fff' : T.ink,
      textTransform: 'uppercase', lineHeight: 1,
    }}>
      M<span style={{ color: dark ? T.blue500 : T.blue600 }}>AI</span>NTOR
    </span>
  );
}

function TechGrid({ dark = false }) {
  const color = dark ? 'rgba(255,255,255,.035)' : 'rgba(15,23,42,.045)';
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(to bottom, ${color} 1px, transparent 1px)`,
      backgroundSize: '60px 60px',
    }} />
  );
}

// Foto de fundo com scrim (véu de legibilidade) na cor da marca.
// photo: caminho relativo (ex.: 'assets/img/01_chao_de_fabrica/galpao-01.jpg')
// scrim: 0–100 · intensidade do véu (default: 78 light / 72 dark)
function PhotoBG({ photo, scrim, dark = false }) {
  if (!photo) return null;
  const base = Math.max(0, Math.min(100, scrim == null ? (dark ? 72 : 78) : Number(scrim))) / 100;
  const c = dark ? '10,14,26' : '248,250,252';
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <img
        src={photo}
        crossOrigin="anonymous"
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(105deg, rgba(${c},${Math.min(1, base + 0.12)}) 0%, rgba(${c},${base}) 55%, rgba(${c},${Math.max(0, base - 0.25)}) 100%)`,
      }} />
    </div>
  );
}

function PillarTag({ children, dark = false, dotColor = T.blue600 }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 12, alignSelf: 'flex-start',
      fontFamily: T.fontMono, fontWeight: 500, fontSize: 20,
      letterSpacing: '0.08em', textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,.65)' : T.slate600,
      padding: '10px 18px',
      border: `1.5px solid ${dark ? 'rgba(255,255,255,.2)' : T.slate300}`,
      borderRadius: 999,
      background: dark ? 'rgba(255,255,255,.04)' : 'rgba(255,255,255,.7)',
    }}>
      <span style={{ width: 9, height: 9, borderRadius: '50%', background: dotColor }} />
      {children}
    </span>
  );
}

function SigBar({ width = 180 }) {
  return (
    <div style={{
      width, height: 8, borderRadius: 999, background: T.gradient,
    }} />
  );
}

function Foot({ dark = false, meta = 'MAINTOR.COM.BR', hash = '#01' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
      <Wordmark dark={dark} />
      <div style={{
        fontFamily: T.fontMono, fontSize: 16, letterSpacing: '0.06em',
        color: dark ? 'rgba(255,255,255,.5)' : T.slate500,
        textAlign: 'right', lineHeight: 1.5,
      }}>
        {meta}<br />
        <span style={{ color: dark ? 'rgba(255,255,255,.35)' : T.slate400 }}>{hash}</span>
      </div>
    </div>
  );
}

// Editable span: contentEditable que reporta mudanças
function E({ children, onChange, style, multiline = true }) {
  const ref = useRef();
  const handleBlur = (e) => {
    if (onChange) onChange(e.currentTarget.innerHTML);
  };
  const handleKey = (e) => {
    if (!multiline && e.key === 'Enter') {
      e.preventDefault();
      e.currentTarget.blur();
    }
  };
  // Definir HTML uma única vez, evitar re-render apagando edição
  useEffect(() => {
    if (ref.current && ref.current.innerHTML !== children) {
      ref.current.innerHTML = children || '';
    }
  }, []);
  return (
    <span
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onKeyDown={handleKey}
      spellCheck={false}
      style={{ outline: 'none', ...style }}
    />
  );
}

// ============================================================
// CANVAS WRAPPER
// ============================================================

function Canvas({ width, height, dark = false, children, id }) {
  return (
    <div
      id={id}
      data-canvas
      style={{
        width, height,
        background: dark ? T.night : T.paper,
        color: dark ? '#fff' : T.ink,
        fontFamily: T.fontUI,
        position: 'relative', overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
}

function Safe({ children, inset = 80 }) {
  return (
    <div style={{
      position: 'absolute', inset,
      display: 'flex', flexDirection: 'column',
    }}>
      {children}
    </div>
  );
}

// ============================================================
// TEMPLATE 01 · Post de autoridade (1080×1350)
// ============================================================

function PostAutoridade({ data, update, canvasId }) {
  const d = data;
  return (
    <Canvas width={1080} height={1350} id={canvasId}>
      <PhotoBG photo={d.photo} scrim={d.scrim} />
      <TechGrid />
      <Safe>
        <PillarTag dotColor={T.blue600}>
          <E onChange={v => update('pillar', v)} multiline={false}>{d.pillar}</E>
        </PillarTag>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <SigBar />
          <h1 style={{
            margin: '44px 0 0', fontFamily: T.fontUI, fontWeight: 700,
            fontSize: 112, lineHeight: 1.06, letterSpacing: '-0.025em',
            color: T.ink,
          }}>
            <E onChange={v => update('headline', v)}>{d.headline}</E>
          </h1>
          <p style={{
            margin: '44px 0 0', maxWidth: 880,
            fontFamily: T.fontUI, fontWeight: 500, fontSize: 32,
            lineHeight: 1.45, color: T.slate600,
          }}>
            <E onChange={v => update('sub', v)}>{d.sub}</E>
          </p>
        </div>
        <Foot hash={d.hash || '#01'} />
      </Safe>
    </Canvas>
  );
}

// ============================================================
// TEMPLATE 02 · Frase-mãe (1080×1080)
// ============================================================

function FraseMae({ data, update, canvasId }) {
  const d = data;
  return (
    <Canvas width={1080} height={1080} dark id={canvasId}>
      <PhotoBG photo={d.photo} scrim={d.scrim} dark />
      <TechGrid dark />
      {/* Orbs decorativos */}
      <div style={{
        position: 'absolute', right: -120, bottom: -120, width: 560, height: 560,
        borderRadius: '50%', filter: 'blur(90px)',
        background: 'radial-gradient(circle, rgba(124,58,237,.5), transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', left: -100, top: -100, width: 460, height: 460,
        borderRadius: '50%', filter: 'blur(90px)',
        background: 'radial-gradient(circle, rgba(37,99,235,.35), transparent 70%)',
      }} />
      <Safe>
        <PillarTag dark dotColor={T.violet400}>
          <E onChange={v => update('pillar', v)} multiline={false}>{d.pillar}</E>
        </PillarTag>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{
            fontFamily: T.fontDisplay, fontSize: 180, lineHeight: 0.7,
            color: 'rgba(255,255,255,.08)', marginBottom: -40,
          }}>"</div>
          <h1 style={{
            margin: 0, fontFamily: T.fontUI, fontWeight: 700,
            fontSize: 96, lineHeight: 1.1, letterSpacing: '-0.025em', color: '#fff',
          }}>
            <E onChange={v => update('quote', v)}>{d.quote}</E>
          </h1>
          <div style={{ marginTop: 44 }}><SigBar /></div>
        </div>
        <Foot dark hash={d.hash || '#MARCA'} />
      </Safe>
    </Canvas>
  );
}

// ============================================================
// TEMPLATE 03 · Carrossel educativo (slide individual)
// ============================================================

function CarrosselSlide({ data, update, slideIdx, totalSlides, canvasId }) {
  const slide = data.slides[slideIdx];
  const isCover = slide.kind === 'cover';
  const isCTA = slide.kind === 'cta';
  const isLight = slide.kind === 'content';
  const updateSlide = (key, val) => {
    const slides = [...data.slides];
    slides[slideIdx] = { ...slides[slideIdx], [key]: val };
    update('slides', slides);
  };

  if (isCover) {
    return (
      <Canvas width={1080} height={1350} dark id={canvasId}>
        <TechGrid dark />
        <div style={{
          position: 'absolute', right: 80, top: 80,
          fontFamily: T.fontMono, fontWeight: 700, fontSize: 24,
          color: 'rgba(255,255,255,.4)', letterSpacing: '0.1em',
        }}>{String(slideIdx + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}</div>
        <Safe>
          <PillarTag dark dotColor={T.blue500}>
            <E onChange={v => update('pillar', v)} multiline={false}>{data.pillar}</E>
          </PillarTag>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <SigBar />
            <h1 style={{
              margin: '44px 0 0', fontFamily: T.fontUI, fontWeight: 700,
              fontSize: 100, lineHeight: 1.04, letterSpacing: '-0.025em', color: '#fff',
            }}>
              <E onChange={v => updateSlide('title', v)}>{slide.title}</E>
            </h1>
            <p style={{
              margin: '28px 0 0', maxWidth: 820,
              fontFamily: T.fontUI, fontSize: 28, lineHeight: 1.45,
              color: 'rgba(255,255,255,.7)',
            }}>
              <E onChange={v => updateSlide('sub', v)}>{slide.sub}</E>
            </p>
            <div style={{
              marginTop: 44, display: 'inline-flex', alignItems: 'center', gap: 12,
              fontFamily: T.fontMono, fontSize: 20, color: 'rgba(255,255,255,.7)',
              letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>
              Arraste <span style={{
                width: 64, height: 2, background: 'rgba(255,255,255,.7)', position: 'relative',
              }}>
                <span style={{
                  position: 'absolute', right: 0, top: -5,
                  borderLeft: '10px solid rgba(255,255,255,.7)',
                  borderTop: '6px solid transparent', borderBottom: '6px solid transparent',
                }} />
              </span>
            </div>
          </div>
          <Foot dark hash={`CARROSSEL · ${totalSlides} SLIDES`} />
        </Safe>
      </Canvas>
    );
  }

  if (isCTA) {
    return (
      <Canvas width={1080} height={1350} dark id={canvasId}>
        <TechGrid dark />
        <div style={{
          position: 'absolute', right: 80, top: 80,
          fontFamily: T.fontMono, fontWeight: 700, fontSize: 24,
          color: 'rgba(255,255,255,.4)', letterSpacing: '0.1em',
        }}>{String(slideIdx + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}</div>
        <Safe>
          <PillarTag dark dotColor={T.blue500}>MAINTOR</PillarTag>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <SigBar />
            <h2 style={{
              margin: '44px 0 24px', fontFamily: T.fontUI, fontWeight: 700,
              fontSize: 88, lineHeight: 1.05, letterSpacing: '-0.025em', color: '#fff',
            }}>
              <E onChange={v => updateSlide('title', v)}>{slide.title}</E>
            </h2>
            <p style={{
              fontFamily: T.fontUI, fontSize: 28, lineHeight: 1.5,
              color: 'rgba(255,255,255,.75)', maxWidth: 880, margin: '0 0 48px',
            }}>
              <E onChange={v => updateSlide('body', v)}>{slide.body}</E>
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 14, alignSelf: 'flex-start',
              fontFamily: T.fontUI, fontWeight: 600, fontSize: 26, color: '#fff',
              padding: '22px 34px', borderRadius: 12, background: T.gradient,
              boxShadow: '0 6px 24px rgba(124,58,237,.35)',
            }}>
              <E onChange={v => updateSlide('cta', v)} multiline={false}>{slide.cta}</E>
              <span style={{ width: 32, height: 2, background: '#fff', position: 'relative' }}>
                <span style={{
                  position: 'absolute', right: -2, top: -5,
                  borderLeft: '10px solid #fff',
                  borderTop: '6px solid transparent', borderBottom: '6px solid transparent',
                }} />
              </span>
            </div>
          </div>
          <Foot dark hash="#CTA" />
        </Safe>
      </Canvas>
    );
  }

  // Slide de conteúdo (light)
  return (
    <Canvas width={1080} height={1350} id={canvasId}>
      <TechGrid />
      <div style={{
        position: 'absolute', right: 80, top: 80,
        fontFamily: T.fontMono, fontWeight: 700, fontSize: 24,
        color: T.slate400, letterSpacing: '0.1em',
      }}>{String(slideIdx + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}</div>
      <Safe>
        <PillarTag dotColor={T.blue600}>
          <E onChange={v => updateSlide('tag', v)} multiline={false}>{slide.tag || data.pillar}</E>
        </PillarTag>
        <div style={{
          fontFamily: T.fontMono, fontWeight: 500, fontSize: 22,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: T.slate500,
          margin: '56px 0 14px',
        }}>
          <E onChange={v => updateSlide('overline', v)} multiline={false}>{slide.overline}</E>
        </div>
        {slide.bigNumber && (
          <div style={{
            fontFamily: T.fontDisplay, fontWeight: 700, fontSize: 180,
            lineHeight: 0.95, letterSpacing: '-0.03em',
            background: T.gradient,
            WebkitBackgroundClip: 'text', backgroundClip: 'text',
            WebkitTextFillColor: 'transparent', color: 'transparent',
            margin: '8px 0 0',
          }}>
            <E onChange={v => updateSlide('bigNumber', v)} multiline={false}>{slide.bigNumber}</E>
          </div>
        )}
        <h2 style={{
          margin: '24px 0', fontFamily: T.fontUI, fontWeight: 700,
          fontSize: slide.titleSize || 68, lineHeight: 1.08, letterSpacing: '-0.02em', color: T.ink,
        }}>
          <E onChange={v => updateSlide('title', v)}>{slide.title}</E>
        </h2>
        {slide.body && (
          <p style={{
            margin: '24px 0 0', fontFamily: T.fontUI, fontSize: 28,
            lineHeight: 1.5, color: T.slate600, maxWidth: 900,
          }}>
            <E onChange={v => updateSlide('body', v)}>{slide.body}</E>
          </p>
        )}
        <div style={{ flex: 1 }} />
        <Foot hash={`#${String(slideIdx + 1).padStart(2, '0')}`} />
      </Safe>
    </Canvas>
  );
}

// ============================================================
// TEMPLATE 05 · Dado de impacto (1080×1350)
// ============================================================

function DadoImpacto({ data, update, canvasId }) {
  const d = data;
  return (
    <Canvas width={1080} height={1350} id={canvasId}>
      <TechGrid />
      <Safe>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <PillarTag dotColor={T.red600}>
            <E onChange={v => update('pillar', v)} multiline={false}>{d.pillar}</E>
          </PillarTag>
          <div style={{
            fontFamily: T.fontMono, fontSize: 18, letterSpacing: '0.08em',
            color: T.slate400, textTransform: 'uppercase', textAlign: 'right',
          }}>
            <b style={{ color: T.ink, fontWeight: 700 }}>01</b> / 01 · DADO
          </div>
        </div>
        <div style={{
          fontFamily: T.fontMono, fontWeight: 500, fontSize: 26,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: T.slate500,
          margin: '64px 0 14px',
        }}>
          <E onChange={v => update('overline', v)} multiline={false}>{d.overline}</E>
        </div>
        <h2 style={{
          margin: '0 0 24px', fontFamily: T.fontUI, fontWeight: 700,
          fontSize: 56, lineHeight: 1.12, letterSpacing: '-0.02em', color: T.ink, maxWidth: 920,
        }}>
          <E onChange={v => update('headline', v)}>{d.headline}</E>
        </h2>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: 16,
          marginTop: 32, paddingTop: 28, borderTop: `1px solid ${T.slate200}`,
        }}>
          <div style={{
            fontFamily: T.fontMono, fontWeight: 700, fontSize: 260,
            lineHeight: 0.92, letterSpacing: '-0.04em', color: T.ink,
            fontVariantNumeric: 'tabular-nums',
          }}>
            <span style={{ color: T.slate500, fontSize: '0.5em', marginRight: 6 }}>
              <E onChange={v => update('currency', v)} multiline={false}>{d.currency}</E>
            </span>
            <span style={{
              background: 'linear-gradient(90deg, #DC2626 0%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text',
              WebkitTextFillColor: 'transparent', color: 'transparent',
            }}>
              <E onChange={v => update('number', v)} multiline={false}>{d.number}</E>
            </span>
            <span style={{ color: T.slate500, fontSize: '0.5em', marginLeft: 6 }}>
              <E onChange={v => update('suffix', v)} multiline={false}>{d.suffix}</E>
            </span>
          </div>
          <div style={{
            fontFamily: T.fontUI, fontWeight: 600, fontSize: 28,
            color: T.slate600, lineHeight: 1.3,
          }}>
            <E onChange={v => update('unit', v)}>{d.unit}</E>
          </div>
        </div>
        <div style={{
          marginTop: 28, padding: '18px 22px', background: '#fff',
          borderLeft: `4px solid ${T.red600}`, borderRadius: 4,
          fontFamily: T.fontUI, color: T.slate600, fontSize: 22, lineHeight: 1.5,
          boxShadow: '0 2px 8px rgba(15,23,42,.04)',
        }}>
          <b style={{ color: T.ink, fontWeight: 600 }}>
            <E onChange={v => update('noteTitle', v)}>{d.noteTitle}</E>
          </b>
          <br />
          <E onChange={v => update('noteBody', v)}>{d.noteBody}</E>
        </div>
        <div style={{ flex: 1 }} />
        <Foot hash={d.hash || '#IMPACTO'} />
      </Safe>
    </Canvas>
  );
}

// ============================================================
// TEMPLATE 07 · Story / Reel (1080×1920)
// ============================================================

function StoryReel({ data, update, canvasId }) {
  const d = data;
  return (
    <Canvas width={1080} height={1920} dark id={canvasId}>
      <PhotoBG photo={d.photo} scrim={d.scrim} dark />
      <TechGrid dark />
      <div style={{
        position: 'absolute', top: -180, right: -180, width: 560, height: 560,
        borderRadius: '50%', filter: 'blur(90px)',
        background: 'radial-gradient(circle, rgba(37,99,235,.55), transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', bottom: -100, left: -160, width: 500, height: 500,
        borderRadius: '50%', filter: 'blur(90px)',
        background: 'radial-gradient(circle, rgba(124,58,237,.4), transparent 70%)',
      }} />
      <Safe inset={96}>
        <PillarTag dark dotColor={T.violet400}>
          <E onChange={v => update('pillar', v)} multiline={false}>{d.pillar}</E>
        </PillarTag>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 36 }}>
          <SigBar width={200} />
          <h1 style={{
            margin: 0, fontFamily: T.fontUI, fontWeight: 700,
            fontSize: 120, lineHeight: 1, letterSpacing: '-0.03em', color: '#fff',
          }}>
            <E onChange={v => update('hook', v)}>{d.hook}</E>
          </h1>
          <p style={{
            margin: 0, fontFamily: T.fontUI, fontSize: 34, lineHeight: 1.4,
            color: 'rgba(255,255,255,.72)', maxWidth: 840,
          }}>
            <E onChange={v => update('sub', v)}>{d.sub}</E>
          </p>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 14,
            fontFamily: T.fontMono, fontSize: 22, color: 'rgba(255,255,255,.7)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            Arraste para cima <span style={{
              width: 70, height: 2, background: 'rgba(255,255,255,.7)', position: 'relative',
            }}>
              <span style={{
                position: 'absolute', right: 0, top: -6,
                borderLeft: '12px solid rgba(255,255,255,.7)',
                borderTop: '7px solid transparent', borderBottom: '7px solid transparent',
              }} />
            </span>
          </div>
        </div>
        <Foot dark hash={d.hash || 'STORIES'} />
      </Safe>
    </Canvas>
  );
}

// ============================================================
// TEMPLATE 08 · LinkedIn artigo (1200×628)
// ============================================================

function LinkedInArtigo({ data, update, canvasId }) {
  const d = data;
  return (
    <Canvas width={1200} height={628} id={canvasId}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', height: '100%' }}>
        <div style={{ padding: '60px 56px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <TechGrid />
          <PillarTag dotColor={T.blue600}>
            <E onChange={v => update('pillar', v)} multiline={false}>{d.pillar}</E>
          </PillarTag>
          <div style={{
            fontFamily: T.fontMono, fontWeight: 500, fontSize: 13,
            letterSpacing: '0.08em', textTransform: 'uppercase', color: T.slate500,
            margin: '30px 0 8px', position: 'relative', zIndex: 1,
          }}>
            <E onChange={v => update('overline', v)} multiline={false}>{d.overline}</E>
          </div>
          <h1 style={{
            margin: 0, fontFamily: T.fontUI, fontWeight: 700,
            fontSize: 44, lineHeight: 1.08, letterSpacing: '-0.02em', color: T.ink,
            position: 'relative', zIndex: 1,
          }}>
            <E onChange={v => update('title', v)}>{d.title}</E>
          </h1>
          <p style={{
            margin: '18px 0 0', fontFamily: T.fontUI, fontSize: 18,
            lineHeight: 1.5, color: T.slate600, maxWidth: 520,
            position: 'relative', zIndex: 1,
          }}>
            <E onChange={v => update('sub', v)}>{d.sub}</E>
          </p>
          <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <Wordmark size={28} />
            <div style={{ fontFamily: T.fontMono, fontSize: 12, color: T.slate500, letterSpacing: '0.05em' }}>
              <E onChange={v => update('author', v)}>{d.author}</E>
            </div>
          </div>
        </div>
        <div style={{
          background: 'linear-gradient(150deg, #0A0E1A 0%, #1E1B4B 100%)', color: '#fff',
          padding: '50px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <PhotoBG photo={d.photo} scrim={d.scrim} dark />
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{
              fontFamily: T.fontMono, fontSize: 12, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,.6)',
            }}>O que você vai ler</div>
            {(d.items || []).map((item, i) => (
              <div key={i} style={{
                padding: '18px 0', borderBottom: i < d.items.length - 1 ? '1px solid rgba(255,255,255,.12)' : 'none',
                display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16,
              }}>
                <div style={{
                  fontFamily: T.fontDisplay, fontWeight: 900, fontSize: 52,
                  letterSpacing: '-0.02em', lineHeight: 0.95,
                  background: 'linear-gradient(90deg, #3B82F6, #A855F7)',
                  WebkitBackgroundClip: 'text', backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent', color: 'transparent',
                }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{
                  fontFamily: T.fontUI, fontSize: 15, lineHeight: 1.35,
                  color: 'rgba(255,255,255,.78)', textAlign: 'right', maxWidth: 220,
                }}>
                  <E onChange={v => {
                    const items = [...d.items];
                    items[i] = v;
                    update('items', items);
                  }}>{item}</E>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Canvas>
  );
}

// ============================================================
// EXPORTS
// ============================================================

window.MaintorTemplates = {
  PostAutoridade,
  FraseMae,
  CarrosselSlide,
  DadoImpacto,
  StoryReel,
  LinkedInArtigo,
};
window.MaintorTokens = T;
window.MaintorPrimitives = { Wordmark, TechGrid, PillarTag, SigBar, Foot, E, Canvas, Safe, PhotoBG };
