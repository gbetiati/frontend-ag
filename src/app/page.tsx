export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Studio, página inicial">
          <span className="brand-mark">S</span>
          <span>studio</span>
        </a>
        <span className="workspace-label">Workspace</span>
      </header>

      <section className="welcome-card" aria-labelledby="welcome-title">
        <p className="eyebrow">Seu espaço de conteúdo</p>
        <h1 id="welcome-title">Tudo começa com uma boa ideia.</h1>
        <p className="description">
          Organize suas marcas, produtos e conteúdos em um só lugar. Este é o
          ponto de partida do seu workspace.
        </p>
        <button className="primary-button" type="button">
          Criar primeiro conteúdo <span aria-hidden="true">→</span>
        </button>
      </section>

      <footer className="page-footer">Studio · Conteúdo para redes sociais</footer>
    </main>
  );
}
