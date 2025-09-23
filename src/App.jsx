function App() {
  return (
    <div className="app" style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "space-between",
      textAlign: "center",
      fontFamily: "sans-serif"
    }}>
      {/* ヘッダー / タイトル */}
      <header style={{ padding: "20px", backgroundColor: "#282c34", color: "white" }}>
        <h1>React vite todo aq</h1>
      </header>

      {/* メインコンテンツ */}
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p>ここにTODOアプリを作っていきます。</p>
      </main>

      {/* フッター */}
      <footer style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
        <small>© go-pro-world.net</small>
      </footer>
    </div>
  );
}

export default App;
