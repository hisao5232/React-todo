function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between text-center font-sans">
      {/* ヘッダー / タイトル */}
      <header className="p-1 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold mt-0">React vite todo app</h1>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 flex items-center justify-center">
        <p className="text-lg">ここにTODOアプリを作っていきます。</p>
      </main>

      {/* フッター */}
      <footer className="p-2 bg-gray-100">
        <small className="text-sm text-gray-600">© go-pro-world.net</small>
      </footer>
    </div>
  );
}

export default App;
