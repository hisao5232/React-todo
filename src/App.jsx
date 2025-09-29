import React, { useState } from "react";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");
  const [editIndex, setEditIndex] = useState(null); // 編集中のタスク

  // タスク追加または更新
  const addOrUpdateTask = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editIndex !== null) {
      // 編集中 → 更新処理
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = { title: title.trim(), detail: detail.trim(), date };
      updatedTasks.sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(a.date) - new Date(b.date);
      });
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // 新規追加
      const newTask = { title: title.trim(), detail: detail.trim(), date };
      const newTasks = [...tasks, newTask];
      newTasks.sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(a.date) - new Date(b.date);
      });
      setTasks(newTasks);
    }

    // 入力欄をクリア
    setTitle("");
    setDetail("");
    setDate("");
  };

  // 編集開始
  const startEdit = (index) => {
    setEditIndex(index);
    setTitle(tasks[index].title);
    setDetail(tasks[index].detail);
    setDate(tasks[index].date);
  };

  // 削除
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    if (editIndex === index) {
      setEditIndex(null);
      setTitle("");
      setDetail("");
      setDate("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans">
      {/* ヘッダー */}
      <header className="p-4 bg-gray-800 text-white text-center">
        <h1 className="text-2xl font-bold">React Vite Todo App</h1>
      </header>

      {/* メイン */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <form
          onSubmit={addOrUpdateTask}
          className="flex flex-col w-80 bg-white p-6 rounded shadow-md gap-4"
        >
          <div>
            <label className="block mb-1 font-semibold">タイトル</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border px-2 py-1 rounded w-full"
              placeholder="タスクのタイトル"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">詳細（任意）</label>
            <textarea
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              className="border px-2 py-1 rounded w-full"
              placeholder="タスクの詳細"
              rows={3}
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">期限</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>

          <button
            type="submit"
            className={`${
              editIndex !== null ? "bg-green-500 hover:bg-green-600" : "bg-primary hover:bg-blue-600"
            } text-white px-3 py-2 rounded w-full`}
          >
            {editIndex !== null ? "更新" : "追加"}
          </button>
        </form>

        {/* タスク表示 */}
        <ul className="text-left w-80 mt-6 space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="border rounded px-2 py-2 bg-grayBg shadow-sm">
              <div className="flex justify-between items-center">
                <span className="font-bold">{task.title}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(index)}
                    className="bg-yellow-500 text-white px-2 py-0.5 rounded hover:bg-yellow-600 text-sm"
                  >
                    編集
                  </button>
                  <button
                    onClick={() => deleteTask(index)}
                    className="bg-danger text-white px-2 py-0.5 rounded hover:bg-red-600 text-sm"
                  >
                    削除
                  </button>
                </div>
              </div>
              {task.detail && <p className="text-sm text-gray-600 mt-1">{task.detail}</p>}
              {task.date && <p className="text-xs text-gray-400 mt-1">期限: {task.date}</p>}
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
