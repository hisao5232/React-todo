import React, { useState } from "react";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    const newTask = { title: title.trim(), detail: detail.trim(), date };
    const newTasks = [...tasks, newTask];

    // 日付順にソート（空は最後）
    newTasks.sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(a.date) - new Date(b.date);
    });

    setTasks(newTasks);
    setTitle("");
    setDetail("");
    setDate("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans">
      {/* ヘッダー */}
      <header className="p-4 bg-gray-800 text-white text-center">
        <h1 className="text-2xl font-bold">React Vite Todo App</h1>
      </header>

      {/* メイン */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        {/* フォーム全体を中央に配置 */}
        <form
          onSubmit={addTask}
          className="flex flex-col w-80 bg-white p-6 rounded shadow-md"
        >
          <div className="mb-4">
            <label className="block text-left mb-1 font-semibold">タイトル</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border px-2 py-1 rounded w-full"
              placeholder="タスクのタイトル"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left mb-1 font-semibold">詳細（任意）</label>
            <textarea
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              className="border px-2 py-1 rounded w-full"
              placeholder="タスクの詳細"
              rows={3}
            />
          </div>

          <div className="mb-4">
            <label className="block text-left mb-1 font-semibold">期限</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 w-full"
          >
            追加
          </button>
        </form>

        {/* タスク表示 */}
        <ul className="text-left w-80 mt-6 space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="border rounded px-2 py-2 bg-gray-50 shadow-sm"
            >
              <div className="flex justify-between items-center">
                <span className="font-bold">{task.title}</span>
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 text-white px-2 py-0.5 rounded hover:bg-red-600 text-sm"
                >
                  削除
                </button>
              </div>
              {task.detail && (
                <p className="text-sm text-gray-600 mt-1">{task.detail}</p>
              )}
              {task.date && (
                <p className="text-xs text-gray-400 mt-1">期限: {task.date}</p>
              )}
            </li>
          ))}
        </ul>
      </main>

      {/* フッター */}
      <footer className="p-2 bg-gray-100 text-center">
        <small className="text-sm text-gray-600">© go-pro-world.net</small>
      </footer>
    </div>
  );
}

export default App;
