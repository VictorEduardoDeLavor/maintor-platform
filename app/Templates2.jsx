// MAINTOR Templates · Pack 2 (10 novos templates)
// Estende window.MaintorTemplates

const T2 = window.MaintorTokens;
const { Wordmark: WM, TechGrid: TG, PillarTag: PT, SigBar: SB, Foot: FT, E: EE, Canvas: CV, Safe: SF } = window.MaintorPrimitives;

// ============================================================
// 07. ANTES → DEPOIS (1080×1350) — split vertical
// ============================================================

function AntesDepois({ data, update, canvasId }) {
  const d = data;
  const updateList = (kind, idx, val) => {
    const arr = [...(d[kind] || [])];
    arr[idx] = val;
    update(kind, arr);
  };
  return (
    <CV width={1080} height={1350} id={canvasId}>
      <TG />
      <SF>
        <PT dotColor={T2.red600}>
          <EE onChange={v => update('pillar', v)} multiline={false}>{d.pillar}</EE>
        </PT>
        <h2 style={{
          margin: '40px 0 28px', fontFamily: T2.fontUI, fontWeight: 700,
          fontSize: 56, lineHeight: 1.1, letterSpacing: '-0.02em', color: T2.ink,
        }}>
          <EE onChange={v => update('title', v)}>{d.title}</EE>
        </h2>

        {/* ANTES */}
        <div style={{
          background: '#fff', border: `1px solid ${T2.slate200}`,
          borderLeft: `6px solid ${T2.red600}`, borderRadius: 10,
          padding: '24px 28px', marginBottom: 18,
        }}>
          <div style={{
            fontFamily: T2.fontMono, fontWeight: 700, fontSize: 14,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: T2.red600, marginBottom: 12,
          }}>ANTES</div>
          <h3 style={{
            margin: '0 0 14px', fontFamily: T2.fontUI, fontWeight: 700,
            fontSize: 32, lineHeight: 1.2, color: T2.ink,
          }}>
            <EE onChange={v => update('antesTitle', v)}>{d.antesTitle}</EE>
          </h3>
          {(d.antesItems || []).map((item, i) => (
            <div key={i} style={{
              padding: '8px 0', borderTop: i > 0 ? `1px solid ${T2.slate100}` : 'none',
              fontFamily: T2.fontUI, fontSize: 20, color: T2.slate600, lineHeight: 1.4,
              display: 'flex', alignItems: 'flex-start', gap: 10,
            }}>
              <span style={{ color: T2.red600, fontWeight: 700, fontSize: 22, lineHeight: 1 }}>✕</span>
              <EE onChange={v => updateList('antesItems', i, v)} style={{ flex: 1 }}>{item}</EE>
            </div>
          ))}
        </div>

        {/* DEPOIS */}
        <div style={{
          background: T2.night, border: `1px solid ${T2.night}`,
          borderRadius: 10, padding: '24px 28px', position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 6,
            background: T2.gradient,
          }} />
          <div style={{
            fontFamily: T2.fontMono, fontWeight: 700, fontSize: 14,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            background: T2.gradient,
            WebkitBackgroundClip: 'text', backgroundClip: 'text',
            WebkitTextFillColor: 'transparent', color: 'transparent',
            marginBottom: 12, marginTop: 8,
          }}>DEPOIS · COM MAINTOR</div>
          <h3 style={{
            margin: '0 0 14px', fontFamily: T2.fontUI, fontWeight: 700,
            fontSize: 32, lineHeight: 1.2, color: '#fff',
          }}>
            <EE onChange={v => update('depoisTitle', v)}>{d.depoisTitle}</EE>
          </h3>
          {(d.depoisItems || []).map((item, i) => (
            <div key={i} style={{
              padding: '8px 0', borderTop: i > 0 ? '1px solid rgba(255,255,255,.08)' : 'none',
              fontFamily: T2.fontUI, fontSize: 20, color: 'rgba(255,255,255,.85)', lineHeight: 1.4,
              display: 'flex', alignItems: 'flex-start', gap: 10,
            }}>
              <span style={{ color: T2.blue500, fontWeight: 700, fontSize: 22, lineHeight: 1 }}>✓</span>
              <EE onChange={v => updateList('depoisItems', i, v)} style={{ flex: 1 }}>{item}</EE>
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }} />
        <FT hash={d.hash || '#TRANSFORMAÇÃO'} />
      </SF>
    </CV>
  );
}

// ============================================================
// 08. CITAÇÃO DE CLIENTE (1080×1080) — testimonial
// ============================================================

function CitacaoCliente({ data, update, canvasId }) {
  const d = data;
  return (
    <CV width={1080} height={1080} id={canvasId}>
      <TG />
      {/* Aspa decorativa */}
      <div style={{
        position: 'absolute', top: 40, left: 60,
        fontFamily: T2.fontDisplay, fontSize: 380, lineHeight: 0.5,
        color: T2.slate100,
        WebkitTextStroke: `2px ${T2.slate200}`,
        pointerEvents: 'none',
      }}>"</div>
      <SF>
        <PT dotColor={T2.violet600}>
          <EE onChange={v => update('pillar', v)} multiline={false}>{d.pillar}</EE>
        </PT>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
          <h2 style={{
            margin: 0, fontFamily: T2.fontUI, fontWeight: 600,
            fontSize: 44, lineHeight: 1.3, letterSpacing: '-0.015em', color: T2.ink,
          }}>
            <EE onChange={v => update('quote', v)}>{d.quote}</EE>
          </h2>
        </div>
        {/* Atribuição */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 18,
          padding: '24px 0', borderTop: `1px solid ${T2.slate200}`,
        }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: T2.gradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: T2.fontDisplay, fontSize: 28, color: '#fff',
          }}>
            <EE onChange={v => update('avatar', v)} multiline={false}>{d.avatar || 'MC'}</EE>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: T2.fontUI, fontWeight: 700, fontSize: 22, color: T2.ink }}>
              <EE onChange={v => update('name', v)} multiline={false}>{d.name}</EE>
            </div>
            <div style={{
              fontFamily: T2.fontMono, fontSize: 14, letterSpacing: '0.05em',
              color: T2.slate500, marginTop: 4,
            }}>
              <EE onChange={v => update('role', v)} multiline={false}>{d.role}</EE>
            </div>
          </div>
          <WM size={28} />
        </div>
      </SF>
    </CV>
  );
}

