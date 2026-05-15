// MAINTOR Platform · Root component + routing

function Platform() {
  const store = window.useMaintorStore();
  const { state } = store;
  const [route, setRoute] = React.useState(parseRoute(window.location.hash));

  // Hash-based routing
  React.useEffect(() => {
    const handler = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  function parseRoute(hash) {
    const h = hash.replace(/^#/, '');
    if (!h || h === 'dashboard') return { type: 'dashboard' };
    const parts = h.split('/');
    if (parts[0] === 'rodada' && parts[1]) return { type: 'rodada', rodadaId: parts[1] };
    if (parts[0] === 'editor' && parts[1] && parts[2]) {
      return { type: 'editor', rodadaId: parts[1], pieceId: parts[2] };
    }
    return { type: 'dashboard' };
  }

  // Resolve atual rodada/piece
  let activeRodadaId = null;
  let activeRodada = null;
  let activePiece = null;
  if (route.type === 'rodada' || route.type === 'editor') {
    activeRodadaId = route.rodadaId;
    activeRodada = state.rodadas.find(r => r.id === route.rodadaId);
  }
  if (route.type === 'editor' && activeRodada) {
    activePiece = activeRodada.pieces.find(p => p.id === route.pieceId);
  }

  // Body content
  let body;
  if (route.type === 'editor' && activeRodada && activePiece) {
    const Editor = window.MaintorEditor;
    body = (
      <Editor
        piece={activePiece}
        rodada={activeRodada}
        store={store}
        onBack={() => { window.location.hash = `rodada/${activeRodada.id}`; }}
      />
    );
  } else if (route.type === 'rodada' && activeRodada) {
    const RodadaView = window.MaintorRodadaView;
    body = <RodadaView rodada={activeRodada} store={store} />;
  } else {
    const Dashboard = window.MaintorDashboard;
    body = <Dashboard state={state} store={store} />;
  }

  const Sidebar = window.MaintorSidebar;

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar
        state={state}
        store={store}
        activeRodadaId={activeRodadaId}
        dashboardActive={route.type === 'dashboard'}
        onGoDashboard={() => { window.location.hash = 'dashboard'; }}
        onSelectRodada={(id) => { window.location.hash = `rodada/${id}`; }}
      />
      {body}
    </div>
  );
}

window.MaintorPlatform = Platform;