// ============================================================
// 09. MITO vs VERDADE (1080×1350)
// ============================================================

function MitoVerdade({ data, update, canvasId }) {
  const d = data;
  return (
    <CV width={1080} height={1350} id={canvasId}>
      <TG />
      <SF>
        <PT dotColor={T2.violet600}>
          <EE onChange={v => update('pillar', v)} multiline={false}>{d.pillar}</EE>
        </PT>
        <div style={{
          fontFamily: T2.fontMono, fontWeight: 500, fontSize: 22,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: T2.slate500,
          margin: '40px 0 12px',
        }}>
          <EE onChange={v => update('overline', v)} multiline={false}>{d.overline}</EE>
        </div>

        {/* MITO */}
        <div style={{
          background: '#FEF2F2', border: `2px solid #FECACA`,
          borderRadius: 12, padding: '28px 32px', marginBottom: 24,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14,
            fontFamily: T2.fontDisplay, fontSize: 18, letterSpacing: '0.1em',
            color: T2.red600,
          }}>
            <span style={{
              width: 38, height: 38, borderRadius: '50%', background: T2.red600,
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: T2.fontDisplay, fontSize: 22,
            }}>✕</span>
            MITO
          </div>
          <p style={{
            margin: 0, fontFamily: T2.fontUI, fontWeight: 600,
            fontSize: 30, lineHeight: 1.3, color: T2.ink,
          }}>
            <EE onChange={v => update('mito', v)}>{d.mito}</EE>
          </p>
        </div>

        {/* VERDADE */}
        <div style={{
          background: T2.night, borderRadius: 12, padding: '28px 32px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.15,
            background: T2.gradient,
            pointerEvents: 'none',
          }} />
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14,
            fontFamily: T2.fontDisplay, fontSize: 18, letterSpacing: '0.1em',
            position: 'relative',
            background: T2.gradient,
            WebkitBackgroundClip: 'text', backgroundClip: 'text',
            WebkitTextFillColor: 'transparent', color: 'transparent',
          }}>
            <span style={{
              width: 38, height: 38, borderRadius: '50%', background: T2.gradient,
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: T2.fontDisplay, fontSize: 22, WebkitTextFillColor: '#fff',
            }}>✓</span>
            VERDADE
          </div>
          <p style={{
            margin: '0 0 14px', fontFamily: T2.fontUI, fontWeight: 700,
            fontSize: 32, lineHeight: 1.25, color: '#fff', position: 'relative',
          }}>
            <EE onChange={v => update('verdade', v)}>{d.verdade}</EE>
          </p>
          <p style={{
            margin: 0, fontFamily: T2.fontUI, fontSize: 20, lineHeight: 1.5,
            color: 'rgba(255,255,255,.75)', position: 'relative',
          }}>
            <EE onChange={v => update('explicacao', v)}>{d.explicacao}</EE>
          </p>
        </div>

        <div style={{ flex: 1 }} />
        <FT hash={d.hash || '#MITO·VERDADE'} />
      </SF>
    </CV>
  );
}

// ============================================================
// 10. LISTA NUMERADA (1080×1350)
// ============================================================

function Lista({ data, update, canvasId }) {
  const d = data;
  const updateItem = (idx, key, val) => {
    const arr = [...d.items];
    arr[idx] = { ...arr[idx], [key]: val };
    update('items', arr);
  };
  return (
    <CV width={1080} height={1350} id={canvasId}>
      <TG />
      <SF>
        <PT dotColor={T2.blue600}>
          <EE onChange={v => update('pillar', v)} multiline={false}>{d.pillar}</EE>
        </PT>
        <div style={{
          fontFamily: T2.fontMono, fontWeight: 500, fontSize: 22,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: T2.slate500,
          margin: '40px 0 12px',
        }}>
          <EE onChange={v => update('overline', v)} multiline={false}>{d.overline}</EE>
        </div>
        <h2 style={{
          margin: '0 0 36px', fontFamily: T2.fontUI, fontWeight: 700,
          fontSize: 56, lineHeight: 1.12, letterSpacing: '-0.02em', color: T2.ink,
        }}>
          <EE onChange={v => update('title', v)}>{d.title}</EE>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {(d.items || []).map((item, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '90px 1fr', gap: 24,
              padding: '20px 0',
              borderTop: i > 0 ? `1px solid ${T2.slate200}` : 'none',
            }}>
              <div style={{
                fontFamily: T2.fontMono, fontWeight: 700, fontSize: 48,
                lineHeight: 1, letterSpacing: '-0.02em',
                background: T2.gradient,
                WebkitBackgroundClip: 'text', backgroundClip: 'text',
                WebkitTextFillColor: 'transparent', color: 'transparent',
                fontVariantNumeric: 'tabular-nums',
              }}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3 style={{
                  margin: '0 0 4px', fontFamily: T2.fontUI, fontWeight: 700,
                  fontSize: 26, lineHeight: 1.25, color: T2.ink,
                }}>
                  <EE onChange={v => updateItem(i, 'title', v)}>{item.title}</EE>
                </h3>
                <p style={{
                  margin: 0, fontFamily: T2.fontUI, fontSize: 18,
                  lineHeight: 1.45, color: T2.slate600,
                }}>
                  <EE onChange={v => updateItem(i, 'body', v)}>{item.body}</EE>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }} />
        <FT hash={d.hash || '#LISTA'} />
      </SF>
    </CV>
  );
}

// ============================================================
// 11. CHECKLIST AUTO-DIAGNÓSTICO (1080×1350)
// ============================================================

function Checklist({ data, update, canvasId }) {
  const d = data;
  const toggleItem = (idx) => {
    const arr = [...d.items];
    arr[idx] = { ...arr[idx], checked: !arr[idx].checked };
    update('items', arr);
  };
  const updateLabel = (idx, val) => {
    const arr = [...d.items];
    arr[idx] = { ...arr[idx], label: val };
    update('items', arr);
  };
  const checked = (d.items || []).filter(i => i.checked).length;
  const total = (d.items || []).length;
  return (
    <CV width={1080} height={1350} id={canvasId}>
      <TG />
      <SF>
        <PT dotColor={T2.orange500}>
          <EE onChange={v => update('pillar', v)} multiline={false}>{d.pillar}</EE>
        </PT>
        <div style={{
          fontFamily: T2.fontMono, fontWeight: 500, fontSize: 22,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: T2.slate500,
          margin: '40px 0 12px',
        }}>Auto-diagnóstico</div>
        <h2 style={{
          margin: '0 0 32px', fontFamily: T2.fontUI, fontWeight: 700,
          fontSize: 52, lineHeight: 1.1, letterSpacing: '-0.02em', color: T2.ink,
        }}>
          <EE onChange={v => update('title', v)}>{d.title}</EE>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {(d.items || []).map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 18,
              padding: '18px 24px', background: '#fff',
              border: `2px solid ${item.checked ? T2.blue600 : T2.slate200}`,
              borderRadius: 10,
            }}>
              <div
                onClick={() => toggleItem(i)}
                style={{
                  width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                  background: item.checked ? T2.gradient : '#fff',
                  border: `2px solid ${item.checked ? 'transparent' : T2.slate300}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: 20, fontWeight: 700, cursor: 'pointer',
                }}
              >
                {item.checked ? '✓' : ''}
              </div>
              <div style={{
                fontFamily: T2.fontUI, fontWeight: 500, fontSize: 22,
                color: item.checked ? T2.ink : T2.slate600, lineHeight: 1.3, flex: 1,
              }}>
                <EE onChange={v => updateLabel(i, v)}>{item.label}</EE>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 28, padding: '20px 24px',
          background: T2.night, borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{
              fontFamily: T2.fontMono, fontSize: 12, color: 'rgba(255,255,255,.5)',
              letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>Sua pontuação</div>
            <div style={{
              fontFamily: T2.fontDisplay, fontSize: 36, color: '#fff',
              letterSpacing: '-0.02em', lineHeight: 1,
            }}>
              {checked}<span style={{ color: 'rgba(255,255,255,.4)' }}>/{total}</span>
            </div>
          </div>
          <div style={{
            fontFamily: T2.fontUI, fontSize: 16, color: 'rgba(255,255,255,.75)',
            maxWidth: 380, textAlign: 'right', lineHeight: 1.4,
          }}>
            <EE onChange={v => update('scoreNote', v)}>{d.scoreNote}</EE>
          </div>
        </div>

        <div style={{ flex: 1 }} />
        <FT hash={d.hash || '#CHECKLIST'} />
      </SF>
    </CV>
  );
}

// ============================================================
// 12. ANÚNCIO DE EVENTO / WEBINAR (1080×1350)
// ============================================================

function AnuncioEvento({ data, update, canvasId }) {
  const d = data;
  return (
    <CV width={1080} height={1350} dark id={canvasId}>
      <TG dark />
      <div style={{
        position: 'absolute', top: -200, right: -150, width: 600, height: 600,
        borderRadius: '50%', filter: 'blur(100px)',
        background: 'radial-gradient(circle, rgba(124,58,237,.5), transparent 70%)',
      }} />
      <SF>
        <PT dark dotColor={T2.violet400}>
          <EE onChange={v => update('pillar', v)} multiline={false}>{d.pillar}</EE>
        </PT>
        <div style={{
          fontFamily: T2.fontMono, fontWeight: 700, fontSize: 18,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          background: T2.gradient,
          WebkitBackgroundClip: 'text', backgroundClip: 'text',
          WebkitTextFillColor: 'transparent', color: 'transparent',
          margin: '40px 0 12px',
        }}>
          <EE onChange={v => update('kicker', v)} multiline={false}>{d.kicker}</EE>
        </div>
        <h1 style={{
          margin: 0, fontFamily: T2.fontUI, fontWeight: 700,
          fontSize: 76, lineHeight: 1.05, letterSpacing: '-0.025em', color: '#fff',
        }}>
          <EE onChange={v => update('title', v)}>{d.title}</EE>
        </h1>
        <p style={{
          margin: '24px 0 32px', fontFamily: T2.fontUI, fontSize: 24,
          lineHeight: 1.5, color: 'rgba(255,255,255,.7)', maxWidth: 820,
        }}>
          <EE onChange={v => update('description', v)}>{d.description}</EE>
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14,
          marginBottom: 32,
        }}>
          {[
            { label: 'DATA', value: d.date, key: 'date' },
            { label: 'HORA', value: d.time, key: 'time' },
            { label: 'DURAÇÃO', value: d.duration, key: 'duration' },
          ].map((b, i) => (
            <div key={i} style={{
              padding: '18px 20px', background: 'rgba(255,255,255,.05)',
              border: '1px solid rgba(255,255,255,.1)', borderRadius: 10,
            }}>
              <div style={{
                fontFamily: T2.fontMono, fontSize: 11, color: 'rgba(255,255,255,.5)',
                letterSpacing: '0.1em', marginBottom: 6,
              }}>{b.label}</div>
              <div style={{
                fontFamily: T2.fontDisplay, fontSize: 28, color: '#fff',
                letterSpacing: '-0.02em', lineHeight: 1,
              }}>
                <EE onChange={v => update(b.key, v)} multiline={false}>{b.value}</EE>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          padding: '20px 24px', borderRadius: 12,
          background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)',
          display: 'flex', alignItems: 'center', gap: 16,
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%', background: T2.gradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: T2.fontDisplay, fontSize: 22, color: '#fff', flexShrink: 0,
          }}>
            <EE onChange={v => update('hostInitials', v)} multiline={false}>{d.hostInitials || 'MA'}</EE>
          </div>
          <div>
            <div style={{ fontFamily: T2.fontUI, fontWeight: 700, fontSize: 20, color: '#fff' }}>
              <EE onChange={v => update('hostName', v)} multiline={false}>{d.hostName}</EE>
            </div>
            <div style={{
              fontFamily: T2.fontMono, fontSize: 13, color: 'rgba(255,255,255,.6)',
              letterSpacing: '0.05em', marginTop: 4,
            }}>
              <EE onChange={v => update('hostRole', v)} multiline={false}>{d.hostRole}</EE>
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }} />
        <FT dark hash={d.hash || '#EVENTO'} />
      </SF>
    </CV>
  );
}

// ============================================================
// 13. CASE STUDY com KPIs (1080×1350)
// ============================================================

function CaseStudyKPI({ data, update, canvasId }) {
  const d = data;
  const updateKpi = (idx, key, val) => {
    const arr = [...d.kpis];
    arr[idx] = { ...arr[idx], [key]: val };
    update('kpis', arr);
  };
  return (
    <CV width={1080} height={1350} id={canvasId}>
      <TG />
      <SF>
        <PT dotColor={T2.blue600}>
          <EE onChange={v => update('pillar', v)} multiline={false}>{d.pillar}</EE>
        </PT>
        <div style={{
          fontFamily: T2.fontMono, fontWeight: 500, fontSize: 22,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: T2.slate500,
          margin: '40px 0 12px',
        }}>Caso de uso · cliente</div>
        <h2 style={{
          margin: '0 0 12px', fontFamily: T2.fontUI, fontWeight: 700,
          fontSize: 52, lineHeight: 1.1, letterSpacing: '-0.02em', color: T2.ink,
        }}>
          <EE onChange={v => update('client', v)}>{d.client}</EE>
        </h2>
        <p style={{
          margin: '0 0 32px', fontFamily: T2.fontUI, fontSize: 22,
          lineHeight: 1.5, color: T2.slate600, maxWidth: 780,
        }}>
          <EE onChange={v => update('context', v)}>{d.context}</EE>
        </p>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28,
        }}>
          {(d.kpis || []).map((k, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr auto',
              gap: 20, alignItems: 'center',
              padding: '20px 24px', background: '#fff',
              border: `1px solid ${T2.slate200}`,
              borderLeft: `4px solid ${k.direction === 'up' ? '#16A34A' : T2.red600}`,
              borderRadius: 10,
            }}>
              <div>
                <div style={{
                  fontFamily: T2.fontMono, fontSize: 13, color: T2.slate500,
                  letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4,
                }}>
                  <EE onChange={v => updateKpi(i, 'label', v)} multiline={false}>{k.label}</EE>
                </div>
                <div style={{
                  fontFamily: T2.fontUI, fontSize: 18, color: T2.ink, fontWeight: 500,
                }}>
                  <EE onChange={v => updateKpi(i, 'detail', v)}>{k.detail}</EE>
                </div>
              </div>
              <div style={{
                fontFamily: T2.fontDisplay, fontSize: 56, lineHeight: 1,
                letterSpacing: '-0.02em', color: k.direction === 'up' ? '#16A34A' : T2.red600,
                fontVariantNumeric: 'tabular-nums', display: 'flex', alignItems: 'baseline', gap: 4,
              }}>
                <span style={{ fontSize: 28 }}>{k.direction === 'up' ? '▲' : '▼'}</span>
                <EE onChange={v => updateKpi(i, 'value', v)} multiline={false}>{k.value}</EE>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          padding: '20px 24px', background: T2.night, borderRadius: 10,
          color: '#fff',
        }}>
          <div style={{
            fontFamily: T2.fontDisplay, fontSize: 24, lineHeight: 0.7,
            color: 'rgba(255,255,255,.2)', marginBottom: 4,
          }}>"</div>
          <p style={{
            margin: 0, fontFamily: T2.fontUI, fontSize: 20, lineHeight: 1.4,
            color: '#fff', fontWeight: 500,
          }}>
            <EE onChange={v => update('quote', v)}>{d.quote}</EE>
          </p>
          <div style={{
            marginTop: 12, fontFamily: T2.fontMono, fontSize: 12,
            color: 'rgba(255,255,255,.55)', letterSpacing: '0.05em',
          }}>
            — <EE onChange={v => update('attribution', v)} multiline={false}>{d.attribution}</EE>
          </div>
        </div>

        <div style={{ flex: 1 }} />
        <FT hash={d.hash || '#CASE'} />
      </SF>
    </CV>
  );
}

// ============================================================
// 14. ANÚNCIO DE PRODUTO / FEATURE (1080×1350)
// ============================================================

function AnuncioProduto({ data, update, canvasId }) {
  const d = data;
  return (
    <CV width={1080} height={1350} dark id={canvasId}>
      <TG dark />
      <SF>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10, alignSelf: 'flex-start',
          padding: '8px 16px', borderRadius: 999, background: T2.gradient,
          fontFamily: T2.fontMono, fontSize: 14, fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff' }} />
          <EE onChange={v => update('badge', v)} multiline={false}>{d.badge || 'Novo recurso'}</EE>
        </div>
        <h1 style={{
          margin: '36px 0 16px', fontFamily: T2.fontUI, fontWeight: 700,
          fontSize: 76, lineHeight: 1.05, letterSpacing: '-0.025em', color: '#fff',
        }}>
          <EE onChange={v => update('title', v)}>{d.title}</EE>
        </h1>
        <p style={{
          margin: 0, fontFamily: T2.fontUI, fontSize: 24, lineHeight: 1.5,
          color: 'rgba(255,255,255,.7)', maxWidth: 800,
        }}>
          <EE onChange={v => update('subtitle', v)}>{d.subtitle}</EE>
        </p>

        {/* Mock screenshot do produto */}
        <div style={{
          marginTop: 32, padding: '8px 8px 0', borderRadius: 12,
          background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            display: 'flex', gap: 6, padding: '8px 0 12px',
          }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,.2)' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,.2)' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,.2)' }} />
          </div>
          <div style={{
            background: '#0F172A', borderRadius: '8px 8px 0 0', padding: 28,
            height: 380,
            backgroundImage: `linear-gradient(135deg, rgba(37,99,235,.15), rgba(124,58,237,.1))`,
          }}>
            <div style={{
              fontFamily: T2.fontMono, fontSize: 12, color: 'rgba(255,255,255,.5)',
              letterSpacing: '0.08em', marginBottom: 14,
            }}>
              <EE onChange={v => update('mockLabel', v)} multiline={false}>{d.mockLabel || 'PREVIEW · NOVA FUNCIONALIDADE'}</EE>
            </div>
            <div style={{
              fontFamily: T2.fontUI, fontWeight: 700, fontSize: 38,
              color: '#fff', letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 18,
            }}>
              <EE onChange={v => update('mockHeadline', v)}>{d.mockHeadline}</EE>
            </div>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              {(d.mockBullets || []).map((b, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontFamily: T2.fontUI, fontSize: 17, color: 'rgba(255,255,255,.85)',
                }}>
                  <span style={{
                    width: 18, height: 18, borderRadius: 4,
                    background: T2.gradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, color: '#fff', fontWeight: 700,
                  }}>✓</span>
                  <EE onChange={v => {
                    const arr = [...d.mockBullets];
                    arr[i] = v;
                    update('mockBullets', arr);
                  }}>{b}</EE>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }} />
        <FT dark hash={d.hash || '#LANÇAMENTO'} />
      </SF>
    </CV>
  );
}

// ============================================================
// 15. POST INSTITUCIONAL / MANIFESTO (1080×1080)
// ============================================================

function Manifesto({ data, update, canvasId }) {
  const d = data;
  return (
    <CV width={1080} height={1080} dark id={canvasId}>
      <TG dark />
      <div style={{
        position: 'absolute', inset: 0, background: T2.gradient, opacity: 0.08,
      }} />
      <SF>
        <PT dark dotColor={T2.blue500}>
          <EE onChange={v => update('pillar', v)} multiline={false}>{d.pillar}</EE>
        </PT>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 28 }}>
          <div style={{ fontFamily: T2.fontDisplay, fontSize: 72, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1, textTransform: 'uppercase' }}>
            M<span style={{ color: T2.blue500 }}>AI</span>NTOR
          </div>
          <h1 style={{
            margin: 0, fontFamily: T2.fontUI, fontWeight: 700,
            fontSize: 56, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#fff',
          }}>
            <EE onChange={v => update('statement', v)}>{d.statement}</EE>
          </h1>
          <SB width={200} />
          <p style={{
            margin: 0, fontFamily: T2.fontUI, fontSize: 22, lineHeight: 1.5,
            color: 'rgba(255,255,255,.7)', maxWidth: 760,
          }}>
            <EE onChange={v => update('caption', v)}>{d.caption}</EE>
          </p>
        </div>
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.1)',
        }}>
          <div style={{
            fontFamily: T2.fontMono, fontSize: 13, color: 'rgba(255,255,255,.6)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            <EE onChange={v => update('signoff', v)} multiline={false}>{d.signoff || 'O futuro da manutenção industrial'}</EE>
          </div>
          <div style={{
            fontFamily: T2.fontMono, fontSize: 13, color: 'rgba(255,255,255,.4)',
            letterSpacing: '0.06em',
          }}>MAINTOR.COM.BR</div>
        </div>
      </SF>
    </CV>
  );
}

// ============================================================
// 16. BASTIDORES · momento humano (1080×1350)
// ============================================================

function Bastidores({ data, update, canvasId }) {
  const d = data;
  return (
    <CV width={1080} height={1350} id={canvasId}>
      <SF inset={0}>
        {/* Foto placeholder grande */}
        <div style={{
          height: 720, position: 'relative',
          background: `linear-gradient(135deg, #1a2337 0%, #0A0E1A 100%)`,
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,.02) 0 10px, transparent 10px 20px)`,
            opacity: 0.5,
          }} />
          <div style={{
            position: 'absolute', bottom: 36, left: 80,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 16px', borderRadius: 999,
            background: 'rgba(255,255,255,.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,.2)',
            fontFamily: T2.fontMono, fontSize: 12, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: T2.gradient }} />
            <EE onChange={v => update('photoLabel', v)} multiline={false}>{d.photoLabel || 'Bastidores'}</EE>
          </div>
          <div style={{
            position: 'absolute', top: 80, left: 80,
            fontFamily: T2.fontMono, fontSize: 11, color: 'rgba(255,255,255,.4)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            <EE onChange={v => update('photoNote', v)} multiline={false}>{d.photoNote || '↥ Substitua por foto'}</EE>
          </div>
        </div>

        {/* Conteúdo */}
        <div style={{
          flex: 1, padding: '40px 60px 60px',
          background: T2.paper, display: 'flex', flexDirection: 'column',
        }}>
          <div style={{
            fontFamily: T2.fontMono, fontWeight: 500, fontSize: 18,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: T2.violet600,
          }}>
            <EE onChange={v => update('overline', v)} multiline={false}>{d.overline}</EE>
          </div>
          <h2 style={{
            margin: '12px 0', fontFamily: T2.fontUI, fontWeight: 700,
            fontSize: 36, lineHeight: 1.2, letterSpacing: '-0.015em', color: T2.ink,
          }}>
            <EE onChange={v => update('headline', v)}>{d.headline}</EE>
          </h2>
          <p style={{
            margin: '0 0 28px', fontFamily: T2.fontUI, fontSize: 20,
            lineHeight: 1.5, color: T2.slate600, maxWidth: 880,
          }}>
            <EE onChange={v => update('body', v)}>{d.body}</EE>
          </p>
          <div style={{ flex: 1 }} />
          <FT hash={d.hash || '#BASTIDORES'} />
        </div>
      </SF>
    </CV>
  );
}

// ============================================================
// REGISTRO · estender window.MaintorTemplates
// ============================================================

Object.assign(window.MaintorTemplates, {
  AntesDepois,
  CitacaoCliente,
  MitoVerdade,
  Lista,
  Checklist,
  AnuncioEvento,
  CaseStudyKPI,
  AnuncioProduto,
  Manifesto,
  Bastidores,
});
